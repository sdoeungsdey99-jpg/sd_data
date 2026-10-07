/**
 * SD Data - iOS Liquid Fintech ERP Application
 * Full implementation of iOS App Library, Hero Balance, Personal Sales Drill-down,
 * 5 Daily English words, Passcode Lock, and Financial Analytics.
 */

// Application State
const appState = {
  currentView: 'dashboard', // 'dashboard', 'analytics', 'learning', 'settings'
  hideBalance: false,
  selectedMonth: '2026-08',
  selectedFilterType: 'month', // 'month', 'year', 'all'
  searchQuery: '',
  language: localStorage.getItem('sd_lang') || 'km', // 'km' or 'en'
  isLocked: !sessionStorage.getItem('sd_unlocked'),
  enteredPin: '',
  correctPin: '1234',
  notifEnabled: {
    sales: true,
    expenses: true,
    payables: true
  }
};

// 5 English Words Database (Daily Life & Business for Khmer Speakers)
const DAILY_ENGLISH_WORDS = [
  { en: 'Revenue', pron: 'រេវីនញូ', pos: 'Noun', km: 'ចំណូលសរុប', ex: 'Our monthly revenue increased significantly.' },
  { en: 'Expense', pron: 'អ៊ិចស្ពែនស៍', pos: 'Noun', km: 'ការចំណាយ', ex: 'Track daily expenses to save money.' },
  { en: 'Profit', pron: 'ប្រូហ្វីត', pos: 'Noun', km: 'ប្រាក់ចំណេញ', ex: 'Gross profit equals revenue minus factory cost.' },
  { en: 'Customer', pron: 'ខាសស្ទឺមើ', pos: 'Noun', km: 'អតិថិជន', ex: 'Satisfied customers always return to buy again.' },
  { en: 'Delivery', pron: 'ដេលីវើរី', pos: 'Noun', km: 'ការដឹកជញ្ជូន', ex: 'Fast delivery creates trust with clients.' }
];

// Helper: Formatter
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
    setTimeout(() => {
      lockScreen.classList.add('hidden');
    }, 500);
  } else {
    prompt.textContent = 'លេខកូដមិនត្រឹមត្រូវទេ! សូមសាកល្បងម្តងទៀត';
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
  setTimeout(() => {
    lockScreen.classList.remove('opacity-0', 'pointer-events-none');
  }, 10);
}

