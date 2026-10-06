/**
 * SD Data - ERP Dashboard Stage 3
 * Connected Real Data: Live Google Sheet pipeline, Filter controls, 4 KPI Cards,
 * SVG Trend Charts, Team/Product Breakdown Table, and Validation.
 */

// 1. Definition of Modules in Sidebar
const MODULES = [
  { id: 'dashboard', name: 'ផ្ទាំងសង្ខេប', icon: 'layout-dashboard' },
  { id: 'sales-team', name: 'ការលក់ និងក្រុម', icon: 'users-round' },
  { id: 'comparison', name: 'ការប្រៀបធៀប', icon: 'arrow-left-right' },
  { id: 'inventory', name: 'ស្តុកទំនិញ', icon: 'package' },
  { id: 'orders', name: 'ការបញ្ជាទិញ', icon: 'shopping-cart' },
  { id: 'income-expense', name: 'ចំណូល/ចំណាយ', icon: 'wallet' },
  { id: 'invoices', name: 'វិក្កយបត្រ', icon: 'file-text' },
  { id: 'profit-loss', name: 'ចំណេញ/ខាត', icon: 'trending-up' },
  { id: 'delivery', name: 'ការដឹកជញ្ជូន', icon: 'truck' },
  { id: 'staff', name: 'បុគ្គលិក', icon: 'user-check' },
  { id: 'reports', name: 'របាយការណ៍', icon: 'bar-chart-3' },
  { id: 'settings', name: 'ការកំណត់', icon: 'settings' }
];

// App State
const state = {
  activeModule: 'dashboard',
  comparisonTab: 'team',
  comparisonMetric: 'quantity',
  comparisonMonth1: '2026-09',
  comparisonMonth2: '2026-10',
  
  // Dashboard Period Filters
  dashboardPeriodMode: 'month', // 'day', 'month', 'year', 'custom'
  selectedDay: '2026-08-12', // default to an active day in dataset for immediate verification
  selectedMonth: '2026-08',
  selectedYear: '2026',
  customStartDate: '2026-08-01',
  customEndDate: '2026-08-31',

  // Breakdown sub-tab in Dashboard
  breakdownView: 'team', // 'team' or 'product'
};

// Formatting helpers
function formatUSD(num) {
  if (num === null || num === undefined || isNaN(num)) return '—';
  return '$' + Number(num).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatInt(num) {
  if (num === null || num === undefined || isNaN(num)) return '—';
  return Number(num).toLocaleString('en-US');
}

// Convert period mode to [startDateStr, endDateStr] (Asia/Phnom_Penh friendly)
function getEffectiveDashboardRange() {
  const mode = state.dashboardPeriodMode;
  if (mode === 'day') {
    return { start: state.selectedDay, end: state.selectedDay, label: `ថ្ងៃទី ${state.selectedDay}` };
  } else if (mode === 'month') {
    const parts = state.selectedMonth.split('-');
    const yr = parseInt(parts[0]);
    const mo = parseInt(parts[1]);
    const lastDay = new Date(yr, mo, 0).getDate();
    const start = `${parts[0]}-${parts[1].padStart(2, '0')}-01`;
    const end = `${parts[0]}-${parts[1].padStart(2, '0')}-${String(lastDay).padStart(2, '0')}`;
    return { start, end, label: `ខែ ${state.selectedMonth}` };
  } else if (mode === 'year') {
    const yr = state.selectedYear;
    return { start: `${yr}-01-01`, end: `${yr}-12-31`, label: `ឆ្នាំ ${yr}` };
  } else {
    let start = state.customStartDate;
    let end = state.customEndDate;
    if (start > end) {
      // Guard: do not allow start > end
      end = start;
      state.customEndDate = start;
    }
    return { start, end, label: `${start} ដល់ ${end}` };
  }
}

// ==========================================
// Initialization
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderSidebarNav();
  setupDateBadge();

  // Listen to DataService updates
  DataService.subscribe(onDataUpdate);

  // Initial load
  DataService.fetchData();

  // Start continuous Live Sync with Google Sheet every 15 seconds
  DataService.startLiveSync(15000);
});

function onDataUpdate(serviceState) {
  renderActiveModule();
  updateHeaderDataStatus(serviceState);
}

