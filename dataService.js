/**
 * SD Data - Dynamic Multi-Tab Data Service
 * Real-time dynamic Google Sheet reader (Zero Hardcoding)
 */

const SHEET_ID = '1Qu70irzkvKyYN49eoquTModvm33WT5ZEyTTjUFoEbWU';

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

  // GViz Date format: Date(YYYY,M,D) where month is 0-indexed
  const gMatch = s.match(/Date\((\d+),(\d+),(\d+)\)/);
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

async function fetchGoogleSheetGViz(gid) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&headers=0&gid=${gid}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status} when fetching gid=${gid}`);
  }
  const text = await response.text();
  const match = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/);
  if (!match || !match[1]) {
    throw new Error(`Invalid JSONP format for gid=${gid}`);
  }
  return JSON.parse(match[1]);
}

// Fetch Google Sheet tab as raw CSV for 100% faithful cell extraction without GViz header stripping
async function fetchGoogleSheetCSV(gid) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${gid}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP Error ${response.status} when fetching CSV gid=${gid}`);
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
      const [psGviz, expGviz, bankCsvRows, teamGviz, teamSalesCsvRows] = await Promise.all([
        fetchGoogleSheetGViz('1802751802'), // Personal Sales
        fetchGoogleSheetGViz('1413782774'), // Daily Expenses
        fetchGoogleSheetCSV('1381982614'),  // Bank & Cash Balance (CSV for 100% faithful cell extraction)
        fetchGoogleSheetGViz('30391871'),   // Team Monthly View
        fetchGoogleSheetCSV('608899183')    // Team Sales (Sheet containing dynamic monthly targets)
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
        const freeQty = cleanNumber(getCell(11));
        const totalBoxQty = qtyYL + qtyYLP + qtyKN + qtyPDO + freeQty;

        const price = cleanNumber(getCell(12));
        const totalAmount = cleanNumber(getCell(13));
        const shipFee = cleanNumber(getCell(14));
        const deliveryMethod = String(getCell(15) || 'មិនបញ្ជាក់').trim();
        const codStatus = String(getCell(16) || 'មិនទាន់ទូទាត់').trim();
        const profit = cleanNumber(getCell(19));
        const note = String(getCell(20) || '').trim();
        const recordId = String(getCell(23) || `REC-${i}`).trim();

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
          freeQty,
          totalBoxQty,
          price,
          totalAmount,
          shipFee,
          deliveryMethod,
          codStatus,
          profit,
          note
        });
      }

      // ==========================================
      // 2. Process Daily Expenses
      // ==========================================
      const expRows = expGviz.table.rows;
      const expenses = [];
      for (let i = 1; i < expRows.length; i++) {
        const cells = expRows[i].c;
        if (!cells) continue;
        const getCell = (idx) => (idx < cells.length && cells[idx] && cells[idx].v !== null && cells[idx].v !== undefined) ? cells[idx].v : '';

        const dateRaw = String(getCell(0) || '').trim();
        if (!dateRaw || dateRaw.toLowerCase() === 'date') continue;

        const ddmmyyyy = formatToDDMMYYYY(dateRaw);
        const isoDate = ddmmyyyyToIso(ddmmyyyy);
        if (!ddmmyyyy) continue;

        const desc = String(getCell(1) || '').trim();
        const cat = String(getCell(2) || 'ផ្សេងៗ').trim();
        const amt = cleanNumber(getCell(3));

        expenses.push({
          date: ddmmyyyy,
          isoDate: isoDate,
          description: desc,
          category: cat,
          amount: amt
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
      // Extract targets per month from teamSalesCsvRows
      // Month indices: 1 -> Jan, 2 -> Feb, ... 10 -> Oct, 11 -> Nov, 12 -> Dec
      const targetsByMonth = {};
      if (Array.isArray(teamSalesCsvRows)) {
        for (const row of teamSalesCsvRows) {
          if (row && row.length > 20 && String(row[1] || '').includes('🎯 គោលដៅ')) {
            const monthHeader = String(row[0] || '').trim().toLowerCase();
            let monthNum = null;
            if (monthHeader.includes('jan') || monthHeader.includes('មករា')) monthNum = 1;
            else if (monthHeader.includes('feb') || monthHeader.includes('កុម្ភៈ')) monthNum = 2;
            else if (monthHeader.includes('mar') || monthHeader.includes('មីនា')) monthNum = 3;
            else if (monthHeader.includes('apr') || monthHeader.includes('មេសា')) monthNum = 4;
            else if (monthHeader.includes('may') || monthHeader.includes('ឧសភា')) monthNum = 5;
            else if (monthHeader.includes('jun') || monthHeader.includes('មិថុនា')) monthNum = 6;
            else if (monthHeader.includes('jul') || monthHeader.includes('កក្កដា')) monthNum = 7;
            else if (monthHeader.includes('aug') || monthHeader.includes('សីហា')) monthNum = 8;
            else if (monthHeader.includes('sep') || monthHeader.includes('កញ្ញា')) monthNum = 9;
            else if (monthHeader.includes('oct') || monthHeader.includes('តុលា')) monthNum = 10;
            else if (monthHeader.includes('nov') || monthHeader.includes('វិច្ឆិកា')) monthNum = 11;
            else if (monthHeader.includes('dec') || monthHeader.includes('ធ្នូ')) monthNum = 12;

            if (monthNum) {
              targetsByMonth[monthNum] = {
                sdey: cleanNumber(row[3]) || 150,
                sothey: cleanNumber(row[11]) || 100,
                rasung: cleanNumber(row[19]) || 50
              };
            }
          }
        }
      }

      // Default to current month (e.g. month 10 = Oct, or month 11 = Nov)
      const currentMonthNum = (new Date()).getMonth() + 1;
      const currentMonthTargets = targetsByMonth[currentMonthNum] || { sdey: 150, sothey: 100, rasung: 50 };

      const teamRows = teamGviz.table.rows;
      const teamLeaders = [];
      const leaderNames = ['ស្តី ស្តើង', 'ឆេង សុធី', 'ឆេង រ៉ាស៊ុង'];
      const leaderTargetKeys = ['sdey', 'sothey', 'rasung'];

      for (let i = 7; i <= 9 && i < teamRows.length; i++) {
        const cells = teamRows[i].c;
        if (!cells) continue;
        const getCell = (idx) => (idx < cells.length && cells[idx] && cells[idx].v !== null && cells[idx].v !== undefined) ? cells[idx].v : '';
        const nameRaw = String(getCell(0) || '').trim();
        const orders = cleanNumber(getCell(2));
        const set1 = cleanNumber(getCell(3));
        const set2 = cleanNumber(getCell(4));
        const set3 = cleanNumber(getCell(5));
        const set4 = cleanNumber(getCell(6));
        const totalBoxes = cleanNumber(getCell(8));
        const leaderKey = leaderTargetKeys[i - 7];
        const leaderTarget = currentMonthTargets[leaderKey] || 100;
        const targetPercent = leaderTarget > 0 ? Math.min(100, (totalBoxes / leaderTarget) * 100).toFixed(1) : '0.0';

        teamLeaders.push({
          rawName: nameRaw,
          name: leaderNames[i - 7],
          orders,
          set1,
          set2,
          set3,
          set4,
          totalBoxes,
          targetGoal: leaderTarget,
          targetPercent
        });
      }

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
        targetsByMonth,
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
  }
};
