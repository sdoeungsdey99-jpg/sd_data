/**
 * dataService.js
 * Universal Client & Cloud Live Data Pipeline for SD Data ERP
 * Supports both local server /api/data and direct Google Sheets Live GViz API
 */

const SHEET_ID = '1Qu70irzkvKyYN49eoquTModvm33WT5ZEyTTjUFoEbWU';

function parseMonthName(moStr) {
  if (!moStr) return '';
  const m = String(moStr).trim().toLowerCase();
  const mapping = {
    'jan': '01', 'មករា': '01', '1': '01', '01': '01',
    'feb': '02', 'កុម្ភៈ': '02', '2': '02', '02': '02',
    'mar': '03', 'មីនា': '03', '3': '03', '03': '03',
    'apr': '04', 'មេសា': '04', '4': '04', '04': '04',
    'may': '05', 'ឧសភា': '05', '5': '05', '05': '05',
    'jun': '06', 'មិថុនា': '06', '6': '06', '06': '06',
    'jul': '07', 'កក្កដា': '07', '7': '07', '07': '07',
    'aug': '08', 'សីហា': '08', '8': '08', '08': '08',
    'sep': '09', 'កញ្ញា': '09', '9': '09', '09': '09',
    'oct': '10', 'តុលា': '10', '10': '10',
    'nov': '11', 'វិច្ឆិកា': '11', '11': '11',
    'dec': '12', 'ធ្នូ': '12', '12': '12'
  };
  for (const k in mapping) {
    if (m.includes(k)) return mapping[k];
  }
  return '';
}

function cleanNumber(val) {
  if (val === null || val === undefined || val === '') return 0.0;
  const s = String(val).replace(/\$/g, '').replace(/,/g, '').trim();
  const n = parseFloat(s);
  return isNaN(n) ? 0.0 : n;
}