// ==========================================
// 2. Initialization & Data Subscriptions
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setInterval(updateLockClock, 1000);
  updateLockClock();

  if (sessionStorage.getItem('sd_unlocked') === 'true') {
    const lockScreen = document.getElementById('lock-screen');
    if (lockScreen) lockScreen.classList.add('hidden');
  }

  // Setup search input listener
  const searchInput = document.getElementById('global-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value.toLowerCase().trim();
      renderCurrentView();
    });
  }

  // Listen to DataService
  DataService.subscribe(onDataUpdated);
  DataService.fetchData();
  DataService.startAutoReload(5); // 5 Minutes Auto Reload

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
    if (timeText) timeText.textContent = 'កំពុងទាញ...';
  } else {
    if (icon) icon.classList.remove('animate-spin');
    if (service.lastFetched && timeText) {
      const t = service.lastFetched.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit' });
      timeText.textContent = t;
    }
  }

  if (notifBadge) {
    if (service.newRecordsCount > 0) {
      notifBadge.textContent = service.newRecordsCount;
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
// 3. Navigation View Switcher
// ==========================================
function switchView(viewName) {
  appState.currentView = viewName;
  
  // Highlight Dock Buttons
  ['dashboard', 'analytics', 'learning', 'settings'].forEach(v => {
    const btn = document.getElementById(`nav-btn-${v}`);
    if (btn) {
      if (v === viewName) {
        btn.className = 'flex flex-col items-center gap-0.5 text-orange-400 py-1 px-3 rounded-xl transition';
      } else {
        btn.className = 'flex flex-col items-center gap-0.5 text-slate-400 hover:text-white py-1 px-3 rounded-xl transition';
      }
    }
  });

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

  if (window.lucide) window.lucide.createIcons();
}

// ==========================================
// 4. View: Dashboard (iOS Liquid & App Library)
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

  // Selected Month Sales & Expenses
  const selectedMo = appState.selectedMonth; // e.g. '2026-08'
  const monthSales = d.personalSales.filter(s => s.date.startsWith(selectedMo));
  const monthExpenses = d.expenses.filter(e => e.date.startsWith(selectedMo));

  // Calculated Metrics from Personal Sales & Daily Expenses
  const totalBoxQty = monthSales.reduce((acc, cur) => acc + (cur.totalBoxQty || 0), 0);
  const totalRevenue = monthSales.reduce((acc, cur) => acc + (cur.totalAmount || 0), 0);
  const totalGrossProfit = monthSales.reduce((acc, cur) => acc + (cur.profit || 0), 0);
  const totalExpenseAmt = monthExpenses.reduce((acc, cur) => acc + (cur.amount || 0), 0);

  // Pure Bank Balances
  const pureUsd = d.bank.pureUsdTotal;
  const pureKhr = d.bank.pureKhrTotal;

  return `
    <!-- Top Filter Pill Bar -->
    <div class="flex items-center justify-between gap-2 overflow-x-auto no-scrollbar py-1">
      <div class="flex items-center gap-1.5 bg-[#0F1B2E]/90 p-1 rounded-2xl border border-white/5">
        <button onclick="setMonthFilter('2026-08')" class="px-3 py-1 rounded-xl text-xs font-semibold ${selectedMo === '2026-08' ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'}">សីហា</button>
        <button onclick="setMonthFilter('2026-09')" class="px-3 py-1 rounded-xl text-xs font-semibold ${selectedMo === '2026-09' ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'}">កញ្ញា</button>
        <button onclick="setMonthFilter('2026-10')" class="px-3 py-1 rounded-xl text-xs font-semibold ${selectedMo === '2026-10' ? 'bg-orange-500 text-white shadow' : 'text-slate-400 hover:text-white'}">តុលា</button>
      </div>
      <input type="month" 
             value="${selectedMo}" 
             onchange="setMonthFilter(this.value)"
             class="bg-[#0F1B2E]/90 border border-white/10 text-xs text-orange-400 rounded-xl px-2.5 py-1 focus:outline-none">
    </div>

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

      <!-- Currency Balances (Pure USD & KHR Separate) -->
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div class="bg-black/20 rounded-2xl p-3 border border-white/5">
          <p class="text-[10px] text-slate-400 mb-0.5">ដុល្លារសុទ្ធ (USD)</p>
          <p class="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">
            ${appState.hideBalance ? '•••••• $' : formatUSD(pureUsd)}
          </p>
        </div>
        <div class="bg-black/20 rounded-2xl p-3 border border-white/5">
          <p class="text-[10px] text-slate-400 mb-0.5">រៀលសុទ្ធ (KHR)</p>
          <p class="text-xl sm:text-2xl font-bold font-mono text-emerald-400 tracking-tight">
            ${appState.hideBalance ? '•••••• ៛' : formatKHR(pureKhr)}
          </p>
        </div>
      </div>

      <!-- Quick Action Pills -->
      <div class="flex items-center gap-2 pt-2 border-t border-white/10">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_hP30dqB-F5gCV44AuxcftgmoDjo5zzkN-NSMiK-1rDEqPQ/viewform?usp=header" 
           target="_blank" 
           class="flex-1 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-orange-500/20 transition">
          <i data-lucide="shopping-cart" class="w-3.5 h-3.5"></i>
          <span>Order ក្រុមហ៊ុន</span>
        </a>
        <button onclick="switchView('analytics')" 
                class="flex-1 py-2 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 text-slate-200 font-semibold text-xs flex items-center justify-center gap-1.5 border border-white/10 transition">
          <i data-lucide="pie-chart" class="w-3.5 h-3.5 text-blue-400"></i>
          <span>វិភាគខែ/ឆ្នាំ</span>
        </button>
      </div>
    </div>

    <!-- 4 MAIN KPI CARDS (Personal Sales Engine) -->
    <div class="grid grid-cols-2 gap-3">
      
      <!-- 1. Total Box Qty (Clickable to open Personal Sales Drill-down) -->
      <div onclick="openSalesModal('${selectedMo}')" 
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

    <!-- ======================================================== -->
    <!-- iOS APP LIBRARY FOLDERS (Customizable & Swipeable)       -->
    <!-- ======================================================== -->

    <!-- Folder 1: បញ្ជីតាមដានបន្ទាន់ (Payables & Unpaid Customers) -->
    <div class="ios-glass-folder rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <i data-lucide="alert-circle" class="w-4 h-4 text-orange-400"></i>
          <span>បញ្ជីតាមដានបន្ទាន់ (Action Lists)</span>
        </h3>
        <span class="text-[10px] text-slate-400">អូសទៅស្តាំ ➔</span>
      </div>

      <!-- Horizontal Swipe Cards Container -->
      <div class="flex gap-3 overflow-x-auto no-scrollbar pb-1">
        
        <!-- Card A: Unpaid COD Customers -->
        <div class="min-w-[260px] max-w-[280px] bg-black/30 rounded-2xl p-3.5 border border-white/5 shrink-0">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold text-amber-300">អតិថិជនមិនទាន់ទូទាត់</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono">${d.unpaidCustomers.length} នាក់</span>
          </div>
          <div class="space-y-1.5 max-h-36 overflow-y-auto no-scrollbar">
            ${d.unpaidCustomers.slice(0, 5).map(c => `
              <div class="text-[11px] flex items-center justify-between py-1 border-b border-white/5">
                <span class="text-white truncate max-w-[130px]">${c.customer}</span>
                <span class="font-mono text-orange-400 font-semibold">${formatUSD(c.totalAmount)}</span>
              </div>
            `).join('') || '<p class="text-[11px] text-slate-500 py-2">គ្មានអតិថិជនជំពាក់</p>'}
          </div>
        </div>

        <!-- Card B: Accounts Payable (បំណុលត្រូវទូទាត់) -->
        <div class="min-w-[260px] max-w-[280px] bg-black/30 rounded-2xl p-3.5 border border-white/5 shrink-0">
          <div class="flex items-center justify-between mb-2">
            <span class="text-xs font-semibold text-rose-300">បំណុលត្រូវទូទាត់</span>
            <span class="text-[10px] px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-mono">${d.bank.payables.length} មុខ</span>
          </div>
          <div class="space-y-1.5 max-h-36 overflow-y-auto no-scrollbar">
            ${d.bank.payables.slice(0, 5).map(p => `
              <div class="text-[11px] flex items-center justify-between py-1 border-b border-white/5">
                <span class="text-white truncate max-w-[130px]">${p.title}</span>
                <span class="font-mono text-rose-400 font-semibold">${formatUSD(p.amount)}</span>
              </div>
            `).join('') || '<p class="text-[11px] text-slate-500 py-2">គ្មានបំណុល</p>'}
          </div>
        </div>

      </div>
    </div>

    <!-- Folder 2: ផលិតផលកំពុងលក់ & ប្រភេទចំណាយ (Products & Daily Expenses) -->
    <div class="ios-glass-folder rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <i data-lucide="tag" class="w-4 h-4 text-emerald-400"></i>
          <span>ផលិតផល & ចំណាយប្រចាំថ្ងៃ (Expenses)</span>
        </h3>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        
        <!-- Active Products Showcase -->
        <div class="bg-black/20 rounded-2xl p-3 border border-white/5">
          <p class="text-xs font-semibold text-slate-300 mb-2">ឈ្មោះផលិតផលកំពុងលក់</p>
          <div class="space-y-1.5 max-h-36 overflow-y-auto no-scrollbar">
            ${d.activeProducts.slice(0, 5).map(p => `
              <div class="flex items-center justify-between text-xs py-1 border-b border-white/5">
                <span class="text-white truncate max-w-[140px]">${p.name}</span>
                <span class="text-[10px] font-mono text-slate-400">ថ្លៃដើម ${formatUSD(p.cost)}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Recent Expenses with Description -->
        <div class="bg-black/20 rounded-2xl p-3 border border-white/5">
          <p class="text-xs font-semibold text-slate-300 mb-2">ចំណាយចុងក្រោយ (Description)</p>
          <div class="space-y-1.5 max-h-36 overflow-y-auto no-scrollbar">
            ${monthExpenses.slice(0, 5).map(e => `
              <div class="flex items-center justify-between text-xs py-1 border-b border-white/5">
                <div class="truncate max-w-[130px]">
                  <p class="text-white truncate text-[11px]">${e.description || e.category}</p>
                  <p class="text-[9px] text-slate-400">${e.date}</p>
                </div>
                <span class="font-mono text-rose-400 text-xs font-semibold">${formatUSD(e.amount)}</span>
              </div>
            `).join('') || '<p class="text-[11px] text-slate-500 py-2">គ្មានចំណាយក្នុងខែនេះ</p>'}
          </div>
        </div>

      </div>
    </div>

    <!-- Folder 3: ជំនួយការ AI & Smart Links (Gemini & ChatGPT) -->
    <div class="ios-glass-folder rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-3">
        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <i data-lucide="sparkles" class="w-4 h-4 text-amber-400"></i>
          <span>ជំនួយការ AI & ឧបករណ៍ឆ្លាតវៃ</span>
        </h3>
      </div>

      <div class="grid grid-cols-2 gap-2.5">
        <a href="https://gemini.google.com" target="_blank" 
           class="p-3 rounded-2xl bg-gradient-to-tr from-blue-900/40 to-indigo-900/40 border border-blue-500/20 flex items-center gap-3 hover:border-blue-400/50 active:scale-95 transition">
          <div class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
            ✨
          </div>
          <div>
            <p class="font-bold text-xs text-white leading-tight">Google Gemini</p>
            <p class="text-[10px] text-blue-300/80">ជំនួយការ AI ឆ្លាតវៃ</p>
          </div>
        </a>

        <a href="https://chatgpt.com" target="_blank" 
           class="p-3 rounded-2xl bg-gradient-to-tr from-emerald-900/40 to-teal-900/40 border border-emerald-500/20 flex items-center gap-3 hover:border-emerald-400/50 active:scale-95 transition">
          <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
            🤖
          </div>
          <div>
            <p class="font-bold text-xs text-white leading-tight">ChatGPT</p>
            <p class="text-[10px] text-emerald-300/80">សួរនាំ & វិភាគគំនិត</p>
          </div>
        </a>
      </div>
    </div>
  `;
}

// ==========================================
// 5. View: Analytics & Diagrams (Month / Year)
// ==========================================
function getAnalyticsViewHTML() {
  const d = DataService.data;
  if (!d) return '<p class="text-xs text-slate-400 text-center py-20">កំពុងរៀបចំដ្យាក្រាម...</p>';

  // Group by Month across all Personal Sales
  const monthlyStats = {};
  d.personalSales.forEach(s => {
    const mo = s.date.substring(0, 7); // YYYY-MM
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
            <p class="text-[11px] text-slate-400">ប្រៀបធៀបតាមខែនីមួយៗក្នុងឆ្នាំ ២០២៦</p>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">2026 Trend</span>
        </div>

        <!-- SVG Timeline Bar Chart -->
        <div class="h-48 w-full flex items-end gap-2 pt-6 pb-2 px-1">
          ${months.map(m => {
            const stat = monthlyStats[m];
            const revHeight = Math.max(12, Math.round((stat.revenue / maxRevenue) * 140));
            const moName = m.split('-')[1];
            return `
              <div class="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer" title="${m}: $${stat.revenue.toFixed(2)}">
                <span class="text-[9px] font-mono text-orange-400 opacity-0 group-hover:opacity-100 transition">$${Math.round(stat.revenue)}</span>
                <div class="w-full max-w-[28px] rounded-t-lg bg-gradient-to-t from-orange-600 to-amber-400 shadow-md transition-all group-hover:brightness-125" style="height: ${revHeight}px"></div>
                <span class="text-[10px] text-slate-400 font-mono">ខែ${moName}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Financial Summary Table -->
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
// 6. View: Daily English Learning (5 Words)
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
// 7. View: Settings & Language Customization
// ==========================================
function getSettingsViewHTML() {
  return `
    <div class="space-y-4">
      <div class="ios-glass-card rounded-3xl p-5 border border-white/10">
        <h3 class="font-bold text-sm text-white mb-3">ការកំណត់ភាសា (Language Settings)</h3>
        <div class="grid grid-cols-2 gap-3">
          <button onclick="setLanguage('km')" class="p-3.5 rounded-2xl border text-center transition ${appState.language === 'km' ? 'bg-orange-500/20 border-orange-500 text-white' : 'bg-white/5 border-white/10 text-slate-400'}">
            <span class="text-xl block mb-1">🇰🇭</span>
            <span class="text-xs font-bold">ភាសាខ្មែរ (Default)</span>
          </button>
          <button onclick="setLanguage('en')" class="p-3.5 rounded-2xl border text-center transition ${appState.language === 'en' ? 'bg-orange-500/20 border-orange-500 text-white' : 'bg-white/5 border-white/10 text-slate-400'}">
            <span class="text-xl block mb-1">🇬🇧</span>
            <span class="text-xs font-bold">English (UK/US)</span>
          </button>
        </div>
      </div>

      <div class="ios-glass-card rounded-3xl p-5 border border-white/10 space-y-3">
        <h3 class="font-bold text-sm text-white mb-2">សុវត្ថិភាព & ការគ្រប់គ្រង</h3>
        <div class="flex items-center justify-between p-3 rounded-2xl bg-white/5">
          <div class="flex items-center gap-2.5">
            <i data-lucide="lock" class="w-4 h-4 text-orange-400"></i>
            <div>
              <p class="text-xs font-semibold text-white">ចាក់សោអេក្រង់ឥឡូវនេះ</p>
              <p class="text-[10px] text-slate-400">Lock Passcode Screen</p>
            </div>
          </div>
          <button onclick="lockApp()" class="px-3 py-1.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold">
            ចាក់សោ
          </button>
        </div>

        <div class="flex items-center justify-between p-3 rounded-2xl bg-white/5">
          <div class="flex items-center gap-2.5">
            <i data-lucide="user" class="w-4 h-4 text-blue-400"></i>
            <div>
              <p class="text-xs font-semibold text-white">ព័ត៌មានផ្ទាល់ខ្លួន (About Me)</p>
              <p class="text-[10px] text-slate-400">ស្តី ស្តើង (SDEY SDOEUNG)</p>
            </div>
          </div>
          <button onclick="openAboutModal()" class="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold">
            ពិនិត្យ
          </button>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 8. Drill-Down Modals Logic
// ==========================================
function openSalesModal(monthStr) {
  const d = DataService.data;
  if (!d) return;

  const modal = document.getElementById('sales-modal');
  const listEl = document.getElementById('sales-modal-list');
  const subtitle = document.getElementById('sales-modal-subtitle');

  subtitle.textContent = `តារាងកុម្ម៉ង់ខែ ${monthStr} (${d.personalSales.filter(s => s.date.startsWith(monthStr)).length} នាក់)`;

  const filtered = d.personalSales.filter(s => s.date.startsWith(monthStr));

  listEl.innerHTML = filtered.map(item => `
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
        <span>ប្រអប់សរុប: <strong class="text-white">${item.totalBoxQty}</strong></span>
        <span>ចំណេញ: <strong class="text-blue-400">${formatUSD(item.profit)}</strong></span>
        <span class="${item.codStatus.includes('បានទូទាត់') ? 'text-emerald-400' : 'text-amber-400'}">${item.codStatus}</span>
      </div>
    </div>
  `).join('') || '<p class="text-xs text-slate-500 text-center py-8">គ្មានការលក់ក្នុងខែនេះ</p>';

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
  modal.classList.toggle('hidden');
}

function setMonthFilter(month) {
  appState.selectedMonth = month;
  renderCurrentView();
}

function setLanguage(lang) {
  appState.language = lang;
  localStorage.setItem('sd_lang', lang);
  renderCurrentView();
}
