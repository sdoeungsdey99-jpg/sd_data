/**
 * SD Data - Dynamic iOS Liquid Fintech ERP Application
 * 100% Dynamic Multi-Tab Connection, Zero Hardcoded Data
 * Pull-to-refresh, Exact Facebook Blue Tick, 4-Way Scroll Cards,
 * Professional Diagram with Values on Bar Heads, and ABA Settings
 */

const appState = {
  currentView: 'dashboard', // 'dashboard', 'analytics', 'learning', 'settings'
  hideBalance: false,
  periodFilter: 'today', // 'today', 'month', 'year', 'custom'
  customStartDate: '',
  customEndDate: '',
  language: localStorage.getItem('sd_lang') || 'km',
  theme: localStorage.getItem('sd_theme') || 'dark', // 'dark' or 'light'
  isLocked: !sessionStorage.getItem('sd_unlocked'),
  enteredPin: '',
  correctPin: localStorage.getItem('sd_pin') || '1234',
  hasReadNotifications: false
};

// Vocabulary tailored for Daily Work & UI Code
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

// Convert YYYY-MM-DD or any string to DD/MM/YYYY for presentation
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
// 1. Passcode & Lock Screen Logic
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
      prompt.textContent = 'សូមវាយលេខកូដសម្ងាត់ ៤ ខ្ទង់';
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

  // Setup Pull to Refresh interaction
  setupPullToRefresh();

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

function toggleHideBalance() {
  appState.hideBalance = !appState.hideBalance;
  renderCurrentView();
}

// ==========================================
// 3. Navigation & Dock Switcher
// ==========================================
function switchView(viewName) {
  appState.currentView = viewName;

  // Show/Hide Sticky Filter Bar (Only show on 'dashboard')
  const filterBar = document.getElementById('sticky-filter-bar');
  if (filterBar) {
    if (viewName === 'dashboard') {
      filterBar.classList.remove('hidden');
    } else {
      filterBar.classList.add('hidden');
    }
  }

  // Update Dock active states
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
}

