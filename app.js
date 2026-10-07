/**
 * SD Data - iOS Liquid Fintech ERP Application
 * Final Refinement:
 * - Floating Sticky Period Pills (Today default, Month, Year, Custom)
 * - Telegram Floating Capsule Dock with Bounce Animation & Center Order Button
 * - ABA Style Settings with Passcode change & Theme Toggle
 * - Personal Sales 31 -> 01 latest first
 * - Exact 10 Unpaid COD from Bank & Cash Balance
 * - 3 Team Leaders Showcase (ស្តី ស្តើង, ឆេង សុធី, ឆេង រ៉ាស៊ុង)
 * - 4 Core Products Showcase
 */

const appState = {
  currentView: 'dashboard', // 'dashboard', 'analytics', 'learning', 'settings'
  hideBalance: false,
  periodFilter: 'today', // 'today', 'month', 'year', 'custom'
  customSelectedDate: '',
  language: localStorage.getItem('sd_lang') || 'km',
  isLocked: !sessionStorage.getItem('sd_unlocked'),
  enteredPin: '',
  correctPin: localStorage.getItem('sd_pin') || '1234',
  notifPreferences: JSON.parse(localStorage.getItem('sd_notif_prefs') || '{"sales":true,"expenses":true,"payables":true}'),
  hasReadNotifications: false
};

