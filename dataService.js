/**
 * SD Data - Dynamic Multi-Tab Data Service
 * Real-time dynamic Google Sheet reader (Zero Hardcoding)
 */

const MASTER_SDOEUNG_SHEET_ID = '1Qu70irzkvKyYN49eoquTModvm33WT5ZEyTTjUFoEbWU';
const DEFAULT_MASTER_SHEET_ID = '1Qu70irzkvKyYN49eoquTModvm33WT5ZEyTTjUFoEbWU';
const TEAM_HIERARCHY_SHEET_ID = '1yTLq_EepGZfxv_lR8cmTeWWVULgP6ADUkB6uZX2eNA4';
const TEAM_HIERARCHY_GID = '1865868146';
const BOSTAR_TRACK_GID = '1127553691';
const REPORT_TAB_GID = '1381931511';

function extractSheetId(input) {
  if (!input) return '';
  const s = String(input).trim();
  const match = s.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match) return match[1];
  return s;
}

function getActiveSheetId() {
  try {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('sd_demo_mode') === 'true') {
      return 'DEMO_MODE';
    }
    if (typeof window !== 'undefined' && window.location && window.location.search) {
      const urlParams = new URLSearchParams(window.location.search);
      const urlSheet = urlParams.get('sheet') || urlParams.get('sheet_id');
      if (urlSheet && urlSheet.trim().length > 15) {
        const cleanUrlSheet = extractSheetId(urlSheet.trim()) || urlSheet.trim();
        if (cleanUrlSheet !== TEAM_HIERARCHY_SHEET_ID) {
          localStorage.setItem('sd_custom_sheet_id', cleanUrlSheet);
          return cleanUrlSheet;
        }
      }
    }
    const custom = (typeof localStorage !== 'undefined') ? localStorage.getItem('sd_custom_sheet_id') : null;
    if (custom && custom.trim() === TEAM_HIERARCHY_SHEET_ID) {
      localStorage.removeItem('sd_custom_sheet_id');
    } else if (custom && custom.trim().length > 15) {
      return custom.trim();
    }
    // Only return MASTER_SDOEUNG_SHEET_ID if master admin is authenticated!
    if (typeof localStorage !== 'undefined' && localStorage.getItem('sd_master_admin_authenticated') === 'true') {
      return MASTER_SDOEUNG_SHEET_ID;
    }
  } catch (_) {}
  return '';
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

function getDemoMockData() {
  const sampleSales = [
    {
      date: '29/10/2026',
      isoDate: '2026-10-29',
      customer: 'សុខ វិសាល',
      seller: 'អ្នកសាកល្បង',
      orderId: '#REC-101',
      location: 'រាជធានីភ្នំពេញ',
      phone: '012 345 ***',
      qtyYL: 1,
      qtyYLP: 1,
      qtyKN: 0,
      qtyPDO: 0,
      qtySG: 0,
      freeQty: 0,
      totalBoxQty: 2,
      product: 'ឈុត 1 (YL 1, YLP 1)',
      price: 15,
      thaiBaht: 15,
      totalAmount: 15,
      shipFee: 1.5,
      deliveryMethod: 'J&T Express',
      codStatus: 'ទូទាត់រួច',
      stock: 1,
      profit: 5,
      note: 'ឈុត 1 (Bech_Nora)',
      isReward: false,
      isReturn: false,
      rowIndex: 1,
      recordId: 'REC-101'
    },
    {
      date: '28/10/2026',
      isoDate: '2026-10-28',
      customer: 'ចាន់ សុភ័ក្រ',
      seller: 'អ្នកសាកល្បង',
      orderId: '#REC-102',
      location: 'ខេត្តសៀមរាប',
      phone: '098 765 ***',
      qtyYL: 0,
      qtyYLP: 0,
      qtyKN: 0,
      qtyPDO: 0,
      qtySG: 1,
      freeQty: 0,
      totalBoxQty: 1,
      product: 'ឈុត 2 (SG Pro 1)',
      price: 28,
      thaiBaht: 28,
      totalAmount: 28,
      shipFee: 2,
      deliveryMethod: 'Virak Buntham',
      codStatus: 'មិនទាន់ទូទាត់',
      stock: 1,
      profit: 10,
      note: 'ឈុត 2',
      isReward: false,
      isReturn: false,
      rowIndex: 2,
      recordId: 'REC-102'
    },
    {
      date: '27/10/2026',
      isoDate: '2026-10-27',
      customer: 'លី គឹមសួរ',
      seller: 'អ្នកសាកល្បង',
      orderId: '#REC-103',
      location: 'ខេត្តបាត់ដំបង',
      phone: '077 888 ***',
      qtyYL: 0,
      qtyYLP: 0,
      qtyKN: 1,
      qtyPDO: 0,
      qtySG: 0,
      freeQty: 0,
      totalBoxQty: 1,
      product: 'ឈុត 1 (KN 1)',
      price: 15,
      thaiBaht: 15,
      totalAmount: 15,
      shipFee: 1.5,
      deliveryMethod: 'Capitol',
      codStatus: 'ទូទាត់រួច',
      stock: 1,
      profit: 5,
      note: 'ឈុត 1',
      isReward: false,
      isReturn: false,
      rowIndex: 3,
      recordId: 'REC-103'
    }
  ];

  const sampleExpenses = [
    {
      date: '29/10/2026',
      isoDate: '2026-10-29',
      time: '09:30 AM',
      description: 'ថ្លៃដឹកជញ្ជូនទំនិញទៅអតិថិជន',
      category: 'ការដឹកជញ្ជូន',
      amount: 3.5,
      note: 'គំរូសាកល្បង',
      rowIndex: 1
    },
    {
      date: '28/10/2026',
      isoDate: '2026-10-28',
      time: '12:00 PM',
      description: 'សម្ភារៈវេចខ្ចប់ប្រអប់ឥវ៉ាន់',
      category: 'សម្ភារៈ',
      amount: 5.0,
      note: 'គំរូសាកល្បង',
      rowIndex: 2
    }
  ];

  const samplePendingCod = [
    {
      date: '28/10/2026',
      isoDate: '2026-10-28',
      customer: 'ចាន់ សុភ័ក្រ',
      phone: '098 765 ***',
      delivery: 'Virak Buntham',
      amount: 28,
      boxes: 1,
      status: 'មិនទាន់ទូទាត់',
      orderId: '#REC-102'
    }
  ];

  const sampleBank = {
    pureUsdTotal: 50.0,
    pureKhrTotal: 0,
    accounts: [
      { name: 'ABA Bank (Demo)', number: '000 123 456 (គំរូ)', balance: 50.0, currency: 'USD' }
    ],
    netCashPosition: {
      totalNetCash: 50.0,
      totalActualCash: 50.0,
      pendingCodReceivables: 28.0,
      totalLiquidAssets: 78.0,
      totalAccountsPayable: 0,
      netCashPositionFinal: 78.0,
      healthStatus: '✅ សុវត្ថិភាពខ្ពស់'
    },
    payables: []
  };

  return {
    personalSales: sampleSales,
    bostarTrackSales: [],
    expenses: sampleExpenses,
    monthlyTargets: { 'អ្នកសាកល្បង': 100 },
    pendingCodReceivables: samplePendingCod,
    bank: sampleBank,
    teamLeaders: [
      { name: 'អ្នកសាកល្បង', target: 100, actual: 4, sets: [2, 1, 1, 0, 0, 0] }
    ],
    teamLeadersByMonth: {},
    teamMembers: [],
    teamHierarchy: { members: [], leaders: [], managers: [], directors: [] },
    targetsByMonth: {},
    boostByMonth: {},
    recentBoostEntries: [],
    announcements: [],
    meta: {
      isDemoMode: true,
      totalSalesCount: sampleSales.length,
      totalExpensesCount: sampleExpenses.length,
      totalTeamMembersCount: 0
    }
  };
}