async function fetchGoogleSheetGViz(gid) {
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${gid}&_t=${Date.now()}`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`Google Sheets GViz HTTP ${resp.status}`);
  const text = await resp.text();
  const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\);/);
  if (!match) throw new Error('Invalid GViz response format');
  return JSON.parse(match[1]);
}

const DataService = {
  data: null,
  lastFetched: null,
  isLoading: false,
  error: null,
  listeners: [],

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  },

  notify() {
    this.listeners.forEach(fn => fn({
      isLoading: this.isLoading,
      data: this.data,
      lastFetched: this.lastFetched,
      error: this.error
    }));
  },

  async fetchData(forceRefresh = false) {
    this.isLoading = true;
    this.error = null;
    this.notify();

    try {
      // 1. Try local or custom server API first
      let loaded = false;
      try {
        const localResp = await fetch(`/api/data${forceRefresh ? '?refresh=true' : ''}`, { signal: AbortSignal.timeout(3000) });
        if (localResp.ok) {
          const json = await localResp.json();
          if (json.status === 'success' && json.sales) {
            this.data = json;
            loaded = true;
          }
        }
      } catch (e) {
        // Fallback to direct client-side Google Sheet GViz API
      }

      // 2. Direct Cloud Fetch from Google Sheets
      if (!loaded) {
        // Fetch Master data (gid=0)
        const masterData = await fetchGoogleSheetGViz('0');
        const mRows = masterData.table.rows;
        
        // Header is row index 0 in GViz (Row 2 in Sheet)
        const headerRow = mRows[0].c.map(c => c && c.v !== null ? String(c.v).trim() : '');
        const hmap = {};
        headerRow.forEach((h, idx) => { if (h) hmap[h] = idx; });

        const sales = [];
        // Data starts from index 2 in GViz (Row 4 in Sheet)
        for (let i = 2; i < mRows.length; i++) {
          const cells = mRows[i].c;
          if (!cells) continue;
          const getVal = (colName) => {
            const idx = hmap[colName];
            if (idx === undefined || !cells[idx] || cells[idx].v === null) return '';
            return String(cells[idx].v).trim();
          };

          const dVal = getVal('Date');
          const moVal = getVal('Month');
          const yrVal = getVal('Year');
          if (!dVal || !moVal || !yrVal) continue;

          const moNum = parseMonthName(moVal);
          if (!moNum) continue;

          const dInt = parseInt(parseFloat(dVal));
          const yrInt = parseInt(parseFloat(yrVal));
          const isoDate = `${yrInt}-${moNum}-${String(dInt).padStart(2, '0')}`;

          const status = getVal('Status');
          if (status === 'សុំ Canceled') continue;

          const qty = cleanNumber(getVal('Sale QTY'));
          const revenue = cleanNumber(getVal('Total Cost'));
          const comCost = cleanNumber(getVal('Total Com.Cost'));
          const grossProfit = cleanNumber(getVal('Gross Profit'));
          const team = getVal('Team') || 'ទូទៅ';
          const member = getVal('Member') || team;
          const product = getVal('Product Name') || 'មិនបានបញ្ជាក់';

          sales.push({
            date: isoDate,
            year: yrInt,
            month: moNum,
            day: dInt,
            team: team,
            member: member,
            product: product,
            qty: qty,
            revenue: revenue,
            cogs: comCost,
            grossProfit: grossProfit,
            status: status
          });
        }

        // Fetch Daily Expenses (gid=1413782774)
        const expData = await fetchGoogleSheetGViz('1413782774');
        const eRows = expData.table.rows;
        const eHeader = eRows[0].c.map(c => c && c.v !== null ? String(c.v).trim() : '');
        const ehmap = {};
        eHeader.forEach((h, idx) => { if (h) ehmap[h] = idx; });

        const expenses = [];
        for (let i = 1; i < eRows.length; i++) {
          const cells = eRows[i].c;
          if (!cells) continue;
          const getVal = (colName) => {
            const idx = ehmap[colName];
            if (idx === undefined || !cells[idx] || cells[idx].v === null) return '';
            return String(cells[idx].v).trim();
          };

          const dateRaw = getVal('Date');
          const parts = dateRaw.split('/');
          if (parts.length !== 3) continue;

          const dInt = parseInt(parts[0]);
          const mInt = parseInt(parts[1]);
          const yInt = parseInt(parts[2]);
          const isoDate = `${yInt}-${String(mInt).padStart(2, '0')}-${String(dInt).padStart(2, '0')}`;

          const desc = getVal('Description');
          const cat = getVal('Category') || 'ផ្សេងៗ';
          const amt = cleanNumber(getVal('Amount ($)'));

          expenses.push({
            date: isoDate,
            year: yInt,
            month: String(mInt).padStart(2, '0'),
            day: dInt,
            description: desc,
            category: cat,
            amount: amt
          });
        }

        this.data = {
          status: 'success',
          spreadsheetId: SHEET_ID,
          fetchedAt: new Date().toISOString(),
          totalSalesRecords: sales.length,
          totalExpenseRecords: expenses.length,
          sales: sales,
          expenses: expenses
        };
      }

      this.lastFetched = new Date();
      this.isLoading = false;
      this.error = null;
      this.notify();
      return this.data;
    } catch (err) {
      console.error('DataService Fetch Error:', err);
      this.isLoading = false;
      this.error = err.message || 'មិនអាចភ្ជាប់ទៅកាន់ប្រភពទិន្នន័យបានទេ';
      this.notify();
    }
  },

  // Start background live polling every 15 seconds
  startLiveSync(intervalMs = 15000) {
    if (this.pollTimer) clearInterval(this.pollTimer);
    this.pollTimer = setInterval(() => {
      this.fetchData(true);
    }, intervalMs);
  },

  stopLiveSync() {
    if (this.pollTimer) clearInterval(this.pollTimer);
  },

  filterByRange(startDateStr, endDateStr) {
    if (!this.data) {
      return { sales: [], expenses: [] };
    }

    const filteredSales = this.data.sales.filter(item => {
      return item.date >= startDateStr && item.date <= endDateStr;
    });

    const filteredExpenses = this.data.expenses.filter(item => {
      return item.date >= startDateStr && item.date <= endDateStr;
    });

    return {
      sales: filteredSales,
      expenses: filteredExpenses
    };
  }
};