function setupDateBadge() {
  const dateEl = document.getElementById('current-date-badge');
  if (dateEl) {
    const today = new Date();
    const options = { timeZone: 'Asia/Phnom_Penh', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = today.toLocaleDateString('km-KH', options);
  }
}

function updateHeaderDataStatus(s) {
  const badge = document.getElementById('header-status-badge');
  if (!badge) return;

  if (s.isLoading) {
    badge.innerHTML = `
      <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs">
        <i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i>
        <span>កំពុងទាញទិន្នន័យ...</span>
      </div>
    `;
  } else if (s.error) {
    badge.innerHTML = `
      <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200 text-xs">
        <i data-lucide="alert-triangle" class="w-3.5 h-3.5"></i>
        <span>កំហុសតភ្ជាប់</span>
        <button onclick="DataService.fetchData(true)" class="underline ml-1 font-bold">សាកល្បងម្ដងទៀត</button>
      </div>
    `;
  } else if (s.lastFetched) {
    const timeStr = s.lastFetched.toLocaleTimeString('km-KH', { timeZone: 'Asia/Phnom_Penh', hour: '2-digit', minute: '2-digit', second: '2-digit' });
    badge.innerHTML = `
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs shadow-xs">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span class="font-bold">LIVE Sheet</span>
          <span class="text-emerald-600 font-normal">(${timeStr})</span>
        </div>
        <button onclick="DataService.fetchData(true)" title="ទាញទិន្នន័យឡើងវិញភ្លាមៗ (Sync Now)"
                class="p-1 rounded-lg border border-slate-200 bg-white text-slate-600 hover:text-[#B91C1C] hover:bg-slate-50 transition-colors">
          <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    `;
  }
  if (window.lucide) window.lucide.createIcons();
}

// Render Sidebar Items
function renderSidebarNav() {
  const navContainer = document.getElementById('nav-list');
  navContainer.innerHTML = MODULES.map(mod => {
    const isActive = mod.id === state.activeModule;
    const baseClasses = "flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all duration-150 cursor-pointer w-full text-left";
    const activeClasses = isActive 
      ? "bg-white text-[#B91C1C] shadow-md font-bold scale-[1.01]" 
      : "text-white hover:bg-white/15 hover:text-white";

    return `
      <button onclick="switchModule('${mod.id}')" 
              class="${baseClasses} ${activeClasses}"
              data-module="${mod.id}">
        <i data-lucide="${mod.icon}" class="w-4 h-4 shrink-0 ${isActive ? 'text-[#B91C1C]' : 'text-white'}"></i>
        <span class="truncate">${mod.name}</span>
      </button>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Switch Module
function switchModule(moduleId) {
  state.activeModule = moduleId;
  renderSidebarNav();
  renderActiveModule();
  
  const currentMod = MODULES.find(m => m.id === moduleId);
  if (currentMod) {
    document.getElementById('header-title').textContent = currentMod.name;
    const iconContainer = document.getElementById('header-icon-container');
    if (iconContainer) {
      iconContainer.innerHTML = `<i data-lucide="${currentMod.icon}" class="w-4 h-4 text-[#B91C1C]"></i>`;
    }
  }

  closeSidebar();
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Mobile Sidebar Controls
function openSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-overlay');
  sidebar.classList.remove('-translate-x-full');
  overlay.classList.remove('hidden');
  setTimeout(() => overlay.classList.remove('opacity-0'), 10);
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('mobile-overlay');
  sidebar.classList.add('-translate-x-full');
  overlay.classList.add('opacity-0');
  setTimeout(() => overlay.classList.add('hidden'), 300);
}

// Main Module Router
function renderActiveModule() {
  const main = document.getElementById('main-content');
  
  switch (state.activeModule) {
    case 'dashboard':
      main.innerHTML = getDashboardHTML();
      break;
    case 'sales-team':
      main.innerHTML = getSalesTeamHTML();
      break;
    case 'comparison':
      main.innerHTML = getComparisonHTML();
      break;
    default:
      main.innerHTML = getGenericModuleHTML(state.activeModule);
      break;
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==========================================
// 1. Module: ផ្ទាំងសង្ខេប (Dashboard) - FULL IMPLEMENTATION
// ==========================================
function getDashboardHTML() {
  const isLoaded = !DataService.isLoading && !DataService.error && DataService.data;
  const range = getEffectiveDashboardRange();

  // If still loading and has no cached data
  if (DataService.isLoading && !DataService.data) {
    return `
      <div class="max-w-7xl mx-auto py-20 flex flex-col items-center justify-center text-center">
        <div class="w-12 h-12 rounded-full border-4 border-[#B91C1C]/20 border-t-[#B91C1C] animate-spin mb-4"></div>
        <h3 class="text-base font-bold text-slate-700">កំពុងទាញទិន្នន័យពី Google Sheet...</h3>
        <p class="text-xs text-slate-400 mt-1">សូមរង់ចាំមួយភ្លែត ប្រព័ន្ធកំពុងដំណើរការទិន្នន័យផ្សារភ្ជាប់ផ្ទាល់</p>
      </div>
    `;
  }

  // If error and no cached data
  if (DataService.error && !DataService.data) {
    return `
      <div class="max-w-7xl mx-auto py-16 flex flex-col items-center justify-center text-center bg-white p-6 rounded-2xl border border-rose-200 shadow-sm">
        <div class="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mb-3">
          <i data-lucide="alert-circle" class="w-6 h-6"></i>
        </div>
        <h3 class="text-base font-bold text-slate-800">បរាជ័យក្នុងការតភ្ជាប់ទិន្នន័យ</h3>
        <p class="text-xs text-rose-600 mt-1 max-w-md">${DataService.error}</p>
        <button onclick="DataService.fetchData(true)" 
                class="mt-4 px-4 py-2 bg-[#B91C1C] text-white rounded-lg text-xs font-semibold hover:bg-red-800 transition-colors flex items-center gap-1.5">
          <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i> សាកល្បងទាញម្ដងទៀត
        </button>
      </div>
    `;
  }

  // Filter dataset by current active range
  const { sales, expenses } = DataService.filterByRange(range.start, range.end);

  // Calculate 4 KPI Metrics
  const totalSalesQty = sales.reduce((acc, s) => acc + s.qty, 0);
  const totalRevenue = sales.reduce((acc, s) => acc + s.revenue, 0);
  const totalGrossProfit = sales.reduce((acc, s) => acc + s.grossProfit, 0);
  const totalExpenses = expenses.reduce((acc, e) => acc + e.amount, 0);

  const hasSales = sales.length > 0;
  const hasExpenses = expenses.length > 0;

  // Breakdown Aggregation (by team or product)
  const breakdownMap = {};
  sales.forEach(item => {
    const key = state.breakdownView === 'team' ? item.team : item.product;
    if (!breakdownMap[key]) {
      breakdownMap[key] = { name: key, qty: 0, revenue: 0, grossProfit: 0 };
    }
    breakdownMap[key].qty += item.qty;
    breakdownMap[key].revenue += item.revenue;
    breakdownMap[key].grossProfit += item.grossProfit;
  });

  const breakdownList = Object.values(breakdownMap).sort((a, b) => b.qty - a.qty);

  // Group for Chart (Timeline by day or month)
  const chartData = prepareChartData(sales, range);

  return `
    <div class="space-y-4 max-w-7xl mx-auto">
      
      <!-- Top Bar: Data Source Info & Date Filter -->
      <div class="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
        
        <!-- Controls Row -->
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            <div class="p-1.5 bg-red-50 text-[#B91C1C] rounded-lg">
              <i data-lucide="calendar" class="w-4 h-4"></i>
            </div>
            <span class="font-bold text-slate-700 text-xs sm:text-sm">តម្រងរយៈពេល៖</span>
          </div>

          <!-- Period Mode Buttons -->
          <div class="flex flex-wrap items-center gap-1.5">
            <button onclick="setDashboardPeriodMode('day')"
                    class="px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                      state.dashboardPeriodMode === 'day' 
                        ? 'bg-[#B91C1C] text-white border-[#B91C1C] font-bold shadow-xs' 
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }">
              តាមថ្ងៃ
            </button>
            <button onclick="setDashboardPeriodMode('month')"
                    class="px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                      state.dashboardPeriodMode === 'month' 
                        ? 'bg-[#B91C1C] text-white border-[#B91C1C] font-bold shadow-xs' 
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }">
              តាមខែ
            </button>
            <button onclick="setDashboardPeriodMode('year')"
                    class="px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                      state.dashboardPeriodMode === 'year' 
                        ? 'bg-[#B91C1C] text-white border-[#B91C1C] font-bold shadow-xs' 
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }">
              តាមឆ្នាំ
            </button>
            <button onclick="setDashboardPeriodMode('custom')"
                    class="px-3 py-1.5 text-xs rounded-lg border transition-colors ${
                      state.dashboardPeriodMode === 'custom' 
                        ? 'bg-[#B91C1C] text-white border-[#B91C1C] font-bold shadow-xs' 
                        : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }">
              កំណត់រយៈពេល
            </button>
          </div>
        </div>

        <!-- Dynamic Inputs for Selected Mode -->
        <div class="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
          
          <div class="flex flex-wrap items-center gap-2">
            ${renderPeriodInputs()}
          </div>

          <!-- Active Range Summary & Source Badges -->
          <div class="flex items-center gap-2 text-slate-500">
            <span class="inline-flex items-center gap-1 bg-slate-100 px-2.5 py-1 rounded-md text-[11px] font-medium text-slate-700">
              <i data-lucide="check-circle" class="w-3 h-3 text-emerald-600"></i>
              វិសាលភាព៖ <span class="font-bold text-[#B91C1C]">${range.label}</span>
            </span>
            <span class="text-[11px] text-slate-400 hidden md:inline">
              (ប្រភព: Master data & Daily Expenses)
            </span>
          </div>

        </div>

      </div>

      <!-- 4 KPI Summary Cards (REAL DATA) -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        
        <!-- Card 1: ចំនួនលក់ -->
        <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div class="flex items-center justify-between text-slate-500 mb-2">
            <span class="text-xs font-semibold">ចំនួនលក់សរុប</span>
            <div class="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
            </div>
          </div>
          <div class="flex items-baseline justify-between">
            <span class="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              ${isLoaded ? formatInt(totalSalesQty) : '—'}
            </span>
            <span class="text-[11px] text-slate-400 font-medium">ប្រអប់/ឯកតា</span>
          </div>
          <div class="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
            <span>ប្រតិបត្តិការលក់៖ ${sales.length}</span>
            <span class="text-emerald-600 font-medium">${hasSales ? 'មានទិន្នន័យ' : 'គ្មានប្រតិបត្តិការ'}</span>
          </div>
        </div>

        <!-- Card 2: ចំណូល -->
        <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div class="flex items-center justify-between text-slate-500 mb-2">
            <span class="text-xs font-semibold">ចំណូលសរុប (Revenue)</span>
            <div class="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <i data-lucide="dollar-sign" class="w-3.5 h-3.5"></i>
            </div>
          </div>
          <div class="flex items-baseline justify-between">
            <span class="text-2xl sm:text-3xl font-extrabold text-emerald-700 tracking-tight">
              ${isLoaded ? formatUSD(totalRevenue) : '—'}
            </span>
            <span class="text-[11px] text-slate-400 font-medium">USD</span>
          </div>
          <div class="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
            <span>តម្លៃលក់ជូនអតិថិជន</span>
            <span class="text-emerald-600 font-medium">Gross Revenue</span>
          </div>
        </div>

        <!-- Card 3: ចំណេញដុល -->
        <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div class="flex items-center justify-between text-slate-500 mb-2">
            <span class="text-xs font-semibold">ចំណេញដុល (Gross Profit)</span>
            <div class="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <i data-lucide="trending-up" class="w-3.5 h-3.5"></i>
            </div>
          </div>
          <div class="flex items-baseline justify-between">
            <span class="text-2xl sm:text-3xl font-extrabold text-amber-700 tracking-tight">
              ${isLoaded ? formatUSD(totalGrossProfit) : '—'}
            </span>
            <span class="text-[11px] text-slate-400 font-medium">USD</span>
          </div>
          <div class="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
            <span>ចំណូលដកថ្លៃដើម ($24/box)</span>
            <span class="text-amber-600 font-medium">
              ${totalRevenue > 0 ? ((totalGrossProfit / totalRevenue) * 100).toFixed(1) + '%' : '0%'}
            </span>
          </div>
        </div>

        <!-- Card 4: ចំណាយ -->
        <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div class="flex items-center justify-between text-slate-500 mb-2">
            <span class="text-xs font-semibold">ចំណាយសរុប (Expenses)</span>
            <div class="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
              <i data-lucide="receipt" class="w-3.5 h-3.5"></i>
            </div>
          </div>
          <div class="flex items-baseline justify-between">
            <span class="text-2xl sm:text-3xl font-extrabold text-rose-700 tracking-tight">
              ${isLoaded ? formatUSD(totalExpenses) : '—'}
            </span>
            <span class="text-[11px] text-slate-400 font-medium">USD</span>
          </div>
          <div class="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
            <span>ចំណាយប្រតិបត្តិការ៖ ${expenses.length} មុខ</span>
            <span class="text-rose-600 font-medium">Daily Expenses</span>
          </div>
        </div>

      </div>

      <!-- Charts & Breakdown Section (REAL DATA) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        <!-- Left 2 Cols: Sales Graph Area (Connected Real Timeline) -->
        <div class="lg:col-span-2 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3 border-b border-slate-100 pb-2.5">
              <div class="flex items-center gap-2">
                <i data-lucide="activity" class="w-4 h-4 text-[#B91C1C]"></i>
                <h3 class="font-bold text-slate-800 text-xs sm:text-sm">និន្នាការនៃការលក់ (Sales Timeline)</h3>
              </div>
              <span class="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded font-medium">
                ${chartData.timelineType === 'month' ? 'បែងចែកតាមខែ' : 'បែងចែកតាមថ្ងៃ'}
              </span>
            </div>

            <!-- SVG Visual Trend Graph -->
            <div class="h-64 rounded-xl bg-slate-50/70 p-3 border border-slate-200/60 flex flex-col justify-between">
              ${renderSalesChartSVG(chartData)}
            </div>
          </div>

          <div class="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
            <span>ឯកតា៖ ប្រអប់ (Sale QTY)</span>
            <span>ចំណូលសរុបក្នុងក្រាហ្វ៖ <strong class="text-slate-700">${formatUSD(chartData.totalRev)}</strong></span>
          </div>
        </div>

        <!-- Right 1 Col: Summary by Group/Product Area (CONNECTED TABLE) -->
        <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3 border-b border-slate-100 pb-2.5">
              <div class="flex items-center gap-1.5">
                <i data-lucide="layers" class="w-4 h-4 text-[#B91C1C]"></i>
                <h3 class="font-bold text-slate-800 text-xs sm:text-sm">សង្ខេបលទ្ធផល</h3>
              </div>
              
              <!-- Tab Toggle: Team vs Product -->
              <div class="flex items-center p-0.5 bg-slate-100 rounded-lg border border-slate-200 text-[11px]">
                <button onclick="setBreakdownView('team')" 
                        class="px-2 py-1 rounded-md transition-colors ${
                          state.breakdownView === 'team' ? 'bg-white text-[#B91C1C] font-bold shadow-xs' : 'text-slate-600'
                        }">
                  ក្រុម
                </button>
                <button onclick="setBreakdownView('product')" 
                        class="px-2 py-1 rounded-md transition-colors ${
                          state.breakdownView === 'product' ? 'bg-white text-[#B91C1C] font-bold shadow-xs' : 'text-slate-600'
                        }">
                  ផលិតផល
                </button>
              </div>
            </div>

            <!-- Breakdown Table Content -->
            <div class="overflow-y-auto max-h-60 pr-1">
              ${renderBreakdownTable(breakdownList)}
            </div>
          </div>

          <div class="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>សរុបធាតុ៖ ${breakdownList.length}</span>
            <span>ផលបូកចំនួនលក់៖ <strong class="text-[#B91C1C]">${formatInt(totalSalesQty)}</strong></span>
          </div>
        </div>

      </div>

    </div>
  `;
}

// Render dynamic inputs based on selected period mode
function renderPeriodInputs() {
  const mode = state.dashboardPeriodMode;
  if (mode === 'day') {
    return `
      <span class="text-slate-600 font-medium">ជ្រើសរើសថ្ងៃ៖</span>
      <input type="date" value="${state.selectedDay}" 
             onchange="setDashboardDay(this.value)"
             class="border border-slate-200 rounded-lg px-2.5 py-1 text-xs bg-slate-50 text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#B91C1C]">
      <span class="text-slate-400 text-[11px]">(ឧទាហរណ៍៖ 2026-08-12 មានទិន្នន័យ 5 ប្រតិបត្តិការ)</span>
    `;
  } else if (mode === 'month') {
    return `
      <span class="text-slate-600 font-medium">ជ្រើសរើសខែ៖</span>
      <input type="month" value="${state.selectedMonth}" 
             onchange="setDashboardMonth(this.value)"
             class="border border-slate-200 rounded-lg px-2.5 py-1 text-xs bg-slate-50 text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#B91C1C]">
      <span class="text-slate-400 text-[11px]">(2026-08, 2026-09, 2026-10)</span>
    `;
  } else if (mode === 'year') {
    return `
      <span class="text-slate-600 font-medium">ជ្រើសរើសឆ្នាំ៖</span>
      <select onchange="setDashboardYear(this.value)"
              class="border border-slate-200 rounded-lg px-2.5 py-1 text-xs bg-slate-50 text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#B91C1C]">
        <option value="2026" ${state.selectedYear === '2026' ? 'selected' : ''}>ឆ្នាំ ២០២៦</option>
        <option value="2025" ${state.selectedYear === '2025' ? 'selected' : ''}>ឆ្នាំ ២០២៥</option>
      </select>
    `;
  } else {
    return `
      <span class="text-slate-600 font-medium">ពីថ្ងៃ៖</span>
      <input type="date" value="${state.customStartDate}" 
             onchange="setCustomStartDate(this.value)"
             class="border border-slate-200 rounded-lg px-2.5 py-1 text-xs bg-slate-50 text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#B91C1C]">
      <span class="text-slate-400">ដល់៖</span>
      <input type="date" value="${state.customEndDate}" 
             onchange="setCustomEndDate(this.value)"
             class="border border-slate-200 rounded-lg px-2.5 py-1 text-xs bg-slate-50 text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#B91C1C]">
    `;
  }
}

// Event Handlers for Period Filter
function setDashboardPeriodMode(mode) {
  state.dashboardPeriodMode = mode;
  renderActiveModule();
}

function setDashboardDay(val) {
  state.selectedDay = val;
  renderActiveModule();
}

function setDashboardMonth(val) {
  state.selectedMonth = val;
  renderActiveModule();
}

function setDashboardYear(val) {
  state.selectedYear = val;
  renderActiveModule();
}

function setCustomStartDate(val) {
  state.customStartDate = val;
  if (state.customEndDate < val) {
    state.customEndDate = val;
  }
  renderActiveModule();
}

function setCustomEndDate(val) {
  if (val < state.customStartDate) {
    alert('ថ្ងៃបញ្ចប់មិនអាចនៅមុនថ្ងៃចាប់ផ្ដើមបានឡើយ!');
    return;
  }
  state.customEndDate = val;
  renderActiveModule();
}

function setBreakdownView(view) {
  state.breakdownView = view;
  renderActiveModule();
}

// Breakdown Table Renderer
function renderBreakdownTable(list) {
  if (!list || list.length === 0) {
    return `
      <div class="py-12 text-center text-slate-400 flex flex-col items-center justify-center">
        <i data-lucide="inbox" class="w-8 h-8 text-slate-300 mb-1.5"></i>
        <p class="text-xs font-medium text-slate-500">គ្មានទិន្នន័យក្នុងរយៈពេលនេះ</p>
      </div>
    `;
  }

  return `
    <table class="w-full text-left text-xs">
      <thead class="bg-slate-100 text-slate-600 font-semibold text-[11px] sticky top-0">
        <tr>
          <th class="py-1.5 px-2 rounded-l">ឈ្មោះ (${state.breakdownView === 'team' ? 'ក្រុម' : 'ផលិតផល'})</th>
          <th class="py-1.5 px-2 text-right">លក់</th>
          <th class="py-1.5 px-2 text-right rounded-r">ចំណេញដុល</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-100">
        ${list.map((row, idx) => `
          <tr class="hover:bg-slate-50 transition-colors">
            <td class="py-2 px-2 text-slate-800 font-medium truncate max-w-[140px]" title="${row.name}">
              <span class="inline-block w-4 text-[10px] text-slate-400 font-mono">${idx + 1}.</span>
              ${row.name}
            </td>
            <td class="py-2 px-2 text-right font-bold text-slate-700">${formatInt(row.qty)}</td>
            <td class="py-2 px-2 text-right font-bold text-amber-700">${formatUSD(row.grossProfit)}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

// Prepare Data & Timeline Points for SVG Chart
function prepareChartData(sales, range) {
  const isYearMode = state.dashboardPeriodMode === 'year';
  const groupMap = {};
  let totalRev = 0;

  sales.forEach(s => {
    totalRev += s.revenue;
    const key = isYearMode ? `${s.year}-${s.month}` : s.date;
    if (!groupMap[key]) {
      groupMap[key] = { label: key, qty: 0, revenue: 0 };
    }
    groupMap[key].qty += s.qty;
    groupMap[key].revenue += s.revenue;
  });

  const points = Object.keys(groupMap).sort().map(k => groupMap[k]);
  return {
    timelineType: isYearMode ? 'month' : 'day',
    points: points,
    totalRev: totalRev
  };
}

// Generate pure Responsive SVG Bar Chart for Sales Timeline
function renderSalesChartSVG(chartData) {
  const pts = chartData.points;
  if (!pts || pts.length === 0) {
    return `
      <div class="h-full flex flex-col items-center justify-center text-center text-slate-400">
        <i data-lucide="bar-chart" class="w-8 h-8 text-slate-300 mb-1"></i>
        <p class="text-xs font-medium text-slate-500">គ្មានទិន្នន័យលក់សម្រាប់បង្ហាញក្រាហ្វក្នុងរយៈពេលនេះ</p>
      </div>
    `;
  }

  const maxQty = Math.max(...pts.map(p => p.qty), 5);
  const chartHeight = 160;

  return `
    <div class="h-full flex flex-col justify-between">
      <!-- Bars area -->
      <div class="flex-1 flex items-end gap-1.5 sm:gap-2 pt-4 px-1 overflow-x-auto scrollbar-none">
        ${pts.map(p => {
          const heightPct = Math.max(8, Math.round((p.qty / maxQty) * 100));
          return `
            <div class="flex-1 min-w-[28px] max-w-[48px] flex flex-col items-center gap-1 group relative">
              <!-- Tooltip on hover -->
              <div class="absolute -top-8 bg-slate-800 text-white text-[10px] py-0.5 px-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow">
                ${p.label}: ${p.qty} ប្រអប់ (${formatUSD(p.revenue)})
              </div>

              <span class="text-[10px] font-bold text-slate-700">${p.qty}</span>
              <div class="w-full bg-[#B91C1C] hover:bg-red-700 rounded-t-md transition-all duration-300 shadow-sm"
                   style="height: ${heightPct}%;"></div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- X-Axis Labels -->
      <div class="flex items-center gap-1.5 sm:gap-2 px-1 border-t border-slate-200/80 pt-1.5 overflow-x-auto scrollbar-none text-[10px] text-slate-500">
        ${pts.map(p => `
          <div class="flex-1 min-w-[28px] max-w-[48px] text-center truncate" title="${p.label}">
            ${p.label.length > 5 ? p.label.slice(-5) : p.label}
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// ==========================================
// 2. Module: ការលក់ និងក្រុម (Sales & Team) - Wireframe
// ==========================================
function getSalesTeamHTML() {
  return `
    <div class="space-y-4 max-w-7xl mx-auto">
      <div class="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm space-y-3">
        <div class="flex items-center gap-2 text-xs font-bold text-slate-700">
          <i data-lucide="filter" class="w-4 h-4 text-[#B91C1C]"></i>
          <span>តម្រងទិន្នន័យ (Filters)</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
          <div>
            <label class="block text-[11px] font-medium text-slate-500 mb-1">រយៈពេល</label>
            <select class="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#B91C1C]">
              <option>ខែនេះ (តុលា ២០២៦)</option>
              <option>ខែមុន (កញ្ញា ២០២៦)</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-500 mb-1">ក្រុមលក់</label>
            <select class="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#B91C1C]">
              <option value="">— ទាំងអស់ —</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-500 mb-1">សមាជិក/បុគ្គលិក</label>
            <select class="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#B91C1C]">
              <option value="">— ទាំងអស់ —</option>
            </select>
          </div>
          <div>
            <label class="block text-[11px] font-medium text-slate-500 mb-1">ផលិតផល</label>
            <select class="w-full bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#B91C1C]">
              <option value="">— ទាំងអស់ —</option>
            </select>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div class="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
          <p class="text-[11px] text-slate-500">ការលក់សរុប</p>
          <p class="text-xl font-bold text-slate-700 mt-1">—</p>
        </div>
        <div class="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
          <p class="text-[11px] text-slate-500">ចំណូលសរុប</p>
          <p class="text-xl font-bold text-slate-700 mt-1">—</p>
        </div>
        <div class="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
          <p class="text-[11px] text-slate-500">ចំណេញដុល</p>
          <p class="text-xl font-bold text-slate-700 mt-1">—</p>
        </div>
        <div class="bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
          <p class="text-[11px] text-slate-500">ចំនួនវិក្កយបត្រ</p>
          <p class="text-xl font-bold text-slate-700 mt-1">—</p>
        </div>
      </div>

      <div class="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div class="p-3.5 border-b border-slate-200 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <i data-lucide="table" class="w-4 h-4 text-[#B91C1C]"></i>
            <h3 class="font-bold text-slate-800 text-xs sm:text-sm">តារាងលទ្ធផលលក់តាមក្រុម និងសមាជិក</h3>
          </div>
          <span class="text-[11px] text-slate-400">ដំណាក់កាលបន្ទាប់</span>
        </div>
        <div class="py-12 text-center text-slate-400">
          <p class="font-medium text-xs text-slate-500">នឹងភ្ជាប់ទិន្នន័យនៅដំណាក់កាលបន្ទាប់</p>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 3. Module: ការប្រៀបធៀប (Comparison) - Wireframe
// ==========================================
function getComparisonHTML() {
  const tabs = [
    { id: 'team', label: 'ក្រុម', hasMetrics: true },
    { id: 'member', label: 'សមាជិក', hasMetrics: true },
    { id: 'product', label: 'ផលិតផល', hasMetrics: true },
    { id: 'income', label: 'ចំណូល', hasMetrics: false },
    { id: 'expense', label: 'ចំណាយ', hasMetrics: false },
    { id: 'profit', label: 'ចំណេញ', hasMetrics: false }
  ];

  const currentTabObj = tabs.find(t => t.id === state.comparisonTab) || tabs[0];
  const showMetricToggle = currentTabObj.hasMetrics;

  return `
    <div class="space-y-4 max-w-7xl mx-auto">
      <div class="bg-white p-2 rounded-xl border border-slate-200/80 shadow-sm">
        <div class="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          ${tabs.map(tab => {
            const isActive = tab.id === state.comparisonTab;
            return `
              <button onclick="setComparisonTab('${tab.id}')"
                      class="px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                        isActive ? 'bg-[#B91C1C] text-white shadow-sm font-semibold' : 'text-slate-600 hover:bg-slate-100'
                      }">
                ${tab.label}
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <div class="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div class="flex flex-wrap items-center gap-2 text-xs">
          <div class="flex items-center gap-1.5">
            <span class="text-slate-500 font-medium">ខែទី១:</span>
            <input type="month" value="${state.comparisonMonth1}" 
                   onchange="state.comparisonMonth1 = this.value"
                   class="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#B91C1C]">
          </div>
          <span class="text-slate-400 font-medium px-1">ប្រៀបធៀបនឹង</span>
          <div class="flex items-center gap-1.5">
            <span class="text-slate-500 font-medium">ខែទី២:</span>
            <input type="month" value="${state.comparisonMonth2}" 
                   onchange="state.comparisonMonth2 = this.value"
                   class="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#B91C1C]">
          </div>
        </div>

        ${showMetricToggle ? `
          <div class="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200 text-xs">
            <button onclick="setComparisonMetric('quantity')"
                    class="px-3 py-1 rounded-md transition-colors ${
                      state.comparisonMetric === 'quantity' ? 'bg-white text-[#B91C1C] font-bold shadow-xs' : 'text-slate-600'
                    }">
              ចំនួនលក់
            </button>
            <button onclick="setComparisonMetric('gross_profit')"
                    class="px-3 py-1 rounded-md transition-colors ${
                      state.comparisonMetric === 'gross_profit' ? 'bg-white text-[#B91C1C] font-bold shadow-xs' : 'text-slate-600'
                    }">
              ចំណេញដុល
            </button>
          </div>
        ` : ''}
      </div>

      <div class="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div class="p-3.5 border-b border-slate-200 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <i data-lucide="scale" class="w-4 h-4 text-[#B91C1C]"></i>
            <h3 class="font-bold text-slate-800 text-xs sm:text-sm">
              តារាងប្រៀបធៀបតាម${currentTabObj.label} 
              ${showMetricToggle ? `(${state.comparisonMetric === 'quantity' ? 'ចំនួនលក់' : 'ចំណេញដុល'})` : ''}
            </h3>
          </div>
          <span class="text-[11px] text-slate-400">ដំណាក់កាលបន្ទាប់</span>
        </div>
        <div class="py-12 text-center text-slate-400">
          <p class="font-medium text-xs text-slate-500">នឹងភ្ជាប់ទិន្នន័យនៅដំណាក់កាលបន្ទាប់</p>
        </div>
      </div>
    </div>
  `;
}

function setComparisonTab(tabId) {
  state.comparisonTab = tabId;
  renderActiveModule();
}

function setComparisonMetric(metricId) {
  state.comparisonMetric = metricId;
  renderActiveModule();
}

// ==========================================
// 4. Other Modules Layout (Generic Structure)
// ==========================================
function getGenericModuleHTML(moduleId) {
  const currentMod = MODULES.find(m => m.id === moduleId);
  return `
    <div class="space-y-4 max-w-7xl mx-auto">
      <div class="bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex items-center justify-between">
        <div>
          <h3 class="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
            <i data-lucide="${currentMod.icon}" class="w-4 h-4 text-[#B91C1C]"></i>
            ${currentMod.name}
          </h3>
          <p class="text-xs text-slate-500 mt-1">មុខងារសម្រាប់គ្រប់គ្រង និងតាមដានព័ត៌មាន ${currentMod.name}។</p>
        </div>
        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
          <i data-lucide="clock" class="w-3 h-3"></i> គ្រោង UI
        </span>
      </div>

      <div class="bg-white rounded-xl border border-slate-200/80 shadow-sm overflow-hidden">
        <div class="py-14 text-center text-slate-400 flex flex-col items-center justify-center p-4">
          <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-2.5">
            <i data-lucide="database" class="w-6 h-6 text-slate-300"></i>
          </div>
          <p class="text-sm font-semibold text-slate-600">មិនទាន់ភ្ជាប់ទិន្នន័យ</p>
          <p class="text-xs text-slate-400 max-w-sm mt-1">
            គ្រោងនៃទំព័រ ${currentMod.name} ត្រូវបានរៀបចំរួចរាល់ មុខងារលម្អិតនឹងត្រូវភ្ជាប់នៅដំណាក់កាលបន្តបន្ទាប់។
          </p>
        </div>
      </div>
    </div>
  `;
}