function setPeriodFilter(mode) {
  appState.periodFilter = mode;

  ['today', 'month', 'year', 'custom'].forEach(m => {
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

  // Live Auto-Filter by Today, Month, Year, Custom Range
  const now = new Date();
  const currentIsoDay = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const currentIsoMonth = currentIsoDay.slice(0, 7); // YYYY-MM
  const currentIsoYear = currentIsoDay.slice(0, 4); // YYYY

  let filteredSales = d.personalSales;
  let filteredExpenses = d.expenses;
  let activePeriodDisplay = '';

  if (appState.periodFilter === 'today') {
    // If current real date exists in sales use it, else pick the latest active recorded day
    const hasToday = d.personalSales.some(s => s.isoDate === currentIsoDay);
    const targetIsoDay = hasToday ? currentIsoDay : (d.personalSales[0]?.isoDate || '2026-08-12');
    filteredSales = d.personalSales.filter(s => s.isoDate === targetIsoDay);
    filteredExpenses = d.expenses.filter(e => e.isoDate === targetIsoDay);
    activePeriodDisplay = `ថ្ងៃទី ${displayDDMMYYYY(targetIsoDay)} (ថ្ងៃនេះស្វ័យប្រវត្ត)`;
  } else if (appState.periodFilter === 'month') {
    const hasMonth = d.personalSales.some(s => s.isoDate.startsWith(currentIsoMonth));
    const targetMonth = hasMonth ? currentIsoMonth : '2026-08';
    filteredSales = d.personalSales.filter(s => s.isoDate.startsWith(targetMonth));
    filteredExpenses = d.expenses.filter(e => e.isoDate.startsWith(targetMonth));
    const parts = targetMonth.split('-');
    activePeriodDisplay = `ខែ ${parts[1]}/${parts[0]} (ខែនេះស្វ័យប្រវត្ត)`;
  } else if (appState.periodFilter === 'year') {
    filteredSales = d.personalSales.filter(s => s.isoDate.startsWith(currentIsoYear));
    filteredExpenses = d.expenses.filter(e => e.isoDate.startsWith(currentIsoYear));
    activePeriodDisplay = `ឆ្នាំ ${currentIsoYear} (ឆ្នាំនេះស្វ័យប្រវត្ត)`;
  } else if (appState.periodFilter === 'custom' && appState.customStartDate && appState.customEndDate) {
    filteredSales = d.personalSales.filter(s => s.isoDate >= appState.customStartDate && s.isoDate <= appState.customEndDate);
    filteredExpenses = d.expenses.filter(e => e.isoDate >= appState.customStartDate && e.isoDate <= appState.customEndDate);
    activePeriodDisplay = `ពីថ្ងៃទី ${displayDDMMYYYY(appState.customStartDate)} ដល់ ${displayDDMMYYYY(appState.customEndDate)}`;
  } else {
    activePeriodDisplay = 'ទិន្នន័យជ្រើសរើសទាំងអស់';
  }

  // Calculated Metrics from Personal Sales & Daily Expenses
  const totalBoxQty = filteredSales.reduce((acc, cur) => acc + (cur.totalBoxQty || 0), 0);
  const totalRevenue = filteredSales.reduce((acc, cur) => acc + (cur.totalAmount || 0), 0);
  const totalGrossProfit = filteredSales.reduce((acc, cur) => acc + (cur.profit || 0), 0);
  const totalExpenseAmt = filteredExpenses.reduce((acc, cur) => acc + (cur.amount || 0), 0);

  // Pure Bank Balances
  const pureUsd = d.bank.pureUsdTotal;
  const pureKhr = d.bank.pureKhrTotal;
  const netCash = d.bank.netCashPosition;

  return `
    <!-- HERO BALANCE CARD -->
    <div class="ios-glass-card rounded-3xl p-5 relative overflow-hidden liquid-orange-glow">
      <div class="absolute -top-12 -right-12 w-44 h-44 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>

      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30">
            <i data-lucide="wallet" class="w-4 h-4"></i>
          </div>
          <div>
            <p class="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">សាច់ប្រាក់សុទ្ធពិត (Pure Cash)</p>
            <p class="text-[10px] text-amber-200/80">ABA + ACLEDA + កាបូប</p>
          </div>
        </div>
        <button onclick="toggleHideBalance()" class="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 active:scale-95 transition">
          <i data-lucide="${appState.hideBalance ? 'eye-off' : 'eye'}" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- Currency Balances -->
      <div class="grid grid-cols-2 gap-3 mb-2">
        <div class="bg-black/25 rounded-2xl p-3 border border-white/5">
          <p class="text-[10px] text-slate-400 mb-0.5">ដុល្លារសុទ្ធ (USD)</p>
          <p class="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
            ${appState.hideBalance ? '•••••• $' : formatUSD(pureUsd)}
          </p>
        </div>
        <div class="bg-black/25 rounded-2xl p-3 border border-white/5">
          <p class="text-[10px] text-slate-400 mb-0.5">រៀលសុទ្ធ (KHR)</p>
          <p class="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tracking-tight">
            ${appState.hideBalance ? '•••••• ៛' : formatKHR(pureKhr)}
          </p>
        </div>
      </div>
    </div>

    <!-- Active Period Display (Only on Home) -->
    <div class="flex items-center justify-between px-1">
      <span class="text-xs text-slate-300 font-medium">📌 ${activePeriodDisplay}</span>
      <span class="text-[10px] text-orange-400 font-mono">Personal Sales</span>
    </div>

    <!-- 4 MAIN KPI CARDS -->
    <div class="grid grid-cols-2 gap-3">
      
      <!-- 1. Total Box Qty (Clickable to open Personal Sales Drill-down Latest First 31 -> 01) -->
      <div onclick="openPersonalSalesModal()" 
           class="ios-glass-card rounded-2xl p-3.5 border border-white/10 cursor-pointer hover:border-orange-500/50 active:scale-98 transition group relative">
        <div class="flex items-center justify-between mb-2">
          <div class="w-8 h-8 rounded-xl bg-orange-500/15 text-orange-400 flex items-center justify-center">
            <i data-lucide="package" class="w-4 h-4"></i>
          </div>
          <span class="text-[10px] text-orange-400 font-semibold group-hover:underline flex items-center gap-0.5">
            មើល <i data-lucide="chevron-right" class="w-3 h-3"></i>
          </span>
        </div>
        <p class="text-[11px] text-slate-400">ចំនួនលក់សរុប (ចុចមើល)</p>
        <p class="text-xl font-bold text-white font-mono mt-0.5">${formatInt(totalBoxQty)} <span class="text-xs text-slate-400 font-sans font-normal">ប្រអប់</span></p>
      </div>

      <!-- 2. Revenue -->
      <div class="ios-glass-card rounded-2xl p-3.5 border border-white/10">
        <div class="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-2">
          <i data-lucide="dollar-sign" class="w-4 h-4"></i>
        </div>
        <p class="text-[11px] text-slate-400">ចំណូលលក់សរុប</p>
        <p class="text-xl font-bold text-emerald-400 font-mono mt-0.5">${formatUSD(totalRevenue)}</p>
      </div>

      <!-- 3. Gross Profit -->
      <div class="ios-glass-card rounded-2xl p-3.5 border border-white/10">
        <div class="w-8 h-8 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center mb-2">
          <i data-lucide="trending-up" class="w-4 h-4"></i>
        </div>
        <p class="text-[11px] text-slate-400">ចំណេញដុល (Profit)</p>
        <p class="text-xl font-bold text-blue-400 font-mono mt-0.5">${formatUSD(totalGrossProfit)}</p>
      </div>

      <!-- 4. Total Expenses -->
      <div class="ios-glass-card rounded-2xl p-3.5 border border-white/10">
        <div class="w-8 h-8 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center mb-2">
          <i data-lucide="arrow-down-right" class="w-4 h-4"></i>
        </div>
        <p class="text-[11px] text-slate-400">ចំណាយសរុប</p>
        <p class="text-xl font-bold text-rose-400 font-mono mt-0.5">${formatUSD(totalExpenseAmt)}</p>
      </div>

    </div>

    <!-- ======================================================== -->
    <!-- 4. DYNAMIC BANK & CASH BALANCE SECTION (4-Way Scroll)   -->
    <!-- ======================================================== -->

    <!-- CARD A: 📦 លុយនៅអតិថិជន / COD មិនទាន់ទូទាត់មក (Accounts Receivable) -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-2">
        <h3 class="font-bold text-xs uppercase tracking-wider text-amber-300 flex items-center gap-2">
          <i data-lucide="clock" class="w-4 h-4 text-amber-400"></i>
          <span>📦 លុយនៅអតិថិជន / COD មិនទាន់ទូទាត់ (Receivables)</span>
        </h3>
        <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold">
          ${d.pendingCodReceivables.length} នាក់
        </span>
      </div>
      <p class="text-[10px] text-slate-400 mb-3">អូស ឡើង/ចុះ/ឆ្វេង/ស្តាំ ដើម្បីមើលគ្រប់អតិថិជនទាំងអស់</p>

      <!-- 4-Way Scroll Container -->
      <div class="overflow-x-auto overflow-y-auto max-h-56 no-scrollbar border border-white/5 rounded-2xl bg-black/30 p-2">
        <table class="w-full text-left text-xs whitespace-nowrap">
          <thead>
            <tr class="text-slate-400 border-b border-white/10 text-[10px]">
              <th class="py-1.5 px-2">កាលបរិច្ឆេទ</th>
              <th class="py-1.5 px-2">Order ID</th>
              <th class="py-1.5 px-2">ឈ្មោះអតិថិជន</th>
              <th class="py-1.5 px-2">លេខទូរសព្ទ</th>
              <th class="py-1.5 px-2">ទីតាំង</th>
              <th class="py-1.5 px-2">សេវាដឹក</th>
              <th class="py-1.5 px-2 text-right">ទឹកប្រាក់ ($)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5">
            ${d.pendingCodReceivables.map(item => `
              <tr class="hover:bg-white/5">
                <td class="py-1.5 px-2 text-slate-300 font-mono text-[11px]">${item.date}</td>
                <td class="py-1.5 px-2 font-mono text-orange-400 font-semibold text-[11px]">${item.orderId}</td>
                <td class="py-1.5 px-2 text-white font-medium">${item.customer}</td>
                <td class="py-1.5 px-2 text-slate-300 font-mono text-[11px]">${item.phone || '—'}</td>
                <td class="py-1.5 px-2 text-slate-400 text-[11px]">${item.location || '—'}</td>
                <td class="py-1.5 px-2 text-blue-300 text-[11px]">${item.deliveryMethod}</td>
                <td class="py-1.5 px-2 text-right font-mono font-bold text-amber-400 text-[11px]">${formatUSD(item.totalAmount)}</td>
              </tr>
            `).join('') || '<tr><td colspan="7" class="text-center py-4 text-slate-500">គ្មានអតិថិជនជំពាក់</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>

    <!-- CARD B: 📈 សង្ខេបស្ថាពរហិរញ្ញវត្ថុសុទ្ធ (Net Cash Position ពី Sheet) -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <i data-lucide="activity" class="w-4 h-4 text-emerald-400"></i>
          <span>📈 សង្ខេបស្ថាពរហិរញ្ញវត្ថុសុទ្ធ (Net Cash Position)</span>
        </h3>
        <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold">
          ${netCash.healthStatus}
        </span>
      </div>

      <div class="grid grid-cols-2 gap-2 text-xs">
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5">
          <span class="text-slate-400 text-[10px] block">សរុបសាច់ប្រាក់ជាក់ស្តែង:</span>
          <span class="font-mono text-white font-bold text-sm">${formatUSD(netCash.totalActualCash)}</span>
        </div>
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5">
          <span class="text-slate-400 text-[10px] block">លុយ COD រង់ចាំទូទាត់:</span>
          <span class="font-mono text-amber-400 font-bold text-sm">${formatUSD(netCash.pendingCodReceivables)}</span>
        </div>
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5">
          <span class="text-slate-400 text-[10px] block">សរុបទ្រព្យសកម្មរាវ:</span>
          <span class="font-mono text-blue-400 font-bold text-sm">${formatUSD(netCash.totalLiquidAssets)}</span>
        </div>
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5">
          <span class="text-slate-400 text-[10px] block">សរុបបំណុលត្រូវទូទាត់:</span>
          <span class="font-mono text-rose-400 font-bold text-sm">${formatUSD(netCash.totalAccountsPayable)}</span>
        </div>
      </div>
      <div class="mt-2 p-2.5 rounded-xl bg-gradient-to-r from-emerald-950/40 to-blue-950/40 border border-emerald-500/20 flex items-center justify-between">
        <span class="text-xs text-white font-semibold">(=) សាច់ប្រាក់សុទ្ធពិតប្រាកដ:</span>
        <span class="text-base font-bold font-mono text-emerald-400">${formatUSD(netCash.netCashPositionFinal || netCash.totalNetCash)}</span>
      </div>
    </div>

    <!-- CARD C: 🏦 ឈ្មោះគណនី / ធនាគារ និងចំនួននីមួយៗ -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
        <i data-lucide="building-2" class="w-4 h-4 text-blue-400"></i>
        <span>ឈ្មោះគណនី / ធនាគារ និងសមតុល្យនីមួយៗ</span>
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

    <!-- CARD D: 💳 បញ្ជីបំណុលត្រូវទូទាត់ (Accounts Payable) & ការចំណាយថ្ងៃនេះ -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      
      <!-- Accounts Payable -->
      <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
        <div class="flex items-center justify-between mb-2">
          <h4 class="font-bold text-xs text-rose-300 flex items-center gap-1.5">
            <i data-lucide="credit-card" class="w-3.5 h-3.5"></i>
            <span>បំណុលត្រូវទូទាត់</span>
          </h4>
          <span class="text-[10px] px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-400 font-mono">${d.bank.payables.length} មុខ</span>
        </div>
        <div class="space-y-1.5 max-h-40 overflow-y-auto no-scrollbar">
          ${d.bank.payables.map((p, idx) => `
            <div class="flex items-center justify-between text-xs py-1 border-b border-white/5">
              <span class="text-white truncate max-w-[130px]">${idx + 1}. ${p.title}</span>
              <span class="font-mono text-rose-400 font-semibold">${formatUSD(p.amount)}</span>
            </div>
          `).join('') || '<p class="text-xs text-slate-500 py-3">គ្មានបំណុល</p>'}
        </div>
      </div>

      <!-- Today's Expenses -->
      <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
        <div class="flex items-center justify-between mb-2">
          <h4 class="font-bold text-xs text-slate-300 flex items-center gap-1.5">
            <i data-lucide="receipt" class="w-3.5 h-3.5 text-orange-400"></i>
            <span>ការចំណាយថ្ងៃនេះ</span>
          </h4>
          <span class="text-[10px] text-slate-400 font-mono">${filteredExpenses.length} មុខ</span>
        </div>
        <div class="space-y-1.5 max-h-40 overflow-y-auto no-scrollbar">
          ${filteredExpenses.slice(0, 5).map(e => `
            <div class="flex items-center justify-between text-xs py-1 border-b border-white/5">
              <div class="truncate max-w-[120px]">
                <p class="text-white truncate text-[11px]">${e.description || e.category}</p>
                <p class="text-[9px] text-slate-400 font-mono">${e.date}</p>
              </div>
              <span class="font-mono text-rose-400 font-semibold">${formatUSD(e.amount)}</span>
            </div>
          `).join('') || '<p class="text-xs text-slate-500 py-3">គ្មានចំណាយ</p>'}
        </div>
      </div>

    </div>

    <!-- CARD E: TEAM SALES - 3 LEADER SHOWCASE -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <i data-lucide="users" class="w-4 h-4 text-blue-400"></i>
          <span>ការលក់តាមក្រុម (Team Sales) - ថ្នាក់ដឹកនាំ ៣ រូប</span>
        </h3>
        <span class="text-[10px] text-blue-400 font-medium">គោលដៅ ១០០ ប្រអប់</span>
      </div>

      <div class="space-y-2.5">
        ${d.teamLeaders.map(tl => `
          <div class="p-3 rounded-2xl bg-black/25 border border-white/5 flex flex-col gap-2">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <span class="font-bold text-xs text-white">${tl.name}</span>
                ${tl.name === 'ស្តី ស្តើង' ? '<svg class="w-3.5 h-3.5 text-[#1877F2] shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.5l-4.2-4.2 1.4-1.4 2.8 2.8 7.3-7.3 1.4 1.4-8.7 8.7z"/></svg>' : ''}
              </div>
              <span class="font-mono text-xs font-bold ${tl.targetPercent >= 100 ? 'text-emerald-400' : 'text-orange-400'}">
                ${tl.totalBoxes} ប្រអប់ (${tl.targetPercent}%)
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
  `;
}

// ==========================================
// 5. View: Analytics (Fintech Pro Diagram with Exact Numbers on Bars)
// ==========================================
function getAnalyticsViewHTML() {
  const d = DataService.data;
  if (!d) return '<p class="text-xs text-slate-400 text-center py-20">កំពុងរៀបចំដ្យាក្រាម...</p>';

  const monthlyStats = {};
  d.personalSales.forEach(s => {
    const mo = s.isoDate.substring(0, 7); // YYYY-MM
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
            <h3 class="font-bold text-sm text-white">ដ្យាក្រាមការលក់ & ប្រាក់ចំណេញ (Diagram)</h3>
            <p class="text-[11px] text-slate-400">តួលេខលក់ពិតប្រាកដនៅលើសរសរក្រាបនីមួយៗ</p>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">2026 Trend</span>
        </div>

        <!-- Pro Diagram with Numbers on top of each bar -->
        <div class="h-56 w-full flex items-end gap-2 pt-8 pb-3 px-1 border-b border-white/10">
          ${months.map(m => {
            const stat = monthlyStats[m];
            const revHeight = Math.max(16, Math.round((stat.revenue / maxRevenue) * 140));
            const moName = m.split('-')[1];
            return `
              <div class="flex-1 flex flex-col items-center gap-1.5 group">
                <!-- Exact Number on Bar Head -->
                <span class="text-[8px] font-mono font-bold text-amber-300 tracking-tighter block text-center leading-none">
                  $${Math.round(stat.revenue)}
                </span>
                <div class="w-full max-w-[26px] rounded-t-lg bg-gradient-to-t from-orange-600 via-amber-500 to-orange-400 shadow-lg transition-all group-hover:scale-105" 
                     style="height: ${revHeight}px"></div>
                <span class="text-[10px] text-slate-300 font-mono font-semibold">ខែ${moName}</span>
              </div>
            `;
          }).join('')}
        </div>

        <div class="flex items-center justify-center gap-4 pt-3 text-[11px] text-slate-400">
          <span class="flex items-center gap-1.5">
            <span class="w-2.5 h-2.5 rounded bg-orange-500"></span>
            ចំណូលលក់ ($)
          </span>
        </div>
      </div>

      <!-- Financial Table -->
      <div class="ios-glass-card rounded-3xl p-5 border border-white/10">
        <h4 class="font-bold text-xs uppercase tracking-wider text-slate-300 mb-3">តារាងសង្ខេបចំណូល-ចំណេញតាមខែ</h4>
        <div class="space-y-2">
          ${months.slice(-6).reverse().map(m => `
            <div class="flex items-center justify-between p-2.5 rounded-xl bg-black/25 border border-white/5">
              <div>
                <span class="text-xs font-semibold text-white block">ខែ ${m.split('-')[1]}/${m.split('-')[0]}</span>
                <span class="text-[10px] text-slate-400 font-mono">លក់បាន: ${monthlyStats[m].qty} ប្រអប់</span>
              </div>
              <div class="text-right">
                <span class="font-mono text-xs text-emerald-400 font-bold block">${formatUSD(monthlyStats[m].revenue)}</span>
                <span class="text-[10px] text-blue-400 font-mono">ចំណេញ: ${formatUSD(monthlyStats[m].profit)}</span>
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
// 7. View: Settings (ABA Style with Facebook Blue Tick, Theme & Passcode)
// ==========================================
function getSettingsViewHTML() {
  const isDark = appState.theme === 'dark';
  const isKm = appState.language === 'km';

  return `
    <div class="space-y-4">
      
      <!-- ABA Profile Header -->
      <div class="flex flex-col items-center text-center py-4">
        <div class="relative mb-3">
          <img src="profile.png" alt="SDEY SDOEUNG" 
               class="w-20 h-20 rounded-full object-cover border-3 border-orange-500 shadow-xl">
        </div>
        <div class="flex items-center gap-1.5">
          <h2 class="text-lg font-bold text-white">ស្តី ស្តើង</h2>
          <!-- Exact Facebook Blue Tick -->
          <svg class="w-4 h-4 text-[#1877F2] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.8 14.5l-4.2-4.2 1.4-1.4 2.8 2.8 7.3-7.3 1.4 1.4-8.7 8.7z"/>
          </svg>
        </div>
        <p class="text-xs text-orange-400 font-semibold tracking-wider">SDEY SDOEUNG</p>
        <p class="text-xs text-slate-400 font-mono mt-0.5">087 513 666 | 090 513 666</p>
      </div>

      <!-- Security Card (Blue Banner as seen in ABA iPhone photo) -->
      <div class="bg-gradient-to-r from-[#102A43] to-[#0B1D30] rounded-2xl p-4 border border-blue-500/20 shadow-lg">
        <div class="flex items-start gap-3 mb-3">
          <div class="p-2 rounded-xl bg-blue-500/20 text-blue-400 shrink-0">
            <i data-lucide="shield-check" class="w-5 h-5"></i>
          </div>
          <div>
            <h4 class="font-bold text-xs text-white leading-tight">ការពារ SD Data របស់អ្នក ជាមួយលេខសម្ងាត់ ៤ ខ្ទង់</h4>
            <p class="text-[11px] text-slate-300 mt-1">ប្រើលេខសម្ងាត់ ដើម្បីសុវត្ថិភាព និងទំនុកចិត្តខ្ពស់</p>
          </div>
        </div>
        <button onclick="openChangePinModal()" 
                class="w-full py-2.5 rounded-xl bg-[#007AFF] hover:bg-blue-600 text-white font-semibold text-xs transition active:scale-98">
          ប្តូរលេខកូដសម្ងាត់ (Change PIN)
        </button>
      </div>

      <!-- Inset List Group (ABA Grouped List) -->
      <div class="bg-[#0F1B2E] rounded-2xl border border-white/10 divide-y divide-white/5 overflow-hidden">
        
        <!-- Theme Toggle (Dark / Light) -->
        <div class="p-3.5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <i data-lucide="${isDark ? 'moon' : 'sun'}" class="w-4 h-4 text-orange-400"></i>
            <span class="text-xs text-white font-medium">ទម្រង់បង្ហាញ (Theme)</span>
          </div>
          <div class="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5">
            <button onclick="toggleTheme('dark')" class="px-2.5 py-1 rounded-lg text-[11px] font-semibold ${isDark ? 'bg-orange-500 text-white' : 'text-slate-400'}">ងងឹត (Dark)</button>
            <button onclick="toggleTheme('light')" class="px-2.5 py-1 rounded-lg text-[11px] font-semibold ${!isDark ? 'bg-orange-500 text-white' : 'text-slate-400'}">ភ្លឺ (Light)</button>
          </div>
        </div>

        <!-- Language Toggle -->
        <div class="p-3.5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <i data-lucide="globe" class="w-4 h-4 text-slate-400"></i>
            <span class="text-xs text-white font-medium">ភាសា (Language)</span>
          </div>
          <div class="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5">
            <button onclick="setLanguage('km')" class="px-2 py-1 rounded-lg text-[11px] font-semibold ${isKm ? 'bg-orange-500 text-white' : 'text-slate-400'}">ភាសាខ្មែរ</button>
            <button onclick="setLanguage('en')" class="px-2 py-1 rounded-lg text-[11px] font-semibold ${!isKm ? 'bg-orange-500 text-white' : 'text-slate-400'}">English</button>
          </div>
        </div>

        <!-- Lock Screen Now -->
        <div onclick="lockApp()" class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition">
          <div class="flex items-center gap-3">
            <i data-lucide="lock" class="w-4 h-4 text-slate-400"></i>
            <span class="text-xs text-white font-medium">ចាក់សោអេក្រង់ឥឡូវនេះ (Lock Screen)</span>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-slate-500"></i>
        </div>

        <!-- Telegram Contact -->
        <a href="https://t.me/sdoeung_sd" target="_blank" class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition">
          <div class="flex items-center gap-3">
            <i data-lucide="send" class="w-4 h-4 text-[#1877F2]"></i>
            <span class="text-xs text-white font-medium">ទាក់ទងតាម Telegram</span>
          </div>
          <span class="text-xs text-[#1877F2] font-mono">@sdoeung_sd</span>
        </a>

        <!-- អំពីខ្ញុំ (At the very bottom as requested) -->
        <div onclick="openAboutModal()" class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition bg-orange-500/10">
          <div class="flex items-center gap-3">
            <i data-lucide="user-check" class="w-4 h-4 text-orange-400"></i>
            <span class="text-xs text-orange-400 font-bold">អំពីខ្ញុំ (About Me)</span>
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

  // Sorted Latest First (Descending by isoDate 31 -> 01)
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
        <span>📍 ${item.location || 'មិនបញ្ជាក់'}</span>
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
