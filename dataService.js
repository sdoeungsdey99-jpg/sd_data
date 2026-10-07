/**
 * SD Data - Multi-Tab Data Service
 * Live Google Sheet Engine reading directly from Business Data VST Form
 */

const SHEET_ID = '1Qu70irzkvKyYN49eoquTModvm33WT5ZEyTTjUFoEbWU';

function parseMonthName(name) {
  if (!name) return null;
  const m = String(name).trim().toLowerCase();
  const map = {
    'jan': '01', 'january': '01', 'មករា': '01', '1': '01', '01': '01',
    'feb': '02', 'february': '02', 'កុម្ភៈ': '02', '2': '02', '02': '02',
    'mar': '03', 'march': '03', 'មីនា': '03', '3': '03', '03': '03',
    'apr': '04', 'april': '04', 'មេសា': '04', '4': '04', '04': '04',
    'may': '05', 'ឧសភា': '05', '5': '05', '05': '05',
    'jun': '06', 'june': '06', 'មិថុនា': '06', '6': '06', '06': '06',
    'jul': '07', 'july': '07', 'កក្កដា': '07', '7': '07', '07': '07',
    'aug': '08', 'august': '08', 'សីហា': '08', '8': '08', '08': '08',
    'sep': '09', 'september': '09', 'កញ្ញា': '09', '9': '09', '09': '09',
    'oct': '10', 'october': '10', 'តុលា': '10', '10': '10',
    'nov': '11', 'november': '11', 'វិច្ឆិកា': '11', '11': '11',
    'dec': '12', 'december': '12', 'ធ្នូ': '12', '12': '12'
  };
  return map[m] || null;
}