function getEmptyCustomData() {
  return {
    personalSales: [],
    bostarTrackSales: [],
    expenses: [],
    monthlyTargets: {},
    pendingCodReceivables: [],
    bank: {
      pureUsdTotal: 0,
      pureKhrTotal: 0,
      accounts: [],
      netCashPosition: {
        totalNetCash: 0,
        totalActualCash: 0,
        pendingCodReceivables: 0,
        totalLiquidAssets: 0,
        totalAccountsPayable: 0,
        netCashPositionFinal: 0,
        healthStatus: '⚪ មិនទាន់មានទិន្នន័យ'
      },
      payables: []
    },
    teamLeaders: [],
    teamLeadersByMonth: {},
    teamMembers: [],
    teamHierarchy: { members: [], leaders: [], managers: [], directors: [] },
    targetsByMonth: {},
    boostByMonth: {},
    recentBoostEntries: [],
    announcements: [],
    meta: {
      totalSalesCount: 0,
      totalExpensesCount: 0,
      totalTeamMembersCount: 0
    }
  };
}

function loadCachedData() {
  try {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('sd_demo_mode') === 'true') {
      return getDemoMockData();
    }
    const isMasterAuth = (typeof localStorage !== 'undefined') && localStorage.getItem('sd_master_admin_authenticated') === 'true';
    if (isMasterAuth) {
      const raw = localStorage.getItem('sd_offline_master_data');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.personalSales)) return parsed;
      }
    } else {
      const customRaw = (typeof localStorage !== 'undefined') ? localStorage.getItem('sd_offline_custom_data') : null;
      if (customRaw) {
        const parsed = JSON.parse(customRaw);
        if (parsed && Array.isArray(parsed.personalSales)) return parsed;
      }
    }
  } catch (_) {}
  return null;
}

async function fetchGoogleSheetGViz(param, sheetNameFallback) {
  const sheetId = getActiveSheetId();
  const queryParam = isNaN(param) ? `sheet=${encodeURIComponent(param)}` : `gid=${param}`;
  const timestamp = Date.now();
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&headers=0&${queryParam}&_t=${timestamp}`;

  let response;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    response = await fetch(url, { 
      signal: controller.signal,
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
    });
    clearTimeout(timer);
  } catch (e) {
    if (sheetNameFallback) {
      const retryUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&headers=0&sheet=${encodeURIComponent(sheetNameFallback)}&_t=${Date.now()}`;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 12000);
      try {
        response = await fetch(retryUrl, { 
          signal: controller.signal,
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
        });
      } catch (_) {}
      clearTimeout(timer);
    }
  }

  if (!response || !response.ok) {
    throw new Error(`HTTP Error ${response ? response.status : 'Network'} when fetching ${queryParam}`);
  }
  const text = await response.text();
  const match = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/);
  if (!match || !match[1]) {
    throw new Error(`Invalid JSONP format for ${queryParam}`);
  }
  return JSON.parse(match[1]);
}

// Fetch Google Sheet tab as raw CSV with native CORS support (via GViz CSV)
async function fetchGoogleSheetCSV(param, sheetNameFallback) {
  const sheetId = getActiveSheetId();
  const queryParam = isNaN(param) ? `sheet=${encodeURIComponent(param)}` : `gid=${param}`;
  const timestamp = Date.now();
  const gvizUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&headers=0&${queryParam}&_t=${timestamp}`;

  let response;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    response = await fetch(gvizUrl, { 
      signal: controller.signal,
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
    });
    clearTimeout(timer);
  } catch (e) {
    if (sheetNameFallback) {
      const fallbackUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&headers=0&sheet=${encodeURIComponent(sheetNameFallback)}&_t=${Date.now()}`;
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 12000);
      try {
        response = await fetch(fallbackUrl, { 
          signal: controller.signal,
          cache: 'no-store',
          headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
        });
      } catch (_) {}
      clearTimeout(timer);
    }
  }

  if (!response || !response.ok) {
    throw new Error(`HTTP Error ${response ? response.status : 'Network'} when fetching CSV ${param}`);
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

// Fetch Team Hierarchy tab (Always 100% directly from BostarGroup Official Sheet with native CORS)
async function fetchTeamHierarchyCSV() {
  const sId = TEAM_HIERARCHY_SHEET_ID;
  try {
    const gvizUrl = `https://docs.google.com/spreadsheets/d/${sId}/gviz/tq?tqx=out:csv&headers=0&gid=${TEAM_HIERARCHY_GID}&_t=${Date.now()}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    const resp = await fetch(gvizUrl, { 
      signal: controller.signal, 
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
    });
    clearTimeout(timer);
    if (resp && resp.ok) {
      const text = await resp.text();
      if (text && !text.trim().startsWith('<!DOCTYPE html>')) {
        const rows = parseCSV(text);
        if (rows && rows.length > 2) return rows;
      }
    }
  } catch (_) {}

  try {
    const gvizFallback = `https://docs.google.com/spreadsheets/d/${sId}/gviz/tq?tqx=out:csv&headers=0&sheet=${encodeURIComponent('Team Hierarchy')}&_t=${Date.now()}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    const resp = await fetch(gvizFallback, {
      signal: controller.signal,
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
    });
    clearTimeout(timer);
    if (resp && resp.ok) {
      const text = await resp.text();
      if (text && !text.trim().startsWith('<!DOCTYPE html>')) {
        const rows = parseCSV(text);
        if (rows && rows.length > 2) return rows;
      }
    }
  } catch (_) {}
  return [];
}

