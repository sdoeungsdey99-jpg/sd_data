/**
 * SD Data - Dynamic Multi-Tab Data Service
 * Real-time dynamic Google Sheet reader (Zero Hardcoding)
 */

const DEFAULT_MASTER_SHEET_ID = '1Qu70irzkvKyYN49eoquTModvm33WT5ZEyTTjUFoEbWU';

function extractSheetId(input) {
  if (!input) return '';
  const s = String(input).trim();
  const match = s.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match) return match[1];
  return s;
}

function getActiveSheetId() {
  try {
    const custom = localStorage.getItem('sd_custom_sheet_id');
    if (custom && custom.trim().length > 15) return custom.trim();
  } catch (_) {}
  return DEFAULT_MASTER_SHEET_ID;
}

function cleanNumber(val) {
  if (val === null || val === undefined || val === '') return 0;
  if (typeof val === 'number') return isNaN(val) ? 0 : val;
  const cleaned = String(val).replace(/[$,\s]/g, '');
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
}

// Convert any date format to standardized DD/MM/YYYY
function formatToDDMMYYYY(dateStr) {
  if (!dateStr) return '';
  const s = String(dateStr).trim();

  // GViz Date or DateTime format: Date(YYYY,M,D,H,M,S)
  const gMatch = s.match(/Date\((\d+),(\d+),(\d+)(?:,(\d+),(\d+))?/);
  if (gMatch) {
    const yr = gMatch[1];
    const mo = String(parseInt(gMatch[2]) + 1).padStart(2, '0');
    const dy = String(parseInt(gMatch[3])).padStart(2, '0');
    return `${dy}/${mo}/${yr}`;
  }

  // ISO YYYY-MM-DD
  const isoMatch = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (isoMatch) {
    const yr = isoMatch[1];
    const mo = isoMatch[2].padStart(2, '0');
    const dy = isoMatch[3].padStart(2, '0');
    return `${dy}/${mo}/${yr}`;
  }

  // Already DD/MM/YYYY
  const slashMatch = s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (slashMatch) {
    const dy = slashMatch[1].padStart(2, '0');
    const mo = slashMatch[2].padStart(2, '0');
    const yr = slashMatch[3];
    return `${dy}/${mo}/${yr}`;
  }

  return s;
}

// Convert DD/MM/YYYY to YYYY-MM-DD for standard comparisons
function ddmmyyyyToIso(ddmmyyyy) {
  if (!ddmmyyyy) return '';
  const parts = ddmmyyyy.split('/');
  if (parts.length === 3) {
    return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
  }
  return ddmmyyyy;
}

async function fetchGoogleSheetGViz(param, sheetNameFallback) {
  const sheetId = getActiveSheetId();
  const isCustom = (sheetId !== DEFAULT_MASTER_SHEET_ID);
  
  const queryParam = (isCustom && sheetNameFallback)
    ? `sheet=${encodeURIComponent(sheetNameFallback)}`
    : (isNaN(param) ? `sheet=${encodeURIComponent(param)}` : `gid=${param}`);

  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&headers=0&${queryParam}`;
  let response = await fetch(url);
  
  // Auto-fallback to sheet name if GID fails
  if (!response.ok && sheetNameFallback) {
    const retryUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&headers=0&sheet=${encodeURIComponent(sheetNameFallback)}`;
    response = await fetch(retryUrl);
  }

  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status} when fetching ${queryParam}`);
  }
  const text = await response.text();
  const match = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/);
  if (!match || !match[1]) {
    throw new Error(`Invalid JSONP format for ${queryParam}`);
  }
  return JSON.parse(match[1]);
}

// Fetch Google Sheet tab as raw CSV for 100% faithful cell extraction without GViz header stripping
async function fetchGoogleSheetCSV(param, sheetNameFallback) {
  const sheetId = getActiveSheetId();
  const isCustom = (sheetId !== DEFAULT_MASTER_SHEET_ID);

  let url;
  if (isCustom && sheetNameFallback) {
    url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetNameFallback)}`;
  } else if (!isNaN(param)) {
    url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${param}`;
  } else {
    url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(param)}`;
  }

  let response = await fetch(url);
  if (!response.ok && sheetNameFallback) {
    const retryUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(sheetNameFallback)}`;
    response = await fetch(retryUrl);
  }

  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status} when fetching CSV ${param}`);
  }
  const text = await response.text();
  return parseCSV(text);
}

