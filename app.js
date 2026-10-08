/**
 * SD Data - Dynamic iOS Liquid Fintech ERP Application
 * Complete refinement according to user's exact instructions:
 * 1. Center alignment on Net Cash Position (សុវត្ថិភាពខ្ពស់)
 * 2. Rename 'សាច់ប្រាក់សុទ្ធពិត' to 'ទឹកប្រាក់ដែលមាន'
 * 3. Exact Accounts Receivable (លុយនៅអតិថិជន / Pending COD) from Tab Bank & Cash Balance
 * 4. Settings: remove phone under name (only in About Me), beautiful Light Theme,
 *    working Khmer/English translation, remove duplicate Telegram.
 */

const translations = {
  km: {
    appTitle: 'SD Data',
    securityPrompt: 'សូមវាយលេខកូដសម្ងាត់ ៤ ខ្ទង់',
    clear: 'សម្អាត',
    pureCashTitle: 'ទឹកប្រាក់ដែលមាន (Pure Cash)',
    pureCashSubtitle: 'ABA + ACLEDA + កាបូប',
    usdOnly: 'ដុល្លារសុទ្ធ (USD)',
    khrOnly: 'រៀលសុទ្ធ (KHR)',
    today: 'ថ្ងៃនេះ',
    thisMonth: 'ខែនេះ',
    thisYear: 'ឆ្នាំនេះ',
    custom: 'កំណត់',
    totalBoxes: 'ចំនួនលក់សរុប (ចុចមើល)',
    revenue: 'ចំណូលលក់សរុប',
    grossProfit: 'ចំណេញដុល (Profit)',
    expenses: 'ចំណាយសរុប',
    boxUnit: 'ប្រអប់',
    pendingCodTitle: '📦 លុយនៅអតិថិជន / COD មិនទាន់ទូទាត់ (Receivables)',
    pendingCodHint: 'អូស ឡើង/ចុះ/ឆ្វេង/ស្តាំ ដើម្បីមើលទិន្នន័យពី Bank & Cash Balance',
    netCashTitle: '📈 សង្ខេបស្ថាពរហិរញ្ញវត្ថុសុទ្ធ (Net Cash Position)',
    actualCash: 'សរុបសាច់ប្រាក់ជាក់ស្តែង',
    pendingCod: 'លុយ COD រង់ចាំទូទាត់',
    liquidAssets: 'សរុបទ្រព្យសកម្មរាវ',
    payablesTotal: 'សរុបបំណុលត្រូវទូទាត់',
    finalNetCash: '(=) ទឹកប្រាក់សុទ្ធពិតប្រាកដ:',
    bankAccountsTitle: 'ឈ្មោះគណនី / ធនាគារ និងសមតុល្យនីមួយៗ',
    payablesTitle: 'បំណុលត្រូវទូទាត់',
    todayExpTitle: 'ការចំណាយថ្ងៃនេះ',
    teamSalesTitle: 'ការលក់តាមក្រុម (Team Sales)',
    target100: 'គោលដៅ ១០០ ប្រអប់',
    homeDock: 'ទំព័រដើម',
    analyticsDock: 'វិភាគ',
    orderDock: 'Order',
    learningDock: 'អង់គ្លេស',
    settingsDock: 'កំណត់',
    settingsTitle: 'ការកំណត់',
    protectApp: 'ការពារ SD Data របស់អ្នក ជាមួយលេខសម្ងាត់ ៤ ខ្ទង់',
    protectDesc: 'ប្រើលេខសម្ងាត់ ដើម្បីសុវត្ថិភាព និងទំនុកចិត្តខ្ពស់',
    changePinBtn: 'ប្តូរលេខកូដសម្ងាត់ (Change PIN)',
    theme: 'ទម្រង់បង្ហាញ (Theme)',
    dark: 'ងងឹត (Dark)',
    light: 'ភ្លឺ (Light)',
    language: 'ភាសា (Language)',
    lockScreenNow: 'ចាក់សោអេក្រង់ឥឡូវនេះ (Lock Screen)',
    aboutMe: 'អំពីខ្ញុំ (About Me)',
    noData: 'គ្មានទិន្នន័យ',
    diagramTitle: 'ដ្យាក្រាមការលក់ & ប្រាក់ចំណេញ (Diagram)',
    diagramSubtitle: 'តួលេខលក់ពិតប្រាកដនៅលើសរសរក្រាបនីមួយៗ'
  },
  en: {
    appTitle: 'SD Data',
    securityPrompt: 'Enter 4-Digit Passcode',
    clear: 'Clear',
    pureCashTitle: 'Available Funds (Pure Cash)',
    pureCashSubtitle: 'ABA + ACLEDA + Cash Wallet',
    usdOnly: 'Pure USD',
    khrOnly: 'Pure KHR',
    today: 'Today',
    thisMonth: 'Month',
    thisYear: 'Year',
    custom: 'Custom',
    totalBoxes: 'Total Sales (Tap to View)',
    revenue: 'Total Revenue',
    grossProfit: 'Gross Profit',
    expenses: 'Total Expenses',
    boxUnit: 'Boxes',
    pendingCodTitle: '📦 Accounts Receivable (Pending COD)',
    pendingCodHint: 'Swipe 4-ways to view all from Bank & Cash Balance',
    netCashTitle: '📈 Net Cash Position Summary',
    actualCash: 'Total Actual Cash',
    pendingCod: 'Pending COD / Receivables',
    liquidAssets: 'Total Liquid Assets',
    payablesTotal: 'Total Accounts Payable',
    finalNetCash: '(=) Net Cash Position:',
    bankAccountsTitle: 'Bank Accounts & Balances',
    payablesTitle: 'Accounts Payable',
    todayExpTitle: "Today's Expenses",
    teamSalesTitle: 'Team Sales Performance',
    target100: 'Target: 100 Boxes',
    homeDock: 'Home',
    analyticsDock: 'Analytics',
    orderDock: 'Order',
    learningDock: 'English',
    settingsDock: 'Settings',
    settingsTitle: 'Settings',
    protectApp: 'Protect your SD Data with 4-digit PIN',
    protectDesc: 'Use passcode for higher security and peace of mind',
    changePinBtn: 'Change Passcode (PIN)',
    theme: 'Theme Mode',
    dark: 'Dark Mode',
    light: 'Light Mode',
    language: 'Language',
    lockScreenNow: 'Lock Screen Now',
    aboutMe: 'About Me',
    noData: 'No Data Available',
    diagramTitle: 'Sales & Profit Diagram',
    diagramSubtitle: 'Live values labeled on top of each bar'
  }
};

const appState = {
  currentView: 'dashboard',
  hideBalance: false,
  periodFilter: 'today',
  customStartDate: '',
  customEndDate: '',
  language: localStorage.getItem('sd_lang') || 'km',
  theme: localStorage.getItem('sd_theme') || 'dark',
  isLocked: !sessionStorage.getItem('sd_unlocked'),
  enteredPin: '',
  correctPin: localStorage.getItem('sd_pin') || '1234',
  hasReadNotifications: false
};

function t(key) {
  const lang = appState.language === 'en' ? 'en' : 'km';
  return translations[lang][key] || key;
}

const DAILY_ENGLISH_WORDS = [
  { en: 'Dashboard', pron: 'ដាសប៊ត', pos: 'Noun', km: 'ផ្ទាំងសង្ខេបទិន្នន័យ', ex: 'The dashboard displays real-time sales.' },
  { en: 'Transaction', pron: 'ត្រេនសាក់សិន', pos: 'Noun', km: 'ប្រតិបត្តិការទិញ-លក់', ex: 'Every transaction is recorded accurately.' },
  { en: 'Receivable', pron: 'រីស៊ីវ៉ាបល', pos: 'Noun', km: 'ប្រាក់ត្រូវប្រមូល (COD/ជំពាក់)', ex: 'Track pending COD in accounts receivable.' },
  { en: 'Payable', pron: 'ផេយ៉ាបល', pos: 'Noun', km: 'បំណុលត្រូវទូទាត់ (ថ្លៃទំនិញ/ដឹក)', ex: 'Pay bills on time under accounts payable.' },
  { en: 'Balance', pron: 'បាឡានស៍', pos: 'Noun', km: 'សមតុល្យសាច់ប្រាក់សុទ្ធ', ex: 'Check pure cash balance across bank accounts.' }
];