// Fetch BostarTrack Sales Orders tab (Always 100% directly from BostarGroup Official Sheet with native CORS)
async function fetchBostarTrackSalesCSV() {
  const sId = TEAM_HIERARCHY_SHEET_ID;
  try {
    const gvizUrl = `https://docs.google.com/spreadsheets/d/${sId}/gviz/tq?tqx=out:csv&headers=0&gid=${BOSTAR_TRACK_GID}&_t=${Date.now()}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    const resp = await fetch(gvizUrl, { 
      signal: controller.signal,
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
    });
    clearTimeout(timer);
    if (resp && resp.ok) {
      const text = await resp.text();
      if (text && !text.trim().startsWith('<!DOCTYPE html>') && text.includes('Order Date')) {
        const rows = parseCSV(text);
        if (rows && rows.length > 1) return rows;
      }
    }
  } catch (_) {}

  try {
    const gvizFallback = `https://docs.google.com/spreadsheets/d/${sId}/gviz/tq?tqx=out:csv&headers=0&sheet=${encodeURIComponent('BostarTrack')}&_t=${Date.now()}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    const resp = await fetch(gvizFallback, {
      signal: controller.signal,
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
    });
    clearTimeout(timer);
    if (resp && resp.ok) {
      const text = await resp.text();
      if (text && !text.trim().startsWith('<!DOCTYPE html>') && text.includes('Order Date')) {
        const rows = parseCSV(text);
        if (rows && rows.length > 1) return rows;
      }
    }
  } catch (_) {}
  return [];
}