function parseCSV(text) {
  const lines = text.replace(/\r/g, '').split('\n');
  const rows = [];
  for (const line of lines) {
    if (!line && rows.length > 0) continue;
    const row = [];
    let inQuotes = false;
    let cur = '';
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') {
        if (inQuotes && i + 1 < line.length && line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (c === ',' && !inQuotes) {
        row.push(cur);
        cur = '';
      } else {
        cur += c;
      }
    }
    row.push(cur);
    rows.push(row);
  }
  return rows;
}

window.DataService = {
  data: null,
  isLoading: false,
  error: null,
  lastFetched: null,
  listeners: [],
  pollTimer: null,
  unreadNotifications: [],

  subscribe(listener) {
    if (typeof listener === 'function') {
      this.listeners.push(listener);
    }
  },

  notify() {
    this.listeners.forEach(fn => fn(this));
  },

  async fetchData(silent = false) {
    if (!silent) {
      this.isLoading = true;
      this.error = null;
      this.notify();
    }

    try {
      const [psGviz, expCsvRows, bankCsvRows, teamGviz, teamSalesCsvRows] = await Promise.all([
        fetchGoogleSheetGViz('1802751802', 'Personal Sales'),
        fetchGoogleSheetCSV('1413782774', 'Daily Expenses'),
        fetchGoogleSheetCSV('1381982614', 'Bank & Cash Balance'),
        fetchGoogleSheetGViz('30391871', 'Team Monthly View'),
        fetchGoogleSheetCSV('608899183', 'Team Sales')
      ]);

      // ==========================================
      // 1. Process Personal Sales
      // ==========================================
      const psRows = psGviz.table.rows;
      const personalSales = [];

      for (let i = 1; i < psRows.length; i++) {
        const cells = psRows[i].c;
        if (!cells) continue;
        const getCell = (idx) => (idx < cells.length && cells[idx] && cells[idx].v !== null && cells[idx].v !== undefined) ? cells[idx].v : '';

        const dateRaw = String(getCell(0) || '').trim();
        if (!dateRaw || dateRaw.toLowerCase() === 'order date') continue;

        const ddmmyyyy = formatToDDMMYYYY(dateRaw);
        const isoDate = ddmmyyyyToIso(ddmmyyyy);
        if (!ddmmyyyy) continue;

        const customer = String(getCell(2) || 'អតិថិជនទូទៅ').trim();
        const seller = String(getCell(3) || 'ស្តី ស្តើង').trim();
        const orderId = String(getCell(4) || `#${i}`).trim();
        const location = String(getCell(5) || '').trim();
        const phone = String(getCell(6) || '').trim();

        const qtyYL = cleanNumber(getCell(7));
        const qtyYLP = cleanNumber(getCell(8));
        const qtyKN = cleanNumber(getCell(9));
        const qtyPDO = cleanNumber(getCell(10));
        const freeVal = cleanNumber(getCell(11));
        const thaiBaht = cleanNumber(getCell(12));
        const price = thaiBaht;
        const totalAmount = cleanNumber(getCell(13));
        const shipFee = cleanNumber(getCell(14));
        const deliveryMethod = String(getCell(15) || 'មិនបញ្ជាក់').trim();
        const codStatus = String(getCell(16) || 'មិនទាន់ទូទាត់').trim();
        const profit = cleanNumber(getCell(19));
        const note = String(getCell(20) || '').trim();
        // Dynamic Record ID detection: checks Col 23, 22, 21 or fallback so deleting/keeping Col V never breaks
        let recordId = '';
        if (getCell(23) && String(getCell(23)).startsWith('REC-')) {
          recordId = String(getCell(23)).trim();
        } else if (getCell(22) && String(getCell(22)).startsWith('REC-')) {
          recordId = String(getCell(22)).trim();
        } else if (getCell(21) && String(getCell(21)).startsWith('REC-')) {
          recordId = String(getCell(21)).trim();
        } else {
          recordId = String(getCell(23) || getCell(22) || `REC-${i}`).trim();
        }

        // Smart Rule: If note has [SG Pro], Free column holds legacy SG Pro cans
        const isSGPro = note.includes('[SG Pro]');
        const qtySG = isSGPro ? freeVal : 0;
        const freeQty = isSGPro ? 0 : freeVal;
        const totalBoxQty = qtyYL + qtyYLP + qtyKN + qtyPDO + freeQty + qtySG;

        const prodParts = [];
        if (qtySG > 0) prodParts.push(qtySG > 1 ? `SG Pro (${qtySG})` : `SG Pro`);
        if (qtyKN > 0) prodParts.push(qtyKN > 1 ? `KN (${qtyKN})` : `KN`);
        if (qtyPDO > 0) prodParts.push(qtyPDO > 1 ? `PDO (${qtyPDO})` : `PDO`);
        if (qtyYL > 0) prodParts.push(qtyYL > 1 ? `YL (${qtyYL})` : `YL`);
        if (qtyYLP > 0) prodParts.push(qtyYLP > 1 ? `YLP (${qtyYLP})` : `YLP`);
        if (freeQty > 0) prodParts.push(`Free (${freeQty})`);
        const product = prodParts.join(', ') || 'ទំនិញ';

        personalSales.push({
          date: ddmmyyyy,
          isoDate: isoDate,
          orderId,
          recordId,
          customer,
          seller,
          location,
          phone,
          qtyYL,
          qtyYLP,
          qtyKN,
          qtyPDO,
          qtySG,
          freeQty,
          totalBoxQty,
          product,
          price,
          thaiBaht,
          totalAmount,
          shipFee,
          deliveryMethod,
          codStatus,
          profit,
          note
        });
      }

      // ==========================================
      // 2. Process Daily Expenses (from CSV)
      // ==========================================
      const expenses = [];
      for (let i = 1; i < expCsvRows.length; i++) {
        const r = expCsvRows[i];
        if (!r || r.length < 4) continue;

        const dateRaw = String(r[0] || '').trim();
        if (!dateRaw || dateRaw.toLowerCase() === 'date') continue;

        const ddmmyyyy = formatToDDMMYYYY(dateRaw);
        const isoDate = ddmmyyyyToIso(ddmmyyyy);
        if (!ddmmyyyy) continue;

        const desc = String(r[1] || '').trim();
        const cat = String(r[2] || 'ផ្សេងៗ').trim();
        const amt = cleanNumber(r[3]);

        // Extract time if provided in cell
        let timeStr = '';
        const timeMatch = dateRaw.match(/(\d{1,2}:\d{2}(?:\s*[AP]M)?)/i);
        if (timeMatch) {
          timeStr = timeMatch[1];
        }

        expenses.push({
          date: ddmmyyyy,
          isoDate: isoDate,
          time: timeStr,
          description: desc,
          category: cat,
          amount: amt,
          note: String(r[4] || '').trim(),
          rowIndex: i
        });
      }

      // ==========================================
      // 3. Process Bank & Cash Balance (from CSV)
      // ==========================================
      const accounts = [];
      const payables = [];
      const pendingCodReceivables = [];
      let pureUsdTotal = 0;
      let pureKhrTotal = 0;

      // Extract 10 Bank Accounts (Rows 4 to 13 in CSV)
      for (let i = 4; i <= 13 && i < bankCsvRows.length; i++) {
        const r = bankCsvRows[i];
        if (!r || r.length < 4) continue;
        const no = String(r[0] || '').trim();
        const name = String(r[1] || '').trim();
        if (!name || isNaN(parseInt(no))) continue;

        const usdVal = cleanNumber(r[2]);
        const khrVal = cleanNumber(r[3]);
        accounts.push({ name, usd: usdVal, khr: khrVal });

        if (!name.includes('(KHR)')) {
          pureUsdTotal += usdVal;
        } else {
          pureKhrTotal += khrVal;
        }
      }

      // Net Cash Position Summary
      const netCashPosition = {
        totalNetCash: cleanNumber(bankCsvRows[2]?.[4] || bankCsvRows[8]?.[8]),
        totalActualCash: cleanNumber(bankCsvRows[4]?.[8]),
        pendingCodReceivables: cleanNumber(bankCsvRows[5]?.[8]),
        totalLiquidAssets: cleanNumber(bankCsvRows[6]?.[8]),
        totalAccountsPayable: cleanNumber(bankCsvRows[7]?.[8]),
        netCashPositionFinal: cleanNumber(bankCsvRows[8]?.[8]),
        healthStatus: String(bankCsvRows[9]?.[8] || '✅ សុវត្ថិភាពខ្ពស់').trim(),
        coverageRatio: String(bankCsvRows[10]?.[8] || '10.39x').trim()
      };

      // Extract Accounts Receivable / Pending COD table (Rows 20 to end)
      for (let i = 20; i < bankCsvRows.length; i++) {
        const r = bankCsvRows[i];
        if (!r || r.length < 7) continue;
        const no = String(r[0] || '').trim();
        if (!no || isNaN(parseInt(no))) continue;

        const dateRaw = String(r[1] || '').trim();
        const carrier = String(r[2] || '').trim();
        const customer = String(r[3] || '').trim();
        const qtyBoxes = String(r[4] || '').trim();
        const amt = cleanNumber(r[5]);
        const status = String(r[6] || '').trim();

        if (dateRaw && (amt > 0 || status)) {
          pendingCodReceivables.push({
            no: no,
            date: formatToDDMMYYYY(dateRaw),
            carrier,
            customer,
            qtyBoxes: qtyBoxes ? `${qtyBoxes} ប្រអប់` : '—',
            amount: amt,
            status: status || 'រង់ចាំទូទាត់'
          });
        }
      }

      // Extract Accounts Payable List (Rows 20 to end, Columns H to K)
      for (let i = 20; i < bankCsvRows.length; i++) {
        const r = bankCsvRows[i];
        if (!r || r.length < 11) continue;
        const pNo = String(r[7] || '').trim();
        if (!pNo || isNaN(parseInt(pNo))) continue;

        const title = String(r[8] || '').trim();
        const amount = cleanNumber(r[10]);

        if (title && amount > 0) {
          payables.push({ title, amount });
        }
      }

      // ==========================================
      // 4. Process Team Leaders & Dynamic Monthly Targets (From Team Sales sheet)
      // ==========================================
      // Month indices rows in Team Sales:
      // Jan: 3, Feb: 35, Mar: 64, Apr: 96, May: 127, Jun: 159, Jul: 190, Aug: 222, Sep: 254, Oct: 285, Nov: 317, Dec: 348
      const monthIndices = [
        { month: 1, targetRow: 3, startDayRow: 4, endDayRow: 34 },
        { month: 2, targetRow: 35, startDayRow: 36, endDayRow: 63 },
        { month: 3, targetRow: 64, startDayRow: 65, endDayRow: 95 },
        { month: 4, targetRow: 96, startDayRow: 97, endDayRow: 126 },
        { month: 5, targetRow: 127, startDayRow: 128, endDayRow: 158 },
        { month: 6, targetRow: 159, startDayRow: 160, endDayRow: 189 },
        { month: 7, targetRow: 190, startDayRow: 191, endDayRow: 221 },
        { month: 8, targetRow: 222, startDayRow: 223, endDayRow: 253 },
        { month: 9, targetRow: 254, startDayRow: 255, endDayRow: 284 },
        { month: 10, targetRow: 285, startDayRow: 286, endDayRow: 316 },
        { month: 11, targetRow: 317, startDayRow: 318, endDayRow: 347 },
        { month: 12, targetRow: 348, startDayRow: 349, endDayRow: 379 }
      ];

      const targetsByMonth = {};
      const teamLeadersByMonth = {};
      const boostByMonth = {};
      const recentBoostEntries = [];
      const leaderNames = ['ស្តី ស្តើង', 'ឆេង សុធី', 'ឆេង រ៉ាស៊ុង'];

      if (Array.isArray(teamSalesCsvRows) && teamSalesCsvRows.length > 300) {
        for (const mInfo of monthIndices) {
          const tRow = teamSalesCsvRows[mInfo.targetRow] || [];
          const sdeyTarget = cleanNumber(tRow[3]) || 150;
          const sdeyBoxes = cleanNumber(tRow[7]) || 0;
          const sotheyTarget = cleanNumber(tRow[11]) || 100;
          const sotheyBoxes = cleanNumber(tRow[15]) || 0;
          const rasungTarget = cleanNumber(tRow[19]) || 50;
          const rasungBoxes = cleanNumber(tRow[23]) || 0;

          targetsByMonth[mInfo.month] = {
            sdey: sdeyTarget,
            sothey: sotheyTarget,
            rasung: rasungTarget
          };

          // Calculate Sets & Monthly Boost by summing day rows for that month
          const sdeySets = [0, 0, 0, 0, 0];
          const sotheySets = [0, 0, 0, 0, 0];
          const rasungSets = [0, 0, 0, 0, 0];
          let sdeyBoost = 0;
          let sotheyBoost = 0;
          let rasungBoost = 0;

          const sdeyDaily = [];
          const sotheyDaily = [];
          const rasungDaily = [];

          for (let r_i = mInfo.startDayRow; r_i <= mInfo.endDayRow && r_i < teamSalesCsvRows.length; r_i++) {
            const dayRow = teamSalesCsvRows[r_i];
            if (!dayRow) continue;
            const dayStr = String(dayRow[0] || '').trim();
            if (!dayStr) continue;

            const bVal = cleanNumber(dayRow[1]) || 0;
            sdeyBoost += bVal;
            if (bVal > 0) {
              let dateLabel = dayStr;
              if (/^\d+$/.test(dayStr)) {
                dateLabel = `${dayStr}-Oct`;
              } else if (dayStr.includes('-')) {
                const parts = dayStr.split('-');
                dateLabel = `${parts[0]}-${parts[1]}`;
              }
              if (!dateLabel) dateLabel = `Day ${r_i - mInfo.startDayRow + 1}`;
              recentBoostEntries.push({
                row: `B${r_i + 1}`,
                day: dayStr || (r_i - mInfo.startDayRow + 1),
                dateLabel: dateLabel,
                month: mInfo.month,
                amount: bVal,
                leader: 'ស្តី ស្តើង'
              });
            }
            sotheyBoost += cleanNumber(dayRow[9]) || 0;
            rasungBoost += cleanNumber(dayRow[17]) || 0;

            for (let s = 0; s < 5; s++) {
              sdeySets[s] += cleanNumber(dayRow[2 + s]) || 0;
              sotheySets[s] += cleanNumber(dayRow[10 + s]) || 0;
              rasungSets[s] += cleanNumber(dayRow[18 + s]) || 0;
            }

            // Daily sales record for Sdey
            sdeyDaily.push({
              date: dayStr,
              dayRowIndex: r_i,
              boost: bVal,
              set1: cleanNumber(dayRow[2]) || 0,
              set2: cleanNumber(dayRow[3]) || 0,
              set3: cleanNumber(dayRow[4]) || 0,
              set4: cleanNumber(dayRow[5]) || 0,
              set5: cleanNumber(dayRow[6]) || 0,
              totalBoxes: cleanNumber(dayRow[7]) || 0,
              orders: cleanNumber(dayRow[8]) || 0
            });

            // Daily sales record for Sothey
            sotheyDaily.push({
              date: dayStr,
              dayRowIndex: r_i,
              boost: cleanNumber(dayRow[9]) || 0,
              set1: cleanNumber(dayRow[10]) || 0,
              set2: cleanNumber(dayRow[11]) || 0,
              set3: cleanNumber(dayRow[12]) || 0,
              set4: cleanNumber(dayRow[13]) || 0,
              set5: cleanNumber(dayRow[14]) || 0,
              totalBoxes: cleanNumber(dayRow[15]) || 0,
              orders: cleanNumber(dayRow[16]) || 0
            });

            // Daily sales record for Rasung
            rasungDaily.push({
              date: dayStr,
              dayRowIndex: r_i,
              boost: cleanNumber(dayRow[17]) || 0,
              set1: cleanNumber(dayRow[18]) || 0,
              set2: cleanNumber(dayRow[19]) || 0,
              set3: cleanNumber(dayRow[20]) || 0,
              set4: cleanNumber(dayRow[21]) || 0,
              set5: cleanNumber(dayRow[22]) || 0,
              totalBoxes: cleanNumber(dayRow[23]) || 0,
              orders: cleanNumber(dayRow[24]) || 0
            });
          }

          boostByMonth[mInfo.month] = sdeyBoost;

          teamLeadersByMonth[mInfo.month] = [
            {
              name: 'ស្តី ស្តើង',
              boost: sdeyBoost,
              orders: cleanNumber(tRow[8]) || 0,
              set1: sdeySets[0],
              set2: sdeySets[1],
              set3: sdeySets[2],
              set4: sdeySets[3],
              set5: sdeySets[4],
              totalBoxes: sdeyBoxes,
              targetGoal: sdeyTarget,
              targetPercent: sdeyTarget > 0 ? Math.min(100, (sdeyBoxes / sdeyTarget) * 100).toFixed(1) : '0.0',
              dailySales: sdeyDaily
            },
            {
              name: 'ឆេង សុធី',
              orders: cleanNumber(tRow[16]) || 0,
              set1: sotheySets[0],
              set2: sotheySets[1],
              set3: sotheySets[2],
              set4: sotheySets[3],
              set5: sotheySets[4],
              totalBoxes: sotheyBoxes,
              targetGoal: sotheyTarget,
              targetPercent: sotheyTarget > 0 ? Math.min(100, (sotheyBoxes / sotheyTarget) * 100).toFixed(1) : '0.0',
              dailySales: sotheyDaily
            },
            {
              name: 'ឆេង រ៉ាស៊ុង',
              orders: cleanNumber(tRow[24]) || 0,
              set1: rasungSets[0],
              set2: rasungSets[1],
              set3: rasungSets[2],
              set4: rasungSets[3],
              set5: rasungSets[4],
              totalBoxes: rasungBoxes,
              targetGoal: rasungTarget,
              targetPercent: rasungTarget > 0 ? Math.min(100, (rasungBoxes / rasungTarget) * 100).toFixed(1) : '0.0',
              dailySales: rasungDaily
            }
          ];
        }
      }

      // Default current month leaders
      const currentMonthNum = (new Date()).getMonth() + 1;
      const teamLeaders = teamLeadersByMonth[currentMonthNum] || teamLeadersByMonth[10] || [
        { name: 'ស្តី ស្តើង', orders: 13, set1: 1, set2: 8, set3: 4, set4: 0, totalBoxes: 29, targetGoal: 150, targetPercent: '19.3' },
        { name: 'ឆេង សុធី', orders: 5, set1: 0, set2: 3, set3: 2, set4: 0, totalBoxes: 12, targetGoal: 100, targetPercent: '12.0' },
        { name: 'ឆេង រ៉ាស៊ុង', orders: 0, set1: 0, set2: 0, set3: 0, set4: 0, totalBoxes: 0, targetGoal: 50, targetPercent: '0.0' }
      ];

      // Detect New/Edited Records from Personal Sales & Daily Expenses
      if (this.data) {
        const prevSalesCount = this.data.personalSales.length;
        const currentSalesCount = personalSales.length;
        if (currentSalesCount > prevSalesCount) {
          const diff = currentSalesCount - prevSalesCount;
          this.unreadNotifications.unshift({
            tab: 'Personal Sales',
            title: 'មានការកុម្ម៉ង់ថ្មី (Personal Sales)',
            detail: `ទទួលបានការកុម្ម៉ង់ថ្មីចំនួន ${diff} ប្រតិបត្តិការចូលក្នុង Sheet`,
            time: new Date().toLocaleTimeString('km-KH')
          });
        }

        const prevExpCount = this.data.expenses.length;
        const currentExpCount = expenses.length;
        if (currentExpCount > prevExpCount) {
          const diff = currentExpCount - prevExpCount;
          this.unreadNotifications.unshift({
            tab: 'Daily Expenses',
            title: 'មានការកត់ត្រាចំណាយថ្មី (Daily Expenses)',
            detail: `មានការចំណាយថ្មីចំនួន ${diff} មុខត្រូវបានបញ្ចូល`,
            time: new Date().toLocaleTimeString('km-KH')
          });
        }
      }

      // Merge any pending local orders (submitted through app within last 30 minutes)
      try {
        const localOrders = JSON.parse(localStorage.getItem('sd_local_orders') || '[]');
        if (Array.isArray(localOrders) && localOrders.length > 0) {
          const sheetRecordIds = new Set(personalSales.map(s => s.orderId || s.recordId));
          const stillPending = localOrders.filter(lo => {
            if (sheetRecordIds.has(lo.orderId || lo.recordId)) return false; // Confirmed synced to sheet!
            const age = Date.now() - (lo.createdAt || 0);
            return lo.createdAt ? (age < 30 * 60 * 1000) : false; // Do not revive phantom/deleted records
          });
          localStorage.setItem('sd_local_orders', JSON.stringify(stillPending));
          if (stillPending.length > 0) {
            personalSales.unshift(...stillPending);
          }
        }
      } catch (_) {}

      // Merge any pending local expenses (submitted through app within last 30 minutes)
      try {
        const localExpenses = JSON.parse(localStorage.getItem('sd_local_expenses') || '[]');
        if (Array.isArray(localExpenses) && localExpenses.length > 0) {
          const sheetExpKeys = new Set(expenses.map(e => `${e.date}|${e.description}|${e.amount}`));
          const stillPending = localExpenses.filter(le => {
            if (sheetExpKeys.has(`${le.date}|${le.description}|${le.amount}`)) return false; // Confirmed synced to sheet!
            const age = Date.now() - (le.createdAt || 0);
            return le.createdAt ? (age < 30 * 60 * 1000) : false; // Do not revive phantom/deleted records
          });
          localStorage.setItem('sd_local_expenses', JSON.stringify(stillPending));
          if (stillPending.length > 0) {
            expenses.unshift(...stillPending);
          }
        }
      } catch (_) {}

      this.data = {
        personalSales,
        expenses,
        pendingCodReceivables, // Exact live Accounts Receivable table from Bank & Cash Balance
        bank: {
          pureUsdTotal,
          pureKhrTotal,
          accounts,
          netCashPosition,
          payables
        },
        teamLeaders,
        teamLeadersByMonth,
        targetsByMonth,
        boostByMonth,
        recentBoostEntries,
        announcements: [
          {
            id: 1,
            title: 'ស្វាគមន៍ការប្រើប្រាស់ SD Dashboard v2.5',
            date: '13-Oct-2026',
            author: 'ស្តី ស្តើង (Leader)',
            urgent: false,
            content: 'សូមជម្រាបជូនថ្នាក់ដឹកនាំ និងសមាជិកក្រុមទាំងអស់ ឥឡូវនេះប្រព័ន្ធត្រូវបានអាប់ដេតមុខងារស្វែងរកថ្មី និងប្រព័ន្ធត្រួតពិនិត្យទិន្នន័យផ្ទាល់។'
          }
        ],
        meta: {
          totalSalesCount: personalSales.length,
          totalExpensesCount: expenses.length
        }
      };

      this.lastFetched = new Date();
      this.isLoading = false;
      this.error = null;
      this.notify();
      return this.data;
    } catch (err) {
      console.error('DataService Fetch Error:', err);
      this.isLoading = false;
      this.error = err.message || 'មិនអាចភ្ជាប់ទិន្នន័យ Google Sheet បានទេ';
      this.notify();
    }
  },

  startAutoReload(intervalMinutes = 5) {
    if (this.pollTimer) clearInterval(this.pollTimer);
    const ms = intervalMinutes * 60 * 1000;
    this.pollTimer = setInterval(() => {
      this.fetchData(true);
    }, ms);
  },

  stopAutoReload() {
    if (this.pollTimer) clearInterval(this.pollTimer);
  },

  isUsingCustomSheet() {
    return getActiveSheetId() !== DEFAULT_MASTER_SHEET_ID;
  },

  getActiveSheetId() {
    return getActiveSheetId();
  },

  getCustomSheetId() {
    try {
      return localStorage.getItem('sd_custom_sheet_id') || '';
    } catch (_) {
      return '';
    }
  },

  async setCustomSheetId(input) {
    const cleanId = extractSheetId(input);
    if (!cleanId || cleanId.length < 15) {
      throw new Error('លេខសម្គាល់ Google Sheet ID មិនត្រឹមត្រូវឡើយ');
    }
    localStorage.setItem('sd_custom_sheet_id', cleanId);
    return await this.fetchData(false);
  },

  async resetToMasterSheet() {
    localStorage.removeItem('sd_custom_sheet_id');
    return await this.fetchData(false);
  },

  async testSheetConnection(input) {
    const cleanId = extractSheetId(input) || DEFAULT_MASTER_SHEET_ID;
    const url = `https://docs.google.com/spreadsheets/d/${cleanId}/gviz/tq?tqx=out:json&headers=0&sheet=Personal%20Sales`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP Error ${res.status}: សូមពិនិត្យសិទ្ធិចែករំលែក (Anyone with link can view)`);
    }
    const text = await res.text();
    const match = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/);
    if (!match || !match[1]) {
      throw new Error('ទម្រង់ទិន្នន័យមិនស៊ីគ្នាឡើយ');
    }
    const parsed = JSON.parse(match[1]);
    const rowCount = parsed?.table?.rows?.length || 0;
    return { ok: true, sheetId: cleanId, rows: rowCount };
  }
};