const DAILY_ENGLISH_WORDS = [
  { en: 'Revenue', pron: 'រេវីនញូ', pos: 'Noun', km: 'ចំណូលសរុប', ex: 'Our monthly revenue increased significantly.' },
  { en: 'Expense', pron: 'អ៊ិចស្ពែនស៍', pos: 'Noun', km: 'ការចំណាយ', ex: 'Track daily expenses to save money.' },
  { en: 'Profit', pron: 'ប្រូហ្វីត', pos: 'Noun', km: 'ប្រាក់ចំណេញ', ex: 'Gross profit equals revenue minus factory cost.' },
  { en: 'Customer', pron: 'ខាសស្ទឺមើ', pos: 'Noun', km: 'អតិថិជន', ex: 'Satisfied customers always return to buy again.' },
  { en: 'Delivery', pron: 'ដេលីវើរី', pos: 'Noun', km: 'ការដឹកជញ្ជូន', ex: 'Fast delivery creates trust with clients.' }
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
  setInterval(updateLockClock, 1000);
  updateLockClock();

  if (sessionStorage.getItem('sd_unlocked') === 'true') {
    const lockScreen = document.getElementById('lock-screen');
    if (lockScreen) lockScreen.classList.add('hidden');
  }

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
    const count = service.unreadUpdates.length;
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

function toggleHideBalance() {
  appState.hideBalance = !appState.hideBalance;
  renderCurrentView();
}

// ==========================================
// 3. Navigation & Dock Switcher
// ==========================================
function switchView(viewName) {
  appState.currentView = viewName;

  ['dashboard', 'analytics', 'learning', 'settings'].forEach(v => {
    const btn = document.getElementById(`dock-btn-${v}`);
    if (btn) {
      if (v === viewName) {
        btn.className = 'dock-btn flex-1 flex flex-col items-center justify-center py-1 rounded-full text-orange-400 transition';
        btn.querySelector('i')?.parentElement?.classList?.add('bg-orange-500/20');
      } else {
        btn.className = 'dock-btn flex-1 flex flex-col items-center justify-center py-1 rounded-full text-slate-400 hover:text-white transition';
        btn.querySelector('i')?.parentElement?.classList?.remove('bg-orange-500/20');
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
        btn.className = 'flex-1 py-1.5 px-2.5 rounded-xl text-xs font-semibold text-center transition dock-btn bg-orange-500 text-white shadow-md';
      } else {
        btn.className = 'flex-1 py-1.5 px-2.5 rounded-xl text-xs font-semibold text-center transition dock-btn text-slate-400 hover:text-white';
      }
    }
  });

  if (mode === 'custom') {
    const picker = document.getElementById('custom-date-picker');
    picker.classList.remove('hidden');
    picker.showPicker ? picker.showPicker() : picker.focus();
  }

  renderCurrentView();
}

function onCustomDateSelected(val) {
  appState.customSelectedDate = val;
  setPeriodFilter('custom');
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

  // Filter Sales & Expenses by active Period Filter
  let filteredSales = d.personalSales;
  let filteredExpenses = d.expenses;
  const now = new Date();
  const todayStr = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const curMoStr = '2026-08'; // Default active data month
  const curYrStr = '2026';

  let periodLabel = 'ថ្ងៃនេះ (Today)';

  if (appState.periodFilter === 'today') {
    // If today has records use today, otherwise show active day sample 2026-08-12
    const hasToday = d.personalSales.some(s => s.date === todayStr);
    const targetDay = hasToday ? todayStr : '2026-08-12';
    filteredSales = d.personalSales.filter(s => s.date === targetDay);
    filteredExpenses = d.expenses.filter(e => e.date === targetDay);
    periodLabel = `ថ្ងៃទី ${targetDay}`;
  } else if (appState.periodFilter === 'month') {
    filteredSales = d.personalSales.filter(s => s.date.startsWith(curMoStr));
    filteredExpenses = d.expenses.filter(e => e.date.startsWith(curMoStr));
    periodLabel = `ខែ ${curMoStr}`;
  } else if (appState.periodFilter === 'year') {
    filteredSales = d.personalSales.filter(s => s.date.startsWith(curYrStr));
    filteredExpenses = d.expenses.filter(e => e.date.startsWith(curYrStr));
    periodLabel = `ឆ្នាំ ${curYrStr}`;
  } else if (appState.periodFilter === 'custom' && appState.customSelectedDate) {
    filteredSales = d.personalSales.filter(s => s.date === appState.customSelectedDate);
    filteredExpenses = d.expenses.filter(e => e.date === appState.customSelectedDate);
    periodLabel = `ថ្ងៃទី ${appState.customSelectedDate}`;
  }

  // Calculated Metrics
  const totalBoxQty = filteredSales.reduce((acc, cur) => acc + (cur.totalBoxQty || 0), 0);
  const totalRevenue = filteredSales.reduce((acc, cur) => acc + (cur.totalAmount || 0), 0);
  const totalGrossProfit = filteredSales.reduce((acc, cur) => acc + (cur.profit || 0), 0);
  const totalExpenseAmt = filteredExpenses.reduce((acc, cur) => acc + (cur.amount || 0), 0);

  // Pure Bank Balances
  const pureUsd = d.bank.pureUsdTotal;
  const pureKhr = d.bank.pureKhrTotal;

  return `
    <!-- HERO BALANCE CARD (ABA/ACLEDA Fintech Glassmorphism Card) -->
    <div class="ios-glass-card rounded-3xl p-5 relative overflow-hidden liquid-orange-glow">
      <div class="absolute -top-12 -right-12 w-44 h-44 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>

      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30">
            <i data-lucide="wallet" class="w-4 h-4"></i>
          </div>
          <div>
            <p class="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">សាច់ប្រាក់សុទ្ធពិត (Pure Cash)</p>
            <p class="text-[10px] text-amber-200/80">កុងធនាគារ ABA + ACLEDA + កាបូប</p>
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

    <!-- Period Status Badge -->
    <div class="flex items-center justify-between px-1">
      <span class="text-xs text-slate-400 font-medium">ទិន្នន័យជ្រើសរើស៖ <strong class="text-orange-400 font-semibold">${periodLabel}</strong></span>
      <span class="text-[10px] text-slate-400 font-mono">Personal Sales</span>
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
        <p class="text-[11px] text-slate-400">ចំណាយប្រចាំថ្ងៃសរុប</p>
        <p class="text-xl font-bold text-rose-400 font-mono mt-0.5">${formatUSD(totalExpenseAmt)}</p>
      </div>

    </div>

    <!-- FOLDER 1: បញ្ជីតាមដានបន្ទាន់ (Exact 10 from Bank & Cash Balance) -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <i data-lucide="alert-circle" class="w-4 h-4 text-orange-400"></i>
          <span>បញ្ជីតាមដានបន្ទាន់ (Bank & Cash Balance)</span>
        </h3>
        <span class="text-[10px] text-slate-400">អូស ➔</span>
      </div>

      <!-- Horizontal Swiper -->
      <div class="flex gap-3 overflow-x-auto no-scrollbar pb-1">
        
        <!-- Card A: Exact 10 Unpaid COD Customers from Bank Sheet -->
        <div class="min-w-[270px] max-w-[290px] bg-black/30 rounded-2xl p-3.5 border border-white/5 shrink-0">
          <div class="flex items-center justify-between mb-2 pb-1 border-b border-white/5">
            <span class="text-xs font-semibold text-amber-300">អតិថិជនមិនទាន់ទូទាត់</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono">១០ នាក់</span>
          </div>
          <div class="space-y-1.5 max-h-40 overflow-y-auto no-scrollbar">
            ${d.bank.unpaidCustomers.map(c => `
              <div class="text-[11px] flex items-center justify-between py-1 border-b border-white/5">
                <div class="truncate max-w-[140px]">
                  <p class="text-white truncate font-medium">${c.no}. ${c.customerNote}</p>
                  <p class="text-[9px] text-slate-400">${c.date} | ${c.boxes}</p>
                </div>
                <span class="font-mono text-orange-400 font-semibold">${formatUSD(c.amount)}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Card B: Payables from Bank Sheet -->
        <div class="min-w-[270px] max-w-[290px] bg-black/30 rounded-2xl p-3.5 border border-white/5 shrink-0">
          <div class="flex items-center justify-between mb-2 pb-1 border-b border-white/5">
            <span class="text-xs font-semibold text-rose-300">បំណុលត្រូវទូទាត់</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-mono">${d.bank.payables.length} មុខ</span>
          </div>
          <div class="space-y-1.5 max-h-40 overflow-y-auto no-scrollbar">
            ${d.bank.payables.map((p, idx) => `
              <div class="text-[11px] flex items-center justify-between py-1 border-b border-white/5">
                <span class="text-white truncate max-w-[140px]">${idx + 1}. ${p.title}</span>
                <span class="font-mono text-rose-400 font-semibold">${formatUSD(p.amount)}</span>
              </div>
            `).join('')}
          </div>
        </div>

      </div>
    </div>

    <!-- FOLDER 2: TEAM SALES - 3 THNAK DOEKNOAM (ស្តី ស្តើង, ឆេង សុធី, ឆេង រ៉ាស៊ុង) -->
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
                ${tl.name === 'ស្តី ស្តើង' ? '<span class="text-[#0088CC] text-xs">✔️</span>' : ''}
              </div>
              <span class="font-mono text-xs font-bold ${tl.targetPercent >= 100 ? 'text-emerald-400' : 'text-orange-400'}">
                ${tl.totalBoxes} ប្រអប់ (${tl.targetPercent}%)
              </span>
            </div>

            <!-- Set breakdown badges -->
            <div class="flex items-center gap-1 text-[10px] text-slate-400">
              <span class="px-1.5 py-0.5 rounded bg-white/5">Set 1: <strong class="text-white">${tl.set1}</strong></span>
              <span class="px-1.5 py-0.5 rounded bg-white/5">Set 2: <strong class="text-white">${tl.set2}</strong></span>
              <span class="px-1.5 py-0.5 rounded bg-white/5">Set 3: <strong class="text-white">${tl.set3}</strong></span>
              <span class="px-1.5 py-0.5 rounded bg-white/5">Set 4: <strong class="text-white">${tl.set4}</strong></span>
            </div>

            <!-- Progress bar -->
            <div class="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div class="bg-gradient-to-r from-orange-500 to-amber-400 h-1.5 rounded-full" style="width: ${Math.min(100, tl.targetPercent)}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- FOLDER 3: ផលិតផលកំពុងលក់ ៤ មុខ & ចំណាយចុងក្រោយ -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
        <i data-lucide="tag" class="w-4 h-4 text-emerald-400"></i>
        <span>ផលិតផលកំពុងលក់ (៤ មុខ) & ចំណាយចុងក្រោយ</span>
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        
        <!-- 4 Core Products -->
        <div class="bg-black/25 rounded-2xl p-3 border border-white/5 space-y-1.5">
          <p class="text-xs font-semibold text-slate-300 mb-1">ផលិតផលចម្បង</p>
          ${d.activeProducts.map(p => `
            <div class="flex items-center justify-between text-xs py-1 border-b border-white/5">
              <span class="text-white font-medium truncate">${p.name}</span>
              <span class="font-mono text-slate-400 text-[11px]">${formatUSD(p.cost)}</span>
            </div>
          `).join('')}
        </div>

        <!-- Recent Expenses with exact Date & Description -->
        <div class="bg-black/25 rounded-2xl p-3 border border-white/5 space-y-1.5">
          <p class="text-xs font-semibold text-slate-300 mb-1">ចំណាយចុងក្រោយ</p>
          ${d.expenses.slice(-4).reverse().map(e => `
            <div class="flex items-center justify-between text-xs py-1 border-b border-white/5">
              <div class="truncate max-w-[120px]">
                <p class="text-white truncate text-[11px]">${e.description || e.category}</p>
                <p class="text-[9px] text-slate-400 font-mono">${e.date}</p>
              </div>
              <span class="font-mono text-rose-400 text-xs font-semibold">${formatUSD(e.amount)}</span>
            </div>
          `).join('')}
        </div>

      </div>
    </div>

    <!-- FOLDER 4: ជំនួយការ AI ឆ្លាតវៃ -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
        <i data-lucide="sparkles" class="w-4 h-4 text-amber-400"></i>
        <span>ជំនួយការ AI ឆ្លាតវៃ</span>
      </h3>
      <div class="grid grid-cols-2 gap-2.5">
        <a href="https://gemini.google.com" target="_blank" 
           class="p-3 rounded-2xl bg-blue-900/30 border border-blue-500/20 flex items-center gap-2.5 active:scale-95 transition">
          <span class="text-lg">✨</span>
          <div>
            <p class="font-bold text-xs text-white">Gemini AI</p>
            <p class="text-[9px] text-blue-300">ជំនួយការឆ្លាតវៃ</p>
          </div>
        </a>
        <a href="https://chatgpt.com" target="_blank" 
           class="p-3 rounded-2xl bg-emerald-900/30 border border-emerald-500/20 flex items-center gap-2.5 active:scale-95 transition">
          <span class="text-lg">🤖</span>
          <div>
            <p class="font-bold text-xs text-white">ChatGPT</p>
            <p class="text-[9px] text-emerald-300">សួរនាំ & វិភាគ</p>
          </div>
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
  if (!d) return '<p class="text-xs text-slate-400 text-center py-20">កំពុងរៀបចំដ្យាក្រាម...</p>';

  const monthlyStats = {};
  d.personalSales.forEach(s => {
    const mo = s.date.substring(0, 7);
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
            <p class="text-[11px] text-slate-400">តាមដានតាមខែនីមួយៗក្នុងឆ្នាំ ២០២៦</p>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">2026 Trend</span>
        </div>

        <div class="h-44 w-full flex items-end gap-2 pt-6 pb-2 px-1">
          ${months.map(m => {
            const stat = monthlyStats[m];
            const revHeight = Math.max(12, Math.round((stat.revenue / maxRevenue) * 120));
            const moName = m.split('-')[1];
            return `
              <div class="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
                <span class="text-[9px] font-mono text-orange-400 opacity-0 group-hover:opacity-100 transition">$${Math.round(stat.revenue)}</span>
                <div class="w-full max-w-[28px] rounded-t-lg bg-gradient-to-t from-orange-600 to-amber-400 shadow-md transition-all group-hover:brightness-125" style="height: ${revHeight}px"></div>
                <span class="text-[10px] text-slate-400 font-mono">ខែ${moName}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Financial Table -->
      <div class="ios-glass-card rounded-3xl p-5 border border-white/10">
        <h4 class="font-bold text-xs uppercase tracking-wider text-slate-300 mb-3">តារាងសង្ខេបចំណូល-ចំណេញ</h4>
        <div class="space-y-2">
          ${months.slice(-5).map(m => `
            <div class="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/5">
              <span class="text-xs font-semibold text-white">ខែ ${m}</span>
              <div class="text-right">
                <span class="font-mono text-xs text-emerald-400 font-bold">${formatUSD(monthlyStats[m].revenue)}</span>
                <span class="text-[10px] text-slate-400 block font-mono">ចំណេញ: ${formatUSD(monthlyStats[m].profit)}</span>
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
        <p class="text-xs text-slate-400 max-w-sm mx-auto mt-1">ពាក្យគន្លឹះសម្រាប់ការរស់នៅប្រចាំថ្ងៃ និងការធ្វើអាជីវកម្ម</p>
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
// 7. View: Settings (ABA Style Exact Match)
// ==========================================
function getSettingsViewHTML() {
  return `
    <div class="space-y-4">
      
      <!-- ABA Profile Card -->
      <div class="flex flex-col items-center text-center py-4">
        <div class="relative mb-3">
          <img src="profile.png" alt="SDEY SDOEUNG" 
               class="w-20 h-20 rounded-full object-cover border-3 border-orange-500 shadow-xl">
        </div>
        <div class="flex items-center gap-1.5">
          <h2 class="text-lg font-bold text-white">ស្តី ស្តើង</h2>
          <svg class="w-5 h-5 text-[#0088CC] shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-5-5 1.41-1.41L11 14.17l7.59-7.59L20 8l-9 9z"/>
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
            <p class="text-[11px] text-slate-300 mt-1">ប្រើលេខសម្ងាត់ ដើម្បីសុវត្ថិភាព និងទំនុកចិត្តខ្ពស់ក្នុងការប្រើប្រាស់</p>
          </div>
        </div>
        <button onclick="openChangePinModal()" 
                class="w-full py-2.5 rounded-xl bg-[#007AFF] hover:bg-blue-600 text-white font-semibold text-xs transition active:scale-98">
          ប្តូរលេខកូដសម្ងាត់ (Change PIN)
        </button>
      </div>

      <!-- Inset List Group (ABA Grouped List) -->
      <div class="bg-[#0F1B2E] rounded-2xl border border-white/10 divide-y divide-white/5 overflow-hidden">
        
        <!-- Profile / About Me -->
        <div onclick="openProfileModal()" class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition">
          <div class="flex items-center gap-3">
            <i data-lucide="user" class="w-4 h-4 text-slate-400"></i>
            <span class="text-xs text-white font-medium">ប្រវត្តិរូបរបស់ខ្ញុំ (About Me)</span>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-slate-500"></i>
        </div>

        <!-- Lock Screen Now -->
        <div onclick="lockApp()" class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition">
          <div class="flex items-center gap-3">
            <i data-lucide="lock" class="w-4 h-4 text-slate-400"></i>
            <span class="text-xs text-white font-medium">ចាក់សោអេក្រង់ឥឡូវនេះ (Lock Screen)</span>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-slate-500"></i>
        </div>

        <!-- Language -->
        <div class="p-3.5 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <i data-lucide="globe" class="w-4 h-4 text-slate-400"></i>
            <span class="text-xs text-white font-medium">ភាសា (Language)</span>
          </div>
          <div class="flex items-center gap-1">
            <button onclick="setLanguage('km')" class="px-2 py-1 rounded text-[11px] font-semibold ${appState.language === 'km' ? 'bg-orange-500 text-white' : 'text-slate-400'}">ភាសាខ្មែរ</button>
            <button onclick="setLanguage('en')" class="px-2 py-1 rounded text-[11px] font-semibold ${appState.language === 'en' ? 'bg-orange-500 text-white' : 'text-slate-400'}">English</button>
          </div>
        </div>

        <!-- Telegram Contact -->
        <a href="https://t.me/sdoeung_sd" target="_blank" class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition">
          <div class="flex items-center gap-3">
            <i data-lucide="send" class="w-4 h-4 text-[#0088CC]"></i>
            <span class="text-xs text-white font-medium">ទាក់ទងតាម Telegram</span>
          </div>
          <span class="text-xs text-[#0088CC] font-mono">@sdoeung_sd</span>
        </a>

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

  // Sorted Latest First (31 -> 01, Descending by date)
  const sortedSales = [...d.personalSales].sort((a, b) => b.date.localeCompare(a.date));

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

function openProfileModal() {
  switchView('settings');
}

function toggleNotificationsModal() {
  const modal = document.getElementById('notif-modal');
  const feedList = document.getElementById('notif-feed-list');
  const d = DataService.data;

  if (d && d.bank && d.bank.unpaidCustomers) {
    feedList.innerHTML = `
      <div class="p-2.5 rounded-xl bg-white/5 text-xs text-slate-300">
        <p class="font-semibold text-orange-400 mb-1">📢 Bank & Cash Balance</p>
        <p>មានអតិថិជនមិនទាន់ទូទាត់ចំនួន <strong>១០ នាក់</strong> កំពុងរង់ចាំប្រមូលប្រាក់។</p>
      </div>
      <div class="p-2.5 rounded-xl bg-white/5 text-xs text-slate-300">
        <p class="font-semibold text-rose-400 mb-1">💳 Accounts Payable</p>
        <p>មានបំណុលត្រូវទូទាត់ចំនួន <strong>${d.bank.payables.length} មុខ</strong>។</p>
      </div>
    `;
  }
  modal.classList.toggle('hidden');
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

function setLanguage(lang) {
  appState.language = lang;
  localStorage.setItem('sd_lang', lang);
  renderCurrentView();
}
