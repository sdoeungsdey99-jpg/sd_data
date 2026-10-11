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
    today: 'ថ្ងៃទី',
    thisMonth: 'ខែ',
    thisYear: 'ឆ្នាំ',
    custom: 'ជ្រើសរើស',
    totalBoxes: 'ចំនួនលក់សរុប',
    revenue: 'ចំណូលលក់សរុប',
    grossProfit: 'ចំណេញដុល (Profit)',
    expenses: 'ចំណាយសរុប',
    boxUnit: 'ប្រអប់',
    pendingCodTitle: '📦 លុយនៅអតិថិជន / COD មិនទាន់ទូទាត់',
    pendingCodHint: 'Outstanding Customer Payment',
    netCashTitle: '📈 សង្ខេបស្ថាពរហិរញ្ញវត្ថុសុទ្ធ (Net Cash Position)',
    actualCash: 'សរុបសាច់ប្រាក់ជាក់ស្តែង',
    pendingCod: 'លុយ COD រង់ចាំទូទាត់',
    liquidAssets: 'សរុបទ្រព្យសកម្មរាវ',
    payablesTotal: 'សរុបបំណុលត្រូវទូទាត់',
    finalNetCash: '(=) ទឹកប្រាក់សុទ្ធពិតប្រាកដ:',
    bankAccountsTitle: 'ឈ្មោះគណនី / ធនាគារ និងសមតុល្យនីមួយៗ',
    payablesTitle: 'បំណុលត្រូវទូទាត់',
    todayExpTitle: 'ការចំណាយថ្ងៃនេះ',
    teamSalesTitle: 'គោលដៅលក់តាមក្រុម',
    target100: 'គោលដៅ ១០០ ប្រអប់',
    homeDock: 'ទំព័រដើម',
    analyticsDock: 'វិភាគ',
    orderDock: 'កុម្ម៉ង់',
    learningDock: 'សិក្សា',
    settingsDock: 'កំណត់',
    settingsTitle: 'ការកំណត់',
    settingsSubtitle: 'គ្រប់គ្រងរចនាប័ទ្ម ភាសា និងព័ត៌មានប្រព័ន្ធ',
    appearanceSection: 'រចនាប័ទ្ម និងចំណូលចិត្ត',
    appearanceDesc: 'កំណត់ពុម្ពអក្សរ ទំហំអក្សរ ផ្ទាំងរូបភាព និងភាសា',
    accountSection: 'គណនី និងអំពីប្រព័ន្ធ',
    accountDesc: 'គ្រប់គ្រងសុវត្ថិភាព និងព័ត៌មានម្ចាស់គណនី',
    fontTitle: 'ពុម្ពអក្សរ',
    fontDesc: 'ជ្រើសរើសទម្រង់អក្សរងាយស្រួលអាន',
    textSizeTitle: 'ទំហំអក្សរ',
    textSizeDesc: 'តូច • មធ្យម • ធំ',
    wallpaperTitle: 'ផ្ទាំងរូបភាពអេក្រង់ចាក់សោរ',
    wallpaperDesc: 'រូបភាព និងពណ៌ពន្លឺផ្ទៃខាងក្រោយ',
    protectApp: 'ការពារទិន្នន័យរបស់អ្នក ជាមួយលេខសម្ងាត់ ៤ ខ្ទង់',
    protectDesc: 'ប្រើលេខសម្ងាត់ ដើម្បីសុវត្ថិភាព និងទំនុកចិត្តខ្ពស់',
    enablePinTitle: 'ការចាក់សោរដោយលេខសម្ងាត់',
    enablePinDesc: 'ទាមទារលេខសម្ងាត់ពេលបើកកម្មវិធី',
    changePinBtn: 'ផ្លាស់ប្តូរលេខកូដសម្ងាត់',
    theme: 'ទម្រង់ពណ៌',
    dark: 'ងងឹត',
    light: 'ភ្លឺ',
    language: 'ភាសា',
    notificationsTitle: 'ការជូនដំណឹង',
    notificationsDesc: 'សាររំលឹកការលក់ និងចំណាយប្រចាំថ្ងៃ',
    lockScreenNow: 'ចាក់សោអេក្រង់ឥឡូវនេះ',
    aboutMe: 'អំពីខ្ញុំ',
    aboutDesc: 'ព័ត៌មានផ្ទាល់ខ្លួន និងតួនាទីគ្រប់គ្រង',
    managerTitle: 'ប្រធានគ្រប់គ្រង',
    salesRole: 'ផ្នែកលក់',
    leaderRole: 'ដឹកនាំក្រុម',
    developerRole: 'អ្នកអភិវឌ្ឍន៍',
    versionLabel: 'ជំនាន់ប្រព័ន្ធ',
    phoneLabel: 'លេខទូរសព្ទ',
    telegramLabel: 'តេឡេក្រាម',
    contactTelegramBtn: 'ទាក់ទងតាមតេឡេក្រាម',
    noData: 'គ្មានទិន្នន័យ',
    themeAccentTitle: 'ពណ៌ចម្បង',
    themeAccentDesc: 'ជ្រើសរើសពណ៌សម្រាប់ប៊ូតុង និងផ្លាកសញ្ញា',
    accentBlue: 'ខៀវចាស់',
    accentCoral: 'ក្រហមផ្កាថ្ម',
    accentOrange: 'ទឹកក្រូច',
    accentAmber: 'លឿងទុំ',
    accentEmerald: 'បៃតងរស្មី',
    accentPink: 'ផ្កាឈូក',
    contrastHint: 'ពណ៌អក្សរផ្លាស់ប្តូរស្វ័យប្រវត្តិតាមពណ៌ផ្ទៃ ដើម្បីច្បាស់ភ្នែក (លឿងទុំ = អក្សរខ្មៅធ្យូង)',
    diagramTitle: 'ដ្យាក្រាមការលក់ និងប្រាក់ចំណេញ',
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
    today: 'Day',
    thisMonth: 'Month',
    thisYear: 'Year',
    custom: 'Custom',
    totalBoxes: 'Total Sales',
    revenue: 'Total Revenue',
    grossProfit: 'Gross Profit',
    expenses: 'Total Expenses',
    boxUnit: 'Boxes',
    pendingCodTitle: 'Outstanding Customer Payment',
    pendingCodHint: 'Outstanding Customer Payment',
    netCashTitle: 'Net Cash Position Summary',
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
    learningDock: 'Study',
    settingsDock: 'Settings',
    settingsTitle: 'Settings',
    settingsSubtitle: 'Manage appearance, language, and system preferences',
    appearanceSection: 'Appearance & Preferences',
    appearanceDesc: 'Customize typography, text size, wallpapers, and language',
    accountSection: 'Account & System',
    accountDesc: 'Manage passcode security and profile information',
    fontTitle: 'Typography',
    fontDesc: 'Choose preferred readable font family',
    textSizeTitle: 'Text Size',
    textSizeDesc: 'Small • Medium • Large',
    wallpaperTitle: 'Lock Screen Wallpaper',
    wallpaperDesc: 'Background visuals and ambient glows',
    protectApp: 'Protect your data with a 4-digit passcode',
    protectDesc: 'Use passcode for higher security and peace of mind',
    enablePinTitle: 'Passcode Lock',
    enablePinDesc: 'Require passcode when opening app',
    changePinBtn: 'Change Passcode',
    theme: 'Color Mode',
    dark: 'Dark',
    light: 'Light',
    language: 'Language',
    notificationsTitle: 'Notifications',
    notificationsDesc: 'Sales alerts and daily expense reminders',
    lockScreenNow: 'Lock Screen Now',
    aboutMe: 'About Me',
    aboutDesc: 'Personal profile and management roles',
    managerTitle: 'Manager',
    salesRole: 'Sale',
    leaderRole: 'Leader',
    developerRole: 'Developer',
    versionLabel: 'System Version',
    phoneLabel: 'Phone Number',
    telegramLabel: 'Telegram',
    contactTelegramBtn: 'Contact via Telegram',
    noData: 'No Data Available',
    themeAccentTitle: 'Accent Theme',
    themeAccentDesc: 'Choose primary color for buttons and badges',
    accentBlue: 'Deep Blue',
    accentCoral: 'Coral Red',
    accentOrange: 'Sunset Orange',
    accentAmber: 'Golden Amber',
    accentEmerald: 'Emerald Green',
    accentPink: 'Rose Pink',
    contrastHint: 'Text color auto-adapts for optimal readability (Amber = Dark Charcoal)',
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
  themeAccent: localStorage.getItem('sd_theme_accent') || 'orange', // 'blue' | 'coral' | 'orange' | 'amber' | 'emerald' | 'pink'
  activeSettingsItem: null, // null | 'about' | 'accent' | 'fonts' | 'text_size' | 'wallpaper' | 'security'
  pinEnabled: localStorage.getItem('sd_pin_enabled') !== 'false',
  isLocked: localStorage.getItem('sd_pin_enabled') !== 'false' && !sessionStorage.getItem('sd_unlocked'),
  enteredPin: '',
  correctPin: localStorage.getItem('sd_pin') || '1234',
  lockWallpaper: localStorage.getItem('sd_lock_wallpaper') || 'wp-deep-mesh',
  analyticsMonthKey: 'all', // 'all' or 'YYYY-MM'
  hasReadNotifications: false,
  studyWordCount: 5,
  fontFamily: localStorage.getItem('sd_font') || 'font-kantumruy',
  textSize: localStorage.getItem('sd_text_size') || 'md',
  notificationsEnabled: localStorage.getItem('sd_notif_enabled') !== 'false'
};

function applyAppFont(fontClass) {
  document.body.classList.remove('font-kantumruy', 'font-koh-santepheap', 'font-jakarta');
  document.body.classList.add(fontClass || 'font-kantumruy');
}

function setAppFont(fontClass) {
  appState.fontFamily = fontClass;
  localStorage.setItem('sd_font', fontClass);
  applyAppFont(fontClass);
  renderCurrentView();
}

function applyAppTextSize(size) {
  document.documentElement.classList.remove('text-size-sm', 'text-size-md', 'text-size-lg');
  document.documentElement.classList.add(`text-size-${size || 'md'}`);
}

function setAppTextSize(size) {
  appState.textSize = size;
  localStorage.setItem('sd_text_size', size);
  applyAppTextSize(size);
  renderCurrentView();
}

function toggleNotificationsEnabled() {
  appState.notificationsEnabled = !appState.notificationsEnabled;
  localStorage.setItem('sd_notif_enabled', appState.notificationsEnabled ? 'true' : 'false');
  renderCurrentView();
}

function applyThemeAccent(accent) {
  document.body.classList.remove('theme-blue', 'theme-coral', 'theme-orange', 'theme-amber', 'theme-emerald', 'theme-pink');
  document.body.classList.add(`theme-${accent || 'orange'}`);
}

function setThemeAccent(accent) {
  appState.themeAccent = accent;
  localStorage.setItem('sd_theme_accent', accent);
  applyThemeAccent(accent);
  renderCurrentView();
}

function toggleSettingsItem(itemName) {
  if (appState.activeSettingsItem === itemName) {
    appState.activeSettingsItem = null;
  } else {
    appState.activeSettingsItem = itemName;
  }
  renderCurrentView();
}