function formatUSD(num) {
  if (num === null || num === undefined || isNaN(num)) return '$0.00';
  return '$' + Number(num).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatKHR(num) {
  if (num === null || num === undefined || isNaN(num)) return '0 ៛';
  return Number(Math.round(num)).toLocaleString('en-US') + ' ៛';
}

function formatInt(num) {
  if (num === null || num === undefined || isNaN(num)) return '0';
  return Number(num).toLocaleString('en-US');
}

function displayDDMMYYYY(isoOrDateStr) {
  if (!isoOrDateStr) return '';
  const s = String(isoOrDateStr).trim();
  const m = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (m) {
    return `${m[3].padStart(2, '0')}/${m[2].padStart(2, '0')}/${m[1]}`;
  }
  return s;
}

// ==========================================
// 1. Passcode & Lock Screen
// ==========================================
function updateLockClock() {
  const timeEl = document.getElementById('lock-time');
  const calEl = document.getElementById('lock-calendar');
  if (!timeEl || !calEl) return;

  const now = new Date();
  timeEl.textContent = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  calEl.textContent = now.toLocaleDateString(appState.language === 'km' ? 'km-KH' : 'en-US', options);
}

function pressPin(num) {
  if (appState.enteredPin.length < 4) {
    appState.enteredPin += num;
    updatePinDots();
    if (appState.enteredPin.length === 4) {
      setTimeout(() => verifyPin(), 100);
    }
  }
}

function deletePin() {
  appState.enteredPin = appState.enteredPin.slice(0, -1);
  updatePinDots();
}

function clearPin() {
  appState.enteredPin = '';
  updatePinDots();
}

function updatePinDots() {
  const dots = document.querySelectorAll('#pin-dots div');
  dots.forEach((dot, idx) => {
    if (idx < appState.enteredPin.length) {
      dot.className = 'w-3.5 h-3.5 rounded-full bg-orange-400 border border-orange-400 scale-110 transition-all duration-200';
    } else {
      dot.className = 'w-3.5 h-3.5 rounded-full border border-slate-500 transition-all duration-200';
    }
  });
}

function verifyPin() {
  const prompt = document.getElementById('lock-prompt');
  if (appState.enteredPin === appState.correctPin) {
    sessionStorage.setItem('sd_unlocked', 'true');
    appState.isLocked = false;
    const lockScreen = document.getElementById('lock-screen');
    lockScreen.classList.add('opacity-0', 'pointer-events-none', '-translate-y-full');
    setTimeout(() => lockScreen.classList.add('hidden'), 500);
  } else {
    prompt.textContent = 'លេខកូដមិនត្រឹមត្រូវទេ!';
    prompt.classList.add('text-rose-400');
    setTimeout(() => {
      appState.enteredPin = '';
      updatePinDots();
      prompt.textContent = t('securityPrompt');
      prompt.classList.remove('text-rose-400');
    }, 800);
  }
}

function lockApp() {
  sessionStorage.removeItem('sd_unlocked');
  appState.isLocked = true;
  appState.enteredPin = '';
  updatePinDots();
  const lockScreen = document.getElementById('lock-screen');
  lockScreen.classList.remove('hidden', '-translate-y-full');
  setTimeout(() => lockScreen.classList.remove('opacity-0', 'pointer-events-none'), 10);
}

// ==========================================
// 2. Initialization & Data Engine
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(appState.theme);

  setInterval(updateLockClock, 1000);
  updateLockClock();

  if (sessionStorage.getItem('sd_unlocked') === 'true') {
    const lockScreen = document.getElementById('lock-screen');
    if (lockScreen) lockScreen.classList.add('hidden');
  }

  setupPullToRefresh();
  setupSmartDockScroll();

  DataService.subscribe(onDataUpdated);
  DataService.fetchData();
  DataService.startAutoReload(5);

  renderCurrentView();
});

function onDataUpdated(service) {
  updateReloadBadge(service);
  renderCurrentView();
}

function updateReloadBadge(service) {
  const timeText = document.getElementById('reload-time-text');
  const icon = document.getElementById('reload-icon');
  const notifBadge = document.getElementById('notif-badge');

  if (service.isLoading) {
    if (icon) icon.classList.add('animate-spin');
    if (timeText) timeText.textContent = '...';
  } else {
    if (icon) icon.classList.remove('animate-spin');
    if (service.lastFetched && timeText) {
      timeText.textContent = service.lastFetched.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit' });
    }
  }

  if (notifBadge) {
    const count = service.unreadNotifications.length;
    if (count > 0 && !appState.hasReadNotifications) {
      notifBadge.textContent = count;
      notifBadge.classList.remove('hidden');
    } else {
      notifBadge.classList.add('hidden');
    }
  }
}

function manualReload() {
  DataService.fetchData(false);
}

function setupPullToRefresh() {
  const main = document.getElementById('main-content');
  const indicator = document.getElementById('pull-refresh-indicator');
  let startY = 0;
  let isPulling = false;

  main.addEventListener('touchstart', (e) => {
    if (main.scrollTop === 0) {
      startY = e.touches[0].pageY;
      isPulling = true;
    }
  }, { passive: true });

  main.addEventListener('touchmove', (e) => {
    if (!isPulling) return;
    const diff = e.touches[0].pageY - startY;
    if (diff > 40 && main.scrollTop === 0) {
      indicator.style.height = '35px';
    }
  }, { passive: true });

  main.addEventListener('touchend', () => {
    if (isPulling && indicator.style.height === '35px') {
      manualReload();
      setTimeout(() => {
        indicator.style.height = '0px';
      }, 1000);
    } else {
      indicator.style.height = '0px';
    }
    isPulling = false;
  });
}

// Smart Dock Auto-Hide on Fast Scroll Down, Re-appear on Scroll Up or Stop
function setupSmartDockScroll() {
  const main = document.getElementById('main-content');
  const dock = document.getElementById('bottom-dock');
  if (!main || !dock) return;

  let lastScrollTop = 0;
  let scrollTimeout = null;

  main.addEventListener('scroll', () => {
    const currentScrollTop = main.scrollTop;
    const diff = currentScrollTop - lastScrollTop;

    // Scrolling down strongly
    if (diff > 15 && currentScrollTop > 80) {
      dock.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
    } 
    // Scrolling up even slightly or near top
    else if (diff < -5 || currentScrollTop <= 30) {
      dock.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    }

    lastScrollTop = currentScrollTop;

    // When scrolling stops, automatically restore dock after 600ms
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      dock.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    }, 600);
  }, { passive: true });
}

function toggleHideBalance() {
  appState.hideBalance = !appState.hideBalance;
  renderCurrentView();
}