function cleanNumber(val) {
  if (val === null || val === undefined || val === '') return 0;
  if (typeof val === 'number') return isNaN(val) ? 0 : val;
  const cleaned = String(val).replace(/[$,\s]/g, '');
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
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
  newRecordsCount: 0,

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
      // 1. Fetch Personal Sales (gid=1802751802)
      // 2. Fetch Daily Expenses (gid=1413782774)
      // 3. Fetch Bank & Cash Balance (gid=1381982614)
      // 4. Fetch Product List (gid=205669274)
      const [psGviz, expGviz, bankGviz, prodGviz] = await Promise.all([
        fetchGoogleSheetGViz('1802751802'),
        fetchGoogleSheetGViz('1413782774'),
        fetchGoogleSheetGViz('1381982614'),
        fetchGoogleSheetGViz('205669274')
      ]);

      // --- Process Personal Sales ---
      const psRows = psGviz.table.rows;
      const personalSales = [];
      const unpaidCustomers = [];

      for (let i = 1; i < psRows.length; i++) {
        const cells = psRows[i].c;
        if (!cells) continue;
        const getCell = (idx) => (idx < cells.length && cells[idx] && cells[idx].v !== null && cells[idx].v !== undefined) ? cells[idx].v : '';
        const getFormatted = (idx) => (idx < cells.length && cells[idx] && cells[idx].f) ? cells[idx].f : getCell(idx);

        const dateRaw = String(getCell(0) || '').trim();
        if (!dateRaw || dateRaw.toLowerCase() === 'order date') continue;

        let isoDate = '';
        const dateMatch = dateRaw.match(/Date\((\d+),(\d+),(\d+)\)/);
        if (dateMatch) {
          const yr = parseInt(dateMatch[1]);
          const mo = parseInt(dateMatch[2]) + 1;
          const dy = parseInt(dateMatch[3]);
          isoDate = `${String(yr).padStart(4, '0')}-${String(mo).padStart(2, '0')}-${String(dy).padStart(2, '0')}`;
        } else {
          const parts = dateRaw.split('/');
          if (parts.length === 3) {
            const dInt = parseInt(parts[0]);
            const mInt = parseInt(parts[1]);
            const yInt = parseInt(parts[2]);
            isoDate = `${yInt}-${String(mInt).padStart(2, '0')}-${String(dInt).padStart(2, '0')}`;
          }
        }
        if (!isoDate) continue;

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
        const stock = String(getCell(17) || '').trim();
        const paymentDate = String(getCell(18) || '').trim();
        const profit = cleanNumber(getCell(19));
        const note = String(getCell(20) || '').trim();
        const recordId = String(getCell(23) || `REC-${i}`).trim();

        const item = {
          date: isoDate,
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
          stock,
          paymentDate,
          profit,
          note
        };

        personalSales.push(item);

        // Track unpaid customers (where COD Status is not paid/done)
        const isPaid = codStatus.includes('បានទូទាត់') || codStatus.toLowerCase().includes('paid');
        if (!isPaid && totalAmount > 0) {
          unpaidCustomers.push(item);
        }
      }

      // --- Process Daily Expenses ---
      const expRows = expGviz.table.rows;
      const expenses = [];
      for (let i = 1; i < expRows.length; i++) {
        const cells = expRows[i].c;
        if (!cells) continue;
        const getCell = (idx) => (idx < cells.length && cells[idx] && cells[idx].v !== null && cells[idx].v !== undefined) ? cells[idx].v : '';

        const dateRaw = String(getCell(0) || '').trim();
        if (!dateRaw || dateRaw.toLowerCase() === 'date') continue;

        let isoDate = '';
        const dateMatch = dateRaw.match(/Date\((\d+),(\d+),(\d+)\)/);
        if (dateMatch) {
          const yr = parseInt(dateMatch[1]);
          const mo = parseInt(dateMatch[2]) + 1;
          const dy = parseInt(dateMatch[3]);
          isoDate = `${String(yr).padStart(4, '0')}-${String(mo).padStart(2, '0')}-${String(dy).padStart(2, '0')}`;
        } else {
          const parts = dateRaw.split('/');
          if (parts.length === 3) {
            const dInt = parseInt(parts[0]);
            const mInt = parseInt(parts[1]);
            const yInt = parseInt(parts[2]);
            isoDate = `${yInt}-${String(mInt).padStart(2, '0')}-${String(dInt).padStart(2, '0')}`;
          }
        }
        if (!isoDate) continue;

        const desc = String(getCell(1) || '').trim();
        const cat = String(getCell(2) || 'ផ្សេងៗ').trim();
        const amt = cleanNumber(getCell(3));

        expenses.push({
          date: isoDate,
          description: desc,
          category: cat,
          amount: amt
        });
      }

      // --- Process Bank & Cash Balance ---
      const bankRows = bankGviz.table.rows;
      const accounts = [];
      const payables = [];
      let pureUsdTotal = 0;
      let pureKhrTotal = 0;

      // Extract specific accounts as instructed
      for (let i = 3; i <= 12 && i < bankRows.length; i++) {
        const cells = bankRows[i].c;
        if (!cells) continue;
        const getCell = (idx) => (idx < cells.length && cells[idx] && cells[idx].v !== null && cells[idx].v !== undefined) ? cells[idx].v : '';

        const name = String(getCell(1) || '').trim();
        if (!name) continue;

        const usdVal = cleanNumber(getCell(2));
        const khrVal = cleanNumber(getCell(3));

        accounts.push({ name, usd: usdVal, khr: khrVal });

        // Pure USD accounts (exclude converted KHR)
        const isPureUsd = [
          'ABA Main (USD)', 'ABA Boosting', 'ABA Stock',
          'ABA Saving កូនរៀន', 'ABA Reserve / Safety',
          'ACLEDA (USD)', 'កាបូបក្រៅ (USD)'
        ].some(k => name.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(name.toLowerCase()));

        if (isPureUsd && !name.includes('(KHR)')) {
          pureUsdTotal += usdVal;
        }

        // Pure KHR accounts
        if (name.includes('(KHR)')) {
          pureKhrTotal += khrVal;
        }
      }

      // Extract payables list (Rows 17 to 26 in Bank & Cash Balance)
      for (let i = 17; i < bankRows.length; i++) {
        const cells = bankRows[i].c;
        if (!cells) continue;
        const getCell = (idx) => (idx < cells.length && cells[idx] && cells[idx].v !== null && cells[idx].v !== undefined) ? cells[idx].v : '';
        const date = String(getCell(1) || '').trim();
        const amount = cleanNumber(getCell(5));
        const status = String(getCell(6) || '').trim();
        const title = String(getCell(8) || '').trim();

        if (title || amount > 0) {
          payables.push({ date, title, amount, status });
        }
      }

      // --- Process Active Product List ---
      const prodRows = prodGviz.table.rows;
      const activeProducts = [];
      for (let i = 1; i < prodRows.length; i++) {
        const cells = prodRows[i].c;
        if (!cells) continue;
        const getCell = (idx) => (idx < cells.length && cells[idx] && cells[idx].v !== null && cells[idx].v !== undefined) ? cells[idx].v : '';
        const name = String(getCell(1) || '').trim();
        const cost = cleanNumber(getCell(2));
        if (name && name !== '-' && name.toLowerCase() !== 'product name') {
          activeProducts.push({ name, cost: cost || 24.0 });
        }
      }

      // Check notification badge
      if (this.data && this.data.personalSales) {
        const diff = personalSales.length - this.data.personalSales.length;
        if (diff > 0) {
          this.newRecordsCount += diff;
        }
      }

      this.data = {
        personalSales,
        expenses,
        bank: {
          pureUsdTotal,
          pureKhrTotal,
          accounts,
          payables
        },
        activeProducts,
        unpaidCustomers,
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

  // 5 Minutes Standard Auto-Reload
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

  filterByRange(startDateStr, endDateStr) {
    if (!this.data) return { sales: [], expenses: [] };
    const sales = this.data.personalSales.filter(item => item.date >= startDateStr && item.date <= endDateStr);
    const expenses = this.data.expenses.filter(item => item.date >= startDateStr && item.date <= endDateStr);
    return { sales, expenses };
  }
};
