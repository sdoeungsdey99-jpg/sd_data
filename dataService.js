/**
 * SD Data - Multi-Tab Data Service
 * Live Google Sheet Engine reading directly from Business Data VST Form
 */

const SHEET_ID = '1Qu70irzkvKyYN49eoquTModvm33WT5ZEyTTjUFoEbWU';

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
  unreadUpdates: [],

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
      // 4. Fetch Team Monthly View (gid=30391871)
      const [psGviz, expGviz, bankGviz, teamGviz] = await Promise.all([
        fetchGoogleSheetGViz('1802751802'),
        fetchGoogleSheetGViz('1413782774'),
        fetchGoogleSheetGViz('1381982614'),
        fetchGoogleSheetGViz('30391871')
      ]);

      // --- Process Personal Sales ---
      const psRows = psGviz.table.rows;
      const personalSales = [];

      for (let i = 1; i < psRows.length; i++) {
        const cells = psRows[i].c;
        if (!cells) continue;
        const getCell = (idx) => (idx < cells.length && cells[idx] && cells[idx].v !== null && cells[idx].v !== undefined) ? cells[idx].v : '';

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
        const profit = cleanNumber(getCell(19));
        const note = String(getCell(20) || '').trim();
        const recordId = String(getCell(23) || `REC-${i}`).trim();

        personalSales.push({
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
          profit,
          note
        });
      }

      // --- Process Daily Expenses with accurate Dates ---
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

      // --- Process Bank & Cash Balance directly ---
      const bankRows = bankGviz.table.rows;
      const accounts = [];
      const unpaidCustomersFromBank = [];
      const payables = [];
      let pureUsdTotal = 0;
      let pureKhrTotal = 0;

      // Pure USD & KHR Accounts (Rows 3 to 12)
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

        if (name.includes('(KHR)')) {
          pureKhrTotal += khrVal;
        }
      }

      // Exact 10 Unpaid COD Customers from Bank & Cash Balance (Rows 17 to 26, Columns B to G)
      for (let i = 17; i <= 26 && i < bankRows.length; i++) {
        const cells = bankRows[i].c;
        if (!cells) continue;
        const getCell = (idx) => (idx < cells.length && cells[idx] && cells[idx].v !== null && cells[idx].v !== undefined) ? cells[idx].v : '';

        const date = String(getCell(1) || '').trim();
        const boxes = String(getCell(4) || '').trim();
        const amount = cleanNumber(getCell(5));
        const customerNote = String(getCell(6) || '').trim();

        if (amount > 0 || customerNote) {
          unpaidCustomersFromBank.push({
            no: i - 16,
            date,
            boxes,
            amount,
            customerNote: customerNote || `អតិថិជន ${i - 16}`
          });
        }
      }

      // Exact Payables from Bank & Cash Balance (Rows 17 to 24, Columns H to K)
      for (let i = 17; i <= 24 && i < bankRows.length; i++) {
        const cells = bankRows[i].c;
        if (!cells) continue;
        const getCell = (idx) => (idx < cells.length && cells[idx] && cells[idx].v !== null && cells[idx].v !== undefined) ? cells[idx].v : '';

        const title = String(getCell(8) || '').trim();
        const amount = cleanNumber(getCell(10));

        if (title && amount > 0) {
          payables.push({ title, amount });
        }
      }

      // --- Process 3 Key Team Leaders (Team Monthly View gid=30391871) ---
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

        // Get target achieved percentage from row 18-20 or compute (target is 100 boxes)
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

      // --- 4 Active Core Products Only ---
      const activeProducts = [
        { name: 'Yong Liang', cost: 24.0 },
        { name: 'Yong Liang Plus', cost: 24.0 },
        { name: 'Kidney Pro', cost: 24.0 },
        { name: 'Pro D.O', cost: 24.0 }
      ];

      // Track unread updates for Notifications
      if (this.data && this.data.personalSales) {
        const diff = personalSales.length - this.data.personalSales.length;
        if (diff > 0) {
          this.unreadUpdates.unshift({
            tab: 'Personal Sales',
            msg: `មានការកុម្ម៉ង់ថ្មីចំនួន ${diff} ចូលក្នុងសន្លឹក Personal Sales`,
            time: new Date().toLocaleTimeString('km-KH')
          });
        }
      }

      this.data = {
        personalSales,
        expenses,
        bank: {
          pureUsdTotal,
          pureKhrTotal,
          accounts,
          unpaidCustomers: unpaidCustomersFromBank,
          payables
        },
        teamLeaders,
        activeProducts,
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