// ==========================================
// 3. Navigation & Dock Switcher
// ==========================================
function switchView(viewName) {
  const isAlreadyDashboard = (appState.currentView === 'dashboard' && viewName === 'dashboard');
  appState.currentView = viewName;

  const main = document.getElementById('main-content');
  if (viewName === 'dashboard') {
    // Scroll to the very top smoothly
    if (main) {
      main.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // Refresh latest data from Google Sheet
    manualReload();
  }

  const filterBar = document.getElementById('sticky-filter-bar');
  if (filterBar) {
    if (viewName === 'dashboard') {
      filterBar.classList.remove('hidden');
    } else {
      filterBar.classList.add('hidden');
    }
  }

  ['dashboard', 'analytics', 'learning', 'settings'].forEach(v => {
    const btn = document.getElementById(`dock-btn-${v}`);
    if (btn) {
      if (v === viewName) {
        btn.className = 'dock-btn flex-1 flex flex-col items-center justify-center py-1 rounded-full text-orange-400 transition';
      } else {
        btn.className = 'dock-btn flex-1 flex flex-col items-center justify-center py-1 rounded-full text-slate-400 hover:text-white transition';
      }
    }
  });

  renderCurrentView();

  // Ensure scroll is at top after view render if switched/clicked home
  if (viewName === 'dashboard' && main) {
    setTimeout(() => {
      main.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  }
}

function toggleDayDropdown(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('day-dropdown-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

function selectDayFilter(subMode, event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('day-dropdown-menu');
  if (menu) menu.classList.add('hidden');

  appState.daySubFilter = subMode; // 'today' or 'yesterday'
  
  // Update Day Pill Label
  const labelEl = document.getElementById('day-pill-label');
  if (labelEl) {
    labelEl.textContent = subMode === 'yesterday' ? 'ម្សិលមិញ' : 'ថ្ងៃនេះ';
  }

  // Update Check icons
  const checkToday = document.getElementById('check-today');
  const checkYesterday = document.getElementById('check-yesterday');
  if (checkToday && checkYesterday) {
    if (subMode === 'yesterday') {
      checkToday.classList.add('hidden');
      checkYesterday.classList.remove('hidden');
    } else {
      checkToday.classList.remove('hidden');
      checkYesterday.classList.add('hidden');
    }
  }

  setPeriodFilter('today');
}

// Close day dropdown if clicked outside
document.addEventListener('click', (e) => {
  const menu = document.getElementById('day-dropdown-menu');
  const btn = document.getElementById('filter-btn-today');
  if (menu && !menu.classList.contains('hidden')) {
    if (!menu.contains(e.target) && !btn.contains(e.target)) {
      menu.classList.add('hidden');
    }
  }
});

function setPeriodFilter(mode) {
  appState.periodFilter = mode;

  // Update top filter buttons style
  const todayBtn = document.getElementById('filter-btn-today');
  if (todayBtn) {
    if (mode === 'today') {
      todayBtn.className = 'w-full py-1.5 px-2 rounded-xl text-xs font-semibold text-center transition dock-btn bg-orange-500 text-white shadow-md flex items-center justify-center gap-0.5';
    } else {
      todayBtn.className = 'w-full py-1.5 px-2 rounded-xl text-xs font-semibold text-center transition dock-btn text-slate-400 hover:text-white flex items-center justify-center gap-0.5';
    }
  }

  ['month', 'year', 'custom'].forEach(m => {
    const btn = document.getElementById(`filter-btn-${m}`);
    if (btn) {
      if (m === mode) {
        btn.className = 'flex-1 py-1.5 px-2 rounded-xl text-xs font-semibold text-center transition dock-btn bg-orange-500 text-white shadow-md';
      } else {
        btn.className = 'flex-1 py-1.5 px-2 rounded-xl text-xs font-semibold text-center transition dock-btn text-slate-400 hover:text-white';
      }
    }
  });

  const customContainer = document.getElementById('custom-date-container');
  if (customContainer) {
    if (mode === 'custom') {
      customContainer.classList.remove('hidden');
    } else {
      customContainer.classList.add('hidden');
    }
  }

  renderCurrentView();
}

function applyCustomRangeFilter() {
  const start = document.getElementById('custom-start-date').value;
  const end = document.getElementById('custom-end-date').value;
  if (!start || !end) {
    alert('សូមជ្រើសរើសថ្ងៃចាប់ផ្តើម និងថ្ងៃបញ្ចប់!');
    return;
  }
  appState.customStartDate = start;
  appState.customEndDate = end;
  renderCurrentView();
}

function renderCurrentView() {
  const container = document.getElementById('main-content');
  if (!container) return;

  // Update Dynamic Dock Labels based on Language
  updateStaticLabels();

  switch (appState.currentView) {
    case 'dashboard':
      container.innerHTML = getDashboardViewHTML();
      break;
    case 'analytics':
      container.innerHTML = getAnalyticsViewHTML();
      break;
    case 'learning':
      container.innerHTML = getLearningViewHTML();
      break;
    case 'settings':
      container.innerHTML = getSettingsViewHTML();
      break;
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function updateStaticLabels() {
  const dockHome = document.querySelector('#dock-btn-dashboard span');
  const dockAnalytics = document.querySelector('#dock-btn-analytics span');
  const dockLearn = document.querySelector('#dock-btn-learning span');
  const dockSettings = document.querySelector('#dock-btn-settings span');

  const filterToday = document.getElementById('filter-btn-today');
  const filterMonth = document.getElementById('filter-btn-month');
  const filterYear = document.getElementById('filter-btn-year');
  const filterCustom = document.getElementById('filter-btn-custom');

  if (dockHome) dockHome.textContent = t('homeDock');
  if (dockAnalytics) dockAnalytics.textContent = t('analyticsDock');
  if (dockLearn) dockLearn.textContent = t('learningDock');
  if (dockSettings) dockSettings.textContent = t('settingsDock');

  if (filterToday) filterToday.textContent = t('today');
  if (filterMonth) filterMonth.textContent = t('thisMonth');
  if (filterYear) filterYear.textContent = t('thisYear');
  if (filterCustom) filterCustom.textContent = t('custom');
}

// ==========================================
// 4. View: Dashboard
// ==========================================
function getDashboardViewHTML() {
  const d = DataService.data;
  if (!d) {
    return `
      <div class="py-24 flex flex-col items-center justify-center text-center">
        <div class="w-12 h-12 rounded-full border-4 border-orange-500/20 border-t-orange-500 animate-spin mb-4"></div>
        <p class="text-xs text-slate-400">កំពុងភ្ជាប់ទៅកាន់ Google Sheet...</p>
      </div>
    `;
  }

  const now = new Date();
  const currentIsoDay = now.toISOString().slice(0, 10);
  const currentIsoMonth = currentIsoDay.slice(0, 7);
  const currentIsoYear = currentIsoDay.slice(0, 4);

  let filteredSales = d.personalSales;
  let filteredExpenses = d.expenses;
  let activePeriodDisplay = '';

  if (appState.periodFilter === 'today') {
    if (appState.daySubFilter === 'yesterday') {
      const yDate = new Date();
      yDate.setDate(yDate.getDate() - 1);
      const yesterdayIsoDay = yDate.toISOString().slice(0, 10);
      const hasYesterday = d.personalSales.some(s => s.isoDate === yesterdayIsoDay);
      const targetIsoDay = hasYesterday ? yesterdayIsoDay : (d.personalSales[1]?.isoDate || '2026-08-11');
      filteredSales = d.personalSales.filter(s => s.isoDate === targetIsoDay);
      filteredExpenses = d.expenses.filter(e => e.isoDate === targetIsoDay);
      activePeriodDisplay = `ម្សិលមិញ (${displayDDMMYYYY(targetIsoDay)})`;
    } else {
      const hasToday = d.personalSales.some(s => s.isoDate === currentIsoDay);
      const targetIsoDay = hasToday ? currentIsoDay : (d.personalSales[0]?.isoDate || '2026-08-12');
      filteredSales = d.personalSales.filter(s => s.isoDate === targetIsoDay);
      filteredExpenses = d.expenses.filter(e => e.isoDate === targetIsoDay);
      activePeriodDisplay = `${t('today')} (${displayDDMMYYYY(targetIsoDay)})`;
    }
  } else if (appState.periodFilter === 'month') {
    const hasMonth = d.personalSales.some(s => s.isoDate.startsWith(currentIsoMonth));
    const targetMonth = hasMonth ? currentIsoMonth : '2026-08';
    filteredSales = d.personalSales.filter(s => s.isoDate.startsWith(targetMonth));
    filteredExpenses = d.expenses.filter(e => e.isoDate.startsWith(targetMonth));
    const parts = targetMonth.split('-');
    activePeriodDisplay = `${t('thisMonth')} (${parts[1]}/${parts[0]})`;
  } else if (appState.periodFilter === 'year') {
    filteredSales = d.personalSales.filter(s => s.isoDate.startsWith(currentIsoYear));
    filteredExpenses = d.expenses.filter(e => e.isoDate.startsWith(currentIsoYear));
    activePeriodDisplay = `${t('thisYear')} (${currentIsoYear})`;
  } else if (appState.periodFilter === 'custom' && appState.customStartDate && appState.customEndDate) {
    filteredSales = d.personalSales.filter(s => s.isoDate >= appState.customStartDate && s.isoDate <= appState.customEndDate);
    filteredExpenses = d.expenses.filter(e => e.isoDate >= appState.customStartDate && e.isoDate <= appState.customEndDate);
    activePeriodDisplay = `${displayDDMMYYYY(appState.customStartDate)} ➔ ${displayDDMMYYYY(appState.customEndDate)}`;
  } else {
    activePeriodDisplay = 'All Period';
  }

  // Monthly Expense & Budget ($450/mo target) Calculation based on selected period
  let targetMonthKey = currentIsoMonth; // 'YYYY-MM'
  if (appState.periodFilter === 'month') {
    const hasMonth = d.expenses.some(e => e.isoDate.startsWith(currentIsoMonth));
    targetMonthKey = hasMonth ? currentIsoMonth : '2026-08';
  } else if (appState.periodFilter === 'today') {
    const hasToday = d.expenses.some(e => e.isoDate === currentIsoDay);
    const targetIsoDay = hasToday ? currentIsoDay : (d.personalSales[0]?.isoDate || '2026-08-12');
    targetMonthKey = targetIsoDay.slice(0, 7);
  } else if (appState.periodFilter === 'custom' && appState.customStartDate) {
    targetMonthKey = appState.customStartDate.slice(0, 7);
  }

  const selectedMonthNum = targetMonthKey.split('-')[1] || '10';
  const monthlyExpensesList = d.expenses.filter(e => e.isoDate.startsWith(targetMonthKey));
  const monthlyTotalExpenseAmt = monthlyExpensesList.reduce((sum, e) => sum + (e.amount || 0), 0);
  const monthlyBudgetGoal = 450.0;
  const remainingBudget = monthlyBudgetGoal - monthlyTotalExpenseAmt;

  const totalBoxQty = filteredSales.reduce((acc, cur) => acc + (cur.totalBoxQty || 0), 0);
  const totalRevenue = filteredSales.reduce((acc, cur) => acc + (cur.totalAmount || 0), 0);
  const totalGrossProfit = filteredSales.reduce((acc, cur) => acc + (cur.profit || 0), 0);
  const totalExpenseAmt = filteredExpenses.reduce((acc, cur) => acc + (cur.amount || 0), 0);

  const pureUsd = d.bank.pureUsdTotal;
  const pureKhr = d.bank.pureKhrTotal;
  const netCash = d.bank.netCashPosition;

  return `
    <!-- HERO BALANCE CARD (ទឹកប្រាក់ដែលមាន) -->
    <div class="ios-glass-card rounded-3xl p-5 relative overflow-hidden liquid-orange-glow">
      <div class="absolute -top-12 -right-12 w-44 h-44 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>

      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30">
            <i data-lucide="wallet" class="w-4 h-4"></i>
          </div>
          <div>
            <!-- Renamed from សាច់ប្រាក់សុទ្ធពិត to ទឹកប្រាក់ដែលមាន -->
            <p class="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">${t('pureCashTitle')}</p>
            <p class="text-[10px] text-amber-200/80">${t('pureCashSubtitle')}</p>
          </div>
        </div>
        <button onclick="toggleHideBalance()" class="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 active:scale-95 transition">
          <i data-lucide="${appState.hideBalance ? 'eye-off' : 'eye'}" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- Currency Balances -->
      <div class="grid grid-cols-2 gap-3 mb-2">
        <div class="bg-black/25 rounded-2xl p-3 border border-white/5">
          <p class="text-[10px] text-slate-400 mb-0.5">${t('usdOnly')}</p>
          <p class="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
            ${appState.hideBalance ? '•••••• $' : formatUSD(pureUsd)}
          </p>
        </div>
        <div class="bg-black/25 rounded-2xl p-3 border border-white/5">
          <p class="text-[10px] text-slate-400 mb-0.5">${t('khrOnly')}</p>
          <p class="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tracking-tight">
            ${appState.hideBalance ? '•••••• ៛' : formatKHR(pureKhr)}
          </p>
        </div>
      </div>
    </div>

    <!-- Active Period Display (Home only) -->
    <div class="flex items-center justify-between px-1">
      <span class="text-xs text-slate-300 font-medium">📌 ${activePeriodDisplay}</span>
      <span class="text-[10px] text-orange-400 font-mono">Personal Sales</span>
    </div>

    <!-- UNIFIED SALES & EXPENSES PERFORMANCE CARD (តូចល្មម និងតែមួយដូចរូបទី ២) -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10 relative overflow-hidden">
      
      <!-- Top Card Header: Title (Clean without action buttons) -->
      <div class="flex items-center gap-2 mb-3">
        <div class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
          <i data-lucide="bar-chart" class="w-4 h-4"></i>
        </div>
        <div>
          <h3 class="font-bold text-xs uppercase tracking-wider text-white leading-tight">
            📊 សង្ខេបការលក់ & ចំណាយ
          </h3>
          <p class="text-[10px] text-slate-400 font-mono leading-tight">Sales & Expense Performance</p>
        </div>
      </div>

      <!-- 4 Mini Grid Boxes (2x2 layout matching Image 2) -->
      <div class="grid grid-cols-2 gap-2 text-xs mb-2.5">
        
        <!-- Box 1: Total Box Qty (With View / មើល > Button) -->
        <div onclick="openPersonalSalesModal()" 
             class="p-2.5 rounded-xl bg-black/25 border border-white/5 cursor-pointer hover:border-orange-500/30 transition group flex flex-col justify-between">
          <div class="flex items-center justify-between mb-1">
            <span class="text-slate-400 text-[10px] leading-tight">
              ${t('totalBoxes')}:
            </span>
            <!-- View Sales Drill-down Button inside Grid 1 -->
            <button onclick="event.stopPropagation(); openPersonalSalesModal()" 
                    class="px-1.5 py-0.5 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-400 hover:text-white font-bold text-[10px] flex items-center gap-0.5 active:scale-95 transition">
              <span>${appState.language === 'en' ? 'View' : 'មើល'}</span>
              <i data-lucide="chevron-right" class="w-2.5 h-2.5"></i>
            </button>
          </div>
          <div class="flex items-baseline gap-1 mt-0.5">
            <span class="font-mono text-white font-bold text-base tracking-tight">${formatInt(totalBoxQty)}</span>
            <span class="text-[10px] text-slate-400 font-sans">${t('boxUnit')}</span>
          </div>
        </div>

        <!-- Box 2: Total Revenue -->
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5 flex flex-col justify-between">
          <span class="text-slate-400 text-[10px] block leading-tight mb-1">
            ${t('revenue')}:
          </span>
          <span class="font-mono text-emerald-400 font-bold text-base tracking-tight">${formatUSD(totalRevenue)}</span>
        </div>

        <!-- Box 3: Gross Profit -->
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5 flex flex-col justify-between">
          <span class="text-slate-400 text-[10px] block leading-tight mb-1">
            ${t('grossProfit')}:
          </span>
          <span class="font-mono text-blue-400 font-bold text-base tracking-tight">${formatUSD(totalGrossProfit)}</span>
        </div>

        <!-- Box 4: Monthly Expense (With Shortcut (+) Button) -->
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5 flex flex-col justify-between">
          <div class="flex items-center justify-between mb-1">
            <span class="text-slate-400 text-[10px] leading-tight">
              ចំណាយខែ ${selectedMonthNum}:
            </span>
            <!-- Shortcut (+) to AppSheet / Custom Form inside Grid 4 -->
            <button onclick="openExpenseShortcut()" 
                    oncontextmenu="openShortcutModal(event)"
                    title="ចុចដើម្បីបើក AppSheet (ចុចស្តាំដើម្បីកំណត់ Link)"
                    class="w-5 h-5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30 flex items-center justify-center active:scale-95 transition shadow-sm">
              <i data-lucide="plus" class="w-3 h-3"></i>
            </button>
          </div>
          <span class="font-mono text-rose-400 font-bold text-base tracking-tight mt-0.5">${formatUSD(monthlyTotalExpenseAmt)}</span>
        </div>

      </div>

      <!-- Bottom Highlight Banner (matching Image 2 bottom row: Goal 450$/mo + Remaining Budget + List Icon) -->
      <div class="p-2.5 rounded-xl bg-gradient-to-r from-rose-950/40 via-black/30 to-emerald-950/40 border border-white/10 flex items-center justify-between">
        <div class="flex items-center gap-1.5">
          <span class="text-xs text-slate-300 font-semibold">🎯 កំណត់ចំណាយ 450$/ខែ</span>
        </div>

        <div class="flex items-center gap-2">
          <!-- Remaining Budget text -->
          <span class="text-sm font-bold font-mono ${remainingBudget >= 0 ? 'text-emerald-400' : 'text-rose-400'}">
            ${remainingBudget >= 0 ? `សល់ ${formatUSD(remainingBudget)}` : `លើស ${formatUSD(Math.abs(remainingBudget))}`}
          </span>

          <!-- List Icon: Click to open full monthly expenses drill-down -->
          <button onclick="openExpensesModal(true)" 
                  title="មើលតារាងចំណាយពេញមួយខែ ${selectedMonthNum}"
                  class="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 active:scale-95 transition flex items-center justify-center">
            <i data-lucide="list" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>

    </div>

    <!-- ======================================================== -->
    <!-- CARD A: 📦 ACCOUNTS RECEIVABLE FROM BANK & CASH BALANCE  -->
    <!-- ======================================================== -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-2">
        <h3 class="font-bold text-xs uppercase tracking-wider text-amber-300 flex items-center gap-2">
          <i data-lucide="clock" class="w-4 h-4 text-amber-400"></i>
          <span>${t('pendingCodTitle')}</span>
        </h3>
        <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold">
          ${d.pendingCodReceivables.length}
        </span>
      </div>
      <p class="text-[10px] text-slate-400 mb-3">${t('pendingCodHint')}</p>

      <!-- 4-Way Scroll Container -->
      <div class="overflow-x-auto overflow-y-auto max-h-56 no-scrollbar border border-white/5 rounded-2xl bg-black/30 p-2">
        <table class="w-full text-left text-xs whitespace-nowrap">
          <thead>
            <tr class="text-slate-400 border-b border-white/10 text-[10px]">
              <th class="py-1.5 px-2">ល.រ</th>
              <th class="py-1.5 px-2">កាលបរិច្ឆេទ</th>
              <th class="py-1.5 px-2">ចំនួន</th>
              <th class="py-1.5 px-2">ស្ថានភាព</th>
              <th class="py-1.5 px-2 text-right">ទឹកប្រាក់ ($)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            ${d.pendingCodReceivables.map(item => `
              <tr class="hover:bg-white/5">
                <td class="py-1.5 px-2 font-mono text-orange-400 text-[11px]">${item.no}</td>
                <td class="py-1.5 px-2 text-slate-300 font-mono text-[11px]">${item.date}</td>
                <td class="py-1.5 px-2 text-white font-medium text-[11px]">${item.qtyBoxes}</td>
                <td class="py-1.5 px-2 text-blue-300 text-[11px]">${item.status}</td>
                <td class="py-1.5 px-2 text-right font-mono font-bold text-amber-400 text-[11px]">${formatUSD(item.amount)}</td>
              </tr>
            `).join('') || `<tr><td colspan="5" class="text-center py-4 text-slate-500">${t('noData')}</td></tr>`}
          </tbody>
        </table>
      </div>
    </div>

    <!-- ======================================================== -->
    <!-- CARD B: 📈 NET CASH POSITION (Khmer top, English bottom, badge on right)  -->
    <!-- ======================================================== -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      
      <!-- Top Title (2 lines) and Right-Aligned Cash Health Badge -->
      <div class="flex items-center justify-between mb-3">
        <div>
          <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <i data-lucide="activity" class="w-4 h-4 text-emerald-400"></i>
            <span>📈 សង្ខេបស្ថាពរហិរញ្ញវត្ថុសុទ្ធ</span>
          </h3>
          <p class="text-[10px] text-slate-400 font-mono ml-5">Net Cash Position</p>
        </div>
        <span class="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold text-xs shadow-sm">
          ${netCash.healthStatus}
        </span>
      </div>

      <div class="grid grid-cols-2 gap-2 text-xs">
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5">
          <span class="text-slate-400 text-[10px] block">${t('actualCash')}:</span>
          <span class="font-mono text-white font-bold text-sm">${formatUSD(netCash.totalActualCash)}</span>
        </div>
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5">
          <span class="text-slate-400 text-[10px] block">${t('pendingCod')}:</span>
          <span class="font-mono text-amber-400 font-bold text-sm">${formatUSD(netCash.pendingCodReceivables)}</span>
        </div>
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5">
          <span class="text-slate-400 text-[10px] block">${t('liquidAssets')}:</span>
          <span class="font-mono text-blue-400 font-bold text-sm">${formatUSD(netCash.totalLiquidAssets)}</span>
        </div>
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5">
          <span class="text-slate-400 text-[10px] block">${t('payablesTotal')}:</span>
          <span class="font-mono text-rose-400 font-bold text-sm">${formatUSD(netCash.totalAccountsPayable)}</span>
        </div>
      </div>
      <div class="mt-2 p-2.5 rounded-xl bg-gradient-to-r from-emerald-950/40 to-blue-950/40 border border-emerald-500/20 flex items-center justify-between">
        <span class="text-xs text-white font-semibold">${t('finalNetCash')}</span>
        <span class="text-base font-bold font-mono text-emerald-400">${formatUSD(netCash.netCashPositionFinal || netCash.totalNetCash)}</span>
      </div>
    </div>

    <!-- CARD C: 🏦 BANK ACCOUNTS BREAKDOWN -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
        <i data-lucide="building-2" class="w-4 h-4 text-blue-400"></i>
        <span>${t('bankAccountsTitle')}</span>
      </h3>
      <div class="space-y-1.5 max-h-48 overflow-y-auto no-scrollbar">
        ${d.bank.accounts.map(acc => `
          <div class="flex items-center justify-between p-2 rounded-xl bg-black/25 border border-white/5 text-xs">
            <span class="text-white font-medium">${acc.name}</span>
            <div class="text-right font-mono">
              ${acc.usd > 0 ? `<span class="text-white font-bold">${formatUSD(acc.usd)}</span>` : ''}
              ${acc.khr > 0 ? `<span class="text-emerald-400 font-bold ml-1">${formatKHR(acc.khr)}</span>` : ''}
              ${acc.usd === 0 && acc.khr === 0 ? `<span class="text-slate-500">$0.00</span>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- CARD D: 💳 PAYABLES & EXPENSES (Side-by-side with View buttons & scrollable lists) -->
    <div class="grid grid-cols-2 gap-3">
      
      <!-- Accounts Payable (បំណុលត្រូវទូទាត់) -->
      <div class="ios-glass-card rounded-3xl p-3.5 border border-white/10 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-[11px] text-rose-300 flex items-center gap-1 truncate">
              <i data-lucide="credit-card" class="w-3.5 h-3.5 shrink-0"></i>
              <span class="truncate">${t('payablesTitle')}</span>
            </h4>
            <button onclick="openPayablesModal()" 
                    class="text-[10px] text-rose-400 font-semibold hover:underline flex items-center gap-0.5 shrink-0 bg-rose-500/10 px-1.5 py-0.5 rounded-md border border-rose-500/20 active:scale-95 transition">
              ${appState.language === 'en' ? 'View' : 'មើល'} <i data-lucide="chevron-right" class="w-2.5 h-2.5"></i>
            </button>
          </div>
          <div class="space-y-1.5 max-h-36 overflow-y-auto no-scrollbar pr-0.5">
            ${d.bank.payables.map((p, idx) => `
              <div class="flex items-center justify-between text-[11px] py-1 border-b border-white/5">
                <span class="text-white truncate max-w-[85px] sm:max-w-[120px]" title="${p.title}">${idx + 1}. ${p.title}</span>
                <span class="font-mono text-rose-400 font-semibold shrink-0">${formatUSD(p.amount)}</span>
              </div>
            `).join('') || `<p class="text-[10px] text-slate-500 py-2 text-center">${t('noData')}</p>`}
          </div>
        </div>
        <div class="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400 mt-2">
          <span>សរុប ${d.bank.payables.length} មុខ</span>
          <span class="font-mono text-rose-400 font-bold">${formatUSD(netCash.totalAccountsPayable)}</span>
        </div>
      </div>

      <!-- Expenses (ការចំណាយរត់តាមថ្ងៃ/Filter) -->
      <div class="ios-glass-card rounded-3xl p-3.5 border border-white/10 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-2">
            <h4 class="font-bold text-[11px] text-slate-300 flex items-center gap-1 truncate">
              <i data-lucide="receipt" class="w-3.5 h-3.5 text-orange-400 shrink-0"></i>
              <span class="truncate">${t('todayExpTitle')}</span>
            </h4>
            <button onclick="openExpensesModal()" 
                    class="text-[10px] text-orange-400 font-semibold hover:underline flex items-center gap-0.5 shrink-0 bg-orange-500/10 px-1.5 py-0.5 rounded-md border border-orange-500/20 active:scale-95 transition">
              ${appState.language === 'en' ? 'View' : 'មើល'} <i data-lucide="chevron-right" class="w-2.5 h-2.5"></i>
            </button>
          </div>
          <div class="space-y-1.5 max-h-36 overflow-y-auto no-scrollbar pr-0.5">
            ${filteredExpenses.map((e, idx) => `
              <div class="flex items-center justify-between text-[11px] py-1 border-b border-white/5">
                <div class="truncate max-w-[80px] sm:max-w-[110px]" title="${e.description || e.category}">
                  <p class="text-white truncate text-[10px] leading-tight">${e.description || e.category}</p>
                  <p class="text-[9px] text-slate-400 font-mono leading-tight">${e.date}</p>
                </div>
                <span class="font-mono text-rose-400 font-semibold shrink-0">${formatUSD(e.amount)}</span>
              </div>
            `).join('') || `<p class="text-[10px] text-slate-500 py-2 text-center">${t('noData')}</p>`}
          </div>
        </div>
        <div class="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400 mt-2">
          <span>សរុប ${filteredExpenses.length} មុខ</span>
          <span class="font-mono text-rose-400 font-bold">${formatUSD(totalExpenseAmt)}</span>
        </div>
      </div>

    </div>

    <!-- CARD E: TEAM SALES - DYNAMIC TARGET FROM GOOGLE SHEET (High-Security Style Badge) -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <i data-lucide="users" class="w-4 h-4 text-blue-400"></i>
          <span class="whitespace-nowrap">${t('teamSalesTitle')}</span>
        </h3>
        
        <!-- Target Highlight Badge (ដូចកន្លែង សុវត្ថិភាពខ្ពស់ / High Security Badge) -->
        <div class="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center gap-1 shadow-sm">
          <span class="text-[10px] text-blue-300 font-semibold">🎯 គោលដៅខែ ${selectedMonthNum}:</span>
          <span class="text-xs text-blue-400 font-bold font-mono">
            ${(d.teamLeaders.reduce((acc, cur) => acc + (cur.targetGoal || 100), 0))} ប្រអប់
          </span>
        </div>
      </div>

      <div class="space-y-2.5">
        ${d.teamLeaders.map(tl => `
          <div class="p-3 rounded-2xl bg-black/25 border border-white/5 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <span class="font-bold text-xs text-white whitespace-nowrap">${tl.name}</span>
                ${tl.name === 'ស្តី ស្តើង' ? '<img src="blue-tick.png" alt="Verified" class="w-3.5 h-3.5 object-contain shrink-0">' : ''}
                <!-- Leader Target Badge -->
                <span class="px-1.5 py-0.5 rounded-md bg-white/5 text-[9px] text-slate-400 font-mono border border-white/5">
                  គោលដៅ: <strong class="text-blue-300">${tl.targetGoal || 100}</strong>
                </span>
              </div>
              <span class="font-mono text-xs font-bold ${tl.targetPercent >= 100 ? 'text-emerald-400' : 'text-orange-400'} whitespace-nowrap">
                ${tl.totalBoxes} ${t('boxUnit')} (${tl.targetPercent}%)
              </span>
            </div>

            <div class="flex items-center gap-1 text-[10px] text-slate-400">
              <span class="px-1.5 py-0.5 rounded bg-white/5">Set 1: <strong class="text-white">${tl.set1}</strong></span>
              <span class="px-1.5 py-0.5 rounded bg-white/5">Set 2: <strong class="text-white">${tl.set2}</strong></span>
              <span class="px-1.5 py-0.5 rounded bg-white/5">Set 3: <strong class="text-white">${tl.set3}</strong></span>
              <span class="px-1.5 py-0.5 rounded bg-white/5">Set 4: <strong class="text-white">${tl.set4}</strong></span>
            </div>

            <div class="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div class="bg-gradient-to-r from-orange-500 to-amber-400 h-1.5 rounded-full" style="width: ${Math.min(100, tl.targetPercent)}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- AI & TOOLS SECTION (100% Exact Official iOS App Icons: ChatGPT, Claude, Gemini, Google Translate) -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <i data-lucide="sparkles" class="w-4 h-4 text-purple-400"></i>
          <span>ឧបករណ៍ AI & បកប្រែភាសា</span>
        </h3>
        <span class="text-[10px] text-purple-400 font-mono font-semibold">Quick Launch</span>
      </div>

      <div class="grid grid-cols-4 gap-2">
        <!-- 1. ChatGPT (Exact 100% iOS App Store Icon) -->
        <a href="https://chatgpt.com" target="_blank" 
           class="flex flex-col items-center justify-center p-2 rounded-2xl bg-black/25 hover:bg-white/5 border border-white/5 hover:border-white/20 active:scale-95 transition group text-center">
          <img src="chatgpt-ios.png" alt="ChatGPT" 
               class="w-11 h-11 rounded-[12px] object-cover shadow-lg shadow-black/40 group-hover:scale-105 transition mb-1.5 border border-white/10">
          <span class="text-[10px] text-white font-semibold">ChatGPT</span>
        </a>

        <!-- 2. Claude (Exact 100% iOS App Store Icon) -->
        <a href="https://claude.ai" target="_blank" 
           class="flex flex-col items-center justify-center p-2 rounded-2xl bg-black/25 hover:bg-white/5 border border-white/5 hover:border-white/20 active:scale-95 transition group text-center">
          <img src="claude-ios.png" alt="Claude" 
               class="w-11 h-11 rounded-[12px] object-cover shadow-lg shadow-black/40 group-hover:scale-105 transition mb-1.5 border border-white/10">
          <span class="text-[10px] text-white font-semibold">Claude</span>
        </a>

        <!-- 3. Gemini (Exact 100% iOS App Store Icon) -->
        <a href="https://gemini.google.com" target="_blank" 
           class="flex flex-col items-center justify-center p-2 rounded-2xl bg-black/25 hover:bg-white/5 border border-white/5 hover:border-white/20 active:scale-95 transition group text-center">
          <img src="gemini-ios.png" alt="Gemini" 
               class="w-11 h-11 rounded-[12px] object-cover shadow-lg shadow-black/40 group-hover:scale-105 transition mb-1.5 border border-white/10">
          <span class="text-[10px] text-white font-semibold">Gemini</span>
        </a>

        <!-- 4. Google Translate (Exact 100% iOS App Store Icon) -->
        <a href="https://translate.google.com/?sl=en&tl=km" target="_blank" 
           class="flex flex-col items-center justify-center p-2 rounded-2xl bg-black/25 hover:bg-white/5 border border-white/5 hover:border-white/20 active:scale-95 transition group text-center">
          <img src="translate-ios.png" alt="Google Translate" 
               class="w-11 h-11 rounded-[12px] object-cover shadow-lg shadow-black/40 group-hover:scale-105 transition mb-1.5 border border-white/10">
          <span class="text-[10px] text-white font-semibold">Translate</span>
        </a>
      </div>
    </div>
  `;
}

// ==========================================
// 5. View: Analytics
// ==========================================
function getAnalyticsViewHTML() {
  const d = DataService.data;
  if (!d) return '<p class="text-xs text-slate-400 text-center py-20">Loading Diagram...</p>';

  const monthlyStats = {};
  d.personalSales.forEach(s => {
    const mo = s.isoDate.substring(0, 7);
    if (!monthlyStats[mo]) monthlyStats[mo] = { revenue: 0, profit: 0, qty: 0 };
    monthlyStats[mo].revenue += s.totalAmount || 0;
    monthlyStats[mo].profit += s.profit || 0;
    monthlyStats[mo].qty += s.totalBoxQty || 0;
  });

  const months = Object.keys(monthlyStats).sort();
  const maxRevenue = Math.max(...months.map(m => monthlyStats[m].revenue), 100);

  return `
    <div class="space-y-4">
      <div class="ios-glass-card rounded-3xl p-5 border border-white/10">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="font-bold text-sm text-white">${t('diagramTitle')}</h3>
            <p class="text-[11px] text-slate-400">${t('diagramSubtitle')}</p>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">2026 Trend</span>
        </div>

        <div class="h-56 w-full flex items-end gap-2 pt-8 pb-3 px-1 border-b border-white/10">
          ${months.map(m => {
            const stat = monthlyStats[m];
            const revHeight = Math.max(16, Math.round((stat.revenue / maxRevenue) * 140));
            const moName = m.split('-')[1];
            return `
              <div class="flex-1 flex flex-col items-center gap-1.5 group">
                <span class="text-[8px] font-mono font-bold text-amber-300 tracking-tighter block text-center leading-none">
                  $${Math.round(stat.revenue)}
                </span>
                <div class="w-full max-w-[26px] rounded-t-lg bg-gradient-to-t from-orange-600 via-amber-500 to-orange-400 shadow-lg transition-all group-hover:scale-105" 
                     style="height: ${revHeight}px"></div>
                <span class="text-[10px] text-slate-300 font-mono font-semibold">${appState.language === 'en' ? 'M' : 'ខែ'}${moName}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <div class="ios-glass-card rounded-3xl p-5 border border-white/10">
        <h4 class="font-bold text-xs uppercase tracking-wider text-slate-300 mb-3">${appState.language === 'en' ? 'Monthly Summary Table' : 'តារាងសង្ខេបចំណូល-ចំណេញតាមខែ'}</h4>
        <div class="space-y-2">
          ${months.slice(-6).reverse().map(m => `
            <div class="flex items-center justify-between p-2.5 rounded-xl bg-black/25 border border-white/5">
              <div>
                <span class="text-xs font-semibold text-white block">${appState.language === 'en' ? 'Month' : 'ខែ'} ${m.split('-')[1]}/${m.split('-')[0]}</span>
                <span class="text-[10px] text-slate-400 font-mono">${monthlyStats[m].qty} ${t('boxUnit')}</span>
              </div>
              <div class="text-right">
                <span class="font-mono text-xs text-emerald-400 font-bold block">${formatUSD(monthlyStats[m].revenue)}</span>
                <span class="text-[10px] text-blue-400 font-mono">${formatUSD(monthlyStats[m].profit)}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 6. View: Daily English
// ==========================================
function getLearningViewHTML() {
  return `
    <div class="space-y-4">
      <div class="ios-glass-card rounded-3xl p-5 border border-white/10 text-center relative overflow-hidden">
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center mx-auto mb-2 shadow-lg shadow-orange-500/20">
          <i data-lucide="book-open" class="w-6 h-6"></i>
        </div>
        <h3 class="font-bold text-base text-white">រៀនភាសាអង់គ្លេស ១ ថ្ងៃ ៥ ពាក្យ</h3>
        <p class="text-xs text-slate-400 max-w-sm mx-auto mt-1">ពាក្យគន្លឹះសម្រាប់ការងារប្រចាំថ្ងៃ និងកូដបែប UI</p>
      </div>

      <div class="space-y-3">
        ${DAILY_ENGLISH_WORDS.map((w, idx) => `
          <div class="ios-glass-card rounded-2xl p-4 border border-white/10 flex items-start gap-3.5">
            <div class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 font-bold text-sm flex items-center justify-center shrink-0">
              ${idx + 1}
            </div>
            <div class="flex-1">
              <div class="flex items-baseline gap-2 mb-0.5">
                <h4 class="font-bold text-base text-white tracking-wide">${w.en}</h4>
                <span class="text-xs text-orange-400 font-medium">(${w.pron})</span>
                <span class="text-[10px] px-1.5 py-0.2 rounded bg-white/10 text-slate-400">${w.pos}</span>
              </div>
              <p class="text-xs text-emerald-300 font-semibold mb-1.5">👉 ${w.km}</p>
              <div class="p-2 rounded-xl bg-black/30 border border-white/5">
                <p class="text-[11px] text-slate-300 italic font-sans">“${w.ex}”</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ==========================================
// 7. View: Settings (Clean ABA Style)
// ==========================================
function getSettingsViewHTML() {
  const isDark = appState.theme === 'dark';
  const isKm = appState.language === 'km';

  return `
    <div class="space-y-4">
      
      <!-- Profile Header (Phone number removed as requested, only in About Me) -->
      <div class="flex flex-col items-center text-center py-4">
        <div class="relative mb-3">
          <img src="profile.png" alt="SDEY SDOEUNG" 
               class="w-20 h-20 rounded-full object-cover border-3 border-orange-500 shadow-xl">
        </div>
        <div class="flex items-center gap-1.5">
          <h2 class="text-lg font-bold text-white">ស្តី ស្តើង</h2>
          <img src="blue-tick.png" alt="Verified" class="w-4 h-4 object-contain shrink-0">
        </div>
        <p class="text-xs text-orange-400 font-semibold tracking-wider">SDEY SDOEUNG</p>
      </div>

      <!-- Security Card -->
      <div class="bg-gradient-to-r from-[#102A43] to-[#0B1D30] rounded-2xl p-4 border border-blue-500/20 shadow-lg">
        <div class="flex items-start gap-3 mb-3">
          <div class="p-2 rounded-xl bg-blue-500/20 text-blue-400 shrink-0">
            <i data-lucide="shield-check" class="w-5 h-5"></i>
          </div>
          <div>
            <h4 class="font-bold text-xs text-white leading-tight">${t('protectApp')}</h4>
            <p class="text-[11px] text-slate-300 mt-1">${t('protectDesc')}</p>
          </div>
        </div>
        <button onclick="openChangePinModal()" 
                class="w-full py-2.5 rounded-xl bg-[#007AFF] hover:bg-blue-600 text-white font-semibold text-xs transition active:scale-98">
          ${t('changePinBtn')}
        </button>
      </div>

      <!-- Inset List Group (Duplicate Telegram removed) -->
      <div class="bg-[#0F1B2E] rounded-2xl border border-white/10 divide-y divide-white/5 overflow-hidden">
        
        <!-- Theme Toggle -->
        <div class="p-3.5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <i data-lucide="${isDark ? 'moon' : 'sun'}" class="w-4 h-4 text-orange-400"></i>
            <span class="text-xs text-white font-medium">${t('theme')}</span>
          </div>
          <div class="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5">
            <button onclick="toggleTheme('dark')" class="px-2.5 py-1 rounded-lg text-[11px] font-semibold ${isDark ? 'bg-orange-500 text-white' : 'text-slate-400'}">${t('dark')}</button>
            <button onclick="toggleTheme('light')" class="px-2.5 py-1 rounded-lg text-[11px] font-semibold ${!isDark ? 'bg-orange-500 text-white' : 'text-slate-400'}">${t('light')}</button>
          </div>
        </div>

        <!-- Language Toggle -->
        <div class="p-3.5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <i data-lucide="globe" class="w-4 h-4 text-slate-400"></i>
            <span class="text-xs text-white font-medium">${t('language')}</span>
          </div>
          <div class="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5">
            <button onclick="setLanguage('km')" class="px-2.5 py-1 rounded-lg text-[11px] font-semibold ${isKm ? 'bg-orange-500 text-white' : 'text-slate-400'}">ភាសាខ្មែរ</button>
            <button onclick="setLanguage('en')" class="px-2.5 py-1 rounded-lg text-[11px] font-semibold ${!isKm ? 'bg-orange-500 text-white' : 'text-slate-400'}">English</button>
          </div>
        </div>

        <!-- Lock Screen Now -->
        <div onclick="lockApp()" class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition">
          <div class="flex items-center gap-3">
            <i data-lucide="lock" class="w-4 h-4 text-slate-400"></i>
            <span class="text-xs text-white font-medium">${t('lockScreenNow')}</span>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-slate-500"></i>
        </div>

        <!-- អំពីខ្ញុំ (At the very bottom as requested) -->
        <div onclick="openAboutModal()" class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition bg-orange-500/10">
          <div class="flex items-center gap-3">
            <i data-lucide="user-check" class="w-4 h-4 text-orange-400"></i>
            <span class="text-xs text-orange-400 font-bold">${t('aboutMe')}</span>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-orange-400"></i>
        </div>

      </div>

    </div>
  `;
}

// ==========================================
// 8. Drill-down Modals & Actions
// ==========================================
function openPersonalSalesModal() {
  const d = DataService.data;
  if (!d) return;

  const modal = document.getElementById('sales-modal');
  const listEl = document.getElementById('sales-modal-list');
  const subtitle = document.getElementById('sales-modal-subtitle');

  const sortedSales = [...d.personalSales].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  subtitle.textContent = `តារាងកុម្ម៉ង់ទាំងអស់ (${sortedSales.length} នាក់) - ពីថ្ងៃចុងក្រោយមកមុន`;

  listEl.innerHTML = sortedSales.slice(0, 50).map(item => `
    <div class="p-3 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1.5">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-1.5">
          <span class="font-bold text-xs text-white">${item.customer}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 font-mono">${item.orderId}</span>
        </div>
        <span class="font-mono text-emerald-400 font-bold text-xs">${formatUSD(item.totalAmount)}</span>
      </div>
      <div class="text-[11px] text-slate-400 flex items-center justify-between">
        <span>📍 ${item.location || '—'}</span>
        <span>📞 ${item.phone || '—'}</span>
      </div>
      <div class="text-[10px] text-slate-400 flex items-center justify-between pt-1 border-t border-white/5">
        <span>កាលបរិច្ឆេទ: <strong class="text-white">${item.date}</strong></span>
        <span>ប្រអប់: <strong class="text-white">${item.totalBoxQty}</strong></span>
        <span>ចំណេញ: <strong class="text-blue-400">${formatUSD(item.profit)}</strong></span>
        <span class="${item.codStatus.includes('បានទូទាត់') ? 'text-emerald-400' : 'text-amber-400'}">${item.codStatus}</span>
      </div>
    </div>
  `).join('');

  modal.classList.remove('hidden');
}

function closeSalesModal() {
  document.getElementById('sales-modal').classList.add('hidden');
}

function openPayablesModal() {
  const d = DataService.data;
  if (!d) return;

  const modal = document.getElementById('payables-modal');
  const listEl = document.getElementById('payables-modal-list');
  const subtitle = document.getElementById('payables-modal-subtitle');

  if (subtitle) {
    subtitle.textContent = `ទិន្នន័យជាក់ស្តែងពី Bank & Cash Balance (${d.bank.payables.length} មុខ) - សរុប ${formatUSD(d.bank.netCashPosition.totalAccountsPayable)}`;
  }

  if (listEl) {
    listEl.innerHTML = d.bank.payables.map((item, idx) => `
      <div class="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
        <div class="flex items-center gap-2.5">
          <span class="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
            ${idx + 1}
          </span>
          <div>
            <span class="font-bold text-xs text-white block">${item.title}</span>
            <span class="text-[10px] text-slate-400 font-mono">Accounts Payable</span>
          </div>
        </div>
        <span class="font-mono text-rose-400 font-bold text-xs shrink-0">${formatUSD(item.amount)}</span>
      </div>
    `).join('') || `<p class="text-xs text-slate-400 text-center py-6">គ្មានបញ្ជីបំណុលត្រូវទូទាត់ទេ</p>`;
  }

  modal.classList.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function closePayablesModal() {
  document.getElementById('payables-modal').classList.add('hidden');
}

function openExpensesModal(forceMonthly = false) {
  const d = DataService.data;
  if (!d) return;

  const modal = document.getElementById('expenses-modal');
  const listEl = document.getElementById('expenses-modal-list');
  const subtitle = document.getElementById('expenses-modal-subtitle');

  const now = new Date();
  const currentIsoDay = now.toISOString().slice(0, 10);
  const currentIsoMonth = currentIsoDay.slice(0, 7);
  const currentIsoYear = currentIsoDay.slice(0, 4);

  let filteredExpenses = d.expenses;
  let periodLabel = 'ទាំងអស់';

  // If forceMonthly is true (clicked from monthly summary card List icon)
  if (forceMonthly) {
    let targetMonthKey = currentIsoMonth;
    if (appState.periodFilter === 'month') {
      const hasMonth = d.expenses.some(e => e.isoDate.startsWith(currentIsoMonth));
      targetMonthKey = hasMonth ? currentIsoMonth : '2026-08';
    } else if (appState.periodFilter === 'today') {
      const hasToday = d.expenses.some(e => e.isoDate === currentIsoDay);
      const targetIsoDay = hasToday ? currentIsoDay : (d.personalSales[0]?.isoDate || '2026-08-12');
      targetMonthKey = targetIsoDay.slice(0, 7);
    } else if (appState.periodFilter === 'custom' && appState.customStartDate) {
      targetMonthKey = appState.customStartDate.slice(0, 7);
    }
    filteredExpenses = d.expenses.filter(e => e.isoDate.startsWith(targetMonthKey));
    const parts = targetMonthKey.split('-');
    periodLabel = `ពេញមួយខែ ${parts[1]}/${parts[0]}`;
  } else {
    // Normal drill-down from day/period filter
    if (appState.periodFilter === 'today') {
      if (appState.daySubFilter === 'yesterday') {
        const yDate = new Date();
        yDate.setDate(yDate.getDate() - 1);
        const yesterdayIsoDay = yDate.toISOString().slice(0, 10);
        const hasYesterday = d.expenses.some(e => e.isoDate === yesterdayIsoDay);
        const targetIsoDay = hasYesterday ? yesterdayIsoDay : (d.personalSales[1]?.isoDate || '2026-08-11');
        filteredExpenses = d.expenses.filter(e => e.isoDate === targetIsoDay);
        periodLabel = `ម្សិលមិញ (${displayDDMMYYYY(targetIsoDay)})`;
      } else {
        const hasToday = d.expenses.some(e => e.isoDate === currentIsoDay);
        const targetIsoDay = hasToday ? currentIsoDay : (d.personalSales[0]?.isoDate || '2026-08-12');
        filteredExpenses = d.expenses.filter(e => e.isoDate === targetIsoDay);
        periodLabel = `ថ្ងៃនេះ (${displayDDMMYYYY(targetIsoDay)})`;
      }
    } else if (appState.periodFilter === 'month') {
      const hasMonth = d.expenses.some(e => e.isoDate.startsWith(currentIsoMonth));
      const targetMonth = hasMonth ? currentIsoMonth : '2026-08';
      filteredExpenses = d.expenses.filter(e => e.isoDate.startsWith(targetMonth));
      periodLabel = `ខែនេះ (${targetMonth})`;
    } else if (appState.periodFilter === 'year') {
      filteredExpenses = d.expenses.filter(e => e.isoDate.startsWith(currentIsoYear));
      periodLabel = `ឆ្នាំនេះ (${currentIsoYear})`;
    } else if (appState.periodFilter === 'custom' && appState.customStartDate && appState.customEndDate) {
      filteredExpenses = d.expenses.filter(e => e.isoDate >= appState.customStartDate && e.isoDate <= appState.customEndDate);
      periodLabel = `${displayDDMMYYYY(appState.customStartDate)} ➔ ${displayDDMMYYYY(appState.customEndDate)}`;
    }
  }

  const sortedExpenses = [...filteredExpenses].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  const totalAmount = sortedExpenses.reduce((sum, e) => sum + (e.amount || 0), 0);

  if (subtitle) {
    subtitle.textContent = `ការចំណាយតាម ${periodLabel} (${sortedExpenses.length} មុខ) - សរុប ${formatUSD(totalAmount)}`;
  }

  if (listEl) {
    listEl.innerHTML = sortedExpenses.map((item, idx) => `
      <div class="p-3 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1.5">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
              ${idx + 1}
            </span>
            <span class="font-bold text-xs text-white">${item.description || item.category}</span>
          </div>
          <span class="font-mono text-rose-400 font-bold text-xs">${formatUSD(item.amount)}</span>
        </div>
        <div class="text-[10px] text-slate-400 flex items-center justify-between pt-1 border-t border-white/5">
          <span>កាលបរិច្ឆេទ: <strong class="text-white">${item.date}</strong></span>
          <span>ប្រភេទ: <strong class="text-slate-300">${item.category || 'ទូទៅ'}</strong></span>
        </div>
      </div>
    `).join('') || `<p class="text-xs text-slate-400 text-center py-6">គ្មានទិន្នន័យចំណាយសម្រាប់ពេលនេះទេ</p>`;
  }

  modal.classList.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function closeExpensesModal() {
  document.getElementById('expenses-modal').classList.add('hidden');
}

function openAboutModal() {
  document.getElementById('about-modal').classList.remove('hidden');
}

function closeAboutModal() {
  document.getElementById('about-modal').classList.add('hidden');
}

function toggleNotificationsModal() {
  const modal = document.getElementById('notif-modal');
  const feedList = document.getElementById('notif-feed-list');
  const d = DataService.data;

  if (d) {
    feedList.innerHTML = `
      <div class="p-3 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-300 space-y-1">
        <div class="flex items-center justify-between">
          <span class="font-bold text-orange-400 flex items-center gap-1.5">
            <i data-lucide="package" class="w-3.5 h-3.5"></i> Personal Sales
          </span>
          <span class="text-[9px] text-slate-400 font-mono">${new Date().toLocaleDateString('km-KH')}</span>
        </div>
        <p class="text-[11px]">មានប្រតិបត្តិការលក់រាយសរុប <strong>${d.personalSales.length} កុម្ម៉ង់</strong> ត្រូវបានធ្វើបច្ចុប្បន្នភាព។</p>
      </div>

      <div class="p-3 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-300 space-y-1">
        <div class="flex items-center justify-between">
          <span class="font-bold text-rose-400 flex items-center gap-1.5">
            <i data-lucide="receipt" class="w-3.5 h-3.5"></i> Daily Expenses
          </span>
          <span class="text-[9px] text-slate-400 font-mono">${new Date().toLocaleDateString('km-KH')}</span>
        </div>
        <p class="text-[11px]">មានកត់ត្រាចំណាយប្រតិបត្តិការសរុប <strong>${d.expenses.length} មុខ</strong>។</p>
      </div>
    `;
  }

  modal.classList.toggle('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function markAllNotificationsAsRead() {
  appState.hasReadNotifications = true;
  document.getElementById('notif-badge')?.classList?.add('hidden');
  document.getElementById('notif-modal')?.classList?.add('hidden');
}

function openChangePinModal() {
  document.getElementById('change-pin-modal').classList.remove('hidden');
}

function closeChangePinModal() {
  document.getElementById('change-pin-modal').classList.add('hidden');
}

function saveNewPin() {
  const input = document.getElementById('new-pin-input');
  if (input.value && input.value.length === 4) {
    appState.correctPin = input.value;
    localStorage.setItem('sd_pin', input.value);
    alert('លេខកូដសម្ងាត់ត្រូវបានផ្លាស់ប្តូរជោគជ័យ!');
    closeChangePinModal();
  } else {
    alert('សូមវាយលេខកូដសម្ងាត់ឱ្យគ្រប់ ៤ ខ្ទង់!');
  }
}

function toggleTheme(theme) {
  appState.theme = theme;
  localStorage.setItem('sd_theme', theme);
  applyTheme(theme);
  renderCurrentView();
}

function applyTheme(theme) {
  if (theme === 'light') {
    document.body.classList.add('light-theme');
  } else {
    document.body.classList.remove('light-theme');
  }
}

function setLanguage(lang) {
  appState.language = lang;
  localStorage.setItem('sd_lang', lang);
  renderCurrentView();
}

// ==========================================
// AppSheet / Custom Shortcut Handler
// ==========================================
function openExpenseShortcut() {
  const customUrl = localStorage.getItem('sd_shortcut_url');
  if (customUrl && customUrl.trim()) {
    window.open(customUrl.trim(), '_blank');
  } else {
    // Default: AppSheet / Quick Expense Logger
    window.open('https://www.appsheet.com', '_blank');
  }
}

function openShortcutModal(e) {
  if (e) e.stopPropagation();
  const input = document.getElementById('shortcut-url-input');
  if (input) {
    input.value = localStorage.getItem('sd_shortcut_url') || '';
  }
  document.getElementById('shortcut-modal')?.classList?.remove('hidden');
}

function closeShortcutModal() {
  document.getElementById('shortcut-modal')?.classList?.add('hidden');
}

function saveShortcutUrl() {
  const input = document.getElementById('shortcut-url-input');
  if (input) {
    localStorage.setItem('sd_shortcut_url', input.value.trim());
    alert('Shortcut ត្រូវបានរក្សាទុកជោគជ័យ!');
    closeShortcutModal();
  }
}