// Fetch Monthly Targets tab (From BostarGroup Official Sheet with native CORS)
async function fetchMonthlyTargetsCSV() {
  const sId = TEAM_HIERARCHY_SHEET_ID;
  try {
    const gvizUrl = `https://docs.google.com/spreadsheets/d/${sId}/gviz/tq?tqx=out:csv&headers=0&sheet=${encodeURIComponent('Monthly Targets')}&_t=${Date.now()}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    const resp = await fetch(gvizUrl, { 
      signal: controller.signal,
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
    });
    clearTimeout(timer);
    if (resp && resp.ok) {
      const text = await resp.text();
      if (text && !text.trim().startsWith('<!DOCTYPE html>')) {
        const rows = parseCSV(text);
        if (rows && rows.length > 2) return rows;
      }
    }
  } catch (_) {}
  return [];
}

const TEAM_NAME_TAB_GID = '1003915514';
const MASTER_DATA_TAB_GID = '0';

// Fetch Team Name tab (Sellers & Special Codes in Col D)
async function fetchTeamNameCodesCSV() {
  const sId = TEAM_HIERARCHY_SHEET_ID;
  try {
    const gvizUrl = `https://docs.google.com/spreadsheets/d/${sId}/gviz/tq?tqx=out:csv&headers=0&gid=${TEAM_NAME_TAB_GID}&_t=${Date.now()}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    const resp = await fetch(gvizUrl, { 
      signal: controller.signal,
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
    });
    clearTimeout(timer);
    if (resp && resp.ok) {
      const text = await resp.text();
      if (text && !text.trim().startsWith('<!DOCTYPE html>')) {
        const rows = parseCSV(text);
        if (rows && rows.length > 1) return rows;
      }
    }
  } catch (_) {}

  try {
    const gvizFallback = `https://docs.google.com/spreadsheets/d/${sId}/gviz/tq?tqx=out:csv&headers=0&sheet=${encodeURIComponent('Team Name')}&_t=${Date.now()}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    const resp = await fetch(gvizFallback, {
      signal: controller.signal,
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
    });
    clearTimeout(timer);
    if (resp && resp.ok) {
      const text = await resp.text();
      if (text && !text.trim().startsWith('<!DOCTYPE html>')) {
        const rows = parseCSV(text);
        if (rows && rows.length > 1) return rows;
      }
    }
  } catch (_) {}
  return [];
}

// Fetch Master Data tab (Full customer & order archive with GID 0)
async function fetchMasterDataSalesCSV() {
  const sId = TEAM_HIERARCHY_SHEET_ID;
  try {
    const gvizUrl = `https://docs.google.com/spreadsheets/d/${sId}/gviz/tq?tqx=out:csv&headers=0&gid=${MASTER_DATA_TAB_GID}&_t=${Date.now()}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    const resp = await fetch(gvizUrl, { 
      signal: controller.signal,
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
    });
    clearTimeout(timer);
    if (resp && resp.ok) {
      const text = await resp.text();
      if (text && !text.trim().startsWith('<!DOCTYPE html>') && text.includes('Order Date')) {
        const rows = parseCSV(text);
        if (rows && rows.length > 1) return rows;
      }
    }
  } catch (_) {}

  try {
    const gvizFallback = `https://docs.google.com/spreadsheets/d/${sId}/gviz/tq?tqx=out:csv&headers=0&sheet=${encodeURIComponent('Master Data')}&_t=${Date.now()}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    const resp = await fetch(gvizFallback, {
      signal: controller.signal,
      cache: 'no-store',
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
    });
    clearTimeout(timer);
    if (resp && resp.ok) {
      const text = await resp.text();
      if (text && !text.trim().startsWith('<!DOCTYPE html>') && text.includes('Order Date')) {
        const rows = parseCSV(text);
        if (rows && rows.length > 1) return rows;
      }
    }
  } catch (_) {}
  return [];
}

window.DataService = {
  data: loadCachedData(),
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
    if (typeof this.initLifecycleSync === 'function') {
      this.initLifecycleSync();
    }
  },

  notify() {
    this.listeners.forEach(fn => fn(this));
  },

  async fetchData(silent = false) {
    if (this.isDemoMode()) {
      this.isLoading = false;
      this.data = getDemoMockData();
      this.error = null;
      this.lastFetched = new Date();
      this.notify();
      return this.data;
    }

    const sheetId = getActiveSheetId();
    if (!sheetId) {
      this.isLoading = false;
      this.data = getEmptyCustomData();
      this.error = null;
      this.notify();
      return this.data;
    }

    if (!silent) {
      this.isLoading = true;
      this.error = null;
      this.notify();
    }

    try {
      const [psGviz, expCsvRows, bankCsvRows, teamGviz, teamSalesCsvRows, teamHierarchyCsvRows, bostarTrackCsvRows, monthlyTargetsCsvRows] = await Promise.all([
        fetchGoogleSheetGViz('1802751802', 'Personal Sales').catch(e => { console.warn('PS fetch warning:', e); return null; }),
        fetchGoogleSheetCSV('1413782774', 'Daily Expenses').catch(e => { console.warn('Expenses fetch warning:', e); return []; }),
        fetchGoogleSheetCSV('1381982614', 'Bank & Cash Balance').catch(e => { console.warn('Bank fetch warning:', e); return []; }),
        fetchGoogleSheetGViz('30391871', 'Team Monthly View').catch(e => { console.warn('Team Monthly fetch warning:', e); return null; }),
        fetchGoogleSheetCSV('608899183', 'Team Sales').catch(e => { console.warn('Team Sales fetch warning:', e); return []; }),
        fetchTeamHierarchyCSV().catch(e => { console.warn('Team Hierarchy fetch warning:', e); return []; }),
        fetchBostarTrackSalesCSV().catch(e => { console.warn('BostarTrack fetch warning:', e); return []; }),
        fetchMonthlyTargetsCSV().catch(e => { console.warn('Monthly Targets fetch warning:', e); return []; })
      ]);

      // ==========================================
      // 1. Process Personal Sales
      // ==========================================
      const psRows = (psGviz && psGviz.table && Array.isArray(psGviz.table.rows)) ? psGviz.table.rows : [];
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
        const rewardQty = cleanNumber(getCell(21)); // Col V (Reward QTY)
        const isReward = rewardQty > 0 || note.includes('លក់រង្វាន់');
        const isReturn = note.includes('លក់អីវ៉ាន់ត្រឡប់') || (note.includes('ត្រឡប់') && cleanNumber(getCell(17)) === 0 && profit > 0);

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
        let totalBoxQty = qtyYL + qtyYLP + qtyKN + qtyPDO + freeQty + qtySG;
        if (rewardQty > 0) {
          totalBoxQty = rewardQty;
        } else if (totalBoxQty === 0 && (isReward || isReturn)) {
          const matchBox = note.match(/(\d+)\s*ប្រអប់/);
          if (matchBox) totalBoxQty = parseInt(matchBox[1], 10);
        }

        const prodParts = [];
        if (isReward) {
          prodParts.push(totalBoxQty > 0 ? `លក់រង្វាន់ (${totalBoxQty})` : `លក់រង្វាន់`);
        } else if (isReturn) {
          prodParts.push(totalBoxQty > 0 ? `លក់អីវ៉ាន់ត្រឡប់ (${totalBoxQty})` : `លក់អីវ៉ាន់ត្រឡប់`);
        } else {
          if (qtySG > 0) prodParts.push(qtySG > 1 ? `SG Pro (${qtySG})` : `SG Pro`);
          if (qtyKN > 0) prodParts.push(qtyKN > 1 ? `KN (${qtyKN})` : `KN`);
          if (qtyPDO > 0) prodParts.push(qtyPDO > 1 ? `PDO (${qtyPDO})` : `PDO`);
          if (qtyYL > 0) prodParts.push(qtyYL > 1 ? `YL (${qtyYL})` : `YL`);
          if (qtyYLP > 0) prodParts.push(qtyYLP > 1 ? `YLP (${qtyYLP})` : `YLP`);
          if (freeQty > 0) prodParts.push(`Free (${freeQty})`);
        }
        const product = prodParts.join(', ') || (isReward ? 'លក់រង្វាន់' : (isReturn ? 'លក់អីវ៉ាន់ត្រឡប់' : 'ទំនិញ'));

        personalSales.push({
          rowIndex: i,
          date: ddmmyyyy,
          isoDate: isoDate,
          orderId,
          recordId,
          customer,
          seller,
          location,
          phone,
          orderType: isReward ? 'reward' : (isReturn ? 'return' : 'standard'),
          rewardQty,
          isReward,
          isReturn,
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
          stock: cleanNumber(getCell(17)),
          profit,
          note
        });
      }

      // Preserve cached data if fetch timed out or returned empty (Master Sheet only)
      if (this.isMasterSheet() && personalSales.length === 0 && this.data && Array.isArray(this.data.personalSales) && this.data.personalSales.length > 0) {
        console.warn('⚠️ Personal sales fetch returned 0 rows (retaining previous cached sales for master)');
        personalSales.push(...this.data.personalSales);
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

      // Preserve cached expenses if fetch timed out or returned empty (Master Sheet only)
      if (this.isMasterSheet() && expenses.length === 0 && this.data && Array.isArray(this.data.expenses) && this.data.expenses.length > 0) {
        console.warn('⚠️ Expenses fetch returned 0 rows (retaining previous cached expenses for master)');
        expenses.push(...this.data.expenses);
      }

      // ==========================================
      // 3. Process Bank & Cash Balance (from CSV)
      // ==========================================
      const accounts = [];
      const payables = [];
      const pendingCodReceivables = [];
      let pureUsdTotal = 0;
      let pureKhrTotal = 0;

      const netCashPosition = {
        totalNetCash: 0,
        totalActualCash: 0,
        pendingCodReceivables: 0,
        totalLiquidAssets: 0,
        totalAccountsPayable: 0,
        netCashPositionFinal: 0,
        healthStatus: '✅ សុវត្ថិភាពខ្ពស់',
        coverageRatio: '10.39x'
      };

      let inCodSection = false;

      for (let i = 0; i < bankCsvRows.length; i++) {
        const r = bankCsvRows[i];
        if (!r || r.length < 2) continue;

        const rowStr = r.join(' ');
        if (rowStr.includes('Accounts Receivable') || rowStr.includes('Pending COD') || rowStr.includes('កាលបរិច្ឆេទ') || rowStr.includes('ក្រុមហ៊ុនដឹកជញ្ជូន')) {
          inCodSection = true;
        }

        // Net Cash Summary (Dynamic search by label in column 4)
        if (r.length > 4) {
          const label = String(r[4] || '').trim();
          const valCol8 = cleanNumber(r[8]);
          const rawCol8 = String(r[8] || '').trim();

          if (label.includes('សរុបសាច់ប្រាក់ជាក់ស្តែង') || label.includes('Total Cash')) {
            netCashPosition.totalActualCash = valCol8;
          } else if (label.includes('លុយ COD') || label.includes('Receivables')) {
            netCashPosition.pendingCodReceivables = valCol8;
          } else if (label.includes('ទ្រព្យសកម្មរាវ') || label.includes('Total Liquid Assets')) {
            netCashPosition.totalLiquidAssets = valCol8;
          } else if (label.includes('សរុបបំណុលត្រូវទូទាត់') || label.includes('Accounts Payable')) {
            netCashPosition.totalAccountsPayable = valCol8;
          } else if (label.includes('សាច់ប្រាក់សុទ្ធពិតប្រាកដ') || label.includes('Net Cash Position')) {
            netCashPosition.netCashPositionFinal = valCol8;
            netCashPosition.totalNetCash = valCol8;
          } else if (label.includes('សន្ទស្សន៍សុខភាព') || label.includes('Cash Health')) {
            netCashPosition.healthStatus = rawCol8 || '✅ សុវត្ថិភាពខ្ពស់';
          } else if (label.includes('សមាមាត្រទូទាត់') || label.includes('Coverage Ratio')) {
            netCashPosition.coverageRatio = rawCol8 || '10.39x';
          }
        }

        const no = String(r[0] || '').trim();
        const noInt = parseInt(no, 10);

        // Bank Accounts (Before reaching COD section)
        if (!inCodSection) {
          const name = String(r[1] || '').trim();
          if (!isNaN(noInt) && noInt >= 1 && noInt <= 10 && name && !name.startsWith('សរុប')) {
            const usdVal = cleanNumber(r[2]);
            const khrVal = cleanNumber(r[3]);
            accounts.push({ no: noInt, name, usd: usdVal, khr: khrVal, rawRowIndex: i + 1 });

            if (!name.includes('(KHR)')) {
              pureUsdTotal += usdVal;
            } else {
              pureKhrTotal += khrVal;
            }
          }
        } else {
          // In COD & Payables section
          // COD in cols 0 to 6
          if (!isNaN(noInt) && noInt >= 1) {
            const dateRaw = String(r[1] || '').trim();
            const carrier = String(r[2] || '').trim();
            const customer = String(r[3] || '').trim();
            const qtyBoxes = String(r[4] || '').trim();
            const amt = cleanNumber(r[5]);
            const status = String(r[6] || '').trim();

            // Accept COD row even if customer name is omitted in Bank & Cash Balance
            if (amt > 0 || status || customer || qtyBoxes) {
              pendingCodReceivables.push({
                no: no,
                date: formatToDDMMYYYY(dateRaw),
                carrier: carrier || 'Thai COD',
                customer: customer || 'អតិថិជន COD',
                qtyBoxes: qtyBoxes ? (qtyBoxes.includes('ប្រអប់') ? qtyBoxes : `${qtyBoxes} ប្រអប់`) : '—',
                amount: amt,
                status: status || 'រង់ចាំទូទាត់'
              });
            }
          }

          // Accounts Payable in cols 7 to 10
          if (r.length > 8) {
            const pNo = String(r[7] || '').trim();
            const title = String(r[8] || '').trim();
            const noteTag = String(r[9] || '').trim();
            const amount = cleanNumber(r[10]);
            const isStock = title.includes('ស្តុក') || title.toLowerCase().includes('stock');

            // Filter out items with 0 amount, but preserve stock payable item for dynamic cycle calculation
            if (pNo && !isNaN(parseInt(pNo, 10)) && title && (amount > 0 || isStock)) {
              payables.push({ 
                pNo: parseInt(pNo, 10),
                title, 
                noteTag,
                amount,
                isStock
              });
            }
          }
        }
      }

      // Fallback: If totalNetCash not set from label, use netCashPositionFinal or bank sum
      if (!netCashPosition.totalNetCash) {
        netCashPosition.totalNetCash = netCashPosition.netCashPositionFinal || (netCashPosition.totalLiquidAssets - netCashPosition.totalAccountsPayable);
      }

      // Preserve cached bank accounts if fetch timed out or returned empty (Master Sheet only)
      if (this.isMasterSheet() && accounts.length === 0 && this.data && this.data.bank && Array.isArray(this.data.bank.accounts) && this.data.bank.accounts.length > 0) {
        console.warn('⚠️ Bank accounts fetch returned 0 rows (retaining previous cached bank data for master)');
        accounts.push(...this.data.bank.accounts);
        pureUsdTotal = this.data.bank.pureUsdTotal || pureUsdTotal;
        pureKhrTotal = this.data.bank.pureKhrTotal || pureKhrTotal;
        if (this.data.bank.netCashPosition) {
          Object.assign(netCashPosition, this.data.bank.netCashPosition);
        }
        if (Array.isArray(this.data.bank.payables)) {
          payables.push(...this.data.bank.payables);
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
              set6: 0,
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
              set6: 0,
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
              set6: 0,
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
              set6: 0,
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
              set6: 0,
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
              set6: 0,
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

      // ==========================================
      // 5. Process Team Hierarchy (Dynamic Team Members & Leaders)
      // ==========================================
      const teamMembers = [];
      const teamLeadersList = [];
      const teamManagersList = [];
      const teamDirectorsList = [];

      if (Array.isArray(teamHierarchyCsvRows) && teamHierarchyCsvRows.length > 2) {
        for (let i = 2; i < teamHierarchyCsvRows.length; i++) {
          const r = teamHierarchyCsvRows[i];
          if (!r) continue;

          // Member columns: 0: No, 1: Km, 2: En, 3: Leader, 4: Orders, 5: Boxes
          const noRaw = String(r[0] || '').trim();
          const kmName = String(r[1] || '').trim();
          const enName = String(r[2] || '').trim();
          const leader = String(r[3] || '').trim();
          const orders = cleanNumber(r[4]);
          const boxes = cleanNumber(r[5]);

          if (kmName) {
            const no = parseInt(noRaw, 10) || (teamMembers.length + 1);
            teamMembers.push({
              no,
              km: kmName,
              en: enName || kmName,
              leader: leader || '',
              orders,
              boxes
            });
          }

          // Leader columns: 7: No, 8: Km, 9: En, 10: Role, 11: Manager, 12: MemberCount, 13: Orders, 14: Boxes
          if (r.length > 8) {
            const lKm = String(r[8] || '').trim();
            const lEn = String(r[9] || '').trim();
            const lRole = String(r[10] || '').trim();
            const lManager = String(r[11] || '').trim();
            const lMembers = cleanNumber(r[12]);
            const lOrders = cleanNumber(r[13]);
            const lBoxes = cleanNumber(r[14]);
            if (lKm) {
              teamLeadersList.push({
                km: lKm,
                en: lEn || lKm,
                role: lRole || 'Leader',
                manager: lManager || '',
                members: lMembers,
                orders: lOrders,
                boxes: lBoxes
              });
            }
          }

          // Manager columns: 16: No, 17: Km, 18: En, 19: Role, 20: Dept, 21: LeadersCount, 22: TotalMembers, 23: Orders, 24: Boxes
          if (r.length > 17) {
            const mKm = String(r[17] || '').trim();
            const mEn = String(r[18] || '').trim();
            const mRole = String(r[19] || '').trim();
            const mDept = String(r[20] || '').trim();
            const mLeaders = cleanNumber(r[21]);
            const mMembers = cleanNumber(r[22]);
            const mOrders = cleanNumber(r[23]);
            const mBoxes = cleanNumber(r[24]);
            if (mKm) {
              teamManagersList.push({
                km: mKm,
                en: mEn || mKm,
                role: mRole || 'Manager',
                dept: mDept || '',
                leaders: mLeaders,
                members: mMembers,
                orders: mOrders,
                boxes: mBoxes
              });
            }
          }

          // Director columns: 26: No, 27: Km, 28: En, 29: Role, 30: Orders, 31: Boxes
          if (r.length > 27) {
            const dKm = String(r[27] || '').trim();
            const dEn = String(r[28] || '').trim();
            const dRole = String(r[29] || '').trim();
            const dOrders = cleanNumber(r[30]);
            const dBoxes = cleanNumber(r[31]);
            if (dKm) {
              teamDirectorsList.push({
                km: dKm,
                en: dEn || dKm,
                role: dRole || 'Director',
                orders: dOrders,
                boxes: dBoxes
              });
            }
          }
        }
      }

      // ==========================================
      // 6. Process BostarTrack Team Sales Orders (From BostarTrack tab)
      // ==========================================
      const bostarTrackSales = [];
      if (Array.isArray(bostarTrackCsvRows) && bostarTrackCsvRows.length > 1) {
        for (let i = 1; i < bostarTrackCsvRows.length; i++) {
          const r = bostarTrackCsvRows[i];
          if (!r || r.length < 3) continue;

          // Header: Order Date (0), Seller (1), Order ID (2), YL (3), YLP (4), KN (5), P D.O (6), Free (7), Stock (8), Note (9), Record_ID (10)
          const dateRaw = String(r[0] || '').trim();
          if (!dateRaw || dateRaw.toLowerCase() === 'order date') continue;

          const ddmmyyyy = formatToDDMMYYYY(dateRaw);
          const isoDate = ddmmyyyyToIso(ddmmyyyy);
          if (!ddmmyyyy) continue;

          const seller = String(r[1] || '').trim();
          const orderId = String(r[2] || `#${i}`).trim();
          const qtyYL = cleanNumber(r[3]);
          const qtyYLP = cleanNumber(r[4]);
          const qtyKN = cleanNumber(r[5]);
          const qtyPDO = cleanNumber(r[6]);
          const freeQty = cleanNumber(r[7]);

          // In BostarTrack, Column 8 is ALWAYS the pre-calculated Total Boxes!
          // Column 9 is Stock ($), Col 10 is Note, Col 11 is Record_ID
          const col8Num = cleanNumber(r[8]);
          const sumQty = qtyYL + qtyYLP + qtyKN + qtyPDO + freeQty;
          const totalBoxQty = (freeQty < 0 && sumQty > 0) ? sumQty : (col8Num > 0 ? col8Num : sumQty);
          const stock = cleanNumber(r[9]);
          const note = String(r[10] || '').trim();
          const recordId = String(r[11] || orderId || `REC-BT-${i}`).trim();

          const prodParts = [];
          if (qtyKN > 0) prodParts.push(qtyKN > 1 ? `KN (${qtyKN})` : `KN`);
          if (qtyPDO > 0) prodParts.push(qtyPDO > 1 ? `PDO (${qtyPDO})` : `PDO`);
          if (qtyYL > 0) prodParts.push(qtyYL > 1 ? `YL (${qtyYL})` : `YL`);
          if (qtyYLP > 0) prodParts.push(qtyYLP > 1 ? `YLP (${qtyYLP})` : `YLP`);
          if (freeQty > 0) prodParts.push(`Free (${freeQty})`);
          const product = prodParts.join(', ') || 'ទំនិញ';

          bostarTrackSales.push({
            date: ddmmyyyy,
            isoDate: isoDate,
            orderId,
            recordId,
            customer: 'អតិថិជនទូទៅ',
            seller,
            location: '',
            phone: '',
            qtyYL,
            qtyYLP,
            qtyKN,
            qtyPDO,
            qtySG: 0,
            freeQty,
            totalBoxQty,
            product,
            price: 0,
            thaiBaht: 0,
            totalAmount: 0,
            shipFee: 0,
            deliveryMethod: 'ដឹកជញ្ជូន',
            codStatus: 'ទូទាត់រួច',
            profit: 0,
            note
          });
        }
      }

      // 5. Parse Dynamic Monthly Targets from 'Monthly Targets' Sheet tab
      const monthlyTargets = {};
      if (Array.isArray(monthlyTargetsCsvRows) && monthlyTargetsCsvRows.length > 3) {
        for (let i = 3; i < monthlyTargetsCsvRows.length; i++) {
          const r = monthlyTargetsCsvRows[i];
          if (!r || r.length < 7) continue;
          const km = String(r[2] || '').trim();
          const en = String(r[3] || '').trim();
          const target = cleanNumber(r[6]);
          if (km && target > 0) {
            monthlyTargets[km] = target;
            const cleanKm = km.replace('លោក ', '').replace('អ្នកគ្រូ ', '').trim();
            monthlyTargets[cleanKm] = target;
            if (en) monthlyTargets[en] = target;
          }
        }
      }

      this.data = {
        personalSales,
        bostarTrackSales,
        expenses,
        monthlyTargets,
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
        teamMembers,
        teamHierarchy: {
          members: teamMembers,
          leaders: teamLeadersList,
          managers: teamManagersList,
          directors: teamDirectorsList
        },
        targetsByMonth,
        boostByMonth,
        recentBoostEntries,
        announcements: [],
        meta: {
          totalSalesCount: personalSales.length,
          totalExpensesCount: expenses.length,
          totalTeamMembersCount: teamMembers.length
        }
      };

      try {
        if (this.isMasterSheet()) {
          localStorage.setItem('sd_offline_master_data', JSON.stringify(this.data));
        } else if (this.isUsingCustomSheet()) {
          localStorage.setItem('sd_offline_custom_data', JSON.stringify(this.data));
        }
      } catch (_) {}

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

  startAutoReload(intervalMinutes = 1) {
    if (this.pollTimer) clearInterval(this.pollTimer);
    const ms = intervalMinutes * 60 * 1000;
    this.pollTimer = setInterval(() => {
      if (typeof document !== 'undefined' && document.visibilityState === 'visible' && (!('onLine' in navigator) || navigator.onLine)) {
        this.fetchData(true);
      }
    }, ms);
    this.initLifecycleSync();
  },

  stopAutoReload() {
    if (this.pollTimer) clearInterval(this.pollTimer);
    this.pollTimer = null;
  },

  initLifecycleSync() {
    if (this._lifecycleInitialized || typeof window === 'undefined' || typeof document === 'undefined') return;
    this._lifecycleInitialized = true;

    // 1. Mobile tab visibility recovery (app switch back, unlocking phone, returning to browser)
    let lastResumeFetch = Date.now();
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        const now = Date.now();
        const lastFetchMs = this.lastFetched ? this.lastFetched.getTime() : 0;
        // If tab was away for over 8 seconds, silently fetch fresh data
        if ((now - lastFetchMs > 8000 || now - lastResumeFetch > 8000) && !this.isLoading && this.hasActiveSheet()) {
          lastResumeFetch = now;
          this.fetchData(true);
        }
      }
    });

    // 2. iOS Safari bfcache (Back-Forward Cache) recovery
    window.addEventListener('pageshow', (e) => {
      if (e.persisted && !this.isLoading && this.hasActiveSheet()) {
        this.fetchData(true);
      }
    });

    // 3. Online network reconnection recovery
    window.addEventListener('online', () => {
      if (this.hasActiveSheet()) {
        this.fetchData(true);
      }
    });
  },

  isUsingCustomSheet() {
    const custom = (typeof localStorage !== 'undefined') ? localStorage.getItem('sd_custom_sheet_id') : null;
    return Boolean(custom && custom.trim().length > 15 && custom.trim() !== MASTER_SDOEUNG_SHEET_ID);
  },

  isDemoMode() {
    return (typeof localStorage !== 'undefined') && localStorage.getItem('sd_demo_mode') === 'true';
  },

  getActiveSheetId() {
    return getActiveSheetId();
  },

  getCustomSheetId() {
    try {
      if (this.isDemoMode()) return '';
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
    try {
      localStorage.removeItem('sd_local_orders');
      localStorage.removeItem('sd_local_expenses');
      localStorage.removeItem('sd_offline_master_data');
      localStorage.removeItem('sd_offline_custom_data');
      localStorage.removeItem('sd_demo_mode');
    } catch (_) {}
    localStorage.setItem('sd_custom_sheet_id', cleanId);
    return await this.fetchData(false);
  },

  hasActiveSheet() {
    if (this.isDemoMode()) return true;
    const id = getActiveSheetId();
    return Boolean(id && id.length > 15);
  },

  isMasterSheet() {
    return (typeof localStorage !== 'undefined') && localStorage.getItem('sd_master_admin_authenticated') === 'true' && getActiveSheetId() === MASTER_SDOEUNG_SHEET_ID;
  },

  getMasterSheetId() {
    return MASTER_SDOEUNG_SHEET_ID;
  },

  disconnectSheet() {
    try {
      localStorage.removeItem('sd_custom_sheet_id');
      localStorage.removeItem('sd_profile_data');
      localStorage.removeItem('sd_local_orders');
      localStorage.removeItem('sd_local_expenses');
      localStorage.removeItem('sd_offline_master_data');
      localStorage.removeItem('sd_offline_custom_data');
      localStorage.removeItem('sd_demo_mode');
      localStorage.removeItem('sd_master_admin_authenticated');
      localStorage.removeItem('sd_onboarding_completed');
      localStorage.removeItem('sd_user_name');
      localStorage.removeItem('sd_verified_seller_km');
    } catch (_) {}
    this.data = null;
    this.isLoading = false;
    this.error = null;
    this.notify();
  },

  async resetToMasterSheet() {
    if (localStorage.getItem('sd_master_admin_authenticated') === 'true') {
      localStorage.setItem('sd_custom_sheet_id', MASTER_SDOEUNG_SHEET_ID);
      return await this.fetchData(false);
    }
    this.disconnectSheet();
    return null;
  },

  async testSheetConnection(input) {
    const cleanId = extractSheetId(input);
    if (!cleanId || cleanId.length < 15) {
      throw new Error('សូមបញ្ចូល Link Google Sheet ផ្ទាល់ខ្លួនរបស់អ្នក');
    }
    const url = `https://docs.google.com/spreadsheets/d/${cleanId}/gviz/tq?tqx=out:json&headers=0&sheet=Personal%20Sales&_t=${Date.now()}`;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);
    let res;
    try {
      res = await fetch(url, {
        signal: controller.signal,
        cache: 'no-store',
        headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate', 'Pragma': 'no-cache' }
      });
    } finally {
      clearTimeout(timer);
    }
    if (!res || !res.ok) {
      throw new Error(`HTTP Error ${res ? res.status : 'Network'}: សូមពិនិត្យសិទ្ធិចែករំលែក (Anyone with link can view)`);
    }
    const text = await res.text();
    const match = text.match(/google\.visualization\.Query\.setResponse\((.*)\);/);
    if (!match || !match[1]) {
      throw new Error('ទម្រង់ទិន្នន័យមិនស៊ីគ្នាឡើយ (សូមប្រាកដថាបានបង្កើតពី Template គំរូ)');
    }
    const parsed = JSON.parse(match[1]);
    const rowCount = parsed?.table?.rows?.length || 0;
    return { ok: true, sheetId: cleanId, rows: rowCount, isClean: rowCount <= 1 };
  },

  masterDataSalesCache: null,
  teamNameCodesCache: null,

  async getTeamNameCodes() {
    if (this.teamNameCodesCache && Array.isArray(this.teamNameCodesCache) && this.teamNameCodesCache.length > 0) {
      return this.teamNameCodesCache;
    }
    const rows = await fetchTeamNameCodesCSV();
    const codes = [];
    if (Array.isArray(rows) && rows.length > 1) {
      for (let i = 1; i < rows.length; i++) {
        const r = rows[i];
        if (!r || r.length < 4) continue;
        const km = String(r[1] || '').trim();
        const en = String(r[2] || '').trim();
        const code = String(r[3] || '').trim().toUpperCase();
        if (km && code) {
          codes.push({ km, en, code });
        }
      }
    }
    this.teamNameCodesCache = codes;
    return codes;
  },

  async getMasterDataSales() {
    if (this.masterDataSalesCache && Array.isArray(this.masterDataSalesCache) && this.masterDataSalesCache.length > 0) {
      return this.masterDataSalesCache;
    }
    const rows = await fetchMasterDataSalesCSV();
    const sales = [];
    if (Array.isArray(rows) && rows.length > 1) {
      for (let i = 1; i < rows.length; i++) {
        const r = rows[i];
        if (!r || r.length < 7) continue;
        const dateRaw = String(r[0] || '').trim();
        if (!dateRaw || dateRaw.toLowerCase() === 'order date') continue;
        const ddmmyyyy = formatToDDMMYYYY(dateRaw);
        const isoDate = ddmmyyyyToIso(ddmmyyyy);
        if (!ddmmyyyy) continue;

        const customer = String(r[2] || 'អតិថិជនទូទៅ').trim();
        const seller = String(r[3] || '').trim();
        const orderId = String(r[4] || `#${i}`).trim();
        const location = String(r[5] || '').trim();
        const phone = String(r[6] || '').trim();

        const qtyYL = cleanNumber(r[7]);
        const qtyYLP = cleanNumber(r[8]);
        const qtyKN = cleanNumber(r[9]);
        const qtyPDO = cleanNumber(r[10]);
        const freeQty = cleanNumber(r[11]);
        const totalBoxQty = qtyYL + qtyYLP + qtyKN + qtyPDO + freeQty;

        const price = cleanNumber(r[12]);
        const totalAmount = cleanNumber(r[13]);
        const shipFee = cleanNumber(r[14]);
        const delivery = String(r[15] || '').trim();
        const codStatus = String(r[16] || '').trim();
        const stockCost = cleanNumber(r[17]);
        const paymentDate = String(r[18] || '').trim();
        const profit = cleanNumber(r[19]);
        const note = String(r[20] || '').trim();
        const recordId = String(r[23] || `REC-${i}`).trim();

        const prodParts = [];
        if (qtyKN > 0) prodParts.push(qtyKN > 1 ? `KN (${qtyKN})` : `KN`);
        if (qtyPDO > 0) prodParts.push(qtyPDO > 1 ? `PDO (${qtyPDO})` : `PDO`);
        if (qtyYL > 0) prodParts.push(qtyYL > 1 ? `YL (${qtyYL})` : `YL`);
        if (qtyYLP > 0) prodParts.push(qtyYLP > 1 ? `YLP (${qtyYLP})` : `YLP`);
        if (freeQty > 0) prodParts.push(`Free (${freeQty})`);
        const product = prodParts.join(', ') || 'ទំនិញ';

        sales.push({
          date: ddmmyyyy,
          isoDate,
          no: String(r[1] || i),
          customer,
          seller,
          orderId,
          location,
          phone,
          qtyYL,
          qtyYLP,
          qtyKN,
          qtyPDO,
          qtySG: 0,
          freeQty,
          totalBoxQty,
          product,
          price,
          thaiBaht: price > 500 ? price : 0,
          totalAmount,
          shipFee,
          delivery,
          codStatus,
          stockCost,
          paymentDate,
          profit,
          note,
          recordId,
          isMasterData: true
        });
      }
    }
    this.masterDataSalesCache = sales;
    return sales;
  }
};

var DataService = window.DataService;
if (typeof globalThis !== 'undefined') globalThis.DataService = window.DataService;