function getLocalIsoDate(d = new Date()) {
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function t(key) {
  const lang = appState.language === 'en' ? 'en' : 'km';
  return translations[lang][key] || key;
}

const DAILY_ENGLISH_WORDS = [
  { en: 'Dashboard', pron: 'ដាសប៊ត', pos: 'Noun', km: 'ផ្ទាំងសង្ខេបទិន្នន័យ', ex: 'The dashboard displays real-time sales.' },
  { en: 'Transaction', pron: 'ត្រេនសាក់សិន', pos: 'Noun', km: 'ប្រតិបត្តិការទិញ-លក់', ex: 'Every transaction is recorded accurately.' },
  { en: 'Receivable', pron: 'រីស៊ីវ៉ាបល', pos: 'Noun', km: 'ប្រាក់ត្រូវប្រមូល (COD/ជំពាក់)', ex: 'Track pending COD in accounts receivable.' },
  { en: 'Payable', pron: 'ផេយ៉ាបល', pos: 'Noun', km: 'បំណុលត្រូវទូទាត់ (ថ្លៃទំនិញ/ដឹក)', ex: 'Pay bills on time under accounts payable.' },
  { en: 'Balance', pron: 'បាឡានស៍', pos: 'Noun', km: 'សមតុល្យសាច់ប្រាក់សុទ្ធ', ex: 'Check pure cash balance across bank accounts.' },
  { en: 'Revenue', pron: 'រេវ៉េញូ', pos: 'Noun', km: 'ចំណូលសរុបពីការលក់', ex: 'Monthly revenue reached our new peak.' },
  { en: 'Profit', pron: 'ប្រហ្វិត', pos: 'Noun', km: 'ប្រាក់ចំណេញសុទ្ធ', ex: 'Gross profit increased by 15% this week.' },
  { en: 'Expense', pron: 'អិចស្ពេនស៍', pos: 'Noun', km: 'ការចំណាយប្រចាំថ្ងៃ', ex: 'Keep operational expenses within budget.' },
  { en: 'Inventory', pron: 'អ៊ីនវេនថូរី', pos: 'Noun', km: 'ស្តុកទំនិញក្នុងឃ្លាំង', ex: 'We must restock our popular products.' },
  { en: 'Customer', pron: 'ខាសស្ទើម័រ', pos: 'Noun', km: 'អតិថិជន ឬអ្នកទិញ', ex: 'Customer satisfaction is our top priority.' },
  { en: 'Discount', pron: 'ឌីសខោន', pos: 'Noun/Verb', km: 'ការបញ្ចុះតម្លៃពិសេស', ex: 'Special discount for wholesale orders.' },
  { en: 'Invoice', pron: 'អ៊ីនវ៉យស៍', pos: 'Noun', km: 'វិក្កយបត្រទូទាត់ប្រាក់', ex: 'Send the official invoice via Telegram.' },
  { en: 'Delivery', pron: 'ឌីលីវើរី', pos: 'Noun', km: 'ការដឹកជញ្ជូនទំនិញ', ex: 'Same-day delivery is available in city.' },
  { en: 'Deposit', pron: 'ឌីផូស៊ីត', pos: 'Noun/Verb', km: 'ប្រាក់កក់ ឬដាក់ប្រាក់', ex: 'Customer made a 50% cash deposit.' },
  { en: 'Withdraw', pron: 'វិដដ្រ', pos: 'Verb', km: 'ដកប្រាក់ពីគណនីធនាគារ', ex: 'Withdraw money from ACLEDA ATM.' },
  { en: 'Target', pron: 'ថាហ្គឺត', pos: 'Noun', km: 'គោលដៅកំណត់ (ឧ. ១០០ ប្រអប់)', ex: 'The sales team hit the monthly target.' },
  { en: 'Performance', pron: 'ភើហ្វរមែនស៍', pos: 'Noun', km: 'ប្រសិទ្ធភាពការងារ/ការលក់', ex: 'Track daily performance on the chart.' },
  { en: 'Supplier', pron: 'សាប់ផ្លាយអឺ', pos: 'Noun', km: 'អ្នកផ្គត់ផ្គង់ទំនិញ/វត្ថុធាតុដើម', ex: 'Negotiate the best price with supplier.' },
  { en: 'Receipt', pron: 'រីស៊ីត', pos: 'Noun', km: 'បង្កាន់ដៃទទួលប្រាក់', ex: 'Keep the receipt for expense tracking.' },
  { en: 'Budget', pron: 'បាត់ជិត', pos: 'Noun', km: 'កញ្ចប់ថវិកាដែលបានគ្រោងទុក', ex: 'Marketing budget is planned in advance.' },
  { en: 'Analytics', pron: 'អេណាលីទិក', pos: 'Noun', km: 'ការវិភាគទិន្នន័យស្ថិតិ', ex: 'Analytics show growth in new regions.' },
  { en: 'Feedback', pron: 'ហ្វីដបែក', pos: 'Noun', km: 'មតិកែលម្អពីអតិថិជន', ex: 'Positive feedback builds customer trust.' },
  { en: 'Settlement', pron: 'សេតថលមែន', pos: 'Noun', km: 'ការទូទាត់ផ្តាច់ ឬបិទបញ្ជី', ex: 'Delivery partner completed COD settlement.' },
  { en: 'Cashflow', pron: 'ខាសហ្វ្លូ', pos: 'Noun', km: 'ចរន្តសាច់ប្រាក់ចេញ-ចូល', ex: 'Healthy cashflow keeps our business strong.' },
  { en: 'Commission', pron: 'ខមមីសិន', pos: 'Noun', km: 'ប្រាក់កម្រៃជើងសារលើការលក់', ex: 'Sales reps receive weekly commission.' }
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
function getKhmerDateText(date) {
  const khDays = ['ថ្ងៃអាទិត្យ', 'ថ្ងៃចន្ទ', 'ថ្ងៃអង្គារ', 'ថ្ងៃពុធ', 'ថ្ងៃព្រហស្បតិ៍', 'ថ្ងៃសុក្រ', 'ថ្ងៃសៅរ៍'];
  const khMonths = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'];
  const dayName = khDays[date.getDay()];
  const day = date.getDate();
  const month = khMonths[date.getMonth()];
  return `${dayName} ទី ${day} ${month}`;
}

function applyLockWallpaper(wpClass) {
  const lockScreen = document.getElementById('lock-screen');
  if (!lockScreen) return;
  lockScreen.classList.remove('wp-deep-mesh', 'wp-midnight-purple', 'wp-pure-oled', 'wp-emerald-aurora');
  lockScreen.classList.add(wpClass || 'wp-deep-mesh');
}

function setLockWallpaper(wpClass) {
  appState.lockWallpaper = wpClass;
  localStorage.setItem('sd_lock_wallpaper', wpClass);
  applyLockWallpaper(wpClass);
  renderCurrentView();
}

function updateLockClock() {
  const statusTime = document.getElementById('status-time');
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
  
  if (statusTime) {
    statusTime.textContent = timeStr;
  }

  const timeEl = document.getElementById('lock-time');
  const calEl = document.getElementById('lock-calendar');
  if (timeEl) timeEl.textContent = timeStr;
  if (calEl) {
    calEl.textContent = getKhmerDateText(now);
  }
}

function pressPin(num) {
  if (appState.enteredPin.length < 4) {
    appState.enteredPin += num;
    updatePinDots();
    if (appState.enteredPin.length === 4) {
      setTimeout(() => verifyPin(), 120);
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
      dot.className = 'w-3.5 h-3.5 rounded-full bg-white border-2 border-white scale-105 transition-all duration-150 shadow-[0_0_10px_rgba(255,255,255,0.8)]';
    } else {
      dot.className = 'w-3.5 h-3.5 rounded-full border-2 border-white/60 bg-transparent transition-all duration-150';
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
  if (!appState.pinEnabled) return;
  sessionStorage.removeItem('sd_unlocked');
  appState.isLocked = true;
  appState.enteredPin = '';
  updatePinDots();
  const lockScreen = document.getElementById('lock-screen');
  if (lockScreen) {
    lockScreen.classList.remove('hidden', '-translate-y-full');
    setTimeout(() => lockScreen.classList.remove('opacity-0', 'pointer-events-none'), 10);
  }
}

function togglePinEnabled() {
  appState.pinEnabled = !appState.pinEnabled;
  localStorage.setItem('sd_pin_enabled', appState.pinEnabled ? 'true' : 'false');
  if (!appState.pinEnabled) {
    sessionStorage.setItem('sd_unlocked', 'true');
    appState.isLocked = false;
    const lockScreen = document.getElementById('lock-screen');
    if (lockScreen) lockScreen.classList.add('hidden');
  }
  renderCurrentView();
}

// ==========================================
// 2. Initialization & Data Engine
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(appState.theme);
  applyThemeAccent(appState.themeAccent);
  applyLockWallpaper(appState.lockWallpaper);
  applyAppFont(appState.fontFamily);
  applyAppTextSize(appState.textSize);

  setInterval(updateLockClock, 1000);
  updateLockClock();

  if (!appState.pinEnabled || sessionStorage.getItem('sd_unlocked') === 'true') {
    const lockScreen = document.getElementById('lock-screen');
    if (lockScreen) lockScreen.classList.add('hidden');
  }

  setupPullToRefresh();
  setupSmartDockScroll();
  setupSwipeToBack();

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
  const indicator = document.getElementById('pull-refresh-indicator');
  if (indicator) {
    indicator.style.height = '35px';
    setTimeout(() => {
      indicator.style.height = '0px';
    }, 800);
  }
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

// ==========================================
// Native Swipe Left-to-Right to Return Back
// (អូសមកពីឆ្វេងមកស្តាំ ដើម្បីត្រឡប់)
// ==========================================
function handleBackNavigation() {
  // 1. Close any open modal if visible
  const openModals = [
    'global-search-modal', 'sales-modal', 'payables-modal', 'expenses-modal',
    'cod-modal', 'bank-modal', 'notif-modal', 'about-modal', 'change-pin-modal', 'shortcut-modal'
  ];
  for (const id of openModals) {
    const el = document.getElementById(id);
    if (el && !el.classList.contains('hidden')) {
      el.classList.add('hidden');
      if (id === 'sales-modal') {
        const det = document.getElementById('sales-detail-view');
        if (det) det.classList.add('hidden');
      }
      if (navigator.vibrate) navigator.vibrate(15);
      return true;
    }
  }

  // 2. If in non-dashboard view (Settings, Analytics, Learning), return to dashboard
  if (appState.currentView !== 'dashboard') {
    switchView('dashboard');
    if (navigator.vibrate) navigator.vibrate(20);
    return true;
  }
  return false;
}

function setupSwipeToBack() {
  let touchStartX = 0;
  let touchStartY = 0;
  let isPotentialSwipe = false;

  // Touch support for Mobile / iPad
  document.addEventListener('touchstart', (e) => {
    if (!e.touches || e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;

    // Do not intercept form inputs or sliders
    if (e.target && e.target.closest && e.target.closest('input, textarea, select')) {
      isPotentialSwipe = false;
      return;
    }

    // Edge swipe detection: started from left side (within 90px of screen edge)
    if (touchStartX <= 90) {
      isPotentialSwipe = true;
    } else {
      isPotentialSwipe = false;
    }
  }, { passive: true });

  document.addEventListener('touchmove', (e) => {
    if (!isPotentialSwipe || !e.touches || e.touches.length !== 1) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const deltaX = currentX - touchStartX;
    const deltaY = currentY - touchStartY;

    // If vertical scrolling dominates, cancel swipe
    if (Math.abs(deltaY) > 35 && Math.abs(deltaY) > deltaX) {
      isPotentialSwipe = false;
    }
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    if (!isPotentialSwipe || !e.changedTouches || e.changedTouches.length !== 1) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    // Must be left-to-right swipe (at least 65px horizontal, deltaX dominant)
    if (deltaX >= 65 && deltaX > Math.abs(deltaY) * 1.25) {
      handleBackNavigation();
    }
    isPotentialSwipe = false;
  }, { passive: true });

  // Mouse drag support for Desktop Preview testing
  let mouseStartX = 0;
  let mouseStartY = 0;
  let isMouseDown = false;

  document.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    if (e.clientX <= 80 && !e.target.closest('input, textarea, select, button, a')) {
      mouseStartX = e.clientX;
      mouseStartY = e.clientY;
      isMouseDown = true;
    }
  });

  document.addEventListener('mouseup', (e) => {
    if (!isMouseDown) return;
    const deltaX = e.clientX - mouseStartX;
    const deltaY = e.clientY - mouseStartY;
    if (deltaX >= 65 && deltaX > Math.abs(deltaY) * 1.25) {
      handleBackNavigation();
    }
    isMouseDown = false;
  });
}

// Smart Dock & Sticky Filter Bar iOS Auto-Hide:
// - Scrolling content up (finger moving up) -> Dock & Filter Bar hide smoothly
// - Scrolling content down (finger moving down) or screen stops/still -> Dock restores smoothly
function setupSmartDockScroll() {
  const main = document.getElementById('main-content');
  const dock = document.getElementById('bottom-dock');
  const filterBar = document.getElementById('sticky-filter-bar');
  if (!main || !dock) return;

  dock.classList.remove('dock-hidden');

  let lastScrollTop = 0;
  let scrollIdleTimer = null;

  main.addEventListener('scroll', () => {
    const currentScrollTop = main.scrollTop;
    const diff = currentScrollTop - lastScrollTop;

    // 1. Scrolling content up (finger moving up, going deeper into content) -> Smoothly hide Dock & Filter Bar
    if (diff > 8 && currentScrollTop > 40) {
      dock.classList.add('dock-hidden');
      if (filterBar) filterBar.classList.add('filter-hidden');
    }
    // 2. Scrolling content down (finger moving down, going towards top) -> Immediately restore Dock & Filter Bar
    else if (diff < -6 || currentScrollTop <= 15) {
      dock.classList.remove('dock-hidden');
      if (filterBar && appState.currentView === 'dashboard') {
        filterBar.classList.remove('filter-hidden');
      }
    }

    lastScrollTop = currentScrollTop;

    // 3. Auto-load 5 more words when near bottom in Study / Learning view
    if (appState.currentView === 'learning') {
      const scrollBottom = main.scrollHeight - main.scrollTop - main.clientHeight;
      if (scrollBottom < 120) {
        loadMoreStudyWords();
      }
    }

    // 4. When scrolling stops / screen is still -> Smoothly restore Dock!
    clearTimeout(scrollIdleTimer);
    scrollIdleTimer = setTimeout(() => {
      dock.classList.remove('dock-hidden');
    }, 450);
  }, { passive: true });
}

function toggleHideBalance() {
  appState.hideBalance = !appState.hideBalance;
  renderCurrentView();
}

// ==========================================
// Native App Launcher & iOS Search Engine
// ==========================================
function launchNativeOrWeb(nativeScheme, webUrl) {
  const isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (isIos && nativeScheme) {
    const start = Date.now();
    window.location.href = nativeScheme;
    setTimeout(() => {
      // If user did not leave the browser (native app not installed), fallback to web
      if (Date.now() - start < 1600 && document.visibilityState === 'visible') {
        window.open(webUrl, '_blank');
      }
    }, 1100);
  } else {
    window.open(webUrl, '_blank');
  }
}

function openSearchBar() {
  const modal = document.getElementById('global-search-modal');
  const input = document.getElementById('global-search-input');
  if (modal) modal.classList.remove('hidden');
  if (input) {
    input.focus();
    handleGlobalSearch(input.value);
  }
  if (window.lucide) window.lucide.createIcons();
}

function closeSearchBar() {
  const modal = document.getElementById('global-search-modal');
  const input = document.getElementById('global-search-input');
  if (input) input.value = '';
  if (modal) modal.classList.add('hidden');
  const container = document.getElementById('search-results-container');
  if (container) container.innerHTML = '';
}

function highlightSearchText(text, query) {
  if (!text) return '';
  const str = String(text);
  if (!query || !query.trim()) return str;
  const q = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${q})`, 'gi');
  return str.replace(regex, '<mark class="search-highlight bg-amber-400 text-slate-950 font-bold px-1 rounded-sm">$1</mark>');
}

function handleGlobalSearch(query) {
  const container = document.getElementById('search-results-container');
  if (!container) return;

  const q = (query || '').trim().toLowerCase();
  if (!q) {
    container.innerHTML = `
      <div class="py-16 text-center text-slate-400">
        <i data-lucide="search" class="w-8 h-8 mx-auto mb-2 opacity-40 text-orange-400"></i>
        <p class="text-xs">វាយបញ្ចូលពាក្យដើម្បីស្វែងរកទិន្នន័យ...</p>
        <p class="text-[10px] text-slate-500 mt-1">ស្វែងរកអតិថិជន, លេខទូរស័ព្ទ, ទីតាំង, Order, ឬការចំណាយពី Google Sheet</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  const d = DataService.data;
  if (!d) {
    container.innerHTML = '<p class="text-xs text-slate-400 text-center py-10">មិនទាន់មានទិន្នន័យពី Google Sheet...</p>';
    return;
  }

  // 1. Search in Personal Sales (Customer, OrderID, Phone, Location, Date)
  const matchedSales = (d.personalSales || []).filter(s => {
    return (s.customer && s.customer.toLowerCase().includes(q)) ||
           (s.orderId && s.orderId.toLowerCase().includes(q)) ||
           (s.phone && s.phone.toLowerCase().includes(q)) ||
           (s.location && s.location.toLowerCase().includes(q)) ||
           (s.product && s.product.toLowerCase().includes(q)) ||
           (s.date && s.date.toLowerCase().includes(q));
  });

  // 2. Search in Expenses (Description, Category, Date)
  const matchedExpenses = (d.expenses || []).filter(e => {
    return (e.description && e.description.toLowerCase().includes(q)) ||
           (e.category && e.category.toLowerCase().includes(q)) ||
           (e.date && e.date.toLowerCase().includes(q));
  });

  // 3. Search in Bank Accounts
  const matchedBank = (d.bank?.accounts || []).filter(b => {
    return (b.bank && b.bank.toLowerCase().includes(q)) ||
           (b.accountName && b.accountName.toLowerCase().includes(q));
  });

  const totalMatches = matchedSales.length + matchedExpenses.length + matchedBank.length;

  if (totalMatches === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-slate-400">
        <i data-lucide="alert-circle" class="w-8 h-8 mx-auto mb-2 opacity-40 text-rose-400"></i>
        <p class="text-xs">រកមិនឃើញទិន្នន័យដែលត្រូវនឹង “${query}” ទេ</p>
        <p class="text-[10px] text-slate-500 mt-1">សូមសាកល្បងវាយឈ្មោះអតិថិជន ឬលេខទូរស័ព្ទផ្សេងទៀត</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  let html = `
    <div class="text-[11px] text-slate-400 pb-1 border-b border-white/10 flex items-center justify-between">
      <span>លទ្ធផលស្វែងរក: <strong class="text-white">${totalMatches}</strong> ជួរ</span>
      <span class="text-[10px] text-orange-400">Google Sheet Live</span>
    </div>
  `;

  if (matchedSales.length > 0) {
    html += `
      <div class="pt-2">
        <div class="flex items-center gap-1.5 text-xs font-bold text-orange-400 mb-2">
          <i data-lucide="shopping-bag" class="w-3.5 h-3.5"></i>
          <span>អតិថិជន & ការលក់ (${matchedSales.length})</span>
        </div>
        <div class="space-y-2">
          ${matchedSales.slice(0, 30).map(item => `
            <div class="p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition flex flex-col gap-1.5">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                  <span class="font-bold text-xs text-white">${highlightSearchText(item.customer, q)}</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 font-mono">${highlightSearchText(item.orderId, q)}</span>
                </div>
                <span class="font-mono text-emerald-400 font-bold text-xs">${formatUSD(item.totalAmount)}</span>
              </div>
              <div class="text-[11px] text-slate-400 flex items-center justify-between">
                <span>📍 ${highlightSearchText(item.location || '—', q)}</span>
                <span>📞 ${highlightSearchText(item.phone || '—', q)}</span>
              </div>
              <div class="text-[10px] text-slate-400 flex items-center justify-between pt-1 border-t border-white/5">
                <span>កាលបរិច្ឆេទ: <strong class="text-white">${highlightSearchText(item.date, q)}</strong></span>
                <span>ប្រអប់: <strong class="text-white">${item.totalBoxQty}</strong></span>
                <span>ចំណេញ: <strong class="text-blue-400">${formatUSD(item.profit)}</strong></span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (matchedExpenses.length > 0) {
    html += `
      <div class="pt-4">
        <div class="flex items-center gap-1.5 text-xs font-bold text-rose-400 mb-2">
          <i data-lucide="receipt" class="w-3.5 h-3.5"></i>
          <span>ការចំណាយ (${matchedExpenses.length})</span>
        </div>
        <div class="space-y-2">
          ${matchedExpenses.slice(0, 20).map(item => `
            <div class="p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-rose-500/30 transition flex flex-col gap-1">
              <div class="flex items-center justify-between">
                <span class="font-bold text-xs text-white">${highlightSearchText(item.description || item.category, q)}</span>
                <span class="font-mono text-rose-400 font-bold text-xs">${formatUSD(item.amount)}</span>
              </div>
              <div class="text-[10px] text-slate-400 flex items-center justify-between">
                <span>កាលបរិច្ឆេទ: <strong class="text-white">${highlightSearchText(item.date, q)}</strong></span>
                <span>ប្រភេទ: <strong class="text-slate-300">${highlightSearchText(item.category || 'ទូទៅ', q)}</strong></span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (matchedBank.length > 0) {
    html += `
      <div class="pt-4">
        <div class="flex items-center gap-1.5 text-xs font-bold text-blue-400 mb-2">
          <i data-lucide="landmark" class="w-3.5 h-3.5"></i>
          <span>គណនីធនាគារ (${matchedBank.length})</span>
        </div>
        <div class="space-y-2">
          ${matchedBank.map(item => `
            <div class="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
              <div>
                <span class="font-bold text-xs text-white">${highlightSearchText(item.bank, q)}</span>
                <p class="text-[10px] text-slate-400">${highlightSearchText(item.accountName, q)}</p>
              </div>
              <span class="font-mono text-emerald-400 font-bold text-xs">${formatUSD(item.usdBalance || 0)}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}

// ==========================================
// 3. Navigation & Dock Switcher
// ==========================================
function switchView(viewName) {
  const isAlreadyDashboard = (appState.currentView === 'dashboard' && viewName === 'dashboard');
  appState.currentView = viewName;

  const main = document.getElementById('main-content');
  if (main) {
    main.scrollTop = 0;
    if (viewName === 'settings') {
      main.classList.add('settings-view-active');
    } else {
      main.classList.remove('settings-view-active');
    }
  }

  const dock = document.getElementById('bottom-dock');
  if (dock) {
    dock.classList.remove('dock-hidden');
  }

  if (viewName === 'dashboard') {
    manualReload();
  }

  const filterBar = document.getElementById('sticky-filter-bar');
  if (filterBar) {
    if (viewName === 'dashboard') {
      filterBar.classList.remove('hidden', 'filter-hidden');
    } else {
      filterBar.classList.add('hidden');
    }
  }

  // Top Header Bar: Hide completely when in Settings (search, bell, reload hidden)
  const topHeader = document.getElementById('top-header');
  if (topHeader) {
    if (viewName === 'settings') {
      topHeader.classList.add('hidden');
    } else {
      topHeader.classList.remove('hidden');
    }
  }

  // Profile block in Header: visible always EXCEPT when in 'settings'
  const headerProfile = document.getElementById('header-profile-block');
  if (headerProfile) {
    if (viewName === 'settings') {
      headerProfile.classList.add('invisible', 'pointer-events-none');
    } else {
      headerProfile.classList.remove('invisible', 'pointer-events-none');
    }
  }

  ['dashboard', 'analytics', 'learning', 'settings'].forEach(v => {
    const btn = document.getElementById(`dock-btn-${v}`);
    if (btn) {
      if (v === viewName) {
        btn.className = 'dock-btn active-tab flex-1 flex flex-col items-center justify-center py-1 rounded-full text-orange-400 transition';
      } else {
        btn.className = 'dock-btn flex-1 flex flex-col items-center justify-center py-1 rounded-full text-slate-400 hover:text-white transition';
      }
    }
  });

  renderCurrentView();

  // Guarantee scroll is positioned at the very top (0) so top profile is immediately 100% visible
  if (main) {
    main.scrollTop = 0;
    setTimeout(() => {
      main.scrollTop = 0;
    }, 15);
  }
}

let calendarViewYear = (new Date()).getFullYear();
let calendarViewMonth = (new Date()).getMonth() + 1; // 1-12

function toggleDayDropdown(event) {
  if (event) event.stopPropagation();
  closeAllFilterDropdowns('day');
  renderMiniCalendar();
  const menu = document.getElementById('day-dropdown-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

function renderMiniCalendar() {
  const menu = document.getElementById('day-dropdown-menu');
  if (!menu) return;

  const khmerMonths = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'];
  const monthTitle = `${khmerMonths[calendarViewMonth - 1]} ${calendarViewYear}`;

  const now = new Date();
  const realTodayIso = getLocalIsoDate(now);
  
  // Selected date ISO
  let selectedIso = '';
  if (appState.daySubFilter === 'specific' && appState.specificDate) {
    selectedIso = appState.specificDate;
  } else if (appState.daySubFilter === 'yesterday') {
    const y = new Date();
    y.setDate(y.getDate() - 1);
    selectedIso = getLocalIsoDate(y);
  } else {
    selectedIso = realTodayIso;
  }

  // Days in month calculation
  const firstDayOfWeek = new Date(calendarViewYear, calendarViewMonth - 1, 1).getDay(); // 0 (Sun) to 6 (Sat)
  const daysInMonth = new Date(calendarViewYear, calendarViewMonth, 0).getDate();

  let daysGridHtml = '';
  // Empty slots before 1st of month
  for (let i = 0; i < firstDayOfWeek; i++) {
    daysGridHtml += `<div class="h-8"></div>`;
  }

  // Day slots
  for (let day = 1; day <= daysInMonth; day++) {
    const dayStr = String(day).padStart(2, '0');
    const monthStr = String(calendarViewMonth).padStart(2, '0');
    const thisDateIso = `${calendarViewYear}-${monthStr}-${dayStr}`;

    const isSelected = thisDateIso === selectedIso;
    const isToday = thisDateIso === realTodayIso;

    let cellClasses = 'h-8 rounded-full flex items-center justify-center text-xs font-semibold cursor-pointer active:scale-95 transition ';
    if (isSelected) {
      cellClasses += 'bg-orange-500 text-white font-bold shadow-md shadow-orange-500/30';
    } else if (isToday) {
      cellClasses += 'border border-orange-500/60 text-orange-400 hover:bg-orange-500/20';
    } else {
      cellClasses += 'text-slate-200 hover:bg-white/10';
    }

    daysGridHtml += `
      <button onclick="selectSpecificCalendarDay('${thisDateIso}', event)" 
              class="${cellClasses}">
        ${day}
      </button>
    `;
  }

  menu.innerHTML = `
    <!-- iPhone Header: Month Year + Prev/Next Arrow Buttons -->
    <div class="flex items-center justify-between pb-2 border-b border-white/10">
      <button onclick="navigateCalendarMonth(-1, event)" 
              class="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition active:scale-90">
        <i data-lucide="chevron-left" class="w-4 h-4"></i>
      </button>

      <span class="text-xs font-bold text-white tracking-wide font-sans">
        ${monthTitle}
      </span>

      <button onclick="navigateCalendarMonth(1, event)" 
              class="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition active:scale-90">
        <i data-lucide="chevron-right" class="w-4 h-4"></i>
      </button>
    </div>

    <!-- Quick Pick Shortcuts (Today / Yesterday) -->
    <div class="grid grid-cols-2 gap-1.5 pb-2 border-b border-white/10">
      <button onclick="selectDayFilter('today', event)" 
              class="py-1 px-2 rounded-xl text-center text-[11px] font-semibold transition active:scale-95 ${appState.daySubFilter !== 'yesterday' && appState.daySubFilter !== 'specific' ? 'bg-orange-500 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}">
        ☀️ ថ្ងៃនេះ
      </button>
      <button onclick="selectDayFilter('yesterday', event)" 
              class="py-1 px-2 rounded-xl text-center text-[11px] font-semibold transition active:scale-95 ${appState.daySubFilter === 'yesterday' ? 'bg-orange-500 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}">
        🌙 ម្សិលមិញ
      </button>
    </div>

    <!-- Weekday Headers (Su, Mo, Tu, We, Th, Fr, Sa) -->
    <div class="grid grid-cols-7 gap-1 text-center text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
      <span>អា</span>
      <span>ច</span>
      <span>អ</span>
      <span>ព</span>
      <span>ព្រ</span>
      <span>សុ</span>
      <span>ស</span>
    </div>

    <!-- Calendar Days Grid (7 cols) -->
    <div class="grid grid-cols-7 gap-1 text-center">
      ${daysGridHtml}
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

function navigateCalendarMonth(delta, event) {
  if (event) event.stopPropagation();
  calendarViewMonth += delta;
  if (calendarViewMonth < 1) {
    calendarViewMonth = 12;
    calendarViewYear--;
  } else if (calendarViewMonth > 12) {
    calendarViewMonth = 1;
    calendarViewYear++;
  }
  renderMiniCalendar();
}

function selectSpecificCalendarDay(dateIso, event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('day-dropdown-menu');
  if (menu) menu.classList.add('hidden');

  appState.daySubFilter = 'specific';
  appState.specificDate = dateIso;

  const parts = dateIso.split('-');
  const labelEl = document.getElementById('day-pill-label');
  if (labelEl) {
    labelEl.textContent = `ថ្ងៃទី ${parts[2]}`;
  }

  setPeriodFilter('today');
}

function selectDayFilter(subMode, event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('day-dropdown-menu');
  if (menu) menu.classList.add('hidden');

  appState.daySubFilter = subMode; // 'today' or 'yesterday'
  appState.specificDate = null;
  
  if (subMode === 'today') {
    // When clicking "Today", reset Month and Year to current phone date
    const now = new Date();
    const curYear = now.getFullYear();
    const curMonthNum = now.getMonth() + 1;
    const curDay = String(now.getDate()).padStart(2, '0');
    const curMonthKey = `${curYear}-${String(curMonthNum).padStart(2, '0')}`;
    
    appState.selectedYear = curYear;
    appState.selectedMonthKey = curMonthKey;
    calendarViewYear = curYear;
    calendarViewMonth = curMonthNum;

    // Reset pill labels to defaults (ថ្ងៃទី + ទីលេខ គ្មានខែ)
    const labelEl = document.getElementById('day-pill-label');
    if (labelEl) labelEl.textContent = `ថ្ងៃទី ${curDay}`;
    const monthLabelEl = document.getElementById('month-pill-label');
    if (monthLabelEl) monthLabelEl.textContent = 'ខែ';
    const yearLabelEl = document.getElementById('year-pill-label');
    if (yearLabelEl) yearLabelEl.textContent = 'ឆ្នាំ';
  } else {
    // Update Day Pill Label for yesterday
    const now = new Date();
    now.setDate(now.getDate() - 1);
    const yDay = String(now.getDate()).padStart(2, '0');
    const labelEl = document.getElementById('day-pill-label');
    if (labelEl) labelEl.textContent = `ថ្ងៃទី ${yDay}`;
  }

  setPeriodFilter('today');
}

function toggleMonthDropdown(event) {
  if (event) event.stopPropagation();
  closeAllFilterDropdowns('month');
  renderMonthDropdownMenu();
  const menu = document.getElementById('month-dropdown-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

function renderMonthDropdownMenu() {
  const menu = document.getElementById('month-dropdown-menu');
  if (!menu) return;

  const monthsList = [
    { num: 1, name: 'មករា', en: 'Jan' },
    { num: 2, name: 'កុម្ភៈ', en: 'Feb' },
    { num: 3, name: 'មីនា', en: 'Mar' },
    { num: 4, name: 'មេសា', en: 'Apr' },
    { num: 5, name: 'ឧសភា', en: 'May' },
    { num: 6, name: 'មិថុនា', en: 'Jun' },
    { num: 7, name: 'កក្កដា', en: 'Jul' },
    { num: 8, name: 'សីហា', en: 'Aug' },
    { num: 9, name: 'កញ្ញា', en: 'Sep' },
    { num: 10, name: 'តុលា', en: 'Oct' },
    { num: 11, name: 'វិច្ឆិកា', en: 'Nov' },
    { num: 12, name: 'ធ្នូ', en: 'Dec' }
  ];

  const now = new Date();
  const currentMonthNum = now.getMonth() + 1;
  const activeMonthNum = appState.selectedMonthKey 
    ? parseInt(appState.selectedMonthKey.split('-')[1], 10) 
    : currentMonthNum;

  menu.innerHTML = monthsList.map(m => {
    const isSelected = m.num === activeMonthNum;
    return `
      <button onclick="selectMonthFilter(${m.num}, '${m.name}', event)" 
              class="w-full px-2.5 py-1.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition ${isSelected ? 'text-white bg-orange-500/20 border border-orange-500/30' : 'text-slate-300 hover:bg-white/10'}">
        <span>${String(m.num).padStart(2, '0')} ${m.name} (${m.en})</span>
        ${isSelected ? '<i data-lucide="check" class="w-3.5 h-3.5 text-orange-400"></i>' : ''}
      </button>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function selectMonthFilter(mNum, mKhmer, event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('month-dropdown-menu');
  if (menu) menu.classList.add('hidden');

  const yr = appState.selectedYear || (new Date()).getFullYear();
  const paddedMonth = String(mNum).padStart(2, '0');
  appState.selectedMonthKey = `${yr}-${paddedMonth}`;
  
  const labelEl = document.getElementById('month-pill-label');
  if (labelEl) {
    labelEl.textContent = `ខែ ${mNum}`;
  }

  setPeriodFilter('month');
}

function toggleYearDropdown(event) {
  if (event) event.stopPropagation();
  closeAllFilterDropdowns('year');
  renderYearDropdownMenu();
  const menu = document.getElementById('year-dropdown-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

function renderYearDropdownMenu() {
  const menu = document.getElementById('year-dropdown-menu');
  if (!menu) return;

  const currentYear = (new Date()).getFullYear();
  // Include 2028, 2027, 2026, 2025 as requested
  const years = [2028, 2027, 2026, 2025];
  const activeYear = appState.selectedYear || currentYear;

  menu.innerHTML = years.map(y => {
    const isSelected = y === activeYear;
    return `
      <button onclick="selectYearFilter(${y}, event)" 
              class="w-full px-2.5 py-1.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition ${isSelected ? 'text-white bg-orange-500/20 border border-orange-500/30' : 'text-slate-300 hover:bg-white/10'}">
        <span>ឆ្នាំ ${y}</span>
        ${isSelected ? '<i data-lucide="check" class="w-3.5 h-3.5 text-orange-400"></i>' : ''}
      </button>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function selectYearFilter(y, event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('year-dropdown-menu');
  if (menu) menu.classList.add('hidden');

  appState.selectedYear = y;
  
  const labelEl = document.getElementById('year-pill-label');
  if (labelEl) {
    labelEl.textContent = `${y}`;
  }

  setPeriodFilter('year');
}

function closeAllFilterDropdowns(except = '') {
  if (except !== 'day') {
    const dayMenu = document.getElementById('day-dropdown-menu');
    if (dayMenu) dayMenu.classList.add('hidden');
  }
  if (except !== 'month') {
    const monthMenu = document.getElementById('month-dropdown-menu');
    if (monthMenu) monthMenu.classList.add('hidden');
  }
  if (except !== 'year') {
    const yearMenu = document.getElementById('year-dropdown-menu');
    if (yearMenu) yearMenu.classList.add('hidden');
  }
}

// Close dropdowns if clicked outside
document.addEventListener('click', (e) => {
  const dayMenu = document.getElementById('day-dropdown-menu');
  const dayBtn = document.getElementById('filter-btn-today');
  const monthMenu = document.getElementById('month-dropdown-menu');
  const monthBtn = document.getElementById('filter-btn-month');
  const yearMenu = document.getElementById('year-dropdown-menu');
  const yearBtn = document.getElementById('filter-btn-year');

  const clickedInside = (dayMenu && dayMenu.contains(e.target)) ||
                        (dayBtn && dayBtn.contains(e.target)) ||
                        (monthMenu && monthMenu.contains(e.target)) ||
                        (monthBtn && monthBtn.contains(e.target)) ||
                        (yearMenu && yearMenu.contains(e.target)) ||
                        (yearBtn && yearBtn.contains(e.target));

  if (!clickedInside) {
    closeAllFilterDropdowns();
  }
});

function setPeriodFilter(mode) {
  appState.periodFilter = mode;

  // Update top filter buttons style
  const todayBtn = document.getElementById('filter-btn-today');
  if (todayBtn) {
    if (mode === 'today') {
      todayBtn.className = 'w-full py-1.5 px-2 rounded-xl text-xs font-semibold text-center transition dock-btn accent-solid-btn shadow-md flex items-center justify-center gap-0.5';
    } else {
      todayBtn.className = 'w-full py-1.5 px-2 rounded-xl text-xs font-semibold text-center transition dock-btn text-slate-400 hover:text-white flex items-center justify-center gap-0.5';
    }
  }

  const monthBtn = document.getElementById('filter-btn-month');
  if (monthBtn) {
    if (mode === 'month') {
      monthBtn.className = 'w-full py-1.5 px-2 rounded-xl text-xs font-semibold text-center transition dock-btn accent-solid-btn shadow-md flex items-center justify-center gap-0.5';
    } else {
      monthBtn.className = 'w-full py-1.5 px-2 rounded-xl text-xs font-semibold text-center transition dock-btn text-slate-400 hover:text-white flex items-center justify-center gap-0.5';
    }
  }

  const yearBtn = document.getElementById('filter-btn-year');
  if (yearBtn) {
    if (mode === 'year') {
      yearBtn.className = 'w-full py-1.5 px-2 rounded-xl text-xs font-semibold text-center transition dock-btn accent-solid-btn shadow-md flex items-center justify-center gap-0.5';
    } else {
      yearBtn.className = 'w-full py-1.5 px-2 rounded-xl text-xs font-semibold text-center transition dock-btn text-slate-400 hover:text-white flex items-center justify-center gap-0.5';
    }
  }

  const customBtn = document.getElementById('filter-btn-custom');
  if (customBtn) {
    if (mode === 'custom') {
      customBtn.className = 'flex-1 py-1.5 px-2 rounded-xl text-xs font-semibold text-center transition dock-btn accent-solid-btn shadow-md';
    } else {
      customBtn.className = 'flex-1 py-1.5 px-2 rounded-xl text-xs font-semibold text-center transition dock-btn text-slate-400 hover:text-white';
    }
  }

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
  const dockHome = document.getElementById('dock-label-dashboard');
  const dockAnalytics = document.getElementById('dock-label-analytics');
  const dockLearn = document.getElementById('dock-label-learning');
  const dockSettings = document.getElementById('dock-label-settings');

  const dayLabel = document.getElementById('day-pill-label');
  const monthLabel = document.getElementById('month-pill-label');
  const yearLabel = document.getElementById('year-pill-label');
  const filterCustom = document.getElementById('filter-btn-custom');

  if (dockHome) dockHome.textContent = t('homeDock');
  if (dockAnalytics) dockAnalytics.textContent = t('analyticsDock');
  if (dockLearn) dockLearn.textContent = t('learningDock');
  if (dockSettings) dockSettings.textContent = t('settingsDock');

  if (dayLabel && !appState.daySubFilter) {
    const curDay = String((new Date()).getDate()).padStart(2, '0');
    dayLabel.textContent = `${t('today')} ${curDay}`;
  }
  if (monthLabel && !appState.selectedMonthKey) monthLabel.textContent = t('thisMonth');
  if (yearLabel && !appState.selectedYear) yearLabel.textContent = t('thisYear');
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
  const currentIsoDay = getLocalIsoDate(now);
  const currentIsoMonth = currentIsoDay.slice(0, 7);
  const currentIsoYear = currentIsoDay.slice(0, 4);

  let filteredSales = d.personalSales;
  let filteredExpenses = d.expenses;
  let activePeriodDisplay = '';

  if (appState.periodFilter === 'today') {
    if (appState.daySubFilter === 'specific' && appState.specificDate) {
      const targetIsoDay = appState.specificDate;
      filteredSales = d.personalSales.filter(s => s.isoDate === targetIsoDay);
      filteredExpenses = d.expenses.filter(e => e.isoDate === targetIsoDay);
      activePeriodDisplay = `${displayDDMMYYYY(targetIsoDay)}`;
    } else if (appState.daySubFilter === 'yesterday') {
      const yDate = new Date();
      yDate.setDate(yDate.getDate() - 1);
      const yesterdayIsoDay = getLocalIsoDate(yDate);
      filteredSales = d.personalSales.filter(s => s.isoDate === yesterdayIsoDay);
      filteredExpenses = d.expenses.filter(e => e.isoDate === yesterdayIsoDay);
      activePeriodDisplay = `ម្សិលមិញ (${displayDDMMYYYY(yesterdayIsoDay)})`;
    } else {
      // Live device today date - always sync with phone date
      filteredSales = d.personalSales.filter(s => s.isoDate === currentIsoDay);
      filteredExpenses = d.expenses.filter(e => e.isoDate === currentIsoDay);
      activePeriodDisplay = `ថ្ងៃនេះ (${displayDDMMYYYY(currentIsoDay)})`;
    }
  } else if (appState.periodFilter === 'month') {
    const targetMonth = appState.selectedMonthKey || currentIsoMonth;
    filteredSales = d.personalSales.filter(s => s.isoDate.startsWith(targetMonth));
    filteredExpenses = d.expenses.filter(e => e.isoDate.startsWith(targetMonth));
    const parts = targetMonth.split('-');
    activePeriodDisplay = `ខែ ${parts[1]}/${parts[0]}`;
  } else if (appState.periodFilter === 'year') {
    const targetYear = appState.selectedYear ? String(appState.selectedYear) : currentIsoYear;
    filteredSales = d.personalSales.filter(s => s.isoDate.startsWith(targetYear));
    filteredExpenses = d.expenses.filter(e => e.isoDate.startsWith(targetYear));
    activePeriodDisplay = `ឆ្នាំ ${targetYear}`;
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
    targetMonthKey = appState.selectedMonthKey || currentIsoMonth;
  } else if (appState.periodFilter === 'today') {
    if (appState.daySubFilter === 'specific' && appState.specificDate) {
      targetMonthKey = appState.specificDate.slice(0, 7);
    } else if (appState.daySubFilter === 'yesterday') {
      const yDate = new Date();
      yDate.setDate(yDate.getDate() - 1);
      targetMonthKey = getLocalIsoDate(yDate).slice(0, 7);
    } else {
      targetMonthKey = currentIsoMonth;
    }
  } else if (appState.periodFilter === 'custom' && appState.customStartDate) {
    targetMonthKey = appState.customStartDate.slice(0, 7);
  }

  const selectedMonthNum = targetMonthKey.split('-')[1] || '10';
  const selectedMonthInt = parseInt(selectedMonthNum, 10) || 10;
  
  // Pick live dynamic team leaders for the selected month (targets + boxes sold + sets)
  const currentTeamLeaders = (d.teamLeadersByMonth && d.teamLeadersByMonth[selectedMonthInt]) || d.teamLeaders;
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
    <div id="hero-balance-card" class="ios-glass-card rounded-3xl p-5 relative liquid-orange-glow select-none cursor-pointer transition-all duration-200">
      <div class="absolute -top-12 -right-12 w-44 h-44 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>

      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30">
            <i data-lucide="wallet" class="w-4 h-4"></i>
          </div>
          <div>
            <p class="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">${t('pureCashTitle')}</p>
            <p class="text-[10px] text-amber-200/80">${t('pureCashSubtitle')}</p>
          </div>
        </div>
        <button onclick="toggleHideBalance(event)" class="p-1.5 rounded-lg text-slate-400 hover:text-white bg-white/5 active:scale-95 transition">
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
             class="p-2.5 rounded-xl bg-black/25 border border-white/5 cursor-pointer hover:border-orange-500/30 transition ios-touch-item group flex flex-col justify-between">
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
        <!-- Box 1: Actual Cash (Touch to view Bank Accounts Modal) -->
        <div onclick="openBankModal()" 
             title="ចុចដើម្បីមើលកុងធនាគារទាំងអស់"
             class="p-2.5 rounded-xl bg-black/25 border border-white/5 cursor-pointer hover:border-emerald-500/30 transition ios-touch-item flex flex-col justify-between select-none">
          <span class="text-slate-400 text-[10px] block leading-tight mb-1">${t('actualCash')}:</span>
          <span class="font-mono text-white font-bold text-sm tracking-tight mt-0.5">${formatUSD(netCash.totalActualCash)}</span>
        </div>

        <!-- Box 2: Pending COD (Touch to view Pending COD Modal) -->
        <div onclick="openCodModal()" 
             title="ចុចដើម្បីមើលតារាង COD ទាំងអស់"
             class="p-2.5 rounded-xl bg-black/25 border border-white/5 cursor-pointer hover:border-amber-500/30 transition ios-touch-item flex flex-col justify-between select-none">
          <span class="text-slate-400 text-[10px] block leading-tight mb-1">${t('pendingCod')}:</span>
          <span class="font-mono text-amber-400 font-bold text-sm tracking-tight mt-0.5">${formatUSD(netCash.pendingCodReceivables)}</span>
        </div>

        <!-- Box 3: Liquid Assets -->
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5 flex flex-col justify-between select-none">
          <span class="text-slate-400 text-[10px] block leading-tight mb-1">${t('liquidAssets')}:</span>
          <span class="font-mono text-blue-400 font-bold text-sm tracking-tight mt-auto">${formatUSD(netCash.totalLiquidAssets)}</span>
        </div>

        <!-- Box 4: Accounts Payable (Touch to view Accounts Payable Modal) -->
        <div onclick="openPayablesModal()" 
             title="ចុចដើម្បីមើលបញ្ជីបំណុលទាំងអស់"
             class="p-2.5 rounded-xl bg-black/25 border border-white/5 cursor-pointer hover:border-rose-500/30 transition ios-touch-item flex flex-col justify-between select-none">
          <span class="text-slate-400 text-[10px] block leading-tight mb-1">${t('payablesTotal')}:</span>
          <span class="font-mono text-rose-400 font-bold text-sm tracking-tight mt-0.5">${formatUSD(netCash.totalAccountsPayable)}</span>
        </div>
      </div>
      <div class="mt-2 p-2.5 rounded-xl bg-gradient-to-r from-emerald-950/40 to-blue-950/40 border border-emerald-500/20 flex items-center justify-between">
        <span class="text-xs text-white font-semibold">${t('finalNetCash')}</span>
        <span class="text-base font-bold font-mono text-emerald-400">${formatUSD(netCash.netCashPositionFinal || netCash.totalNetCash)}</span>
      </div>
    </div>

    <!-- ======================================================== -->
    <!-- CARD D: 🧾 FULL-WIDTH EXPENSES CARD (ស្រឡះស្អាត តាម Filter)  -->
    <!-- ======================================================== -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30">
            <i data-lucide="receipt" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-200 leading-tight">
              ${t('todayExpTitle')}
            </h3>
            <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5">Expenses (${filteredExpenses.length} មុខ)</p>
          </div>
        </div>
        <button onclick="openExpensesModal()" 
                class="px-2.5 py-1 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 hover:text-white text-[11px] font-semibold flex items-center gap-1 active:scale-95 transition shadow-sm">
          <span>${appState.language === 'en' ? 'View All' : 'មើលទាំងអស់'}</span>
          <i data-lucide="chevron-right" class="w-3 h-3"></i>
        </button>
      </div>

      <!-- Expenses List -->
      <div class="space-y-2 max-h-52 overflow-y-auto no-scrollbar">
        ${filteredExpenses.slice(0, 15).map((e, idx) => `
          <div class="p-2.5 rounded-2xl bg-black/25 border border-white/5 flex items-center justify-between text-xs hover:border-white/10 transition">
            <div class="flex items-center gap-2.5 min-w-0 pr-2">
              <span class="w-5 h-5 rounded-lg bg-white/5 text-slate-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                ${idx + 1}
              </span>
              <div class="min-w-0">
                <p class="text-white font-medium text-xs truncate leading-tight">${e.description || e.category || 'ចំណាយទូទៅ'}</p>
                <div class="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5 font-mono">
                  <span>📅 ${e.date}</span>
                  ${e.time ? `<span class="text-amber-300">⏰ ${e.time}</span>` : ''}
                  ${e.category ? `<span class="px-1.5 py-0.2 rounded bg-white/5 text-slate-300 font-sans">${e.category}</span>` : ''}
                </div>
              </div>
            </div>
            <span class="font-mono text-rose-400 font-bold text-xs shrink-0 whitespace-nowrap">${formatUSD(e.amount)}</span>
          </div>
        `).join('') || `<p class="text-xs text-slate-400 py-6 text-center">${t('noData')}</p>`}
      </div>

      <!-- Expenses Footer Summary -->
      <div class="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-xs">
        <span class="text-slate-400 text-[11px]">ចំណាយសរុប (${filteredExpenses.length} មុខ):</span>
        <span class="font-mono text-rose-400 font-bold text-sm">${formatUSD(totalExpenseAmt)}</span>
      </div>
    </div>

    <!-- CARD E: TEAM SALES - DYNAMIC TARGET FROM GOOGLE SHEET (High-Security Style Badge) -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
            <i data-lucide="users" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="font-bold text-xs uppercase tracking-wider text-slate-200 leading-tight">
              ${t('teamSalesTitle')}
            </h3>
            <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5">Team Sales Targets</p>
          </div>
        </div>
        
        <!-- Target Highlight Badge (ដូចកន្លែង សុវត្ថិភាពខ្ពស់ / High Security Badge) -->
        <div class="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center gap-1 shadow-sm shrink-0">
          <span class="text-xs text-blue-400 font-bold font-mono">
            🎯 ${(currentTeamLeaders.reduce((acc, cur) => acc + (cur.targetGoal || 100), 0))} ប្រអប់
          </span>
        </div>
      </div>

      <div class="space-y-2.5">
        ${currentTeamLeaders.map(tl => `
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

    <!-- AI & TOOLS SECTION (Clean iPhone Home Screen Style - No Inner Box, Pure App Icons) -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-bold text-xs uppercase tracking-wider text-slate-300 flex items-center gap-2">
          <i data-lucide="sparkles" class="w-4 h-4 text-purple-400"></i>
          <span>ឧបករណ៍ AI & បកប្រែ</span>
        </h3>
        <span class="text-[10px] text-purple-400 font-mono font-semibold">Quick Launch</span>
      </div>

      <!-- Pure iPhone Springboard Icon Grid (Spacious & Clean with Native App Schemes) -->
      <div class="flex items-center justify-around px-2">
        <!-- 1. ChatGPT -->
        <button onclick="launchNativeOrWeb('chatgpt://', 'https://chatgpt.com')" 
                class="flex flex-col items-center gap-1.5 active:scale-90 transition group text-center cursor-pointer">
          <img src="chatgpt-ios.png" alt="ChatGPT" 
               class="w-14 h-14 rounded-[14px] object-cover shadow-xl shadow-black/50 group-hover:scale-105 transition border border-white/10">
          <span class="text-[11px] text-slate-200 font-medium tracking-tight">ChatGPT</span>
        </button>

        <!-- 2. Claude -->
        <button onclick="launchNativeOrWeb('claude://', 'https://claude.ai')" 
                class="flex flex-col items-center gap-1.5 active:scale-90 transition group text-center cursor-pointer">
          <img src="claude-ios.png" alt="Claude" 
               class="w-14 h-14 rounded-[14px] object-cover shadow-xl shadow-black/50 group-hover:scale-105 transition border border-white/10">
          <span class="text-[11px] text-slate-200 font-medium tracking-tight">Claude</span>
        </button>

        <!-- 3. Gemini (Native Google/Gemini App Launcher with Web Fallback) -->
        <button onclick="launchNativeOrWeb('googleapp://', 'https://gemini.google.com')" 
                class="flex flex-col items-center gap-1.5 active:scale-90 transition group text-center cursor-pointer">
          <img src="gemini-ios.png" alt="Gemini" 
               class="w-14 h-14 rounded-[14px] object-cover shadow-xl shadow-black/50 group-hover:scale-105 transition border border-white/10">
          <span class="text-[11px] text-slate-200 font-medium tracking-tight">Gemini</span>
        </button>

        <!-- 4. Google Translate -->
        <button onclick="launchNativeOrWeb('googletranslate://', 'https://translate.google.com/?sl=en&tl=km')" 
                class="flex flex-col items-center gap-1.5 active:scale-90 transition group text-center cursor-pointer">
          <img src="translate-ios.png" alt="Google Translate" 
               class="w-14 h-14 rounded-[14px] object-cover shadow-xl shadow-black/50 group-hover:scale-105 transition border border-white/10">
          <span class="text-[11px] text-slate-200 font-medium tracking-tight">Translate</span>
        </button>
      </div>
    </div>
  `;
}

// ==========================================
// 5. View: Analytics
// ==========================================
function setAnalyticsMonth(monthKey) {
  appState.analyticsMonthKey = monthKey;
  renderCurrentView();
}

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

  // Month selector buttons
  const isAll = appState.analyticsMonthKey === 'all' || !appState.analyticsMonthKey;
  const activeMonth = isAll ? 'all' : appState.analyticsMonthKey;

  const monthTabsHtml = `
    <div class="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
      <button onclick="setAnalyticsMonth('all')" 
              class="px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition active:scale-95 ${activeMonth === 'all' ? 'bg-orange-500 text-white shadow-md' : 'bg-white/5 text-slate-300 hover:bg-white/10'}">
        ✨ ពេញមួយឆ្នាំ
      </button>
      ${months.map(m => {
        const parts = m.split('-');
        const isSelected = activeMonth === m;
        return `
          <button onclick="setAnalyticsMonth('${m}')" 
                  class="px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition active:scale-95 ${isSelected ? 'bg-orange-500 text-white shadow-md' : 'bg-white/5 text-slate-300 hover:bg-white/10'}">
            ខែ ${parts[1]}
          </button>
        `;
      }).join('')}
    </div>
  `;

  // Render Daily Drill-down if a specific month is selected
  if (!isAll) {
    const monthSales = d.personalSales.filter(s => s.isoDate.startsWith(activeMonth));
    const parts = activeMonth.split('-');
    const monthTitle = `ខែ ${parts[1]}/${parts[0]}`;

    // Group by day
    const dailyMap = {};
    monthSales.forEach(s => {
      const dayIso = s.isoDate;
      if (!dailyMap[dayIso]) {
        dailyMap[dayIso] = { date: s.date, isoDate: dayIso, revenue: 0, profit: 0, qty: 0, count: 0 };
      }
      dailyMap[dayIso].revenue += s.totalAmount || 0;
      dailyMap[dayIso].profit += s.profit || 0;
      dailyMap[dayIso].qty += s.totalBoxQty || 0;
      dailyMap[dayIso].count += 1;
    });

    const daysSorted = Object.keys(dailyMap).sort(); // chronological
    const maxDailyRevenue = Math.max(...daysSorted.map(day => dailyMap[day].revenue), 10);
    const monthTotalRevenue = daysSorted.reduce((sum, day) => sum + dailyMap[day].revenue, 0);
    const monthTotalProfit = daysSorted.reduce((sum, day) => sum + dailyMap[day].profit, 0);
    const monthTotalBoxes = daysSorted.reduce((sum, day) => sum + dailyMap[day].qty, 0);

    return `
      <div class="space-y-4">
        <!-- Month Selector Pills -->
        ${monthTabsHtml}

        <!-- Month Hero Card -->
        <div class="ios-glass-card rounded-3xl p-5 border border-white/10 relative overflow-hidden">
          <div class="flex items-center justify-between mb-3">
            <div>
              <div class="flex items-center gap-2">
                <h3 class="font-bold text-sm text-white">${monthTitle} - ការវិភាគតាមថ្ងៃ</h3>
                <span class="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-bold">Daily Trend</span>
              </div>
              <p class="text-[11px] text-slate-400 mt-0.5">តាមដានកំណើនឡើងចុះនៃការលក់ប្រចាំថ្ងៃ</p>
            </div>
            <button onclick="setAnalyticsMonth('all')" class="text-xs text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1">
              <span>ពេញមួយឆ្នាំ</span>
              <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
            </button>
          </div>

          <!-- Quick Month Stats Grid -->
          <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="p-2.5 rounded-2xl bg-black/30 border border-white/5 text-center">
              <span class="text-[10px] text-slate-400 block mb-0.5">ចំណូលសរុប</span>
              <span class="font-mono text-xs font-bold text-emerald-400">${formatUSD(monthTotalRevenue)}</span>
            </div>
            <div class="p-2.5 rounded-2xl bg-black/30 border border-white/5 text-center">
              <span class="text-[10px] text-slate-400 block mb-0.5">ចំណេញដុល</span>
              <span class="font-mono text-xs font-bold text-blue-400">${formatUSD(monthTotalProfit)}</span>
            </div>
            <div class="p-2.5 rounded-2xl bg-black/30 border border-white/5 text-center">
              <span class="text-[10px] text-slate-400 block mb-0.5">លក់បាន</span>
              <span class="font-mono text-xs font-bold text-amber-300">${monthTotalBoxes} ប្រអប់</span>
            </div>
          </div>

          <!-- Daily Bar Chart (Horizontal Scrolling if many days) -->
          <div class="overflow-x-auto pb-2 scrollbar-none">
            <div class="h-48 min-w-[280px] flex items-end gap-2 pt-6 pb-2 px-1 border-b border-white/10">
              ${daysSorted.map((dayIso, idx) => {
                const item = dailyMap[dayIso];
                const dayNum = dayIso.split('-')[2];
                const barHeight = Math.max(14, Math.round((item.revenue / maxDailyRevenue) * 120));
                const prevItem = idx > 0 ? dailyMap[daysSorted[idx - 1]] : null;
                const isUp = prevItem ? item.revenue >= prevItem.revenue : true;
                return `
                  <div class="flex-1 min-w-[28px] flex flex-col items-center gap-1 group">
                    <span class="text-[7.5px] font-mono font-bold text-amber-300 block text-center leading-none">
                      $${Math.round(item.revenue)}
                    </span>
                    <div class="w-full max-w-[20px] rounded-t-md ${isUp ? 'bg-gradient-to-t from-emerald-600 to-teal-400' : 'bg-gradient-to-t from-rose-600 to-amber-500'} shadow-md transition-all group-hover:scale-110" 
                         style="height: ${barHeight}px"></div>
                    <span class="text-[9px] text-slate-300 font-mono font-semibold">${dayNum}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>

        <!-- Daily Trend Ups & Downs List (Reverse: Latest Day First) -->
        <div class="ios-glass-card rounded-3xl p-5 border border-white/10">
          <h4 class="font-bold text-xs uppercase tracking-wider text-slate-300 mb-3">
            📈 ការប្រែប្រួលឡើង-ចុះប្រចាំថ្ងៃ (${daysSorted.length} ថ្ងៃ)
          </h4>
          <div class="space-y-2">
            ${[...daysSorted].reverse().map(dayIso => {
              const item = dailyMap[dayIso];
              const curIdx = daysSorted.indexOf(dayIso);
              const prevIso = curIdx > 0 ? daysSorted[curIdx - 1] : null;
              const prevItem = prevIso ? dailyMap[prevIso] : null;
              let trendBadge = '<span class="text-slate-400 text-[10px]">—</span>';
              if (prevItem) {
                const diff = item.revenue - prevItem.revenue;
                if (diff > 0) {
                  trendBadge = `<span class="text-emerald-400 text-[10px] font-mono font-bold">▲ +${formatUSD(diff)}</span>`;
                } else if (diff < 0) {
                  trendBadge = `<span class="text-rose-400 text-[10px] font-mono font-bold">▼ -${formatUSD(Math.abs(diff))}</span>`;
                } else {
                  trendBadge = `<span class="text-slate-400 text-[10px] font-mono">■ ស្មើ</span>`;
                }
              }

              return `
                <div class="flex items-center justify-between p-3 rounded-2xl bg-black/25 border border-white/5">
                  <div class="flex items-center gap-2.5">
                    <span class="w-7 h-7 rounded-xl bg-orange-500/20 text-orange-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                      ${dayIso.split('-')[2]}
                    </span>
                    <div>
                      <span class="text-xs font-semibold text-white block">${item.date || dayIso}</span>
                      <span class="text-[10px] text-slate-400 font-mono">${item.qty} ប្រអប់ (${item.count} orders)</span>
                    </div>
                  </div>
                  <div class="text-right flex flex-col items-end">
                    <span class="font-mono text-xs text-emerald-400 font-bold">${formatUSD(item.revenue)}</span>
                    <div class="flex items-center gap-1.5 mt-0.5">
                      <span class="text-[10px] text-blue-400 font-mono">ចំណេញ ${formatUSD(item.profit)}</span>
                      ${trendBadge}
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // Otherwise, render full year 2026 Overview
  return `
    <div class="space-y-4">
      <!-- Month Selector Pills -->
      ${monthTabsHtml}

      <div class="ios-glass-card rounded-3xl p-5 border border-white/10">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="font-bold text-sm text-white">${t('diagramTitle')}</h3>
            <p class="text-[11px] text-slate-400">${t('diagramSubtitle')}</p>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold">${new Date().getFullYear()} Trend</span>
        </div>

        <div class="h-56 w-full flex items-end gap-2 pt-8 pb-3 px-1 border-b border-white/10">
          ${months.map(m => {
            const stat = monthlyStats[m];
            const revHeight = Math.max(16, Math.round((stat.revenue / maxRevenue) * 140));
            const moName = m.split('-')[1];
            return `
              <div onclick="setAnalyticsMonth('${m}')" class="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
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
            <div onclick="setAnalyticsMonth('${m}')" class="flex items-center justify-between p-2.5 rounded-xl bg-black/25 border border-white/5 hover:border-orange-500/30 cursor-pointer transition">
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
// 6. View: Daily English (Auto-load 5 Words Option)
// ==========================================
function getLearningViewHTML() {
  const visibleWords = DAILY_ENGLISH_WORDS.slice(0, appState.studyWordCount || 5);
  const hasMore = visibleWords.length < DAILY_ENGLISH_WORDS.length;

  return `
    <div class="space-y-4" id="study-container">
      <div class="ios-glass-card rounded-3xl p-5 border border-white/10 text-center relative overflow-hidden">
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white flex items-center justify-center mx-auto mb-2 shadow-lg shadow-orange-500/20">
          <i data-lucide="book-open" class="w-6 h-6"></i>
        </div>
        <h3 class="font-bold text-base text-white">រៀនភាសាអង់គ្លេស ១ ថ្ងៃ ៥ ពាក្យ</h3>
        <p class="text-xs text-slate-400 max-w-sm mx-auto mt-1">ពាក្យគន្លឹះសម្រាប់ការងារប្រចាំថ្ងៃ និងកូដបែប UI</p>
        <div class="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] text-orange-400 font-medium">
          <span>បង្ហាញ ${visibleWords.length} នៃ ${DAILY_ENGLISH_WORDS.length} ពាក្យ</span>
          <span>•</span>
          <span>អូសចុះក្រោម ឬចុចប៊ូតុងដើម្បីថែម ៥ ទៀត</span>
        </div>
      </div>

      <div class="space-y-3" id="study-words-list">
        ${visibleWords.map((w, idx) => `
          <div class="ios-glass-card rounded-2xl p-4 border border-white/10 flex items-start gap-3.5 transition-all">
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

      ${hasMore ? `
        <div class="pt-2 text-center pb-6">
          <button onclick="loadMoreStudyWords()" 
                  class="w-full py-3 rounded-2xl bg-white/5 hover:bg-white/10 active:scale-98 border border-white/10 text-xs font-semibold text-orange-400 flex items-center justify-center gap-2 transition">
            <i data-lucide="plus-circle" class="w-4 h-4"></i>
            <span>បង្ហាញ ៥ ពាក្យទៀតស្វ័យប្រវត្ត (Load 5 More Words)</span>
          </button>
        </div>
      ` : `
        <div class="py-4 text-center text-xs text-slate-400 pb-6">
          🎉 លោកអ្នកបានមើលពាក្យទាំងអស់ហើយ!
        </div>
      `}
    </div>
  `;
}

let isStudyLoading = false;
function loadMoreStudyWords() {
  if (isStudyLoading || appState.studyWordCount >= DAILY_ENGLISH_WORDS.length) return;
  isStudyLoading = true;
  const container = document.getElementById('main-content');
  const prevScroll = container ? container.scrollTop : 0;
  appState.studyWordCount = Math.min(appState.studyWordCount + 5, DAILY_ENGLISH_WORDS.length);
  renderCurrentView();
  if (container) {
    container.scrollTop = prevScroll;
  }
  setTimeout(() => {
    isStudyLoading = false;
  }, 450);
}

// ==========================================
// 7. View: Settings (Structured Android/iOS Standard)
// ==========================================
function getSettingsViewHTML() {
  const isDark = appState.theme === 'dark';
  const isKm = appState.language === 'km';
  const active = appState.activeSettingsItem;

  // Accent metadata for labels and swatches
  const accentMeta = {
    blue: { name: isKm ? 'ខៀវចាស់' : 'Deep Blue', dot: '#2563EB', textColor: '#FFFFFF', darkText: false },
    coral: { name: isKm ? 'ក្រហមផ្កាថ្ម' : 'Coral Red', dot: '#F43F5E', textColor: '#FFFFFF', darkText: false },
    orange: { name: isKm ? 'ទឹកក្រូច' : 'Sunset Orange', dot: '#F97316', textColor: '#FFFFFF', darkText: false },
    amber: { name: isKm ? 'លឿងទុំ' : 'Golden Amber', dot: '#F59E0B', textColor: '#0F172A', darkText: true },
    emerald: { name: isKm ? 'បៃតងរស្មី' : 'Emerald Green', dot: '#10B981', textColor: '#FFFFFF', darkText: false },
    pink: { name: isKm ? 'ផ្កាឈូក' : 'Rose Pink', dot: '#EC4899', textColor: '#FFFFFF', darkText: false }
  };
  const curAccent = accentMeta[appState.themeAccent] || accentMeta.orange;

  return `
    <div class="space-y-3.5 pb-8">
      
      <!-- Top Settings Header (Title & Summary Description + Back Button) -->
      <div class="pt-2 pb-1 px-1 flex items-center justify-between">
        <div>
          <h2 class="text-xl font-black text-white tracking-tight flex items-center gap-2">
            <span>⚙️</span>
            <span>${t('settingsTitle')}</span>
          </h2>
          <p class="text-xs text-slate-400 mt-0.5 leading-relaxed">${t('settingsSubtitle')}</p>
        </div>
        <button onclick="switchView('dashboard')" 
                title="${isKm ? 'ត្រឡប់ទៅទំព័រដើម' : 'Back to Home'}"
                class="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white text-xs font-bold flex items-center gap-1.5 transition active:scale-95 shadow-sm shrink-0">
          <i data-lucide="arrow-left" class="w-3.5 h-3.5 text-orange-400"></i>
          <span>${isKm ? 'ត្រឡប់' : 'Back'}</span>
        </button>
      </div>

      <!-- Swipe Gesture Hint Pill -->
      <div class="mx-1 px-3 py-1.5 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center gap-2 text-[11px] text-orange-300">
        <i data-lucide="move-right" class="w-3.5 h-3.5 shrink-0 text-orange-400"></i>
        <span>${isKm ? 'អូសមកពីឆ្វេងមកស្តាំ ដើម្បីត្រឡប់' : 'Swipe left to right to return'}</span>
      </div>

      <!-- ======================================================== -->
      <!-- GROUP 1: គណនី & រូបរាង (Profile & Appearance iOS List)     -->
      <!-- ======================================================== -->
      <div class="space-y-1.5">
        <div class="px-1.5">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">${isKm ? 'គណនី និងរូបរាង' : 'Profile & Appearance'}</span>
        </div>

        <div class="bg-[#0F1B2E] rounded-3xl border border-white/10 overflow-hidden divide-y divide-white/5 shadow-xl">
          
          <!-- 1.1 អំពីខ្ញុំ (About Me List Row) -->
          <div>
            <div onclick="toggleSettingsItem('about')" 
                 class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition select-none">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
                  <i data-lucide="user" class="w-4 h-4 text-orange-400"></i>
                </div>
                <div class="min-w-0">
                  <h4 class="text-xs font-bold text-white truncate leading-tight">${t('aboutMe')}</h4>
                  <p class="text-[10px] text-slate-400 mt-0.5 truncate">ស្តី ស្តើង • 🎖️ ${t('managerTitle')}</p>
                </div>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-orange-300 font-bold border border-white/5">
                  ${active === 'about' ? (isKm ? 'បិទកាត' : 'Collapse') : (isKm ? 'មើលកាត' : 'View Card')}
                </span>
                <i data-lucide="${active === 'about' ? 'chevron-down' : 'chevron-right'}" class="w-4 h-4 text-slate-400"></i>
              </div>
            </div>

            <!-- EXPANDED CARD: Centered Profile Card (ដូច Version មុន + បន្ថែមពត៌មាន) -->
            ${active === 'about' ? `
              <div class="p-4 bg-black/40 border-t border-white/5 animate-fade-in">
                <div class="rounded-3xl bg-[#09111D] border border-white/10 p-5 shadow-2xl flex flex-col items-center text-center space-y-3.5 relative overflow-hidden">
                  
                  <!-- Ambient Top Glow -->
                  <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full bg-orange-500/15 blur-3xl pointer-events-none"></div>

                  <!-- Centered Profile Photo with Green Status Dot (Like Version មុន) -->
                  <div class="relative">
                    <img src="profile.png" alt="SDEY SDOEUNG" 
                         class="w-24 h-24 rounded-full object-cover border-4 border-[var(--accent-solid)] shadow-2xl">
                    <span class="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#070D18] shadow-md"></span>
                  </div>

                  <!-- Centered Name with Verified Blue Tick -->
                  <div>
                    <div class="flex items-center justify-center gap-1.5">
                      <h2 class="text-xl font-black text-white tracking-wide">ស្តី ស្តើង</h2>
                      <img src="blue-tick.png" alt="Verified" class="w-4 h-4 object-contain shrink-0">
                    </div>
                    <p class="text-xs text-orange-400 font-semibold tracking-widest uppercase mt-0.5">SDEY SDOEUNG</p>
                    
                    <!-- Manager Badge Centered -->
                    <div class="mt-2 flex justify-center">
                      <span class="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/35 text-amber-300 font-extrabold text-xs shadow-sm flex items-center gap-1">
                        <span>🎖️</span>
                        <span>${t('managerTitle')}</span>
                      </span>
                    </div>
                  </div>

                  <!-- Roles Badges Centered in 3 Columns -->
                  <div class="w-full pt-3 border-t border-white/10">
                    <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">${isKm ? 'តួនាទីទទួលខុសត្រូវ' : 'Core Responsibilities'}</span>
                    <div class="grid grid-cols-3 gap-1.5 w-full max-w-xs mx-auto">
                      <div class="p-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center justify-center">
                        <span class="text-xs">📈</span>
                        <p class="text-[10px] font-bold text-white mt-0.5">${t('salesRole')}</p>
                      </div>
                      <div class="p-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center justify-center">
                        <span class="text-xs">👑</span>
                        <p class="text-[10px] font-bold text-white mt-0.5">${t('leaderRole')}</p>
                      </div>
                      <div class="p-2 rounded-xl bg-white/5 border border-white/5 flex flex-col items-center justify-center">
                        <span class="text-xs">💻</span>
                        <p class="text-[10px] font-bold text-white mt-0.5">${t('developerRole')}</p>
                      </div>
                    </div>
                  </div>

                  <!-- Centered Contacts List -->
                  <div class="w-full pt-2.5 border-t border-white/10 space-y-1.5 text-xs max-w-xs mx-auto">
                    <div class="flex items-center justify-between text-slate-300">
                      <span class="text-slate-400">${t('phoneLabel')}:</span>
                      <span class="font-mono font-bold text-white">087 513 666 / 090 513 666</span>
                    </div>
                    <div class="flex items-center justify-between text-slate-300">
                      <span class="text-slate-400">${t('telegramLabel')}:</span>
                      <a href="https://t.me/sdoeung_sd" target="_blank" class="text-blue-400 font-mono font-bold hover:underline">@sdoeung_sd</a>
                    </div>
                    <div class="flex items-center justify-between text-slate-300 pt-1 border-t border-white/5">
                      <span class="text-slate-400">${t('versionLabel')}:</span>
                      <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-orange-400 font-bold">SD Liquid v3.6</span>
                    </div>
                  </div>

                  <!-- Solid Accent Fill Button with Auto Contrast Text -->
                  <div class="w-full max-w-xs mx-auto pt-1">
                    <a href="https://t.me/sdoeung_sd" target="_blank" 
                       class="w-full py-2.5 rounded-2xl accent-solid-btn font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition">
                      <i data-lucide="send" class="w-3.5 h-3.5"></i>
                      <span>${t('contactTelegramBtn')}</span>
                    </a>
                  </div>

                </div>
              </div>
            ` : ''}
          </div>

          <!-- 1.2 ពណ៌ចម្បង (Theme Accent List Row) -->
          <div>
            <div onclick="toggleSettingsItem('accent')" 
                 class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition select-none">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <i data-lucide="palette" class="w-4 h-4 text-purple-400"></i>
                </div>
                <div class="min-w-0">
                  <h4 class="text-xs font-bold text-white truncate leading-tight">${t('themeAccentTitle')}</h4>
                  <p class="text-[10px] text-slate-400 mt-0.5 truncate">${t('themeAccentDesc')}</p>
                </div>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <span class="inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/10" style="background-color: ${curAccent.dot}20; color: ${curAccent.dot}">
                  <span class="w-2 h-2 rounded-full" style="background-color: ${curAccent.dot}"></span>
                  <span>${curAccent.name}</span>
                </span>
                <i data-lucide="${active === 'accent' ? 'chevron-down' : 'chevron-right'}" class="w-4 h-4 text-slate-400"></i>
              </div>
            </div>

            <!-- EXPANDED CARD: 6 Theme Accent Swatches & Contrast System -->
            ${active === 'accent' ? `
              <div class="p-4 bg-black/40 border-t border-white/5 space-y-3 animate-fade-in">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-white">${isKm ? 'ជ្រើសរើសពណ៌ចម្បង (៦ ពណ៌)' : 'Choose Accent Color (6 Colors)'}</span>
                  <span class="text-[10px] text-slate-400">${isKm ? 'Apply ទៅកាន់កាតខាងក្រៅ' : 'Applies to Dashboard'}</span>
                </div>

                <!-- 6 Modern Swatches (Deep Blue, Coral Red, Sunset Orange, Golden Amber, Emerald Green, Rose Pink) -->
                <div class="grid grid-cols-3 gap-2">
                  
                  <!-- 1. Deep Blue -->
                  <button onclick="setThemeAccent('blue')" 
                          class="p-2 rounded-2xl border flex flex-col items-center justify-center gap-1 transition active:scale-95 ${appState.themeAccent === 'blue' ? 'border-blue-500 bg-blue-500/20 ring-2 ring-blue-500/40' : 'bg-white/5 border-white/5 opacity-80 hover:opacity-100'}">
                    <div class="w-8 h-8 rounded-xl bg-[#2563EB] text-white font-bold text-xs flex items-center justify-center shadow-md">Aa</div>
                    <span class="text-[11px] font-bold text-white mt-0.5">${t('accentBlue')}</span>
                    <span class="text-[9px] text-slate-400">#2563EB (ស)</span>
                  </button>

                  <!-- 2. Coral Red -->
                  <button onclick="setThemeAccent('coral')" 
                          class="p-2 rounded-2xl border flex flex-col items-center justify-center gap-1 transition active:scale-95 ${appState.themeAccent === 'coral' ? 'border-rose-500 bg-rose-500/20 ring-2 ring-rose-500/40' : 'bg-white/5 border-white/5 opacity-80 hover:opacity-100'}">
                    <div class="w-8 h-8 rounded-xl bg-[#F43F5E] text-white font-bold text-xs flex items-center justify-center shadow-md">Aa</div>
                    <span class="text-[11px] font-bold text-white mt-0.5">${t('accentCoral')}</span>
                    <span class="text-[9px] text-slate-400">#F43F5E (ស)</span>
                  </button>

                  <!-- 3. Sunset Orange -->
                  <button onclick="setThemeAccent('orange')" 
                          class="p-2 rounded-2xl border flex flex-col items-center justify-center gap-1 transition active:scale-95 ${appState.themeAccent === 'orange' ? 'border-orange-500 bg-orange-500/20 ring-2 ring-orange-500/40' : 'bg-white/5 border-white/5 opacity-80 hover:opacity-100'}">
                    <div class="w-8 h-8 rounded-xl bg-[#F97316] text-white font-bold text-xs flex items-center justify-center shadow-md">Aa</div>
                    <span class="text-[11px] font-bold text-white mt-0.5">${t('accentOrange')}</span>
                    <span class="text-[9px] text-slate-400">#F97316 (ស)</span>
                  </button>

                  <!-- 4. Golden Amber (Special: Dark Charcoal Text!) -->
                  <button onclick="setThemeAccent('amber')" 
                          class="p-2 rounded-2xl border flex flex-col items-center justify-center gap-1 transition active:scale-95 ${appState.themeAccent === 'amber' ? 'border-amber-500 bg-amber-500/20 ring-2 ring-amber-500/40' : 'bg-white/5 border-white/5 opacity-80 hover:opacity-100'}">
                    <div class="w-8 h-8 rounded-xl bg-[#F59E0B] text-[#0F172A] font-black text-xs flex items-center justify-center shadow-md">Aa</div>
                    <span class="text-[11px] font-bold text-white mt-0.5">${t('accentAmber')}</span>
                    <span class="text-[9px] text-amber-300 font-bold">#F59E0B (ខ្មៅ)</span>
                  </button>

                  <!-- 5. Emerald Green -->
                  <button onclick="setThemeAccent('emerald')" 
                          class="p-2 rounded-2xl border flex flex-col items-center justify-center gap-1 transition active:scale-95 ${appState.themeAccent === 'emerald' ? 'border-emerald-500 bg-emerald-500/20 ring-2 ring-emerald-500/40' : 'bg-white/5 border-white/5 opacity-80 hover:opacity-100'}">
                    <div class="w-8 h-8 rounded-xl bg-[#10B981] text-white font-bold text-xs flex items-center justify-center shadow-md">Aa</div>
                    <span class="text-[11px] font-bold text-white mt-0.5">${t('accentEmerald')}</span>
                    <span class="text-[9px] text-slate-400">#10B981 (ស)</span>
                  </button>

                  <!-- 6. Rose Pink -->
                  <button onclick="setThemeAccent('pink')" 
                          class="p-2 rounded-2xl border flex flex-col items-center justify-center gap-1 transition active:scale-95 ${appState.themeAccent === 'pink' ? 'border-pink-500 bg-pink-500/20 ring-2 ring-pink-500/40' : 'bg-white/5 border-white/5 opacity-80 hover:opacity-100'}">
                    <div class="w-8 h-8 rounded-xl bg-[#EC4899] text-white font-bold text-xs flex items-center justify-center shadow-md">Aa</div>
                    <span class="text-[11px] font-bold text-white mt-0.5">${t('accentPink')}</span>
                    <span class="text-[9px] text-slate-400">#EC4899 (ស)</span>
                  </button>

                </div>

                <!-- Explanation Banner -->
                <div class="p-2.5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-2 text-[10px] text-slate-300">
                  <span class="text-sm">💡</span>
                  <p class="leading-relaxed">${t('contrastHint')}</p>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- 1.3 ពុម្ពអក្សរ (Fonts List Row) -->
          <div>
            <div onclick="toggleSettingsItem('fonts')" 
                 class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition select-none">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-8 h-8 rounded-xl bg-slate-700/40 border border-white/10 flex items-center justify-center shrink-0">
                  <span class="text-xs font-bold text-white">Aa</span>
                </div>
                <div class="min-w-0">
                  <h4 class="text-xs font-bold text-white truncate leading-tight">${t('fontTitle')}</h4>
                  <p class="text-[10px] text-slate-400 mt-0.5 truncate">${t('fontDesc')}</p>
                </div>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/5">
                  ${appState.fontFamily === 'font-kantumruy' ? (isKm ? 'កន្ទុំរុយ' : 'Kantumruy') : (appState.fontFamily === 'font-koh-santepheap' ? (isKm ? 'កោះសន្តិភាព' : 'Santepheap') : 'Jakarta')}
                </span>
                <i data-lucide="${active === 'fonts' ? 'chevron-down' : 'chevron-right'}" class="w-4 h-4 text-slate-400"></i>
              </div>
            </div>

            <!-- EXPANDED CARD: Font Selection -->
            ${active === 'fonts' ? `
              <div class="p-3.5 bg-black/40 border-t border-white/5 space-y-2 animate-fade-in">
                <div class="grid grid-cols-3 gap-1.5 bg-black/40 p-1 rounded-2xl border border-white/5 text-center">
                  <button onclick="setAppFont('font-kantumruy')" 
                          class="py-2 rounded-xl text-xs font-semibold transition active:scale-95 ${appState.fontFamily === 'font-kantumruy' ? 'accent-solid-btn shadow-md' : 'text-slate-400 hover:text-white'}">
                    <span>${isKm ? 'កន្ទុំរុយ' : 'Kantumruy'}</span>
                  </button>
                  <button onclick="setAppFont('font-koh-santepheap')" 
                          class="py-2 rounded-xl text-xs font-semibold transition active:scale-95 ${appState.fontFamily === 'font-koh-santepheap' ? 'accent-solid-btn shadow-md' : 'text-slate-400 hover:text-white'}">
                    <span>${isKm ? 'កោះសន្តិភាព' : 'Santepheap'}</span>
                  </button>
                  <button onclick="setAppFont('font-jakarta')" 
                          class="py-2 rounded-xl text-xs font-semibold transition active:scale-95 ${appState.fontFamily === 'font-jakarta' ? 'accent-solid-btn shadow-md' : 'text-slate-400 hover:text-white'}">
                    <span>${isKm ? 'ចាការតា' : 'Jakarta'}</span>
                  </button>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- 1.4 ទំហំអក្សរ (Text Size List Row - Direct interactive controls) -->
          <div class="p-3.5 flex items-center justify-between select-none">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                <i data-lucide="scaling" class="w-4 h-4 text-blue-400"></i>
              </div>
              <div class="min-w-0">
                <h4 class="text-xs font-bold text-white truncate leading-tight">${t('textSizeTitle')}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 truncate">${t('textSizeDesc')}</p>
              </div>
            </div>
            <div class="flex items-center gap-1 bg-black/40 p-0.5 rounded-xl border border-white/5 shrink-0">
              <button onclick="setAppTextSize('sm')" 
                      class="w-7 h-7 rounded-lg font-bold flex items-center justify-center transition active:scale-95 ${appState.textSize === 'sm' ? 'accent-solid-btn shadow-md' : 'text-slate-400 hover:text-white text-xs'}">
                <span>A-</span>
              </button>
              <button onclick="setAppTextSize('md')" 
                      class="w-7 h-7 rounded-lg font-bold flex items-center justify-center transition active:scale-95 ${appState.textSize === 'md' ? 'accent-solid-btn shadow-md' : 'text-slate-400 hover:text-white text-xs'}">
                <span>A</span>
              </button>
              <button onclick="setAppTextSize('lg')" 
                      class="w-7 h-7 rounded-lg font-bold flex items-center justify-center transition active:scale-95 ${appState.textSize === 'lg' ? 'accent-solid-btn shadow-md' : 'text-slate-400 hover:text-white text-sm'}">
                <span>A+</span>
              </button>
            </div>
          </div>

          <!-- 1.5 ផ្ទាំងរូបភាពចាក់សោរ (Wallpaper List Row) -->
          <div>
            <div onclick="toggleSettingsItem('wallpaper')" 
                 class="p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition select-none">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
                  <i data-lucide="image" class="w-4 h-4 text-indigo-400"></i>
                </div>
                <div class="min-w-0">
                  <h4 class="text-xs font-bold text-white truncate leading-tight">${t('wallpaperTitle')}</h4>
                  <p class="text-[10px] text-slate-400 mt-0.5 truncate">${t('wallpaperDesc')}</p>
                </div>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <button onclick="event.stopPropagation(); lockApp();" 
                        class="px-2 py-0.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold border border-white/10 flex items-center gap-1 active:scale-95 transition">
                  <i data-lucide="eye" class="w-3 h-3 text-orange-400"></i>
                  <span>${t('lockScreenNow')}</span>
                </button>
                <i data-lucide="${active === 'wallpaper' ? 'chevron-down' : 'chevron-right'}" class="w-4 h-4 text-slate-400"></i>
              </div>
            </div>

            <!-- EXPANDED CARD: Wallpaper Carousel -->
            ${active === 'wallpaper' ? `
              <div class="p-3.5 bg-black/40 border-t border-white/5 space-y-2 animate-fade-in">
                <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                  <!-- Wallpaper 1 -->
                  <button onclick="setLockWallpaper('wp-deep-mesh')" 
                          class="shrink-0 w-24 p-2 rounded-2xl border text-center transition active:scale-95 ${appState.lockWallpaper === 'wp-deep-mesh' ? 'bg-orange-500/20 border-orange-500 ring-2 ring-orange-500/50' : 'bg-black/30 border-white/10 opacity-80 hover:opacity-100'}">
                    <div class="w-full h-14 rounded-xl bg-gradient-to-br from-indigo-900 via-blue-950 to-slate-900 border border-white/20 mb-1 relative overflow-hidden flex items-center justify-center">
                      <span class="text-[9px] font-mono text-white/90 font-bold">9:41</span>
                    </div>
                    <p class="text-[11px] font-bold text-white truncate">${isKm ? 'សំណាញ់ខៀវ' : 'Deep Mesh'}</p>
                    <span class="text-[9px] text-slate-400">${isKm ? 'លំនាំដើម' : 'Default'}</span>
                  </button>

                  <!-- Wallpaper 2 -->
                  <button onclick="setLockWallpaper('wp-midnight-purple')" 
                          class="shrink-0 w-24 p-2 rounded-2xl border text-center transition active:scale-95 ${appState.lockWallpaper === 'wp-midnight-purple' ? 'bg-orange-500/20 border-orange-500 ring-2 ring-orange-500/50' : 'bg-black/30 border-white/10 opacity-80 hover:opacity-100'}">
                    <div class="w-full h-14 rounded-xl bg-gradient-to-br from-purple-950 via-slate-950 to-indigo-950 border border-white/20 mb-1 relative overflow-hidden flex items-center justify-center">
                      <span class="text-[9px] font-mono text-white/90 font-bold">9:41</span>
                    </div>
                    <p class="text-[11px] font-bold text-white truncate">${isKm ? 'ស្វាយរាត្រី' : 'Midnight'}</p>
                    <span class="text-[9px] text-slate-400">${isKm ? 'ស្វាយចាស់' : 'Purple'}</span>
                  </button>

                  <!-- Wallpaper 3 -->
                  <button onclick="setLockWallpaper('wp-pure-oled')" 
                          class="shrink-0 w-24 p-2 rounded-2xl border text-center transition active:scale-95 ${appState.lockWallpaper === 'wp-pure-oled' ? 'bg-orange-500/20 border-orange-500 ring-2 ring-orange-500/50' : 'bg-black/30 border-white/10 opacity-80 hover:opacity-100'}">
                    <div class="w-full h-14 rounded-xl bg-black border border-white/30 mb-1 relative overflow-hidden flex items-center justify-center">
                      <span class="text-[9px] font-mono text-white/90 font-bold">9:41</span>
                    </div>
                    <p class="text-[11px] font-bold text-white truncate">${isKm ? 'ខ្មៅសុទ្ធ' : 'Pure OLED'}</p>
                    <span class="text-[9px] text-slate-400">${isKm ? 'សន្សំថ្ម' : 'True Black'}</span>
                  </button>

                  <!-- Wallpaper 4 -->
                  <button onclick="setLockWallpaper('wp-emerald-aurora')" 
                          class="shrink-0 w-24 p-2 rounded-2xl border text-center transition active:scale-95 ${appState.lockWallpaper === 'wp-emerald-aurora' ? 'bg-orange-500/20 border-orange-500 ring-2 ring-orange-500/50' : 'bg-black/30 border-white/10 opacity-80 hover:opacity-100'}">
                    <div class="w-full h-14 rounded-xl bg-gradient-to-br from-emerald-950 via-teal-950 to-black border border-white/20 mb-1 relative overflow-hidden flex items-center justify-center">
                      <span class="text-[9px] font-mono text-white/90 font-bold">9:41</span>
                    </div>
                    <p class="text-[11px] font-bold text-white truncate">${isKm ? 'បៃតងរស្មី' : 'Aurora'}</p>
                    <span class="text-[9px] text-slate-400">${isKm ? 'ធម្មជាតិ' : 'Emerald'}</span>
                  </button>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- 1.6 ភាសា (Language List Row) -->
          <div class="p-3.5 flex items-center justify-between select-none">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0">
                <i data-lucide="globe" class="w-4 h-4 text-sky-400"></i>
              </div>
              <div class="min-w-0">
                <h4 class="text-xs font-bold text-white truncate leading-tight">${t('language')}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 truncate">${isKm ? 'ខ្មែរ / អង់គ្លេស' : 'Khmer / English'}</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-1 bg-black/40 p-0.5 rounded-xl border border-white/5 shrink-0">
              <button onclick="setLanguage('km')" class="py-1 px-2.5 rounded-lg text-[10px] font-bold transition ${isKm ? 'accent-solid-btn' : 'text-slate-400'}">ខ្មែរ</button>
              <button onclick="setLanguage('en')" class="py-1 px-2.5 rounded-lg text-[10px] font-bold transition ${!isKm ? 'accent-solid-btn' : 'text-slate-400'}">EN</button>
            </div>
          </div>

          <!-- 1.7 ទម្រង់ពណ៌ (Color Mode List Row) -->
          <div class="p-3.5 flex items-center justify-between select-none">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
                <i data-lucide="${isDark ? 'moon' : 'sun'}" class="w-4 h-4 text-amber-400"></i>
              </div>
              <div class="min-w-0">
                <h4 class="text-xs font-bold text-white truncate leading-tight">${t('theme')}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 truncate">${isDark ? (isKm ? 'របៀបងងឹត' : 'Dark Mode') : (isKm ? 'របៀបភ្លឺ' : 'Light Mode')}</p>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-1 bg-black/40 p-0.5 rounded-xl border border-white/5 shrink-0">
              <button onclick="toggleTheme('dark')" class="py-1 px-2.5 rounded-lg text-[10px] font-bold transition ${isDark ? 'accent-solid-btn' : 'text-slate-400'}">${t('dark')}</button>
              <button onclick="toggleTheme('light')" class="py-1 px-2.5 rounded-lg text-[10px] font-bold transition ${!isDark ? 'accent-solid-btn' : 'text-slate-400'}">${t('light')}</button>
            </div>
          </div>

          <!-- 1.8 ការជូនដំណឹង (Notifications List Row) -->
          <div class="p-3.5 flex items-center justify-between select-none">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-8 h-8 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shrink-0">
                <i data-lucide="bell" class="w-4 h-4 text-rose-400"></i>
              </div>
              <div class="min-w-0">
                <h4 class="text-xs font-bold text-white truncate leading-tight">${t('notificationsTitle')}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 truncate">${t('notificationsDesc')}</p>
              </div>
            </div>
            <button onclick="toggleNotificationsEnabled()" 
                    class="w-11 h-6 rounded-full transition-colors duration-200 p-0.5 relative flex items-center shrink-0 ${appState.notificationsEnabled ? 'bg-emerald-500' : 'bg-slate-700'}"
                    role="switch" aria-checked="${appState.notificationsEnabled}">
              <div class="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${appState.notificationsEnabled ? 'translate-x-5' : 'translate-x-0'}"></div>
            </button>
          </div>

        </div>
      </div>

      <!-- ======================================================== -->
      <!-- GROUP 2: សុវត្ថិភាព & ប្រព័ន្ធ (Security & Passcode iOS List) -->
      <!-- ======================================================== -->
      <div class="space-y-1.5 pt-1">
        <div class="px-1.5">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">${isKm ? 'សុវត្ថិភាព និងប្រព័ន្ធ' : 'Security & System'}</span>
        </div>

        <div class="bg-[#0F1B2E] rounded-3xl border border-white/10 overflow-hidden divide-y divide-white/5 shadow-xl">
          
          <!-- Passcode Security List Row -->
          <div class="p-3.5 flex items-center justify-between select-none">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i>
              </div>
              <div class="min-w-0">
                <h4 class="text-xs font-bold text-white truncate leading-tight">${t('enablePinTitle')}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 truncate">${t('enablePinDesc')}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              ${appState.pinEnabled ? `
                <button onclick="openChangePinModal()" 
                        class="px-2.5 py-1 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-[10px] transition active:scale-95 shadow-md">
                  ${t('changePinBtn')}
                </button>
              ` : ''}
              <button onclick="togglePinEnabled()" 
                      class="w-11 h-6 rounded-full transition-colors duration-200 p-0.5 relative flex items-center shrink-0 ${appState.pinEnabled ? 'bg-emerald-500' : 'bg-slate-700'}"
                      role="switch" aria-checked="${appState.pinEnabled}">
                <div class="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${appState.pinEnabled ? 'translate-x-5' : 'translate-x-0'}"></div>
              </button>
            </div>
          </div>

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

  const footer = document.getElementById('sales-modal-footer');
  if (footer) {
    const totalBoxSum = sortedSales.reduce((acc, cur) => acc + (cur.totalBoxQty || 0), 0);
    const totalRevSum = sortedSales.reduce((acc, cur) => acc + (cur.totalAmount || 0), 0);
    footer.innerHTML = `
      <div class="flex items-center gap-2 text-slate-300 text-xs">
        <span class="font-semibold">ចំនួនសរុប: ${sortedSales.length} កុម្ម៉ង់</span>
        <span class="text-slate-500">|</span>
        <span class="text-orange-400 font-mono font-bold">${formatInt(totalBoxSum)} ប្រអប់</span>
      </div>
      <div class="flex items-center gap-1.5 font-mono font-bold text-sm text-emerald-400 text-right">
        <span class="text-[11px] text-slate-400 font-sans font-normal">សរុបទឹកប្រាក់:</span>
        <span>${formatUSD(totalRevSum)}</span>
      </div>
    `;
  }

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

  const footer = document.getElementById('payables-modal-footer');
  if (footer) {
    const totalPayables = (d.bank && d.bank.netCashPosition && d.bank.netCashPosition.totalAccountsPayable) || 
      d.bank.payables.reduce((sum, p) => sum + (p.amount || 0), 0);
    footer.innerHTML = `
      <div class="text-slate-300 font-semibold text-xs">
        ចំនួនសរុប: ${d.bank.payables.length} មុខ
      </div>
      <div class="flex items-center gap-1.5 font-mono font-bold text-sm text-rose-400 text-right">
        <span class="text-[11px] text-slate-400 font-sans font-normal">សរុបទឹកប្រាក់:</span>
        <span>${formatUSD(totalPayables)}</span>
      </div>
    `;
  }

  modal.classList.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function closePayablesModal() {
  document.getElementById('payables-modal').classList.add('hidden');
}

// ==========================================
// COD Receivables Full Drill-down Modal (Note 2)
// ==========================================
function openCodModal() {
  const d = DataService.data;
  if (!d) return;

  const modal = document.getElementById('cod-modal');
  const tbody = document.getElementById('cod-modal-tbody');
  const countBadge = document.getElementById('cod-modal-count-badge');
  const footer = document.getElementById('cod-modal-footer');
  if (!modal || !tbody) return;

  const items = d.pendingCodReceivables || [];
  if (countBadge) {
    countBadge.textContent = items.length;
  }

  tbody.innerHTML = items.map(item => `
    <tr class="hover:bg-white/5 transition">
      <td class="py-2 px-2.5 font-mono text-orange-400 font-bold text-[11px]">${item.no}</td>
      <td class="py-2 px-2.5 text-slate-300 font-mono text-[11px]">${item.date}</td>
      <td class="py-2 px-2.5 text-white font-medium text-[11px]">${item.qtyBoxes}</td>
      <td class="py-2 px-2.5 text-blue-300 font-medium text-[11px]">${item.status}</td>
      <td class="py-2 px-2.5 text-right font-mono font-bold text-amber-400 text-[12px]">${formatUSD(item.amount)}</td>
    </tr>
  `).join('') || `<tr><td colspan="5" class="text-center py-6 text-slate-500">${t('noData')}</td></tr>`;

  // Calculate totals
  const totalAmount = items.reduce((sum, it) => sum + (it.amount || 0), 0);
  const totalBoxes = items.reduce((sum, it) => {
    const q = parseInt(it.qtyBoxes, 10);
    return sum + (isNaN(q) ? 0 : q);
  }, 0);

  if (footer) {
    footer.innerHTML = `
      <div class="flex items-center gap-2 text-slate-300 text-xs">
        <span class="font-semibold">ចំនួនសរុប: ${items.length} មុខ</span>
        <span class="text-slate-500">|</span>
        <span class="text-orange-400 font-mono font-bold">${totalBoxes} ប្រអប់</span>
      </div>
      <div class="flex items-center gap-1.5 font-mono font-bold text-sm text-amber-400 text-right">
        <span class="text-[11px] text-slate-400 font-sans font-normal">សរុបទឹកប្រាក់:</span>
        <span>${formatUSD(totalAmount)}</span>
      </div>
    `;
  }

  modal.classList.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function closeCodModal() {
  const modal = document.getElementById('cod-modal');
  if (modal) modal.classList.add('hidden');
}

// ==========================================
// Bank Accounts & Actual Cash Modal (Note 4)
// ==========================================
function openBankModal() {
  const d = DataService.data;
  if (!d) return;

  const modal = document.getElementById('bank-modal');
  const listEl = document.getElementById('bank-modal-list');
  const footer = document.getElementById('bank-modal-footer');
  if (!modal || !listEl) return;

  const accounts = (d.bank && d.bank.accounts) || [];
  listEl.innerHTML = accounts.map(acc => `
    <div class="flex items-center justify-between p-2.5 rounded-xl bg-black/25 border border-white/5 text-xs">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
          <i data-lucide="building-2" class="w-4 h-4"></i>
        </div>
        <div>
          <span class="text-white font-semibold text-xs block">${acc.name}</span>
          <span class="text-[10px] text-slate-400 font-mono">Bank Account</span>
        </div>
      </div>
      <div class="text-right font-mono">
        ${acc.usd > 0 ? `<div class="text-white font-bold text-xs">${formatUSD(acc.usd)}</div>` : ''}
        ${acc.khr > 0 ? `<div class="text-emerald-400 font-bold text-xs">${formatKHR(acc.khr)}</div>` : ''}
        ${acc.usd === 0 && acc.khr === 0 ? `<span class="text-slate-500 text-xs">$0.00</span>` : ''}
      </div>
    </div>
  `).join('') || `<p class="text-xs text-slate-500 py-4 text-center">${t('noData')}</p>`;

  const netCash = (d.bank && d.bank.netCashPosition) || {};
  if (footer) {
    footer.innerHTML = `
      <div class="text-slate-300 font-semibold text-xs">
        ចំនួនសរុប: ${accounts.length} គណនី
      </div>
      <div class="flex items-center gap-1.5 font-mono font-bold text-sm text-emerald-400 text-right">
        <span class="text-[11px] text-slate-400 font-sans font-normal">សរុបជាក់ស្តែង:</span>
        <span>${formatUSD(netCash.totalActualCash || 0)}</span>
      </div>
    `;
  }

  modal.classList.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function closeBankModal() {
  const modal = document.getElementById('bank-modal');
  if (modal) modal.classList.add('hidden');
}

function openExpensesModal(forceMonthly = false) {
  const d = DataService.data;
  if (!d) return;

  const modal = document.getElementById('expenses-modal');
  const listEl = document.getElementById('expenses-modal-list');
  const subtitle = document.getElementById('expenses-modal-subtitle');

  const now = new Date();
  const currentIsoDay = getLocalIsoDate(now);
  const currentIsoMonth = currentIsoDay.slice(0, 7);
  const currentIsoYear = currentIsoDay.slice(0, 4);

  let filteredExpenses = d.expenses || [];
  let periodLabel = 'ទាំងអស់';

  // Determine current active target month from selected month pill or date filter
  let targetMonthKey = currentIsoMonth;
  if (appState.periodFilter === 'month') {
    targetMonthKey = appState.selectedMonthKey || currentIsoMonth;
  } else if (appState.periodFilter === 'today') {
    if (appState.daySubFilter === 'specific' && appState.specificDate) {
      targetMonthKey = appState.specificDate.slice(0, 7);
    } else if (appState.daySubFilter === 'yesterday') {
      const yDate = new Date();
      yDate.setDate(yDate.getDate() - 1);
      targetMonthKey = getLocalIsoDate(yDate).slice(0, 7);
    } else {
      targetMonthKey = currentIsoMonth;
    }
  } else if (appState.periodFilter === 'custom' && appState.customStartDate) {
    targetMonthKey = appState.customStartDate.slice(0, 7);
  }

  // If forceMonthly is true (clicked from monthly summary card List icon) OR periodFilter === 'month'
  if (forceMonthly || appState.periodFilter === 'month') {
    filteredExpenses = (d.expenses || []).filter(e => e.isoDate && e.isoDate.startsWith(targetMonthKey));
    const parts = targetMonthKey.split('-');
    periodLabel = `ខែ ${parts[1]}/${parts[0]}`;
  } else {
    // Normal drill-down from day/period filter
    if (appState.periodFilter === 'today') {
      if (appState.daySubFilter === 'specific' && appState.specificDate) {
        filteredExpenses = (d.expenses || []).filter(e => e.isoDate === appState.specificDate);
        periodLabel = `ថ្ងៃ ${displayDDMMYYYY(appState.specificDate)}`;
      } else if (appState.daySubFilter === 'yesterday') {
        const yDate = new Date();
        yDate.setDate(yDate.getDate() - 1);
        const yesterdayIsoDay = getLocalIsoDate(yDate);
        filteredExpenses = (d.expenses || []).filter(e => e.isoDate === yesterdayIsoDay);
        periodLabel = `ម្សិលមិញ (${displayDDMMYYYY(yesterdayIsoDay)})`;
      } else {
        filteredExpenses = (d.expenses || []).filter(e => e.isoDate === currentIsoDay);
        periodLabel = `ថ្ងៃនេះ (${displayDDMMYYYY(currentIsoDay)})`;
      }
    } else if (appState.periodFilter === 'year') {
      const targetYear = appState.selectedYear ? String(appState.selectedYear) : currentIsoYear;
      filteredExpenses = (d.expenses || []).filter(e => e.isoDate && e.isoDate.startsWith(targetYear));
      periodLabel = `ឆ្នាំ ${targetYear}`;
    } else if (appState.periodFilter === 'custom' && appState.customStartDate && appState.customEndDate) {
      filteredExpenses = (d.expenses || []).filter(e => e.isoDate >= appState.customStartDate && e.isoDate <= appState.customEndDate);
      periodLabel = `${displayDDMMYYYY(appState.customStartDate)} ➔ ${displayDDMMYYYY(appState.customEndDate)}`;
    }
  }

  // Strict sorting from latest to earliest (31 ➔ 01)
  const sortedExpenses = [...filteredExpenses].sort((a, b) => (b.isoDate || '').localeCompare(a.isoDate || ''));
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
          <div class="flex items-center gap-2">
            <span>កាលបរិច្ឆេទ: <strong class="text-white">${item.date}</strong></span>
            ${item.time ? `<span class="text-amber-300 font-mono">⏰ ${item.time}</span>` : ''}
          </div>
          <span>ប្រភេទ: <strong class="text-slate-300">${item.category || 'ទូទៅ'}</strong></span>
        </div>
      </div>
    `).join('') || `<p class="text-xs text-slate-400 text-center py-6">គ្មានទិន្នន័យចំណាយសម្រាប់ពេលនេះទេ</p>`;
  }

  const footer = document.getElementById('expenses-modal-footer');
  if (footer) {
    footer.innerHTML = `
      <div class="text-slate-300 font-semibold text-xs">
        ចំនួនសរុប: ${sortedExpenses.length} មុខ
      </div>
      <div class="flex items-center gap-1.5 font-mono font-bold text-sm text-rose-400 text-right">
        <span class="text-[11px] text-slate-400 font-sans font-normal">សរុបទឹកប្រាក់:</span>
        <span>${formatUSD(totalAmount)}</span>
      </div>
    `;
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
    const url = customUrl.trim();
    if (url.startsWith('appsheet://')) {
      window.location.href = url;
    } else {
      launchNativeOrWeb('appsheet://', url);
    }
  } else {
    // Direct launch into AppSheet Native App
    window.location.href = 'appsheet://';
    setTimeout(() => {
      // Fallback only if native app not installed
      if (document.visibilityState === 'visible') {
        window.open('https://www.appsheet.com', '_blank');
      }
    }, 1500);
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

// ==========================================
// Celestial Home Icon Glow Switcher (✨ -> ☀️ -> 🌙 Loop)
// ==========================================
let currentCelestialIndex = 0; // 0: ✨ sparkle, 1: ☀️ ray, 2: 🌙 moon

function handleHomeClick(e) {
  // Tap Home to cycle celestial icons AND reload/refresh data smoothly to top!
  if (appState.currentView === 'dashboard') {
    cycleHomeCelestialGlow();
    const main = document.getElementById('main-content');
    if (main) {
      main.scrollTo({ top: 0, behavior: 'smooth' });
    }
    manualReload();
  } else {
    switchView('dashboard');
  }
}

// Native iOS Tap Status Bar / Header to Scroll To Top
function handleHeaderScrollToTop(e) {
  // Only trigger if user didn't tap interactive action buttons inside header
  if (e && e.target && e.target.closest('button, input, select, a, #header-profile-block')) {
    return;
  }
  const main = document.getElementById('main-content');
  if (main) {
    main.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (navigator.vibrate) navigator.vibrate(10);
}

function cycleHomeCelestialGlow() {
  const spk = document.getElementById('home-celestial-sparkle');
  const ray = document.getElementById('home-celestial-ray');
  const moon = document.getElementById('home-celestial-moon');
  if (!spk || !ray || !moon) return;

  currentCelestialIndex = (currentCelestialIndex + 1) % 3;

  spk.classList.add('hidden');
  ray.classList.add('hidden');
  moon.classList.add('hidden');

  if (currentCelestialIndex === 0) {
    spk.classList.remove('hidden');
  } else if (currentCelestialIndex === 1) {
    ray.classList.remove('hidden');
  } else {
    moon.classList.remove('hidden');
  }

  if (navigator.vibrate) navigator.vibrate(15);
}

// ==========================================
// Card Touch Interactions & Helpers
// ==========================================
