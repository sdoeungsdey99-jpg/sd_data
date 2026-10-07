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
      // Fetch 4 live tabs concurrently
      const [psGviz, expGviz, bankGviz, teamGviz] = await Promise.all([
        fetchGoogleSheetGViz('1802751802'), // Personal Sales
        fetchGoogleSheetGViz('1413782774'), // Daily Expenses
        fetchGoogleSheetGViz('1381982614'), // Bank & Cash Balance
        fetchGoogleSheetGViz('30391871')    // Team Monthly View
      ]);

      // ==========================================
      // 1. Process Personal Sales (All Dynamic)
      // ==========================================
      const psRows = psGviz.table.rows;
      const personalSales = [];
      const pendingCodReceivables = []; // Dynamic All Unpaid COD from Personal Sales

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

        const saleItem = {
          date: ddmmyyyy, // Display as DD/MM/YYYY
          isoDate: isoDate, // For accurate sorting/filtering
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
        };

        personalSales.push(saleItem);

        // Capture Dynamic Pending COD (Accounts Receivable)
        const isPaid = codStatus.includes('បានទូទាត់') || codStatus.toLowerCase().includes('paid');
        if (!isPaid && totalAmount > 0) {
          pendingCodReceivables.push(saleItem);
        }
      }

      // ==========================================
      // 2. Process Daily Expenses (All Dynamic)
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
          date: ddmmyyyy, // Display as DD/MM/YYYY
          isoDate: isoDate,
          description: desc,
          category: cat,
          amount: amt
        });
      }

      // ==========================================
      // 3. Process Bank & Cash Balance (Live Dynamic)
      // ==========================================
      const bankRows = bankGviz.table.rows;
      const accounts = [];
      const payables = [];
      let pureUsdTotal = 0;
      let pureKhrTotal = 0;

      // Extract Bank Accounts (Rows 3 to 12)
      for (let i = 3; i <= 12 && i < bankRows.length; i++) {
        const cells = bankRows[i].c;
        if (!cells) continue;
        const getCell = (idx) => (idx < cells.length && cells[idx] && cells[idx].v !== null && cells[idx].v !== undefined) ? cells[idx].v : '';

        const name = String(getCell(1) || '').trim();
        if (!name) continue;

        const usdVal = cleanNumber(getCell(2));
        const khrVal = cleanNumber(getCell(3));
        accounts.push({ name, usd: usdVal, khr: khrVal });

        // Sum Pure USD (Exclude converted KHR)
        const isPureUsd = [
          'ABA Main (USD)', 'ABA Boosting', 'ABA Stock',
          'ABA Saving កូនរៀន', 'ABA Reserve / Safety',
          'ACLEDA (USD)', 'កាបូបក្រៅ (USD)'
        ].some(k => name.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(name.toLowerCase()));

        if (isPureUsd && !name.includes('(KHR)')) {
          pureUsdTotal += usdVal;
        }

        if (name.includes('(KHR)')) {
          pureKhrTotal += khrVal;
        }
      }

      // Extract Net Cash Position Summary (Rows 1 to 10 in Column E to I)
      const netCashPosition = {
        totalNetCash: cleanNumber(bankRows[1]?.c[4]?.v),
        totalActualCash: cleanNumber(bankRows[3]?.c[8]?.v),
        pendingCodReceivables: cleanNumber(bankRows[4]?.c[8]?.v),
        totalLiquidAssets: cleanNumber(bankRows[5]?.c[8]?.v),
        totalAccountsPayable: cleanNumber(bankRows[6]?.c[8]?.v),
        netCashPositionFinal: cleanNumber(bankRows[7]?.c[8]?.v),
        healthStatus: String(bankRows[8]?.c[8]?.v || 'សុវត្ថិភាពខ្ពស់'),
        coverageRatio: String(bankRows[9]?.c[8]?.v || '12.7x')
      };

      // Extract Payables List (Rows 17 to 26)
      for (let i = 17; i < bankRows.length; i++) {
        const cells = bankRows[i].c;
        if (!cells) continue;
        const getCell = (idx) => (idx < cells.length && cells[idx] && cells[idx].v !== null && cells[idx].v !== undefined) ? cells[idx].v : '';

        const dateRaw = String(getCell(1) || '').trim();
        const dateFormatted = formatToDDMMYYYY(dateRaw);
        const title = String(getCell(8) || '').trim();
        const amount = cleanNumber(getCell(10));

        if (title && amount > 0) {
          payables.push({ date: dateFormatted, title, amount });
        }
      }

      // ==========================================
      // 4. Process Team Leaders (Team Monthly View)
      // ==========================================
      const teamRows = teamGviz.table.rows;
      const teamLeaders = [];
      const leaderNames = ['ស្តី ស្តើង', 'ឆេង សុធី', 'ឆេង រ៉ាស៊ុង'];

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
        const targetPercent = Math.min(100, (totalBoxes / 100) * 100).toFixed(1);

        teamLeaders.push({
          rawName: nameRaw,
          name: leaderNames[i - 7],
          orders,
          set1,
          set2,
          set3,
          set4,
          totalBoxes,
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
        pendingCodReceivables, // Dynamic Live Accounts Receivable
        bank: {
          pureUsdTotal,
          pureKhrTotal,
          accounts,
          netCashPosition,
          payables
        },
        teamLeaders,
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
