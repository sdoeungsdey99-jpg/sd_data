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
    pendingCodTitle: 'លុយនៅអតិថិជន / COD មិនទាន់ទូទាត់',
    pendingCodHint: 'Outstanding Customer Payment',
    netCashTitle: 'សង្ខេបស្ថាពរហិរញ្ញវត្ថុសុទ្ធ (Net Cash Position)',
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
    settingsTitle: '⚙️ ការកំណត់',
    settingsSubtitle: 'កំណត់ការរចនា ភាសា និងសុវត្ថិភាព',
    appearanceSection: 'រចនាប័ទ្ម និងចំណូលចិត្ត',
    appearanceDesc: 'កំណត់ពុម្ពអក្សរ ទំហំអក្សរ ផ្ទាំងរូបភាព និងភាសា',
    accountSection: 'គណនី និងអំពីប្រព័ន្ធ',
    accountDesc: 'គ្រប់គ្រងសុវត្ថិភាព និងព័ត៌មានម្ចាស់គណនី',
    fontTitle: 'ពុម្ពអក្សរ',
    fontDesc: 'ជ្រើសរើសទម្រង់អក្សរងាយស្រួលអាន',
    textSizeTitle: 'ទំហំអក្សរ',
    textSizeDesc: 'តូចបំផុត ➔ ធំបំផុត',
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
    auto: 'ស្វ័យប្រវត្តិ',
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
    diagramSubtitle: 'តួលេខលក់ពិតប្រាកដនៅលើសរសរក្រាបនីមួយៗ',
    layoutTitle: 'ការរៀបចំកាតទិន្នន័យ',
    layoutDesc: 'លំដាប់តម្រៀបកាត និងការកំណត់បង្ហាញកាត',
    layout1: 'ស្តង់ដា',
    layout2: 'ហិរញ្ញវត្ថុ',
    layout3: 'ផ្នែកលក់',
    resetSettingsTitle: 'កំណត់ឡើងវិញទៅទម្រង់ដើម',
    resetSettingsDesc: 'កំណត់ពណ៌ ពុម្ពអក្សរ ទំហំអក្សរ និងការរៀបចំកាតទៅទម្រង់ដើមវិញ',
    resetConfirmTitle: 'កំណត់ទៅទម្រង់ដើម?',
    resetConfirmMsg: 'តើអ្នកពិតជាចង់កំណត់ការកំណត់ទាំងអស់ (ពណ៌, ពុម្ពអក្សរ, ទំហំអក្សរ, ការរៀបចំកាត) ទៅជាទម្រង់ដើមវិញមែនទេ?'
  },
  en: {
    appTitle: 'SD Data',
    securityPrompt: 'Enter 4-Digit Passcode',
    clear: 'Clear',
    pureCashTitle: 'Available Funds',
    pureCashSubtitle: 'ABA + ACLEDA + Cash Wallet',
    usdOnly: 'USD ($)',
    khrOnly: 'KHR (៛)',
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
    settingsTitle: '⚙️ Settings',
    settingsSubtitle: 'Manage appearance, language, and system preferences',
    appearanceSection: 'Appearance & Preferences',
    appearanceDesc: 'Customize typography, text size, wallpapers, and language',
    accountSection: 'Account & System',
    accountDesc: 'Manage passcode security and profile information',
    fontTitle: 'Typography',
    fontDesc: 'Choose preferred readable font family',
    textSizeTitle: 'Text Size',
    textSizeDesc: 'Extra Small ➔ Extra Large',
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
    auto: 'System Auto',
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
    diagramSubtitle: 'Live values labeled on top of each bar',
    layoutTitle: 'Card Layout & Display',
    layoutDesc: 'Card order and display settings',
    layout1: 'Standard',
    layout2: 'Finance',
    layout3: 'Sales',
    resetSettingsTitle: 'Reset to Default',
    resetSettingsDesc: 'Reset color, font, text size, and card layout to defaults',
    resetConfirmTitle: 'Reset to Default?',
    resetConfirmMsg: 'Are you sure you want to reset all customizations (accent, font, text size, layout) to default settings?'
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
  cardLayout: localStorage.getItem('sd_card_layout') || '1', // '1' (standard) | '2' (finance) | '3' (sales)
  activeSettingsItem: null, // null | 'about' | 'accent' | 'fonts' | 'text_size' | 'wallpaper' | 'security'
  pinEnabled: localStorage.getItem('sd_pin_enabled') === 'true', // Default: false (PIN lock screen turned OFF)
  isLocked: localStorage.getItem('sd_pin_enabled') === 'true' && !sessionStorage.getItem('sd_unlocked'),
  enteredPin: '',
  correctPin: localStorage.getItem('sd_pin') || '1234',
  analyticsMonthKey: null, // null defaults to latest month, or 'all', or 'YYYY-MM'
  isAnalyticsDetailMinimized: true,
  isAnalyticsTableMinimized: true,
  analyticsTab: 'all', // 'all' | 'business' | 'expenses'
  hasReadNotifications: false,
  studyWordCount: 5,
  fontFamily: localStorage.getItem('sd_font') || 'font-kantumruy',
  textSize: localStorage.getItem('sd_text_size') || 'md',
  hideSubtitles: localStorage.getItem('sd_hide_subtitles') !== 'false', // Default: true (Hide Subtitles is ON)
  notificationsEnabled: localStorage.getItem('sd_notif_enabled') !== 'false',
  profitNetBoostMode: false,
  cardVisibility: (() => {
    try {
      const vKey = 'sd_card_vis_v5';
      if (!localStorage.getItem(vKey)) {
        localStorage.removeItem('sd_card_visibility');
        localStorage.setItem(vKey, '1');
      }
      const saved = localStorage.getItem('sd_card_visibility');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.pureCash === undefined) parsed.pureCash = false;
        if (parsed.autoHideEmpty === undefined) parsed.autoHideEmpty = false;
        if (parsed.teamSales === undefined) parsed.teamSales = false;
        if (parsed.netCash === undefined) parsed.netCash = false;
        return parsed;
      }
    } catch (_) {}
    return {
      autoHideEmpty: false, // Default: false (Auto-hide empty cards turned OFF)
      pureCash: false, // Default: false (Card 1 turned OFF)
      salesPerformance: true,
      netCash: false, // Default: false (Hidden by default as requested by Brother Sdoeung)
      expenses: true,
      teamSales: false, // Default: false (Hidden by default as requested by Brother Sdoeung)
      tools: true
    };
  })()
};

function applyHideSubtitles(hide) {
  if (hide) {
    document.body.classList.add('hide-subtitles');
    document.documentElement.classList.add('hide-subtitles');
  } else {
    document.body.classList.remove('hide-subtitles');
    document.documentElement.classList.remove('hide-subtitles');
  }
}

function toggleHideSubtitles() {
  appState.hideSubtitles = !appState.hideSubtitles;
  localStorage.setItem('sd_hide_subtitles', appState.hideSubtitles ? 'true' : 'false');
  applyHideSubtitles(appState.hideSubtitles);
  if (navigator.vibrate) navigator.vibrate(12);
  renderCurrentView();
}

function applyAppFont(fontClass) {
  document.body.classList.remove(
    'font-kantumruy', 'font-koh-santepheap', 'font-jakarta',
    'font-battambang', 'font-hanuman', 'font-koulen', 'font-noto-sans-khmer',
    'font-siemreap', 'font-bokor', 'font-khmeros-moul', 'font-freehand',
    'font-sn-simple', 'font-sn-ranger', 'font-sn-writhand', 'font-sn-deydos',
    'font-khmeros-bassac', 'font-sn-nyhorn', 'font-akbalthom-kulen', 'font-akbalthom-kbach'
  );
  document.body.classList.add(fontClass || 'font-kantumruy');
}

function setAppFont(fontClass) {
  appState.fontFamily = fontClass;
  localStorage.setItem('sd_font', fontClass);
  applyAppFont(fontClass);
  renderCurrentView();
}

function applyAppTextSize(size) {
  document.documentElement.classList.remove('text-size-xs', 'text-size-sm', 'text-size-md', 'text-size-lg', 'text-size-xl');
  document.documentElement.classList.add(`text-size-${size || 'md'}`);
}

function setAppTextSize(size) {
  appState.textSize = size;
  localStorage.setItem('sd_text_size', size);
  applyAppTextSize(size);
  renderCurrentView();
}

function setCardLayout(layout) {
  appState.cardLayout = String(layout);
  localStorage.setItem('sd_card_layout', String(layout));
  if (navigator.vibrate) navigator.vibrate(10);
  renderCurrentView();
}

function resetAppSettings() {
  const isKm = appState.language === 'km';
  const confirmed = confirm(isKm 
    ? 'តើអ្នកពិតជាចង់កំណត់ការកំណត់ទាំងអស់ (ពណ៌, Font, ទំហំអក្សរ, និង Layout) ទៅជាទម្រង់ដើមវិញមែនទេ?' 
    : 'Are you sure you want to reset all customizations to default settings?');
  
  if (!confirmed) return;

  // Clear specific custom UI keys
  localStorage.removeItem('sd_theme_accent');
  localStorage.removeItem('sd_font');
  localStorage.removeItem('sd_text_size');
  localStorage.removeItem('sd_hide_subtitles');
  localStorage.removeItem('sd_card_layout');
  localStorage.removeItem('sd_card_visibility');
  localStorage.removeItem('sd_theme');
  localStorage.removeItem('sd_lock_wallpaper');
  localStorage.removeItem('sd_pin_enabled');

  // Reset in appState
  appState.themeAccent = 'orange';
  appState.fontFamily = 'font-kantumruy';
  appState.textSize = 'md';
  appState.hideSubtitles = true;
  appState.cardLayout = '1';
  appState.cardVisibility = {
    autoHideEmpty: false,
    pureCash: false,
    salesPerformance: true,
    netCash: false,
    expenses: true,
    teamSales: false,
    tools: true
  };
  appState.theme = 'dark';
  appState.lockWallpaper = 'wp-deep-mesh';
  appState.pinEnabled = false;
  appState.isLocked = false;

  // Apply to DOM
  applyThemeAccent('orange');
  applyAppFont('font-kantumruy');
  applyAppTextSize('md');
  applyHideSubtitles(true);
  applyTheme('dark');
  applyLockWallpaper('wp-deep-mesh');
  const lockScreen = document.getElementById('lock-screen');
  if (lockScreen) lockScreen.classList.add('hidden');

  if (navigator.vibrate) navigator.vibrate([15, 50, 15]);
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
  if (itemName === 'cardLayout' || itemName === 'cardVisibility') {
    itemName = 'cardPreferences';
  }
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
  lockScreen.classList.remove('wp-deep-mesh', 'wp-midnight-purple', 'wp-pure-oled', 'wp-emerald-aurora', 'wp-velvet-crimson', 'wp-royal-gold', 'wp-cyber-cyan');
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
  applyHideSubtitles(appState.hideSubtitles);
  if (typeof syncHeaderProfileUI === 'function') syncHeaderProfileUI();

  setInterval(updateLockClock, 1000);
  updateLockClock();

  // Listen to Online & Offline connection state changes
  window.addEventListener('online', async () => {
    showToastNotification('📡 មានអ៊ីនធឺណិតឡើងវិញ! កំពុង Sync ទិន្នន័យ...');
    if (typeof syncOfflineQueue === 'function') await syncOfflineQueue();
    DataService.fetchData(false);
    checkOnlineOfflineStatus();
  });
  window.addEventListener('offline', () => {
    showToastNotification('⚠️ ដាច់អ៊ីនធឺណិត! ប្រព័ន្ធបានបើក Offline Mode');
    checkOnlineOfflineStatus();
  });
  setInterval(checkOnlineOfflineStatus, 2000);

  // Purge any legacy leftover demo notifications
  try {
    const rawNotifs = localStorage.getItem('sd_app_notifications');
    if (rawNotifs) {
      const list = JSON.parse(rawNotifs);
      const cleaned = (Array.isArray(list)) ? list.filter(n => n && n.id !== 'notif-welcome' && n.id !== 'notif-offline-ready') : [];
      localStorage.setItem('sd_app_notifications', JSON.stringify(cleaned));
    }
  } catch (_) {}

  if (typeof updateNotifBadgeCount === 'function') updateNotifBadgeCount();

  const urlParams = new URLSearchParams(window.location.search);
  const lockScreen = document.getElementById('lock-screen');
  if (lockScreen) {
    if (!appState.pinEnabled || sessionStorage.getItem('sd_unlocked') === 'true' || urlParams.get('unlock') === '1') {
      lockScreen.classList.add('hidden');
    } else {
      lockScreen.classList.remove('hidden');
    }
  }

  if (urlParams.get('theme')) {
    toggleTheme(urlParams.get('theme'));
  }

  setupPullToRefresh();
  setupSmartDockScroll();
  setupSwipeToBack();

  checkOnboardingGate();
  syncHeaderProfileUI();

  DataService.subscribe(onDataUpdated);
  if (DataService.hasActiveSheet()) {
    DataService.fetchData();
    DataService.startAutoReload(5);
  }

  renderCurrentView();

  if (urlParams.get('master') === '1') {
    openMasterAdminPinModal();
  }

  if (urlParams.get('view')) {
    switchView(urlParams.get('view'));
  }
  if (urlParams.get('drawer') === 'profile') {
    setTimeout(openProfileDrawer, 150);
  }
  if (urlParams.get('drawer_expanded') === '1') {
    setTimeout(() => {
      openProfileDrawer();
      setTimeout(toggleDrawerMemberInfo, 180);
    }, 150);
  }
  if (urlParams.get('customers') === '1') {
    setTimeout(openAllCustomersModal, 150);
  }
  if (urlParams.get('attendance') === '1') {
    openAttendanceModal();
  }
  if (urlParams.get('profile_drawer') === '1') {
    openProfileDrawer();
  }
  if (urlParams.get('searchopen') === '1') {
    openAllCustomersModal();
    toggleCustomersSearch();
  }
  if (urlParams.get('sortmenu') === '1') {
    setTimeout(() => {
      openAllCustomersModal();
      setTimeout(toggleCustomersSortMenu, 120);
    }, 180);
  }
  if (urlParams.get('expand_cust') === '1') {
    setTimeout(() => {
      openAllCustomersModal();
      const first = getAllUniqueCustomers()[0];
      if (first) {
        expandedCustomerKey = first.key;
        renderAllCustomersList();
      }
    }, 250);
  }
  if (urlParams.get('search_learning') === '1') {
    setTimeout(() => {
      switchView('learning');
      openSearchBar();
      const input = document.getElementById('global-search-input');
      if (input) {
        input.value = 'board';
        handleGlobalSearch('board');
      }
    }, 250);
  }
  if (urlParams.get('scroll_learning') === '1') {
    setTimeout(() => {
      switchView('learning');
      loadMoreStudyWords();
    }, 250);
  }
  if (urlParams.get('qr') === '1') {
    setTimeout(openQrPhotosModal, 150);
  }
  if (urlParams.get('notif') === '1') {
    setTimeout(toggleNotificationsModal, 150);
  }
  if (urlParams.get('sales') === '1') {
    setTimeout(openPersonalSalesModal, 250);
  }
  if (urlParams.get('editprofile') === '1') {
    openEditProfileModal();
  }
  if (urlParams.get('settings_item')) {
    switchView('settings');
    toggleSettingsItem(urlParams.get('settings_item'));
  }
  if (urlParams.get('expenses') === '1') {
    setTimeout(() => openExpensesModal(true), 250);
  }
  if (urlParams.get('customers') === '1') {
    setTimeout(openAllCustomersModal, 250);
  }
  if (urlParams.get('customers_scrolled') === '1') {
    setTimeout(() => {
      openAllCustomersModal();
      setTimeout(() => {
        const el = document.getElementById('all-customers-list');
        if (el) {
          el.scrollTop = 350;
          el.dispatchEvent(new Event('scroll'));
        }
      }, 200);
    }, 200);
  }
  if (urlParams.get('submodal')) {
    setTimeout(() => {
      openProfileSubModal(urlParams.get('submodal'));
    }, 150);
  }
});

function onDataUpdated(service) {
  updateReloadBadge(service);
  renderCurrentView();
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('expand_cust') === '1') {
    openAllCustomersModal();
    const custs = getAllUniqueCustomers();
    custs.sort((a, b) => (b.lastIsoDate || '').localeCompare(a.lastIsoDate || ''));
    if (custs.length > 0) {
      expandedCustomerKey = custs[0].key;
      renderAllCustomersList();
    }
  } else {
    const custModal = document.getElementById('all-customers-modal');
    if (custModal && !custModal.classList.contains('hidden')) {
      renderAllCustomersList();
    }
  }

  const notifM = document.getElementById('notif-modal');
  if (notifM && !notifM.classList.contains('hidden') && service.data) {
    renderNotificationsFeed(service.data);
  }
  if (urlParams.get('open_notif') === '1') {
    if (notifM && notifM.classList.contains('hidden')) {
      toggleNotificationsModal();
    }
  }
  if (urlParams.get('open_bank') === '1') {
    setTimeout(openBankModal, 300);
  }
  if (urlParams.get('open_sales') === '1') {
    setTimeout(openPersonalSalesModal, 300);
  }
  if (urlParams.get('open_expenses') === '1') {
    setTimeout(openExpensesModal, 300);
  }
  if (urlParams.get('open_cod') === '1') {
    setTimeout(openCodModal, 300);
  }
  if (urlParams.get('open_profile_search') === '1') {
    openProfileSettingsSearch();
    const q = urlParams.get('search_q');
    if (q) {
      const input = document.getElementById('profile-settings-search-input');
      if (input) input.value = q;
      handleProfileSettingsSearch(q);
    }
  }
  if (urlParams.get('open_drawer') === '1') {
    openProfileDrawer();
    if (urlParams.get('expand_member') === '1') {
      toggleDrawerMemberInfo();
    }
  }
  if (urlParams.get('toggle_boost') === '1') {
    appState.periodFilter = 'month';
    appState.profitNetBoostMode = true;
    renderCurrentView();
  }
  if (urlParams.get('open_expenses') === '1') {
    setTimeout(() => openExpensesModal(true), 100);
  }
  if (urlParams.get('open_customers') === '1') {
    setTimeout(openAllCustomersModal, 100);
  }
  if (urlParams.get('open_customers_scrolled') === '1') {
    setTimeout(() => {
      openAllCustomersModal();
      setTimeout(() => {
        const el = document.getElementById('all-customers-list');
        const summary = document.getElementById('all-customers-summary');
        if (el) {
          el.scrollTop = 400;
          el.dispatchEvent(new Event('scroll'));
        }
        if (summary) summary.classList.add('summary-collapsed');
      }, 150);
    }, 100);
  }
}

function updateReloadBadge(service) {
  const btnReload = document.getElementById('btn-reload');
  const timeText = document.getElementById('reload-time-text');
  const icon = document.getElementById('reload-icon');
  const notifBadge = document.getElementById('notif-badge');

  if (service.isLoading) {
    if (icon) icon.classList.add('animate-spin');
    if (timeText) timeText.textContent = '...';
    // Show only briefly during active loading
    if (btnReload) btnReload.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
  } else {
    if (icon) icon.classList.remove('animate-spin');
    if (service.lastFetched && timeText) {
      timeText.textContent = service.lastFetched.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
    }
    // Option B: Auto-hide unless offline or error
    checkOnlineOfflineStatus();
  }

  if (notifBadge) {
    const storedList = (typeof getStoredNotifications === 'function') ? getStoredNotifications() : [];
    const storedUnread = storedList.filter(n => !n.isRead).length;
    const count = (service.unreadNotifications ? service.unreadNotifications.length : 0) + storedUnread;
    if (count > 0 && !appState.hasReadNotifications) {
      notifBadge.textContent = count > 99 ? '99+' : count;
      notifBadge.classList.remove('hidden');
    } else {
      notifBadge.classList.add('hidden');
    }
  }
}

// 🌐 Option B: Zero-Noise UI (Hidden Always, Show ONLY on No Internet / Connection Error)
function checkOnlineOfflineStatus() {
  const btnReload = document.getElementById('btn-reload');
  if (!btnReload) return;

  // If currently fetching, keep visible
  if (DataService.isLoading) {
    btnReload.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
    return;
  }

  const isOffline = !navigator.onLine || Boolean(DataService.error);

  if (isOffline) {
    // Reveal ONLY when No Internet or Connection Failed
    btnReload.classList.remove('hidden', 'opacity-0', 'pointer-events-none');
    btnReload.classList.add('border-amber-500/40', 'bg-amber-500/10');
  } else {
    // Normal connection: Hide 100% to keep header clean and distraction-free!
    btnReload.classList.add('hidden', 'opacity-0', 'pointer-events-none');
    btnReload.classList.remove('border-amber-500/40', 'bg-amber-500/10');
  }
}

async function manualReload() {
  const indicator = document.getElementById('pull-refresh-indicator');
  if (indicator) {
    indicator.style.height = '35px';
    setTimeout(() => {
      indicator.style.height = '0px';
    }, 800);
  }
  if (navigator.onLine && typeof syncOfflineQueue === 'function') {
    try {
      await syncOfflineQueue();
    } catch (_) {}
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
// Native Swipe Left-to-Right to Return Back 1 Step
// (អូសមកពីឆ្វេងមកស្តាំ ដើម្បីត្រឡប់ ១ ជំហាន)
// ==========================================
function handleBackNavigation() {
  // ជំហានទី ១ (Step 1): បិទផ្ទាំង Popover / Dropdown / Modal ដែលកំពុងបើកមុនគេ
  // 1a. Close any open modal context menu (PDF/Share/Copy)
  const contextMenuTypes = ['sales', 'payables', 'expenses', 'cod'];
  for (const type of contextMenuTypes) {
    const m = document.getElementById(`modal-menu-${type}`);
    if (m && !m.classList.contains('hidden')) {
      closeAllModalContextMenus();
      if (navigator.vibrate) navigator.vibrate(12);
      return true;
    }
  }

  // 1b. Close any open date filter dropdown (Day / Month / Year)
  const filterDropdowns = ['day-dropdown-menu', 'month-dropdown-menu', 'year-dropdown-menu'];
  for (const id of filterDropdowns) {
    const el = document.getElementById(id);
    if (el && !el.classList.contains('hidden')) {
      closeAllFilterDropdowns();
      if (navigator.vibrate) navigator.vibrate(12);
      return true;
    }
  }

  // 1c. Close any open Profile Sub-Modal -> returns to Profile Drawer!
  if (!document.getElementById('all-customers-modal')?.classList?.contains('hidden')) {
    closeAllCustomersModal();
    if (navigator.vibrate) navigator.vibrate(15);
    return true;
  }
  if (!document.getElementById('profile-sub-modal')?.classList?.contains('hidden')) {
    closeProfileSubModal();
    if (navigator.vibrate) navigator.vibrate(15);
    return true;
  }
  if (!document.getElementById('qr-photos-modal')?.classList?.contains('hidden')) {
    closeQrPhotosModal();
    if (navigator.vibrate) navigator.vibrate(15);
    return true;
  }
  if (!document.getElementById('attendance-modal')?.classList?.contains('hidden')) {
    closeAttendanceModal();
    if (navigator.vibrate) navigator.vibrate(15);
    return true;
  }
  if (!document.getElementById('edit-profile-modal')?.classList?.contains('hidden')) {
    closeEditProfileModal();
    if (navigator.vibrate) navigator.vibrate(15);
    return true;
  }
  if (!document.getElementById('honors-modal')?.classList?.contains('hidden')) {
    closeHonorsModal();
    if (navigator.vibrate) navigator.vibrate(15);
    return true;
  }

  // 1d. Close Profile Drawer itself if open -> returns to Home!
  const profDrawer = document.getElementById('profile-drawer-modal');
  if (profDrawer && !profDrawer.classList.contains('hidden')) {
    closeProfileDrawer();
    if (navigator.vibrate) navigator.vibrate(15);
    return true;
  }

  // 1e. Close any other open modal if visible
  const openModals = [
    'honors-modal', 'team-members-modal', 'all-customers-modal', 'attendance-modal', 'new-order-modal', 'new-expense-modal', 'global-search-modal', 'profile-settings-search-modal', 'sales-modal', 'payables-modal', 'expenses-modal',
    'cod-modal', 'bank-modal', 'team-sets-modal', 'notif-modal', 'about-modal', 'change-pin-modal', 'shortcut-modal'
  ];
  for (const id of openModals) {
    const el = document.getElementById(id);
    if (el && !el.classList.contains('hidden')) {
      el.classList.add('hidden');
      if (id === 'sales-modal') {
        const det = document.getElementById('sales-detail-view');
        if (det) det.classList.add('hidden');
      }
      setDockVisible(true);
      if (navigator.vibrate) navigator.vibrate(15);
      return true;
    }
  }

  // ជំហានទី ២ (Step 2): បង្រួមផ្ទាំងរង (Sub-view / Accordion) ក្នុងទំព័រនោះ (ត្រឡប់ ១ ជំហាន)
  // 2a. If in Settings and an accordion item (textSize, fonts, accent, wallpaper, cardLayout) is open -> collapse it first!
  if (appState.currentView === 'settings' && appState.activeSettingsItem) {
    appState.activeSettingsItem = null;
    renderCurrentView();
    if (navigator.vibrate) navigator.vibrate(15);
    return true;
  }

  // 2b. If in Analytics and viewing a specific month drill-down -> step back to All Months first!
  if (appState.currentView === 'analytics' && appState.analyticsMonthKey && appState.analyticsMonthKey !== 'all') {
    setAnalyticsMonth('all');
    if (navigator.vibrate) navigator.vibrate(15);
    return true;
  }

  // 2c. If in Settings, step back to Dashboard
  if (appState.currentView === 'settings') {
    switchView('dashboard');
    if (navigator.vibrate) navigator.vibrate(15);
    return true;
  }

  // 2d. If at top level of non-dashboard view (Profile, Analytics, Learning), return to Home (dashboard)
  if (appState.currentView !== 'dashboard') {
    switchView('dashboard');
    if (navigator.vibrate) navigator.vibrate(20);
    return true;
  }
  return false;
}

function isAnyDrilldownModalOpen() {
  const modalIds = [
    'team-members-modal', 'new-order-modal', 'new-expense-modal',
    'global-search-modal', 'sales-modal', 'payables-modal', 'expenses-modal',
    'cod-modal', 'bank-modal', 'team-sets-modal', 'notif-modal', 'all-customers-modal', 'attendance-modal',
    'profile-sub-modal', 'qr-photos-modal', 'edit-profile-modal',
    'about-modal', 'change-pin-modal', 'shortcut-modal'
  ];
  for (const id of modalIds) {
    const el = document.getElementById(id);
    if (el && !el.classList.contains('hidden')) return true;
  }
  return false;
}

function isProfileDrawerOpen() {
  const profDrawer = document.getElementById('profile-drawer-modal');
  return !!(profDrawer && !profDrawer.classList.contains('hidden'));
}

function isProfileSubModalOpen() {
  const ids = ['all-customers-modal', 'profile-sub-modal', 'qr-photos-modal', 'attendance-modal', 'edit-profile-modal'];
  for (const id of ids) {
    const el = document.getElementById(id);
    if (el && !el.classList.contains('hidden')) return true;
  }
  return false;
}

function isAnyModalOrDrawerOpen() {
  return isAnyDrilldownModalOpen() || isProfileDrawerOpen();
}

function setupSwipeToBack() {
  let touchStartX = 0;
  let touchStartY = 0;
  let isPotentialSwipe = false;
  let swipeOrigin = 'edge-left'; // 'edge-left', 'edge-right', 'profile-submodal', or 'drawer'

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

    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    const isDrawerOpen = isProfileDrawerOpen();
    const isSubModalOpen = isProfileSubModalOpen();

    if (isSubModalOpen) {
      // 1. Touching anywhere when a profile submodal is open (Books & Notes, Customers, Attendance, QR...)
      isPotentialSwipe = true;
      swipeOrigin = 'profile-submodal';
    } else if (touchStartX <= 60) {
      // 2. Started from screen left edge (<= 60px)
      isPotentialSwipe = true;
      swipeOrigin = 'edge-left';
    } else if (touchStartX >= screenWidth - 60) {
      // 3. Started from screen right edge (within 60px from right)
      isPotentialSwipe = true;
      swipeOrigin = 'edge-right';
    } else if (isDrawerOpen && e.target && e.target.closest('#profile-drawer-modal')) {
      // 4. Touching anywhere on or inside Profile Dashboard Drawer
      isPotentialSwipe = true;
      swipeOrigin = 'drawer';
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

    // If vertical scrolling strongly dominates, cancel swipe
    if (Math.abs(deltaY) > 40 && Math.abs(deltaY) > Math.abs(deltaX) * 1.5) {
      isPotentialSwipe = false;
    }
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    if (!isPotentialSwipe || !e.changedTouches || e.changedTouches.length !== 1) return;
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;
    const isDrawerOpen = isProfileDrawerOpen();
    const isSubModalOpen = isProfileSubModalOpen();

    // Case 1: Left-to-right swipe (deltaX >= 55px) -> Back / Return 1 Step
    if (deltaX >= 55 && deltaX > Math.abs(deltaY) * 1.2) {
      if (isSubModalOpen || swipeOrigin === 'profile-submodal') {
        // Step back from Profile Sub-Modal (Books & Notes, Customers, Attendance...) to Profile Drawer
        handleBackNavigation();
      } else if (isDrawerOpen || swipeOrigin === 'drawer') {
        // Step back from Profile Drawer to Dashboard
        closeProfileDrawer();
        if (navigator.vibrate) try { navigator.vibrate(15); } catch (_) {}
      } else if (swipeOrigin === 'edge-left') {
        if (isAnyDrilldownModalOpen()) {
          // If a drilldown modal is open, swipe from left edge closes/steps back
          handleBackNavigation();
        } else if (!isDrawerOpen) {
          // If standing on any of the 5 Dock views and drawer is closed, swipe from left edge opens Profile Dashboard
          if (typeof openProfileDrawer === 'function') {
            openProfileDrawer();
            if (navigator.vibrate) try { navigator.vibrate(20); } catch (_) {}
          }
        }
      }
    } 
    // Case 2: Right-to-left swipe (deltaX <= -55px)
    else if (deltaX <= -55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (isDrawerOpen && !isSubModalOpen) {
        // If Profile Dashboard is open, swiping right-to-left also closes it
        closeProfileDrawer();
        if (navigator.vibrate) try { navigator.vibrate(15); } catch (_) {}
      } else if (swipeOrigin === 'edge-right') {
        // If swiping from the screen right edge, trigger back navigation
        handleBackNavigation();
        if (navigator.vibrate) try { navigator.vibrate(15); } catch (_) {}
      }
    }
    isPotentialSwipe = false;
  }, { passive: true });

  // Mouse drag support for Desktop Preview testing
  let mouseStartX = 0;
  let mouseStartY = 0;
  let isMouseDown = false;
  let mouseOrigin = 'edge-left';

  document.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    if (e.target && e.target.closest && e.target.closest('input, textarea, select, button, a')) return;

    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    const isDrawerOpen = isProfileDrawerOpen();
    const isSubModalOpen = isProfileSubModalOpen();

    if (isSubModalOpen) {
      mouseStartX = e.clientX;
      mouseStartY = e.clientY;
      isMouseDown = true;
      mouseOrigin = 'profile-submodal';
    } else if (e.clientX <= 60) {
      mouseStartX = e.clientX;
      mouseStartY = e.clientY;
      isMouseDown = true;
      mouseOrigin = 'edge-left';
    } else if (e.clientX >= screenWidth - 60) {
      mouseStartX = e.clientX;
      mouseStartY = e.clientY;
      isMouseDown = true;
      mouseOrigin = 'edge-right';
    } else if (isDrawerOpen && e.target && e.target.closest('#profile-drawer-modal')) {
      mouseStartX = e.clientX;
      mouseStartY = e.clientY;
      isMouseDown = true;
      mouseOrigin = 'drawer';
    }
  });

  document.addEventListener('mouseup', (e) => {
    if (!isMouseDown) return;
    const deltaX = e.clientX - mouseStartX;
    const deltaY = e.clientY - mouseStartY;
    const isDrawerOpen = isProfileDrawerOpen();
    const isSubModalOpen = isProfileSubModalOpen();

    if (deltaX >= 55 && deltaX > Math.abs(deltaY) * 1.2) {
      if (isSubModalOpen || mouseOrigin === 'profile-submodal') {
        handleBackNavigation();
      } else if (isDrawerOpen || mouseOrigin === 'drawer') {
        closeProfileDrawer();
      } else if (mouseOrigin === 'edge-left') {
        if (isAnyDrilldownModalOpen()) {
          handleBackNavigation();
        } else if (!isDrawerOpen) {
          if (typeof openProfileDrawer === 'function') {
            openProfileDrawer();
          }
        }
      }
    } else if (deltaX <= -55 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (isDrawerOpen && !isSubModalOpen) {
        closeProfileDrawer();
      } else if (mouseOrigin === 'edge-right') {
        handleBackNavigation();
      }
    }
    isMouseDown = false;
  });
}

function isDialogModalOpen() {
  const ids = [
    'edit-profile-modal',
    'profile-sub-modal',
    'qr-photos-modal',
    'change-pin-modal',
    'shortcut-modal',
    'about-modal',
    'attendance-modal',
    'global-search-modal',
    'profile-settings-search-modal'
  ];
  return ids.some(id => {
    const el = document.getElementById(id);
    return el && !el.classList.contains('hidden');
  });
}

function setDockVisible(visible) {
  if (visible && isDialogModalOpen()) return;
  const dock = document.getElementById('bottom-dock');
  const dockBlur = document.getElementById('dock-blur-backdrop');
  if (visible) {
    if (dock) dock.classList.remove('dock-hidden');
    if (dockBlur) dockBlur.classList.remove('opacity-0');
  } else {
    if (dock) dock.classList.add('dock-hidden');
    if (dockBlur) dockBlur.classList.add('opacity-0');
  }
}

// Smart Dock & Sticky Filter Bar iOS Auto-Hide:
// - Scrolling content down (finger moving up, going deeper) -> Dock & Filter Bar hide smoothly
// - Scrolling content up (finger moving down, going towards top) or screen stops/still -> Dock restores smoothly
function hookScrollableForDock(el, isMain = false) {
  if (!el || el._dockHooked) return;
  el._dockHooked = true;

  const dock = document.getElementById('bottom-dock');
  const filterBar = document.getElementById('sticky-filter-bar');
  if (!dock) return;

  let lastScrollTop = el.scrollTop || 0;
  let scrollIdleTimer = null;

  el.addEventListener('scroll', () => {
    const currentScrollTop = el.scrollTop;

    // 0. Suppress scroll-triggered layout shifts during accordion collapse / expand
    if (window.__isTogglingAnalyticsCollapse) {
      lastScrollTop = currentScrollTop;
      return;
    }

    const diff = currentScrollTop - lastScrollTop;

    // Ignore abnormal layout-resize jumps (greater than 120px in a single tick)
    if (Math.abs(diff) > 120) {
      lastScrollTop = currentScrollTop;
      return;
    }

    // Analytics Sticky Header: Locked style when scrolled
    if (isMain && appState.currentView === 'analytics') {
      const analyticsHeader = document.getElementById('analytics-sticky-header');
      if (analyticsHeader) {
        if (currentScrollTop > 10) {
          if (!analyticsHeader.classList.contains('analytics-header-locked')) {
            analyticsHeader.classList.add('analytics-header-locked');
          }
        } else if (currentScrollTop <= 2) {
          if (analyticsHeader.classList.contains('analytics-header-locked')) {
            analyticsHeader.classList.remove('analytics-header-locked');
          }
        }
      }
    }

    // 1. Scrolling content down (finger moving up) -> Smoothly hide Dock & Filter Bar (Home & Analytics)
    if (diff > 8 && currentScrollTop > 30) {
      setDockVisible(false);
      if (isMain && filterBar) filterBar.classList.add('filter-hidden');
      if (isMain && appState.currentView === 'analytics') {
        const analyticsHeader = document.getElementById('analytics-sticky-header');
        if (analyticsHeader && !analyticsHeader.classList.contains('filter-hidden')) {
          const analyticsMenu = document.getElementById('analytics-view-dropdown-menu');
          if (analyticsMenu) analyticsMenu.classList.add('hidden');
          analyticsHeader.classList.add('filter-hidden');
        }
      }
      if (el.id === 'expenses-modal-list') {
        const expFilterBar = document.getElementById('expenses-modal-date-filter-bar');
        if (expFilterBar && !expFilterBar.classList.contains('filter-hidden')) {
          closeAllExpensesDropdowns();
          expFilterBar.classList.add('filter-hidden');
        }
      }
    }
    // 2. Scrolling content up (finger moving down) or near top -> Immediately restore Dock & Filter Bar
    else if (diff < -6 || currentScrollTop <= 15) {
      if (!isDialogModalOpen()) {
        setDockVisible(true);
        if (isMain && filterBar && appState.currentView === 'dashboard') {
          filterBar.classList.remove('filter-hidden');
        }
        if (isMain && appState.currentView === 'analytics') {
          const analyticsHeader = document.getElementById('analytics-sticky-header');
          if (analyticsHeader && analyticsHeader.classList.contains('filter-hidden')) {
            analyticsHeader.classList.remove('filter-hidden');
          }
        }
        if (el.id === 'expenses-modal-list') {
          const expFilterBar = document.getElementById('expenses-modal-date-filter-bar');
          if (expFilterBar && expFilterBar.classList.contains('filter-hidden')) {
            expFilterBar.classList.remove('filter-hidden');
          }
        }
      }
    }

    lastScrollTop = currentScrollTop;

    // 3. Auto-load 5 more words when near bottom in Study / Learning view
    if (isMain && appState.currentView === 'learning') {
      const scrollBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
      if (scrollBottom < 260) {
        loadMoreStudyWords();
      }
    }

    // 4. When scrolling stops / screen is still -> Smoothly restore Dock (except when deep inside profile drawer or in dialog modal)
    clearTimeout(scrollIdleTimer);
    scrollIdleTimer = setTimeout(() => {
      if (el.id === 'profile-drawer-content' && el.scrollTop > 25) return;
      if (isDialogModalOpen()) return;
      setDockVisible(true);
    }, 450);
  }, { passive: true });
}

function setupSmartDockScroll() {
  setDockVisible(true);

  const main = document.getElementById('main-content');
  if (main) hookScrollableForDock(main, true);

  const scrollableIds = [
    'notif-feed-list',
    'sales-modal-list',
    'expenses-modal-list',
    'cod-modal-table-container',
    'bank-modal-list',
    'payables-modal-list',
    'all-customers-list',
    'team-members-list',
    'new-order-modal-body',
    'profile-drawer-content',
    'team-sets-modal-table-container',
    'search-results-container',
    'profile-settings-search-results'
  ];

  scrollableIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) hookScrollableForDock(el, false);
  });
}

function handleHeroCardTap(event) {
  if (window.getSelection) {
    try { window.getSelection().removeAllRanges(); } catch (e) {}
  }
  toggleHideBalance();
}

function toggleHideBalance() {
  if (window.getSelection) {
    try { window.getSelection().removeAllRanges(); } catch (e) {}
  }
  appState.hideBalance = !appState.hideBalance;
  if (navigator.vibrate) navigator.vibrate(12);

  // Instant in-place DOM update without tearing down the element (prevents WebKit stuck tap highlight)
  const heroCard = document.getElementById('hero-balance-card');
  const eyeBtn = document.getElementById('btn-hero-eye');
  const usdElem = document.getElementById('hero-val-usd');
  const khrElem = document.getElementById('hero-val-khr');

  if (heroCard && eyeBtn && usdElem && khrElem && DataService.data) {
    const d = DataService.data;
    usdElem.textContent = appState.hideBalance ? '***,*** $' : formatUSD(d.bank.pureUsdTotal);
    khrElem.textContent = appState.hideBalance ? '***,*** ៛' : formatKHR(d.bank.pureKhrTotal);
    eyeBtn.innerHTML = `<i data-lucide="${appState.hideBalance ? 'eye-off' : 'eye'}" class="w-4 h-4 pointer-events-none"></i>`;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  renderCurrentView();
}

function toggleProfitNetBoost() {
  if (appState.periodFilter !== 'month' && appState.periodFilter !== 'year') return;
  appState.profitNetBoostMode = !appState.profitNetBoostMode;
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
  setDockVisible(false);
  if (input) {
    if (appState.currentView === 'learning') {
      input.placeholder = 'ស្វែងរកពាក្យអង់គ្លេស, អាន, ខ្មែរ (Vocabulary)...';
    } else {
      input.placeholder = 'ស្វែងរកអតិថិជន, Order, ចំណាយ...';
    }
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
  setDockVisible(true);
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

  const isLearning = (appState.currentView === 'learning');
  const q = (query || '').trim().toLowerCase();
  if (!q) {
    if (isLearning) {
      container.innerHTML = `
        <div class="py-16 text-center text-slate-400">
          <i data-lucide="book-open" class="w-8 h-8 mx-auto mb-2 opacity-40 text-orange-400"></i>
          <p class="text-xs">វាយបញ្ចូលពាក្យដើម្បីស្វែងរកក្នុងមេរៀន...</p>
          <p class="text-[10px] text-slate-500 mt-1">ស្វែងរកពាក្យអង់គ្លេស, ការបញ្ចេញសំឡេង, ប្រែសម្រួលជាភាសាខ្មែរ ឬឧទាហរណ៍</p>
        </div>
      `;
    } else {
      container.innerHTML = `
        <div class="py-16 text-center text-slate-400">
          <i data-lucide="search" class="w-8 h-8 mx-auto mb-2 opacity-40 text-orange-400"></i>
          <p class="text-xs">វាយបញ្ចូលពាក្យដើម្បីស្វែងរកទិន្នន័យ...</p>
          <p class="text-[10px] text-slate-500 mt-1">ស្វែងរកអតិថិជន, លេខទូរស័ព្ទ, ទីតាំង, Order, ឬការចំណាយពី Google Sheet</p>
        </div>
      `;
    }
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Option: Search in Vocabulary strictly when in Dock សិក្សា (Learning)
  if (isLearning) {
    const learnedCount = appState.studyWordCount || 5;
    const matchedWords = DAILY_ENGLISH_WORDS.map((w, idx) => ({
      ...w,
      wordIndex: idx + 1,
      isLearned: idx < learnedCount
    })).filter(w => {
      return (w.en && w.en.toLowerCase().includes(q)) ||
             (w.km && w.km.toLowerCase().includes(q)) ||
             (w.pron && w.pron.toLowerCase().includes(q)) ||
             (w.pos && w.pos.toLowerCase().includes(q)) ||
             (w.ex && w.ex.toLowerCase().includes(q));
    });

    matchedWords.sort((a, b) => {
      if (a.isLearned === b.isLearned) return a.wordIndex - b.wordIndex;
      return a.isLearned ? -1 : 1;
    });

    if (matchedWords.length === 0) {
      container.innerHTML = `
        <div class="py-16 text-center text-slate-400">
          <i data-lucide="alert-circle" class="w-8 h-8 mx-auto mb-2 opacity-40 text-rose-400"></i>
          <p class="text-xs">រកមិនឃើញពាក្យដែលត្រូវនឹង “${query}” ទេ</p>
          <p class="text-[10px] text-slate-500 mt-1">សូមសាកល្បងវាយពាក្យអង់គ្លេស ឬអត្ថន័យខ្មែរផ្សេងទៀត</p>
        </div>
      `;
      if (window.lucide) window.lucide.createIcons();
      return;
    }

    let html = `
      <div class="text-[11px] text-slate-400 pb-2 border-b border-white/10 flex items-center justify-between">
        <span>លទ្ធផលស្វែងរក: <strong class="text-white">${matchedWords.length}</strong> ពាក្យ</span>
        <span class="text-[10px] text-orange-400 font-medium">📚 មេរៀនភាសាអង់គ្លេស</span>
      </div>
      <div class="pt-2 space-y-2.5">
        ${matchedWords.map(w => `
          <div class="ios-glass-card rounded-2xl p-3.5 border border-white/10 flex items-start gap-3 transition">
            <div class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 font-bold text-sm flex items-center justify-center shrink-0">
              ${w.wordIndex}
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center justify-between gap-2 mb-1">
                <div class="flex items-baseline gap-2 flex-wrap">
                  <h4 class="font-bold text-base text-white tracking-wide">${highlightSearchText(w.en, q)}</h4>
                  <span class="text-xs text-orange-400 font-medium">(${highlightSearchText(w.pron, q)})</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-slate-400">${w.pos}</span>
                </div>
                ${w.isLearned ? `
                  <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold shrink-0">
                    ✓ បានរៀន
                  </span>
                ` : `
                  <span class="px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-slate-400 text-[10px] font-medium shrink-0">
                    ពាក្យបន្ទាប់
                  </span>
                `}
              </div>
              <p class="text-xs text-emerald-300 font-semibold mb-1">👉 ${highlightSearchText(w.km, q)}</p>
              <div class="p-2 rounded-xl bg-black/30 border border-white/5">
                <p class="text-[11px] text-slate-300 italic font-sans">“${highlightSearchText(w.ex, q)}”</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    container.innerHTML = html;
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
           (s.note && s.note.toLowerCase().includes(q)) ||
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
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="font-bold text-xs text-white">${highlightSearchText(item.customer, q)}</span>
                  <span class="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 font-mono">${highlightSearchText(item.orderId, q)}</span>
                  ${item.note && item.note.includes('[SG Pro]') ? '<span class="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/25 text-purple-300 font-bold border border-purple-500/40">SG Pro</span>' : ''}
                </div>
                <span class="font-mono text-emerald-400 font-bold text-xs">${formatUSD(item.totalAmount)}</span>
              </div>
              <div class="text-[11px] text-slate-400 flex items-center justify-between">
                <span>📍 ${highlightSearchText(item.location || '—', q)}</span>
                <span>📞 ${highlightSearchText(item.phone || '—', q)}</span>
              </div>
              ${item.note ? `<div class="text-[10px] text-slate-400 italic">📝 ${highlightSearchText(item.note, q)}</div>` : ''}
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
function closeAllModals() {
  const modals = [
    'sales-modal',
    'payables-modal',
    'expenses-modal',
    'cod-modal',
    'bank-modal',
    'team-sets-modal',
    'notif-modal',
    'all-customers-modal',
    'team-members-modal',
    'profile-drawer-modal',
    'edit-profile-modal',
    'qr-photos-modal',
    'profile-sub-modal',
    'about-modal',
    'change-pin-modal',
    'shortcut-modal',
    'global-search-modal',
    'profile-settings-search-modal',
    'new-order-modal',
    'new-expense-modal',
    'daily-report-modal',
    'honors-modal'
  ];
  modals.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  });
  const drawerPanel = document.getElementById('profile-drawer-panel');
  if (drawerPanel) {
    drawerPanel.classList.remove('translate-x-0');
    drawerPanel.classList.add('-translate-x-full');
  }
  const dock = document.getElementById('bottom-dock');
  if (dock) dock.classList.remove('dock-profile-active');
}

function switchView(viewName, shouldReload = false) {
  closeAllModals();
  if (viewName === 'profile') {
    openProfileDrawer();
    return;
  }
  const isAlreadyDashboard = (appState.currentView === 'dashboard' && viewName === 'dashboard');
  if (appState.currentView !== viewName) {
    appState.previousView = appState.currentView;
  }
  appState.currentView = viewName;
  if (viewName === 'analytics') {
    appState.analyticsMonthKey = null; // Always open into 1-month drill-down
    appState.isAnalyticsDetailMinimized = true;
    appState.isAnalyticsTableMinimized = true;
  }

  const main = document.getElementById('main-content');
  if (main) {
    main.scrollTop = 0;
    if (viewName === 'settings') {
      main.classList.add('settings-view-active');
    } else {
      main.classList.remove('settings-view-active');
    }
    if (viewName === 'analytics') {
      main.classList.add('analytics-view-active');
    } else {
      main.classList.remove('analytics-view-active');
    }
  }

  setDockVisible(true);

  if (viewName === 'dashboard' && shouldReload) {
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

  // Profile block & Back button in Header
  const headerProfile = document.getElementById('header-profile-block');
  const headerProfileBack = document.getElementById('header-profile-back');
  const headerNotifWrapper = document.getElementById('header-notif-wrapper');
  const btnReload = document.getElementById('btn-reload');

  if (headerProfile) {
    if (viewName === 'settings') {
      headerProfile.classList.remove('hidden');
      headerProfile.classList.add('invisible', 'pointer-events-none');
    } else if (viewName === 'profile') {
      headerProfile.classList.add('hidden');
    } else {
      headerProfile.classList.remove('hidden', 'invisible', 'pointer-events-none');
    }
  }

  if (headerProfileBack) {
    if (viewName === 'profile') {
      headerProfileBack.classList.remove('hidden');
      headerProfileBack.classList.add('flex');
    } else {
      headerProfileBack.classList.add('hidden');
      headerProfileBack.classList.remove('flex');
    }
  }

  // Remove Notification Button ONLY when inside Profile View (ទុកតែ Button Search ប៉ុណ្ណោះ)
  if (headerNotifWrapper) {
    if (viewName === 'profile') {
      headerNotifWrapper.classList.add('hidden');
    } else {
      headerNotifWrapper.classList.remove('hidden');
    }
  }

  if (btnReload) {
    if (viewName === 'profile') {
      btnReload.classList.add('hidden');
    } else {
      btnReload.classList.remove('hidden');
    }
  }

  ['dashboard', 'analytics', 'learning', 'settings'].forEach(v => {
    const btn = document.getElementById(`dock-btn-${v}`);
    if (btn) {
      if (v === viewName) {
        btn.classList.add('active-tab');
      } else {
        btn.classList.remove('active-tab');
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

function updateFilterBackdrop() {
  const backdrop = document.getElementById('filter-dropdown-backdrop');
  if (!backdrop) return;
  const anyOpen = ['day-dropdown-menu', 'month-dropdown-menu', 'year-dropdown-menu'].some(id => {
    const el = document.getElementById(id);
    return el && !el.classList.contains('hidden');
  });
  if (anyOpen) {
    backdrop.classList.remove('hidden');
  } else {
    backdrop.classList.add('hidden');
  }
}
window.updateFilterBackdrop = updateFilterBackdrop;

function toggleDayDropdown(event) {
  if (event) event.stopPropagation();
  closeAllFilterDropdowns('day');
  renderMiniCalendar();
  const menu = document.getElementById('day-dropdown-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
  updateFilterBackdrop();
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
  updateFilterBackdrop();
}

let monthPickerYear = (new Date()).getFullYear();

function navigateMonthPickerYear(delta, event) {
  if (event) event.stopPropagation();
  monthPickerYear += delta;
  renderMonthDropdownMenu();
}

function renderMonthDropdownMenu() {
  const menu = document.getElementById('month-dropdown-menu');
  if (!menu) return;

  const isKm = appState.language === 'km';
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

  const yearHeader = `
    <div class="flex items-center justify-between pb-2 mb-1.5 border-b border-white/10 px-1">
      <button type="button" onclick="navigateMonthPickerYear(-1, event)" class="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition" title="ឆ្នាំមុន">
        <i data-lucide="chevron-left" class="w-4 h-4"></i>
      </button>
      <span class="text-xs font-bold font-mono text-white">ឆ្នាំ ${monthPickerYear}</span>
      <button type="button" onclick="navigateMonthPickerYear(1, event)" class="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition" title="ឆ្នាំបន្ទាប់">
        <i data-lucide="chevron-right" class="w-4 h-4"></i>
      </button>
    </div>
  `;

  menu.innerHTML = yearHeader + monthsList.map(m => {
    const isSelected = m.num === activeMonthNum && String(monthPickerYear) === (appState.selectedMonthKey ? appState.selectedMonthKey.split('-')[0] : String(now.getFullYear()));
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

  const yr = monthPickerYear || appState.selectedYear || (new Date()).getFullYear();
  appState.selectedYear = yr;
  const paddedMonth = String(mNum).padStart(2, '0');
  appState.selectedMonthKey = `${yr}-${paddedMonth}`;
  
  const labelEl = document.getElementById('month-pill-label');
  if (labelEl) {
    labelEl.textContent = `(${paddedMonth}/${yr})`;
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
  updateFilterBackdrop();
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
  updateFilterBackdrop();
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
      setTimeout(() => {
        const activeBtn = document.querySelector('#analytics-month-tabs .analytics-month-active');
        const tabsRow = document.getElementById('analytics-month-tabs');
        if (activeBtn && tabsRow) {
          const offsetLeft = activeBtn.offsetLeft - (tabsRow.clientWidth / 2) + (activeBtn.clientWidth / 2);
          tabsRow.scrollTo({ left: Math.max(0, offsetLeft), behavior: 'smooth' });
        }
      }, 50);
      break;
    case 'learning':
      container.innerHTML = getLearningViewHTML();
      break;
    case 'settings':
      container.innerHTML = getSettingsViewHTML();
      break;
    case 'profile':
      container.innerHTML = getProfileViewHTML();
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
    if (DataService.error) {
      return `
        <div class="py-20 flex flex-col items-center justify-center text-center px-4">
          <div class="w-12 h-12 rounded-2xl bg-rose-500/20 text-rose-400 flex items-center justify-center mb-3 border border-rose-500/30">
            <i data-lucide="alert-triangle" class="w-6 h-6"></i>
          </div>
          <p class="text-sm font-bold text-white mb-1">មិនអាចទាញទិន្នន័យបានទេ</p>
          <p class="text-xs text-rose-300 font-mono mb-4">${DataService.error}</p>
          <button onclick="DataService.fetchData()" class="px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold active:scale-95 transition shadow-lg shadow-orange-500/20">
            ព្យាយាមម្តងទៀត (Retry)
          </button>
        </div>
      `;
    }
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
    activePeriodDisplay = `(${parts[1]}/${parts[0]})`;
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
  const monthlyBoostAmt = (d.boostByMonth && d.boostByMonth[selectedMonthInt]) || 0;
  const monthlyBudgetGoal = parseFloat(localStorage.getItem('sd_monthly_budget')) || 450.0;
  const remainingBudget = monthlyBudgetGoal - monthlyTotalExpenseAmt;

  // Dynamic Expense Card Title based on selected Day / Month / Year
  const isEn = appState.language === 'en';
  let dynamicExpenseTitle = t('todayExpTitle');
  if (appState.periodFilter === 'today') {
    if (appState.daySubFilter === 'specific' && appState.specificDate) {
      const dayNum = parseInt(appState.specificDate.split('-')[2], 10) || appState.specificDate.split('-')[2];
      dynamicExpenseTitle = isEn ? `Expenses (Day ${dayNum})` : `ការចំណាយថ្ងៃទី ${dayNum}`;
    } else if (appState.daySubFilter === 'yesterday') {
      dynamicExpenseTitle = isEn ? "Yesterday's Expenses" : 'ការចំណាយថ្ងៃម្សិលមិញ';
    } else {
      dynamicExpenseTitle = isEn ? "Today's Expenses" : 'ការចំណាយថ្ងៃនេះ';
    }
  } else if (appState.periodFilter === 'month') {
    const targetMonth = appState.selectedMonthKey || currentIsoMonth;
    const parts = targetMonth.split('-');
    dynamicExpenseTitle = isEn ? `Expenses (${parts[1]}/${parts[0]})` : `ការចំណាយ (${parts[1]}/${parts[0]})`;
  } else if (appState.periodFilter === 'year') {
    const targetYear = appState.selectedYear ? String(appState.selectedYear) : currentIsoYear;
    dynamicExpenseTitle = isEn ? `Expenses (${targetYear})` : `ការចំណាយឆ្នាំ ${targetYear}`;
  } else if (appState.periodFilter === 'custom' && appState.customStartDate && appState.customEndDate) {
    dynamicExpenseTitle = isEn
      ? `Expenses (${displayDDMMYYYY(appState.customStartDate)} - ${displayDDMMYYYY(appState.customEndDate)})`
      : `ការចំណាយ (${displayDDMMYYYY(appState.customStartDate)} - ${displayDDMMYYYY(appState.customEndDate)})`;
  }

  // Strict sorting from latest to earliest (Day 31 ➔ 01, Month 12 ➔ 01, latest row first)
  const sortedFilteredExpenses = [...filteredExpenses].sort((a, b) => {
    const cmp = (b.isoDate || '').localeCompare(a.isoDate || '');
    if (cmp !== 0) return cmp;
    return (b.rowIndex || 0) - (a.rowIndex || 0);
  });

  const totalBoxQty = filteredSales.reduce((acc, cur) => acc + (cur.totalBoxQty || 0), 0);
  const totalRevenue = filteredSales.reduce((acc, cur) => acc + (cur.totalAmount || 0), 0);
  const totalGrossProfit = filteredSales.reduce((acc, cur) => acc + (cur.profit || 0), 0);
  const totalExpenseAmt = sortedFilteredExpenses.reduce((acc, cur) => acc + (cur.amount || 0), 0);

  const pureUsd = d.bank.pureUsdTotal;
  const pureKhr = d.bank.pureKhrTotal;
  const netCash = d.bank.netCashPosition;

  const cardPureCash = `
    <!-- HERO BALANCE CARD (ទឹកប្រាក់ដែលមាន - ប៉ះលើកាតត្រង់ណាក៏បានដើម្បីបិទ, ប៉ះលើភ្នែកដើម្បីបើក) -->
    <div id="hero-balance-card" 
         onclick="handleHeroCardTap(event)"
         class="ios-glass-card rounded-3xl p-4 relative liquid-orange-glow select-none cursor-pointer transition-all duration-200 overflow-hidden"
         style="-webkit-touch-callout: none; -webkit-user-select: none; user-select: none; -webkit-tap-highlight-color: transparent;">
      <div class="absolute -top-12 -right-12 w-44 h-44 bg-orange-500/20 rounded-full blur-2xl pointer-events-none"></div>

      <div class="flex items-center justify-between mb-3 select-none" style="-webkit-user-select: none; user-select: none;">
        <div class="flex items-center gap-2.5 select-none" style="-webkit-user-select: none; user-select: none;">
          <div class="w-8 h-8 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 border border-orange-500/30 shrink-0">
            <i data-lucide="wallet" class="w-4 h-4 pointer-events-none"></i>
          </div>
          <div class="select-none" style="-webkit-user-select: none; user-select: none;">
            <h3 class="font-bold text-xs uppercase text-white leading-tight select-none">
              ${t('pureCashTitle')}
            </h3>
            <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 select-none card-subtitle">${t('pureCashSubtitle')}</p>
          </div>
        </div>
        <!-- Eye Button matching Action UI (No tap clipping or black highlight) -->
        <button id="btn-hero-eye" 
                type="button"
                tabindex="-1"
                onclick="event.stopPropagation(); toggleHideBalance();" 
                class="w-8 h-8 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition shadow-sm select-none overflow-hidden shrink-0 outline-none"
                style="-webkit-tap-highlight-color: transparent !important; -webkit-touch-callout: none !important; -webkit-user-select: none !important; user-select: none !important; outline: none !important;"
                title="បិទ/បង្ហាញទឹកប្រាក់">
          <i data-lucide="${appState.hideBalance ? 'eye-off' : 'eye'}" class="w-4 h-4 pointer-events-none"></i>
        </button>
      </div>

      <!-- Currency Balances (2 Grid boxes exactly aligned with standard cards: p-2.5 rounded-xl bg-black/25 gap-2) -->
      <div class="grid grid-cols-2 gap-2 text-xs select-none">
        <!-- USD Balance: ពណ៌បៃតងរស្មី Emerald Cash (#10B981) -->
        <div class="p-2.5 rounded-xl bg-black/25 border border-emerald-500/20 shadow-inner flex flex-col justify-between select-none">
          <div class="flex items-center justify-between mb-1 select-none">
            <span class="text-[10px] text-slate-300 font-semibold leading-tight select-none">${t('usdOnly')}</span>
            <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-400 font-mono font-bold">USD</span>
          </div>
          <p id="hero-val-usd" class="text-lg font-bold font-mono text-emerald-400 tracking-tight drop-shadow-[0_0_12px_rgba(16,185,129,0.35)] mt-0.5 select-none">
            ${appState.hideBalance ? '***,*** $' : formatUSD(pureUsd)}
          </p>
        </div>
        <!-- KHR Balance: ពណ៌លឿងទុំ/មាសរាជវង្ស Golden Amber (#F59E0B) -->
        <div class="p-2.5 rounded-xl bg-black/25 border border-amber-500/20 shadow-inner flex flex-col justify-between select-none">
          <div class="flex items-center justify-between mb-1 select-none">
            <span class="text-[10px] text-slate-300 font-semibold leading-tight select-none">${t('khrOnly')}</span>
            <span class="text-[9px] px-1.5 py-0.2 rounded-full bg-amber-500/15 text-amber-300 font-mono font-bold">KHR</span>
          </div>
          <p id="hero-val-khr" class="text-lg font-bold font-mono text-amber-400 tracking-tight drop-shadow-[0_0_12px_rgba(245,158,11,0.35)] mt-0.5 select-none">
            ${appState.hideBalance ? '***,*** ៛' : formatKHR(pureKhr)}
          </p>
        </div>
      </div>
    </div>
  `;

  const periodBanner = `
    <!-- Active Period Display (Home only) -->
    <div class="flex items-center justify-between px-1">
      <span class="text-xs text-slate-300 font-medium flex items-center gap-1.5">
        <i data-lucide="calendar" class="w-3.5 h-3.5 text-orange-400"></i>
        <span>${activePeriodDisplay}</span>
      </span>
      <span class="text-[10px] text-orange-400 font-mono card-subtitle">Personal Sales</span>
    </div>
  `;

  let activeBoostAmt = 0;
  if (appState.periodFilter === 'year') {
    activeBoostAmt = Object.values(d.boostByMonth || {}).reduce((sum, v) => sum + (v || 0), 0);
  } else {
    activeBoostAmt = monthlyBoostAmt;
  }

  const canToggleProfit = (appState.periodFilter === 'month' || appState.periodFilter === 'year');
  const isNetProfit = canToggleProfit && appState.profitNetBoostMode;
  const displayedProfit = isNetProfit ? (totalGrossProfit - activeBoostAmt) : totalGrossProfit;
  const profitTitle = isNetProfit ? (isEn ? 'Net Profit:' : 'ចំណេញសុទ្ធ:') : (isEn ? 'Gross Profit:' : 'ចំណេញដុល:');

  const cardPerformance = `
    <!-- UNIFIED SALES & EXPENSES PERFORMANCE CARD -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10 relative overflow-hidden">
      
      <!-- Top Card Header: Title (Clean iOS Standard without emojis) -->
      <div class="flex items-center gap-2.5 mb-3">
        <div class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 shrink-0">
          <i data-lucide="bar-chart-2" class="w-4 h-4"></i>
        </div>
        <div>
          <h3 class="font-bold text-xs uppercase text-white leading-tight">
            សង្ខេបការលក់ & ចំណាយ
          </h3>
          <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 card-subtitle">Sales & Expense Performance</p>
        </div>
      </div>

      <!-- 4 Mini Grid Boxes (2x2 layout) -->
      <div class="grid grid-cols-2 gap-2 text-xs">
        
        <!-- Box 1: Total Box Qty (With View / មើល > Button) -->
        <div onclick="openPersonalSalesModal()" 
             class="p-2.5 rounded-xl bg-black/25 border border-white/5 cursor-pointer hover:border-orange-500/30 transition ios-touch-item group flex flex-col justify-between">
          <div class="flex items-center justify-between mb-1">
            <span class="text-slate-400 text-[10px] leading-tight">
              ${t('totalBoxes')}:
            </span>
            <!-- New Data Entry Button inside Grid 1 (Icon only: pencil-line) -->
            <button onclick="event.stopPropagation(); openNewOrderModal('telegram')" 
                    title="កត់ត្រាការលក់ពី Telegram ចូល Sheet ផ្ទាល់ខ្លួន"
                    class="w-6 h-6 rounded-lg bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30 text-orange-400 hover:text-white flex items-center justify-center active:scale-95 transition shadow-sm">
              <i data-lucide="pencil-line" class="w-3.5 h-3.5"></i>
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

        <!-- Box 3: Gross / Net Profit (ចុចប្តូរពេលរើស ១ ខែ ឬ ១ ឆ្នាំ) -->
        <div ${canToggleProfit ? 'onclick="toggleProfitNetBoost()"' : ''}
             class="p-2.5 rounded-xl bg-black/25 border border-white/5 flex flex-col justify-between ${canToggleProfit ? 'cursor-pointer hover:border-blue-500/30 active:scale-95 transition' : ''}"
             title="${canToggleProfit ? (isNetProfit ? 'ចុចដើម្បីបង្ហាញចំណេញដុល' : 'ចុចដើម្បីបង្ហាញចំណេញសុទ្ធ (ដក Boost)') : ''}">
          <span class="text-slate-400 text-[10px] block leading-tight mb-1">
            ${profitTitle}
          </span>
          <span class="font-mono text-blue-400 font-bold text-base tracking-tight">${formatUSD(displayedProfit)}</span>
        </div>

        <!-- Box 4: Boost Expense (ចំនួនលុយ Boost) -->
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5 flex flex-col justify-between">
          <span class="text-slate-400 text-[10px] block leading-tight mb-1">
            ${isEn ? 'Boost Amount:' : 'ចំនួនលុយ Boost:'}
          </span>
          <span class="font-mono text-rose-400 font-bold text-base tracking-tight">${formatUSD(activeBoostAmt)}</span>
        </div>

      </div>
    </div>

    <!-- ======================================================== -->
  `;

  const cardNetCash = `
    <!-- CARD B: NET CASH POSITION (iOS Standard Header: Emerald Icon Box + Pure White Title) -->
    <!-- ======================================================== -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      
      <!-- Top Title (2 lines) and Right-Aligned Cash Health Badge -->
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
            <i data-lucide="landmark" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="font-bold text-xs uppercase text-white leading-tight">
              សង្ខេបស្ថាពរហិរញ្ញវត្ថុសុទ្ធ
            </h3>
            <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 card-subtitle">Net Cash Position</p>
          </div>
        </div>
        <span class="px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold text-xs shadow-sm shrink-0">
          ${netCash.healthStatus}
        </span>
      </div>

      <div class="grid grid-cols-2 gap-2 text-xs">
        <!-- Box 1: Actual Cash (Touch to view Bank Accounts Modal) -->
        <div onclick="openBankModal()" 
             title="ចុចដើម្បីមើលកុងធនាគារទាំងអស់"
             class="p-2.5 rounded-xl bg-black/25 border border-white/5 cursor-pointer hover:border-emerald-500/30 transition ios-touch-item flex flex-col justify-between select-none">
          <span class="text-slate-400 text-[10px] block leading-tight mb-1">${t('actualCash')}:</span>
          <span class="font-mono text-white font-bold text-base tracking-tight mt-0.5">${formatUSD(netCash.totalActualCash)}</span>
        </div>

        <!-- Box 2: Pending COD (Touch to view Pending COD Modal) -->
        <div onclick="openCodModal()" 
             title="ចុចដើម្បីមើលតារាង COD ទាំងអស់"
             class="p-2.5 rounded-xl bg-black/25 border border-white/5 cursor-pointer hover:border-amber-500/30 transition ios-touch-item flex flex-col justify-between select-none">
          <span class="text-slate-400 text-[10px] block leading-tight mb-1">${t('pendingCod')}:</span>
          <span class="font-mono text-amber-400 font-bold text-base tracking-tight mt-0.5">${formatUSD(netCash.pendingCodReceivables)}</span>
        </div>

        <!-- Box 3: Liquid Assets -->
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5 flex flex-col justify-between select-none">
          <span class="text-slate-400 text-[10px] block leading-tight mb-1">${t('liquidAssets')}:</span>
          <span class="font-mono text-blue-400 font-bold text-base tracking-tight mt-auto">${formatUSD(netCash.totalLiquidAssets)}</span>
        </div>

        <!-- Box 4: Accounts Payable (Touch to view Accounts Payable Modal) -->
        <div onclick="openPayablesModal()" 
             title="ចុចដើម្បីមើលបញ្ជីបំណុលទាំងអស់"
             class="p-2.5 rounded-xl bg-black/25 border border-white/5 cursor-pointer hover:border-rose-500/30 transition ios-touch-item flex flex-col justify-between select-none">
          <span class="text-slate-400 text-[10px] block leading-tight mb-1">${t('payablesTotal')}:</span>
          <span class="font-mono text-rose-400 font-bold text-base tracking-tight mt-0.5">${formatUSD(netCash.totalAccountsPayable)}</span>
        </div>
      </div>
      <div class="mt-2 p-2.5 rounded-xl bg-gradient-to-r from-emerald-950/40 to-blue-950/40 border border-emerald-500/20 flex items-center justify-between">
        <span class="text-xs text-white font-semibold">${t('finalNetCash')}</span>
        <span class="text-base font-bold font-mono text-emerald-400">${formatUSD(netCash.netCashPositionFinal || netCash.totalNetCash)}</span>
      </div>
    </div>

    <!-- ======================================================== -->
  `;

  const cardExpenses = `
    <!-- CARD D: FULL-WIDTH EXPENSES CARD (ចុចលើកាតដើម្បីមើលការចំណាយតាមថ្ងៃ/ខែដែលបានជ្រើសរើស) -->
    <!-- ======================================================== -->
    <div onclick="openExpensesModal()" 
         title="ប៉ះលើកាតដើម្បីបង្ហាញ ${dynamicExpenseTitle}"
         class="ios-glass-card rounded-3xl p-4 border border-white/10 cursor-pointer select-none active:scale-[0.99] transition-all">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30 shrink-0">
            <i data-lucide="receipt" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="font-bold text-xs uppercase text-white leading-tight">
              ${dynamicExpenseTitle}
            </h3>
            <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 card-subtitle">Expenses (${sortedFilteredExpenses.length} មុខ)</p>
          </div>
        </div>
        <!-- Top-Right Button: Quick Expense Direct Entry Modal -->
        <button onclick="event.stopPropagation(); openNewExpenseModal();" 
                oncontextmenu="event.stopPropagation(); openExpenseShortcut();"
                title="កត់ត្រាចំណាយថ្មី (Quick Expense)"
                class="w-8 h-8 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30 flex items-center justify-center active:scale-95 transition shadow-sm shrink-0">
          <i data-lucide="pencil-line" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- Expenses List (Sorted latest 31 ➔ 01 / Month 12 ➔ 01) -->
      <div class="space-y-2 max-h-52 overflow-y-auto no-scrollbar">
        ${sortedFilteredExpenses.slice(0, 15).map((e, idx) => `
          <div class="p-2.5 rounded-2xl bg-black/25 border border-white/5 flex items-center justify-between text-xs hover:border-white/10 transition">
            <div class="flex items-center gap-2.5 min-w-0 pr-2">
              <span class="w-5 h-5 rounded-lg bg-white/5 text-slate-400 font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                ${idx + 1}
              </span>
              <div class="min-w-0">
                <p class="text-white font-medium text-xs truncate leading-tight">${e.description || e.category || 'ចំណាយទូទៅ'}</p>
                <div class="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5 font-mono">
                  <span>${e.date}</span>
                  ${e.time ? `<span class="text-amber-300">${e.time}</span>` : ''}
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
        <span class="text-slate-400 text-[11px]">ចំណាយសរុប (${sortedFilteredExpenses.length} មុខ):</span>
        <span class="font-mono text-rose-400 font-bold text-sm">${formatUSD(totalExpenseAmt)}</span>
      </div>

      <!-- Transferred Monthly Expense Budget Bar (កំណត់ចំណាយ ${monthlyBudgetGoal}$/ខែ) -->
      <div class="mt-2.5 p-2.5 rounded-xl bg-gradient-to-r from-rose-950/40 via-black/30 to-emerald-950/40 border border-white/10 flex items-center justify-between transition">
        <div onclick="event.stopPropagation(); openEditBudgetModal()" 
             title="ចុចដើម្បីកែប្រែគោលដៅចំណាយប្រចាំខែ"
             class="flex items-center gap-1.5 cursor-pointer hover:opacity-80 active:scale-95 transition py-0.5">
          <i data-lucide="target" class="w-3.5 h-3.5 text-rose-400 shrink-0"></i>
          <span class="text-xs text-slate-300 font-semibold underline decoration-white/20 underline-offset-2">កំណត់ចំណាយ ${monthlyBudgetGoal}$/ខែ</span>
        </div>

        <div class="flex items-center gap-2">
          <!-- Remaining Budget text -->
          <span onclick="event.stopPropagation(); openExpensesModal(true)" 
                class="text-sm font-bold font-mono cursor-pointer ${remainingBudget >= 0 ? 'text-emerald-400' : 'text-rose-400'}">
            ${remainingBudget >= 0 ? `សល់ ${formatUSD(remainingBudget)}` : `លើស ${formatUSD(Math.abs(remainingBudget))}`}
          </span>

          <!-- List Icon: Click to open full monthly expenses drill-down -->
          <button onclick="event.stopPropagation(); openExpensesModal(true)" 
                  title="មើលតារាងចំណាយពេញមួយខែ ${selectedMonthNum}"
                  class="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/10 active:scale-95 transition flex items-center justify-center">
            <i data-lucide="list" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    </div>
  `;

  const cardTeamSales = `
    <!-- CARD E: TEAM SALES - DYNAMIC TARGET FROM GOOGLE SHEET (High-Security Style Badge) -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shrink-0">
            <i data-lucide="users" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="font-bold text-xs uppercase text-white leading-tight">
              ${t('teamSalesTitle')}
            </h3>
            <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 card-subtitle">Team Sales Targets</p>
          </div>
        </div>
        
        <!-- Target Highlight Badge (ដូចកន្លែង សុវត្ថិភាពខ្ពស់ / High Security Badge) -->
        <div class="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center gap-1.5 shadow-sm shrink-0">
          <i data-lucide="target" class="w-3.5 h-3.5 text-blue-400"></i>
          <span class="text-xs text-blue-400 font-bold font-mono">
            ${(currentTeamLeaders.reduce((acc, cur) => acc + (cur.targetGoal || 100), 0))} ប្រអប់
          </span>
        </div>
      </div>

      <div class="space-y-2.5">
        ${currentTeamLeaders.map(tl => `
          <div class="p-3 rounded-2xl bg-black/25 border border-white/5 flex flex-col gap-2 cursor-pointer hover:border-blue-500/30 hover:bg-white/[0.04] active:scale-[0.99] transition group" onclick="openTeamSetsModal('${tl.name}', ${selectedMonthInt})">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <span class="font-bold text-xs text-white whitespace-nowrap group-hover:text-blue-300 transition">${tl.name}</span>
                ${tl.name === 'ស្តី ស្តើង' ? '<img src="blue-tick.png" alt="Verified" class="w-3.5 h-3.5 object-contain shrink-0">' : ''}
                <!-- Leader Target Badge -->
                <span class="px-1.5 py-0.5 rounded-md bg-white/5 text-[9px] text-slate-400 font-mono border border-white/5">
                  គោលដៅ: <strong class="text-blue-300">${tl.targetGoal || 100}</strong>
                </span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="font-mono text-xs font-bold ${tl.targetPercent >= 100 ? 'text-emerald-400' : 'text-orange-400'} whitespace-nowrap">
                  ${tl.totalBoxes} ${t('boxUnit')} (${tl.targetPercent}%)
                </span>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition"></i>
              </div>
            </div>

            <div class="flex items-center gap-1 text-[10px] text-slate-400">
              <span class="px-1.5 py-0.5 rounded bg-white/5">Set 1: <strong class="text-white">${tl.set1}</strong></span>
              <span class="px-1.5 py-0.5 rounded bg-white/5">Set 2: <strong class="text-white">${tl.set2}</strong></span>
              <span class="px-1.5 py-0.5 rounded bg-white/5">Set 3: <strong class="text-white">${tl.set3}</strong></span>
              <span class="px-1.5 py-0.5 rounded bg-white/5">Set 4: <strong class="text-white">${tl.set4}</strong></span>
              ${tl.set5 > 0 ? `<span class="px-1.5 py-0.5 rounded bg-white/5">Set 5: <strong class="text-white">${tl.set5}</strong></span>` : ''}
            </div>

            <div class="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
              <div class="bg-gradient-to-r from-orange-500 to-amber-400 h-1.5 rounded-full" style="width: ${Math.min(100, tl.targetPercent)}%"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  const cardTools = `
    <!-- AI & TOOLS SECTION (Clean iPhone Home Screen Style - iOS Standard Header) -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30 shrink-0">
            <i data-lucide="sparkles" class="w-4 h-4"></i>
          </div>
          <div>
            <h3 class="font-bold text-xs uppercase text-white leading-tight">
              ឧបករណ៍ AI & បកប្រែ
            </h3>
            <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 card-subtitle">AI & Translation Tools</p>
          </div>
        </div>
        <span class="px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-[10px] text-purple-400 font-mono font-bold shadow-sm shrink-0">
          Quick Launch
        </span>
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

  const cv = appState.cardVisibility || {
    autoHideEmpty: false,
    pureCash: false,
    salesPerformance: true,
    netCash: false,
    expenses: true,
    teamSales: false,
    tools: true
  };

  const isPerformanceEmpty = (totalBoxQty === 0 && totalRevenue === 0 && totalExpenseAmt === 0 && totalGrossProfit === 0);
  const isExpensesEmpty = (sortedFilteredExpenses.length === 0);
  const isPureCashEmpty = (pureUsd === 0 && pureKhr === 0);
  const isNetCashEmpty = (netCash.totalActualCash === 0 && netCash.pendingCodReceivables === 0 && netCash.totalAccountsPayable === 0);
  const isTeamSalesEmpty = (!currentTeamLeaders || currentTeamLeaders.length === 0);

  const showPureCash = cv.pureCash !== false && !(cv.autoHideEmpty && isPureCashEmpty);
  const showPerformance = cv.salesPerformance !== false && !(cv.autoHideEmpty && isPerformanceEmpty);
  const showNetCash = cv.netCash !== false && !(cv.autoHideEmpty && isNetCashEmpty);
  const showExpenses = cv.expenses !== false && !(cv.autoHideEmpty && isExpensesEmpty);
  const showTeamSales = cv.teamSales !== false && !(cv.autoHideEmpty && isTeamSalesEmpty);
  const showTools = cv.tools !== false;

  const layout = appState.cardLayout || '1';
  let cardsInOrder = [];
  if (layout === '2') {
    // Option 2: Finance / Cash Focus (Pure Cash -> Net Cash -> Expenses -> Period -> Performance -> Team Sales -> Tools)
    cardsInOrder = [
      { key: 'pureCash', show: showPureCash, html: cardPureCash },
      { key: 'netCash', show: showNetCash, html: cardNetCash },
      { key: 'expenses', show: showExpenses, html: cardExpenses },
      { key: 'banner', show: true, html: periodBanner },
      { key: 'performance', show: showPerformance, html: cardPerformance },
      { key: 'teamSales', show: showTeamSales, html: cardTeamSales },
      { key: 'tools', show: showTools, html: cardTools }
    ];
  } else if (layout === '3') {
    // Option 3: Sales Focus (Period -> Performance -> Team Sales -> Pure Cash -> Net Cash -> Expenses -> Tools)
    cardsInOrder = [
      { key: 'banner', show: true, html: periodBanner },
      { key: 'performance', show: showPerformance, html: cardPerformance },
      { key: 'teamSales', show: showTeamSales, html: cardTeamSales },
      { key: 'pureCash', show: showPureCash, html: cardPureCash },
      { key: 'netCash', show: showNetCash, html: cardNetCash },
      { key: 'expenses', show: showExpenses, html: cardExpenses },
      { key: 'tools', show: showTools, html: cardTools }
    ];
  } else {
    // Option 1: Standard (Default) (Pure Cash -> Period -> Performance -> Net Cash -> Expenses -> Team Sales -> Tools)
    cardsInOrder = [
      { key: 'pureCash', show: showPureCash, html: cardPureCash },
      { key: 'banner', show: true, html: periodBanner },
      { key: 'performance', show: showPerformance, html: cardPerformance },
      { key: 'netCash', show: showNetCash, html: cardNetCash },
      { key: 'expenses', show: showExpenses, html: cardExpenses },
      { key: 'teamSales', show: showTeamSales, html: cardTeamSales },
      { key: 'tools', show: showTools, html: cardTools }
    ];
  }

  const renderedCards = cardsInOrder.filter(c => c.show).map(c => c.html).join('');
  if (!renderedCards.trim()) {
    return `
      ${periodBanner}
      <div class="ios-glass-card rounded-3xl p-6 border border-white/10 text-center py-12">
        <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 mx-auto mb-3">
          <i data-lucide="eye-off" class="w-6 h-6"></i>
        </div>
        <p class="text-sm font-bold text-white mb-1">កាតទាំងអស់ត្រូវបានលាក់</p>
        <p class="text-xs text-slate-400 mb-4">កាតគ្មានទិន្នន័យត្រូវបានលាក់ស្វ័យប្រវត្តិ ឬអ្នកបានបិទកាត</p>
        <button onclick="switchView('settings'); setTimeout(() => toggleSettingsItem('cardPreferences'), 100);" 
                class="px-4 py-2 rounded-xl accent-solid-btn font-bold text-xs shadow-lg transition active:scale-95">
          ${isKm ? 'ការរៀបចំកាតទិន្នន័យ' : 'Card Preferences'}
        </button>
      </div>
    `;
  }
  return renderedCards;
}

// ==========================================
// 5. View: Analytics
// ==========================================
function setAnalyticsYear(year) {
  appState.analyticsYear = year;
  appState.analyticsMonthKey = null;
  renderCurrentView();
}

function setAnalyticsMonth(monthKey) {
  appState.analyticsMonthKey = monthKey;
  renderCurrentView();

  // Auto-scroll selected month into center view horizontally without page vertical shift
  setTimeout(() => {
    const activeBtn = document.querySelector('#analytics-month-tabs .analytics-month-active');
    const tabsRow = document.getElementById('analytics-month-tabs');
    if (activeBtn && tabsRow) {
      const offsetLeft = activeBtn.offsetLeft - (tabsRow.clientWidth / 2) + (activeBtn.clientWidth / 2);
      tabsRow.scrollTo({ left: Math.max(0, offsetLeft), behavior: 'smooth' });
    }
  }, 40);
}

function setAnalyticsTab(tab) {
  appState.analyticsTab = tab;
  renderCurrentView();
}

function toggleAnalyticsViewDropdown(event) {
  if (event) {
    event.stopPropagation();
  }
  const menu = document.getElementById('analytics-view-dropdown-menu');
  if (menu) {
    menu.classList.toggle('hidden');
    if (!menu.classList.contains('hidden') && window.lucide) {
      window.lucide.createIcons();
    }
  }
}

function selectAnalyticsTab(tab) {
  appState.analyticsTab = tab;
  const menu = document.getElementById('analytics-view-dropdown-menu');
  if (menu) {
    menu.classList.add('hidden');
  }
  renderCurrentView();
}

function toggleAnalyticsAnnualTable() {
  appState.isAnalyticsTableMinimized = !appState.isAnalyticsTableMinimized;
  const content = document.getElementById('analytics-annual-table-content');
  const icon = document.getElementById('analytics-table-toggle-icon');
  const label = document.getElementById('analytics-table-toggle-label');
  const header = document.getElementById('analytics-annual-header');
  const card = header?.closest('.ios-glass-card');
  const main = document.getElementById('main-content');

  if (content) {
    window.__isTogglingAnalyticsCollapse = true;

    content.classList.toggle('hidden');
    const isHidden = content.classList.contains('hidden');
    if (icon) {
      icon.setAttribute('data-lucide', isHidden ? 'chevron-down' : 'chevron-up');
    }
    if (label) {
      label.textContent = isHidden ? 'ពង្រីក' : 'បង្រួម';
    }
    if (window.lucide) window.lucide.createIcons();

    // Keep Dock and Year Bar visible without oscillation
    setDockVisible(true);
    const analyticsHeader = document.getElementById('analytics-sticky-header');
    if (analyticsHeader) {
      analyticsHeader.classList.remove('filter-hidden');
    }

    if (isHidden && card) {
      const cardRect = card.getBoundingClientRect();
      if (cardRect.top < 50 || cardRect.top > window.innerHeight - 100) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    setTimeout(() => {
      window.__isTogglingAnalyticsCollapse = false;
    }, 350);
  }
}

function toggleAnalyticsDetailTable() {
  appState.isAnalyticsDetailMinimized = !appState.isAnalyticsDetailMinimized;
  const content = document.getElementById('analytics-detail-list-content');
  const icon = document.getElementById('analytics-detail-toggle-icon');
  const label = document.getElementById('analytics-detail-toggle-label');
  const header = document.getElementById('analytics-detail-header');
  const card = header?.closest('.ios-glass-card');
  const main = document.getElementById('main-content');

  if (content) {
    window.__isTogglingAnalyticsCollapse = true;

    content.classList.toggle('hidden');
    const isHidden = content.classList.contains('hidden');
    if (icon) {
      icon.setAttribute('data-lucide', isHidden ? 'chevron-down' : 'chevron-up');
    }
    if (label) {
      label.textContent = isHidden ? 'ពង្រីក' : 'បង្រួម';
    }
    if (window.lucide) window.lucide.createIcons();

    // Keep Dock and Year Bar visible without oscillation
    setDockVisible(true);
    const analyticsHeader = document.getElementById('analytics-sticky-header');
    if (analyticsHeader) {
      analyticsHeader.classList.remove('filter-hidden');
    }

    if (isHidden && card) {
      const cardRect = card.getBoundingClientRect();
      if (cardRect.top < 50 || cardRect.top > window.innerHeight - 100) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    setTimeout(() => {
      window.__isTogglingAnalyticsCollapse = false;
    }, 350);
  }
}

window.toggleAnalyticsViewDropdown = toggleAnalyticsViewDropdown;
window.selectAnalyticsTab = selectAnalyticsTab;
window.toggleAnalyticsAnnualTable = toggleAnalyticsAnnualTable;
window.toggleAnalyticsDetailTable = toggleAnalyticsDetailTable;
window.setAnalyticsYear = setAnalyticsYear;
window.setAnalyticsMonth = setAnalyticsMonth;
window.setAnalyticsTab = setAnalyticsTab;

if (typeof window !== 'undefined' && !window.__analyticsDropdownListenerAdded) {
  window.__analyticsDropdownListenerAdded = true;
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('analytics-view-dropdown-menu');
    const btn = document.getElementById('analytics-dropdown-btn');
    if (menu && !menu.classList.contains('hidden')) {
      if (!menu.contains(e.target) && (!btn || !btn.contains(e.target))) {
        menu.classList.add('hidden');
      }
    }
  });
}

function getAnalyticsViewHTML() {
  const d = DataService.data;
  if (!d) return '<p class="text-xs text-slate-400 text-center py-20">Loading Diagram...</p>';

  const currentTab = appState.analyticsTab || 'all';
  const isEn = appState.language === 'en';
  const isKm = !isEn;

  const monthlyStats = {};
  d.personalSales.forEach(s => {
    const mo = s.isoDate.substring(0, 7);
    if (!monthlyStats[mo]) monthlyStats[mo] = { revenue: 0, profit: 0, expense: 0, qty: 0, salesCount: 0, expCount: 0, boost: 0 };
    monthlyStats[mo].revenue += s.totalAmount || 0;
    monthlyStats[mo].profit += s.profit || 0;
    monthlyStats[mo].qty += s.totalBoxQty || 0;
    monthlyStats[mo].salesCount += 1;
  });

  (d.expenses || []).forEach(e => {
    if (!e.isoDate) return;
    const mo = e.isoDate.substring(0, 7);
    if (!monthlyStats[mo]) monthlyStats[mo] = { revenue: 0, profit: 0, expense: 0, qty: 0, salesCount: 0, expCount: 0, boost: 0 };
    monthlyStats[mo].expense += e.amount || 0;
    monthlyStats[mo].expCount += 1;
  });

  const months = Object.keys(monthlyStats).sort();
  const allYears = [...new Set([...months.map(m => m.split('-')[0]), '2025', '2026', '2027'])].sort((a,b) => parseInt(a,10) - parseInt(b,10));
  const currentActiveYear = appState.analyticsYear || (allYears.includes('2026') ? '2026' : (allYears[0] || '2026'));
  appState.analyticsYear = currentActiveYear;

  // Add boost for months in 2026
  months.forEach(m => {
    const parts = m.split('-');
    if (parts[0] === '2026' && d.boostByMonth) {
      const mInt = parseInt(parts[1], 10);
      monthlyStats[m].boost = d.boostByMonth[mInt] || 0;
    }
  });

  const displayMonths = allYears.length > 1 ? months.filter(m => m.startsWith(currentActiveYear)) : months;
  
  // Default to 1 month (latest month of the active year, e.g. '2026-10') unless explicitly set to 'all'
  let currentActiveMonthKey = appState.analyticsMonthKey;
  if (!currentActiveMonthKey) {
    currentActiveMonthKey = displayMonths.length > 0 ? displayMonths[displayMonths.length - 1] : 'all';
    appState.analyticsMonthKey = currentActiveMonthKey;
  }
  const isAll = currentActiveMonthKey === 'all';
  const activeMonth = currentActiveMonthKey;

  // Tab metadata
  let activeTabLabel = 'ទិដ្ឋភាពរួម';
  let activeTabIcon = 'layers';
  if (currentTab === 'business') {
    activeTabLabel = 'អាជីវកម្ម';
    activeTabIcon = 'briefcase';
  } else if (currentTab === 'expenses') {
    activeTabLabel = 'ចំណាយផ្ទាល់ខ្លួន';
    activeTabIcon = 'receipt';
  }

  // 1. Slim Sticky Header: ONLY Year Selector & Perspective Dropdown (Locks against Profile Bar)
  const stickyYearHeaderHtml = `
    <div id="analytics-sticky-header" class="sticky top-0 z-40 w-full bg-[#070D18]/94 backdrop-blur-2xl px-3.5 pt-2 pb-2 border-b border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
      <div class="flex items-center justify-between gap-2">
        <!-- Year Selector -->
        <div class="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          <span class="text-xs font-bold text-slate-300 mr-0.5 whitespace-nowrap">${isEn ? 'Year:' : 'ឆ្នាំ:'}</span>
          ${allYears.map(y => `
            <button onclick="setAnalyticsYear('${y}')" class="h-7 px-2.5 rounded-full text-xs font-bold font-mono transition active:scale-95 flex items-center justify-center ${currentActiveYear === y ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40 shadow-sm' : 'bg-white/5 text-slate-400 hover:text-white border border-white/5'}">
              ${y}
            </button>
          `).join('')}
        </div>

        <!-- Perspective Dropdown -->
        <div class="relative shrink-0">
          <button id="analytics-dropdown-btn" onclick="toggleAnalyticsViewDropdown(event)" 
                  class="h-7 px-2.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/10 text-xs font-semibold text-slate-200 transition active:scale-95 shadow-sm flex items-center gap-1.5">
            <i data-lucide="${activeTabIcon}" class="w-3.5 h-3.5 text-orange-400 shrink-0"></i>
            <span class="max-w-[105px] truncate">${activeTabLabel}</span>
            <i data-lucide="chevron-down" class="w-3 h-3 text-slate-400 shrink-0"></i>
          </button>

          <!-- Dropdown Menu -->
          <div id="analytics-view-dropdown-menu" 
               class="hidden absolute right-0 top-full mt-1.5 w-48 rounded-2xl bg-[#0A1222]/95 backdrop-blur-2xl border border-white/15 shadow-2xl p-1.5 z-50">
            <button onclick="selectAnalyticsTab('all')" 
                    class="w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition ${currentTab === 'all' ? 'bg-orange-500/20 text-orange-300 font-bold' : 'text-slate-300 hover:bg-white/5'}">
              <span class="flex items-center gap-2">
                <i data-lucide="layers" class="w-3.5 h-3.5 text-orange-400"></i>
                <span>ទិដ្ឋភាពរួម</span>
              </span>
              ${currentTab === 'all' ? '<i data-lucide="check" class="w-3.5 h-3.5 text-orange-400"></i>' : ''}
            </button>
            <button onclick="selectAnalyticsTab('business')" 
                    class="w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition ${currentTab === 'business' ? 'bg-orange-500/20 text-orange-300 font-bold' : 'text-slate-300 hover:bg-white/5'}">
              <span class="flex items-center gap-2">
                <i data-lucide="briefcase" class="w-3.5 h-3.5 text-emerald-400"></i>
                <span>អាជីវកម្ម</span>
              </span>
              ${currentTab === 'business' ? '<i data-lucide="check" class="w-3.5 h-3.5 text-orange-400"></i>' : ''}
            </button>
            <button onclick="selectAnalyticsTab('expenses')" 
                    class="w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition ${currentTab === 'expenses' ? 'bg-orange-500/20 text-orange-300 font-bold' : 'text-slate-300 hover:bg-white/5'}">
              <span class="flex items-center gap-2">
                <i data-lucide="receipt" class="w-3.5 h-3.5 text-rose-400"></i>
                <span>ចំណាយផ្ទាល់ខ្លួន</span>
              </span>
              ${currentTab === 'expenses' ? '<i data-lucide="check" class="w-3.5 h-3.5 text-orange-400"></i>' : ''}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // 2. Unlocked Month Tabs Row (Scrolls with page content)
  const monthTabsUnlockedHtml = `
    <div id="analytics-month-tabs" class="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none no-scrollbar" style="-webkit-overflow-scrolling: touch; overscroll-behavior-x: contain;">
      <button onclick="setAnalyticsMonth('all')" id="btn-month-all" 
              class="px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition active:scale-95 ${activeMonth === 'all' ? 'analytics-month-active bg-orange-500 text-white shadow-md' : 'bg-white/5 text-slate-300 hover:bg-white/10'}">
        ✨ ពេញ ១ ឆ្នាំ
      </button>
      ${displayMonths.map(m => {
        const parts = m.split('-');
        const isSelected = activeMonth === m;
        return `
          <button onclick="setAnalyticsMonth('${m}')" id="btn-month-${m}" 
                  class="px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition active:scale-95 ${isSelected ? 'analytics-month-active bg-orange-500 text-white shadow-md' : 'bg-white/5 text-slate-300 hover:bg-white/10'}">
            ខែ ${parts[1]}
          </button>
        `;
      }).join('')}
    </div>
  `;

  // ==========================================
  // CASE A: Render Daily Drill-down if Month Selected
  // ==========================================
  if (!isAll) {
    const monthSales = d.personalSales.filter(s => s.isoDate.startsWith(activeMonth));
    const monthExpenses = (d.expenses || []).filter(e => e.isoDate && e.isoDate.startsWith(activeMonth));
    const parts = activeMonth.split('-');
    const mNum = parseInt(parts[1], 10);
    const monthBoost = (parts[0] === '2026' && d.boostByMonth) ? (d.boostByMonth[mNum] || 0) : 0;
    const monthTitle = `${parts[1]}/${parts[0]}`;

    // Group by day
    const dailyMap = {};
    monthSales.forEach(s => {
      const dayIso = s.isoDate;
      if (!dailyMap[dayIso]) {
        dailyMap[dayIso] = { date: s.date, isoDate: dayIso, revenue: 0, profit: 0, expense: 0, qty: 0, count: 0, expItems: [] };
      }
      dailyMap[dayIso].revenue += s.totalAmount || 0;
      dailyMap[dayIso].profit += s.profit || 0;
      dailyMap[dayIso].qty += s.totalBoxQty || 0;
      dailyMap[dayIso].count += 1;
    });

    monthExpenses.forEach(e => {
      const dayIso = e.isoDate;
      if (!dailyMap[dayIso]) {
        dailyMap[dayIso] = { date: e.date, isoDate: dayIso, revenue: 0, profit: 0, expense: 0, qty: 0, count: 0, expItems: [] };
      }
      dailyMap[dayIso].expense += e.amount || 0;
      dailyMap[dayIso].expItems.push(e);
    });

    const daysSorted = Object.keys(dailyMap).sort(); // chronological
    const monthTotalRevenue = daysSorted.reduce((sum, day) => sum + dailyMap[day].revenue, 0);
    const monthTotalExpense = daysSorted.reduce((sum, day) => sum + dailyMap[day].expense, 0);
    const monthTotalProfit = daysSorted.reduce((sum, day) => sum + dailyMap[day].profit, 0);
    const monthTotalBoxes = daysSorted.reduce((sum, day) => sum + dailyMap[day].qty, 0);
    const netBusinessProfit = monthTotalProfit - monthBoost;
    const trueNetPocket = netBusinessProfit - monthTotalExpense;

    const isAnalyticsNetProfit = (appState.analyticsProfitMode === 'net');
    const displayedAnalyticsProfit = isAnalyticsNetProfit ? netBusinessProfit : monthTotalProfit;
    const displayedAnalyticsProfitLabel = isAnalyticsNetProfit ? 'ចំណេញសុទ្ធ (-Boost)' : 'ចំណេញដុល';

    // Calculate max scale based on active tab
    let maxDailyVal = 10;
    if (currentTab === 'expenses') {
      maxDailyVal = Math.max(...daysSorted.map(day => dailyMap[day].expense), 10);
    } else if (currentTab === 'business') {
      maxDailyVal = Math.max(...daysSorted.map(day => dailyMap[day].revenue), 10);
    } else {
      maxDailyVal = Math.max(...daysSorted.map(day => Math.max(dailyMap[day].revenue, dailyMap[day].expense)), 10);
    }

    // Animated SVG Runner
    let dailySvgRunner = '';
    const dailyW = Math.max(daysSorted.length * 40, 300);
    if (daysSorted.length > 1) {
      const colW = dailyW / daysSorted.length;
      const pts = daysSorted.map((dIso, idx) => {
        const item = dailyMap[dIso];
        const val = currentTab === 'expenses' ? item.expense : item.revenue;
        const rH = Math.max(10, Math.round((val / maxDailyVal) * 95));
        const x = Math.round((idx + 0.5) * colW);
        const y = Math.round(145 - rH);
        return { x, y };
      });
      let pathD = '';
      pts.forEach((p, i) => {
        if (i === 0) pathD += `M ${p.x} ${p.y}`;
        else {
          const prev = pts[i - 1];
          const midX = prev.x + (p.x - prev.x) / 2;
          pathD += ` C ${midX} ${prev.y}, ${midX} ${p.y}, ${p.x} ${p.y}`;
        }
      });

      const gradColor1 = currentTab === 'expenses' ? '#F43F5E' : '#10B981';
      const gradColor2 = currentTab === 'expenses' ? '#FB7185' : '#34D399';
      const gradColor3 = currentTab === 'expenses' ? '#FDA4AF' : '#6EE7B7';

      dailySvgRunner = `
        <svg class="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible" style="min-width: ${dailyW}px;">
          <defs>
            <linearGradient id="dailyTrendGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="${gradColor1}" stop-opacity="0.25" />
              <stop offset="50%" stop-color="${gradColor2}" stop-opacity="0.85" />
              <stop offset="100%" stop-color="${gradColor3}" stop-opacity="1" />
            </linearGradient>
            <filter id="dailyGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path id="daily-trend-line" d="${pathD}" fill="none" stroke="url(#dailyTrendGrad)" stroke-width="2" stroke-dasharray="4,3" opacity="0.85" />
          <g filter="url(#dailyGlow)">
            <circle r="4" fill="${gradColor1}">
              <animate attributeName="r" values="3;6;3" dur="1.2s" repeatCount="indefinite" />
            </circle>
            <circle r="2" fill="#FFF" />
            <path d="M -5 -3 L 3 0 L -5 3 Z" fill="${gradColor3}" />
            <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
              <mpath href="#daily-trend-line" />
            </animateMotion>
          </g>
        </svg>
      `;
    }

    // Dynamic Header Title & Subtitle based on Tab
    let headerSubtitle = 'ទិដ្ឋភាពរួម (លក់, Boost & ចំណាយ)';
    let cardPillText = 'Daily Trend';
    if (currentTab === 'business') {
      headerSubtitle = 'អាជីវកម្ម';
      cardPillText = 'Business Daily';
    } else if (currentTab === 'expenses') {
      headerSubtitle = 'ចំណាយផ្ទាល់ខ្លួន';
      cardPillText = 'Expenses Daily';
    }

    // KPI Summary Grid per Tab (2 Square iPhone Widgets with middle divider line & auto-resize font)
    let kpiGridHtml = '';
    let monthBottomBannerHtml = '';
    if (currentTab === 'all') {
      kpiGridHtml = `
        <div class="grid grid-cols-2 gap-2 sm:gap-2.5 mb-2.5">
          <!-- Widget 1: Inflows & Profit -->
          <div class="rounded-2xl sm:rounded-3xl bg-black/35 border border-white/10 p-3 sm:p-3.5 shadow-lg flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំណូលលក់</span>
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"></span>
              </div>
              <span class="font-mono font-bold text-emerald-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
                ${formatUSD(monthTotalRevenue)}
              </span>
            </div>
            <div class="border-t border-white/10 my-2.5"></div>
            <div onclick="toggleAnalyticsProfitMode()" class="cursor-pointer hover:opacity-80 active:scale-95 transition" title="ចុចដើម្បីប្តូររវាង ចំណេញដុល និង ចំណេញសុទ្ធ">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">${displayedAnalyticsProfitLabel}</span>
                <span class="w-1.5 h-1.5 rounded-full ${isAnalyticsNetProfit ? 'bg-cyan-400 shadow-sm shadow-cyan-400/50' : 'bg-blue-400 shadow-sm shadow-blue-400/50'}"></span>
              </div>
              <span class="font-mono font-bold ${isAnalyticsNetProfit ? 'text-cyan-400' : 'text-blue-400'} block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
                ${formatUSD(displayedAnalyticsProfit)}
              </span>
            </div>
          </div>

          <!-- Widget 2: Boost & Expenses -->
          <div class="rounded-2xl sm:rounded-3xl bg-black/35 border border-white/10 p-3 sm:p-3.5 shadow-lg flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">${isEn ? 'Boost Amount' : 'ចំនួនលុយ Boost'}</span>
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50"></span>
              </div>
              <span class="font-mono font-bold text-amber-300 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
                ${monthBoost > 0 ? '-' + formatUSD(monthBoost) : '$0.00'}
              </span>
            </div>
            <div class="border-t border-white/10 my-2.5"></div>
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំណាយផ្ទាល់ខ្លួន</span>
                <span class="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-sm shadow-rose-400/50"></span>
              </div>
              <span class="font-mono font-bold text-rose-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
                -${formatUSD(monthTotalExpense)}
              </span>
            </div>
          </div>
        </div>
      `;
      monthBottomBannerHtml = `
        <!-- True Net Pocket Cash Highlight (placed at bottom of card) -->
        <div class="p-2.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/30 flex items-center justify-between mt-3">
          <div class="min-w-0 pr-2">
            <span class="text-xs font-bold text-emerald-300 block leading-tight truncate">💵 លទ្ធផលសរុបប្រចាំខែ ${parts[1]}</span>
            <span class="text-[9.5px] text-slate-400 font-mono block leading-tight mt-0.5 truncate">(ចំណេញដុល ${formatUSD(monthTotalProfit)} - Boost ${formatUSD(monthBoost)}) - ចំណាយ ${formatUSD(monthTotalExpense)}</span>
          </div>
          <span class="font-mono text-sm sm:text-base font-extrabold ${trueNetPocket >= 0 ? 'text-emerald-400' : 'text-rose-400'} shrink-0">${formatUSD(trueNetPocket)}</span>
        </div>
      `;
    } else if (currentTab === 'business') {
      kpiGridHtml = `
        <div class="grid grid-cols-2 gap-2 sm:gap-2.5 mb-2.5">
          <!-- Widget 1: Revenue & Profit -->
          <div class="rounded-2xl sm:rounded-3xl bg-black/35 border border-white/10 p-3 sm:p-3.5 shadow-lg flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំណូលលក់</span>
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"></span>
              </div>
              <span class="font-mono font-bold text-emerald-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
                ${formatUSD(monthTotalRevenue)}
              </span>
            </div>
            <div class="border-t border-white/10 my-2.5"></div>
            <div onclick="toggleAnalyticsProfitMode()" class="cursor-pointer hover:opacity-80 active:scale-95 transition" title="ចុចដើម្បីប្តូររវាង ចំណេញដុល និង ចំណេញសុទ្ធ">
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">${displayedAnalyticsProfitLabel}</span>
                <span class="w-1.5 h-1.5 rounded-full ${isAnalyticsNetProfit ? 'bg-cyan-400 shadow-sm shadow-cyan-400/50' : 'bg-blue-400 shadow-sm shadow-blue-400/50'}"></span>
              </div>
              <span class="font-mono font-bold ${isAnalyticsNetProfit ? 'text-cyan-400' : 'text-blue-400'} block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
                ${formatUSD(displayedAnalyticsProfit)}
              </span>
            </div>
          </div>

          <!-- Widget 2: Boost & Business Net -->
          <div class="rounded-2xl sm:rounded-3xl bg-black/35 border border-white/10 p-3 sm:p-3.5 shadow-lg flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">${isEn ? 'Boost Amount' : 'ចំនួនលុយ Boost'}</span>
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50"></span>
              </div>
              <span class="font-mono font-bold text-amber-300 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
                ${monthBoost > 0 ? '-' + formatUSD(monthBoost) : '$0.00'}
              </span>
            </div>
            <div class="border-t border-white/10 my-2.5"></div>
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំណេញសុទ្ធអាជីវកម្ម</span>
                <span class="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-sm shadow-teal-400/50"></span>
              </div>
              <span class="font-mono font-bold text-teal-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
                ${formatUSD(netBusinessProfit)}
              </span>
            </div>
          </div>
        </div>
      `;
      monthBottomBannerHtml = `
        <!-- Volume Sub-banner (placed at bottom of card) -->
        <div class="p-2.5 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-between mt-3">
          <div class="min-w-0 pr-2">
            <span class="text-xs font-bold text-blue-300 block leading-tight truncate">📦 ទិន្នផលលក់ក្នុងខែ</span>
            <span class="text-[9.5px] text-slate-400 font-mono block leading-tight mt-0.5 truncate">លក់បាន ${monthTotalBoxes} ប្រអប់ • ${monthSales.length} Orders</span>
          </div>
          <span class="font-mono text-xs font-bold text-blue-300 shrink-0">មធ្យម ${(monthTotalBoxes / Math.max(monthSales.length, 1)).toFixed(1)} ប្រអប់/order</span>
        </div>
      `;
    } else {
      // expenses
      kpiGridHtml = `
        <div class="grid grid-cols-2 gap-2 sm:gap-2.5 mb-2.5">
          <!-- Widget 1: Total & Count -->
          <div class="rounded-2xl sm:rounded-3xl bg-black/35 border border-white/10 p-3 sm:p-3.5 shadow-lg flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំណាយសរុប</span>
                <span class="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-sm shadow-rose-400/50"></span>
              </div>
              <span class="font-mono font-bold text-rose-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
                ${formatUSD(monthTotalExpense)}
              </span>
            </div>
            <div class="border-t border-white/10 my-2.5"></div>
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំនួនដងចំណាយ</span>
                <span class="w-1.5 h-1.5 rounded-full bg-slate-300 shadow-sm shadow-slate-300/50"></span>
              </div>
              <span class="font-mono font-bold text-slate-200 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
                ${monthExpenses.length} ដង
              </span>
            </div>
          </div>

          <!-- Widget 2: Daily Avg & Max Single Expense -->
          <div class="rounded-2xl sm:rounded-3xl bg-black/35 border border-white/10 p-3 sm:p-3.5 shadow-lg flex flex-col justify-between">
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">មធ្យមភាគ/ថ្ងៃ</span>
                <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50"></span>
              </div>
              <span class="font-mono font-bold text-amber-300 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
                ${formatUSD(daysSorted.length > 0 ? monthTotalExpense / daysSorted.length : 0)}
              </span>
            </div>
            <div class="border-t border-white/10 my-2.5"></div>
            <div>
              <div class="flex items-center justify-between mb-1">
                <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំណាយធំបំផុត</span>
                <span class="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-sm shadow-orange-400/50"></span>
              </div>
              <span class="font-mono font-bold text-orange-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
                ${formatUSD(monthExpenses.length > 0 ? Math.max(...monthExpenses.map(e => e.amount || 0)) : 0)}
              </span>
            </div>
          </div>
        </div>
      `;
      monthBottomBannerHtml = `
        <!-- Expense Status Sub-banner (placed at bottom of card) -->
        <div class="p-2.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-between mt-3">
          <div class="min-w-0 pr-2">
            <span class="text-xs font-bold text-rose-300 block leading-tight truncate">🧾 ការចំណាយផ្ទាល់ខ្លួនប្រចាំខែ</span>
            <span class="text-[9.5px] text-slate-400 font-mono block leading-tight mt-0.5 truncate">${monthExpenses.length} ប្រតិបត្តិការចំណាយក្នុងខែ ${parts[1]}</span>
          </div>
          <span class="font-mono text-xs font-bold text-rose-300 shrink-0">សរុប ${formatUSD(monthTotalExpense)}</span>
        </div>
      `;
    }

    // Chart Bars Html per Tab
    let chartBarsHtml = '';
    let chartLegendHtml = '';
    if (currentTab === 'all') {
      chartLegendHtml = '<span class="text-emerald-400">🟢 ចំណូល</span> | <span class="text-rose-400">🔴 ចំណាយ</span>';
      chartBarsHtml = daysSorted.map(dayIso => {
        const item = dailyMap[dayIso];
        const dayNum = parseInt(dayIso.split('-')[2], 10);
        const revHeight = Math.max(10, Math.round((item.revenue / maxDailyVal) * 95));
        const expHeight = item.expense > 0 ? Math.max(6, Math.round((item.expense / maxDailyVal) * 95)) : 0;
        return `
          <div class="flex-1 min-w-[32px] max-w-[42px] flex flex-col items-center gap-1 group select-none relative z-20">
            <span class="text-[7.5px] font-mono font-bold text-amber-300 block text-center leading-none">
              $${Math.round(item.revenue)}
            </span>
            <div class="w-full flex items-end justify-center gap-0.5 h-[105px]">
              <div class="w-1/2 rounded-t-md bg-gradient-to-t from-emerald-600 to-teal-400 shadow-sm shadow-emerald-500/20" 
                   style="height: ${revHeight}px" title="ចំណូល: ${formatUSD(item.revenue)}"></div>
              ${expHeight > 0 ? `
                <div class="w-1/2 rounded-t-md bg-gradient-to-t from-rose-600 to-red-400 shadow-sm shadow-rose-500/20" 
                     style="height: ${expHeight}px" title="ចំណាយ: ${formatUSD(item.expense)}"></div>
              ` : '<div class="w-1/2"></div>'}
            </div>
            <span class="text-[9.5px] text-slate-300 font-mono font-semibold">${dayNum}</span>
          </div>
        `;
      }).join('');
    } else if (currentTab === 'business') {
      chartLegendHtml = '<span class="text-emerald-400">🟢 ចំណូលលក់</span>';
      chartBarsHtml = daysSorted.map(dayIso => {
        const item = dailyMap[dayIso];
        const dayNum = parseInt(dayIso.split('-')[2], 10);
        const revHeight = item.revenue > 0 ? Math.max(10, Math.round((item.revenue / maxDailyVal) * 95)) : 4;
        return `
          <div class="flex-1 min-w-[32px] max-w-[42px] flex flex-col items-center gap-1 group select-none relative z-20">
            <span class="text-[7.5px] font-mono font-bold text-emerald-400 block text-center leading-none">
              $${Math.round(item.revenue)}
            </span>
            <div class="w-full flex items-end justify-center h-[105px]">
              <div class="w-3/4 rounded-t-md bg-gradient-to-t from-emerald-600 to-teal-400 shadow-sm shadow-emerald-500/20" 
                   style="height: ${revHeight}px" title="លក់បាន: ${formatUSD(item.revenue)} (${item.qty} ប្រអប់)"></div>
            </div>
            <span class="text-[9.5px] text-slate-300 font-mono font-semibold">${dayNum}</span>
          </div>
        `;
      }).join('');
    } else {
      // expenses
      chartLegendHtml = '<span class="text-rose-400">🔴 ចំណាយផ្ទាល់ខ្លួន</span>';
      chartBarsHtml = daysSorted.map(dayIso => {
        const item = dailyMap[dayIso];
        const dayNum = parseInt(dayIso.split('-')[2], 10);
        const expHeight = item.expense > 0 ? Math.max(8, Math.round((item.expense / maxDailyVal) * 95)) : 4;
        return `
          <div class="flex-1 min-w-[32px] max-w-[42px] flex flex-col items-center gap-1 group select-none relative z-20">
            <span class="text-[7.5px] font-mono font-bold text-rose-400 block text-center leading-none">
              $${Math.round(item.expense)}
            </span>
            <div class="w-full flex items-end justify-center h-[105px]">
              <div class="w-3/4 rounded-t-md bg-gradient-to-t from-rose-600 to-red-400 shadow-sm shadow-rose-500/20" 
                   style="height: ${expHeight}px" title="ចំណាយ: ${formatUSD(item.expense)}"></div>
            </div>
            <span class="text-[9.5px] text-slate-300 font-mono font-semibold">${dayNum}</span>
          </div>
        `;
      }).join('');
    }

    // Detail List per Tab (Minimizable / Collapsible: Shows 1 Day initially & when collapsed)
    const isDetailMinimized = !!appState.isAnalyticsDetailMinimized;
    let detailListHtml = '';
    const sortedDays = [...daysSorted].reverse();
    const firstDayIso = sortedDays[0];
    const remainingDays = sortedDays.slice(1);

    const renderDayAllItem = (dayIso) => {
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
        <div class="p-3 rounded-2xl bg-black/25 border border-white/5 hover:border-white/10 transition space-y-1.5">
          <!-- Top Row: Day badge, Date, Orders count & Revenue -->
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-orange-500/30">
                ${dayIso.split('-')[2]}
              </span>
              <div class="min-w-0">
                <div class="text-xs font-bold text-white flex items-center gap-1.5 truncate">
                  <span>${item.date || dayIso}</span>
                  <span class="text-[10px] font-normal text-slate-400 font-mono shrink-0">(${item.count} orders)</span>
                </div>
                <div class="text-[10px] text-slate-400 font-mono mt-0.5 truncate">
                  លក់បាន: <span class="text-slate-200 font-bold">${item.qty} ប្រអប់</span>
                </div>
              </div>
            </div>
            <div class="text-right shrink-0">
              <span class="font-mono text-sm text-emerald-400 font-bold block">${formatUSD(item.revenue)}</span>
            </div>
          </div>

          <!-- Bottom Row: Expense, Profit, and Trend vs Yesterday -->
          <div class="flex items-center justify-between text-[10px] font-mono pt-1.5 border-t border-white/5 text-slate-400">
            <div class="flex items-center gap-2 flex-wrap">
              ${item.expense > 0 ? `<span class="text-rose-400">ចំណាយ: -${formatUSD(item.expense)}</span>` : '<span class="text-slate-500">គ្មានចំណាយ</span>'}
              <span class="text-slate-600">•</span>
              <span class="text-blue-400 font-medium">ចំណេញ: ${formatUSD(item.profit)}</span>
            </div>
            <div class="shrink-0">
              ${trendBadge}
            </div>
          </div>
        </div>
      `;
    };

    const renderDayBizItem = (dayIso) => {
      const item = dailyMap[dayIso];
      return `
        <div class="p-3 rounded-2xl bg-black/25 border border-white/5 hover:border-white/10 transition space-y-1.5">
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-blue-500/30">
                ${dayIso.split('-')[2]}
              </span>
              <div class="min-w-0">
                <div class="text-xs font-bold text-white flex items-center gap-1.5 truncate">
                  <span>${item.date || dayIso}</span>
                  <span class="text-[10px] font-normal text-slate-400 font-mono shrink-0">(${item.count} orders)</span>
                </div>
                <div class="text-[10px] text-slate-400 font-mono mt-0.5 truncate">
                  លក់បាន: <span class="text-slate-200 font-bold">${item.qty} ប្រអប់</span>
                </div>
              </div>
            </div>
            <div class="text-right shrink-0">
              <span class="font-mono text-sm text-emerald-400 font-bold block">${formatUSD(item.revenue)}</span>
              <span class="text-[10.5px] text-blue-400 font-mono block mt-0.5">ចំណេញ ${formatUSD(item.profit)}</span>
            </div>
          </div>
        </div>
      `;
    };

    const sortedExpenses = [...monthExpenses].reverse();
    const firstExp = sortedExpenses[0];
    const remainingExp = sortedExpenses.slice(1);

    const renderExpItem = (e) => `
      <div class="flex items-center justify-between p-3 rounded-2xl bg-black/25 border border-white/5 hover:border-white/10 transition">
        <div class="flex items-center gap-2.5 min-w-0 pr-2">
          <div class="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 font-bold text-xs flex items-center justify-center shrink-0 border border-rose-500/30">
            <i data-lucide="arrow-down-left" class="w-4 h-4"></i>
          </div>
          <div class="min-w-0">
            <span class="text-xs font-semibold text-white block truncate leading-tight">${e.category || e.description || 'ចំណាយទូទៅ'}</span>
            <span class="text-[10px] text-slate-400 font-mono block truncate mt-0.5">${e.date || e.isoDate} ${e.note ? '• ' + e.note : ''}</span>
          </div>
        </div>
        <div class="text-right shrink-0 pl-1">
          <span class="font-mono text-xs font-bold text-rose-400">-${formatUSD(e.amount)}</span>
        </div>
      </div>
    `;

    if (currentTab === 'all') {
      detailListHtml = `
        <div class="ios-glass-card rounded-3xl p-4 sm:p-5 border border-white/10">
          <div id="analytics-detail-header" class="flex items-center justify-between mb-3 cursor-pointer select-none" onclick="toggleAnalyticsDetailTable()">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                <i data-lucide="trending-up" class="w-4 h-4"></i>
              </div>
              <div>
                <h4 class="font-bold text-xs uppercase text-white leading-tight">
                  ការប្រែប្រួលឡើង-ចុះប្រចាំថ្ងៃ (${daysSorted.length} ថ្ងៃ)
                </h4>
                <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 card-subtitle">Daily Revenue & Expense Breakdown</p>
              </div>
            </div>
            ${remainingDays.length > 0 ? `
              <div class="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 transition active:scale-95 shrink-0">
                <span id="analytics-detail-toggle-label">${isDetailMinimized ? 'ពង្រីក' : 'បង្រួម'}</span>
                <i id="analytics-detail-toggle-icon" data-lucide="${isDetailMinimized ? 'chevron-down' : 'chevron-up'}" class="w-3.5 h-3.5"></i>
              </div>
            ` : ''}
          </div>
          ${firstDayIso ? renderDayAllItem(firstDayIso) : '<div class="py-6 text-center text-slate-400 text-xs">មិនមានទិន្នន័យ</div>'}
          ${remainingDays.length > 0 ? `
            <div id="analytics-detail-list-content" class="${isDetailMinimized ? 'hidden' : 'space-y-2 mt-2'}">
              ${remainingDays.map(renderDayAllItem).join('')}
            </div>
          ` : ''}
        </div>
      `;
    } else if (currentTab === 'business') {
      detailListHtml = `
        <div class="ios-glass-card rounded-3xl p-4 sm:p-5 border border-white/10">
          <div id="analytics-detail-header" class="flex items-center justify-between mb-3 cursor-pointer select-none" onclick="toggleAnalyticsDetailTable()">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shrink-0">
                <i data-lucide="shopping-bag" class="w-4 h-4"></i>
              </div>
              <div>
                <h4 class="font-bold text-xs uppercase text-white leading-tight">
                  ទិន្នន័យលក់លម្អិតតាមថ្ងៃ (${daysSorted.length} ថ្ងៃ)
                </h4>
                <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 card-subtitle">Business Sales & Profit Per Day</p>
              </div>
            </div>
            ${remainingDays.length > 0 ? `
              <div class="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 transition active:scale-95 shrink-0">
                <span id="analytics-detail-toggle-label">${isDetailMinimized ? 'ពង្រីក' : 'បង្រួម'}</span>
                <i id="analytics-detail-toggle-icon" data-lucide="${isDetailMinimized ? 'chevron-down' : 'chevron-up'}" class="w-3.5 h-3.5"></i>
              </div>
            ` : ''}
          </div>
          ${firstDayIso ? renderDayBizItem(firstDayIso) : '<div class="py-6 text-center text-slate-400 text-xs">មិនមានទិន្នន័យ</div>'}
          ${remainingDays.length > 0 ? `
            <div id="analytics-detail-list-content" class="${isDetailMinimized ? 'hidden' : 'space-y-2 mt-2'}">
              ${remainingDays.map(renderDayBizItem).join('')}
            </div>
          ` : ''}
        </div>
      `;
    } else {
      // expenses
      detailListHtml = `
        <div class="ios-glass-card rounded-3xl p-4 sm:p-5 border border-white/10">
          <div id="analytics-detail-header" class="flex items-center justify-between mb-3 cursor-pointer select-none" onclick="toggleAnalyticsDetailTable()">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30 shrink-0">
                <i data-lucide="receipt" class="w-4 h-4"></i>
              </div>
              <div>
                <h4 class="font-bold text-xs uppercase text-white leading-tight">
                  តារាងចំណាយផ្ទាល់ខ្លួនពេញលេញ (${monthExpenses.length} មុខ)
                </h4>
                <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 card-subtitle">All Personal Expense Items</p>
              </div>
            </div>
            ${remainingExp.length > 0 ? `
              <div class="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 transition active:scale-95 shrink-0">
                <span id="analytics-detail-toggle-label">${isDetailMinimized ? 'ពង្រីក' : 'បង្រួម'}</span>
                <i id="analytics-detail-toggle-icon" data-lucide="${isDetailMinimized ? 'chevron-down' : 'chevron-up'}" class="w-3.5 h-3.5"></i>
              </div>
            ` : ''}
          </div>
          ${firstExp ? renderExpItem(firstExp) : `
            <div class="py-8 text-center text-slate-400 text-xs">
              មិនមានការចំណាយសម្រាប់ខែនេះទេ
            </div>
          `}
          ${remainingExp.length > 0 ? `
            <div id="analytics-detail-list-content" class="${isDetailMinimized ? 'hidden' : 'space-y-2 mt-2'}">
              ${remainingExp.map(renderExpItem).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }

    return `
      ${stickyYearHeaderHtml}
      <div class="space-y-3.5 px-3.5 pt-2.5 pb-6">
        <!-- Unlocked Month Tabs (Scrolls away with content) -->
        ${monthTabsUnlockedHtml}

        <!-- Month Hero Card -->
        <div class="ios-glass-card rounded-3xl p-4 sm:p-5 border border-white/10 relative overflow-hidden">
          <div class="flex items-center justify-between mb-3 gap-1.5">
            <div class="flex items-center gap-2 min-w-0 flex-1">
              <div class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 shrink-0">
                <i data-lucide="bar-chart-2" class="w-4 h-4"></i>
              </div>
              <div class="min-w-0">
                <h3 class="font-bold text-xs uppercase text-white leading-tight truncate">${monthTitle}</h3>
                <p class="text-[9.5px] text-slate-400 mt-0.5 leading-tight card-subtitle truncate">${headerSubtitle}</p>
              </div>
            </div>

            <!-- Capsule Pill -->
            <div class="shrink-0 flex items-center justify-center px-1">
              <span class="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[10px] font-bold whitespace-nowrap shadow-sm">
                ${cardPillText}
              </span>
            </div>

            <div class="flex-1 flex justify-end shrink-0">
              <button onclick="setAnalyticsMonth('all')" class="text-xs text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-0.5 px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 active:scale-95 transition">
                <span>ពេញ ១ ឆ្នាំ</span>
                <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </div>

          <!-- Dynamic KPI Grid (Top) -->
          ${kpiGridHtml}

          <!-- Daily Chart with Touch-friendly Smooth Horizontal Scroll on iPhone 17 Pro (Middle) -->
          <div class="space-y-1.5 mt-3">
            <div class="flex items-center justify-between px-1">
              <span class="text-[10px] text-slate-400 font-semibold flex items-center gap-1.5 flex-wrap">
                <i data-lucide="bar-chart" class="w-3 h-3 text-orange-400"></i>
                <span>ក្រាហ្វិកប្រចាំថ្ងៃ (${daysSorted.length} ថ្ងៃ)</span>
                <span class="text-[9px] text-slate-400">• ${chartLegendHtml}</span>
              </span>
              <span class="text-[9px] text-orange-400 font-mono">← អូសឆ្វេង-ស្តាំ →</span>
            </div>
            
            <div class="overflow-x-auto pb-3 pt-2 no-scrollbar rounded-2xl bg-black/20 border border-white/5" style="-webkit-overflow-scrolling: touch; overscroll-behavior-x: contain;">
              <div class="h-44 flex items-end gap-2 px-3 pb-2 pt-6 relative" style="min-width: ${dailyW}px;">
                ${dailySvgRunner}
                ${chartBarsHtml}
              </div>
            </div>
          </div>

          <!-- True Net Pocket Cash / Volume / Expense Highlight (Bottom of Card) -->
          ${monthBottomBannerHtml}
        </div>

        <!-- Detail Breakdown List -->
        ${detailListHtml}
      </div>
    `;
  }

  // ==========================================
  // CASE B: Full Year Overview
  // ==========================================
  const yearSales = d.personalSales.filter(s => s.isoDate.startsWith(currentActiveYear));
  const yearExpenses = (d.expenses || []).filter(e => e.isoDate && e.isoDate.startsWith(currentActiveYear));
  const yearBoost = (currentActiveYear === '2026' && d.boostByMonth) ? Object.values(d.boostByMonth).reduce((sum, v) => sum + (v || 0), 0) : 0;

  const yearRevenue = displayMonths.reduce((sum, m) => sum + monthlyStats[m].revenue, 0);
  const yearProfit = displayMonths.reduce((sum, m) => sum + monthlyStats[m].profit, 0);
  const yearExpense = displayMonths.reduce((sum, m) => sum + monthlyStats[m].expense, 0);
  const yearBoxes = displayMonths.reduce((sum, m) => sum + monthlyStats[m].qty, 0);
  const netBusinessProfit = yearProfit - yearBoost;
  const trueNetPocket = netBusinessProfit - yearExpense;

  // Max revenue or expense for chart scaling
  let maxRevenue = 100;
  if (currentTab === 'expenses') {
    maxRevenue = Math.max(...displayMonths.map(m => monthlyStats[m].expense), 100);
  } else if (currentTab === 'business') {
    maxRevenue = Math.max(...displayMonths.map(m => monthlyStats[m].revenue), 100);
  } else {
    maxRevenue = Math.max(...displayMonths.map(m => Math.max(monthlyStats[m].revenue, monthlyStats[m].expense)), 100);
  }

  // Animated SVG Trend Polyline with runner arrow for Annual chart
  let annualSvgRunner = '';
  if (displayMonths.length > 1) {
    const svgW = 1000;
    const colW = svgW / displayMonths.length;
    const pts = displayMonths.map((m, idx) => {
      const stat = monthlyStats[m];
      const val = currentTab === 'expenses' ? stat.expense : stat.revenue;
      const rH = Math.max(12, Math.round((val / maxRevenue) * 135));
      const x = Math.round((idx + 0.5) * colW);
      const y = Math.round(180 - rH);
      return { x, y };
    });
    let pathD = '';
    pts.forEach((p, i) => {
      if (i === 0) pathD += `M ${p.x} ${p.y}`;
      else {
        const prev = pts[i - 1];
        const midX = prev.x + (p.x - prev.x) / 2;
        pathD += ` C ${midX} ${prev.y}, ${midX} ${p.y}, ${p.x} ${p.y}`;
      }
    });

    const gradColor1 = currentTab === 'expenses' ? '#F43F5E' : '#F97316';
    const gradColor2 = currentTab === 'expenses' ? '#FB7185' : '#FB923C';
    const gradColor3 = currentTab === 'expenses' ? '#FDA4AF' : '#FBBF24';

    annualSvgRunner = `
      <svg viewBox="0 0 1000 224" preserveAspectRatio="none" class="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible">
        <defs>
          <linearGradient id="annualTrendGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="${gradColor1}" stop-opacity="0.25" />
            <stop offset="50%" stop-color="${gradColor2}" stop-opacity="0.85" />
            <stop offset="100%" stop-color="${gradColor3}" stop-opacity="1" />
          </linearGradient>
          <filter id="annualGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path id="annual-trend-line" d="${pathD}" fill="none" stroke="url(#annualTrendGrad)" stroke-width="2.5" stroke-dasharray="6,4" opacity="0.85" />
        <g filter="url(#annualGlow)">
          <circle r="5" fill="${gradColor1}">
            <animate attributeName="r" values="3.5;7;3.5" dur="1.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.2s" repeatCount="indefinite" />
          </circle>
          <circle r="2.5" fill="#FFF" />
          <path d="M -5 -3 L 3 0 L -5 3 Z" fill="${gradColor3}" />
          <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
            <mpath href="#annual-trend-line" />
          </animateMotion>
        </g>
      </svg>
    `;
  }

  // Annual Headers per Tab
  let annualTitle = `ពេញ ១ ឆ្នាំ ${currentActiveYear}`;
  let annualSubtitle = 'ប្រៀបធៀបចំណូល vs ចំណាយតាមខែ';
  let annualPill = 'Annual Trend';
  if (currentTab === 'business') {
    annualTitle = `អាជីវកម្មពេញ ១ ឆ្នាំ ${currentActiveYear}`;
    annualSubtitle = 'អាជីវកម្ម';
    annualPill = 'Annual Business';
  } else if (currentTab === 'expenses') {
    annualTitle = `ចំណាយផ្ទាល់ខ្លួនពេញ ១ ឆ្នាំ ${currentActiveYear}`;
    annualSubtitle = 'ចំណាយផ្ទាល់ខ្លួន';
    annualPill = 'Annual Expenses';
  }

  // Annual KPI Summary Cards (2 Square iPhone Widgets with middle divider line & auto-resize font)
  let annualKpiHtml = '';
  let annualBottomBannerHtml = '';
  if (currentTab === 'all') {
    annualKpiHtml = `
      <div class="grid grid-cols-2 gap-2 sm:gap-2.5 mb-2.5">
        <!-- Widget 1: Inflows & Profit -->
        <div class="rounded-2xl sm:rounded-3xl bg-black/35 border border-white/10 p-3 sm:p-3.5 shadow-lg flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំណូលលក់សរុប</span>
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"></span>
            </div>
            <span class="font-mono font-bold text-emerald-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
              ${formatUSD(yearRevenue)}
            </span>
          </div>
          <div class="border-t border-white/10 my-2.5"></div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំណេញដុលសរុប</span>
              <span class="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50"></span>
            </div>
            <span class="font-mono font-bold text-blue-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
              ${formatUSD(yearProfit)}
            </span>
          </div>
        </div>

        <!-- Widget 2: Boost & Expenses -->
        <div class="rounded-2xl sm:rounded-3xl bg-black/35 border border-white/10 p-3 sm:p-3.5 shadow-lg flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">${isEn ? 'Boost Amount' : 'ចំនួនលុយ Boost'}</span>
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50"></span>
            </div>
            <span class="font-mono font-bold text-amber-300 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
              ${yearBoost > 0 ? '-' + formatUSD(yearBoost) : '$0.00'}
            </span>
          </div>
          <div class="border-t border-white/10 my-2.5"></div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំណាយផ្ទាល់ខ្លួន</span>
              <span class="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-sm shadow-rose-400/50"></span>
            </div>
            <span class="font-mono font-bold text-rose-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
              -${formatUSD(yearExpense)}
            </span>
          </div>
        </div>
      </div>
    `;
    annualBottomBannerHtml = `
      <!-- Net Pocket Cash Banner (placed at bottom of card) -->
      <div class="p-2.5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-500/10 border border-emerald-500/30 flex items-center justify-between mt-3">
        <div class="min-w-0 pr-2">
          <span class="text-xs font-bold text-emerald-300 block leading-tight truncate">💵 លទ្ធផលសរុបប្រចាំឆ្នាំ ${currentActiveYear}</span>
          <span class="text-[9.5px] text-slate-400 font-mono block leading-tight mt-0.5 truncate">(ចំណេញដុល ${formatUSD(yearProfit)} - Boost ${formatUSD(yearBoost)}) - ចំណាយ ${formatUSD(yearExpense)}</span>
        </div>
        <span class="font-mono text-sm sm:text-base font-extrabold ${trueNetPocket >= 0 ? 'text-emerald-400' : 'text-rose-400'} shrink-0">${formatUSD(trueNetPocket)}</span>
      </div>
    `;
  } else if (currentTab === 'business') {
    annualKpiHtml = `
      <div class="grid grid-cols-2 gap-2 sm:gap-2.5 mb-2.5">
        <!-- Widget 1: Revenue & Profit -->
        <div class="rounded-2xl sm:rounded-3xl bg-black/35 border border-white/10 p-3 sm:p-3.5 shadow-lg flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំណូលលក់សរុប</span>
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50"></span>
            </div>
            <span class="font-mono font-bold text-emerald-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
              ${formatUSD(yearRevenue)}
            </span>
          </div>
          <div class="border-t border-white/10 my-2.5"></div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំណេញដុល</span>
              <span class="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-sm shadow-blue-400/50"></span>
            </div>
            <span class="font-mono font-bold text-blue-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
              ${formatUSD(yearProfit)}
            </span>
          </div>
        </div>

        <!-- Widget 2: Boost & Business Net -->
        <div class="rounded-2xl sm:rounded-3xl bg-black/35 border border-white/10 p-3 sm:p-3.5 shadow-lg flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">${isEn ? 'Boost Amount' : 'ចំនួនលុយ Boost'}</span>
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50"></span>
            </div>
            <span class="font-mono font-bold text-amber-300 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
              ${yearBoost > 0 ? '-' + formatUSD(yearBoost) : '$0.00'}
            </span>
          </div>
          <div class="border-t border-white/10 my-2.5"></div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំណេញសុទ្ធអាជីវកម្ម</span>
              <span class="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-sm shadow-teal-400/50"></span>
            </div>
            <span class="font-mono font-bold text-teal-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
              ${formatUSD(netBusinessProfit)}
            </span>
          </div>
        </div>
      </div>
    `;
    annualBottomBannerHtml = `
      <!-- Volume Sub-banner (placed at bottom of card) -->
      <div class="p-2.5 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-between mt-3">
        <div class="min-w-0 pr-2">
          <span class="text-xs font-bold text-blue-300 block leading-tight truncate">📦 ទិន្នផលលក់សរុប</span>
          <span class="text-[9.5px] text-slate-400 font-mono block leading-tight mt-0.5 truncate">លក់បានសរុប ${yearBoxes} ប្រអប់ • ${yearSales.length} Orders</span>
        </div>
        <span class="font-mono text-xs font-bold text-blue-300 shrink-0">មធ្យម ${(yearBoxes / Math.max(yearSales.length, 1)).toFixed(1)} ប្រអប់/order</span>
      </div>
    `;
  } else {
    // expenses
    const maxExpMonthKey = displayMonths.reduce((maxM, m) => (monthlyStats[m]?.expense || 0) > (monthlyStats[maxM]?.expense || 0) ? m : maxM, displayMonths[0] || '');
    const maxExpMonthName = maxExpMonthKey ? `ខែ ${maxExpMonthKey.split('-')[1]}` : '—';
    annualKpiHtml = `
      <div class="grid grid-cols-2 gap-2 sm:gap-2.5 mb-2.5">
        <!-- Widget 1: Total & Count -->
        <div class="rounded-2xl sm:rounded-3xl bg-black/35 border border-white/10 p-3 sm:p-3.5 shadow-lg flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំណាយសរុប</span>
              <span class="w-1.5 h-1.5 rounded-full bg-rose-400 shadow-sm shadow-rose-400/50"></span>
            </div>
            <span class="font-mono font-bold text-rose-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
              ${formatUSD(yearExpense)}
            </span>
          </div>
          <div class="border-t border-white/10 my-2.5"></div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ចំនួនដងចំណាយ</span>
              <span class="w-1.5 h-1.5 rounded-full bg-slate-300 shadow-sm shadow-slate-300/50"></span>
            </div>
            <span class="font-mono font-bold text-slate-200 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
              ${yearExpenses.length} ដង
            </span>
          </div>
        </div>

        <!-- Widget 2: Monthly Avg & Max Month -->
        <div class="rounded-2xl sm:rounded-3xl bg-black/35 border border-white/10 p-3 sm:p-3.5 shadow-lg flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">មធ្យមភាគ/ខែ</span>
              <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50"></span>
            </div>
            <span class="font-mono font-bold text-amber-300 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
              ${formatUSD(displayMonths.length > 0 ? yearExpense / displayMonths.length : 0)}
            </span>
          </div>
          <div class="border-t border-white/10 my-2.5"></div>
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="text-[10px] sm:text-[11px] text-slate-400 font-medium">ខែចំណាយច្រើនបំផុត</span>
              <span class="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-sm shadow-orange-400/50"></span>
            </div>
            <span class="font-mono font-bold text-orange-400 block tracking-tight leading-tight whitespace-nowrap" style="font-size: clamp(0.9rem, 3.8vw, 1.25rem);">
              ${maxExpMonthName}
            </span>
          </div>
        </div>
      </div>
    `;
    annualBottomBannerHtml = `
      <!-- Annual Expense Sub-banner (placed at bottom of card) -->
      <div class="p-2.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-between mt-3">
        <div class="min-w-0 pr-2">
          <span class="text-xs font-bold text-rose-300 block leading-tight truncate">🧾 ការចំណាយផ្ទាល់ខ្លួនប្រចាំឆ្នាំ ${currentActiveYear}</span>
          <span class="text-[9.5px] text-slate-400 font-mono block leading-tight mt-0.5 truncate">សរុប ${yearExpenses.length} ប្រតិបត្តិការចំណាយ</span>
        </div>
        <span class="font-mono text-xs font-bold text-rose-300 shrink-0">${formatUSD(yearExpense)}</span>
      </div>
    `;
  }

  // Annual Chart Legend & Bars
  let annualLegend = '<span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded bg-gradient-to-t from-orange-500 to-amber-400"></span> 🟢 ចំណូល</span> <span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded bg-gradient-to-t from-rose-600 to-red-400"></span> 🔴 ចំណាយ</span>';
  if (currentTab === 'business') {
    annualLegend = '<span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded bg-gradient-to-t from-emerald-500 to-teal-400"></span> 🟢 ចំណូលលក់</span>';
  } else if (currentTab === 'expenses') {
    annualLegend = '<span class="flex items-center gap-1"><span class="w-2.5 h-2.5 rounded bg-gradient-to-t from-rose-600 to-red-400"></span> 🔴 ចំណាយផ្ទាល់ខ្លួន</span>';
  }

  let annualBarsHtml = '';
  if (currentTab === 'all') {
    annualBarsHtml = displayMonths.map(m => {
      const stat = monthlyStats[m];
      const revHeight = Math.max(12, Math.round((stat.revenue / maxRevenue) * 135));
      const expHeight = stat.expense > 0 ? Math.max(8, Math.round((stat.expense / maxRevenue) * 135)) : 0;
      const parts = m.split('-');
      return `
        <div onclick="setAnalyticsMonth('${m}')" class="flex-1 min-w-[36px] flex flex-col items-center gap-1 group cursor-pointer select-none relative z-20">
          <span class="text-[7.5px] font-mono font-bold text-amber-300 tracking-tighter block text-center leading-none">
            $${Math.round(stat.revenue)}
          </span>
          <div class="w-full flex items-end justify-center gap-0.5 h-[140px]">
            <div class="w-1/2 max-w-[14px] rounded-t-lg bg-gradient-to-t from-orange-600 via-amber-500 to-orange-400 shadow-md transition-all group-hover:scale-105" 
                 style="height: ${revHeight}px" title="ចំណូល: ${formatUSD(stat.revenue)}"></div>
            ${expHeight > 0 ? `
              <div class="w-1/2 max-w-[14px] rounded-t-lg bg-gradient-to-t from-rose-600 to-red-400 shadow-md transition-all group-hover:scale-105" 
                   style="height: ${expHeight}px" title="ចំណាយ: ${formatUSD(stat.expense)}"></div>
            ` : '<div class="w-1/2 max-w-[14px]"></div>'}
          </div>
          <span class="text-[9.5px] text-slate-300 font-mono font-semibold">ខែ ${parts[1]}</span>
        </div>
      `;
    }).join('');
  } else if (currentTab === 'business') {
    annualBarsHtml = displayMonths.map(m => {
      const stat = monthlyStats[m];
      const revHeight = stat.revenue > 0 ? Math.max(12, Math.round((stat.revenue / maxRevenue) * 135)) : 6;
      const parts = m.split('-');
      return `
        <div onclick="setAnalyticsMonth('${m}')" class="flex-1 min-w-[36px] flex flex-col items-center gap-1 group cursor-pointer select-none relative z-20">
          <span class="text-[7.5px] font-mono font-bold text-emerald-400 tracking-tighter block text-center leading-none">
            $${Math.round(stat.revenue)}
          </span>
          <div class="w-full flex items-end justify-center h-[140px]">
            <div class="w-3/4 max-w-[20px] rounded-t-lg bg-gradient-to-t from-emerald-600 via-teal-500 to-emerald-400 shadow-md transition-all group-hover:scale-105" 
                 style="height: ${revHeight}px" title="លក់បាន: ${formatUSD(stat.revenue)} (${stat.qty} ប្រអប់)"></div>
          </div>
          <span class="text-[9.5px] text-slate-300 font-mono font-semibold">ខែ ${parts[1]}</span>
        </div>
      `;
    }).join('');
  } else {
    // expenses
    annualBarsHtml = displayMonths.map(m => {
      const stat = monthlyStats[m];
      const expHeight = stat.expense > 0 ? Math.max(12, Math.round((stat.expense / maxRevenue) * 135)) : 6;
      const parts = m.split('-');
      return `
        <div onclick="setAnalyticsMonth('${m}')" class="flex-1 min-w-[36px] flex flex-col items-center gap-1 group cursor-pointer select-none relative z-20">
          <span class="text-[7.5px] font-mono font-bold text-rose-400 tracking-tighter block text-center leading-none">
            $${Math.round(stat.expense)}
          </span>
          <div class="w-full flex items-end justify-center h-[140px]">
            <div class="w-3/4 max-w-[20px] rounded-t-lg bg-gradient-to-t from-rose-600 via-red-500 to-rose-400 shadow-md transition-all group-hover:scale-105" 
                 style="height: ${expHeight}px" title="ចំណាយ: ${formatUSD(stat.expense)}"></div>
          </div>
          <span class="text-[9.5px] text-slate-300 font-mono font-semibold">ខែ ${parts[1]}</span>
        </div>
      `;
    }).join('');
  }

  // Annual Table / Breakdown per Tab (Minimizable / Collapsible: Shows 1 Month initially & when collapsed)
  const isTableMinimized = !!appState.isAnalyticsTableMinimized;
  let annualTableHtml = '';
  const allMonthsDesc = displayMonths.slice(-12).reverse();
  const firstMonthKey = allMonthsDesc[0];
  const remainingMonthKeys = allMonthsDesc.slice(1);

  const renderMonthAllRow = (m) => {
    const parts = m.split('-');
    const stat = monthlyStats[m];
    return `
      <div onclick="setAnalyticsMonth('${m}')" class="flex items-center justify-between p-2.5 rounded-xl bg-black/25 border border-white/5 hover:border-orange-500/30 cursor-pointer transition">
        <div>
          <span class="text-xs font-semibold text-white block">ខែ ${parts[1]} (${parts[0]})</span>
          <span class="text-[10px] text-slate-400 font-mono">${stat.qty} ${t('boxUnit')}</span>
        </div>
        <div class="text-right flex flex-col items-end">
          <span class="font-mono text-xs text-emerald-400 font-bold block">${formatUSD(stat.revenue)}</span>
          <div class="flex items-center gap-1.5 mt-0.5">
            ${stat.expense > 0 ? `<span class="text-[10px] text-rose-400 font-mono">ចំណាយ -${formatUSD(stat.expense)}</span>` : ''}
            <span class="text-[10px] text-blue-400 font-mono">ចំណេញ ${formatUSD(stat.profit)}</span>
          </div>
        </div>
      </div>
    `;
  };

  const renderMonthBizRow = (m) => {
    const parts = m.split('-');
    const stat = monthlyStats[m];
    const mNetProf = stat.profit - stat.boost;
    return `
      <div onclick="setAnalyticsMonth('${m}')" class="flex items-center justify-between p-2.5 rounded-xl bg-black/25 border border-white/5 hover:border-orange-500/30 cursor-pointer transition">
        <div>
          <span class="text-xs font-semibold text-white block">ខែ ${parts[1]} (${parts[0]})</span>
          <span class="text-[10px] text-slate-400 font-mono">${stat.qty} ${t('boxUnit')} • ${stat.salesCount || 0} orders</span>
        </div>
        <div class="text-right flex flex-col items-end">
          <span class="font-mono text-xs text-emerald-400 font-bold block">${formatUSD(stat.revenue)}</span>
          <div class="flex items-center gap-1.5 mt-0.5">
            ${stat.boost > 0 ? `<span class="text-[10px] text-amber-300 font-mono">Boost -${formatUSD(stat.boost)}</span>` : ''}
            <span class="text-[10px] text-teal-400 font-mono">សុទ្ធ ${formatUSD(mNetProf)}</span>
          </div>
        </div>
      </div>
    `;
  };

  const renderMonthExpRow = (m) => {
    const parts = m.split('-');
    const stat = monthlyStats[m];
    return `
      <div onclick="setAnalyticsMonth('${m}')" class="flex items-center justify-between p-2.5 rounded-xl bg-black/25 border border-white/5 hover:border-rose-500/30 cursor-pointer transition">
        <div>
          <span class="text-xs font-semibold text-white block">ខែ ${parts[1]} (${parts[0]})</span>
          <span class="text-[10px] text-slate-400 font-mono">${stat.expCount || 0} ប្រតិបត្តិការចំណាយ</span>
        </div>
        <div class="text-right">
          <span class="font-mono text-xs text-rose-400 font-bold block">-${formatUSD(stat.expense)}</span>
        </div>
      </div>
    `;
  };

  if (currentTab === 'all') {
    annualTableHtml = `
      <div class="ios-glass-card rounded-3xl p-4 sm:p-5 border border-white/10">
        <div class="flex items-center justify-between mb-3 cursor-pointer select-none" onclick="toggleAnalyticsAnnualTable()">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shrink-0">
              <i data-lucide="calendar" class="w-4 h-4"></i>
            </div>
            <div>
              <h4 class="font-bold text-xs uppercase text-white leading-tight">តារាងសង្ខេបចំណូល-ចំណាយតាមខែ</h4>
              <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 card-subtitle">Monthly Revenue, Expense & Profit</p>
            </div>
          </div>
          ${remainingMonthKeys.length > 0 ? `
            <div class="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 transition active:scale-95 shrink-0">
              <span id="analytics-table-toggle-label">${isTableMinimized ? 'ពង្រីក' : 'បង្រួម'}</span>
              <i id="analytics-table-toggle-icon" data-lucide="${isTableMinimized ? 'chevron-down' : 'chevron-up'}" class="w-3.5 h-3.5"></i>
            </div>
          ` : ''}
        </div>
        ${firstMonthKey ? renderMonthAllRow(firstMonthKey) : '<div class="py-6 text-center text-slate-400 text-xs">មិនមានទិន្នន័យ</div>'}
        ${remainingMonthKeys.length > 0 ? `
          <div id="analytics-annual-table-content" class="${isTableMinimized ? 'hidden' : 'space-y-2 mt-2'}">
            ${remainingMonthKeys.map(renderMonthAllRow).join('')}
          </div>
        ` : ''}
      </div>
    `;
  } else if (currentTab === 'business') {
    annualTableHtml = `
      <div class="ios-glass-card rounded-3xl p-4 sm:p-5 border border-white/10">
        <div class="flex items-center justify-between mb-3 cursor-pointer select-none" onclick="toggleAnalyticsAnnualTable()">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shrink-0">
              <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            </div>
            <div>
              <h4 class="font-bold text-xs uppercase text-white leading-tight">តារាងទិន្នន័យអាជីវកម្មតាមខែ</h4>
              <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 card-subtitle">Monthly Sales, Orders & Profit</p>
            </div>
          </div>
          ${remainingMonthKeys.length > 0 ? `
            <div class="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 transition active:scale-95 shrink-0">
              <span id="analytics-table-toggle-label">${isTableMinimized ? 'ពង្រីក' : 'បង្រួម'}</span>
              <i id="analytics-table-toggle-icon" data-lucide="${isTableMinimized ? 'chevron-down' : 'chevron-up'}" class="w-3.5 h-3.5"></i>
            </div>
          ` : ''}
        </div>
        ${firstMonthKey ? renderMonthBizRow(firstMonthKey) : '<div class="py-6 text-center text-slate-400 text-xs">មិនមានទិន្នន័យ</div>'}
        ${remainingMonthKeys.length > 0 ? `
          <div id="analytics-annual-table-content" class="${isTableMinimized ? 'hidden' : 'space-y-2 mt-2'}">
            ${remainingMonthKeys.map(renderMonthBizRow).join('')}
          </div>
        ` : ''}
      </div>
    `;
  } else {
    // expenses
    annualTableHtml = `
      <div class="ios-glass-card rounded-3xl p-4 sm:p-5 border border-white/10">
        <div class="flex items-center justify-between mb-3 cursor-pointer select-none" onclick="toggleAnalyticsAnnualTable()">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center border border-rose-500/30 shrink-0">
              <i data-lucide="receipt" class="w-4 h-4"></i>
            </div>
            <div>
              <h4 class="font-bold text-xs uppercase text-white leading-tight">តារាងសង្ខេបការចំណាយផ្ទាល់ខ្លួនតាមខែ</h4>
              <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 card-subtitle">Monthly Expense Breakdown</p>
            </div>
          </div>
          ${remainingMonthKeys.length > 0 ? `
            <div class="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-white px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 transition active:scale-95 shrink-0">
              <span id="analytics-table-toggle-label">${isTableMinimized ? 'ពង្រីក' : 'បង្រួម'}</span>
              <i id="analytics-table-toggle-icon" data-lucide="${isTableMinimized ? 'chevron-down' : 'chevron-up'}" class="w-3.5 h-3.5"></i>
            </div>
          ` : ''}
        </div>
        ${firstMonthKey ? renderMonthExpRow(firstMonthKey) : '<div class="py-6 text-center text-slate-400 text-xs">មិនមានការចំណាយឡើយ</div>'}
        ${remainingMonthKeys.length > 0 ? `
          <div id="analytics-annual-table-content" class="${isTableMinimized ? 'hidden' : 'space-y-2 mt-2'}">
            ${remainingMonthKeys.map(renderMonthExpRow).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }

  return `
    ${stickyYearHeaderHtml}
    <div class="space-y-3.5 px-3.5 pt-2.5 pb-6">
      <!-- Unlocked Month Tabs (Scrolls away with content) -->
      ${monthTabsUnlockedHtml}

      <!-- Year Hero Card -->
      <div class="ios-glass-card rounded-3xl p-4 sm:p-5 border border-white/10 relative overflow-hidden">
        <div class="flex items-center justify-between mb-3.5">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 shrink-0">
              <i data-lucide="bar-chart-2" class="w-4 h-4"></i>
            </div>
            <div>
              <h3 class="font-bold text-xs uppercase text-white leading-tight">${annualTitle}</h3>
              <p class="text-[10px] text-slate-400 leading-tight mt-0.5 card-subtitle">${annualSubtitle}</p>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-semibold shrink-0">${annualPill}</span>
        </div>

        <!-- Annual KPI Summary (Top) -->
        ${annualKpiHtml}

        <!-- Annual Chart in the Middle -->
        <div class="mt-3">
          <div class="flex items-center gap-3 px-1 mb-2 text-[10px] text-slate-400 font-semibold">
            ${annualLegend}
          </div>

          <div class="h-56 w-full flex items-end gap-2 pt-8 pb-3 px-1 border-b border-white/10 overflow-x-auto no-scrollbar relative">
            ${annualSvgRunner}
            ${annualBarsHtml}
          </div>
        </div>

        <!-- Annual Bottom Banner (Cash in Pocket / Volume / Expense) placed at bottom of card -->
        ${annualBottomBannerHtml}
      </div>

      <!-- Annual Breakdown Table (Minimizable) -->
      ${annualTableHtml}
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
          <span id="study-word-counter">បង្ហាញ ${visibleWords.length} នៃ ${DAILY_ENGLISH_WORDS.length} ពាក្យ</span>
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

      <div id="study-load-more-container">
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
    </div>
  `;
}

let isStudyLoading = false;
function loadMoreStudyWords() {
  if (isStudyLoading || appState.studyWordCount >= DAILY_ENGLISH_WORDS.length) return;
  isStudyLoading = true;
  
  const oldWordCount = appState.studyWordCount || 5;
  const newWordCount = Math.min(oldWordCount + 5, DAILY_ENGLISH_WORDS.length);
  appState.studyWordCount = newWordCount;

  const wordsListEl = document.getElementById('study-words-list');
  const counterEl = document.getElementById('study-word-counter');
  const btnContainer = document.getElementById('study-load-more-container');

  if (wordsListEl) {
    const newSlice = DAILY_ENGLISH_WORDS.slice(oldWordCount, newWordCount);
    const newHtml = newSlice.map((w, idx) => `
      <div class="ios-glass-card rounded-2xl p-4 border border-white/10 flex items-start gap-3.5 transition-all animate-fade-in">
        <div class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 font-bold text-sm flex items-center justify-center shrink-0">
          ${oldWordCount + idx + 1}
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
    `).join('');
    
    wordsListEl.insertAdjacentHTML('beforeend', newHtml);
    if (counterEl) {
      counterEl.textContent = `បង្ហាញ ${newWordCount} នៃ ${DAILY_ENGLISH_WORDS.length} ពាក្យ`;
    }
    if (btnContainer && newWordCount >= DAILY_ENGLISH_WORDS.length) {
      btnContainer.innerHTML = `
        <div class="py-4 text-center text-xs text-slate-400 pb-6 animate-fade-in">
          🎉 លោកអ្នកបានមើលពាក្យទាំងអស់ហើយ!
        </div>
      `;
    }
    if (window.lucide) window.lucide.createIcons();
  } else {
    const container = document.getElementById('main-content');
    const prevScroll = container ? container.scrollTop : 0;
    renderCurrentView();
    if (container) {
      container.scrollTop = prevScroll;
    }
  }

  setTimeout(() => {
    isStudyLoading = false;
  }, 350);
}

// ==========================================
// 7. View: Settings (Structured Android/iOS Standard)
// ==========================================
function getSettingsViewHTML() {
  const isDark = appState.theme === 'dark';
  const isKm = appState.language === 'km';
  const active = appState.activeSettingsItem;

  // Accent metadata with Khmer / English text names (No HEX code display)
  const accentMeta = {
    blue: { name: isKm ? 'ខៀវចាស់' : 'Deep Blue', dot: '#2563EB', textColor: '#FFFFFF', darkText: false },
    coral: { name: isKm ? 'ក្រហមផ្កាថ្ម' : 'Coral Red', dot: '#F43F5E', textColor: '#FFFFFF', darkText: false },
    orange: { name: isKm ? 'ទឹកក្រូច' : 'Sunset Orange', dot: '#F97316', textColor: '#FFFFFF', darkText: false },
    amber: { name: isKm ? 'លឿងទុំ' : 'Golden Amber', dot: '#F59E0B', textColor: '#0F172A', darkText: true },
    emerald: { name: isKm ? 'បៃតងរស្មី' : 'Emerald Green', dot: '#10B981', textColor: '#FFFFFF', darkText: false },
    pink: { name: isKm ? 'ផ្កាឈូក' : 'Rose Pink', dot: '#EC4899', textColor: '#FFFFFF', darkText: false }
  };
  const curAccent = accentMeta[appState.themeAccent] || accentMeta.orange;

  // 5-Tier Font Size Metadata (14px - 15.5px - 17px - 18.5px - 20px)
  const textSizeTiers = [
    { key: 'xs', px: '14px', label: '14px', tier: 'XS', val: 1 },
    { key: 'sm', px: '15.5px', label: '15.5px', tier: 'SM', val: 2 },
    { key: 'md', px: '17px', label: '17px', tier: 'MD', val: 3, isDefault: true },
    { key: 'lg', px: '18.5px', label: '18.5px', tier: 'LG', val: 4 },
    { key: 'xl', px: '20px', label: '20px', tier: 'XL', val: 5 }
  ];
  const curTextSizeTier = textSizeTiers.find(t => t.key === appState.textSize) || textSizeTiers[2];

  const prof = getProfileData();

  return `
    <div class="space-y-4 pb-8 relative">
      
      <!-- Animated Khmer Apsara Motif with Twinkling Stars Behind (ផ្កាយក្រោយទេវតា និង Animation ទាំងទេវតា និងផ្កាយ) -->
      <div class="absolute -top-3 right-0 w-28 h-32 pointer-events-none select-none overflow-hidden z-0 flex items-start justify-end">
        
        <!-- Twinkling Stars Behind Apsara (ផ្កាយនៅពីក្រោយទេវតា - ពន្លឺស្រទន់តិចៗ មិនភ្លឺចាំង) -->
        <div class="absolute inset-0 z-0 pointer-events-none">
          <!-- Soft Ambient Star Glow Aura Behind (ពន្លឺរស្មីស្រទន់) -->
          <div class="absolute top-1 right-2 w-20 h-20 rounded-full celestial-star-twinkle"
               style="background: radial-gradient(circle, rgba(254, 243, 199, 0.08) 0%, rgba(251, 191, 36, 0.02) 45%, transparent 70%); filter: blur(3px);">
          </div>
          
          <!-- Twinkling Stars with subtle soft brightness -->
          <span class="absolute top-2 right-12 text-[9px] celestial-star-twinkle text-amber-200/40">✦</span>
          <span class="absolute top-4 right-20 text-[7px] celestial-star-twinkle text-sky-200/35" style="animation-delay: 1.2s;">✨</span>
          <span class="absolute top-10 right-6 text-[8px] celestial-star-twinkle text-amber-300/40" style="animation-delay: 0.7s;">✦</span>
          <span class="absolute top-16 right-18 text-[9px] celestial-star-twinkle text-yellow-100/35" style="animation-delay: 1.9s;">✨</span>
          <span class="absolute top-7 right-2 text-[6px] celestial-star-twinkle text-white/35" style="animation-delay: 2.4s;">✦</span>
          <span class="absolute top-22 right-10 text-[7px] celestial-star-twinkle text-amber-200/30" style="animation-delay: 1.4s;">✨</span>
          <span class="absolute top-14 right-24 text-[5px] celestial-star-twinkle text-sky-100/30" style="animation-delay: 3.1s;">✦</span>
        </div>

        <!-- Animated Apsara in Front (ទេវតា អណ្តែតថ្នមៗ ស្រទន់) -->
        <div class="w-24 h-28 relative z-10 apsara-animated" style="opacity: 0.28;">
          <img src="khmer-apsara-gold.png" alt="Khmer Art" 
               class="w-full h-full object-contain object-top-right transition-all duration-500"
               style="filter: drop-shadow(0 0 8px rgba(245,158,11,0.22));">
        </div>
      </div>

      <!-- Top Settings Profile (ចុចលើ Profile បើក Profile Dashboard Drawer) -->
      <div onclick="openProfileDrawer()" 
           class="pt-2 px-1 flex items-center gap-3.5 relative z-10 cursor-pointer active:scale-[0.98] transition group select-none"
           title="បើក Profile Dashboard">
        <div class="relative shrink-0">
          <img src="${prof.avatar || 'profile.png'}" alt="${prof.name || 'SDEY SDOEUNG'}" 
               class="w-13 h-13 rounded-full object-cover border-2 border-[var(--accent-solid)] shadow-lg group-hover:border-orange-400 transition"
               style="width: 52px; height: 52px;">
          <span class="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#070D18]"></span>
        </div>
        <div class="min-w-0 flex-1 overflow-visible">
          <div class="flex items-center gap-2 py-0.5 overflow-visible">
            <h1 class="font-black text-xl text-white leading-normal tracking-normal brand-title overflow-visible select-none group-hover:text-orange-400 transition">${prof.name || 'ស្តី ស្តើង'}</h1>
            <img src="blue-tick.png" alt="Verified" class="w-4 h-4 object-contain shrink-0 self-center" style="width: 16px; height: 16px;">
          </div>
          <p class="text-xs font-semibold text-orange-400 uppercase tracking-wider mt-0.5">${prof.subtitle || 'SDEY SDOEUNG'}</p>
        </div>
      </div>

      <!-- Settings Title & Subtitle -->
      <div class="px-1 pt-1 relative z-10">
        <h2 class="text-xl font-black text-white tracking-tight">
          ${t('settingsTitle')}
        </h2>
        <p class="text-xs text-slate-400 mt-0.5 leading-relaxed settings-subtitle">${t('settingsSubtitle')}</p>
      </div>

      <!-- ======================================================== -->
      <!-- UNIFIED INSET GROUPED LIST (ដកកាតចេញ រក្សា Icon បែប iPhone) -->
      <!-- ======================================================== -->
      <div class="settings-list-card bg-[#0F1B2E] rounded-3xl border border-white/10 overflow-hidden divide-y divide-white/5 shadow-xl">
        
        <!-- 1. ភាសា (Language) -->
        <div class="settings-row p-3.5 flex items-center justify-between select-none transition-all duration-150">
          <div class="settings-row-left flex items-center gap-3 min-w-0">
            <div class="settings-icon-box w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0 transition-all duration-150">
              <i data-lucide="globe" class="w-4 h-4 text-sky-400"></i>
            </div>
            <div class="min-w-0">
              <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${t('language')}</h4>
              <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">${isKm ? 'ភាសាខ្មែរ / អង់គ្លេស' : 'Khmer / English'}</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-1 bg-black/40 p-0.5 rounded-xl border border-white/5 shrink-0">
            <button onclick="setLanguage('km')" class="py-1 px-2.5 rounded-lg text-[10px] font-bold transition ${isKm ? 'accent-solid-btn' : 'text-slate-400'}">ខ្មែរ</button>
            <button onclick="setLanguage('en')" class="py-1 px-2.5 rounded-lg text-[10px] font-bold transition ${!isKm ? 'accent-solid-btn' : 'text-slate-400'}">EN</button>
          </div>
        </div>

        <!-- 2. ពណ៌ចម្បង (Theme Accent - ដកកូដពណ៌ចេញ ជំនួសដោយអក្សរ) -->
        <div>
          <div onclick="toggleSettingsItem('accent')" 
               class="settings-row p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-all duration-150 select-none">
            <div class="settings-row-left flex items-center gap-3 min-w-0">
              <div class="settings-icon-box w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 transition-all duration-150">
                <i data-lucide="palette" class="w-4 h-4 text-purple-400"></i>
              </div>
              <div class="min-w-0">
                <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${t('themeAccentTitle')}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">${t('themeAccentDesc')}</p>
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

          <!-- EXPANDED ACCENT SELECTION (អក្សរឈ្មោះពណ៌ច្បាស់ៗ គ្មានកូដ HEX) -->
          ${active === 'accent' ? `
            <div class="p-4 bg-black/40 border-t border-white/5 space-y-3 animate-fade-in">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-white">${isKm ? 'ជ្រើសរើសពណ៌ចម្បង (៦ ពណ៌)' : 'Choose Accent Color (6 Colors)'}</span>
                <span class="text-[10px] text-slate-400">${isKm ? 'ស្វ័យប្រវត្តិ Contrast' : 'Auto Contrast'}</span>
              </div>

              <!-- 6 Modern Swatches with Pure Text Names -->
              <div class="grid grid-cols-3 gap-2">
                <!-- 1. Deep Blue -->
                <button onclick="setThemeAccent('blue')" 
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-1 transition active:scale-95 ${appState.themeAccent === 'blue' ? 'border-blue-500 bg-blue-500/20 ring-2 ring-blue-500/40' : 'bg-white/5 border-white/5 opacity-80 hover:opacity-100'}">
                  <div class="w-8 h-8 rounded-xl bg-[#2563EB] text-white font-bold text-xs flex items-center justify-center shadow-md">Aa</div>
                  <span class="text-[11px] font-bold text-white mt-0.5">${t('accentBlue')}</span>
                  <span class="text-[9px] text-slate-400">${isKm ? '⚪ អក្សរស' : 'White Text'}</span>
                </button>

                <!-- 2. Coral Red -->
                <button onclick="setThemeAccent('coral')" 
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-1 transition active:scale-95 ${appState.themeAccent === 'coral' ? 'border-rose-500 bg-rose-500/20 ring-2 ring-rose-500/40' : 'bg-white/5 border-white/5 opacity-80 hover:opacity-100'}">
                  <div class="w-8 h-8 rounded-xl bg-[#F43F5E] text-white font-bold text-xs flex items-center justify-center shadow-md">Aa</div>
                  <span class="text-[11px] font-bold text-white mt-0.5">${t('accentCoral')}</span>
                  <span class="text-[9px] text-slate-400">${isKm ? '⚪ អក្សរស' : 'White Text'}</span>
                </button>

                <!-- 3. Sunset Orange -->
                <button onclick="setThemeAccent('orange')" 
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-1 transition active:scale-95 ${appState.themeAccent === 'orange' ? 'border-orange-500 bg-orange-500/20 ring-2 ring-orange-500/40' : 'bg-white/5 border-white/5 opacity-80 hover:opacity-100'}">
                  <div class="w-8 h-8 rounded-xl bg-[#F97316] text-white font-bold text-xs flex items-center justify-center shadow-md">Aa</div>
                  <span class="text-[11px] font-bold text-white mt-0.5">${t('accentOrange')}</span>
                  <span class="text-[9px] text-slate-400">${isKm ? '⚪ អក្សរស' : 'White Text'}</span>
                </button>

                <!-- 4. Golden Amber (Dark Charcoal Text) -->
                <button onclick="setThemeAccent('amber')" 
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-1 transition active:scale-95 ${appState.themeAccent === 'amber' ? 'border-amber-500 bg-amber-500/20 ring-2 ring-amber-500/40' : 'bg-white/5 border-white/5 opacity-80 hover:opacity-100'}">
                  <div class="w-8 h-8 rounded-xl bg-[#F59E0B] text-[#0F172A] font-black text-xs flex items-center justify-center shadow-md">Aa</div>
                  <span class="text-[11px] font-bold text-white mt-0.5">${t('accentAmber')}</span>
                  <span class="text-[9px] text-amber-300 font-bold">${isKm ? '⚫ អក្សរខ្មៅ' : 'Dark Text'}</span>
                </button>

                <!-- 5. Emerald Green -->
                <button onclick="setThemeAccent('emerald')" 
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-1 transition active:scale-95 ${appState.themeAccent === 'emerald' ? 'border-emerald-500 bg-emerald-500/20 ring-2 ring-emerald-500/40' : 'bg-white/5 border-white/5 opacity-80 hover:opacity-100'}">
                  <div class="w-8 h-8 rounded-xl bg-[#10B981] text-white font-bold text-xs flex items-center justify-center shadow-md">Aa</div>
                  <span class="text-[11px] font-bold text-white mt-0.5">${t('accentEmerald')}</span>
                  <span class="text-[9px] text-slate-400">${isKm ? '⚪ អក្សរស' : 'White Text'}</span>
                </button>

                <!-- 6. Rose Pink -->
                <button onclick="setThemeAccent('pink')" 
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-1 transition active:scale-95 ${appState.themeAccent === 'pink' ? 'border-pink-500 bg-pink-500/20 ring-2 ring-pink-500/40' : 'bg-white/5 border-white/5 opacity-80 hover:opacity-100'}">
                  <div class="w-8 h-8 rounded-xl bg-[#EC4899] text-white font-bold text-xs flex items-center justify-center shadow-md">Aa</div>
                  <span class="text-[11px] font-bold text-white mt-0.5">${t('accentPink')}</span>
                  <span class="text-[9px] text-slate-400">${isKm ? '⚪ អក្សរស' : 'White Text'}</span>
                </button>
              </div>

              <!-- Contrast Explanation Banner -->
              <div class="p-2.5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-2 text-[10px] text-slate-300">
                <span class="text-sm">💡</span>
                <p class="leading-relaxed">${t('contrastHint')}</p>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- 3. ពុម្ពអក្សរ (Font Family - 9 ជម្រើសរួមមាន AKbalthom & SN Fonts) -->
        <div>
          <div onclick="toggleSettingsItem('fonts')" 
               class="settings-row p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-all duration-150 select-none">
            <div class="settings-row-left flex items-center gap-3 min-w-0">
              <div class="settings-icon-box w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 transition-all duration-150">
                <span class="text-xs font-bold text-purple-400">Aa</span>
              </div>
              <div class="min-w-0">
                <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${t('fontTitle')}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">${t('fontDesc')}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-purple-300 border border-white/5 font-mono">
                ${appState.fontFamily === 'font-battambang' ? (isKm ? 'បាត់ដំបង' : 'Battambang') : 
                  (appState.fontFamily === 'font-koulen' ? (isKm ? 'គូលេន' : 'Koulen') : 
                  (appState.fontFamily === 'font-noto-sans-khmer' ? 'Noto Sans' : 
                  (appState.fontFamily === 'font-hanuman' ? 'Hanuman' : 
                  (appState.fontFamily === 'font-siemreap' ? (isKm ? 'សៀមរាប' : 'Siemreap') : 
                  (appState.fontFamily === 'font-bokor' ? (isKm ? 'បូកគោ' : 'Bokor') : 
                  (appState.fontFamily === 'font-khmeros-moul' ? (isKm ? 'អក្សរមូល' : 'Moul') : 
                  (appState.fontFamily === 'font-freehand' ? 'Freehand' : 
                  (appState.fontFamily === 'font-sn-simple' ? 'SN Simple' : 
                  (appState.fontFamily === 'font-sn-writhand' ? (isKm ? 'សរសេរដៃ' : 'Writhand') : 
                  (appState.fontFamily === 'font-koh-santepheap' ? (isKm ? 'សន្តិភាព' : 'Santepheap') : 
                  (appState.fontFamily === 'font-jakarta' ? 'Jakarta' : (isKm ? 'កន្ទុំរុយ' : 'Kantumruy'))))))))))))}
              </span>
              <i data-lucide="${active === 'fonts' ? 'chevron-down' : 'chevron-right'}" class="w-4 h-4 text-slate-400"></i>
            </div>
          </div>

          ${active === 'fonts' ? `
            <div class="p-4 bg-black/40 border-t border-white/5 space-y-2.5 animate-fade-in">
              <div class="flex items-center justify-between text-[11px] text-slate-300">
                <span class="font-bold text-white">${isKm ? 'ជ្រើសរើសពុម្ពអក្សរ (Google Fonts & Unicode)' : 'Choose Font Style (Google Fonts & Unicode)'}</span>
                <span class="text-[10px] text-emerald-400 font-mono font-bold">☁️ Google CDN Ready</span>
              </div>

              <!-- 12 Font Grid (4 Rows x 3 Columns) -->
              <div class="grid grid-cols-3 gap-1.5 text-center">
                <!-- 1. Kantumruy Pro (Google Fonts CDN - Default UI) -->
                <button onclick="setAppFont('font-kantumruy')" 
                        style="font-family: 'Kantumruy Pro', sans-serif;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-kantumruy' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold font-sans">កខAa</span>
                  <span class="text-[10px] font-semibold">${isKm ? 'កន្ទុំរុយ' : 'Kantumruy'}</span>
                  <span class="text-[8px] opacity-70">Google CDN</span>
                </button>

                <!-- 2. Battambang (Google Fonts CDN - Regular & Bold) -->
                <button onclick="setAppFont('font-battambang')" 
                        style="font-family: 'Battambang', sans-serif;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-battambang' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">កខAa</span>
                  <span class="text-[10px] font-semibold">${isKm ? 'បាត់ដំបង' : 'Battambang'}</span>
                  <span class="text-[8px] opacity-70">Google CDN</span>
                </button>

                <!-- 3. Koulen (Google Fonts CDN) -->
                <button onclick="setAppFont('font-koulen')" 
                        style="font-family: 'Koulen', cursive;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-koulen' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">កខAa</span>
                  <span class="text-[10px] font-semibold">${isKm ? 'គូលេន' : 'Koulen'}</span>
                  <span class="text-[8px] opacity-70">Google CDN</span>
                </button>

                <!-- 4. Noto Sans Khmer (Google Fonts CDN) -->
                <button onclick="setAppFont('font-noto-sans-khmer')" 
                        style="font-family: 'Noto Sans Khmer', sans-serif;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-noto-sans-khmer' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">កខAa</span>
                  <span class="text-[10px] font-semibold">Noto Sans</span>
                  <span class="text-[8px] opacity-70">Google CDN</span>
                </button>

                <!-- 5. Hanuman (Google Fonts CDN) -->
                <button onclick="setAppFont('font-hanuman')" 
                        style="font-family: 'Hanuman', 'Hanuman UI', sans-serif;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-hanuman' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">កខAa</span>
                  <span class="text-[10px] font-semibold">Hanuman</span>
                  <span class="text-[8px] opacity-70">Google CDN</span>
                </button>

                <!-- 6. Koh Santepheap (Google Fonts CDN) -->
                <button onclick="setAppFont('font-koh-santepheap')" 
                        style="font-family: 'Koh Santepheap', sans-serif;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-koh-santepheap' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">កខAa</span>
                  <span class="text-[10px] font-semibold">${isKm ? 'សន្តិភាព' : 'Santepheap'}</span>
                  <span class="text-[8px] opacity-70">Google CDN</span>
                </button>

                <!-- 7. Siemreap (Google Fonts CDN) -->
                <button onclick="setAppFont('font-siemreap')" 
                        style="font-family: 'Siemreap', sans-serif;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-siemreap' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">កខAa</span>
                  <span class="text-[10px] font-semibold">${isKm ? 'សៀមរាប' : 'Siemreap'}</span>
                  <span class="text-[8px] opacity-70">Google CDN</span>
                </button>

                <!-- 8. Bokor (Google Fonts CDN) -->
                <button onclick="setAppFont('font-bokor')" 
                        style="font-family: 'Bokor', cursive;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-bokor' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">កខAa</span>
                  <span class="text-[10px] font-semibold">${isKm ? 'បូកគោ' : 'Bokor'}</span>
                  <span class="text-[8px] opacity-70">Google CDN</span>
                </button>

                <!-- 9. KhmerOS Moul -->
                <button onclick="setAppFont('font-khmeros-moul')" 
                        style="font-family: 'KhmerOS Moul', sans-serif;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-khmeros-moul' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">កខ</span>
                  <span class="text-[10px] font-semibold">${isKm ? 'អក្សរមូល' : 'Moul'}</span>
                  <span class="text-[8px] opacity-70">ក្បាលធំ</span>
                </button>

                <!-- 10. Freehand (Google Fonts CDN) -->
                <button onclick="setAppFont('font-freehand')" 
                        style="font-family: 'KhmerOS Freehand', 'Freehand', cursive;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-freehand' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">កខAa</span>
                  <span class="text-[10px] font-semibold">Freehand</span>
                  <span class="text-[8px] opacity-70">Google CDN</span>
                </button>

                <!-- 11. SN KH Simple -->
                <button onclick="setAppFont('font-sn-simple')" 
                        style="font-family: 'SN KH Simple', sans-serif;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-sn-simple' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">កខAa</span>
                  <span class="text-[10px] font-semibold">SN Simple</span>
                  <span class="text-[8px] opacity-70">Minimal Tech</span>
                </button>

                <!-- 12. SN Kh Writhand -->
                <button onclick="setAppFont('font-sn-writhand')" 
                        style="font-family: 'SN Kh Writhand', cursive;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-sn-writhand' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">កខAa</span>
                  <span class="text-[10px] font-semibold">${isKm ? 'សរសេរដៃ' : 'Writhand'}</span>
                  <span class="text-[8px] opacity-70">ហត្ថលេខា</span>
                </button>

                <!-- 10. SN KH Rangerforce -->
                <button onclick="setAppFont('font-sn-ranger')" 
                        style="font-family: 'SN KH Rangerforce', sans-serif;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-sn-ranger' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">កខAa</span>
                  <span class="text-[10px] font-semibold">Rangerforce</span>
                  <span class="text-[8px] opacity-70">កែងរឹងមាំ</span>
                </button>

                <!-- 11. Koh Santepheap -->
                <button onclick="setAppFont('font-koh-santepheap')" 
                        style="font-family: 'Koh Santepheap', sans-serif;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-koh-santepheap' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">កខAa</span>
                  <span class="text-[10px] font-semibold">${isKm ? 'សន្តិភាព' : 'Santepheap'}</span>
                  <span class="text-[8px] opacity-70">អក្សរពុម្ព</span>
                </button>

                <!-- 12. Plus Jakarta Sans -->
                <button onclick="setAppFont('font-jakarta')" 
                        style="font-family: 'Plus Jakarta Sans', sans-serif;"
                        class="p-2.5 rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition active:scale-95 ${appState.fontFamily === 'font-jakarta' ? 'accent-solid-btn shadow-md border-transparent' : 'bg-white/5 border-white/5 hover:bg-white/10 text-slate-300 hover:text-white'}">
                  <span class="text-base font-bold">Aa12</span>
                  <span class="text-[10px] font-semibold">Jakarta</span>
                  <span class="text-[8px] opacity-70">Latin Clean</span>
                </button>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- 4. ទំហំអក្សរ (Text Size - Accordion with >) -->
        <div>
          <div onclick="toggleSettingsItem('textSize')" 
               class="settings-row p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-all duration-150 select-none">
            <div class="settings-row-left flex items-center gap-3 min-w-0">
              <div class="settings-icon-box w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 transition-all duration-150">
                <i data-lucide="scaling" class="w-4 h-4 text-blue-400"></i>
              </div>
              <div class="min-w-0">
                <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${t('textSizeTitle')}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">${t('textSizeDesc')}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-300 border border-blue-500/25 font-mono">
                ${curTextSizeTier.tier} (${curTextSizeTier.px})
              </span>
              <i data-lucide="${active === 'textSize' ? 'chevron-down' : 'chevron-right'}" class="w-4 h-4 text-slate-400"></i>
            </div>
          </div>

          ${active === 'textSize' ? `
            <div class="p-4 bg-black/40 border-t border-white/5 space-y-3 animate-fade-in text-size-slider-box">
              
              <!-- Title & Active Badge -->
              <div class="flex items-center justify-between text-xs">
                <span class="font-bold text-white">${isKm ? 'រំកិលកំណត់ទំហំអក្សរ (៥ កម្រិត)' : 'Adjust Font Size (5 Levels)'}</span>
                <span class="text-xs font-mono font-bold px-2.5 py-0.5 rounded-lg accent-solid-btn shadow-sm">
                  ${curTextSizeTier.tier} • ${curTextSizeTier.px}${curTextSizeTier.isDefault ? (isKm ? ' (ដើម)' : ' (Default)') : ''}
                </span>
              </div>

              <!-- iOS Style Range Slider Box with 5 Tick Marks & Active Fill -->
              <div class="bg-black/50 border border-white/10 rounded-2xl p-3.5 space-y-3.5 shadow-inner">
                
                <!-- Slider Row: A [ Track + 5 Ticks + Thumb ] A -->
                <div class="flex items-center gap-3">
                  <span class="text-xs font-black text-slate-400 select-none w-4 text-center">A</span>
                  
                  <div class="flex-1 relative flex items-center h-8">
                    <!-- Background Track Line -->
                    <div class="absolute left-2.5 right-2.5 h-2 bg-white/15 dark:bg-white/15 bg-slate-200 rounded-full pointer-events-none overflow-hidden">
                      <!-- Active Track Fill (from left to current thumb) -->
                      <div class="h-full rounded-full transition-all duration-150" 
                           style="width: ${((curTextSizeTier.val - 1) / 4) * 100}%; background-color: var(--accent-solid);"></div>
                    </div>
                    
                    <!-- 5 Tick Mark Stops on the Track -->
                    <div class="absolute left-2.5 right-2.5 flex justify-between items-center pointer-events-none">
                      ${textSizeTiers.map(tier => {
                        const isActive = tier.key === appState.textSize;
                        const isPassed = tier.val <= curTextSizeTier.val;
                        return `
                          <div class="w-3.5 h-3.5 -ml-[7px] -mr-[7px] rounded-full flex items-center justify-center transition-all ${isActive ? 'bg-white shadow-md scale-110' : (isPassed ? 'scale-90' : 'bg-white/40 dark:bg-white/30 scale-75')}"
                               style="${isActive ? 'box-shadow: 0 0 0 3px var(--accent-solid);' : (isPassed ? 'background-color: var(--accent-solid);' : '')}">
                            <span class="w-1.5 h-1.5 rounded-full ${isActive ? '' : 'bg-white'}"
                                  style="${isActive ? 'background-color: var(--accent-solid);' : ''}"></span>
                          </div>
                        `;
                      }).join('')}
                    </div>

                    <!-- Range Input -->
                    <input type="range" min="1" max="5" step="1" 
                           value="${curTextSizeTier.val}" 
                           oninput="const val = this.value; const sz = val == '1' ? 'xs' : (val == '2' ? 'sm' : (val == '3' ? 'md' : (val == '4' ? 'lg' : 'xl'))); setAppTextSize(sz);"
                           class="font-slider absolute inset-0 w-full h-full cursor-pointer z-10"
                           aria-label="Font Size Slider">
                  </div>
                  
                  <span class="text-lg font-black text-slate-100 select-none w-4 text-center">A</span>
                </div>

                <!-- 5 Exact Font Size Numbers & Tick Buttons (Direct Clickable Selection) -->
                <div class="grid grid-cols-5 gap-1 pt-2 border-t border-white/10 select-none">
                  ${textSizeTiers.map(tier => {
                    const isActive = tier.key === appState.textSize;
                    return `
                      <button type="button" onclick="setAppTextSize('${tier.key}')" 
                              class="flex flex-col items-center py-1.5 px-0.5 rounded-xl transition-all active:scale-95 ${isActive ? 'accent-solid-btn font-bold ring-1 ring-white/30' : 'text-slate-400 dark:text-slate-300 hover:text-white hover:bg-white/5'}">
                        <!-- Exact Number (14px, 15.5px, 17px, 18.5px, 20px) -->
                        <span class="text-xs font-mono font-black ${isActive ? 'text-inherit' : 'text-slate-200'}">
                          ${tier.px}
                        </span>
                        <!-- Tier Badge (XS, SM, MD, LG, XL) -->
                        <span class="text-[9px] font-bold tracking-tight mt-0.5 ${isActive ? 'opacity-95 font-black' : (tier.isDefault ? 'text-amber-400 font-bold' : 'text-slate-400')}">
                          ${tier.tier}${tier.isDefault ? (isKm ? ' ដើម' : '') : ''}
                        </span>
                        <!-- Tick Dot below -->
                        <span class="mt-1 w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-white/25'}"></span>
                      </button>
                    `;
                  }).join('')}
                </div>

              </div>

              <!-- Option: Hide Subtitles (លាក់ចំណងជើងរង មាន Button បិទ/បើក) -->
              <div onclick="toggleHideSubtitles()" 
                   class="settings-row p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between cursor-pointer transition-all duration-150 select-none">
                <div class="settings-row-left flex items-center gap-2.5 min-w-0 pr-2">
                  <div class="settings-icon-box w-8 h-8 rounded-xl ${appState.hideSubtitles ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' : 'bg-blue-500/20 border-blue-500/30 text-blue-400'} border flex items-center justify-center shrink-0 transition-all duration-150">
                    <i data-lucide="${appState.hideSubtitles ? 'eye-off' : 'eye'}" class="w-4 h-4"></i>
                  </div>
                  <div class="min-w-0">
                    <div class="flex items-center gap-1.5">
                      <h5 class="settings-row-title text-xs font-bold text-white truncate leading-tight">
                        ${isKm ? 'លាក់ចំណងជើងរង' : 'Hide Subtitles'}
                      </h5>
                      <span class="text-[9px] font-bold px-1.5 py-0.2 rounded-md ${appState.hideSubtitles ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/10 text-slate-400'}">
                        ${appState.hideSubtitles ? (isKm ? 'បើក' : 'ON') : (isKm ? 'បិទ' : 'OFF')}
                      </span>
                    </div>
                    <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">
                      ${isKm ? 'បង្ហាញតែចំណងជើងធំៗ ដើម្បីឱ្យស្រឡះ និងងាយស្រួលមើល' : 'Show main titles only for cleaner readability'}
                    </p>
                  </div>
                </div>
                <button type="button" 
                        onclick="event.stopPropagation(); toggleHideSubtitles();"
                        class="w-11 h-6 rounded-full transition-colors duration-200 p-0.5 relative flex items-center shrink-0 ${appState.hideSubtitles ? 'bg-emerald-500' : 'bg-slate-700'}"
                        role="switch" aria-checked="${appState.hideSubtitles}">
                  <div class="w-5 h-5 bg-white switch-thumb rounded-full shadow-md transform transition-transform duration-200 ${appState.hideSubtitles ? 'translate-x-5' : 'translate-x-0'}"></div>
                </button>
              </div>

              <!-- Live Sample Preview -->
              <div class="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div class="min-w-0 pr-2">
                  <p class="text-slate-400 text-[10px] uppercase tracking-wider font-bold">${isKm ? 'គំរូទំហំអក្សរជាក់ស្តែង' : 'Live Preview'}:</p>
                  <p class="font-bold text-white truncate mt-0.5" style="font-size: ${curTextSizeTier.px};">
                    ${isKm ? 'សួស្តី! នេះជាទំហំអក្សរគំរូជាក់ស្តែង' : 'Sample typography preview'}
                  </p>
                  <p class="text-[10px] text-slate-400 font-mono truncate mt-0.5 settings-subtitle">
                    ${isKm ? 'ចំណងជើងរងគំរូ (កាលបរិច្ឆេទ • សាច់ប្រាក់)' : 'Subtitle Preview • Secondary Description'}
                  </p>
                </div>
                <span class="shrink-0 px-2.5 py-1 rounded-lg bg-white/10 text-slate-200 font-mono text-[11px] font-bold border border-white/10">
                  ${curTextSizeTier.px}
                </span>
              </div>

            </div>
          ` : ''}
        </div>

        <!-- 5. ផ្ទាំងរូបភាពចាក់សោរ (Lock Screen Wallpaper - បន្ថែម ៣ ពណ៌/ម៉ូដទៀត) -->
        <div>
          <div onclick="toggleSettingsItem('wallpaper')" 
               class="settings-row p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-all duration-150 select-none">
            <div class="settings-row-left flex items-center gap-3 min-w-0">
              <div class="settings-icon-box w-8 h-8 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0 transition-all duration-150">
                <i data-lucide="image" class="w-4 h-4 text-indigo-400"></i>
              </div>
              <div class="min-w-0">
                <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${t('wallpaperTitle')}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">${t('wallpaperDesc')}</p>
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

          ${active === 'wallpaper' ? `
            <div class="p-3.5 bg-black/40 border-t border-white/5 space-y-2 animate-fade-in">
              <div class="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                <!-- Wallpaper 1: Deep Mesh -->
                <button onclick="setLockWallpaper('wp-deep-mesh')" 
                        class="shrink-0 w-24 p-2 rounded-2xl border text-center transition active:scale-95 ${appState.lockWallpaper === 'wp-deep-mesh' ? 'bg-orange-500/20 border-orange-500 ring-2 ring-orange-500/50' : 'bg-black/30 border-white/10 opacity-80 hover:opacity-100'}">
                  <div class="w-full h-14 rounded-xl bg-gradient-to-br from-indigo-900 via-blue-950 to-slate-900 border border-white/20 mb-1 relative overflow-hidden flex items-center justify-center">
                    <span class="text-[9px] font-mono text-white/90 font-bold">9:41</span>
                  </div>
                  <p class="text-[11px] font-bold text-white truncate">${isKm ? 'សំណាញ់ខៀវ' : 'Deep Mesh'}</p>
                  <span class="text-[9px] text-slate-400">${isKm ? 'លំនាំដើម' : 'Default'}</span>
                </button>

                <!-- Wallpaper 2: Midnight Purple -->
                <button onclick="setLockWallpaper('wp-midnight-purple')" 
                        class="shrink-0 w-24 p-2 rounded-2xl border text-center transition active:scale-95 ${appState.lockWallpaper === 'wp-midnight-purple' ? 'bg-orange-500/20 border-orange-500 ring-2 ring-orange-500/50' : 'bg-black/30 border-white/10 opacity-80 hover:opacity-100'}">
                  <div class="w-full h-14 rounded-xl bg-gradient-to-br from-purple-950 via-slate-950 to-indigo-950 border border-white/20 mb-1 relative overflow-hidden flex items-center justify-center">
                    <span class="text-[9px] font-mono text-white/90 font-bold">9:41</span>
                  </div>
                  <p class="text-[11px] font-bold text-white truncate">${isKm ? 'ស្វាយរាត្រី' : 'Midnight'}</p>
                  <span class="text-[9px] text-slate-400">${isKm ? 'ស្វាយចាស់' : 'Purple'}</span>
                </button>

                <!-- Wallpaper 3: Pure OLED -->
                <button onclick="setLockWallpaper('wp-pure-oled')" 
                        class="shrink-0 w-24 p-2 rounded-2xl border text-center transition active:scale-95 ${appState.lockWallpaper === 'wp-pure-oled' ? 'bg-orange-500/20 border-orange-500 ring-2 ring-orange-500/50' : 'bg-black/30 border-white/10 opacity-80 hover:opacity-100'}">
                  <div class="w-full h-14 rounded-xl bg-black border border-white/30 mb-1 relative overflow-hidden flex items-center justify-center">
                    <span class="text-[9px] font-mono text-white/90 font-bold">9:41</span>
                  </div>
                  <p class="text-[11px] font-bold text-white truncate">${isKm ? 'ខ្មៅសុទ្ធ' : 'Pure OLED'}</p>
                  <span class="text-[9px] text-slate-400">${isKm ? 'សន្សំថ្ម' : 'True Black'}</span>
                </button>

                <!-- Wallpaper 4: Emerald Aurora -->
                <button onclick="setLockWallpaper('wp-emerald-aurora')" 
                        class="shrink-0 w-24 p-2 rounded-2xl border text-center transition active:scale-95 ${appState.lockWallpaper === 'wp-emerald-aurora' ? 'bg-orange-500/20 border-orange-500 ring-2 ring-orange-500/50' : 'bg-black/30 border-white/10 opacity-80 hover:opacity-100'}">
                  <div class="w-full h-14 rounded-xl bg-gradient-to-br from-emerald-950 via-teal-950 to-black border border-white/20 mb-1 relative overflow-hidden flex items-center justify-center">
                    <span class="text-[9px] font-mono text-white/90 font-bold">9:41</span>
                  </div>
                  <p class="text-[11px] font-bold text-white truncate">${isKm ? 'បៃតងរស្មី' : 'Aurora'}</p>
                  <span class="text-[9px] text-slate-400">${isKm ? 'ធម្មជាតិ' : 'Emerald'}</span>
                </button>

                <!-- Wallpaper 5: NEW Velvet Crimson (ក្រហមប្រណីត) -->
                <button onclick="setLockWallpaper('wp-velvet-crimson')" 
                        class="shrink-0 w-24 p-2 rounded-2xl border text-center transition active:scale-95 ${appState.lockWallpaper === 'wp-velvet-crimson' ? 'bg-orange-500/20 border-orange-500 ring-2 ring-orange-500/50' : 'bg-black/30 border-white/10 opacity-80 hover:opacity-100'}">
                  <div class="w-full h-14 rounded-xl bg-gradient-to-br from-rose-950 via-red-950 to-black border border-rose-500/30 mb-1 relative overflow-hidden flex items-center justify-center">
                    <span class="text-[9px] font-mono text-white/90 font-bold">9:41</span>
                  </div>
                  <p class="text-[11px] font-bold text-white truncate">${isKm ? 'ក្រហមប្រណីត' : 'Crimson'}</p>
                  <span class="text-[9px] text-rose-400">${isKm ? 'ម៉ូដថ្មី' : 'New'}</span>
                </button>

                <!-- Wallpaper 6: NEW Royal Gold (មាសរាជវង្ស) -->
                <button onclick="setLockWallpaper('wp-royal-gold')" 
                        class="shrink-0 w-24 p-2 rounded-2xl border text-center transition active:scale-95 ${appState.lockWallpaper === 'wp-royal-gold' ? 'bg-orange-500/20 border-orange-500 ring-2 ring-orange-500/50' : 'bg-black/30 border-white/10 opacity-80 hover:opacity-100'}">
                  <div class="w-full h-14 rounded-xl bg-gradient-to-br from-amber-950 via-yellow-950 to-black border border-amber-500/30 mb-1 relative overflow-hidden flex items-center justify-center">
                    <span class="text-[9px] font-mono text-white/90 font-bold">9:41</span>
                  </div>
                  <p class="text-[11px] font-bold text-white truncate">${isKm ? 'មាសរាជវង្ស' : 'Royal Gold'}</p>
                  <span class="text-[9px] text-amber-300 font-bold">${isKm ? 'ម៉ូដថ្មី' : 'New'}</span>
                </button>

                <!-- Wallpaper 7: NEW Cyber Cyan (ខៀវរាត្រី) -->
                <button onclick="setLockWallpaper('wp-cyber-cyan')" 
                        class="shrink-0 w-24 p-2 rounded-2xl border text-center transition active:scale-95 ${appState.lockWallpaper === 'wp-cyber-cyan' ? 'bg-orange-500/20 border-orange-500 ring-2 ring-orange-500/50' : 'bg-black/30 border-white/10 opacity-80 hover:opacity-100'}">
                  <div class="w-full h-14 rounded-xl bg-gradient-to-br from-cyan-950 via-sky-950 to-black border border-cyan-500/30 mb-1 relative overflow-hidden flex items-center justify-center">
                    <span class="text-[9px] font-mono text-white/90 font-bold">9:41</span>
                  </div>
                  <p class="text-[11px] font-bold text-white truncate">${isKm ? 'ខៀវរាត្រី' : 'Cyber Cyan'}</p>
                  <span class="text-[9px] text-cyan-400">${isKm ? 'ម៉ូដថ្មី' : 'New'}</span>
                </button>
              </div>
            </div>
          ` : ''}
        </div>

        <!-- 6. ទម្រង់ពណ៌ (Color Mode - ស្វ័យប្រវត្តិ / ភ្លឺ / ងងឹត) -->
        <div class="settings-row p-3.5 flex items-center justify-between select-none transition-all duration-150">
          <div class="settings-row-left flex items-center gap-3 min-w-0">
            <div class="settings-icon-box w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 transition-all duration-150">
              <i data-lucide="${appState.theme === 'auto' ? 'sun-medium' : (isDark ? 'moon' : 'sun')}" class="w-4 h-4 text-amber-400"></i>
            </div>
            <div class="min-w-0">
              <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${t('theme')}</h4>
              <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">${appState.theme === 'auto' ? (isKm ? 'ស្វ័យប្រវត្តិតាមទូរស័ព្ទ' : 'Auto (System)') : (isDark ? (isKm ? 'របៀបងងឹត' : 'Dark Mode') : (isKm ? 'របៀបភ្លឺ' : 'Light Mode'))}</p>
            </div>
          </div>
          <div class="grid grid-cols-3 gap-1 bg-black/40 p-0.5 rounded-xl border border-white/5 shrink-0">
            <button onclick="toggleTheme('auto')" class="py-1 px-2 rounded-lg text-[10px] font-bold transition ${appState.theme === 'auto' ? 'accent-solid-btn shadow-sm' : 'text-slate-400 hover:text-white'}">${isKm ? 'ស្វ័យប្រវត្តិ' : 'Auto'}</button>
            <button onclick="toggleTheme('light')" class="py-1 px-2 rounded-lg text-[10px] font-bold transition ${appState.theme === 'light' ? 'accent-solid-btn shadow-sm' : 'text-slate-400 hover:text-white'}">${t('light')}</button>
            <button onclick="toggleTheme('dark')" class="py-1 px-2 rounded-lg text-[10px] font-bold transition ${appState.theme === 'dark' ? 'accent-solid-btn shadow-sm' : 'text-slate-400 hover:text-white'}">${t('dark')}</button>
          </div>
        </div>

        <!-- 7. ការជូនដំណឹង (Notifications) -->
        <div class="settings-row p-3.5 flex items-center justify-between select-none transition-all duration-150">
          <div class="settings-row-left flex items-center gap-3 min-w-0">
            <div class="settings-icon-box w-8 h-8 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shrink-0 transition-all duration-150">
              <i data-lucide="bell" class="w-4 h-4 text-rose-400"></i>
            </div>
            <div class="min-w-0">
              <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${t('notificationsTitle')}</h4>
              <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">${t('notificationsDesc')}</p>
            </div>
          </div>
          <button onclick="toggleNotificationsEnabled()" 
                  class="w-11 h-6 rounded-full transition-colors duration-200 p-0.5 relative flex items-center shrink-0 ${appState.notificationsEnabled ? 'bg-emerald-500' : 'bg-slate-700'}"
                  role="switch" aria-checked="${appState.notificationsEnabled}">
            <div class="w-5 h-5 bg-white switch-thumb rounded-full shadow-md transform transition-transform duration-200 ${appState.notificationsEnabled ? 'translate-x-5' : 'translate-x-0'}"></div>
          </button>
        </div>

        <!-- 8. ការចាក់សោរ (Security / Passcode Lock) -->
        <div class="settings-row p-3.5 flex items-center justify-between select-none transition-all duration-150">
          <div class="settings-row-left flex items-center gap-3 min-w-0">
            <div class="settings-icon-box w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 transition-all duration-150">
              <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i>
            </div>
            <div class="min-w-0">
              <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${t('enablePinTitle')}</h4>
              <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">${t('enablePinDesc')}</p>
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
              <div class="w-5 h-5 bg-white switch-thumb rounded-full shadow-md transform transition-transform duration-200 ${appState.pinEnabled ? 'translate-x-5' : 'translate-x-0'}"></div>
            </button>
          </div>
        </div>

        <!-- 9. ការរៀបចំកាតទិន្នន័យ (Card Layout & Display - Accordion with >) -->
        <div>
          <div onclick="toggleSettingsItem('cardPreferences')" 
               class="settings-row p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-all duration-150 select-none">
            <div class="settings-row-left flex items-center gap-3 min-w-0">
              <div class="settings-icon-box w-8 h-8 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center shrink-0 transition-all duration-150">
                <i data-lucide="layers" class="w-4 h-4 text-teal-400"></i>
              </div>
              <div class="min-w-0">
                <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${t('layoutTitle')}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">${t('layoutDesc')}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-teal-500/15 text-teal-300 border border-teal-500/25 font-mono">
                ${appState.cardLayout === '1' ? (isKm ? '១. ' : '1. ') + t('layout1') : (appState.cardLayout === '2' ? (isKm ? '២. ' : '2. ') + t('layout2') : (isKm ? '៣. ' : '3. ') + t('layout3'))}
              </span>
              <i data-lucide="${active === 'cardPreferences' ? 'chevron-down' : 'chevron-right'}" class="w-4 h-4 text-slate-400"></i>
            </div>
          </div>

          ${active === 'cardPreferences' ? `
            <div class="p-4 bg-black/40 border-t border-white/5 space-y-4 animate-fade-in">
              <!-- Part A: Card Layout / Order -->
              <div class="space-y-2.5">
                <div class="flex items-center justify-between text-[11px] text-slate-300">
                  <span class="font-bold text-white">${isKm ? 'លំដាប់កាតលើទំព័រដើម' : 'Dashboard Card Order'}</span>
                  <span class="text-[10px] text-slate-400 font-mono">${isKm ? '៣ ជម្រើស' : '3 Options'}</span>
                </div>
                <!-- iOS Segmented Control: Option 1, 2, 3 -->
                <div class="grid grid-cols-3 gap-1 bg-black/50 p-1 rounded-2xl border border-white/10 text-center text-xs">
                  <button onclick="setCardLayout('1')" 
                          class="py-2.5 rounded-xl text-[11px] font-semibold transition active:scale-95 ${appState.cardLayout === '1' ? 'accent-solid-btn shadow-md' : 'text-slate-400 hover:text-white'}">
                    <span>${isKm ? '១. ' : '1. '}${t('layout1')}</span>
                  </button>
                  <button onclick="setCardLayout('2')" 
                          class="py-2.5 rounded-xl text-[11px] font-semibold transition active:scale-95 ${appState.cardLayout === '2' ? 'accent-solid-btn shadow-md' : 'text-slate-400 hover:text-white'}">
                    <span>${isKm ? '២. ' : '2. '}${t('layout2')}</span>
                  </button>
                  <button onclick="setCardLayout('3')" 
                          class="py-2.5 rounded-xl text-[11px] font-semibold transition active:scale-95 ${appState.cardLayout === '3' ? 'accent-solid-btn shadow-md' : 'text-slate-400 hover:text-white'}">
                    <span>${isKm ? '៣. ' : '3. '}${t('layout3')}</span>
                  </button>
                </div>
                <!-- Layout Description Box -->
                <div class="p-2.5 rounded-xl bg-white/5 border border-white/5 text-[10px] text-slate-300 leading-relaxed">
                  ${appState.cardLayout === '1' 
                    ? (isKm ? '🔹 <strong>ស្តង់ដា៖</strong> ទឹកប្រាក់សុទ្ធ ➔ 📌 កាលបរិច្ឆេទ ➔ សង្ខេបលក់/ចំណាយ ➔ ស្ថាពរហិរញ្ញវត្ថុ ➔ ចំណាយថ្ងៃនេះ ➔ ក្រុម' : '🔹 <strong>Standard:</strong> Pure Cash ➔ Date Filter ➔ Sales/Expenses ➔ Net Cash ➔ Today Expenses ➔ Team')
                    : (appState.cardLayout === '2'
                      ? (isKm ? '🔹 <strong>ហិរញ្ញវត្ថុ៖</strong> ទឹកប្រាក់សុទ្ធ ➔ ស្ថាពរហិរញ្ញវត្ថុ ➔ ចំណាយថ្ងៃនេះ ➔ 📌 កាលបរិច្ឆេទ ➔ សង្ខេបលក់/ចំណាយ ➔ ក្រុម' : '🔹 <strong>Finance:</strong> Pure Cash ➔ Net Cash ➔ Today Expenses ➔ Date Filter ➔ Sales/Expenses ➔ Team')
                      : (isKm ? '🔹 <strong>ផ្នែកលក់៖</strong> 📌 កាលបរិច្ឆេទ ➔ សង្ខេបលក់/ចំណាយ ➔ លក់ក្រុម ➔ ទឹកប្រាក់សុទ្ធ ➔ ស្ថាពរហិរញ្ញវត្ថុ ➔ ចំណាយថ្ងៃនេះ' : '🔹 <strong>Sales:</strong> Date Filter ➔ Sales/Expenses ➔ Team Sales ➔ Pure Cash ➔ Net Cash ➔ Today Expenses'))}
                </div>
              </div>

              <!-- Part B: Card Display / Visibility -->
              <div class="border-t border-white/10 pt-3 space-y-2.5">
                <div class="flex items-center justify-between text-xs">
                  <span class="font-bold text-white">${isKm ? 'ការបង្ហាញកាតលើទំព័រដើម' : 'Dashboard Card Display'}</span>
                  <span class="text-[10px] text-teal-400 font-mono font-bold">${isKm ? 'ធ្វើបច្ចុប្បន្នភាពភ្លាមៗ' : 'Live Synced'}</span>
                </div>

                <!-- Main Master Toggle: Auto-hide Empty Cards -->
                <div onclick="toggleCardVisibility('autoHideEmpty')" 
                     class="settings-row p-3 rounded-2xl bg-teal-500/10 hover:bg-teal-500/15 border border-teal-500/30 flex items-center justify-between cursor-pointer transition select-none">
                  <div class="flex items-center gap-2.5 min-w-0 pr-2">
                    <div class="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center shrink-0">
                      <i data-lucide="sparkles" class="w-4 h-4"></i>
                    </div>
                    <div class="min-w-0">
                      <div class="flex items-center gap-1.5">
                        <h5 class="text-xs font-bold text-teal-300 truncate">
                          ${isKm ? 'លាក់កាតគ្មានទិន្នន័យស្វ័យប្រវត្តិ' : 'Auto-Hide Empty Cards'}
                        </h5>
                      </div>
                      <p class="text-[10px] text-slate-300 mt-0.5">
                        ${isKm ? 'លាក់កាតណាដែលគ្មានទិន្នន័យក្នុងថ្ងៃ ឬខែនោះ' : 'Hide cards with 0 data in selected period'}
                      </p>
                    </div>
                  </div>
                  <button type="button" 
                          onclick="event.stopPropagation(); toggleCardVisibility('autoHideEmpty');"
                          class="w-11 h-6 rounded-full transition-colors duration-200 p-0.5 relative flex items-center shrink-0 ${(appState.cardVisibility?.autoHideEmpty === true) ? 'bg-teal-500' : 'bg-slate-700'}"
                          role="switch" aria-checked="${(appState.cardVisibility?.autoHideEmpty === true)}">
                    <div class="w-5 h-5 bg-white switch-thumb rounded-full shadow-md transform transition-transform duration-200 ${(appState.cardVisibility?.autoHideEmpty === true) ? 'translate-x-5' : 'translate-x-0'}"></div>
                  </button>
                </div>

                <div class="pt-1.5 pb-1 text-[11px] font-bold text-slate-400">
                  ${isKm ? 'កាតទិន្នន័យនីមួយៗ៖' : 'Individual Cards:'}
                </div>

                <!-- List of Cards -->
                <div class="space-y-1.5">
                  ${[
                    { key: 'pureCash', label: isKm ? 'កាតទឹកប្រាក់ដែលមាន' : 'Available Funds Card', icon: 'wallet', color: 'text-orange-400' },
                    { key: 'salesPerformance', label: isKm ? 'កាតសង្ខេបការលក់ និងចំណាយ' : 'Sales & Expenses Card', icon: 'bar-chart-2', color: 'text-blue-400' },
                    { key: 'netCash', label: isKm ? 'កាតស្ថាពរហិរញ្ញវត្ថុ' : 'Net Cash Position Card', icon: 'landmark', color: 'text-emerald-400' },
                    { key: 'expenses', label: isKm ? 'កាតការចំណាយ' : 'Expenses Card', icon: 'receipt', color: 'text-rose-400' },
                    { key: 'teamSales', label: isKm ? 'កាតការលក់ក្រុម' : 'Team Sales Card', icon: 'users', color: 'text-amber-400' },
                    { key: 'tools', label: isKm ? 'កាតឧបករណ៍រហ័ស' : 'Quick Tools Card', icon: 'sparkles', color: 'text-purple-400' }
                  ].map(item => {
                    const isVisible = (appState.cardVisibility && appState.cardVisibility[item.key] !== false);
                    return `
                      <div onclick="toggleCardVisibility('${item.key}')" 
                           class="p-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-between cursor-pointer transition select-none">
                        <div class="flex items-center gap-2.5 min-w-0 pr-2">
                          <i data-lucide="${item.icon}" class="w-4 h-4 ${item.color} shrink-0"></i>
                          <span class="text-xs font-semibold text-white truncate">${item.label}</span>
                        </div>
                        <button type="button" 
                                onclick="event.stopPropagation(); toggleCardVisibility('${item.key}');"
                                class="w-9 h-5 rounded-full transition-colors duration-200 p-0.5 relative flex items-center shrink-0 ${isVisible ? 'bg-emerald-500' : 'bg-slate-700'}"
                                role="switch" aria-checked="${isVisible}">
                          <div class="w-4 h-4 bg-white switch-thumb rounded-full shadow-md transform transition-transform duration-200 ${isVisible ? 'translate-x-4' : 'translate-x-0'}"></div>
                        </button>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>

            </div>
          ` : ''}
        </div>

        <!-- 10. អំពីខ្ញុំ (About Me) -->
        <div onclick="openAboutModal()" 
             class="settings-row p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-all duration-150 select-none">
          <div class="settings-row-left flex items-center gap-3 min-w-0">
            <div class="settings-icon-box w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0 transition-all duration-150">
              <i data-lucide="user" class="w-4 h-4 text-orange-400"></i>
            </div>
            <div class="min-w-0">
              <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${t('aboutMe')}</h4>
              <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">${isKm ? 'ស្តី ស្តើង • ប្រធានគ្រប់គ្រង' : 'SDEY SDOEUNG • Manager'}</p>
            </div>
          </div>
          <div class="flex items-center gap-2 shrink-0">
            <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400"></i>
          </div>
        </div>

      </div>

      <!-- 11. កំណត់ឡើងវិញទៅទម្រង់ដើម (Reset to Default Button) -->
      <div class="pt-2">
        <button onclick="resetAppSettings()" 
                class="w-full p-3.5 rounded-2xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 text-rose-400 hover:text-rose-300 font-semibold text-xs flex items-center justify-center gap-2 transition active:scale-95 shadow-sm">
          <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
          <span>${t('resetSettingsTitle')}</span>
        </button>
        <p class="text-[10px] text-slate-500 text-center mt-1.5 px-4 settings-subtitle">${t('resetSettingsDesc')}</p>
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
        <div class="flex items-center gap-1.5 flex-wrap">
          <span class="font-bold text-xs text-white">${item.customer}</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 font-mono">${item.orderId}</span>
          ${item.note && item.note.includes('[SG Pro]') ? '<span class="text-[9px] px-1.5 py-0.5 rounded bg-purple-500/25 text-purple-300 font-bold border border-purple-500/40">SG Pro</span>' : ''}
        </div>
        <span class="font-mono text-emerald-400 font-bold text-xs">${formatUSD(item.totalAmount)}</span>
      </div>
      <div class="text-[11px] text-slate-400 flex items-center justify-between">
        <span>📍 ${item.location || '—'}</span>
        <span>📞 ${item.phone || '—'}</span>
      </div>
      ${item.note ? `<div class="text-[10px] text-slate-400 italic">📝 ${item.note}</div>` : ''}
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
  if (window.lucide) window.lucide.createIcons();
  setDockVisible(true);
  if (listEl && typeof hookScrollableForDock === 'function') hookScrollableForDock(listEl, false);
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
  setDockVisible(true);
  if (listEl && typeof hookScrollableForDock === 'function') hookScrollableForDock(listEl, false);
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
  setDockVisible(true);
  const tableContainer = document.getElementById('cod-modal-table-container');
  if (tableContainer && typeof hookScrollableForDock === 'function') hookScrollableForDock(tableContainer, false);
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
  setDockVisible(true);
  if (listEl && typeof hookScrollableForDock === 'function') hookScrollableForDock(listEl, false);
  if (window.lucide) window.lucide.createIcons();
}

function closeBankModal() {
  const modal = document.getElementById('bank-modal');
  if (modal) modal.classList.add('hidden');
}

// ==========================================
// Team Member Daily Sets Drilldown Modal
// ==========================================
let currentTeamSetsFilterOnlySales = false;
let currentTeamSetsSearchQuery = '';
let activeTeamSetsLeader = null;
let activeTeamSetsMonthNum = null;

function openTeamSetsModal(leaderName, monthNum) {
  const d = DataService.data;
  if (!d) return;

  const modal = document.getElementById('team-sets-modal');
  if (!modal) return;

  const targetMonth = monthNum || parseInt((appState.selectedMonthKey || '2026-10').split('-')[1], 10) || 10;
  activeTeamSetsMonthNum = targetMonth;

  const leaders = (d.teamLeadersByMonth && d.teamLeadersByMonth[targetMonth]) || d.teamLeaders || [];
  const leader = leaders.find(l => l.name === leaderName) || leaders[0];
  if (!leader) return;

  activeTeamSetsLeader = leader;
  currentTeamSetsFilterOnlySales = false;
  currentTeamSetsSelectedDay = null;

  renderTeamSetsModalContent();

  modal.classList.remove('hidden');

  // Activate dock behavior exactly like Profile dashboard
  const dock = document.getElementById('bottom-dock');
  if (dock) {
    dock.classList.add('dock-profile-active');
  }
  setDockVisible(true);

  const container = document.getElementById('team-sets-modal-table-container');
  if (container) {
    container.scrollTop = 0;
    if (typeof hookScrollableForDock === 'function') hookScrollableForDock(container, false);
  }
  if (window.lucide) window.lucide.createIcons();
  if (navigator.vibrate) navigator.vibrate(12);
}

function closeTeamSetsModal() {
  const modal = document.getElementById('team-sets-modal');
  if (modal) modal.classList.add('hidden');

  const dock = document.getElementById('bottom-dock');
  if (dock) {
    dock.classList.remove('dock-profile-active');
  }
}

let currentTeamSetsSelectedDay = null;

function toggleTeamSetsFilterOnlySales() {
  currentTeamSetsFilterOnlySales = !currentTeamSetsFilterOnlySales;
  renderTeamSetsModalContent();
}

function selectTeamSetsFilterSales(onlySales, event) {
  if (event) event.stopPropagation();
  currentTeamSetsSelectedDay = null;
  currentTeamSetsFilterOnlySales = onlySales;
  const menu = document.getElementById('team-sets-date-dropdown-menu');
  if (menu) menu.classList.add('hidden');
  renderTeamSetsModalContent();
}

function toggleTeamSetsDateDropdown(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('team-sets-date-dropdown-menu');
  if (!menu) return;
  const isHidden = menu.classList.contains('hidden');
  if (isHidden) {
    renderTeamSetsMiniCalendar();
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
  if (window.lucide) window.lucide.createIcons();
}

function selectTeamSetsCalendarDay(day, event) {
  if (event) event.stopPropagation();
  currentTeamSetsSelectedDay = day;
  currentTeamSetsFilterOnlySales = false;
  const menu = document.getElementById('team-sets-date-dropdown-menu');
  if (menu) menu.classList.add('hidden');
  renderTeamSetsModalContent();
}

function renderTeamSetsMiniCalendar() {
  const menu = document.getElementById('team-sets-date-dropdown-menu');
  if (!menu || !activeTeamSetsLeader) return;

  const isKm = (appState && appState.language) !== 'en';
  const mNum = activeTeamSetsMonthNum || 10;
  const year = 2026;
  const khmerMonths = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'];
  const enMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthTitle = isKm ? `ខែ ${khmerMonths[mNum - 1]} ${year}` : `${enMonths[mNum - 1]} ${year}`;

  const firstDayOfWeek = new Date(year, mNum - 1, 1).getDay(); // 0 (Sun) to 6 (Sat)
  const daysInMonth = new Date(year, mNum, 0).getDate();

  // Find which days have sales in activeTeamSetsLeader.dailySales
  const salesDaysSet = new Set();
  (activeTeamSetsLeader.dailySales || []).forEach(r => {
    if ((r.totalBoxes || 0) > 0 || (r.orders || 0) > 0) {
      const dNum = parseInt(r.date, 10);
      if (!isNaN(dNum)) salesDaysSet.add(dNum);
    }
  });

  let daysGridHtml = '';
  for (let i = 0; i < firstDayOfWeek; i++) {
    daysGridHtml += `<div class="h-7"></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isSelected = currentTeamSetsSelectedDay === day;
    const hasSales = salesDaysSet.has(day);

    let cellClasses = 'h-7 rounded-lg flex items-center justify-center text-xs font-semibold cursor-pointer active:scale-95 transition ';
    if (isSelected) {
      cellClasses += 'bg-orange-500 text-white font-bold shadow-md shadow-orange-500/30';
    } else if (hasSales) {
      cellClasses += 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 hover:bg-emerald-500/30';
    } else {
      cellClasses += 'text-slate-300 hover:bg-white/10';
    }

    daysGridHtml += `
      <button type="button" onclick="selectTeamSetsCalendarDay(${day}, event)" class="${cellClasses}" title="${isKm ? `ថ្ងៃទី ${day}` : `Day ${day}`}">
        ${day}
      </button>
    `;
  }

  const isAllDaysActive = (!currentTeamSetsFilterOnlySales && currentTeamSetsSelectedDay === null);
  const isSalesOnlyActive = (currentTeamSetsFilterOnlySales && currentTeamSetsSelectedDay === null);

  menu.innerHTML = `
    <!-- Header with Month Title and [គ្រប់ថ្ងៃ] & [ថ្ងៃមានលក់] buttons -->
    <div class="flex items-center justify-between pb-2 border-b border-white/10 mb-2 gap-1.5">
      <span class="text-xs font-bold text-white tracking-wide font-sans shrink-0">
        ${monthTitle}
      </span>
      <div class="flex items-center gap-1 shrink-0">
        <button type="button" onclick="selectTeamSetsFilterSales(false, event)" 
                class="px-2 py-0.5 rounded-lg text-[10.5px] font-semibold transition active:scale-95 ${isAllDaysActive ? 'bg-orange-500 text-white font-bold shadow-sm' : 'bg-white/5 text-slate-300 hover:text-white border border-white/10'}">
          ${isKm ? 'គ្រប់ថ្ងៃ' : 'All Days'}
        </button>
        <button type="button" onclick="selectTeamSetsFilterSales(true, event)" 
                class="px-2 py-0.5 rounded-lg text-[10.5px] font-semibold transition active:scale-95 ${isSalesOnlyActive ? 'bg-amber-500 text-white font-bold shadow-sm' : 'bg-white/5 text-slate-300 hover:text-white border border-white/10'}">
          ${isKm ? 'ថ្ងៃមានលក់' : 'Sales Days'}
        </button>
      </div>
    </div>

    <!-- Weekdays Header -->
    <div class="grid grid-cols-7 gap-1 text-center text-[10px] text-slate-400 font-semibold mb-1">
      ${isKm ? `
        <span>អា</span><span>ច</span><span>អ</span><span>ព</span><span>ព្រ</span><span>សុ</span><span>ស</span>
      ` : `
        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
      `}
    </div>

    <!-- Days Grid -->
    <div class="grid grid-cols-7 gap-1 text-center">
      ${daysGridHtml}
    </div>

    <!-- Footer Legend & Reset -->
    <div class="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
      <span class="flex items-center gap-1">
        <span class="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
        <span>${isKm ? 'ថ្ងៃមានលក់' : 'Sales Days'}</span>
      </span>
      ${currentTeamSetsSelectedDay !== null ? `
        <button type="button" onclick="selectTeamSetsFilterSales(false, event)" class="text-orange-400 hover:underline font-medium">
          ${isKm ? 'បង្ហាញគ្រប់ថ្ងៃ' : 'Show All'}
        </button>
      ` : ''}
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

window.toggleTeamSetsDateDropdown = toggleTeamSetsDateDropdown;
window.selectTeamSetsCalendarDay = selectTeamSetsCalendarDay;
window.selectTeamSetsFilterSales = selectTeamSetsFilterSales;
window.toggleTeamSetsFilterOnlySales = toggleTeamSetsFilterOnlySales;

if (typeof window !== 'undefined' && !window.__teamSetsDateDropdownListenerAdded) {
  window.__teamSetsDateDropdownListenerAdded = true;
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('team-sets-date-dropdown-menu');
    if (menu && !menu.classList.contains('hidden')) {
      if (!menu.contains(e.target) && !e.target.closest('button[onclick*="toggleTeamSetsDateDropdown"]')) {
        menu.classList.add('hidden');
      }
    }
  });
}

function formatShortDateNoYear(dateStr) {
  if (!dateStr) return '';
  const str = String(dateStr).trim();
  const m1 = str.match(/^(\d{1,2})[-/]([A-Za-z]+)[-/]\d{2,4}$/);
  if (m1) {
    return `${m1[1].padStart(2, '0')}-${m1[2]}`;
  }
  const m2 = str.match(/^\d{4}[-/](\d{1,2})[-/](\d{1,2})$/);
  if (m2) {
    return `${m2[2].padStart(2, '0')}-${m2[1].padStart(2, '0')}`;
  }
  const m3 = str.match(/^(\d{1,2})[-/](\d{1,2})[-/]\d{2,4}$/);
  if (m3) {
    return `${m3[1].padStart(2, '0')}-${m3[2].padStart(2, '0')}`;
  }
  return str.replace(/[-/]\d{4}$/, '');
}

function renderTeamSetsModalContent() {
  if (!activeTeamSetsLeader) return;
  const leader = activeTeamSetsLeader;
  const isKm = (appState && appState.language) !== 'en';

  // 1. Title & Subtitle
  const titleEl = document.getElementById('team-sets-modal-title');
  if (titleEl) {
    titleEl.innerHTML = `
      <span>${leader.name}</span>
      ${leader.name === 'ស្តី ស្តើង' ? '<img src="blue-tick.png" alt="Verified" class="w-4 h-4 object-contain inline shrink-0">' : ''}
    `;
  }

  const subtitleEl = document.getElementById('team-sets-modal-subtitle');
  if (subtitleEl) {
    const moStr = String(activeTeamSetsMonthNum).padStart(2, '0');
    subtitleEl.textContent = isKm ? `តារាងលម្អិតឈុតប្រចាំថ្ងៃ (${moStr}/2026)` : `Daily Set Breakdown (${moStr}/2026)`;
  }

  // 2. Summary Row - 2-Row Layout (Title on Top, Amount Below, No Capsule, No Dividers, 3-Color Gradient)
  const summaryEl = document.getElementById('team-sets-modal-summary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="px-3.5 py-2.5 border-b border-white/10 bg-black/40 shrink-0">
        <!-- 3-Color Gradient Summary Bar (2-Row Layout, No Capsule, No Dividers) -->
        <div class="w-full rounded-2xl bg-gradient-to-r from-blue-600/20 via-emerald-600/20 to-purple-600/20 border border-white/15 backdrop-blur-2xl py-2.5 px-2 shadow-lg grid grid-cols-3 gap-1 select-none">
          
          <!-- Column 1: Goal (គោលដៅ) -->
          <div class="flex flex-col items-center justify-center text-center">
            <div class="flex items-center justify-center gap-1 text-[11px] font-semibold text-blue-300 mb-0.5">
              <i data-lucide="target" class="w-3.5 h-3.5 text-blue-400 shrink-0"></i>
              <span>${isKm ? 'គោលដៅ' : 'Goal'}</span>
            </div>
            <div class="font-mono font-bold text-base text-white leading-tight">
              ${leader.targetGoal || 100}
            </div>
          </div>

          <!-- Column 2: Sold & Percent (លក់បាន & ភាគរយ) -->
          <div class="flex flex-col items-center justify-center text-center">
            <div class="flex items-center justify-center gap-1 text-[11px] font-semibold text-emerald-300 mb-0.5">
              <i data-lucide="package-check" class="w-3.5 h-3.5 text-emerald-400 shrink-0"></i>
              <span>${isKm ? 'លក់បាន' : 'Sold'}</span>
            </div>
            <div class="font-mono font-bold text-base text-white leading-tight flex items-baseline justify-center gap-1">
              <span>${leader.totalBoxes || 0}</span>
              <span class="text-[10.5px] text-emerald-400 font-semibold font-mono">(${leader.targetPercent || 0}%)</span>
            </div>
          </div>

          <!-- Column 3: Boost (លុយ Boost) -->
          <div class="flex flex-col items-center justify-center text-center">
            <div class="flex items-center justify-center gap-1 text-[11px] font-semibold text-purple-300 mb-0.5">
              <i data-lucide="trending-up" class="w-3.5 h-3.5 text-purple-400 shrink-0"></i>
              <span>Boost</span>
            </div>
            <div class="font-mono font-bold text-base text-white leading-tight">
              $${(leader.boost || 0).toFixed(2)}
            </div>
          </div>

        </div>
      </div>
    `;
  }

  // 3. Rows filtering
  let rows = leader.dailySales || [];
  if (currentTeamSetsFilterOnlySales) {
    rows = rows.filter(r => (r.totalBoxes > 0 || r.orders > 0 || r.boost > 0));
  }
  if (currentTeamSetsSelectedDay !== null) {
    const targetDay = currentTeamSetsSelectedDay;
    rows = rows.filter(r => {
      const dNum = parseInt(r.date, 10);
      if (!isNaN(dNum) && dNum === targetDay) return true;
      if (r.date.startsWith(targetDay + '-') || r.date.startsWith(targetDay + '/') || r.date.startsWith(String(targetDay).padStart(2, '0') + '-')) return true;
      return false;
    });
  }

  const container = document.getElementById('team-sets-modal-table-container');
  if (!container) return;

  if (rows.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-slate-400 text-xs flex flex-col items-center justify-center gap-2">
        <div class="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-slate-400 mb-1">
          <i data-lucide="inbox" class="w-5 h-5"></i>
        </div>
        <p class="font-medium text-slate-300">${isKm ? 'ពុំមានទិន្នន័យត្រូវតាមលក្ខខណ្ឌស្វែងរកឡើយ' : 'No data matching filter'}</p>
        <p class="text-[11px] text-slate-500">${isKm ? 'សាកល្បងចុចលើ "គ្រប់ថ្ងៃ"' : 'Try selecting "All Days"'}</p>
      </div>
    `;
  } else {
    const sumSet1 = rows.reduce((s, r) => s + (r.set1 || 0), 0);
    const sumSet2 = rows.reduce((s, r) => s + (r.set2 || 0), 0);
    const sumSet3 = rows.reduce((s, r) => s + (r.set3 || 0), 0);
    const sumSet4 = rows.reduce((s, r) => s + (r.set4 || 0), 0);
    const sumSet5 = rows.reduce((s, r) => s + (r.set5 || 0), 0);
    const sumBoxes = rows.reduce((s, r) => s + (r.totalBoxes || 0), 0);
    const sumBoost = rows.reduce((s, r) => s + (r.boost || 0), 0);

    let dateBtnLabel = isKm ? 'ថ្ងៃទី' : 'Date';
    let hasActiveDateFilter = false;

    if (currentTeamSetsSelectedDay !== null) {
      dateBtnLabel = isKm ? `ថ្ងៃ ${currentTeamSetsSelectedDay}` : `Day ${currentTeamSetsSelectedDay}`;
      hasActiveDateFilter = true;
    } else if (currentTeamSetsFilterOnlySales) {
      dateBtnLabel = isKm ? 'ថ្ងៃមានលក់' : 'Sales Days';
      hasActiveDateFilter = true;
    }

    const displaySet1 = hasActiveDateFilter ? sumSet1 : (leader.set1 || sumSet1 || 0);
    const displaySet2 = hasActiveDateFilter ? sumSet2 : (leader.set2 || sumSet2 || 0);
    const displaySet3 = hasActiveDateFilter ? sumSet3 : (leader.set3 || sumSet3 || 0);
    const displaySet4 = hasActiveDateFilter ? sumSet4 : (leader.set4 || sumSet4 || 0);
    const displaySet5 = hasActiveDateFilter ? sumSet5 : (leader.set5 || sumSet5 || 0);
    const displayBoxes = hasActiveDateFilter ? sumBoxes : (leader.totalBoxes || sumBoxes || 0);
    const displayBoost = hasActiveDateFilter ? sumBoost : (leader.boost || sumBoost || 0);

    container.innerHTML = `
      <table class="w-full text-left text-xs whitespace-nowrap table-auto">
        <thead class="sticky top-0 z-20 bg-[#070D18]/95 backdrop-blur-xl border-t border-b border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          <tr class="text-slate-400 text-xs font-bold">
            <th class="py-2 px-1 font-bold text-slate-300 relative select-none text-center align-middle">
              <div class="flex items-center justify-center relative">
                <button type="button" onclick="toggleTeamSetsDateDropdown(event)" 
                        class="h-7 min-w-[70px] px-2 rounded-xl ${hasActiveDateFilter ? 'bg-orange-500/20 text-orange-300 font-bold border border-orange-500/40 shadow-sm' : 'bg-black/40 hover:bg-black/60 text-slate-200 border border-white/15 shadow-sm'} active:scale-95 transition flex items-center justify-center gap-1" title="${isKm ? 'ជ្រើសរើសថ្ងៃ' : 'Select Day'}">
                  <span class="text-[11px] font-bold leading-none text-center">${dateBtnLabel}</span>
                  <i data-lucide="chevron-down" class="w-3 h-3 text-slate-400 shrink-0"></i>
                </button>

                <!-- Mini Calendar Dropdown Popover (Aligned to left on mobile) -->
                <div id="team-sets-date-dropdown-menu" 
                     class="hidden absolute left-0 top-full mt-1.5 w-64 rounded-2xl bg-[#0B1528]/95 backdrop-blur-2xl border border-white/15 shadow-2xl p-3 z-50 animate-fade-in font-sans text-xs text-left">
                </div>
              </div>
            </th>
            <th class="py-2 px-1 text-center">
              <div class="flex flex-col items-center justify-center gap-1">
                <span class="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono font-bold text-[11px] flex items-center justify-center shadow-sm">
                  ${displaySet1}
                </span>
                <span class="font-bold text-[10.5px] text-amber-300/90 whitespace-nowrap">${isKm ? 'ឈុត ១' : 'Set 1'}</span>
              </div>
            </th>
            <th class="py-2 px-1 text-center">
              <div class="flex flex-col items-center justify-center gap-1">
                <span class="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-[11px] flex items-center justify-center shadow-sm">
                  ${displaySet2}
                </span>
                <span class="font-bold text-[10.5px] text-emerald-300/90 whitespace-nowrap">${isKm ? 'ឈុត ២' : 'Set 2'}</span>
              </div>
            </th>
            <th class="py-2 px-1 text-center">
              <div class="flex flex-col items-center justify-center gap-1">
                <span class="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 font-mono font-bold text-[11px] flex items-center justify-center shadow-sm">
                  ${displaySet3}
                </span>
                <span class="font-bold text-[10.5px] text-blue-300/90 whitespace-nowrap">${isKm ? 'ឈុត ៣' : 'Set 3'}</span>
              </div>
            </th>
            <th class="py-2 px-1 text-center">
              <div class="flex flex-col items-center justify-center gap-1">
                <span class="w-6 h-6 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 font-mono font-bold text-[11px] flex items-center justify-center shadow-sm">
                  ${displaySet5}
                </span>
                <span class="font-bold text-[10.5px] text-pink-300/90 whitespace-nowrap">${isKm ? 'ឈុត ៥' : 'Set 5'}</span>
              </div>
            </th>
            <th class="py-2 px-1 text-center">
              <div class="flex flex-col items-center justify-center gap-1">
                <span class="h-6 px-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono font-bold text-[11px] flex items-center justify-center shadow-sm">
                  ${displayBoxes}
                </span>
                <span class="font-bold text-[10.5px] text-emerald-400 whitespace-nowrap">${isKm ? 'សរុប' : 'Total'}</span>
              </div>
            </th>
            <th class="py-2 px-1 text-center">
              <div class="flex flex-col items-center justify-center gap-1">
                <span class="h-6 px-2 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 font-mono font-bold text-[10px] flex items-center justify-center shadow-sm">
                  $${displayBoost.toFixed(0)}
                </span>
                <span class="font-bold text-[10.5px] text-purple-300 whitespace-nowrap">Boost</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-white/5 font-mono">
          ${rows.map(r => {
            const hasSales = (r.totalBoxes || 0) > 0;
            return `
              <tr class="${hasSales ? 'bg-emerald-500/[0.04] hover:bg-emerald-500/[0.08]' : 'hover:bg-white/[0.02]'} transition">
                <td class="py-2 px-1 text-center font-mono font-bold text-[11px] ${hasSales ? 'text-white' : 'text-slate-400'}">
                  <span>${formatShortDateNoYear(r.date)}</span>
                </td>
                <td class="py-2 px-1 text-center">
                  ${(r.set1 || 0) > 0 ? `<span class="inline-block px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10.5px]">${r.set1}</span>` : '<span class="text-slate-600">—</span>'}
                </td>
                <td class="py-2 px-1 text-center">
                  ${(r.set2 || 0) > 0 ? `<span class="inline-block px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10.5px]">${r.set2}</span>` : '<span class="text-slate-600">—</span>'}
                </td>
                <td class="py-2 px-1 text-center">
                  ${(r.set3 || 0) > 0 ? `<span class="inline-block px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 font-bold text-[10.5px]">${r.set3}</span>` : '<span class="text-slate-600">—</span>'}
                </td>
                <td class="py-2 px-1 text-center">
                  ${(r.set5 || 0) > 0 ? `<span class="inline-block px-1.5 py-0.5 rounded bg-pink-500/20 text-pink-300 font-bold text-[10.5px]">${r.set5}</span>` : '<span class="text-slate-600">—</span>'}
                </td>
                <td class="py-2 px-1 text-center font-bold text-xs ${hasSales ? 'text-emerald-400' : 'text-slate-500'}">
                  ${hasSales ? `${r.totalBoxes}` : '—'}
                </td>
                <td class="py-2 px-1 text-center text-[11px] ${(r.boost || 0) > 0 ? 'text-purple-300 font-semibold' : 'text-slate-600'}">
                  ${(r.boost || 0) > 0 ? `$${r.boost.toFixed(2)}` : '—'}
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
        <tfoot>
          <tr class="text-xs font-bold border-t border-white/10 bg-black/40 text-white font-mono">
            <td class="py-2 px-1 text-center font-sans text-[11px]">${isKm ? `សរុប (${rows.length} ថ្ងៃ)` : `Total (${rows.length} days)`}</td>
            <td class="py-2 px-1 text-center text-amber-300 text-[11px]">${sumSet1}</td>
            <td class="py-2 px-1 text-center text-emerald-300 text-[11px]">${sumSet2}</td>
            <td class="py-2 px-1 text-center text-blue-300 text-[11px]">${sumSet3}</td>
            <td class="py-2 px-1 text-center text-pink-300 text-[11px]">${sumSet5}</td>
            <td class="py-2 px-1 text-center text-emerald-400 font-bold text-[11px]">${sumBoxes} ${isKm ? 'ប្រអប់' : 'boxes'}</td>
            <td class="py-2 px-1 text-center text-purple-300 text-[11px]">${sumBoost > 0 ? '$' + sumBoost.toFixed(2) : '—'}</td>
          </tr>
        </tfoot>
      </table>
    `;
  }

  if (window.lucide) window.lucide.createIcons();
}

let expensesFilterState = {
  mode: 'all', // 'day' | 'month' | 'year' | 'all'
  selectedDate: '', // 'YYYY-MM-DD'
  selectedMonth: '', // 'YYYY-MM'
  selectedYear: '', // 'YYYY'
  calYear: new Date().getFullYear(),
  calMonth: new Date().getMonth() + 1,
  isSearchOpen: false
};

let currentLoadedExpenses = [];

function toggleExpensesSearch() {
  const container = document.getElementById('expenses-modal-search-container');
  const input = document.getElementById('expenses-modal-search-input');
  const toggleBtn = document.getElementById('expenses-modal-search-toggle-btn');
  if (!container) return;

  const isHidden = container.classList.contains('hidden');
  if (isHidden) {
    container.classList.remove('hidden');
    expensesFilterState.isSearchOpen = true;
    if (toggleBtn) {
      toggleBtn.classList.add('bg-orange-500/20', 'text-white', 'border-orange-500/40');
      toggleBtn.classList.remove('bg-white/5', 'text-orange-400', 'border-white/10');
    }
    if (input) {
      input.focus();
    }
  } else {
    container.classList.add('hidden');
    expensesFilterState.isSearchOpen = false;
    if (toggleBtn) {
      toggleBtn.classList.remove('bg-orange-500/20', 'text-white', 'border-orange-500/40');
      toggleBtn.classList.add('bg-white/5', 'text-orange-400', 'border-white/10');
    }
    if (input && input.value) {
      input.value = '';
      const clearBtn = document.getElementById('expenses-modal-clear-search');
      if (clearBtn) clearBtn.classList.add('hidden');
      applyExpensesFilterAndRender();
    }
  }
  if (window.lucide) window.lucide.createIcons();
}

function closeAllExpensesDropdowns(except = null) {
  const backdrop = document.getElementById('expenses-dropdown-backdrop');
  if (except !== 'day') {
    const d = document.getElementById('expenses-day-dropdown-menu');
    if (d) d.classList.add('hidden');
  }
  if (except !== 'month') {
    const m = document.getElementById('expenses-month-dropdown-menu');
    if (m) m.classList.add('hidden');
  }
  if (except !== 'year') {
    const y = document.getElementById('expenses-year-dropdown-menu');
    if (y) y.classList.add('hidden');
  }
  if (!except && backdrop) {
    backdrop.classList.add('hidden');
  }
}

function toggleExpensesDayDropdown(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('expenses-day-dropdown-menu');
  const backdrop = document.getElementById('expenses-dropdown-backdrop');
  if (!menu) return;
  const isHidden = menu.classList.contains('hidden');
  closeAllExpensesDropdowns('day');
  if (isHidden) {
    renderExpensesMiniCalendar();
    menu.classList.remove('hidden');
    if (backdrop) backdrop.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
    if (backdrop) backdrop.classList.add('hidden');
  }
}

function getYesterdayIso() {
  const y = new Date();
  y.setDate(y.getDate() - 1);
  return getLocalIsoDate(y);
}

function renderExpensesMiniCalendar() {
  const menu = document.getElementById('expenses-day-dropdown-menu');
  if (!menu) return;

  const khmerMonths = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'];
  const monthTitle = `${khmerMonths[expensesFilterState.calMonth - 1]} ${expensesFilterState.calYear}`;

  const now = new Date();
  const realTodayIso = getLocalIsoDate(now);
  const selectedIso = expensesFilterState.selectedDate || realTodayIso;

  // Days in month
  const firstDayOfWeek = new Date(expensesFilterState.calYear, expensesFilterState.calMonth - 1, 1).getDay();
  const daysInMonth = new Date(expensesFilterState.calYear, expensesFilterState.calMonth, 0).getDate();

  // Check which days have expenses in this calendar month
  const d = DataService.data;
  const expenseDaysSet = new Set();
  if (d && d.expenses) {
    const prefix = `${expensesFilterState.calYear}-${String(expensesFilterState.calMonth).padStart(2, '0')}`;
    d.expenses.forEach(e => {
      if (e.isoDate && e.isoDate.startsWith(prefix)) {
        expenseDaysSet.add(e.isoDate);
      }
    });
  }

  let daysGridHtml = '';
  for (let i = 0; i < firstDayOfWeek; i++) {
    daysGridHtml += `<div class="h-8"></div>`;
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayStr = String(day).padStart(2, '0');
    const monthStr = String(expensesFilterState.calMonth).padStart(2, '0');
    const thisDateIso = `${expensesFilterState.calYear}-${monthStr}-${dayStr}`;

    const isSelected = expensesFilterState.mode === 'day' && thisDateIso === selectedIso;
    const isToday = thisDateIso === realTodayIso;
    const hasExpenses = expenseDaysSet.has(thisDateIso);

    let cellClasses = 'relative h-8 rounded-full flex flex-col items-center justify-center text-xs font-semibold cursor-pointer active:scale-95 transition ';
    if (isSelected) {
      cellClasses += 'bg-orange-500 text-white font-bold shadow-md shadow-orange-500/30';
    } else if (isToday) {
      cellClasses += 'border border-orange-500/60 text-orange-400 hover:bg-orange-500/20';
    } else {
      cellClasses += 'text-slate-200 hover:bg-white/10';
    }

    daysGridHtml += `
      <button onclick="selectExpensesCalendarDay('${thisDateIso}', event)" class="${cellClasses}">
        <span>${day}</span>
        ${hasExpenses ? `<span class="w-1 h-1 rounded-full ${isSelected ? 'bg-white' : 'bg-rose-400'} absolute bottom-0.5"></span>` : ''}
      </button>
    `;
  }

  menu.innerHTML = `
    <!-- Header: Month Year + Prev/Next Arrow Buttons -->
    <div class="flex items-center justify-between pb-2 border-b border-white/10">
      <button onclick="navigateExpensesCalendarMonth(-1, event)" 
              class="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition active:scale-90">
        <i data-lucide="chevron-left" class="w-4 h-4"></i>
      </button>

      <span class="text-xs font-bold text-white tracking-wide font-sans">
        ${monthTitle}
      </span>

      <button onclick="navigateExpensesCalendarMonth(1, event)" 
              class="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center text-slate-300 hover:text-white transition active:scale-90">
        <i data-lucide="chevron-right" class="w-4 h-4"></i>
      </button>
    </div>

    <!-- Quick Pick Shortcuts (Today / Yesterday) -->
    <div class="grid grid-cols-2 gap-1.5 pb-2 border-b border-white/10">
      <button onclick="selectExpensesQuickDay('today', event)" 
              class="py-1 px-2 rounded-xl text-center text-[11px] font-semibold transition active:scale-95 ${expensesFilterState.mode === 'day' && expensesFilterState.selectedDate === realTodayIso ? 'bg-orange-500 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}">
        ☀️ ថ្ងៃនេះ
      </button>
      <button onclick="selectExpensesQuickDay('yesterday', event)" 
              class="py-1 px-2 rounded-xl text-center text-[11px] font-semibold transition active:scale-95 ${expensesFilterState.mode === 'day' && expensesFilterState.selectedDate === getYesterdayIso() ? 'bg-orange-500 text-white' : 'bg-white/5 text-slate-300 hover:bg-white/10'}">
        🌙 ម្សិលមិញ
      </button>
    </div>

    <!-- Weekday Headers -->
    <div class="grid grid-cols-7 gap-1 text-center text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
      <span>អា</span><span>ច</span><span>អ</span><span>ព</span><span>ព្រ</span><span>សុ</span><span>ស</span>
    </div>

    <!-- Calendar Days Grid (7 cols) -->
    <div class="grid grid-cols-7 gap-1 text-center">
      ${daysGridHtml}
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

function navigateExpensesCalendarMonth(delta, event) {
  if (event) event.stopPropagation();
  expensesFilterState.calMonth += delta;
  if (expensesFilterState.calMonth < 1) {
    expensesFilterState.calMonth = 12;
    expensesFilterState.calYear--;
  } else if (expensesFilterState.calMonth > 12) {
    expensesFilterState.calMonth = 1;
    expensesFilterState.calYear++;
  }
  renderExpensesMiniCalendar();
}

function selectExpensesCalendarDay(isoDate, event) {
  if (event) event.stopPropagation();
  closeAllExpensesDropdowns();
  expensesFilterState.mode = 'day';
  expensesFilterState.selectedDate = isoDate;
  applyExpensesFilterAndRender();
}

function selectExpensesQuickDay(type, event) {
  if (event) event.stopPropagation();
  closeAllExpensesDropdowns();
  expensesFilterState.mode = 'day';
  if (type === 'today') {
    expensesFilterState.selectedDate = getLocalIsoDate(new Date());
  } else if (type === 'yesterday') {
    expensesFilterState.selectedDate = getYesterdayIso();
  }
  const parts = expensesFilterState.selectedDate.split('-');
  expensesFilterState.calYear = parseInt(parts[0], 10);
  expensesFilterState.calMonth = parseInt(parts[1], 10);
  applyExpensesFilterAndRender();
}

function toggleExpensesMonthDropdown(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('expenses-month-dropdown-menu');
  const backdrop = document.getElementById('expenses-dropdown-backdrop');
  if (!menu) return;
  const isHidden = menu.classList.contains('hidden');
  closeAllExpensesDropdowns('month');
  if (isHidden) {
    renderExpensesMonthDropdown();
    menu.classList.remove('hidden');
    if (backdrop) backdrop.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
    if (backdrop) backdrop.classList.add('hidden');
  }
}

function renderExpensesMonthDropdown() {
  const menu = document.getElementById('expenses-month-dropdown-menu');
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
  const activeMonthKey = expensesFilterState.selectedMonth || `${expensesFilterState.calYear}-${String(currentMonthNum).padStart(2, '0')}`;
  const activeYearStr = activeMonthKey.split('-')[0];
  const activeMonthNum = parseInt(activeMonthKey.split('-')[1], 10);

  const yearHeader = `
    <div class="flex items-center justify-between pb-2 mb-1.5 border-b border-white/10 px-1">
      <button type="button" onclick="navigateExpensesMonthYear(-1, event)" class="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition" title="ឆ្នាំមុន">
        <i data-lucide="chevron-left" class="w-4 h-4"></i>
      </button>
      <span class="text-xs font-bold font-mono text-white">ឆ្នាំ ${expensesFilterState.calYear}</span>
      <button type="button" onclick="navigateExpensesMonthYear(1, event)" class="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 active:scale-95 transition" title="ឆ្នាំបន្ទាប់">
        <i data-lucide="chevron-right" class="w-4 h-4"></i>
      </button>
    </div>
  `;

  menu.innerHTML = yearHeader + monthsList.map(m => {
    const isSelected = expensesFilterState.mode === 'month' && m.num === activeMonthNum && String(expensesFilterState.calYear) === activeYearStr;
    return `
      <button onclick="selectExpensesMonth(${m.num}, event)" 
              class="w-full px-2.5 py-1.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition ${isSelected ? 'text-white bg-orange-500/20 border border-orange-500/30' : 'text-slate-300 hover:bg-white/10'}">
        <span>${String(m.num).padStart(2, '0')} ${m.name}</span>
        ${isSelected ? '<i data-lucide="check" class="w-3.5 h-3.5 text-orange-400"></i>' : ''}
      </button>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function navigateExpensesMonthYear(delta, event) {
  if (event) event.stopPropagation();
  expensesFilterState.calYear += delta;
  renderExpensesMonthDropdown();
}

function selectExpensesMonth(mNum, event) {
  if (event) event.stopPropagation();
  closeAllExpensesDropdowns();
  const paddedMonth = String(mNum).padStart(2, '0');
  expensesFilterState.mode = 'month';
  expensesFilterState.selectedMonth = `${expensesFilterState.calYear}-${paddedMonth}`;
  applyExpensesFilterAndRender();
}

function toggleExpensesYearDropdown(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('expenses-year-dropdown-menu');
  const backdrop = document.getElementById('expenses-dropdown-backdrop');
  if (!menu) return;
  const isHidden = menu.classList.contains('hidden');
  closeAllExpensesDropdowns('year');
  if (isHidden) {
    renderExpensesYearDropdown();
    menu.classList.remove('hidden');
    if (backdrop) backdrop.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
    if (backdrop) backdrop.classList.add('hidden');
  }
}

function renderExpensesYearDropdown() {
  const menu = document.getElementById('expenses-year-dropdown-menu');
  if (!menu) return;

  const currentYear = (new Date()).getFullYear();
  const years = [2028, 2027, 2026, 2025];
  const activeYear = expensesFilterState.selectedYear ? parseInt(expensesFilterState.selectedYear, 10) : currentYear;

  menu.innerHTML = years.map(y => {
    const isSelected = expensesFilterState.mode === 'year' && y === activeYear;
    return `
      <button onclick="selectExpensesYear(${y}, event)" 
              class="w-full px-2.5 py-1.5 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition ${isSelected ? 'text-white bg-orange-500/20 border border-orange-500/30' : 'text-slate-300 hover:bg-white/10'}">
        <span>ឆ្នាំ ${y}</span>
        ${isSelected ? '<i data-lucide="check" class="w-3.5 h-3.5 text-orange-400"></i>' : ''}
      </button>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function selectExpensesYear(y, event) {
  if (event) event.stopPropagation();
  closeAllExpensesDropdowns();
  expensesFilterState.mode = 'year';
  expensesFilterState.selectedYear = String(y);
  expensesFilterState.calYear = y;
  applyExpensesFilterAndRender();
}

function setExpensesPeriodFilter(mode, val, event) {
  if (event) event.stopPropagation();
  closeAllExpensesDropdowns();
  expensesFilterState.mode = mode;
  applyExpensesFilterAndRender();
}

function applyExpensesFilterAndRender() {
  const d = DataService.data;
  if (!d) return;

  const now = new Date();
  const currentIsoDay = getLocalIsoDate(now);
  const currentIsoMonth = currentIsoDay.slice(0, 7);
  const currentIsoYear = currentIsoDay.slice(0, 4);

  const btnDay = document.getElementById('expenses-filter-btn-day');
  const btnMonth = document.getElementById('expenses-filter-btn-month');
  const btnYear = document.getElementById('expenses-filter-btn-year');
  const btnAll = document.getElementById('expenses-filter-btn-all');

  const lblDay = document.getElementById('expenses-day-pill-label');
  const lblMonth = document.getElementById('expenses-month-pill-label');
  const lblYear = document.getElementById('expenses-year-pill-label');
  const subtitle = document.getElementById('expenses-modal-subtitle');

  const activeBtnClasses = ['accent-solid-btn', 'shadow-md', 'text-white'];
  const inactiveBtnClasses = ['text-slate-400', 'hover:text-white'];

  function setPillActive(btn) {
    [btnDay, btnMonth, btnYear, btnAll].forEach(b => {
      if (!b) return;
      if (b === btn) {
        b.classList.add(...activeBtnClasses);
        b.classList.remove(...inactiveBtnClasses);
      } else {
        b.classList.remove(...activeBtnClasses);
        b.classList.add(...inactiveBtnClasses);
      }
    });
  }

  let filtered = d.expenses || [];
  let periodLabel = 'ទាំងអស់';

  if (expensesFilterState.mode === 'day') {
    setPillActive(btnDay);
    const targetDay = expensesFilterState.selectedDate || currentIsoDay;
    filtered = (d.expenses || []).filter(e => e.isoDate === targetDay);
    const dayNum = targetDay.slice(8, 10);
    if (lblDay) lblDay.textContent = `ថ្ងៃទី ${parseInt(dayNum, 10)}`;
    periodLabel = `ថ្ងៃ ${displayDDMMYYYY(targetDay)}`;
  } else if (expensesFilterState.mode === 'month') {
    setPillActive(btnMonth);
    const targetMonth = expensesFilterState.selectedMonth || currentIsoMonth;
    filtered = (d.expenses || []).filter(e => e.isoDate && e.isoDate.startsWith(targetMonth));
    const parts = targetMonth.split('-');
    if (lblMonth) lblMonth.textContent = `ខែ ${parseInt(parts[1], 10)}`;
    periodLabel = `ខែ ${parts[1]}/${parts[0]}`;
  } else if (expensesFilterState.mode === 'year') {
    setPillActive(btnYear);
    const targetYear = expensesFilterState.selectedYear || currentIsoYear;
    filtered = (d.expenses || []).filter(e => e.isoDate && e.isoDate.startsWith(targetYear));
    if (lblYear) lblYear.textContent = `ឆ្នាំ ${targetYear}`;
    periodLabel = `ឆ្នាំ ${targetYear}`;
  } else {
    // Mode is 'all'
    setPillActive(btnAll);
    if (lblDay) lblDay.textContent = 'ថ្ងៃទី';
    if (lblMonth) lblMonth.textContent = 'ខែ';
    if (lblYear) lblYear.textContent = 'ឆ្នាំ';
    periodLabel = 'ទាំងអស់';
  }

  // Strict sorting from latest to earliest (Day 31 ➔ 01, Year latest ➔ earliest, highest rowIndex first)
  const sortedExpenses = [...filtered].sort((a, b) => {
    const cmp = (b.isoDate || '').localeCompare(a.isoDate || '');
    if (cmp !== 0) return cmp;
    return (b.rowIndex || 0) - (a.rowIndex || 0);
  });
  const totalAmount = sortedExpenses.reduce((sum, e) => sum + (e.amount || 0), 0);

  if (subtitle) {
    subtitle.textContent = periodLabel === 'ទាំងអស់'
      ? `ចំណាយទាំងអស់ (${sortedExpenses.length} មុខ)`
      : `ចំណាយតាម ${periodLabel} (${sortedExpenses.length} មុខ)`;
  }

  currentLoadedExpenses = sortedExpenses;

  // If search query is currently active in the input, apply search filter
  const searchInput = document.getElementById('expenses-modal-search-input');
  if (searchInput && searchInput.value.trim()) {
    filterExpensesModalList();
  } else {
    renderExpensesModalRows(currentLoadedExpenses);
  }

  if (window.lucide) window.lucide.createIcons();
}

function openExpensesModal(mode = false) {
  const d = DataService.data;
  if (!d) return;

  const modal = document.getElementById('expenses-modal');
  const listEl = document.getElementById('expenses-modal-list');

  const now = new Date();
  const currentIsoDay = getLocalIsoDate(now);
  const currentIsoMonth = currentIsoDay.slice(0, 7);
  const currentIsoYear = currentIsoDay.slice(0, 4);

  // Initialize expensesFilterState based on mode or appState
  if (mode === 'all') {
    expensesFilterState.mode = 'all';
    expensesFilterState.selectedDate = currentIsoDay;
    expensesFilterState.selectedMonth = currentIsoMonth;
    expensesFilterState.selectedYear = currentIsoYear;
    expensesFilterState.calYear = now.getFullYear();
    expensesFilterState.calMonth = now.getMonth() + 1;
  } else if (mode === true || mode === 'month') {
    expensesFilterState.mode = 'month';
    expensesFilterState.selectedMonth = appState.selectedMonthKey || currentIsoMonth;
    const parts = expensesFilterState.selectedMonth.split('-');
    expensesFilterState.calYear = parseInt(parts[0], 10);
    expensesFilterState.calMonth = parseInt(parts[1], 10);
  } else if (mode === 'year') {
    expensesFilterState.mode = 'year';
    expensesFilterState.selectedYear = appState.selectedYear ? String(appState.selectedYear) : currentIsoYear;
    expensesFilterState.calYear = parseInt(expensesFilterState.selectedYear, 10);
  } else if (mode === 'day') {
    expensesFilterState.mode = 'day';
    if (appState.daySubFilter === 'specific' && appState.specificDate) {
      expensesFilterState.selectedDate = appState.specificDate;
    } else if (appState.daySubFilter === 'yesterday') {
      expensesFilterState.selectedDate = getYesterdayIso();
    } else {
      expensesFilterState.selectedDate = currentIsoDay;
    }
    const parts = expensesFilterState.selectedDate.split('-');
    expensesFilterState.calYear = parseInt(parts[0], 10);
    expensesFilterState.calMonth = parseInt(parts[1], 10);
  } else {
    // Default drill-down based on current appState
    if (appState.periodFilter === 'month') {
      expensesFilterState.mode = 'month';
      expensesFilterState.selectedMonth = appState.selectedMonthKey || currentIsoMonth;
      const parts = expensesFilterState.selectedMonth.split('-');
      expensesFilterState.calYear = parseInt(parts[0], 10);
      expensesFilterState.calMonth = parseInt(parts[1], 10);
    } else if (appState.periodFilter === 'year') {
      expensesFilterState.mode = 'year';
      expensesFilterState.selectedYear = appState.selectedYear ? String(appState.selectedYear) : currentIsoYear;
      expensesFilterState.calYear = parseInt(expensesFilterState.selectedYear, 10);
    } else {
      // today / specific / yesterday / custom
      expensesFilterState.mode = 'day';
      if (appState.daySubFilter === 'specific' && appState.specificDate) {
        expensesFilterState.selectedDate = appState.specificDate;
      } else if (appState.daySubFilter === 'yesterday') {
        expensesFilterState.selectedDate = getYesterdayIso();
      } else {
        expensesFilterState.selectedDate = currentIsoDay;
      }
      const parts = expensesFilterDateParts(expensesFilterState.selectedDate);
      expensesFilterState.calYear = parts.year;
      expensesFilterState.calMonth = parts.month;
    }
  }

  // Ensure search is collapsed initially
  const searchContainer = document.getElementById('expenses-modal-search-container');
  const searchInput = document.getElementById('expenses-modal-search-input');
  const clearBtn = document.getElementById('expenses-modal-clear-search');
  const searchToggleBtn = document.getElementById('expenses-modal-search-toggle-btn');
  if (searchContainer) searchContainer.classList.add('hidden');
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.classList.add('hidden');
  if (searchToggleBtn) {
    searchToggleBtn.classList.remove('bg-orange-500/20', 'text-white', 'border-orange-500/40');
    searchToggleBtn.classList.add('bg-white/5', 'text-orange-400', 'border-white/10');
  }
  expensesFilterState.isSearchOpen = false;

  closeAllExpensesDropdowns();
  applyExpensesFilterAndRender();

  const expFilterBar = document.getElementById('expenses-modal-date-filter-bar');
  if (expFilterBar) expFilterBar.classList.remove('filter-hidden');

  modal.classList.remove('hidden');
  setDockVisible(true);
  if (listEl && typeof hookScrollableForDock === 'function') hookScrollableForDock(listEl, false);
  if (appState.fontFamily) modal.classList.add(appState.fontFamily);
  if (window.lucide) window.lucide.createIcons();
}

function expensesFilterDateParts(iso) {
  if (!iso) {
    const d = new Date();
    return { year: d.getFullYear(), month: d.getMonth() + 1 };
  }
  const parts = iso.split('-');
  return { year: parseInt(parts[0], 10), month: parseInt(parts[1], 10) };
}

function renderExpensesModalRows(items) {
  const listEl = document.getElementById('expenses-modal-list');
  const footer = document.getElementById('expenses-modal-footer');
  if (!listEl) return;
  const totalAmount = items.reduce((sum, e) => sum + (e.amount || 0), 0);

  if (footer) {
    footer.innerHTML = `
      <div class="text-slate-300 font-semibold text-xs">
        ចំនួនសរុប: ${items.length} មុខ
      </div>
      <div class="flex items-center gap-1.5 font-mono font-bold text-sm text-rose-400 text-right">
        <span class="text-[11px] text-slate-400 font-sans font-normal">សរុបទឹកប្រាក់:</span>
        <span>${formatUSD(totalAmount)}</span>
      </div>
    `;
  }

  if (items.length === 0) {
    listEl.innerHTML = `<p class="text-xs text-slate-400 text-center py-10">មិនមានទិន្នន័យចំណាយត្រូវគ្នានឹងការស្វែងរកទេ</p>`;
    return;
  }

  listEl.innerHTML = items.map((item, idx) => `
    <div class="p-3 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1.5 hover:border-rose-500/20 transition">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <span class="w-6 h-6 rounded-full bg-rose-500/20 text-rose-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
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
  `).join('');
}

function filterExpensesModalList() {
  const input = document.getElementById('expenses-modal-search-input');
  const clearBtn = document.getElementById('expenses-modal-clear-search');
  if (!input) return;
  const q = input.value.trim().toLowerCase();
  if (clearBtn) {
    if (q) clearBtn.classList.remove('hidden');
    else clearBtn.classList.add('hidden');
  }

  if (!q) {
    renderExpensesModalRows(currentLoadedExpenses);
    return;
  }

  const matched = currentLoadedExpenses.filter(e => {
    return (e.description && e.description.toLowerCase().includes(q)) ||
           (e.category && e.category.toLowerCase().includes(q)) ||
           (e.date && e.date.toLowerCase().includes(q)) ||
           (String(e.amount).includes(q));
  });

  renderExpensesModalRows(matched);
}

function clearExpensesModalSearch() {
  const input = document.getElementById('expenses-modal-search-input');
  const clearBtn = document.getElementById('expenses-modal-clear-search');
  if (input) {
    input.value = '';
    input.focus();
  }
  if (clearBtn) clearBtn.classList.add('hidden');
  renderExpensesModalRows(currentLoadedExpenses);
}

function closeExpensesModal() {
  closeAllExpensesDropdowns();
  const searchContainer = document.getElementById('expenses-modal-search-container');
  if (searchContainer) searchContainer.classList.add('hidden');
  const searchToggleBtn = document.getElementById('expenses-modal-search-toggle-btn');
  if (searchToggleBtn) {
    searchToggleBtn.classList.remove('bg-orange-500/20', 'text-white', 'border-orange-500/40');
    searchToggleBtn.classList.add('bg-white/5', 'text-orange-400', 'border-white/10');
  }
  const modal = document.getElementById('expenses-modal');
  if (modal) modal.classList.add('hidden');

  // ចុច Back ពីបញ្ជីចំណាយពេញ ត្រឡប់មកមុខងារចម្បង (Profile Drawer) ដូចបញ្ជីអតិថិជន
  openProfileDrawer();
}

// Close expenses dropdowns if clicked outside
document.addEventListener('click', (e) => {
  const dayMenu = document.getElementById('expenses-day-dropdown-menu');
  const dayBtn = document.getElementById('expenses-filter-btn-day');
  const monthMenu = document.getElementById('expenses-month-dropdown-menu');
  const monthBtn = document.getElementById('expenses-filter-btn-month');
  const yearMenu = document.getElementById('expenses-year-dropdown-menu');
  const yearBtn = document.getElementById('expenses-filter-btn-year');

  const clickedInside = (dayMenu && dayMenu.contains(e.target)) ||
                        (dayBtn && dayBtn.contains(e.target)) ||
                        (monthMenu && monthMenu.contains(e.target)) ||
                        (monthBtn && monthBtn.contains(e.target)) ||
                        (yearMenu && yearMenu.contains(e.target)) ||
                        (yearBtn && yearBtn.contains(e.target));

  if (!clickedInside) {
    closeAllExpensesDropdowns();
  }
});

function renderAboutModalContent() {
  const isKm = appState.language === 'km';
  const card = document.getElementById('about-modal-card');
  if (!card) return;

  card.innerHTML = `
    <!-- Close Button top right -->
    <button onclick="closeAboutModal()" class="absolute top-3.5 right-3.5 p-1.5 rounded-full text-slate-400 hover:text-white bg-white/5 border border-white/5 active:scale-95 transition z-10">
      <i data-lucide="x" class="w-4 h-4"></i>
    </button>

    <!-- Ambient Top Glow -->
    <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full bg-orange-500/15 blur-3xl pointer-events-none"></div>

    <!-- Centered Profile Photo with Green Status Dot -->
    <div class="relative">
      <img src="profile.png" alt="SDEY SDOEUNG" 
           class="w-24 h-24 rounded-full object-cover border-4 border-[var(--accent-solid)] shadow-2xl">
      <span class="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#070D18] shadow-md"></span>
    </div>

    <!-- Centered Name with Verified Blue Tick (រក្សាបែបនេះ ទោះប្តូរភាសាក៏ដោយ ដូចរូបភាពគំរូ) -->
    <div>
      <div class="flex items-center justify-center gap-1.5">
        <h2 class="text-2xl font-black text-white tracking-wide brand-title">ស្តី ស្តើង</h2>
        <img src="blue-tick.png" alt="Verified" class="w-4 h-4 object-contain shrink-0" style="width: 16px; height: 16px;">
      </div>
      <p class="text-xs text-orange-400 font-bold tracking-widest uppercase mt-1">SDEY SDOEUNG</p>
      
      <!-- Manager Badge Centered (រក្សា Manager ជាប់ជានិច្ច មិនផ្លាស់ប្តូរតាមភាសា ដូចរូបភាពគំរូ) -->
      <div class="mt-2.5 flex justify-center">
        <span class="px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 font-black text-xs shadow-sm flex items-center gap-1.5 tracking-wide">
          <span>🎖️</span>
          <span>Manager</span>
        </span>
      </div>
    </div>

    <!-- Roles Badges Centered in 3 Columns (ប្តូរតាម Setting) -->
    <div class="w-full pt-3 border-t border-white/10">
      <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-2">
        ${isKm ? 'តួនាទីទទួលខុសត្រូវ:' : 'Key Responsibilities:'}
      </span>
      <div class="grid grid-cols-3 gap-1.5 w-full">
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

    <!-- Centered Contacts List (ប្តូរតាម Setting) -->
    <div class="w-full pt-2.5 border-t border-white/10 space-y-1.5 text-xs">
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
        <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-white/10 text-orange-400 font-bold">SD Liquid v3.5</span>
      </div>
    </div>

    <!-- Solid Accent Fill Button with Auto Contrast Text -->
    <div class="w-full pt-1">
      <a href="https://t.me/sdoeung_sd" target="_blank" 
         class="w-full py-2.5 rounded-2xl accent-solid-btn font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition">
        <i data-lucide="send" class="w-3.5 h-3.5"></i>
        <span>${t('contactTelegramBtn')}</span>
      </a>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();
}

function openAboutModal() {
  const modal = document.getElementById('about-modal');
  if (modal) {
    renderAboutModalContent();
    modal.classList.remove('hidden');
    setDockVisible(false);
    if (navigator.vibrate) navigator.vibrate(12);
  }
}

function closeAboutModal(e) {
  if (e && e.target && e.target.closest && e.target.closest('#about-modal-card')) {
    return; // clicked inside card, don't close
  }
  const modal = document.getElementById('about-modal');
  if (modal) {
    modal.classList.add('hidden');
    setDockVisible(true);
  }
}

// ========================================================
// FULL-SCREEN BOSTAR HONORS & DEDICATION MODAL
// ========================================================
function renderHonorsModalContent() {
  const isKm = appState.language === 'km';
  const container = document.getElementById('honors-modal-body');
  if (!container) return;

  container.innerHTML = `
    <!-- Top Prestige Banner -->
    <div class="w-full p-4 rounded-3xl bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent border border-amber-500/30 text-center relative overflow-hidden shadow-xl">
      <div class="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full bg-amber-500/20 blur-3xl pointer-events-none"></div>
      <div class="relative z-10 flex flex-col items-center">
        <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 p-0.5 shadow-xl shadow-amber-500/30 mb-2.5 flex items-center justify-center overflow-hidden">
          <img src="bostar-gold-emblem.jpg" alt="BostarGroup" class="w-full h-full object-cover rounded-2xl shadow-inner">
        </div>
        <span class="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/35 text-amber-300 font-black text-xs tracking-wider uppercase mb-1.5 shadow-sm">
          ★ BOSTAR GROUP LEADERSHIP ★
        </span>
        <h2 class="text-lg font-black text-white brand-title tracking-wide">កាតកិត្តិយស & ការដឹងគុណ</h2>
        <p class="text-[11px] text-slate-300 max-w-xs mt-1 leading-relaxed">
          សូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះគណៈស្ថាបនិក និងថ្នាក់ដឹកនាំទាំងអស់
        </p>
      </div>
    </div>

    <!-- 1. អ្នកបណ្តុះបណ្តាល៖ លោកអគ្គនាយក វណ្ណ ស៊ីថា (Corporate Coach & CEO) -->
    <div class="w-full p-4 rounded-3xl bg-gradient-to-br from-amber-500/15 via-white/[0.03] to-transparent border border-amber-500/35 relative overflow-hidden shadow-xl text-left">
      <div class="flex items-center justify-between mb-3">
        <span class="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-black text-[10.5px] uppercase tracking-wider flex items-center gap-1.5">
          <span>🎓</span>
          <span>${isKm ? 'អ្នកបណ្តុះបណ្តាល' : 'Corporate Coach / Trainer'}</span>
        </span>
        <span class="text-[10px] text-amber-400/90 font-mono font-bold">CEO</span>
      </div>
      <div class="flex items-center gap-3.5">
        <div class="relative shrink-0">
          <img src="ceo-vann-sitha.jpg" alt="Vann Sitha" 
               class="w-20 h-20 rounded-2xl object-cover border-2 border-amber-400 shadow-xl">
          <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-500 border-2 border-[#09111D] flex items-center justify-center text-[10px] text-black font-black shadow">★</span>
        </div>
        <div class="min-w-0 flex-1">
          <h3 class="text-base font-black text-white truncate brand-title">លោកអគ្គនាយក វណ្ណ ស៊ីថា</h3>
          <p class="text-xs text-amber-300 font-bold tracking-wide mt-0.5">VANN SITHA</p>
          <div class="mt-2 flex items-center gap-1.5 flex-wrap">
            <span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-black text-[10px] border border-amber-500/40">
              អគ្គនាយកក្រុមហ៊ុន វណ្ណ ស៊ីថា ត្រេឌីង ឯ.ក
            </span>
            <span class="px-2 py-0.5 rounded-lg bg-white/10 text-slate-300 font-bold text-[10px]">
              គ្រូបង្វឹកធំ
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 2. អ្នកផ្តើមគំនិតបង្កើត App៖ ស្ថាបនិក ប៊ិក នោរ៉ា (Director) -->
    <div class="w-full p-4 rounded-3xl bg-gradient-to-br from-orange-500/15 via-white/[0.03] to-transparent border border-orange-500/35 relative overflow-hidden shadow-xl text-left">
      <div class="flex items-center justify-between mb-3">
        <span class="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 font-black text-[10.5px] uppercase tracking-wider flex items-center gap-1.5">
          <span>💡</span>
          <span>${isKm ? 'អ្នកផ្តើមគំនិតបង្កើត App' : 'App Visionary & Founder'}</span>
        </span>
        <span class="text-[10px] text-orange-400/90 font-mono font-bold">DIRECTOR</span>
      </div>
      <div class="flex items-center gap-3.5">
        <div class="relative shrink-0">
          <img src="leader-bech-nora.jpg" alt="Bech Nora" 
               class="w-20 h-20 rounded-2xl object-cover border-2 border-orange-400 shadow-xl">
          <span class="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-orange-500 border-2 border-[#09111D] flex items-center justify-center text-[10px] text-white font-black shadow">✓</span>
        </div>
        <div class="min-w-0 flex-1">
          <h3 class="text-base font-black text-white truncate brand-title">ស្ថាបនិក ប៊ិក នោរ៉ា (Director)</h3>
          <p class="text-xs text-orange-300 font-bold tracking-wide mt-0.5">BECH NORA</p>
          <div class="mt-2 flex items-center gap-1.5 flex-wrap">
            <span class="px-2.5 py-1 rounded-lg bg-orange-500/20 text-orange-300 font-black text-[10px] border border-orange-500/40">
              ស្ថាបនិក Bostar Group
            </span>
            <span class="px-2 py-0.5 rounded-lg bg-white/10 text-slate-300 font-bold text-[10px]">
              Director
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. ថ្នាក់ដឹកនាំគាំទ្រ (5 Managers) -->
    <div class="w-full p-4 rounded-3xl bg-white/[0.03] border border-white/10 shadow-xl text-left">
      <div class="flex items-center justify-between mb-3 px-0.5">
        <span class="px-3 py-1 rounded-full bg-white/10 text-slate-300 font-bold text-[10.5px] uppercase tracking-wider flex items-center gap-1.5">
          <span>🤝</span>
          <span>${isKm ? 'ថ្នាក់ដឹកនាំគាំទ្រ (Managers)' : 'Supporting Managers'}</span>
        </span>
        <span class="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-mono font-bold">5 រូប</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        <!-- 1. Hou Yarith -->
        <div class="p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 hover:bg-white/[0.06] transition">
          <img src="leader-hou-yarith.jpg" alt="Hou Yarith" class="w-12 h-12 rounded-xl object-cover shrink-0 border border-white/15 shadow">
          <div class="min-w-0">
            <h4 class="text-xs font-bold text-white truncate">លោក ហ៊ួរ យ៉ារិទ្ធ</h4>
            <p class="text-[10px] text-amber-300 truncate font-semibold">Manager គ្រូបង្វឹកផ្នែកលក់</p>
            <p class="text-[9px] text-slate-400 font-mono truncate">Hou_Yarith</p>
          </div>
        </div>

        <!-- 2. Hem Chanthy -->
        <div class="p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 hover:bg-white/[0.06] transition">
          <img src="leader-hem-chanthy.jpg" alt="Hem Chanthy" class="w-12 h-12 rounded-xl object-cover shrink-0 border border-white/15 shadow">
          <div class="min-w-0">
            <h4 class="text-xs font-bold text-white truncate">លោក ហែម ចន្ធី</h4>
            <p class="text-[10px] text-amber-300 truncate font-semibold">Manager គ្រូបង្វឹកចំណេះដឹងទូទៅ</p>
            <p class="text-[9px] text-slate-400 font-mono truncate">Hem_Chanthy</p>
          </div>
        </div>

        <!-- 3. Sroeun Leanghak -->
        <div class="p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 hover:bg-white/[0.06] transition">
          <img src="leader-sroeun-leanghak.jpg" alt="Sroeun Leanghak" class="w-12 h-12 rounded-xl object-cover shrink-0 border border-white/15 shadow">
          <div class="min-w-0">
            <h4 class="text-xs font-bold text-white truncate">លោក ស្រឿន លាងហាក់</h4>
            <p class="text-[10px] text-amber-300 truncate font-semibold">Manager បច្ចេកទេស</p>
            <p class="text-[9px] text-slate-400 font-mono truncate">Sroeun_Leanghak</p>
          </div>
        </div>

        <!-- 4. Bech Udom -->
        <div class="p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 hover:bg-white/[0.06] transition">
          <img src="leader-bech-udom.jpg" alt="Bech Udom" class="w-12 h-12 rounded-xl object-cover shrink-0 border border-white/15 shadow">
          <div class="min-w-0">
            <h4 class="text-xs font-bold text-white truncate">លោក ប៊ិច ឧត្ដម</h4>
            <p class="text-[10px] text-amber-300 truncate font-semibold">Manager អ្នកបច្ចេកទេស</p>
            <p class="text-[9px] text-slate-400 font-mono truncate">Bech_Udom</p>
          </div>
        </div>

        <!-- 5. Sdey Sdoeung -->
        <div class="p-2.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 hover:bg-white/[0.06] transition sm:col-span-2">
          <img src="leader-sdey-sdoeung.jpg" alt="Sdey Sdoeung" class="w-12 h-12 rounded-xl object-cover shrink-0 border border-white/15 shadow">
          <div class="min-w-0">
            <h4 class="text-xs font-bold text-white truncate">លោក ស្ដី ស្ដើង</h4>
            <p class="text-[10px] text-amber-300 truncate font-semibold">Manager ជំនាញបច្ចេកទេស & អភិវឌ្ឍ</p>
            <p class="text-[9px] text-slate-400 font-mono truncate">Sdey_Sdoeung</p>
          </div>
        </div>
      </div>
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();
}

function openHonorsModal() {
  const modal = document.getElementById('honors-modal');
  if (modal) {
    renderHonorsModalContent();
    modal.classList.remove('hidden');
    setDockVisible(false);
    if (navigator.vibrate) try { navigator.vibrate(15); } catch (_) {}
  }
}

function closeHonorsModal() {
  const modal = document.getElementById('honors-modal');
  if (modal) modal.classList.add('hidden');
  const gate = document.getElementById('onboarding-gate');
  if (gate && !gate.classList.contains('hidden')) {
    setDockVisible(false);
  } else {
    setDockVisible(true);
    openProfileDrawer();
  }
}

window.openHonorsModal = openHonorsModal;
window.closeHonorsModal = closeHonorsModal;
window.renderHonorsModalContent = renderHonorsModalContent;

function openAboutModal() {
  const modal = document.getElementById('about-modal');
  if (modal) {
    renderAboutModalContent();
    modal.classList.remove('hidden');
    setDockVisible(false);
    if (navigator.vibrate) navigator.vibrate(12);
  }
}

function closeAboutModal(e) {
  if (e && e.target && e.target.closest && e.target.closest('#about-modal-card')) {
    return; // clicked inside card, don't close
  }
  const modal = document.getElementById('about-modal');
  if (modal) {
    modal.classList.add('hidden');
    setDockVisible(true);
  }
}

// ==========================================
// iOS Notification Center System (Full Engine)
// ==========================================
function getStoredNotifications() {
  try {
    const raw = localStorage.getItem('sd_app_notifications');
    if (raw) {
      const list = JSON.parse(raw);
      if (Array.isArray(list)) {
        return list.filter(n => n && n.id !== 'notif-welcome' && n.id !== 'notif-offline-ready');
      }
    }
  } catch (_) {}
  return [];
}

function saveStoredNotifications(list) {
  try {
    localStorage.setItem('sd_app_notifications', JSON.stringify(list));
  } catch (_) {}
  updateNotifBadgeCount();
}

function updateNotifBadgeCount() {
  const notifBadge = document.getElementById('notif-badge');
  if (!notifBadge) return;
  const list = getStoredNotifications();
  const unreadCount = list.filter(n => !n.isRead).length;
  if (unreadCount > 0 && !appState.hasReadNotifications) {
    notifBadge.textContent = unreadCount > 99 ? '99+' : unreadCount;
    notifBadge.classList.remove('hidden');
  } else {
    notifBadge.classList.add('hidden');
  }
}

function addAppNotification(item) {
  const list = getStoredNotifications();
  const now = new Date();
  const newNotif = {
    id: item.id || `notif-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
    type: item.type || 'system',
    title: item.title || 'ការជូនដំណឹងថ្មី',
    content: item.content || '',
    time: item.time || now.toLocaleTimeString('km-KH', { hour: '2-digit', minute: '2-digit' }),
    date: item.date || now.toLocaleDateString('km-KH', { day: '2-digit', month: 'short' }),
    tag: item.tag || 'ថ្មី',
    color: item.color || 'orange',
    icon: item.icon || (item.type === 'order' ? 'package' : item.type === 'expense' ? 'receipt' : item.type === 'sync' ? 'refresh-cw' : 'bell'),
    isRead: false
  };
  list.unshift(newNotif);
  if (list.length > 50) list.pop();
  saveStoredNotifications(list);
  appState.hasReadNotifications = false;

  const modal = document.getElementById('notif-modal');
  if (modal && !modal.classList.contains('hidden') && DataService.data) {
    renderNotificationsFeed(DataService.data);
  }
}

function deleteNotification(id) {
  let list = getStoredNotifications();
  list = list.filter(n => n.id !== id);
  saveStoredNotifications(list);
  if (navigator.vibrate) try { navigator.vibrate(15); } catch (_) {}
  if (DataService.data) renderNotificationsFeed(DataService.data);
}

function clearAllNotifications() {
  saveStoredNotifications([]);
  appState.hasReadNotifications = true;
  if (typeof DataService !== 'undefined' && DataService.unreadNotifications) {
    DataService.unreadNotifications = [];
  }
  document.getElementById('notif-badge')?.classList?.add('hidden');
  if (navigator.vibrate) try { navigator.vibrate([20, 40, 20]); } catch (_) {}
  if (DataService.data) renderNotificationsFeed(DataService.data);
  updateNotifBadgeCount();
  showToastNotification('បានសម្អាតការជូនដំណឹងទាំងអស់ ✓');
}

function markAllNotificationsAsRead() {
  const list = getStoredNotifications();
  list.forEach(n => { n.isRead = true; });
  saveStoredNotifications(list);
  appState.hasReadNotifications = true;
  document.getElementById('notif-badge')?.classList?.add('hidden');
  if (DataService.data) renderNotificationsFeed(DataService.data);
  showToastNotification('បានសម្គាល់ថាបានអានទាំងអស់ ✓');
}

// ==========================================
// Offline Mode Auto-Sync Queue System
// ==========================================
function getOfflineSyncQueue() {
  try {
    const raw = localStorage.getItem('sd_pending_offline_sync');
    if (raw) {
      const q = JSON.parse(raw);
      return {
        orders: Array.isArray(q.orders) ? q.orders : [],
        expenses: Array.isArray(q.expenses) ? q.expenses : []
      };
    }
  } catch (_) {}
  return { orders: [], expenses: [] };
}

function saveOfflineSyncQueue(queue) {
  try {
    localStorage.setItem('sd_pending_offline_sync', JSON.stringify(queue));
  } catch (_) {}
}

function queueOfflineOrder(order) {
  const queue = getOfflineSyncQueue();
  queue.orders.push(order);
  saveOfflineSyncQueue(queue);
}

function queueOfflineExpense(expense) {
  const queue = getOfflineSyncQueue();
  queue.expenses.push(expense);
  saveOfflineSyncQueue(queue);
}

async function syncOfflineQueue() {
  if (!navigator.onLine) return;
  const webhookUrl = (typeof getAppsScriptWebhookUrl === 'function') ? getAppsScriptWebhookUrl() : '';
  if (!webhookUrl || !webhookUrl.startsWith('http')) return;

  const queue = getOfflineSyncQueue();
  const totalOrders = queue.orders.length;
  const totalExpenses = queue.expenses.length;
  if (totalOrders === 0 && totalExpenses === 0) return;

  console.log(`[Offline Sync] Starting auto-sync for ${totalOrders} orders, ${totalExpenses} expenses...`);

  let syncedOrders = 0;
  const remainingOrders = [];
  for (const order of queue.orders) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'add_order', data: order })
      });
      syncedOrders++;
    } catch (err) {
      console.warn('Failed to sync order, retaining in queue:', err);
      remainingOrders.push(order);
    }
  }

  let syncedExpenses = 0;
  const remainingExpenses = [];
  for (const exp of queue.expenses) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'add_expense', data: exp })
      });
      syncedExpenses++;
    } catch (err) {
      console.warn('Failed to sync expense, retaining in queue:', err);
      remainingExpenses.push(exp);
    }
  }

  queue.orders = remainingOrders;
  queue.expenses = remainingExpenses;
  saveOfflineSyncQueue(queue);

  const totalSynced = syncedOrders + syncedExpenses;
  if (totalSynced > 0) {
    showToastNotification(`🔄 បានធ្វើសមកាលកម្ម ${totalSynced} កំណត់ត្រា (Offline ➔ Sheets) ជោគជ័យ!`);
    addAppNotification({
      type: 'sync',
      title: '🔄 សមកាលកម្ម Offline ជោគជ័យ',
      content: `បានបញ្ជូន ${totalSynced} កំណត់ត្រា (${syncedOrders} កុម្ម៉ង់, ${syncedExpenses} ចំណាយ) ចូលទៅក្នុង Google Sheet រួចរាល់។`,
      tag: 'Auto-Synced ✓',
      color: 'emerald',
      icon: 'refresh-cw'
    });
  }
}

function renderNotificationsFeed(d) {
  const feedList = document.getElementById('notif-feed-list');
  if (!d || !feedList) return;

  const isEn = appState.language === 'en';
  const currentTimeStr = new Date().toLocaleTimeString('km-KH', { hour: '2-digit', minute: '2-digit' });
  const currentDateStr = new Date().toLocaleDateString('km-KH', { day: '2-digit', month: 'short', year: 'numeric' });

  // 1. Stored Real Notifications List
  const storedList = getStoredNotifications();
  let eventsHTML = '';

  if (storedList.length === 0) {
    eventsHTML = `
      <div class="py-8 px-4 text-center flex flex-col items-center justify-center space-y-3 bg-[#101D32]/50 rounded-2xl border border-white/5">
        <div class="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400">
          <i data-lucide="bell-off" class="w-6 h-6 text-orange-400/80"></i>
        </div>
        <div class="space-y-1">
          <h4 class="text-sm font-bold text-white">គ្មានការជូនដំណឹងថ្មីឡើយ ✨</h4>
          <p class="text-xs text-slate-400 max-w-xs leading-relaxed">
            រាល់ការកត់ត្រាការលក់ ចំណាយ និងការ Sync ពេលដាច់អ៊ីនធឺណិត នឹងបង្ហាញនៅទីនេះ។
          </p>
        </div>
      </div>
    `;
  } else {
    eventsHTML = `
      <div class="space-y-2.5">
        <div class="flex items-center justify-between px-1">
          <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">សេចក្តីជូនដំណឹង និងប្រតិបត្តិការ (${storedList.length})</span>
        </div>
        ${storedList.map(item => {
          const colorStyles = {
            orange: 'border-orange-500/25 bg-orange-500/10 text-orange-400',
            rose: 'border-rose-500/25 bg-rose-500/10 text-rose-400',
            emerald: 'border-emerald-500/25 bg-emerald-500/10 text-emerald-400',
            amber: 'border-amber-500/25 bg-amber-500/10 text-amber-400',
            indigo: 'border-indigo-500/25 bg-indigo-500/10 text-indigo-400',
            blue: 'border-blue-500/25 bg-blue-500/10 text-blue-400'
          }[item.color || 'orange'] || 'border-orange-500/25 bg-orange-500/10 text-orange-400';

          return `
            <div class="group relative p-3.5 rounded-2xl bg-[#132238] border border-white/10 hover:border-white/20 transition-all text-xs text-slate-300 space-y-2 shadow-lg ${item.isRead ? 'opacity-80' : 'border-l-4 border-l-orange-500'}">
              <div class="flex items-start justify-between gap-2">
                <div class="flex items-center gap-2 min-w-0">
                  <div class="w-7 h-7 rounded-xl ${colorStyles} flex items-center justify-center shrink-0 border">
                    <i data-lucide="${item.icon || 'bell'}" class="w-3.5 h-3.5"></i>
                  </div>
                  <div class="min-w-0">
                    <h4 class="font-bold text-white text-[12px] truncate">${item.title}</h4>
                    <span class="text-[9.5px] text-slate-400 font-mono">${item.date} • ${item.time}</span>
                  </div>
                </div>
                <div class="flex items-center gap-1 shrink-0">
                  <span class="text-[9px] px-2 py-0.5 rounded-full font-mono font-semibold ${colorStyles}">
                    ${item.tag}
                  </span>
                  <button onclick="deleteNotification('${item.id}')" 
                          class="w-6 h-6 rounded-lg bg-white/5 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 flex items-center justify-center transition active:scale-90" 
                          title="លុបការជូនដំណឹងនេះ">
                    <i data-lucide="x" class="w-3 h-3"></i>
                  </button>
                </div>
              </div>
              <p class="text-[11px] text-slate-300 leading-relaxed pl-9">${item.content}</p>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // Announcements (if available from Sheet)
  let announcementsHTML = '';
  const announcements = d.announcements || [];
  if (announcements.length > 0) {
    announcementsHTML = `
      <div class="space-y-2.5 mb-2.5">
        ${announcements.map(a => `
          <div class="p-3.5 rounded-2xl bg-gradient-to-br from-indigo-950/70 to-purple-950/70 border border-indigo-500/30 text-xs text-slate-200 space-y-1.5 shadow-xl relative overflow-hidden">
            <div class="flex items-center justify-between">
              <span class="font-bold text-indigo-300 flex items-center gap-1.5 text-[12px]">
                <span>📢</span> ដំណឹង (Announcements)
              </span>
              <span class="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-mono">${a.date || 'Today'}</span>
            </div>
            <h4 class="font-bold text-white text-xs">${a.title}</h4>
            <p class="text-[11px] text-slate-300 leading-relaxed">${a.content}</p>
            <p class="text-[9.5px] text-slate-400 font-mono pt-1 text-right">— ${a.author}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  feedList.innerHTML = announcementsHTML + eventsHTML;
  if (window.lucide) window.lucide.createIcons();
}

function toggleNotificationsModal() {
  const modal = document.getElementById('notif-modal');
  if (!modal) return;
  const isHidden = modal.classList.contains('hidden');
  if (isHidden) {
    if (DataService.data) renderNotificationsFeed(DataService.data);
    setDockVisible(true);
    const feedList = document.getElementById('notif-feed-list');
    if (feedList && typeof hookScrollableForDock === 'function') hookScrollableForDock(feedList, false);
    modal.classList.remove('hidden');
  } else {
    modal.classList.add('hidden');
  }
  if (window.lucide) window.lucide.createIcons();
}

function openChangePinModal() {
  document.getElementById('change-pin-modal').classList.remove('hidden');
  setDockVisible(false);
}

function closeChangePinModal() {
  document.getElementById('change-pin-modal').classList.add('hidden');
  setDockVisible(true);
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

let systemThemeMediaQueryListener = null;

function applyTheme(theme) {
  const metaTheme = document.getElementById('theme-color-meta');
  
  if (theme === 'auto') {
    const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const effectiveTheme = isSystemDark ? 'dark' : 'light';
    
    if (effectiveTheme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.body.classList.add('light-theme');
      document.documentElement.style.colorScheme = 'light';
      document.body.style.colorScheme = 'light';
      if (metaTheme) metaTheme.setAttribute('content', '#FFFFFF');
    } else {
      document.documentElement.classList.remove('light-theme');
      document.body.classList.remove('light-theme');
      document.documentElement.style.colorScheme = 'dark';
      document.body.style.colorScheme = 'dark';
      if (metaTheme) metaTheme.setAttribute('content', '#070D18');
    }

    // Set up continuous system listener if not already attached
    if (window.matchMedia && !systemThemeMediaQueryListener) {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      systemThemeMediaQueryListener = (e) => {
        if (appState.theme === 'auto') {
          applyTheme('auto');
          renderCurrentView();
        }
      };
      if (mq.addEventListener) {
        mq.addEventListener('change', systemThemeMediaQueryListener);
      } else if (mq.addListener) {
        mq.addListener(systemThemeMediaQueryListener);
      }
    }
  } else {
    const isLight = (theme === 'light');
    if (isLight) {
      document.documentElement.classList.add('light-theme');
      document.body.classList.add('light-theme');
      document.documentElement.style.colorScheme = 'light';
      document.body.style.colorScheme = 'light';
      if (metaTheme) metaTheme.setAttribute('content', '#FFFFFF');
    } else {
      document.documentElement.classList.remove('light-theme');
      document.body.classList.remove('light-theme');
      document.documentElement.style.colorScheme = 'dark';
      document.body.style.colorScheme = 'dark';
      if (metaTheme) metaTheme.setAttribute('content', '#070D18');
    }
  }
}

function setLanguage(lang) {
  appState.language = lang;
  localStorage.setItem('sd_lang', lang);
  renderCurrentView();
  if (typeof updateModalLanguage === 'function') updateModalLanguage();
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
  setDockVisible(false);
}

function closeShortcutModal() {
  document.getElementById('shortcut-modal')?.classList?.add('hidden');
  setDockVisible(true);
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
let lastHomeTapTime = 0;

function handleHomeClick(e) {
  const now = Date.now();
  const drawerModal = document.getElementById('profile-drawer-modal');
  const drawerPanel = document.getElementById('profile-drawer-panel');
  const isDrawerOpen = (drawerModal && !drawerModal.classList.contains('hidden')) || 
                       (drawerPanel && drawerPanel.classList.contains('translate-x-0'));

  const openModal = document.querySelector('#sales-modal:not(.hidden), #expenses-modal:not(.hidden), #cod-modal:not(.hidden), #bank-modal:not(.hidden), #payables-modal:not(.hidden), #team-sets-modal:not(.hidden), #all-customers-modal:not(.hidden), #team-members-modal:not(.hidden), #new-order-modal:not(.hidden), #new-expense-modal:not(.hidden), #global-search-modal:not(.hidden)');

  // Case 1: If Profile Drawer or any Modal is open ➔ Single tap smoothly dismisses it to reveal dashboard instantly (ZERO network reload)
  if (isDrawerOpen || openModal) {
    closeProfileDrawer();
    closeAllModals();
    const dock = document.getElementById('bottom-dock');
    if (dock) {
      dock.classList.remove('dock-hidden');
      dock.classList.remove('dock-profile-active');
    }
    if (appState.currentView !== 'dashboard') {
      switchView('dashboard', false);
    }
    if (navigator.vibrate) navigator.vibrate(10);
    return;
  }

  // Case 2: If currently on another tab (Analytics, Learning, Settings) ➔ Single tap switches to Dashboard instantly from memory (ZERO reload)
  if (appState.currentView !== 'dashboard') {
    switchView('dashboard', false);
    return;
  }

  // Case 3: Already on Dashboard ➔ Distinguish Single Tap (Scroll to Top) vs Double Tap (Reload Data)
  const timeDiff = now - lastHomeTapTime;
  lastHomeTapTime = now;

  if (timeDiff > 0 && timeDiff < 350) {
    // 👆👆 DOUBLE TAP (within 350ms): Manual Reload data from Google Sheet!
    lastHomeTapTime = 0; // reset
    if (navigator.vibrate) navigator.vibrate([15, 50, 15]);
    cycleHomeCelestialGlow();
    const main = document.getElementById('main-content');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
    manualReload();
  } else {
    // 👆 SINGLE TAP: Smooth scroll to top, cycle micro glow gently, instant reveal
    cycleHomeCelestialGlow();
    const main = document.getElementById('main-content');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

let lastAnalyticsTapTime = 0;

function handleAnalyticsClick(e) {
  const now = Date.now();
  closeProfileDrawer();
  closeAllModals();

  const dock = document.getElementById('bottom-dock');
  if (dock) {
    dock.classList.remove('dock-hidden');
    dock.classList.remove('dock-profile-active');
  }

  // Case 1: If currently on another tab -> Single tap switches to Analytics
  if (appState.currentView !== 'analytics') {
    switchView('analytics', false);
    return;
  }

  // Case 2: Already on Analytics -> Distinguish Single Tap (Scroll to Top) vs Double Tap (Reload Data)
  const timeDiff = now - lastAnalyticsTapTime;
  lastAnalyticsTapTime = now;

  if (timeDiff > 0 && timeDiff < 350) {
    // 👆👆 DOUBLE TAP: Manual Reload data from Google Sheet!
    lastAnalyticsTapTime = 0;
    if (navigator.vibrate) navigator.vibrate([15, 50, 15]);
    const main = document.getElementById('main-content');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
    const analyticsHeader = document.getElementById('analytics-sticky-header');
    if (analyticsHeader) analyticsHeader.classList.remove('filter-hidden');
    setDockVisible(true);
    manualReload();
  } else {
    // 👆 SINGLE TAP: Smooth scroll to top & restore header & dock
    const main = document.getElementById('main-content');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
    const analyticsHeader = document.getElementById('analytics-sticky-header');
    if (analyticsHeader) analyticsHeader.classList.remove('filter-hidden');
    setDockVisible(true);
    if (navigator.vibrate) navigator.vibrate(10);
  }
}

let lastLearningTapTime = 0;

function handleLearningClick(e) {
  const now = Date.now();
  closeProfileDrawer();
  closeAllModals();

  const dock = document.getElementById('bottom-dock');
  if (dock) {
    dock.classList.remove('dock-hidden');
    dock.classList.remove('dock-profile-active');
  }

  // Case 1: If currently on another tab -> Single tap switches to Learning
  if (appState.currentView !== 'learning') {
    switchView('learning', false);
    return;
  }

  // Case 2: Already on Learning -> Distinguish Single Tap (Scroll to Top) vs Double Tap (Reload Data)
  const timeDiff = now - lastLearningTapTime;
  lastLearningTapTime = now;

  if (timeDiff > 0 && timeDiff < 350) {
    // 👆👆 DOUBLE TAP: Manual Reload data from Google Sheet!
    lastLearningTapTime = 0;
    if (navigator.vibrate) navigator.vibrate([15, 50, 15]);
    const main = document.getElementById('main-content');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
    setDockVisible(true);
    manualReload();
  } else {
    // 👆 SINGLE TAP: Smooth scroll to top & restore dock
    const main = document.getElementById('main-content');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
    setDockVisible(true);
    if (navigator.vibrate) navigator.vibrate(10);
  }
}

window.handleAnalyticsClick = handleAnalyticsClick;
window.handleLearningClick = handleLearningClick;

// Native iOS Tap Status Bar / Header / Static Empty Area to Scroll To Top
function handleHeaderScrollToTop(e, targetId = null) {
  // Only trigger if user didn't tap interactive action buttons inside header
  if (e && e.target && e.target.closest('button, input, select, a, #header-profile-block, [data-prevent-scroll-top]')) {
    return;
  }
  let target = null;
  if (targetId) {
    target = document.getElementById(targetId);
  } else {
    // Dynamic detection based on what is currently active/visible on screen
    const modals = [
      { modalId: 'all-customers-modal', listId: 'all-customers-list' },
      { modalId: 'sales-modal', listId: 'sales-modal-list' },
      { modalId: 'expenses-modal', listId: 'expenses-modal-list' },
      { modalId: 'cod-modal', listId: 'cod-modal-table-container' },
      { modalId: 'bank-modal', listId: 'bank-modal-list' },
      { modalId: 'payables-modal', listId: 'payables-modal-list' },
      { modalId: 'notif-modal', listId: 'notif-feed-list' },
      { modalId: 'profile-drawer-modal', listId: 'profile-drawer-content' },
      { modalId: 'global-search-modal', listId: 'search-results-container' },
      { modalId: 'profile-settings-search-modal', listId: 'profile-settings-search-results' }
    ];
    for (const m of modals) {
      const modalEl = document.getElementById(m.modalId);
      if (modalEl && !modalEl.classList.contains('hidden')) {
        target = document.getElementById(m.listId);
        break;
      }
    }
    if (!target) {
      target = document.getElementById('main-content');
    }
  }

  if (target) {
    target.scrollTo({ top: 0, behavior: 'smooth' });
    // If scrolling customer list to top, ensure summary bar is revealed
    if (target.id === 'all-customers-list') {
      const summaryEl = document.getElementById('all-customers-summary');
      if (summaryEl) summaryEl.classList.remove('summary-collapsed');
    }
    if (target.id === 'expenses-modal-list') {
      const expFilterBar = document.getElementById('expenses-modal-date-filter-bar');
      if (expFilterBar) expFilterBar.classList.remove('filter-hidden');
    }
  }
  if (navigator.vibrate) {
    try { navigator.vibrate(10); } catch (_) {}
  }
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
// Modal Context Menu Actions (Save as PDF, Share, Copy)
// ==========================================
function toggleModalContextMenu(modalType, event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById(`modal-menu-${modalType}`);
  if (!menu) return;

  const isHidden = menu.classList.contains('hidden');
  closeAllModalContextMenus();
  if (isHidden) {
    menu.classList.remove('hidden');
    document.querySelectorAll('.modal-context-backdrop').forEach(el => el.classList.remove('hidden'));
    // Update labels based on appState.language
    const isKm = appState.language === 'km';
    menu.querySelectorAll('.action-label-pdf').forEach(el => el.textContent = isKm ? 'រក្សាទុកជា PDF' : 'Save as PDF');
    menu.querySelectorAll('.action-label-share').forEach(el => el.textContent = isKm ? 'ចែករំលែក' : 'Share');
    menu.querySelectorAll('.action-label-copy').forEach(el => el.textContent = isKm ? 'ចម្លង' : 'Copy');
  }
}

function closeAllModalContextMenus() {
  document.querySelectorAll('.modal-context-backdrop').forEach(el => el.classList.add('hidden'));
  ['sales', 'payables', 'expenses', 'cod', 'bank', 'teamsets'].forEach(type => {
    const m = document.getElementById(`modal-menu-${type}`);
    if (m) m.classList.add('hidden');
  });
}

// Universal outside tap/click dismiss using Capture Phase (intercepts before stopPropagation)
window.addEventListener('pointerdown', (e) => {
  if (!e.target.closest('[id^="modal-menu-"]') && !e.target.closest('button[title="ជម្រើស"]')) {
    closeAllModalContextMenus();
  }
}, true);

window.addEventListener('click', (e) => {
  if (!e.target.closest('[id^="modal-menu-"]') && !e.target.closest('button[title="ជម្រើស"]')) {
    closeAllModalContextMenus();
  }
}, true);

function handleModalMenuAction(modalType, action) {
  closeAllModalContextMenus();
  if (action === 'pdf') {
    exportModalToPDF(modalType);
  } else if (action === 'share') {
    shareModalSummary(modalType);
  } else if (action === 'copy') {
    copyModalSummary(modalType);
  }
}

function getModalShareText(modalType) {
  const d = DataService.data;
  if (!d) return '';
  const isKm = appState.language === 'km';
  const now = new Date();
  const dateStr = now.toLocaleDateString('km-KH');

  if (modalType === 'sales') {
    const list = d.personalSales || [];
    const totalBox = list.reduce((sum, item) => sum + (item.totalBoxQty || 0), 0);
    const totalRev = list.reduce((sum, item) => sum + (item.totalAmount || 0), 0);
    let txt = `📊 ${isKm ? 'របាយការណ៍ការលក់ Personal Sales' : 'Personal Sales Report'} (${dateStr})\n`;
    txt += `------------------------------------\n`;
    txt += `${isKm ? 'ចំនួនកុម្ម៉ង់' : 'Total Orders'}: ${list.length}\n`;
    txt += `${isKm ? 'ចំនួនប្រអប់' : 'Total Boxes'}: ${formatInt(totalBox)}\n`;
    txt += `${isKm ? 'ទឹកប្រាក់សរុប' : 'Total Revenue'}: ${formatUSD(totalRev)}\n`;
    txt += `------------------------------------\n`;
    list.slice(0, 15).forEach((item, i) => {
      txt += `${i + 1}. ${item.customer || '—'} | ${item.date} | ${item.totalBoxQty || 0} box | ${formatUSD(item.totalAmount)}\n`;
    });
    if (list.length > 15) txt += `... និង ${list.length - 15} មុខទៀត\n`;
    return txt;
  } else if (modalType === 'payables') {
    const payables = (d.bank && d.bank.payables) || [];
    const total = (d.bank && d.bank.netCashPosition && d.bank.netCashPosition.totalAccountsPayable) ||
      payables.reduce((s, p) => s + (p.amount || 0), 0);
    let txt = `💳 ${isKm ? 'បញ្ជីបំណុលត្រូវទូទាត់' : 'Accounts Payable'} (${dateStr})\n`;
    txt += `------------------------------------\n`;
    txt += `${isKm ? 'ចំនួនមុខ' : 'Total Items'}: ${payables.length}\n`;
    txt += `${isKm ? 'ទឹកប្រាក់សរុប' : 'Total Amount'}: ${formatUSD(total)}\n`;
    txt += `------------------------------------\n`;
    payables.forEach((p, i) => {
      txt += `${i + 1}. ${p.title} - ${formatUSD(p.amount)}\n`;
    });
    return txt;
  } else if (modalType === 'expenses') {
    const exp = d.expenses || [];
    const total = exp.reduce((s, e) => s + (e.amount || 0), 0);
    let txt = `🧾 ${isKm ? 'បញ្ជីចំណាយ Daily Expenses' : 'Daily Expenses'} (${dateStr})\n`;
    txt += `------------------------------------\n`;
    txt += `${isKm ? 'ចំនួនមុខ' : 'Total Items'}: ${exp.length}\n`;
    txt += `${isKm ? 'ទឹកប្រាក់សរុប' : 'Total Amount'}: ${formatUSD(total)}\n`;
    txt += `------------------------------------\n`;
    exp.slice(0, 15).forEach((e, i) => {
      txt += `${i + 1}. ${e.description || e.category} | ${e.date} | ${formatUSD(e.amount)}\n`;
    });
    if (exp.length > 15) txt += `... និង ${exp.length - 15} មុខទៀត\n`;
    return txt;
  } else if (modalType === 'cod') {
    const items = d.pendingCodReceivables || [];
    const totalAmt = items.reduce((s, it) => s + (it.amount || 0), 0);
    const totalBoxes = items.reduce((s, it) => s + (parseInt(it.qtyBoxes, 10) || 0), 0);
    let txt = `📦 ${isKm ? 'លុយនៅអតិថិជន / COD មិនទាន់ទូទាត់' : 'Outstanding COD Receivables'} (${dateStr})\n`;
    txt += `------------------------------------\n`;
    txt += `${isKm ? 'ចំនួនមុខ' : 'Total Items'}: ${items.length}\n`;
    txt += `${isKm ? 'ចំនួនប្រអប់' : 'Total Boxes'}: ${totalBoxes}\n`;
    txt += `${isKm ? 'ទឹកប្រាក់សរុប' : 'Total Amount'}: ${formatUSD(totalAmt)}\n`;
    txt += `------------------------------------\n`;
    items.forEach((it, i) => {
      txt += `${i + 1}. ${it.date} | ${it.qtyBoxes} box | ${it.status} | ${formatUSD(it.amount)}\n`;
    });
    return txt;
  } else if (modalType === 'bank') {
    const accounts = (d.bank && d.bank.accounts) || [];
    const netCash = (d.bank && d.bank.netCashPosition) || {};
    let txt = `🏦 ${isKm ? 'ឈ្មោះគណនី / ធនាគារ និងសមតុល្យ' : 'Bank Accounts & Cash Balance'} (${dateStr})\n`;
    txt += `------------------------------------\n`;
    txt += `${isKm ? 'ចំនួនគណនី' : 'Total Accounts'}: ${accounts.length}\n`;
    txt += `${isKm ? 'សរុបជាក់ស្តែង' : 'Total Actual Cash'}: ${formatUSD(netCash.totalActualCash || 0)}\n`;
    txt += `------------------------------------\n`;
    accounts.forEach((a, i) => {
      let bStr = '';
      if (a.usd > 0) bStr += formatUSD(a.usd);
      if (a.khr > 0) bStr += (bStr ? ' | ' : '') + formatKHR(a.khr);
      if (!bStr) bStr = '$0.00';
      txt += `${i + 1}. ${a.name} | ${bStr}\n`;
    });
    return txt;
  } else if (modalType === 'teamsets' && activeTeamSetsLeader) {
    const l = activeTeamSetsLeader;
    const moStr = String(activeTeamSetsMonthNum).padStart(2, '0');
    let txt = `👥 គោលដៅ និងការលក់តាមឈុត: ${l.name} (${moStr}/2026)\n`;
    txt += `------------------------------------\n`;
    txt += `🎯 គោលដៅ: ${l.targetGoal || 100} ប្រអប់ | 📦 លក់បាន: ${l.totalBoxes} (${l.targetPercent}%)\n`;
    txt += `ឈុត ១: ${l.set1 || 0} | ឈុត ២: ${l.set2 || 0} | ឈុត ៣: ${l.set3 || 0} | ឈុត ៤: ${l.set4 || 0}${(l.set5 || 0) > 0 ? ` | ឈុត ៥: ${l.set5}` : ''}\n`;
    if ((l.boost || 0) > 0) txt += `Boost: $${l.boost.toFixed(2)}\n`;
    txt += `------------------------------------\n`;
    const daysWithSales = (l.dailySales || []).filter(r => (r.totalBoxes || 0) > 0);
    daysWithSales.forEach(r => {
      txt += `${r.date}: ${r.totalBoxes} ប្រអប់ (Set1:${r.set1}, Set2:${r.set2}, Set3:${r.set3}, Set4:${r.set4}${(r.set5 || 0) > 0 ? `, Set5:${r.set5}` : ''})\n`;
    });
    return txt;
  }
  return '';
}

function exportModalToPDF(modalType) {
  const modalIdMap = {
    sales: 'sales-modal',
    payables: 'payables-modal',
    expenses: 'expenses-modal',
    cod: 'cod-modal',
    bank: 'bank-modal',
    teamsets: 'team-sets-modal'
  };
  const modalEl = document.getElementById(modalIdMap[modalType]);
  if (!modalEl) return;

  const card = modalEl.querySelector('.bg-\\[\\#0F1B2E\\]\\/95') || modalEl.firstElementChild;
  if (!card) return;

  card.classList.add('modal-print-target');
  window.print();
  setTimeout(() => {
    card.classList.remove('modal-print-target');
  }, 1000);
}

function shareModalSummary(modalType) {
  const text = getModalContentText(modalType);
  if (!text) return;

  if (navigator.share) {
    navigator.share({
      title: 'SD Dashboard Summary',
      text: text
    }).catch(() => {
      copyModalSummary(modalType);
    });
  } else {
    copyModalSummary(modalType);
  }
}

function copyModalSummary(modalType) {
  const text = getModalContentText(modalType);
  if (!text) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToastNotification(appState.language === 'km' ? 'បានចម្លងជោគជ័យ!' : 'Copied successfully!');
    }).catch(() => {
      fallbackCopyText(text);
    });
  } else {
    fallbackCopyText(text);
  }
}

function fallbackCopyText(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToastNotification(appState.language === 'km' ? 'បានចម្លងជោគជ័យ!' : 'Copied successfully!');
  } catch (e) {
    alert('មិនអាចចម្លងបានទេ: ' + e);
  }
  document.body.removeChild(ta);
}

function showToastNotification(msg) {
  const existing = document.getElementById('app-active-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'app-active-toast';
  toast.className = 'fixed top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900/95 border border-emerald-500/60 text-emerald-400 font-bold text-xs rounded-full shadow-2xl backdrop-blur-xl z-[9999] flex items-center gap-2 shadow-emerald-500/20 animate-fade-in pointer-events-none select-none transition-all duration-300';
  toast.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span><span>${msg}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('opacity-0', '-translate-y-2');
    setTimeout(() => { toast.remove(); }, 300);
  }, 1800);
}

// =========================================================
// PROFILE DASHBOARD (Facebook Menu + iOS Liquid Glass Hub)
// =========================================================

const DEFAULT_PROFILE_DATA = {
  name: 'សមាជិក Bostar',
  memberId: 'ID: BG-001',
  subtitle: 'BostarGroup Member',
  avatar: 'bostar-logo.png',
  work: 'សមាជិកក្រុម BostarGroup',
  study: 'BostarGroup',
  live: 'រាជធានីភ្នំពេញ',
  from: 'ព្រះរាជាណាចក្រកម្ពុជា',
  status: 'សកម្មក្នុងការងារ',
  birthday: '',
  phone: '',
  privacy: {
    showWork: true,
    showStudy: true,
    showLive: true,
    showFrom: true,
    showStatus: true,
    showBirth: false,
    showPhone: false
  }
};

const DEFAULT_GUEST_PROFILE_DATA = {
  name: 'សមាជិក Bostar',
  memberId: 'ID: BG-001',
  subtitle: 'BostarGroup Member',
  avatar: 'bostar-logo.png',
  work: 'សមាជិកក្រុម BostarGroup',
  study: 'BostarGroup',
  live: 'រាជធានីភ្នំពេញ',
  from: 'ព្រះរាជាណាចក្រកម្ពុជា',
  status: 'សកម្មក្នុងការងារ',
  birthday: '',
  phone: '',
  privacy: {
    showWork: true,
    showStudy: true,
    showLive: true,
    showFrom: true,
    showStatus: true,
    showBirth: false,
    showPhone: false
  }
};

function getProfileData() {
  try {
    const raw = localStorage.getItem('sd_profile_data');
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_GUEST_PROFILE_DATA,
        ...parsed,
        privacy: {
          ...DEFAULT_GUEST_PROFILE_DATA.privacy,
          ...(parsed.privacy || {})
        }
      };
    }
  } catch (e) {
    console.warn('Error reading sd_profile_data:', e);
  }
  return { ...DEFAULT_GUEST_PROFILE_DATA, privacy: { ...DEFAULT_GUEST_PROFILE_DATA.privacy } };
}

function syncHeaderProfileUI() {
  const p = getProfileData();
  const avatarEl = document.getElementById('header-profile-avatar');
  const nameEl = document.getElementById('header-profile-name');
  const subEl = document.getElementById('header-profile-sub');
  const badgeEl = document.getElementById('header-profile-badge');
  const isMaster = (window.DataService && typeof window.DataService.isMasterSheet === 'function' && window.DataService.isMasterSheet());

  if (avatarEl) avatarEl.src = isMaster ? (p.avatar || 'profile.png') : (p.avatar || 'bostar-logo.png');
  if (nameEl) nameEl.textContent = isMaster ? (p.name || 'ស្តី ស្តើង') : (p.name || 'BostarGroup');
  if (subEl) subEl.textContent = isMaster ? (p.subtitle || 'SDEY SDOEUNG') : (p.subtitle || 'Bostar Sales & Finance');
  if (badgeEl) {
    if (isMaster) {
      badgeEl.classList.remove('hidden');
    } else {
      badgeEl.classList.add('hidden');
    }
  }
}

function getAllUniqueCustomers() {
  const d = DataService.data;
  const sales = (d && d.personalSales) ? d.personalSales : [];
  const map = new Map();

  sales.forEach(s => {
    const rawName = (s.customer || '').trim();
    const rawPhone = (s.phone || '').trim();
    const key = (rawPhone && rawPhone.length >= 6)
      ? `TEL:${rawPhone.replace(/\s+/g, '')}`
      : `NAME:${(rawName || 'អតិថិជនទូទៅ').toLowerCase()}`;

    if (!map.has(key)) {
      map.set(key, {
        key,
        name: rawName || 'អតិថិជនទូទៅ',
        phone: rawPhone || '—',
        location: s.location || '—',
        seller: s.seller || 'ស្តី ស្តើង',
        totalOrders: 0,
        totalBoxes: 0,
        totalSpent: 0,
        totalThaiBaht: 0,
        lastDate: s.date || '',
        lastIsoDate: s.isoDate || '',
        orders: []
      });
    }
    const entry = map.get(key);
    if (rawName && (entry.name === 'អតិថិជនទូទៅ' || !entry.name)) {
      entry.name = rawName;
    }
    if (rawPhone && entry.phone === '—') {
      entry.phone = rawPhone;
    }
    if (s.location && entry.location === '—') {
      entry.location = s.location;
    }
    entry.totalOrders += 1;
    entry.totalBoxes += (s.totalBoxQty || 0);
    entry.totalSpent += (s.totalAmount || 0);
    entry.totalThaiBaht += (s.thaiBaht || s.price || 0);
    if ((s.isoDate || '') >= (entry.lastIsoDate || '')) {
      entry.lastIsoDate = s.isoDate || '';
      entry.lastDate = s.date || '';
      if (s.location) entry.location = s.location;
    }
    entry.orders.push(s);
  });

  return Array.from(map.values());
}

function getProfileNotes() {
  const defaultNotes = [
    { id: 1, title: 'គោលដៅលក់ប្រចាំខែ', text: 'ពង្រឹងការតាមដានអតិថិជនចាស់ និងបង្កើនការលក់ឈុត 2-3 ប្រអប់។', date: '14/10/2026' }
  ];
  try {
    const raw = localStorage.getItem('sd_profile_notes');
    if (raw) {
      const parsed = JSON.parse(raw);
      const filtered = parsed.filter(n => !n.title || (!n.title.includes('វណ្ណ ស៊ីថា') && !n.title.includes('Bostar Group')));
      if (filtered.length > 0) {
        localStorage.setItem('sd_profile_notes', JSON.stringify(filtered));
        return filtered;
      }
    }
  } catch (e) {}
  localStorage.setItem('sd_profile_notes', JSON.stringify(defaultNotes));
  return defaultNotes;
}

function getQrPhotosList() {
  try {
    const raw = localStorage.getItem('sd_qr_photos');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [
    { id: 'aba_usd', label: 'ABA (USD $)', image: '' },
    { id: 'aba_khr', label: 'ABA (KHR ៛)', image: '' },
    { id: 'acleda', label: 'ACLEDA QR', image: '' },
    { id: 'telegram', label: 'Telegram QR', image: '' }
  ];
}

// ==========================================
// DYNAMIC GREETING (Text Morphing & Subtitle Swap - Option 1 ⭐)
// ==========================================
function triggerDrawerGreetingAnimation(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const idEl = document.getElementById('drawer-prof-id');
  const greetingEl = document.getElementById('drawer-prof-greeting');
  const iconEl = document.getElementById('drawer-prof-greeting-icon');
  const textEl = document.getElementById('drawer-prof-greeting-text');
  if (!idEl || !greetingEl) return;

  const p = getProfileData();
  const fullName = (p.name || 'ស្តី ស្តើង').trim();
  let displayName = fullName;
  if (fullName.includes('ស្តី')) {
    displayName = 'ស្តី';
  } else if (fullName.includes('ស៊ីថា') || fullName.includes('វណ្ណ')) {
    displayName = 'លោកអគ្គនាយក ស៊ីថា';
  } else if (fullName.includes('នោរ៉ា') || fullName.includes('ប៊ិច')) {
    displayName = 'លោកប្រធាន នោរ៉ា';
  } else {
    displayName = fullName.split(/\s+/)[0];
  }

  const hour = new Date().getHours();
  let icon = '🌅';
  let text = `អរុណសួស្តី, ${displayName}!`;
  if (hour >= 12 && hour < 17) {
    icon = '☀️';
    text = `ទិវាសួស្តី, ${displayName}!`;
  } else if (hour >= 17 && hour < 21) {
    icon = '🌇';
    text = `សាយ័នសួស្តី, ${displayName}!`;
  } else if (hour >= 21 || hour < 5) {
    icon = '🌙';
    text = `រាត្រីសួស្តី, ${displayName}!`;
  }

  if (iconEl) iconEl.textContent = icon;
  if (textEl) textEl.textContent = text;

  if (window._drawerGreetingTimer) clearTimeout(window._drawerGreetingTimer);

  // Smooth vertical morph: slide ID up/fade out, slide Greeting up/fade in
  idEl.classList.remove('translate-y-0', 'opacity-100');
  idEl.classList.add('-translate-y-4', 'opacity-0');

  greetingEl.classList.remove('translate-y-4', 'opacity-0');
  greetingEl.classList.add('translate-y-0', 'opacity-100');

  // Display for 3.2s, then gracefully morph back to ID
  window._drawerGreetingTimer = setTimeout(() => {
    greetingEl.classList.remove('translate-y-0', 'opacity-100');
    greetingEl.classList.add('translate-y-4', 'opacity-0');

    idEl.classList.remove('-translate-y-4', 'opacity-0');
    idEl.classList.add('translate-y-0', 'opacity-100');
  }, 3200);
}

// ==========================================
// ATTENDANCE TRACKER (CheckinMe Style)
// ==========================================
const DEFAULT_ATTENDANCE_STATE = {
  todayStatus: 'not_checked', // 'not_checked' | 'checked_in' | 'checked_out'
  checkInTime: null,
  checkOutTime: null,
  duration: null,
  todayLate: false,
  location: 'ការិយាល័យកណ្តាល (HQ GPS Verified)',
  records: [
    { day: 1, date: '01/10/2026', checkIn: '08:02 AM', checkOut: '05:32 PM', status: 'present', duration: '9h 30m' },
    { day: 2, date: '02/10/2026', checkIn: '08:00 AM', checkOut: '05:30 PM', status: 'present', duration: '9h 30m' },
    { day: 5, date: '05/10/2026', checkIn: '08:05 AM', checkOut: '05:40 PM', status: 'present', duration: '9h 35m' },
    { day: 6, date: '06/10/2026', checkIn: '08:03 AM', checkOut: '05:31 PM', status: 'present', duration: '9h 28m' },
    { day: 7, date: '07/10/2026', checkIn: '08:35 AM', checkOut: '05:45 PM', status: 'late', duration: '9h 10m' },
    { day: 8, date: '08/10/2026', checkIn: '08:00 AM', checkOut: '05:30 PM', status: 'present', duration: '9h 30m' },
    { day: 9, date: '09/10/2026', checkIn: '08:04 AM', checkOut: '05:30 PM', status: 'present', duration: '9h 26m' },
    { day: 12, date: '12/10/2026', checkIn: '08:01 AM', checkOut: '05:35 PM', status: 'present', duration: '9h 34m' },
    { day: 13, date: '13/10/2026', checkIn: '08:06 AM', checkOut: '05:30 PM', status: 'present', duration: '9h 24m' }
  ]
};

function getAttendanceData() {
  try {
    const raw = localStorage.getItem('sd_attendance_data');
    if (raw) return { ...DEFAULT_ATTENDANCE_STATE, ...JSON.parse(raw) };
  } catch (e) {
    console.warn('Error reading sd_attendance_data:', e);
  }
  return { ...DEFAULT_ATTENDANCE_STATE };
}

function saveAttendanceData(data) {
  try {
    localStorage.setItem('sd_attendance_data', JSON.stringify(data));
  } catch (e) {
    console.warn('Error saving sd_attendance_data:', e);
  }
}

function openAttendanceModal() {
  const modal = document.getElementById('attendance-modal');
  if (!modal) return;
  renderAttendanceContent();
  modal.classList.remove('hidden');
  setDockVisible(false);

  if (window._attendanceClockInterval) clearInterval(window._attendanceClockInterval);
  window._attendanceClockInterval = setInterval(updateAttendanceLiveClock, 1000);

  if (window.lucide) window.lucide.createIcons();
  if (navigator.vibrate) try { navigator.vibrate(15); } catch(_) {}
}

function closeAttendanceModal() {
  const modal = document.getElementById('attendance-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  if (window._attendanceClockInterval) {
    clearInterval(window._attendanceClockInterval);
    window._attendanceClockInterval = null;
  }
  openProfileDrawer();
  if (navigator.vibrate) try { navigator.vibrate(12); } catch(_) {}
}

function updateAttendanceLiveClock() {
  const clockEl = document.getElementById('attendance-live-clock');
  if (clockEl) {
    const now = new Date();
    clockEl.textContent = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  }
}

function handleAttendanceAction(action) {
  const data = getAttendanceData();
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  if (action === 'in') {
    data.todayStatus = 'checked_in';
    data.checkInTime = timeStr;
    const isLate = now.getHours() > 8 || (now.getHours() === 8 && now.getMinutes() > 15);
    data.todayLate = isLate;
    if (navigator.vibrate) try { navigator.vibrate([30, 50, 30]); } catch(_) {}
    showToastNotification(appState.language === 'km' ? 'បានកត់ត្រាចូលធ្វើការជោគជ័យ!' : 'Checked in successfully!');
  } else if (action === 'out') {
    data.todayStatus = 'checked_out';
    data.checkOutTime = timeStr;
    data.duration = '៨ ម៉ោង ២៥ នាទី';
    const today = now.getDate();
    const existingIdx = (data.records || []).findIndex(r => r.day === today);
    const newRecord = {
      day: today,
      date: `${String(today).padStart(2, '0')}/10/2026`,
      checkIn: data.checkInTime || '08:00 AM',
      checkOut: timeStr,
      status: data.todayLate ? 'late' : 'present',
      duration: data.duration
    };
    if (existingIdx >= 0) {
      data.records[existingIdx] = newRecord;
    } else {
      data.records.push(newRecord);
    }
    if (navigator.vibrate) try { navigator.vibrate([50, 80, 50]); } catch(_) {}
    showToastNotification(appState.language === 'km' ? 'បានកត់ត្រាចេញពីធ្វើការជោគជ័យ!' : 'Checked out successfully!');
  }
  saveAttendanceData(data);
  renderAttendanceContent();
  renderProfileDrawerContent();
  if (window.lucide) window.lucide.createIcons();
}

function resetTodayAttendance(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const data = getAttendanceData();
  data.todayStatus = 'not_checked';
  data.checkInTime = null;
  data.checkOutTime = null;
  data.duration = null;
  data.todayLate = false;
  saveAttendanceData(data);
  renderAttendanceContent();
  renderProfileDrawerContent();
  if (window.lucide) window.lucide.createIcons();
  showToastNotification(appState.language === 'km' ? 'បានកំណត់វត្តមានថ្ងៃនេះឡើងវិញ' : 'Reset today attendance');
}

function renderAttendanceContent() {
  const container = document.getElementById('attendance-modal-body');
  if (!container) return;

  const data = getAttendanceData();
  const isEn = appState.language === 'en';
  const now = new Date();

  const kmDays = ['អាទិត្យ', 'ចន្ទ', 'អង្គារ', 'ពុធ', 'ព្រហស្បតិ៍', 'សុក្រ', 'សៅរ៍'];
  const kmMonths = ['មករា', 'កុម្ភៈ', 'មីនា', 'មេសា', 'ឧសភា', 'មិថុនា', 'កក្កដា', 'សីហា', 'កញ្ញា', 'តុលា', 'វិច្ឆិកា', 'ធ្នូ'];
  
  const dayName = kmDays[now.getDay()];
  const dateNum = now.getDate();
  const monthName = kmMonths[now.getMonth()];
  const yearNum = now.getFullYear();
  const fullDateKm = `ថ្ងៃ${dayName} ទី${dateNum} ខែ${monthName} ឆ្នាំ${yearNum}`;
  const fullDateEn = now.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' });
  const dateStr = isEn ? fullDateEn : fullDateKm;

  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

  const records = data.records || [];
  const presentCount = records.filter(r => r.status === 'present').length + (data.todayStatus !== 'not_checked' && !data.todayLate ? 1 : 0);
  const lateCount = records.filter(r => r.status === 'late').length + (data.todayLate ? 1 : 0);
  const absentCount = 0;
  const leaveCount = 0;

  let actionButtonHTML = '';
  if (data.todayStatus === 'not_checked') {
    actionButtonHTML = `
      <div class="relative group my-4">
        <div class="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-md opacity-40 group-hover:opacity-70 animate-pulse transition"></div>
        <button onclick="handleAttendanceAction('in')" 
                class="relative w-36 h-36 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 p-[3px] shadow-[0_0_30px_rgba(16,185,129,0.35)] active:scale-95 transition-all duration-300 mx-auto flex items-center justify-center">
          <div class="w-full h-full rounded-full bg-[#0B1528] flex flex-col items-center justify-center p-2 group-hover:bg-[#0E1B33] transition">
            <div class="w-11 h-11 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-1 border border-emerald-500/30">
              <i data-lucide="fingerprint" class="w-6 h-6"></i>
            </div>
            <span class="text-xs font-bold text-white leading-tight font-kantumruy">${isEn ? 'Check In Now' : 'ចុចចូលធ្វើការ'}</span>
            <span class="text-[9px] text-emerald-400 font-mono font-bold mt-0.5">${isEn ? 'Tap to Record' : 'Check In'}</span>
          </div>
        </button>
      </div>
    `;
  } else if (data.todayStatus === 'checked_in') {
    actionButtonHTML = `
      <div class="relative group my-4">
        <div class="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full blur-md opacity-40 group-hover:opacity-70 animate-pulse transition"></div>
        <button onclick="handleAttendanceAction('out')" 
                class="relative w-36 h-36 rounded-full bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-400 p-[3px] shadow-[0_0_30px_rgba(245,158,11,0.35)] active:scale-95 transition-all duration-300 mx-auto flex items-center justify-center">
          <div class="w-full h-full rounded-full bg-[#0B1528] flex flex-col items-center justify-center p-2 group-hover:bg-[#0E1B33] transition">
            <div class="w-11 h-11 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center mb-1 border border-amber-500/30">
              <i data-lucide="log-out" class="w-6 h-6"></i>
            </div>
            <span class="text-xs font-bold text-white leading-tight font-kantumruy">${isEn ? 'Check Out' : 'ចុចចេញពីធ្វើការ'}</span>
            <span class="text-[9px] text-amber-400 font-mono font-bold mt-0.5">${isEn ? 'Finish Day' : 'Check Out'}</span>
          </div>
        </button>
      </div>
    `;
  } else {
    actionButtonHTML = `
      <div class="relative my-4">
        <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur-md opacity-40"></div>
        <div class="relative w-36 h-36 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-500 to-emerald-400 p-[3px] shadow-[0_0_30px_rgba(59,130,246,0.35)] mx-auto flex items-center justify-center">
          <div class="w-full h-full rounded-full bg-[#0B1528] flex flex-col items-center justify-center p-2">
            <div class="w-11 h-11 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-1 border border-emerald-500/30">
              <i data-lucide="badge-check" class="w-6 h-6"></i>
            </div>
            <span class="text-xs font-bold text-white leading-tight font-kantumruy">${isEn ? 'Completed' : 'បានបញ្ចប់វត្តមាន'}</span>
            <span class="text-[9px] text-emerald-400 font-mono font-bold mt-0.5">Day Complete ✓</span>
          </div>
        </div>
      </div>
    `;
  }

  let calendarDaysHTML = '';
  for (let i = 0; i < 3; i++) {
    calendarDaysHTML += `<div class="h-8 rounded-lg bg-white/[0.02] border border-transparent"></div>`;
  }
  for (let d = 1; d <= 31; d++) {
    const isToday = d === 14;
    const isPast = d < 14;
    const isSunday = (d + 2) % 7 === 0;
    const isSaturday = (d + 2) % 7 === 6;
    const rec = records.find(r => r.day === d);

    let cellClass = 'h-8 rounded-lg flex flex-col items-center justify-center text-[10px] font-mono border transition ';
    let badge = '';

    if (isToday) {
      if (data.todayStatus === 'checked_in') {
        cellClass += 'bg-amber-500/20 border-amber-500/50 text-amber-300 font-bold shadow-[0_0_10px_rgba(245,158,11,0.25)]';
        badge = '<span class="w-1 h-1 rounded-full bg-amber-400 animate-ping"></span>';
      } else if (data.todayStatus === 'checked_out') {
        cellClass += 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold';
        badge = '<span class="text-[8px] text-emerald-400 font-bold leading-none">✓</span>';
      } else {
        cellClass += 'bg-orange-500/20 border-orange-500/60 text-orange-300 font-bold ring-1 ring-orange-500/40';
        badge = '<span class="w-1 h-1 rounded-full bg-orange-400"></span>';
      }
    } else if (rec) {
      if (rec.status === 'late') {
        cellClass += 'bg-yellow-500/15 border-yellow-500/30 text-yellow-300 font-medium';
        badge = '<span class="text-[7.5px] text-yellow-400 font-bold leading-none">!</span>';
      } else {
        cellClass += 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300 font-medium';
        badge = '<span class="text-[7.5px] text-emerald-400 font-bold leading-none">✓</span>';
      }
    } else if (isSunday || isSaturday) {
      cellClass += 'bg-white/[0.02] border-white/5 text-slate-500';
    } else if (isPast) {
      cellClass += 'bg-white/[0.03] border-white/5 text-slate-400';
    } else {
      cellClass += 'bg-transparent border-white/5 text-slate-600';
    }

    calendarDaysHTML += `
      <div class="${cellClass}" title="ថ្ងៃទី ${d}">
        <span class="leading-none">${d}</span>
        ${badge}
      </div>
    `;
  }

  container.innerHTML = `
    <!-- Card 1: Clock & Action (CheckinMe Style) -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10 text-center relative overflow-hidden shadow-2xl">
      <div class="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10">
        <div id="attendance-live-clock" class="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight drop-shadow-md">
          ${timeStr}
        </div>
        <p class="text-[11px] text-slate-300 font-medium mt-1">${dateStr}</p>
        
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10.5px] font-medium mt-2">
          <i data-lucide="map-pin" class="w-3 h-3"></i>
          <span>${data.location}</span>
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        </div>

        ${actionButtonHTML}

        <p class="text-[10.5px] text-slate-400">
          ${data.todayStatus === 'not_checked' 
            ? (isEn ? 'Standard work hours: 08:00 AM - 05:30 PM' : 'ម៉ោងចូលស្តង់ដារ៖ ០៨:០០ ព្រឹក - ០៥:៣០ ល្ងាច')
            : (data.todayStatus === 'checked_in' 
                ? (isEn ? `Checked in at ${data.checkInTime}. Remember to check out when finishing!` : `បានចូលម៉ោង ${data.checkInTime}។ កុំភ្លេចចុចចេញពេលចប់ការងារ!`)
                : (isEn ? `Full day completed: ${data.duration || '8h 25m'}` : `បានបញ្ចប់ម៉ោងការងារពេញលេញ៖ ${data.duration || '៨ ម៉ោង ២៥ នាទី'}`))
          }
        </p>
      </div>
    </div>

    <!-- Card 2: Today's Timeline Stats (2x2 Grid) -->
    <div class="grid grid-cols-2 gap-2.5">
      <div class="ios-glass-card rounded-2xl p-3 border border-white/10 flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
          <i data-lucide="log-in" class="w-4 h-4"></i>
        </div>
        <div class="min-w-0">
          <p class="text-[9.5px] text-slate-400 leading-tight">${isEn ? 'Check In' : 'ម៉ោងចូល'}</p>
          <h4 class="text-xs font-bold text-white font-mono mt-0.5 truncate">${data.checkInTime || '—'}</h4>
        </div>
      </div>

      <div class="ios-glass-card rounded-2xl p-3 border border-white/10 flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
          <i data-lucide="log-out" class="w-4 h-4"></i>
        </div>
        <div class="min-w-0">
          <p class="text-[9.5px] text-slate-400 leading-tight">${isEn ? 'Check Out' : 'ម៉ោងចេញ'}</p>
          <h4 class="text-xs font-bold text-white font-mono mt-0.5 truncate">${data.checkOutTime || '—'}</h4>
        </div>
      </div>

      <div class="ios-glass-card rounded-2xl p-3 border border-white/10 flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
          <i data-lucide="timer" class="w-4 h-4"></i>
        </div>
        <div class="min-w-0">
          <p class="text-[9.5px] text-slate-400 leading-tight">${isEn ? 'Working Time' : 'ថិរវេលា'}</p>
          <h4 class="text-xs font-bold text-white font-mono mt-0.5 truncate">${data.duration || (data.todayStatus === 'checked_in' ? 'កំពុងធ្វើការ' : '—')}</h4>
        </div>
      </div>

      <div class="ios-glass-card rounded-2xl p-3 border border-white/10 flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0">
          <i data-lucide="award" class="w-4 h-4"></i>
        </div>
        <div class="min-w-0">
          <p class="text-[9.5px] text-slate-400 leading-tight">${isEn ? 'Status' : 'ស្ថានភាព'}</p>
          <h4 class="text-xs font-bold ${data.todayLate ? 'text-yellow-400' : 'text-emerald-400'} mt-0.5 truncate">
            ${data.todayStatus === 'not_checked' ? 'មិនទាន់' : (data.todayLate ? 'យឺត (Late)' : 'ទាន់ពេល ✓')}
          </h4>
        </div>
      </div>
    </div>

    <!-- Card 3: Monthly Attendance Matrix / Grid (CheckinMe Style) -->
    <div class="ios-glass-card rounded-3xl p-4 border border-white/10 space-y-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center">
            <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
          </div>
          <div>
            <h4 class="text-xs font-bold text-white leading-tight">${isEn ? 'Monthly Matrix' : 'ប្រតិទិនវត្តមានប្រចាំខែ'}</h4>
            <p class="text-[9.5px] text-slate-400 mt-0.5">តុលា ២០២៦ (October 2026)</p>
          </div>
        </div>

        <div class="flex items-center gap-2 text-[9px] font-medium">
          <span class="flex items-center gap-1 text-emerald-400">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> វត្តមាន
          </span>
          <span class="flex items-center gap-1 text-yellow-400">
            <span class="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> យឺត
          </span>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-1.5 py-2 px-2.5 rounded-xl bg-black/40 border border-white/5 text-center">
        <div>
          <p class="text-[8.5px] text-slate-400">${isEn ? 'Present' : 'វត្តមាន'}</p>
          <p class="text-xs font-bold text-emerald-400 font-mono mt-0.5">${presentCount} ថ្ងៃ</p>
        </div>
        <div>
          <p class="text-[8.5px] text-slate-400">${isEn ? 'Late' : 'យឺត'}</p>
          <p class="text-xs font-bold text-yellow-400 font-mono mt-0.5">${lateCount} ថ្ងៃ</p>
        </div>
        <div>
          <p class="text-[8.5px] text-slate-400">${isEn ? 'Leave' : 'ច្បាប់'}</p>
          <p class="text-xs font-bold text-blue-400 font-mono mt-0.5">${leaveCount} ថ្ងៃ</p>
        </div>
        <div>
          <p class="text-[8.5px] text-slate-400">${isEn ? 'Absent' : 'អវត្តមាន'}</p>
          <p class="text-xs font-bold text-rose-400 font-mono mt-0.5">${absentCount} ថ្ងៃ</p>
        </div>
      </div>

      <div class="grid grid-cols-7 gap-1 text-center text-[10px] text-slate-400 font-medium pt-1">
        <div>ច</div>
        <div>អ</div>
        <div>ព</div>
        <div>ព្រ</div>
        <div>សុ</div>
        <div class="text-slate-500">ស</div>
        <div class="text-slate-500">អា</div>
      </div>

      <div class="grid grid-cols-7 gap-1">
        ${calendarDaysHTML}
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

// ==========================================
// Profile Dashboard Drawer (82% Width - Facebook Style)
// ==========================================
function openProfileDrawer() {
  const modal = document.getElementById('profile-drawer-modal');
  const panel = document.getElementById('profile-drawer-panel');
  if (!modal || !panel) return;

  renderProfileDrawerContent();
  modal.classList.remove('hidden');

  // Dim the active dock tab so user clearly sees Profile Drawer (Screen 2) is open
  const dock = document.getElementById('bottom-dock');
  if (dock) {
    dock.classList.add('dock-profile-active');
  }

  // Show Tab Dock initially when opening Profile Dashboard, and let scrolling auto-hide it dynamically
  setDockVisible(true);
  const scrollEl = document.getElementById('profile-drawer-content');
  if (scrollEl) {
    scrollEl.scrollTop = 0;
    if (typeof hookScrollableForDock === 'function') hookScrollableForDock(scrollEl, false);
  }

  requestAnimationFrame(() => {
    panel.classList.remove('-translate-x-full');
    panel.classList.add('translate-x-0');
  });

  // Trigger dynamic ambient greeting capsule
  setTimeout(triggerDrawerGreetingAnimation, 220);

  if (window.lucide) window.lucide.createIcons();
  if (navigator.vibrate) navigator.vibrate(15);
}

function closeProfileDrawer() {
  const modal = document.getElementById('profile-drawer-modal');
  const panel = document.getElementById('profile-drawer-panel');
  if (!modal || !panel) return;

  panel.classList.remove('translate-x-0');
  panel.classList.add('-translate-x-full');

  // Restore normal active tab brightness on bottom dock
  const dock = document.getElementById('bottom-dock');
  if (dock) {
    dock.classList.remove('dock-profile-active');
  }

  // Reset text morphing to default ID state
  const idEl = document.getElementById('drawer-prof-id');
  const greetingEl = document.getElementById('drawer-prof-greeting');
  if (idEl) {
    idEl.classList.remove('-translate-y-4', 'opacity-0');
    idEl.classList.add('translate-y-0', 'opacity-100');
  }
  if (greetingEl) {
    greetingEl.classList.remove('translate-y-0', 'opacity-100');
    greetingEl.classList.add('translate-y-4', 'opacity-0');
  }

  setTimeout(() => {
    modal.classList.add('hidden');
    // Auto-restore bottom dock
    setDockVisible(true);
  }, 260);

  if (navigator.vibrate) navigator.vibrate(12);
}

const BOSTAR_TEAM_SELLERS = [
  { km: 'ឆេង រ៉ាស៊ុង', en: 'Chheng Rasung' },
  { km: 'ស្ដី ស្ដើង', en: 'Sdey Sdoeung' },
  { km: 'ញែក សុគន្ធ', en: 'Nhek Sokun' },
  { km: 'អយ ស្រីនី', en: 'Oy Sreyny' },
  { km: 'ផាត់ ណាវី', en: 'Phat Navy' },
  { km: 'ម៉ាន់ សុគន្ធលីហ្សា', en: 'Man Sokunlyza' },
  { km: 'មុំចាន់នី', en: 'Mom Channy' },
  { km: 'ជា ស្រីណាត់', en: 'Chea Sreynat' },
  { km: 'ប៊ិច ស្រីមុំ', en: 'Bech Sreymom' },
  { km: 'និន ណែត', en: 'Nin Net' },
  { km: 'ប្រាក់ ស្រីភា', en: 'Prak Sreyphea' },
  { km: 'សារិ ច័ន្ទរា', en: 'Sari Chanrea' },
  { km: 'ជន់ ច័ន្ទវិច្ឆិកា', en: 'Chhon Chanvichhika' },
  { km: 'សឹម សិត', en: 'Sim Set' },
  { km: 'ជាន ស្រីនិច', en: 'Chean Sreynich' },
  { km: 'វន ស្រីនិច', en: 'Vorn Sreynich' },
  { km: 'វួច ផាន់នី', en: 'Vouch Phanny' },
  { km: 'ឆេង សុធី', en: 'Chheng Sothy' },
  { km: 'ស្រី ឡាត់', en: 'Srey Lat' },
  { km: 'ងី សុខណា', en: 'Ngy Sokna' },
  { km: 'ផាន សោភា', en: 'Phan Sophea' },
  { km: 'ជា វឌ្ឍនា', en: 'Chea Vathana' },
  { km: 'ប៊ុន ស្រីភាព', en: 'Bun Sreypheap' },
  { km: 'សាប់ លក្ខិណា', en: 'Sab Leakhena' },
  { km: 'សុស ស្រីពេជ្រ', en: 'Sos Sreypech' },
  { km: 'ភឿន សុផា', en: 'Phoeun Sopha' },
  { km: 'សូត្រ ម៉ាស់យ៉ា', en: 'Sotr Masya' },
  { km: 'ទូច ស្រីណែត', en: 'Touch Sreynet' },
  { km: 'ជុំ ចាន់ រិទ្ធ', en: 'Chum Chanrith' },
  { km: 'ភឿន កញ្ញា', en: 'Phoeun Kanya' },
  { km: 'អៀម សុភី', en: 'Eam Sophy' },
  { km: 'សុង ស្រីឡែន', en: 'Song Sreylen' },
  { km: 'ជុន ថាវី', en: 'Chun Thavy' },
  { km: 'ងេន សុខា', en: 'Ngen Sokha' },
  { km: 'សុមុន្នី ស្រីណុច', en: 'Somony Sreynoch' },
  { km: 'ម៉ន សីហាក់', en: 'Morn Seyhak' }
];

function getSellerLatinName(kmName) {
  if (!kmName) return '';
  const trimmed = kmName.trim();
  const found = BOSTAR_TEAM_SELLERS.find(s => s.km === trimmed || s.en.toLowerCase() === trimmed.toLowerCase());
  return found ? found.en : trimmed;
}

function renderProfileDrawerContent() {
  const p = getProfileData();
  const customers = getAllUniqueCustomers();
  const notes = getProfileNotes();
  const qrList = getQrPhotosList();
  const uploadedQrCount = qrList.filter(q => q.image).length;
  const d = DataService.data;
  const membersCount = BOSTAR_TEAM_SELLERS.length;

  // Attendance state
  const att = getAttendanceData();
  const isEn = appState.language === 'en';

  let attBadgeBg = 'bg-slate-500/20 text-slate-300 border border-slate-500/30';
  let attBadgeText = isEn ? 'Not Yet' : 'មិនទាន់';
  let attSubtitle = isEn ? 'Daily Check-in' : 'CheckinMe Style';
  if (att.todayStatus === 'checked_in') {
    attBadgeBg = 'bg-amber-500/20 text-amber-400 border border-amber-500/30';
    attBadgeText = isEn ? 'Working' : 'កំពុងធ្វើការ';
    attSubtitle = (isEn ? 'In: ' : 'ចូល: ') + (att.checkInTime || '08:00 AM');
  } else if (att.todayStatus === 'checked_out') {
    attBadgeBg = 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
    attBadgeText = isEn ? 'Done ✓' : 'បញ្ចប់ ✓';
    attSubtitle = att.duration || (isEn ? 'Completed' : 'បានបញ្ចប់វត្តមាន');
  }

  // Update Drawer Header (Original high left position)
  const drawerAvatar = document.getElementById('drawer-prof-avatar');
  const drawerName = document.getElementById('drawer-prof-name');
  const drawerId = document.getElementById('drawer-prof-id');
  if (drawerAvatar) drawerAvatar.src = p.avatar || 'profile.png';
  if (drawerName) drawerName.textContent = p.name || 'ស្តី ស្តើង';
  if (drawerId) drawerId.textContent = p.memberId || 'SD-8899';

  const infoItems = [
    { key: 'showWork', icon: 'briefcase', color: 'text-orange-400', label: 'ធ្វើការនៅ', val: p.work },
    { key: 'showStudy', icon: 'graduation-cap', color: 'text-blue-400', label: 'សិក្សានៅ', val: p.study },
    { key: 'showLive', icon: 'home', color: 'text-emerald-400', label: 'រស់នៅ', val: p.live },
    { key: 'showFrom', icon: 'map-pin', color: 'text-rose-400', label: 'មកពី', val: p.from },
    { key: 'showStatus', icon: 'heart', color: 'text-pink-400', label: 'ស្ថានភាព', val: p.status },
    { key: 'showBirth', icon: 'cake', color: 'text-purple-400', label: 'ថ្ងៃកំណើត', val: p.birthday },
    { key: 'showPhone', icon: 'phone', color: 'text-amber-400', label: 'ទូរសព្ទ', val: p.phone }
  ].filter(item => p.privacy[item.key] !== false && item.val && item.val.trim() !== '');

  const container = document.getElementById('profile-drawer-content');
  if (!container) return;

  container.innerHTML = `
    <!-- ZONE 1: 6 GRID SHORTCUTS (មុខងារក្នុង Dashboard) -->
    <div>
      <div class="flex items-center justify-between px-1 mb-2">
        <span class="text-xs font-bold text-slate-300">${isEn ? 'Dashboard Shortcuts' : 'មុខងារចម្បង'}</span>
        <span class="text-[10px] text-slate-400 font-mono">${isEn ? '6 Shortcuts' : '៦ ផ្លូវកាត់'}</span>
      </div>

      <div class="grid grid-cols-2 gap-2.5">
        
        <!-- 1. បញ្ជីអតិថិជន (Customer Directory) -->
        <div onclick="closeProfileDrawer(); openAllCustomersModal();" 
             class="ios-glass-card rounded-2xl p-3 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-orange-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <div class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center">
              <i data-lucide="users" class="w-4 h-4"></i>
            </div>
            <span class="px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-mono font-bold text-[10px]">
              ${customers.length} ${isEn ? 'Cust' : 'នាក់'}
            </span>
          </div>
          <div>
            <h3 class="font-bold text-xs text-white leading-tight">${isEn ? 'Customer Directory' : 'បញ្ជីអតិថិជន'}</h3>
            <p class="text-[9.5px] text-slate-400 mt-0.5 card-subtitle">${isEn ? 'Full Directory View' : 'បង្ហាញពេញអេក្រង់'}</p>
          </div>
        </div>

        <!-- 2. កត់ត្រាវត្តមាន (Attendance Tracker - CheckinMe Style) ⭐ -->
        <div onclick="closeProfileDrawer(); openAttendanceModal();" 
             class="ios-glass-card rounded-2xl p-3 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-emerald-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <i data-lucide="fingerprint" class="w-4 h-4"></i>
            </div>
            <span class="px-1.5 py-0.5 rounded-full ${attBadgeBg} font-mono font-bold text-[10px]">
              ${attBadgeText}
            </span>
          </div>
          <div>
            <h3 class="font-bold text-xs text-white leading-tight flex items-center gap-1">
              <span>${isEn ? 'Attendance' : 'កត់ត្រាវត្តមាន'}</span>
            </h3>
            <p class="text-[9.5px] text-slate-400 mt-0.5 card-subtitle">${attSubtitle}</p>
          </div>
        </div>

        <!-- 3. សៀវភៅ & កំណត់ត្រា (Books & Notes - Merged!) ⭐ -->
        <div onclick="closeProfileDrawer(); openProfileSubModal('book_notes');" 
             class="ios-glass-card rounded-2xl p-3 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-teal-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <div class="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 border border-teal-500/30 flex items-center justify-center">
              <i data-lucide="book-marked" class="w-4 h-4"></i>
            </div>
            <span class="px-1.5 py-0.5 rounded-full bg-teal-500/20 text-teal-400 font-mono font-bold text-[10px]">
              ${notes.length} ${isEn ? 'Notes' : 'ច្បាប់'}
            </span>
          </div>
          <div>
            <h3 class="font-bold text-xs text-white leading-tight">${isEn ? 'Books & Notes' : 'សៀវភៅ & កំណត់ត្រា'}</h3>
            <p class="text-[9.5px] text-slate-400 mt-0.5 card-subtitle">${isEn ? 'Wisdom & Daily Plans' : 'គតិបណ្ឌិត & ផែនការ'}</p>
          </div>
        </div>

        <!-- 4. របាយការណ៍ប្រចាំថ្ងៃ (Daily Sales Report) -->
        <div onclick="closeProfileDrawer(); openDailyReportModal();" 
             class="ios-glass-card rounded-2xl p-3 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-emerald-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <i data-lucide="clipboard-check" class="w-4 h-4"></i>
            </div>
            <span class="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[9px]">
              9:00 PM
            </span>
          </div>
          <div>
            <h3 class="font-bold text-xs text-white leading-tight">${isEn ? 'Daily Report' : 'របាយការណ៍ប្រចាំថ្ងៃ'}</h3>
            <p class="text-[9.5px] text-slate-400 mt-0.5 card-subtitle">${isEn ? '9:00 PM Sales Report' : 'របាយការណ៍លក់ ៩:០០ យប់'}</p>
          </div>
        </div>

        <!-- 5. សមាជិកក្រុម (Team Members) -->
        <div onclick="closeProfileDrawer(); openTeamMembersModal();" 
             class="ios-glass-card rounded-2xl p-3 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-blue-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <div class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
              <i data-lucide="contact-round" class="w-4 h-4"></i>
            </div>
            <span class="px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-mono font-bold text-[10px]">
              ${membersCount} ${isEn ? 'Members' : 'នាក់'}
            </span>
          </div>
          <div>
            <h3 class="font-bold text-xs text-white leading-tight">${isEn ? 'Team Members' : 'សមាជិកក្រុម'}</h3>
            <p class="text-[9.5px] text-slate-400 mt-0.5 card-subtitle">${isEn ? 'Team roster & roles' : 'បញ្ជីសមាជិកក្រុម'}</p>
          </div>
        </div>

        <!-- 6. តារាងចំណាយ (Expenses Master Table) -->
        <div onclick="closeProfileDrawer(); openExpensesModal('all');" 
             class="ios-glass-card rounded-2xl p-3 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-rose-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <div class="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/30 flex items-center justify-center">
              <i data-lucide="receipt" class="w-4 h-4"></i>
            </div>
            <span class="px-1.5 py-0.5 rounded-full bg-rose-500/20 text-rose-400 font-mono font-bold text-[10px]">
              ${(d.expenses || []).length} ${isEn ? 'Items' : 'មុខ'}
            </span>
          </div>
          <div>
            <h3 class="font-bold text-xs text-white leading-tight">${isEn ? 'Expenses Table' : 'តារាងចំណាយ'}</h3>
            <p class="text-[9.5px] text-slate-400 mt-0.5 card-subtitle">${isEn ? 'Filter by day, month, year' : 'ត្រងតាមថ្ងៃ ខែ ឆ្នាំ & Search'}</p>
          </div>
        </div>

      </div>
    </div>

    <!-- ZONE 2: ព័ត៌មានផ្ទាល់ខ្លួន (Personal Profile) - Default Bar, tap to expand full -->
    <div class="ios-glass-card rounded-2xl border border-white/10 overflow-hidden">
      <!-- Clickable Header Bar (Default Collapsed) -->
      <div onclick="toggleDrawerMemberInfo()" 
           class="p-3 flex items-center justify-between cursor-pointer select-none hover:bg-white/[0.03] active:scale-[0.99] transition">
        <div class="flex items-center gap-2">
          <div class="w-6 h-6 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
            <i data-lucide="id-card" class="w-3.5 h-3.5"></i>
          </div>
          <span class="text-xs font-bold text-white">${isEn ? 'Personal Profile' : 'ព័ត៌មានផ្ទាល់ខ្លួន'}</span>
        </div>
        <div class="flex items-center gap-2">
          <button id="drawer-member-edit-btn" 
                  onclick="event.stopPropagation(); closeProfileDrawer(); openEditProfileModal();" 
                  class="hidden text-[11px] font-bold text-orange-400 hover:underline flex items-center gap-1 px-2 py-0.5 rounded-lg bg-orange-500/10 border border-orange-500/20 active:scale-95 transition">
            <i data-lucide="pencil" class="w-3 h-3"></i>
            <span>${isEn ? 'Edit' : 'កែប្រែ'}</span>
          </button>
          <i id="drawer-member-info-chevron" data-lucide="chevron-down" class="w-4 h-4 text-slate-400 transition-transform duration-300"></i>
        </div>
      </div>

      <!-- Expandable Info Body (Hidden by default) -->
      <div id="drawer-member-info-body" class="hidden px-3 pb-3 pt-1 space-y-1.5 border-t border-white/5 transition-all">
        ${infoItems.map(item => `
          <div class="flex items-center gap-2 text-xs py-1 px-2 rounded-xl bg-black/20 border border-white/5">
            <i data-lucide="${item.icon}" class="w-3.5 h-3.5 ${item.color} shrink-0"></i>
            <span class="text-slate-400 text-[10.5px] shrink-0">${item.label}:</span>
            <span class="text-white font-semibold truncate text-[11px]">${item.val}</span>
          </div>
        `).join('') || `<p class="text-xs text-slate-400 text-center py-1">${isEn ? 'No personal info shown' : 'មិនទាន់បង្ហាញព័ត៌មានផ្ទាល់ខ្លួន'}</p>`}
      </div>
    </div>

    <!-- ZONE 3: MENU ROWS (Settings, Privacy, Feedback, Support, Logout) -->
    <div class="settings-list-card bg-[#0F1B2E] rounded-2xl border border-white/10 overflow-hidden divide-y divide-white/5 shadow-xl">
      
      <!-- 1. ការកំណត់ (Settings) -->
      <div onclick="closeProfileDrawer(); switchView('settings');" 
           class="settings-row p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition select-none">
        <div class="settings-row-left flex items-center gap-2.5 min-w-0">
          <div class="settings-icon-box w-7 h-7 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
            <i data-lucide="settings" class="w-3.5 h-3.5 text-orange-400"></i>
          </div>
          <div class="min-w-0">
            <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${isEn ? 'Settings' : 'ការកំណត់'}</h4>
            <p class="text-[9.5px] text-slate-400 mt-0.5 truncate settings-subtitle">${isEn ? 'Colors, fonts, text sizes, wallpapers' : 'ពណ៌, ពុម្ពអក្សរ, ទំហំអក្សរ, ផ្ទាំងរូបភាព'}</p>
          </div>
        </div>
        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
      </div>

      <!-- 1.5. ភ្ជាប់ Google Sheet ផ្ទាល់ខ្លួន (Custom Sheet Sync) -->
      <div onclick="closeProfileDrawer(); openProfileSubModal('custom_sheet');" 
           class="settings-row p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition select-none">
        <div class="settings-row-left flex items-center gap-2.5 min-w-0">
          <div class="settings-icon-box w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0">
            <i data-lucide="file-spreadsheet" class="w-3.5 h-3.5 text-indigo-400"></i>
          </div>
          <div class="min-w-0">
            <div class="flex items-center gap-1.5">
              <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${isEn ? 'Custom Google Sheet' : 'Google Sheet ផ្ទាល់ខ្លួន'}</h4>
              ${(typeof DataService !== 'undefined' && DataService.isUsingCustomSheet && DataService.isUsingCustomSheet()) ? '<span class="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">ភ្ជាប់រួច</span>' : ''}
            </div>
            <p class="text-[9.5px] text-slate-400 mt-0.5 truncate settings-subtitle">${isEn ? 'Sync team member private sheet' : 'ភ្ជាប់ទិន្នន័យពី Sheet របស់កូនក្រុម'}</p>
          </div>
        </div>
        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
      </div>

      <!-- 2. ឯកជនភាព (Privacy) -->
      <div onclick="closeProfileDrawer(); openProfileSubModal('privacy');" 
           class="settings-row p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition select-none">
        <div class="settings-row-left flex items-center gap-2.5 min-w-0">
          <div class="settings-icon-box w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
            <i data-lucide="shield-check" class="w-3.5 h-3.5 text-emerald-400"></i>
          </div>
          <div class="min-w-0">
            <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${isEn ? 'Privacy' : 'ឯកជនភាព'}</h4>
            <p class="text-[9.5px] text-slate-400 mt-0.5 truncate settings-subtitle">${isEn ? 'Toggle personal info visibility' : 'បិទ/បើកការបង្ហាញព័ត៌មានផ្ទាល់ខ្លួន'}</p>
          </div>
        </div>
        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
      </div>

      <!-- 3. មតិកែលម្អ & ជំនួយបច្ចេកទេស (Feedback & Support) -->
      <div onclick="closeProfileDrawer(); openProfileSubModal('feedback_support');" 
           class="settings-row p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition select-none">
        <div class="settings-row-left flex items-center gap-2.5 min-w-0">
          <div class="settings-icon-box w-7 h-7 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0">
            <i data-lucide="message-square-heart" class="w-3.5 h-3.5 text-sky-400"></i>
          </div>
          <div class="min-w-0">
            <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${isEn ? 'Feedback & Support' : 'មតិកែលម្អ & ជំនួយបច្ចេកទេស'}</h4>
            <p class="text-[9.5px] text-slate-400 mt-0.5 truncate settings-subtitle">${isEn ? 'Send feedback or contact Telegram' : 'ផ្ញើមតិកែលម្អ និងទំនាក់ទំនង Telegram ផ្ទាល់'}</p>
          </div>
        </div>
        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
      </div>

      <!-- 4. អំពីគម្រោង & កាតកិត្តិយស (Honors & Dedication) -->
      <div onclick="closeProfileDrawer(); openHonorsModal();" 
           class="settings-row p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition select-none">
        <div class="settings-row-left flex items-center gap-2.5 min-w-0">
          <div class="settings-icon-box w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
            <i data-lucide="award" class="w-3.5 h-3.5 text-amber-400"></i>
          </div>
          <div class="min-w-0">
            <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${isEn ? 'Honors & Dedication' : '🌟 កាតកិត្តិយស & ការដឹងគុណ'}</h4>
            <p class="text-[9.5px] text-slate-400 mt-0.5 truncate settings-subtitle">${isEn ? 'BostarGroup Visionaries & Leadership' : 'ស្ថាបនិក • គណៈគ្រប់គ្រង • អ្នករៀបចំប្រព័ន្ធ'}</p>
          </div>
        </div>
        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
      </div>

      <!-- 5. ចាកចេញ (Log Out) -->
      <div onclick="closeProfileDrawer(); openProfileSubModal('logout');" 
           class="settings-row p-3 flex items-center justify-between cursor-pointer hover:bg-rose-500/10 active:scale-[0.99] transition select-none">
        <div class="settings-row-left flex items-center gap-2.5 min-w-0">
          <div class="settings-icon-box w-7 h-7 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center shrink-0">
            <i data-lucide="log-out" class="w-3.5 h-3.5 text-rose-400"></i>
          </div>
          <div class="min-w-0">
            <h4 class="settings-row-title text-xs font-bold text-rose-400 truncate leading-tight">${isEn ? 'Log Out' : 'ចាកចេញ'}</h4>
            <p class="text-[9.5px] text-slate-400 mt-0.5 truncate settings-subtitle">${isEn ? 'Switch Google account' : 'ចាកចេញដើម្បីប្រើប្រាស់គណនីផ្សេង'}</p>
          </div>
        </div>
        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-rose-400/60 shrink-0"></i>
      </div>

    </div>
  `;
}

function getProfileViewHTML() {
  const p = getProfileData();
  const customers = getAllUniqueCustomers();
  const notes = getProfileNotes();
  const qrList = getQrPhotosList();
  const uploadedQrCount = qrList.filter(q => q.image).length;
  const d = DataService.data;
  const membersCount = BOSTAR_TEAM_SELLERS.length;

  const infoItems = [
    { key: 'showWork', icon: 'briefcase', color: 'text-orange-400', label: 'ធ្វើការនៅ', val: p.work },
    { key: 'showStudy', icon: 'graduation-cap', color: 'text-blue-400', label: 'សិក្សានៅ', val: p.study },
    { key: 'showLive', icon: 'home', color: 'text-emerald-400', label: 'រស់នៅ', val: p.live },
    { key: 'showFrom', icon: 'map-pin', color: 'text-rose-400', label: 'មកពី', val: p.from },
    { key: 'showStatus', icon: 'heart', color: 'text-pink-400', label: 'ស្ថានភាព', val: p.status },
    { key: 'showBirth', icon: 'cake', color: 'text-purple-400', label: 'ថ្ងៃកំណើត', val: p.birthday },
    { key: 'showPhone', icon: 'phone', color: 'text-amber-400', label: 'ទូរសព្ទ', val: p.phone }
  ].filter(item => p.privacy[item.key] !== false && item.val && item.val.trim() !== '');

  return `
    <div class="space-y-3.5 pb-10 relative">

      <!-- ======================================================== -->
      <!-- ZONE 1: CENTERED PROFILE HERO (ឈ្មោះ និង ID នៅពីក្រោម)   -->
      <!-- ======================================================== -->
      <div class="ios-glass-card rounded-3xl p-5 border border-white/10 relative overflow-hidden text-center">
        <div class="absolute -top-14 left-1/2 -translate-x-1/2 w-48 h-36 bg-orange-500/15 rounded-full blur-2xl pointer-events-none"></div>

        <!-- Centered Avatar with Camera Quick Upload -->
        <div class="relative inline-block mx-auto mb-2.5">
          <img src="${p.avatar || 'profile.png'}" alt="${p.name}" 
               onclick="openEditProfileModal()"
               class="w-20 h-20 rounded-full object-cover border-[2.5px] border-orange-500 shadow-xl cursor-pointer mx-auto">
          <span class="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#070D18]" title="Online"></span>
          <button onclick="openEditProfileModal()" 
                  title="ប្តូររូប Profile"
                  class="absolute -bottom-0.5 -left-1 w-7 h-7 rounded-full bg-[#16243D] hover:bg-orange-500 text-slate-200 hover:text-white border border-white/15 flex items-center justify-center shadow-lg active:scale-90 transition">
            <i data-lucide="camera" class="w-3.5 h-3.5"></i>
          </button>
        </div>

        <!-- Centered Name + Verified Blue Tick -->
        <div class="flex items-center justify-center gap-1.5">
          <h2 class="text-lg font-black text-white leading-tight">${p.name}</h2>
          <img src="blue-tick.png" alt="Verified" class="w-4 h-4 object-contain shrink-0">
        </div>

        <!-- Centered Member ID & Subtitle Below Name -->
        <p class="text-xs font-mono font-bold text-orange-400 mt-0.5">${p.memberId}</p>
        ${p.subtitle ? `<p class="text-[11px] text-slate-400 mt-0.5">${p.subtitle}</p>` : ''}



        <!-- Member Info (Live, Study, Work, From, Status, Phone - Collapsible Bar) -->
        <div class="mt-4 pt-3.5 border-t border-white/10 text-left">
          <div onclick="toggleProfileViewMemberInfo()" 
               class="flex items-center justify-between mb-2 cursor-pointer select-none hover:bg-white/[0.03] p-1.5 -mx-1.5 rounded-xl transition">
            <span class="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <i data-lucide="id-card" class="w-3.5 h-3.5 text-orange-400"></i>
              <span>${appState.language === 'en' ? 'Member Info' : 'ព័ត៌មានសមាជិក (Info)'}</span>
            </span>
            <div class="flex items-center gap-2">
              <button onclick="event.stopPropagation(); openEditProfileModal()" 
                      class="text-[11px] font-bold text-orange-400 hover:underline flex items-center gap-1 px-2 py-0.5 rounded-lg bg-orange-500/10 border border-orange-500/20 active:scale-95 transition">
                <i data-lucide="pencil" class="w-3 h-3"></i>
                <span>${appState.language === 'en' ? 'Edit' : 'កែប្រែ'}</span>
              </button>
              <i id="prof-view-member-info-chevron" data-lucide="chevron-down" class="w-3.5 h-3.5 text-slate-400 transition-transform duration-300"></i>
            </div>
          </div>

          <div id="prof-view-member-info-body" class="hidden space-y-1.5 pt-1 transition-all">
            ${infoItems.map(item => `
              <div class="flex items-center gap-2.5 text-xs py-1 px-2 rounded-xl bg-black/20 border border-white/5">
                <i data-lucide="${item.icon}" class="w-3.5 h-3.5 ${item.color} shrink-0"></i>
                <span class="text-slate-400 text-[11px] shrink-0">${item.label}:</span>
                <span class="text-white font-semibold truncate">${item.val}</span>
              </div>
            `).join('') || `<p class="text-xs text-slate-400 text-center py-2">មិនទាន់បង្ហាញព័ត៌មានផ្ទាល់ខ្លួន</p>`}
          </div>
        </div>
      </div>

      <!-- ======================================================== -->
      <!-- ZONE 2: FACEBOOK-STYLE 2x3 SHORTCUTS GRID                -->
      <!-- ======================================================== -->
      <div>
        <div class="flex items-center justify-between px-1 mb-2">
          <span class="text-xs font-bold text-slate-300">មុខងារក្នុង Dashboard</span>
          <span class="text-[10px] text-slate-400 font-mono">All Shortcuts</span>
        </div>

        <div class="grid grid-cols-2 gap-2.5">
          
          <!-- 1. បញ្ជីអតិថិជនទាំងអស់ (ពេញអេក្រង់) -->
          <div onclick="openAllCustomersModal()" 
               class="ios-glass-card rounded-2xl p-3.5 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-orange-500/40">
            <div class="flex items-center justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center">
                <i data-lucide="users" class="w-4.5 h-4.5"></i>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-mono font-bold text-[10px]">
                ${customers.length} នាក់
              </span>
            </div>
            <div>
              <h3 class="font-bold text-xs text-white leading-tight">បញ្ជីអតិថិជនទាំងអស់</h3>
              <p class="text-[10px] text-slate-400 mt-0.5 card-subtitle">បង្ហាញពេញអេក្រង់ 100%</p>
            </div>
          </div>

          <!-- 2. ផែនការ (Note) -->
          <div onclick="openProfileSubModal('note')" 
               class="ios-glass-card rounded-2xl p-3.5 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-amber-500/40">
            <div class="flex items-center justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                <i data-lucide="notebook-pen" class="w-4.5 h-4.5"></i>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold text-[10px]">
                ${notes.length} Note
              </span>
            </div>
            <div>
              <h3 class="font-bold text-xs text-white leading-tight">ផែនការ (Note)</h3>
              <p class="text-[10px] text-slate-400 mt-0.5 card-subtitle">កត់ត្រាផែនការ & គោលដៅ</p>
            </div>
          </div>

          <!-- 3. សៀវភៅ (ជីវិតជាការរៀនសូត្រ) -->
          <div onclick="openProfileSubModal('book')" 
               class="ios-glass-card rounded-2xl p-3.5 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-emerald-500/40">
            <div class="flex items-center justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <i data-lucide="book-open" class="w-4.5 h-4.5"></i>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px]">
                អាន
              </span>
            </div>
            <div>
              <h3 class="font-bold text-xs text-white leading-tight">សៀវភៅ</h3>
              <p class="text-[10px] text-slate-400 mt-0.5 card-subtitle">ជីវិតជាការរៀនសូត្រ</p>
            </div>
          </div>

          <!-- 4. សមាជិក (Member) -->
          <div onclick="openTeamMembersModal()" 
               class="ios-glass-card rounded-2xl p-3.5 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-blue-500/40">
            <div class="flex items-center justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                <i data-lucide="contact-round" class="w-4.5 h-4.5"></i>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-mono font-bold text-[10px]">
                ${membersCount} នាក់
              </span>
            </div>
            <div>
              <h3 class="font-bold text-xs text-white leading-tight">${appState.language === 'en' ? 'Member' : 'សមាជិក'}</h3>
              <p class="text-[10px] text-slate-400 mt-0.5 card-subtitle">${appState.language === 'en' ? 'Team Members' : 'បញ្ជីសមាជិកក្រុម'}</p>
            </div>
          </div>

          <!-- 5. របាយការណ៍ប្រចាំថ្ងៃ (Daily Sales Report) -->
          <div onclick="openDailyReportModal()" 
               class="ios-glass-card rounded-2xl p-3.5 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-emerald-500/40">
            <div class="flex items-center justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                <i data-lucide="clipboard-check" class="w-4.5 h-4.5"></i>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-bold text-[10px]">
                9:00 PM
              </span>
            </div>
            <div>
              <h3 class="font-bold text-xs text-white leading-tight">របាយការណ៍ប្រចាំថ្ងៃ</h3>
              <p class="text-[10px] text-slate-400 mt-0.5 card-subtitle">របាយការណ៍លក់ ៩:០០ យប់</p>
            </div>
          </div>

          <!-- 6. QR Code (Member Only) -->
          <div onclick="openQrPhotosModal()" 
               class="ios-glass-card rounded-2xl p-3.5 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-purple-500/40">
            <div class="flex items-center justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
                <i data-lucide="qr-code" class="w-4.5 h-4.5"></i>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 font-mono font-bold text-[10px]">
                ${uploadedQrCount}/4 រូប
              </span>
            </div>
            <div>
              <h3 class="font-bold text-xs text-white leading-tight">QR Code (Member Only)</h3>
              <p class="text-[10px] text-slate-400 mt-0.5 card-subtitle">រូបភាព QR សម្រាប់ស្កេន</p>
            </div>
          </div>

        </div>
      </div>

      <!-- ======================================================== -->
      <!-- ZONE 3: BOTTOM MENU ROWS (Settings, Privacy, Feedback, Support) -->
      <!-- ======================================================== -->
      <div class="settings-list-card bg-[#0F1B2E] rounded-3xl border border-white/10 overflow-hidden divide-y divide-white/5 shadow-xl">
        
        <!-- 0. ការកំណត់ (Settings - ពណ៌, ពុម្ពអក្សរ, ទំហំអក្សរ, សុវត្ថិភាព) -->
        <div onclick="switchView('settings')" 
             class="settings-row p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition select-none">
          <div class="settings-row-left flex items-center gap-3 min-w-0">
            <div class="settings-icon-box w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0">
              <i data-lucide="settings" class="w-4 h-4 text-orange-400"></i>
            </div>
            <div class="min-w-0">
              <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">ការកំណត់ (Settings)</h4>
              <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">ពុម្ពអក្សរ, ទំហំអក្សរ, ពណ៌ចម្បង, ផ្ទាំងរូបភាព និងសុវត្ថិភាព</p>
            </div>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 shrink-0"></i>
        </div>

        <!-- 1. ឯកជនភាព (Privacy - សិទ្ធិរក្សាព័ត៌មានផ្ទាល់ខ្លួន ដាច់ពី Setting របស់ Dock) -->
        <div onclick="openProfileSubModal('privacy')" 
             class="settings-row p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition select-none">
          <div class="settings-row-left flex items-center gap-3 min-w-0">
            <div class="settings-icon-box w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <i data-lucide="shield-check" class="w-4 h-4 text-emerald-400"></i>
            </div>
            <div class="min-w-0">
              <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">ឯកជនភាព (Privacy)</h4>
              <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">សិទ្ធិរក្សា និងបិទ/បើកការបង្ហាញព័ត៌មានផ្ទាល់ខ្លួន</p>
            </div>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 shrink-0"></i>
        </div>

        <!-- 2. មតិកែលម្អ & ជំនួយបច្ចេកទេស (Feedback & Support) -->
        <div onclick="openProfileSubModal('feedback_support')" 
             class="settings-row p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition select-none">
          <div class="settings-row-left flex items-center gap-3 min-w-0">
            <div class="settings-icon-box w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0">
              <i data-lucide="message-square-heart" class="w-4 h-4 text-sky-400"></i>
            </div>
            <div class="min-w-0">
              <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">មតិកែលម្អ & ជំនួយបច្ចេកទេស</h4>
              <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">ផ្ញើមតិកែលម្អប្រព័ន្ធ ឬទាក់ទង Telegram ផ្ទាល់</p>
            </div>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 shrink-0"></i>
        </div>

      </div>

      <!-- ======================================================== -->
      <!-- ZONE 4: LOG OUT BUTTON (Log out ដើម្បីប្រើ Mail ផ្សេង Beta) -->
      <!-- ======================================================== -->
      <button onclick="openProfileSubModal('logout')" 
              class="w-full p-3.5 rounded-2xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/25 flex items-center justify-between transition active:scale-[0.99]">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-xl bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400">
            <i data-lucide="log-out" class="w-4 h-4"></i>
          </div>
          <div class="text-left">
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-bold text-rose-400">ចាកចេញ (Log out)</span>
              <span class="px-1.5 py-0.2 rounded-md bg-rose-500/20 border border-rose-500/30 text-[9px] font-mono font-bold text-rose-300 uppercase">Beta</span>
            </div>
            <p class="text-[10px] text-slate-400 mt-0.5 card-subtitle">ប្តូរគណនី ដើម្បីប្រើអ៊ីមែលផ្សេង</p>
          </div>
        </div>
        <i data-lucide="chevron-right" class="w-4 h-4 text-rose-400"></i>
      </button>

    </div>
  `;
}

// =========================================================
// 1. EDIT PROFILE & MEMBER INFO HANDLERS
// =========================================================
let tempAvatarDataUrl = null;

function openEditProfileModal() {
  const isMaster = (window.DataService && typeof window.DataService.isMasterSheet === 'function' && window.DataService.isMasterSheet());
  const p = getProfileData();
  tempAvatarDataUrl = p.avatar || (isMaster ? 'profile.png' : 'bostar-logo.png');

  const preview = document.getElementById('edit-prof-avatar-preview');
  if (preview) preview.src = tempAvatarDataUrl;

  const setVal = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.value = val || '';
  };
  setVal('edit-prof-name', p.name);
  setVal('edit-prof-id', p.memberId);
  setVal('edit-prof-sub', p.subtitle);
  setVal('edit-prof-work', p.work);
  setVal('edit-prof-study', p.study);
  setVal('edit-prof-live', p.live);
  setVal('edit-prof-from', p.from);
  setVal('edit-prof-status', p.status);
  setVal('edit-prof-birthday', p.birthday);
  setVal('edit-prof-phone', p.phone);

  document.getElementById('edit-profile-modal')?.classList?.remove('hidden');
  setDockVisible(false);
  if (window.lucide) window.lucide.createIcons();
}

function closeEditProfileModal() {
  document.getElementById('edit-profile-modal')?.classList?.add('hidden');
  openProfileDrawer();
}

function compressImageFile(file, maxSizePx = 500, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let w = img.width;
        let h = img.height;
        if (w > h && w > maxSizePx) {
          h = Math.round((h * maxSizePx) / w);
          w = maxSizePx;
        } else if (h >= w && h > maxSizePx) {
          h = Math.round((w * maxSizePx) / h);
          h = maxSizePx;
        }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.onerror = reject;
      img.src = ev.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function handleProfileAvatarUpload(event) {
  const file = event.target?.files?.[0];
  if (!file) return;
  try {
    const dataUrl = await compressImageFile(file, 360, 0.85);
    tempAvatarDataUrl = dataUrl;
    const preview = document.getElementById('edit-prof-avatar-preview');
    if (preview) preview.src = dataUrl;
  } catch (e) {
    alert('មិនអាចអានរូបភាពបានទេ');
  }
}

function resetProfileAvatar() {
  const isMaster = (window.DataService && typeof window.DataService.isMasterSheet === 'function' && window.DataService.isMasterSheet());
  const defaultAvatar = isMaster ? 'profile.png' : 'bostar-logo.png';
  tempAvatarDataUrl = defaultAvatar;
  const preview = document.getElementById('edit-prof-avatar-preview');
  if (preview) preview.src = defaultAvatar;
}

function saveProfileData() {
  const current = getProfileData();
  const getVal = (id) => (document.getElementById(id)?.value || '').trim();

  const isMaster = (window.DataService && typeof window.DataService.isMasterSheet === 'function' && window.DataService.isMasterSheet());
  const updated = {
    ...current,
    avatar: tempAvatarDataUrl || current.avatar || (isMaster ? 'profile.png' : 'bostar-logo.png'),
    name: getVal('edit-prof-name') || (isMaster ? 'ស្តី ស្តើង' : 'សមាជិក Bostar'),
    memberId: getVal('edit-prof-id') || (isMaster ? 'ID: SD-0001' : 'ID: BG-001'),
    subtitle: getVal('edit-prof-sub') || (isMaster ? 'SDEY SDOEUNG' : 'BostarGroup Member'),
    work: getVal('edit-prof-work') || (isMaster ? current.work : 'សមាជិកក្រុម BostarGroup'),
    study: getVal('edit-prof-study') || (isMaster ? current.study : 'BostarGroup'),
    live: getVal('edit-prof-live'),
    from: getVal('edit-prof-from'),
    status: getVal('edit-prof-status'),
    birthday: getVal('edit-prof-birthday') || '',
    phone: getVal('edit-prof-phone') || ''
  };

  try {
    localStorage.setItem('sd_profile_data', JSON.stringify(updated));
    syncHeaderProfileUI();
    closeEditProfileModal();
    renderCurrentView();
    showToastNotification('រក្សាទុកព័ត៌មានជោគជ័យ!');
  } catch (e) {
    alert('មិនអាចរក្សាទុកបានទេ (ទំហំរូបធំពេក)');
  }
}

// =========================================================
// 2. QR CODE (PHOTOS) MODAL HANDLERS
// =========================================================
let activeQrSlotIdx = 0;

function openQrPhotosModal() {
  renderQrPhotosModalBody();
  document.getElementById('qr-photos-modal')?.classList?.remove('hidden');
  setDockVisible(false);
  if (window.lucide) window.lucide.createIcons();
}

function closeQrPhotosModal() {
  document.getElementById('qr-photos-modal')?.classList?.add('hidden');
  openProfileDrawer();
}

function selectQrPhotoSlot(idx) {
  activeQrSlotIdx = idx;
  renderQrPhotosModalBody();
}

function renderQrPhotosModalBody() {
  const body = document.getElementById('qr-photos-modal-body');
  if (!body) return;

  const list = getQrPhotosList();
  if (activeQrSlotIdx >= list.length) activeQrSlotIdx = 0;
  const current = list[activeQrSlotIdx];

  body.innerHTML = `
    <!-- 4 QR Slot Tabs -->
    <div class="grid grid-cols-4 gap-1.5 bg-black/35 p-1 rounded-xl border border-white/5">
      ${list.map((q, i) => `
        <button onclick="selectQrPhotoSlot(${i})" 
                class="py-1.5 px-1 rounded-lg text-[10px] font-bold truncate transition ${i === activeQrSlotIdx ? 'accent-solid-btn' : 'text-slate-400 hover:text-white'}">
          ${q.label}
        </button>
      `).join('')}
    </div>

    <!-- Label Customizer -->
    <div class="flex items-center gap-2">
      <input type="text" id="qr-slot-label-input" value="${current.label}" 
             placeholder="ឈ្មោះ QR (ឧ. ABA USD)"
             class="flex-1 text-xs bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-emerald-500">
      <button onclick="saveQrPhotoLabel()" 
              class="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white border border-white/10 active:scale-95 transition">
        ប្តូរឈ្មោះ
      </button>
    </div>

    <!-- QR Image Display Frame -->
    <div class="rounded-2xl bg-black/40 border border-white/10 p-3 flex flex-col items-center justify-center min-h-[260px]">
      ${current.image ? `
        <img src="${current.image}" alt="${current.label}" 
             class="max-h-64 w-auto rounded-xl object-contain shadow-xl border border-white/10">
      ` : `
        <div class="text-center py-10 px-4">
          <div class="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-2.5">
            <i data-lucide="qr-code" class="w-6 h-6"></i>
          </div>
          <p class="text-xs font-bold text-white">មិនទាន់មានរូប ${current.label}</p>
          <p class="text-[10px] text-slate-400 mt-1">ចុចប៊ូតុងខាងក្រោមដើម្បីជ្រើសរើសរូប QR ពីទូរសព្ទ</p>
        </div>
      `}
    </div>

    <!-- Action Buttons -->
    <div class="flex items-center gap-2">
      <button onclick="document.getElementById('qr-photo-input').click()" 
              class="flex-1 py-2.5 rounded-xl accent-solid-btn text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg active:scale-95 transition">
        <i data-lucide="upload" class="w-4 h-4"></i>
        <span>${current.image ? 'ប្តូររូប QR' : '+ បញ្ចូលរូប QR'}</span>
      </button>
      ${current.image ? `
        <button onclick="deleteQrPhotoSlot()" 
                class="py-2.5 px-3.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 text-rose-400 text-xs font-bold active:scale-95 transition">
          លុប
        </button>
      ` : ''}
    </div>
  `;
  if (window.lucide) window.lucide.createIcons();
}

function saveQrPhotoLabel() {
  const input = document.getElementById('qr-slot-label-input');
  if (!input) return;
  const list = getQrPhotosList();
  list[activeQrSlotIdx].label = input.value.trim() || `QR ${activeQrSlotIdx + 1}`;
  localStorage.setItem('sd_qr_photos', JSON.stringify(list));
  renderQrPhotosModalBody();
  if (appState.currentView === 'profile') renderCurrentView();
  showToastNotification('រក្សាទុកឈ្មោះ QR រួចរាល់!');
}

async function handleQrPhotoUpload(event) {
  const file = event.target?.files?.[0];
  if (!file) return;
  try {
    const dataUrl = await compressImageFile(file, 720, 0.85);
    const list = getQrPhotosList();
    list[activeQrSlotIdx].image = dataUrl;
    localStorage.setItem('sd_qr_photos', JSON.stringify(list));
    event.target.value = '';
    renderQrPhotosModalBody();
    if (appState.currentView === 'profile') renderCurrentView();
    showToastNotification('បញ្ចូលរូប QR ជោគជ័យ!');
  } catch (e) {
    alert('មិនអាចរក្សាទុករូប QR បានទេ');
  }
}

function deleteQrPhotoSlot() {
  const list = getQrPhotosList();
  list[activeQrSlotIdx].image = '';
  localStorage.setItem('sd_qr_photos', JSON.stringify(list));
  renderQrPhotosModalBody();
  if (appState.currentView === 'profile') renderCurrentView();
}

// =========================================================
// 3. FULL-SCREEN ALL CUSTOMERS DIRECTORY (100% SCREEN)
// =========================================================
let allCustomersSortMode = 'latest';
let expandedCustomerKey = null;
let allCustScrollInitialized = false;

function setupAllCustomersScroll() {
  const listEl = document.getElementById('all-customers-list');
  const summaryEl = document.getElementById('all-customers-summary');
  if (!listEl || !summaryEl || allCustScrollInitialized) return;
  allCustScrollInitialized = true;

  let lastScrollTop = listEl.scrollTop || 0;
  let dockIdleTimer = null;

  listEl.addEventListener('scroll', () => {
    const currentScrollTop = listEl.scrollTop;
    const diff = currentScrollTop - lastScrollTop;

    // 1. Scrolling down into deeper items (finger dragging up) -> Hide Summary & Dock
    if (diff > 6 && currentScrollTop > 25) {
      if (!summaryEl.classList.contains('summary-collapsed')) {
        summaryEl.classList.add('summary-collapsed');
      }
      if (diff > 8 && currentScrollTop > 30) {
        setDockVisible(false);
      }
    }
    // 2. Scrolling back up towards top (finger dragging down) OR near top -> Show Summary & Dock
    else if (diff < -5 || currentScrollTop <= 15) {
      if (summaryEl.classList.contains('summary-collapsed')) {
        summaryEl.classList.remove('summary-collapsed');
      }
      setDockVisible(true);
    }

    lastScrollTop = currentScrollTop;
    // NOTE: Summary strip stays hidden on idle, but Dock restores smoothly when screen is still
    clearTimeout(dockIdleTimer);
    dockIdleTimer = setTimeout(() => {
      setDockVisible(true);
    }, 450);
  }, { passive: true });
}

function openAllCustomersModal() {
  expandedCustomerKey = null;
  const searchInput = document.getElementById('all-customers-search-input');
  const normalNav = document.getElementById('all-customers-normal-nav');
  const searchBar = document.getElementById('all-customers-search-bar');
  const summaryEl = document.getElementById('all-customers-summary');
  if (summaryEl) summaryEl.classList.remove('summary-collapsed');
  if (searchInput) searchInput.value = '';
  if (normalNav) normalNav.classList.remove('hidden');
  if (searchBar) searchBar.classList.add('hidden');
  renderAllCustomersList();
  setupAllCustomersScroll();
  setDockVisible(true);
  const modal = document.getElementById('all-customers-modal');
  if (modal) {
    modal.classList.remove('hidden');
    if (appState.fontFamily) modal.classList.add(appState.fontFamily);
  }
  if (window.lucide) window.lucide.createIcons();
}

function toggleCustomersSearch() {
  const normalNav = document.getElementById('all-customers-normal-nav');
  const searchBar = document.getElementById('all-customers-search-bar');
  const input = document.getElementById('all-customers-search-input');
  if (!searchBar || !input) return;

  if (searchBar.classList.contains('hidden')) {
    if (normalNav) normalNav.classList.add('hidden');
    searchBar.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
    setTimeout(() => input.focus(), 60);
  } else {
    clearAndHideCustomerSearch();
  }
}

function clearCustomerSearchInput() {
  const input = document.getElementById('all-customers-search-input');
  if (input) {
    input.value = '';
    input.focus();
  }
  renderAllCustomersList();
}

function clearAndHideCustomerSearch() {
  const normalNav = document.getElementById('all-customers-normal-nav');
  const searchBar = document.getElementById('all-customers-search-bar');
  const input = document.getElementById('all-customers-search-input');
  if (input) input.value = '';
  if (searchBar) searchBar.classList.add('hidden');
  if (normalNav) normalNav.classList.remove('hidden');
  renderAllCustomersList();
}

function toggleDrawerMemberInfo() {
  const body = document.getElementById('drawer-member-info-body');
  const chevron = document.getElementById('drawer-member-info-chevron');
  const editBtn = document.getElementById('drawer-member-edit-btn');
  if (!body) return;
  const isHidden = body.classList.contains('hidden');
  if (isHidden) {
    body.classList.remove('hidden');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
    if (editBtn) editBtn.classList.remove('hidden');
  } else {
    body.classList.add('hidden');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
    if (editBtn) editBtn.classList.add('hidden');
  }
}

function toggleProfileViewMemberInfo() {
  const body = document.getElementById('prof-view-member-info-body');
  const chevron = document.getElementById('prof-view-member-info-chevron');
  if (!body) return;
  const isHidden = body.classList.contains('hidden');
  if (isHidden) {
    body.classList.remove('hidden');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  } else {
    body.classList.add('hidden');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  }
}

function closeAllCustomersModal() {
  document.getElementById('all-customers-modal')?.classList?.add('hidden');
  openProfileDrawer();
}

function toggleCustomersSortMenu(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('cust-sort-dropdown-menu');
  if (!menu) return;
  menu.classList.toggle('hidden');
}

// Close sort dropdown when tapping outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('#btn-cust-sort-trigger') && !e.target.closest('#cust-sort-dropdown-menu')) {
    const menu = document.getElementById('cust-sort-dropdown-menu');
    if (menu) menu.classList.add('hidden');
  }
});

function setAllCustomersSort(mode) {
  allCustomersSortMode = mode;
  
  const labelEl = document.getElementById('cust-sort-current-label');
  const labels = {
    latest: 'ថ្មីបំផុត',
    top: 'ទិញច្រើន',
    name: 'ឈ្មោះ (ក-អ)'
  };
  if (labelEl) labelEl.textContent = labels[mode] || 'ថ្មីបំផុត';

  ['latest', 'top', 'name'].forEach(m => {
    const check = document.getElementById(`cust-check-${m}`);
    if (check) {
      if (m === mode) check.classList.remove('hidden');
      else check.classList.add('hidden');
    }
  });

  renderAllCustomersList();
}

function toggleCustomerOrderHistory(encodedKey) {
  const key = decodeURIComponent(encodedKey);
  expandedCustomerKey = (expandedCustomerKey === key) ? null : key;
  renderAllCustomersList();
}

function getOrderProductSummary(o) {
  if (o.product && o.product !== 'ទំនិញ') return o.product;
  const parts = [];
  if (o.qtySG > 0) parts.push(o.qtySG > 1 ? `SG Pro (${o.qtySG})` : `SG Pro`);
  if (o.qtyKN > 0) parts.push(o.qtyKN > 1 ? `KN (${o.qtyKN})` : `KN`);
  if (o.qtyPDO > 0) parts.push(o.qtyPDO > 1 ? `PDO (${o.qtyPDO})` : `PDO`);
  if (o.qtyYL > 0) parts.push(o.qtyYL > 1 ? `YL (${o.qtyYL})` : `YL`);
  if (o.qtyYLP > 0) parts.push(o.qtyYLP > 1 ? `YLP (${o.qtyYLP})` : `YLP`);
  if (o.freeQty > 0) parts.push(`Free (${o.freeQty})`);
  return parts.join(', ') || (o.product || 'ទំនិញ');
}

function renderAllCustomersList() {
  const listEl = document.getElementById('all-customers-list');
  const countBadge = document.getElementById('all-customers-count-badge');
  const summaryEl = document.getElementById('all-customers-summary');
  if (!listEl) return;

  const q = (document.getElementById('all-customers-search-input')?.value || '').trim().toLowerCase();
  let customers = getAllUniqueCustomers();

  if (q) {
    customers = customers.filter(c =>
      c.name.toLowerCase().includes(q) ||
      c.phone.toLowerCase().includes(q) ||
      c.location.toLowerCase().includes(q) ||
      c.seller.toLowerCase().includes(q)
    );
  }

  if (allCustomersSortMode === 'top') {
    customers.sort((a, b) => (b.totalBoxes - a.totalBoxes) || (b.totalSpent - a.totalSpent));
  } else if (allCustomersSortMode === 'name') {
    customers.sort((a, b) => a.name.localeCompare(b.name, 'km'));
  } else {
    // Latest (31 ➔ 01 / 12 ➔ 01)
    customers.sort((a, b) => (b.lastIsoDate || '').localeCompare(a.lastIsoDate || ''));
  }

  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('expand_cust') === '1' && !expandedCustomerKey && customers.length > 0) {
    expandedCustomerKey = customers[0].key;
  }

  const isEn = appState.language === 'en';
  const countText = document.getElementById('all-customers-count-text');
  const countDisplay = isEn ? `(${customers.length} Cust)` : `(${customers.length} នាក់)`;
  if (countText) countText.textContent = countDisplay;
  if (countBadge) countBadge.textContent = `${customers.length} នាក់`;

  const totalOrdersSum = customers.reduce((acc, c) => acc + c.totalOrders, 0);
  const totalBoxesSum = customers.reduce((acc, c) => acc + c.totalBoxes, 0);
  const totalSpentSum = customers.reduce((acc, c) => acc + c.totalSpent, 0);

  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="p-2 rounded-xl bg-black/30 border border-white/5">
        <span class="text-[10px] text-slate-400 block">${isEn ? 'Total Orders' : 'សរុបការកុម្ម៉ង់'}</span>
        <span class="font-mono font-bold text-xs text-white">${formatInt(totalOrdersSum)} ${isEn ? 'times' : 'ដង'}</span>
      </div>
      <div class="p-2 rounded-xl bg-black/30 border border-white/5">
        <span class="text-[10px] text-slate-400 block">${isEn ? 'Total Boxes' : 'សរុបប្រអប់'}</span>
        <span class="font-mono font-bold text-xs text-orange-400">${formatInt(totalBoxesSum)} ${isEn ? 'Boxes' : 'ប្រអប់'}</span>
      </div>
      <div class="p-2 rounded-xl bg-black/30 border border-white/5">
        <span class="text-[10px] text-slate-400 block">${isEn ? 'Total Revenue' : 'ទឹកប្រាក់សរុប'}</span>
        <span class="font-mono font-bold text-xs text-emerald-400">${formatUSD(totalSpentSum)}</span>
      </div>
    `;
  }

  listEl.innerHTML = customers.map((c, idx) => {
    const isExpanded = (expandedCustomerKey === c.key) || (urlParams.get('expand_cust') === '1' && idx === 0);
    const encodedKey = encodeURIComponent(c.key);
    const sortedOrders = [...c.orders].sort((a, b) => (b.isoDate || '').localeCompare(a.isoDate || ''));

    return `
      <div class="ios-glass-card rounded-2xl p-3 border border-white/10 transition">
        <div onclick="toggleCustomerOrderHistory('${encodedKey}')" class="flex items-center justify-between gap-3 cursor-pointer select-none">
          <!-- Left Column: Ample room so Customer Name, Location, Phone, Date never truncate with ... -->
          <div class="flex items-center gap-2.5 min-w-0 flex-1">
            <span class="w-7 h-7 rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
              ${idx + 1}
            </span>
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-1.5 flex-wrap">
                <h4 class="font-bold text-xs text-white truncate max-w-[140px] sm:max-w-none">${c.name}</h4>
                <span class="px-1.5 py-0.2 rounded bg-white/10 text-[9px] font-mono text-slate-300 shrink-0">${c.totalOrders} ${isEn ? 'orders' : 'ដង'}</span>
              </div>
              <div class="flex items-center gap-1.5 text-[10px] text-slate-400 mt-0.5 flex-wrap">
                <span class="truncate max-w-[90px] sm:max-w-none">📍 ${c.location}</span>
                <span>•</span>
                <span class="font-mono text-slate-300 font-semibold shrink-0 whitespace-nowrap">📞 ${c.phone}</span>
                <span class="text-slate-500">•</span>
                <span class="font-mono text-slate-400 shrink-0 whitespace-nowrap">${c.lastDate}</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Amount on top line, Box quantity on bottom line (Ensures complete digit visibility) -->
          <div class="text-right shrink-0 min-w-[70px]">
            <div class="font-mono font-bold text-xs text-emerald-400 leading-tight">${formatUSD(c.totalSpent)}</div>
            ${c.totalThaiBaht > 0 ? `<div class="font-mono text-[9.5px] text-slate-300 font-medium leading-tight mt-0.5">${formatInt(c.totalThaiBaht)} ฿</div>` : ''}
            <div class="text-[10px] font-mono font-bold text-orange-400 leading-tight mt-0.5">
              ${c.totalBoxes} ${isEn ? 'Boxes' : 'ប្រអប់'}
            </div>
          </div>
        </div>

        ${isExpanded ? `
          <div class="mt-2.5 pt-2.5 border-t border-white/10 space-y-2">
            <div class="flex items-center justify-between text-[10px]">
              <span class="text-slate-400 font-semibold">ប្រវត្តិទិញទាំងអស់ (${sortedOrders.length} ប្រតិបត្តិការ)</span>
              ${c.phone && c.phone !== '—' ? `
                <div class="flex items-center gap-1.5">
                  <a href="tel:${c.phone.replace(/\s+/g, '')}" onclick="event.stopPropagation()" 
                     class="px-2 py-0.5 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-bold">
                    📞 ហៅទូរសព្ទ
                  </a>
                  <button onclick="event.stopPropagation(); fallbackCopyText('${c.phone}')" 
                          class="px-2 py-0.5 rounded-lg bg-white/10 text-slate-200 font-bold">
                    ចម្លងលេខ
                  </button>
                </div>
              ` : ''}
            </div>
            <div class="space-y-1.5 max-h-48 overflow-y-auto no-scrollbar">
              ${sortedOrders.map(o => `
                <div class="p-2 rounded-xl bg-black/30 border border-white/5 flex items-center justify-between text-[11px]">
                  <div class="flex items-center gap-1.5 min-w-0 pr-2">
                    <span class="font-mono text-white font-bold shrink-0">${o.date}</span>
                    <span class="text-slate-300 font-medium truncate">(${getOrderProductSummary(o)})</span>
                  </div>
                  <div class="font-mono text-right shrink-0">
                    ${(o.thaiBaht > 0 || o.price > 0) ? `
                      <span class="text-slate-200 font-medium text-[10.5px]">${formatInt(o.thaiBaht || o.price)} ฿</span>
                      <span class="text-slate-500 mx-1">•</span>
                    ` : ''}
                    <span class="text-orange-400 font-bold">${o.totalBoxQty} ប្រអប់</span>
                    <span class="text-slate-500 mx-1">|</span>
                    <span class="text-emerald-400 font-bold">${formatUSD(o.totalAmount)}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }).join('') || `<p class="text-xs text-slate-400 text-center py-10">មិនមានទិន្នន័យអតិថិជនទេ</p>`;
  if (window.lucide) window.lucide.createIcons();
}

// =========================================================
// 4. PROFILE SUB-MODALS (Note, Book, Members, Telegram, Privacy, Feedback, Help, Logout Beta)
// =========================================================
function handleTelegramGroupClick() {
  const savedUrl = localStorage.getItem('sd_telegram_group_url');
  if (savedUrl && savedUrl.trim()) {
    window.open(savedUrl.trim(), '_blank');
  } else {
    openProfileSubModal('telegram_edit');
  }
}

function saveTelegramGroupUrl(openImmediately = false) {
  const input = document.getElementById('tg-group-url-input');
  if (!input) return;
  const val = input.value.trim();
  localStorage.setItem('sd_telegram_group_url', val);
  showToastNotification('រក្សាទុក Link Telegram Group ជោគជ័យ!');
  closeProfileSubModal();
  if (openImmediately && val) {
    window.open(val, '_blank');
  }
}

function togglePrivacyField(fieldKey) {
  const p = getProfileData();
  p.privacy[fieldKey] = p.privacy[fieldKey] === false ? true : false;
  localStorage.setItem('sd_profile_data', JSON.stringify(p));
  openProfileSubModal('privacy');
  if (appState.currentView === 'profile') renderCurrentView();
}

function addProfileNote() {
  const titleEl = document.getElementById('new-note-title');
  const textEl = document.getElementById('new-note-text');
  const title = (titleEl?.value || '').trim();
  const text = (textEl?.value || '').trim();
  if (!title && !text) return;
  const notes = getProfileNotes();
  notes.unshift({
    id: Date.now(),
    title: title || 'ផែនការថ្មី',
    text: text,
    date: new Date().toLocaleDateString('en-GB')
  });
  localStorage.setItem('sd_profile_notes', JSON.stringify(notes));
  window._activeBookNotesTab = 'notes';
  openProfileSubModal('book_notes');
  if (appState.currentView === 'profile') renderCurrentView();
  renderProfileDrawerContent();
  showToastNotification('បានរក្សាទុកផែនការថ្មីជោគជ័យ!');
}

function deleteProfileNote(id) {
  const notes = getProfileNotes().filter(n => n.id !== id);
  localStorage.setItem('sd_profile_notes', JSON.stringify(notes));
  window._activeBookNotesTab = 'notes';
  openProfileSubModal('book_notes');
  if (appState.currentView === 'profile') renderCurrentView();
  renderProfileDrawerContent();
}

function switchBookNotesTab(tab) {
  window._activeBookNotesTab = tab;
  openProfileSubModal('book_notes');
}

async function saveCustomGoogleSheetId() {
  const input = document.getElementById('custom-sheet-input');
  const val = input ? input.value.trim() : '';
  const statusEl = document.getElementById('custom-sheet-status-box');
  
  if (!val) {
    showToastNotification('សូមបញ្ចូល Google Sheet ID ឬ Link');
    return;
  }
  
  if (statusEl) {
    statusEl.innerHTML = `<span class="text-amber-400 font-mono text-xs flex items-center gap-1.5"><i data-lucide="loader" class="w-3.5 h-3.5 animate-spin"></i> កំពុងភ្ជាប់ និងទាញទិន្នន័យ...</span>`;
    if (window.lucide) window.lucide.createIcons();
  }
  
  try {
    await DataService.setCustomSheetId(val);
    showToastNotification('បានភ្ជាប់ទៅ Google Sheet ផ្ទាល់ខ្លួនជោគជ័យ! 🎉');
    if (typeof renderCurrentView === 'function') renderCurrentView();
    renderProfileDrawerContent();
    openProfileSubModal('custom_sheet');
  } catch (err) {
    if (statusEl) {
      statusEl.innerHTML = `<span class="text-rose-400 text-xs font-semibold">❌ បរាជ័យ៖ ${err.message}</span>`;
    }
    showToastNotification('មិនអាចភ្ជាប់បានឡើយ៖ ' + err.message);
  }
}

async function testCustomGoogleSheetConnection() {
  const input = document.getElementById('custom-sheet-input');
  const val = input ? input.value.trim() : '';
  const statusEl = document.getElementById('custom-sheet-status-box');
  
  if (!val) {
    showToastNotification('សូមបញ្ចូល Google Sheet ID ឬ Link ដើម្បីតេស្ត');
    return;
  }
  
  if (statusEl) {
    statusEl.innerHTML = `<span class="text-sky-400 font-mono text-xs flex items-center gap-1.5"><i data-lucide="loader" class="w-3.5 h-3.5 animate-spin"></i> កំពុងពិនិត្យការតភ្ជាប់...</span>`;
    if (window.lucide) window.lucide.createIcons();
  }
  
  try {
    const res = await DataService.testSheetConnection(val);
    if (statusEl) {
      statusEl.innerHTML = `<span class="text-emerald-400 text-xs font-bold flex items-center gap-1.5">✅ ការតភ្ជាប់ជោគជ័យ! រកឃើញទិន្នន័យ ${res.rows} ជួរ។</span>`;
    }
    showToastNotification('ការតភ្ជាប់ជោគជ័យ ១០០%!');
  } catch (err) {
    if (statusEl) {
      statusEl.innerHTML = `<span class="text-rose-400 text-xs font-semibold">❌ ${err.message}</span>`;
    }
    showToastNotification('ការតភ្ជាប់មិនជោគជ័យឡើយ');
  }
}

async function resetCustomGoogleSheetToMaster() {
  disconnectCustomSheet();
}

function checkOnboardingGate() {
  const gate = document.getElementById('onboarding-gate');
  const dock = document.getElementById('bottom-dock');
  if (!gate) return;

  const urlParams = new URLSearchParams(window.location.search);
  const skipGate = urlParams.get('skip_gate') === '1' || urlParams.get('admin') === '1';
  const hasCustomSheet = Boolean(localStorage.getItem('sd_custom_sheet_id'));
  const hasOnboardingDone = localStorage.getItem('sd_onboarding_completed') === 'true';

  if (!skipGate && (!hasCustomSheet || !hasOnboardingDone)) {
    gate.classList.remove('hidden');
    if (dock) dock.classList.add('hidden');
    setDockVisible(false);
  } else {
    gate.classList.add('hidden');
    if (dock) dock.classList.remove('hidden');
    setDockVisible(true);
  }
}

function enterTestMode() {
  localStorage.setItem('sd_onboarding_completed', 'true');
  localStorage.setItem('sd_custom_sheet_id', '1a7aqCSKWRGKuBiV8BoaNlJFT9Uarfx9ijoV5hLH-Beg');
  const gate = document.getElementById('onboarding-gate');
  if (gate) gate.classList.add('hidden');
  const dock = document.getElementById('bottom-dock');
  if (dock) dock.classList.remove('hidden');
  setDockVisible(true);
  if (window.DataService) window.DataService.fetchData(false);
  renderCurrentView();
  showToastNotification('🎉 ស្វាគមន៍មកកាន់ Test Mode! ជាមួយ Google Sheet ថ្មី');
}
window.enterTestMode = enterTestMode;

async function submitOnboardingConnection() {
  const nameInput = document.getElementById('onboard-member-name');
  const urlInput = document.getElementById('onboard-sheet-url');
  const statusBox = document.getElementById('onboard-status-box');

  const name = nameInput ? nameInput.value.trim() : '';
  const url = urlInput ? urlInput.value.trim() : '';

  if (!url) {
    if (statusBox) {
      statusBox.innerHTML = '<span class="text-rose-400 text-xs font-semibold flex items-center gap-1.5"><i data-lucide="alert-circle" class="w-3.5 h-3.5"></i> សូមបញ្ចូល Link Google Sheet របស់អ្នក</span>';
      if (window.lucide) window.lucide.createIcons();
    }
    return;
  }

  const cleanId = (typeof extractSheetId === 'function') ? extractSheetId(url) : (url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/) ? url.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/)[1] : url);
  if (!cleanId || cleanId.length < 15) {
    if (statusBox) {
      statusBox.innerHTML = '<span class="text-rose-400 text-xs font-semibold flex items-center gap-1.5"><i data-lucide="alert-circle" class="w-3.5 h-3.5"></i> Link ឬ Sheet ID មិនត្រឹមត្រូវឡើយ</span>';
      if (window.lucide) window.lucide.createIcons();
    }
    return;
  }

  if (statusBox) {
    statusBox.innerHTML = '<span class="text-sky-400 text-xs font-medium flex items-center gap-1.5"><i data-lucide="loader" class="w-3.5 h-3.5 animate-spin"></i> កំពុងពិនិត្យការតភ្ជាប់ទៅកាន់ Google Sheet...</span>';
    if (window.lucide) window.lucide.createIcons();
  }

  try {
    const res = await DataService.testSheetConnection(cleanId);
    try {
      localStorage.removeItem('sd_local_orders');
      localStorage.removeItem('sd_local_expenses');
    } catch (_) {}
    localStorage.setItem('sd_custom_sheet_id', cleanId);
    
    const memberName = name || 'សមាជិក Bostar';
    const memberProfile = {
      name: memberName,
      memberId: 'ID: BG-' + Math.floor(100 + Math.random() * 900),
      subtitle: name ? `${memberName} • BostarGroup` : 'BostarGroup Member',
      avatar: 'bostar-logo.png',
      work: 'សមាជិកក្រុម BostarGroup',
      study: 'BostarGroup',
      live: 'រាជធានីភ្នំពេញ',
      from: 'ព្រះរាជាណាចក្រកម្ពុជា',
      status: 'សកម្មក្នុងការងារ',
      birthday: '',
      phone: '',
      privacy: {
        showWork: true,
        showStudy: true,
        showLive: true,
        showFrom: true,
        showStatus: true,
        showBirth: false,
        showPhone: false
      }
    };
    localStorage.setItem('sd_profile_data', JSON.stringify(memberProfile));
    localStorage.setItem('sd_onboarding_completed', 'true');
    
    syncHeaderProfileUI();
    checkOnboardingGate();
    
    showToastNotification(`🎉 ភ្ជាប់ជោគជ័យ! សូមស្វាគមន៍ ${memberName}`);
    await DataService.fetchData(false);
    renderCurrentView();
  } catch (err) {
    if (statusBox) {
      statusBox.innerHTML = `<span class="text-rose-400 text-xs font-semibold flex items-start gap-1.5"><i data-lucide="alert-triangle" class="w-4 h-4 shrink-0 mt-0.5"></i> <span>${err.message || 'មិនអាចភ្ជាប់បានទេ សូមពិនិត្យសិទ្ធិ Share (Anyone with link can view)'}</span></span>`;
      if (window.lucide) window.lucide.createIcons();
    }
  }
}

function openMasterAdminPinModal() {
  const m = document.getElementById('master-pin-modal');
  const input = document.getElementById('master-pin-input');
  const err = document.getElementById('master-pin-err');
  if (err) err.classList.add('hidden');
  if (input) input.value = '';
  if (m) m.classList.remove('hidden');
  if (input) setTimeout(() => input.focus(), 100);
}

function closeMasterPinModal() {
  const m = document.getElementById('master-pin-modal');
  if (m) m.classList.add('hidden');
}

async function submitMasterPin() {
  const input = document.getElementById('master-pin-input');
  const err = document.getElementById('master-pin-err');
  const pin = input ? input.value.trim() : '';

  if (pin === '2026' || pin === 'sd2026' || pin === '1234') {
    closeMasterPinModal();
    const masterId = (typeof DataService !== 'undefined' && DataService.getMasterSheetId) ? DataService.getMasterSheetId() : '1Qu70irzkvKyYN49eoquTModvm33WT5ZEyTTjUFoEbWU';
    localStorage.setItem('sd_custom_sheet_id', masterId);
    localStorage.setItem('sd_profile_data', JSON.stringify(DEFAULT_PROFILE_DATA));
    syncHeaderProfileUI();
    checkOnboardingGate();
    showToastNotification('🔓 ស្វាគមន៍ការចូលប្រើប្រាស់ជា Master Admin (ស្តី ស្តើង)');
    await DataService.fetchData(false);
    renderCurrentView();
  } else {
    if (err) {
      err.textContent = 'លេខកូដមិនត្រឹមត្រូវឡើយ';
      err.classList.remove('hidden');
    }
  }
}

function disconnectCustomSheet() {
  if (window.DataService && typeof window.DataService.disconnectSheet === 'function') {
    window.DataService.disconnectSheet();
  } else {
    try {
      localStorage.removeItem('sd_custom_sheet_id');
      localStorage.removeItem('sd_profile_data');
    } catch (_) {}
  }
  document.getElementById('profile-sub-modal')?.classList?.add('hidden');
  document.getElementById('profile-dashboard-drawer')?.classList?.add('translate-x-full');
  syncHeaderProfileUI();
  checkOnboardingGate();
  showToastNotification('បានផ្តាច់ការតភ្ជាប់ Sheet រួចរាល់');
}

window.saveCustomGoogleSheetId = saveCustomGoogleSheetId;
window.testCustomGoogleSheetConnection = testCustomGoogleSheetConnection;
window.resetCustomGoogleSheetToMaster = resetCustomGoogleSheetToMaster;
window.checkOnboardingGate = checkOnboardingGate;
window.submitOnboardingConnection = submitOnboardingConnection;
window.openMasterAdminPinModal = openMasterAdminPinModal;
window.closeMasterPinModal = closeMasterPinModal;
window.submitMasterPin = submitMasterPin;
window.disconnectCustomSheet = disconnectCustomSheet;

function closeProfileSubModal() {
  document.getElementById('profile-sub-modal')?.classList?.add('hidden');
  openProfileDrawer();
}

function openProfileSubModal(type) {
  if (type === 'members') {
    openTeamMembersModal();
    return;
  }
  if (type === 'honors' || type === 'dedication') {
    closeProfileSubModal();
    openHonorsModal();
    return;
  }
  const header = document.getElementById('profile-sub-modal-header');
  const body = document.getElementById('profile-sub-modal-body');
  if (!header || !body) return;

  let title = '';
  let sub = '';
  let icon = 'sparkles';
  let contentHTML = '';

  if (type === 'daily_report') {
    title = 'របាយការណ៍លក់ប្រចាំថ្ងៃ';
    sub = 'ទម្រង់ផ្ញើរបាយការណ៍ចូលគ្រុប ៩:០០ យប់';
    icon = 'clipboard-check';

    const p = getProfileData();
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const defaultDate = `${dd}/${mm}/${yyyy}`;
    const savedPage = localStorage.getItem('sd_report_page') || 'Bostar Store';
    const staffName = p.name || 'ស្តី ស្តើង';

    // Auto-detect today's sales from DataService
    let autoTodayBoxes = 0;
    let autoTodayOrders = 0;
    try {
      const todayIso = today.toISOString().slice(0, 10);
      const sales = (DataService.data && DataService.data.personalSales) ? DataService.data.personalSales : [];
      const todaySales = sales.filter(s => s.isoDate === todayIso);
      autoTodayOrders = todaySales.length;
      autoTodayBoxes = todaySales.reduce((sum, s) => sum + (Number(s.boxes) || 0), 0);
    } catch (_) {}

    contentHTML = `
      <div class="space-y-3 text-xs select-none">
        <!-- Card 1: Meta Information -->
        <div class="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-2">
          <div class="flex items-center justify-between">
            <span class="text-[10px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
              <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
              <span>កាលបរិច្ឆេទ & ព័ត៌មាន</span>
            </span>
            <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[9px] font-bold">
              ៩:០០ យប់
            </span>
          </div>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">កាលបរិច្ឆេទ៖</label>
              <input type="text" id="rep-field-date" value="${defaultDate}" 
                     class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs focus:outline-none focus:border-emerald-500">
            </div>
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">ឈ្មោះផេក៖</label>
              <input type="text" id="rep-field-page" value="${savedPage}" placeholder="ឧ. Bostar Store" 
                     oninput="try { localStorage.setItem('sd_report_page', this.value); } catch(_) {}"
                     class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white text-xs focus:outline-none focus:border-emerald-500">
            </div>
          </div>
          <div>
            <label class="block text-[10px] text-slate-400 mb-0.5">បុគ្គលិកទទួលខុសត្រូវ / ក្រុម៖</label>
            <input type="text" id="rep-field-staff" value="${staffName}" 
                   class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white text-xs focus:outline-none focus:border-emerald-500">
          </div>
        </div>

        <!-- Card 2: Section 1 - 📥 ទិន្នន័យអតិថិជនថ្មីទាក់ទងមក -->
        <div class="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-2">
          <span class="text-[10px] text-sky-400 font-bold uppercase tracking-wider flex items-center gap-1">
            <i data-lucide="inbox" class="w-3.5 h-3.5"></i>
            <span>១. ទិន្នន័យអតិថិជនថ្មីទាក់ទងមក</span>
          </span>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">ឆាតថ្មីសរុប (នាក់)៖</label>
              <input type="number" id="rep-field-chat-total" placeholder="0" oninput="calculateDailyReportMetrics()" 
                     class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs focus:outline-none focus:border-sky-500">
            </div>
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">ឆាតប៉ះដៃ (នាក់)៖</label>
              <input type="number" id="rep-field-chat-mistake" placeholder="0" oninput="calculateDailyReportMetrics()" 
                     class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs focus:outline-none focus:border-sky-500">
            </div>
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">ឆាតគោលដៅ (នាក់)៖</label>
              <input type="number" id="rep-field-chat-target" placeholder="0" oninput="calculateDailyReportMetrics()" 
                     class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-sky-300 font-bold font-mono text-xs focus:outline-none focus:border-sky-500">
            </div>
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">អតិថិជនខលផ្ទាល់ (នាក់)៖</label>
              <input type="number" id="rep-field-call-direct" placeholder="0" 
                     class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs focus:outline-none focus:border-sky-500">
            </div>
          </div>
        </div>

        <!-- Card 3: Section 2 - 🔄 សកម្មភាពតាមដាន (Follow Up) -->
        <div class="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-2">
          <span class="text-[10px] text-purple-400 font-bold uppercase tracking-wider flex items-center gap-1">
            <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
            <span>២. សកម្មភាពតាមដានអតិថិជន (Follow Up)</span>
          </span>
          <div class="grid grid-cols-2 gap-2">
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">អតិថិជនចាស់សួរសុខទុក្ខ (នាក់)៖</label>
              <input type="number" id="rep-field-follow-old" placeholder="0" 
                     class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs focus:outline-none focus:border-purple-500">
            </div>
            <div>
              <label class="block text-[10px] text-slate-400 mb-0.5">អតិថិជនរង់ចាំចម្លើយ (នាក់)៖</label>
              <input type="number" id="rep-field-follow-pending" placeholder="0" 
                     class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs focus:outline-none focus:border-purple-500">
            </div>
          </div>
        </div>

        <!-- Card 4: Section 3 - 📦 លទ្ធផលនៃការលក់ជាក់ស្តែង -->
        <div class="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-2">
          <span class="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
            <i data-lucide="package" class="w-3.5 h-3.5"></i>
            <span>៣. លទ្ធផលនៃការលក់ជាក់ស្តែង</span>
          </span>
          
          <div class="space-y-1.5">
            <div class="flex items-center gap-2">
              <span class="text-[10px] text-slate-300 w-28 shrink-0">អតិថិជនថ្មីទិញ:</span>
              <input type="number" id="rep-buy-new-p" placeholder="នាក់" oninput="calculateDailyReportMetrics()" class="w-1/2 bg-black/50 border border-white/10 rounded-xl p-1.5 text-white font-mono text-xs text-center focus:outline-none">
              <input type="number" id="rep-buy-new-b" placeholder="ប្រអប់" oninput="calculateDailyReportMetrics()" class="w-1/2 bg-black/50 border border-white/10 rounded-xl p-1.5 text-white font-mono text-xs text-center focus:outline-none">
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] text-slate-300 w-28 shrink-0">អតិថិជនចាស់ទិញបន្ថែម:</span>
              <input type="number" id="rep-buy-old-p" placeholder="នាក់" oninput="calculateDailyReportMetrics()" class="w-1/2 bg-black/50 border border-white/10 rounded-xl p-1.5 text-white font-mono text-xs text-center focus:outline-none">
              <input type="number" id="rep-buy-old-b" placeholder="ប្រអប់" oninput="calculateDailyReportMetrics()" class="w-1/2 bg-black/50 border border-white/10 rounded-xl p-1.5 text-white font-mono text-xs text-center focus:outline-none">
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] text-slate-300 w-28 shrink-0">អតិថិជនដែលតាមដានទិញ:</span>
              <input type="number" id="rep-buy-follow-p" placeholder="នាក់" oninput="calculateDailyReportMetrics()" class="w-1/2 bg-black/50 border border-white/10 rounded-xl p-1.5 text-white font-mono text-xs text-center focus:outline-none">
              <input type="number" id="rep-buy-follow-b" placeholder="ប្រអប់" oninput="calculateDailyReportMetrics()" class="w-1/2 bg-black/50 border border-white/10 rounded-xl p-1.5 text-white font-mono text-xs text-center focus:outline-none">
            </div>
          </div>

          <!-- Total Calculation Display -->
          <div class="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs font-mono">
            <span class="text-emerald-300 font-bold">👉 សរុបទំនិញលក់បានទាំងអស់៖</span>
            <span id="rep-total-summary-disp" class="text-emerald-400 font-bold">
              ${autoTodayBoxes || 0} ប្រអប់
            </span>
          </div>
        </div>

        <!-- Card 5: បញ្ហាប្រឈម ឬចំណាំសំខាន់ៗ -->
        <div class="p-3 rounded-2xl bg-black/40 border border-white/10 space-y-2">
          <label class="block text-[10px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
            <i data-lucide="alert-circle" class="w-3.5 h-3.5"></i>
            <span>បញ្ហាប្រឈម ឬចំណាំសំខាន់ៗ៖</span>
          </label>
          <textarea id="rep-field-challenges" rows="2" placeholder="ឧទាហរណ៍៖ អតិថិជនត្អូញត្អែរតម្លៃ, សេវាដឹកយឺត..." 
                    class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white text-xs focus:outline-none focus:border-amber-500 leading-relaxed"></textarea>
        </div>

        <!-- Action Buttons -->
        <div class="grid grid-cols-2 gap-2 pt-1">
          <button onclick="copyDailyReportText()" 
                  class="py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition shadow-sm">
            <i data-lucide="copy" class="w-3.5 h-3.5"></i>
            <span>ចម្លងរបាយការណ៍ 📋</span>
          </button>
          <button onclick="shareDailyReportToTelegram()" 
                  class="py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition shadow-lg shadow-sky-500/25">
            <i data-lucide="send" class="w-3.5 h-3.5"></i>
            <span>ផ្ញើទៅ Telegram 🚀</span>
          </button>
        </div>
      </div>
    `;
  } else if (type === 'custom_sheet') {
    const isCustom = (typeof DataService !== 'undefined' && DataService.hasActiveSheet && !DataService.isMasterSheet());
    const isMaster = (typeof DataService !== 'undefined' && DataService.isMasterSheet && DataService.isMasterSheet());
    const currentId = (typeof DataService !== 'undefined' && DataService.getActiveSheetId) ? DataService.getActiveSheetId() : '';
    const savedCustomId = (typeof DataService !== 'undefined' && DataService.getCustomSheetId) ? DataService.getCustomSheetId() : '';
    title = 'Google Sheet ផ្ទាល់ខ្លួន (Sheet Sync)';
    sub = 'ដំណើរការ Dashboard ដោយប្រើប្រាស់ទិន្នន័យរបស់កូនក្រុម';
    icon = 'file-spreadsheet';

    contentHTML = `
      <div class="space-y-3 select-none">
        <!-- Status Card -->
        <div class="p-3.5 rounded-2xl ${isCustom ? 'bg-indigo-500/10 border border-indigo-500/25' : (isMaster ? 'bg-blue-500/10 border border-blue-500/25' : 'bg-slate-500/10 border border-slate-500/25')} space-y-1.5">
          <div class="flex items-center justify-between">
            <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider">ស្ថានភាពទិន្នន័យបច្ចុប្បន្ន</span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold font-mono ${isCustom ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : (isMaster ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : 'bg-slate-500/20 text-slate-400 border border-slate-500/30')}">
              ${isMaster ? '🏢 Master Sheet (ស្តី ស្តើង)' : (isCustom ? '✅ Sheet ផ្ទាល់ខ្លួន (Custom)' : '⚠️ មិនទាន់ភ្ជាប់')}
            </span>
          </div>
          <p class="text-xs font-mono text-slate-200 truncate pt-0.5" title="${currentId}">
            ID: <span class="text-amber-300 font-bold">${currentId || 'គ្មាន'}</span>
          </p>
        </div>

        <!-- Input Box -->
        <div class="space-y-2 p-3.5 rounded-2xl bg-black/40 border border-white/10">
          <label class="block text-xs font-bold text-white">
            បិទភ្ជាប់ Google Sheet ID ឬ Link របស់អ្នក៖
          </label>
          <div class="relative">
            <input type="text" id="custom-sheet-input" value="${savedCustomId}" 
                   placeholder="https://docs.google.com/spreadsheets/d/.../edit" 
                   class="w-full text-xs font-mono bg-black/50 border border-white/10 rounded-xl p-3 pr-8 text-white focus:outline-none focus:border-indigo-500 transition">
            <button type="button" onclick="document.getElementById('custom-sheet-input').value = ''" 
                     class="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs">✕</button>
          </div>
          
          <div id="custom-sheet-status-box" class="min-h-[20px] pt-0.5"></div>

          <div class="grid grid-cols-2 gap-2 pt-1">
            <button onclick="testCustomGoogleSheetConnection()" 
                    class="py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-bold text-xs active:scale-95 transition flex items-center justify-center gap-1.5 shadow-sm">
              <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
              <span>តេស្តការតភ្ជាប់</span>
            </button>
            <button onclick="saveCustomGoogleSheetId()" 
                    class="py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs active:scale-95 transition flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/30">
              <i data-lucide="link" class="w-3.5 h-3.5"></i>
              <span>រក្សាទុក & ភ្ជាប់</span>
            </button>
          </div>

          ${isCustom ? `
            <button onclick="disconnectCustomSheet()" 
                    class="w-full mt-2 py-2 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 border border-rose-500/30 text-rose-300 font-bold text-xs active:scale-95 transition flex items-center justify-center gap-1.5">
              <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
              <span>ផ្តាច់ការតភ្ជាប់ Sheet (Disconnect)</span>
            </button>
          ` : (isMaster ? `
            <button onclick="disconnectCustomSheet()" 
                    class="w-full mt-2 py-2 rounded-xl bg-slate-700/50 hover:bg-slate-700 border border-white/10 text-slate-300 font-bold text-xs active:scale-95 transition flex items-center justify-center gap-1.5">
              <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
              <span>ចាកចេញពី Master Admin (Logout)</span>
            </button>
          ` : '')}
        </div>

        <!-- Guide for Members (Step by Step) -->
        <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2 text-xs">
          <h4 class="font-bold text-amber-400 flex items-center gap-1.5">
            <i data-lucide="info" class="w-4 h-4"></i>
            <span>របៀបបង្កើត Google Sheet ផ្ទាល់ខ្លួនសម្រាប់កូនក្រុម៖</span>
          </h4>
          <ol class="space-y-1.5 text-slate-300 text-[11px] list-decimal list-inside leading-relaxed pl-1">
            <li>បើក <strong>Master Google Sheet</strong> របស់ក្រុមការងារ។</li>
            <li>ចុច Menu <strong>File (ឯកសារ)</strong> ➔ ជ្រើសរើស <strong>Make a copy (បង្កើតច្បាប់ចម្លង)</strong> ទៅកាន់ Google Drive ផ្ទាល់ខ្លួនរបស់អ្នក។</li>
            <li>ចុចប៊ូតុង <strong>Share (ចែករំលែក)</strong> ខាងលើស្តាំ ➔ ប្តូរទៅជា <strong>«Anyone with the link can view (អ្នកមានតំណភ្ជាប់អាចមើលបាន)»</strong>។</li>
            <li>ចម្លងយក Link នៃ Sheet នោះ មកបិទភ្ជាប់ក្នុងប្រអប់ខាងលើ រួចចុច <strong>«រក្សាទុក & ភ្ជាប់»</strong> ជាការស្រេច!</li>
          </ol>
        </div>
      </div>
    `;
  } else if (type === 'privacy') {
    const p = getProfileData();
    title = 'ឯកជនភាព (Privacy)';
    sub = 'សិទ្ធិគ្រប់គ្រងការបង្ហាញព័ត៌មានផ្ទាល់ខ្លួន';
    icon = 'shield-check';
    const items = [
      { key: 'showWork', label: '💼 បង្ហាញកន្លែងធ្វើការ (Work)' },
      { key: 'showStudy', label: '🎓 បង្ហាញកន្លែងសិក្សា (Study)' },
      { key: 'showLive', label: '🏠 បង្ហាញទីកន្លែងរស់នៅ (Live)' },
      { key: 'showFrom', label: '📍 បង្ហាញស្រុកកំណើត (From)' },
      { key: 'showStatus', label: '❤️ បង្ហាញស្ថានភាព (Status)' },
      { key: 'showBirth', label: '🎂 បង្ហាញថ្ងៃខែឆ្នាំកំណើត (Birthday)' },
      { key: 'showPhone', label: '📞 បង្ហាញលេខទូរសព្ទ (Phone)' }
    ];
    contentHTML = `
      <p class="text-[11px] text-slate-400 leading-relaxed mb-2">
        បងអាចបិទ ឬបើកសិទ្ធិបង្ហាញព័ត៌មានផ្ទាល់ខ្លួននៅលើផ្ទាំង Profile Dashboard បានតាមចិត្ត៖
      </p>
      <div class="space-y-2">
        ${items.map(it => {
          const isOn = p.privacy[it.key] !== false;
          return `
            <div onclick="togglePrivacyField('${it.key}')" 
                 class="p-3 rounded-2xl bg-black/30 border border-white/5 flex items-center justify-between cursor-pointer">
              <span class="text-xs font-semibold text-white">${it.label}</span>
              <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${isOn ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-white/5 text-slate-400 border border-white/10'}">
                ${isOn ? 'បង្ហាញ (Public)' : 'លាក់ទុក (Only Me)'}
              </span>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else if (type === 'telegram_edit') {
    const saved = localStorage.getItem('sd_telegram_group_url') || '';
    title = 'ជជែក (Link Telegram Group)';
    sub = 'កែដាក់ Link Telegram Group ខ្លួនឯង';
    icon = 'send';
    contentHTML = `
      <div class="space-y-2.5">
        <label class="block text-xs text-slate-300 font-semibold">បញ្ចូល Link Telegram Group របស់ក្រុម៖</label>
        <input type="url" id="tg-group-url-input" value="${saved}" 
               placeholder="https://t.me/+..." 
               class="w-full text-xs font-mono bg-black/40 border border-white/10 rounded-xl p-2.5 text-white focus:outline-none focus:border-sky-500">
        <div class="flex items-center gap-2 pt-2">
          <button onclick="saveTelegramGroupUrl(false)" 
                  class="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs transition active:scale-95">
            រក្សាទុក Link
          </button>
          <button onclick="saveTelegramGroupUrl(true)" 
                  class="flex-1 py-2.5 rounded-xl accent-solid-btn font-bold text-xs transition active:scale-95">
            រក្សាទុក & បើក Group
          </button>
        </div>
      </div>
    `;
  } else if (type === 'book_notes' || type === 'book' || type === 'note') {
    const notes = getProfileNotes();
    const activeTab = (type === 'note') ? 'notes' : (type === 'book' ? 'books' : (window._activeBookNotesTab || 'books'));
    window._activeBookNotesTab = activeTab;

    title = 'សៀវភៅ & កំណត់ត្រា';
    sub = 'គតិបណ្ឌិតជីវិត និងកត់ត្រាផែនការប្រចាំថ្ងៃ';
    icon = 'book-marked';

    contentHTML = `
      <div class="space-y-3">
        <!-- iOS Style Segmented Control Tab Switcher -->
        <div class="flex items-center p-1 rounded-2xl bg-black/40 border border-white/10 select-none">
          <button onclick="switchBookNotesTab('books')" 
                  class="flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${activeTab === 'books' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'text-slate-400 hover:text-white'}">
            <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
            <span>សៀវភៅ (Books)</span>
          </button>
          <button onclick="switchBookNotesTab('notes')" 
                  class="flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${activeTab === 'notes' ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' : 'text-slate-400 hover:text-white'}">
            <i data-lucide="notebook-pen" class="w-3.5 h-3.5"></i>
            <span>កំណត់ត្រា (${notes.length})</span>
          </button>
        </div>

        <!-- Section 1: Books (Life Lessons & Wisdom) -->
        <div id="book-notes-panel-books" class="${activeTab === 'books' ? '' : 'hidden'} space-y-2.5">
          <div class="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/25">
            <h4 class="text-xs font-bold text-emerald-400 mb-1">📖 ជំពូកទី ១ ៖ ជីវិតជាការរៀនសូត្រមិនចេះចប់</h4>
            <p class="text-xs text-slate-200 leading-relaxed">
              ការរៀនសូត្ររាល់ថ្ងៃ ទោះត្រឹមតែ ១% ក៏ដោយ នឹងធ្វើឱ្យយើងរីកចម្រើន gấp ៣៧ ដងក្នុងរយៈពេល ១ ឆ្នាំ។ វិន័យ និងភាពទៀងទាត់ គឺជាកូនសោរនៃភាពជោគជ័យ។
            </p>
          </div>
          <div class="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/25">
            <h4 class="text-xs font-bold text-amber-400 mb-1">💡 ជំពូកទី ២ ៖ សិល្បៈនៃការដឹកនាំ និងបម្រើអតិថិជន</h4>
            <p class="text-xs text-slate-200 leading-relaxed">
              អតិថិជនមិនត្រឹមតែទិញផលិតផលទេ តែគាត់ទិញទំនុកចិត្ត និងការយកចិត្តទុកដាក់របស់យើង។
            </p>
          </div>
          <div class="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/25">
            <h4 class="text-xs font-bold text-sky-400 mb-1">🚀 ជំពូកទី ៣ ៖ ការគ្រប់គ្រងពេលវេលា និងគោលដៅ</h4>
            <p class="text-xs text-slate-200 leading-relaxed">
              ផ្តោតអារម្មណ៍លើកិច្ចការសំខាន់បំផុតចំនួន ២០% ដែលបង្កើតផល ៨០% ដល់អាជីវកម្ម និងជីវិតរបស់អ្នក។
            </p>
          </div>
        </div>

        <!-- Section 2: Notes & Plans (Interactive Add, List, Delete) -->
        <div id="book-notes-panel-notes" class="${activeTab === 'notes' ? '' : 'hidden'} space-y-3">
          <div class="space-y-2 p-3 rounded-2xl bg-black/30 border border-white/10">
            <input type="text" id="new-note-title" placeholder="ចំណងជើងផែនការ..." 
                   class="w-full text-xs font-bold bg-black/40 border border-white/10 rounded-xl p-2 text-white focus:outline-none">
            <textarea id="new-note-text" rows="2" placeholder="សរសេរខ្លឹមសារផែនការ..." 
                      class="w-full text-xs bg-black/40 border border-white/10 rounded-xl p-2 text-white focus:outline-none"></textarea>
            <button onclick="addProfileNote()" class="w-full py-2 rounded-xl accent-solid-btn text-xs font-bold active:scale-95 transition">
              + បន្ថែមផែនការថ្មី
            </button>
          </div>
          <div class="space-y-2 max-h-60 overflow-y-auto no-scrollbar">
            ${notes.map(n => `
              <div class="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-start justify-between gap-2">
                <div>
                  <h5 class="text-xs font-bold text-white">${n.title}</h5>
                  <p class="text-[11px] text-slate-300 mt-0.5 leading-relaxed">${n.text}</p>
                  <span class="text-[9px] text-slate-500 font-mono mt-1 block">${n.date}</span>
                </div>
                <button onclick="deleteProfileNote(${n.id})" class="text-rose-400 hover:text-rose-300 text-xs px-1.5">✕</button>
              </div>
            `).join('') || `<p class="text-xs text-slate-400 text-center py-4">មិនទាន់មានផែនការទេ</p>`}
          </div>
        </div>
      </div>
    `;
  } else if (type === 'members') {
    const d = DataService.data;
    const sales = (d && Array.isArray(d.personalSales)) ? d.personalSales : [];
    
    // Group sales by seller
    const sellerStats = {};
    sales.forEach(s => {
      const sName = (s.seller || '').trim();
      if (!sName) return;
      if (!sellerStats[sName]) {
        sellerStats[sName] = { boxes: 0, orders: 0, totalAmount: 0 };
      }
      sellerStats[sName].boxes += Number(s.totalBoxQty || s.boxes || 0);
      sellerStats[sName].orders += 1;
      sellerStats[sName].totalAmount += Number(s.totalAmount || s.price || 0);
    });

    const isKm = (appState.language !== 'en');
    title = isKm ? 'សមាជិកក្រុមអ្នកលក់' : 'Team Sales Members';
    sub = isKm ? 'បញ្ជីឈ្មោះអ្នកលក់ និងទិន្នន័យការងារ' : 'Sales roster & achievements';
    icon = 'contact-round';

    contentHTML = `
      <div class="space-y-2">
        <p class="text-[11px] text-slate-400 mb-2 px-1">ចុចលើឈ្មោះសមាជិកដើម្បីមើល «កាតទិន្នន័យសមាជិក» លម្អិត៖</p>
        ${BOSTAR_TEAM_SELLERS.map((seller, idx) => {
          const stats = sellerStats[seller.km] || sellerStats[seller.en] || { boxes: 0, orders: 0, totalAmount: 0 };
          const goal = 100;
          const percent = goal > 0 ? Math.min(100, Math.round((stats.boxes / goal) * 100)) : 0;
          return `
            <div onclick="openMemberDetailCard('${seller.km}')" 
                 class="p-3 rounded-2xl bg-black/30 hover:bg-white/5 border border-white/10 hover:border-orange-500/30 flex items-center justify-between cursor-pointer active:scale-98 transition group">
              <div class="flex items-center gap-2.5 min-w-0">
                <span class="w-8 h-8 rounded-xl bg-orange-500/15 border border-orange-500/25 text-orange-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                  ${String(idx + 1).padStart(2, '0')}
                </span>
                <div class="min-w-0">
                  <div class="flex items-center gap-1.5 truncate">
                    <span class="text-xs font-bold text-white group-hover:text-orange-400 transition truncate">${seller.km}</span>
                    <span class="text-[10px] text-slate-400 font-mono">(${seller.en})</span>
                  </div>
                  <span class="text-[10px] text-slate-400 font-mono">${stats.orders} កុម្ម៉ង់ | គោលដៅ: ${goal} ប្រអប់</span>
                </div>
              </div>
              <div class="text-right shrink-0 pl-2">
                <span class="font-mono font-bold text-xs text-emerald-400 block">${stats.boxes} ប្រអប់</span>
                <span class="text-[9.5px] text-slate-400 font-mono">${percent}%</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  } else if (type === 'feedback_support' || type === 'feedback' || type === 'support' || type === 'help') {
    title = 'មតិកែលម្អ & ជំនួយបច្ចេកទេស';
    sub = 'ផ្ញើមតិកែលម្អប្រព័ន្ធ ឬទាក់ទង Telegram បងស្តើងផ្ទាល់';
    icon = 'message-square-heart';
    contentHTML = `
      <div class="space-y-3 select-none text-xs">
        <!-- Telegram Contact Card (Highlight Telegram បងស្តើង) -->
        <div class="p-3.5 rounded-2xl bg-gradient-to-r from-sky-500/15 via-blue-500/10 to-indigo-500/15 border border-sky-500/30 space-y-2.5">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/30 shrink-0">
                <i data-lucide="send" class="w-4 h-4"></i>
              </div>
              <div>
                <h4 class="font-bold text-xs text-white">ទំនាក់ទំនង Telegram ផ្ទាល់</h4>
                <p class="text-[10px] text-sky-300 font-mono mt-0.5">@sdey_sdoeung</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 text-[9px] font-bold font-mono">
              ONLINE
            </span>
          </div>
          <p class="text-[11px] text-slate-300 leading-relaxed">
            លោកគ្រូ / អ្នកគ្រូ ឬសមាជិកក្រុមការងារ មានសំណូមពរ បញ្ហាបច្ចេកទេស ឬចង់កែលម្អប្រព័ន្ធ អាចឆាតទាក់ទងមកកាន់ <strong>បងស្តើង</strong> ដោយផ្ទាល់បានគ្រប់ពេលវេលា។
          </p>
          <a href="https://t.me/sdey_sdoeung" target="_blank" 
             class="w-full py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 active:scale-95 transition">
            <i data-lucide="send" class="w-4 h-4"></i>
            <span>បើកឆាត Telegram បងស្តើង 🚀</span>
          </a>
        </div>

        <!-- Feedback Form Box -->
        <div class="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2.5">
          <label class="block text-xs font-bold text-white flex items-center gap-1.5">
            <i data-lucide="message-square" class="w-3.5 h-3.5 text-amber-400"></i>
            <span>ផ្ញើសារមតិយោបល់ ឬសំណូមពរ៖</span>
          </label>
          <textarea id="feedback-text-input" rows="3" placeholder="សូមសរសេរមតិយោបល់ ឬសំណូមពររបស់អ្នកនៅទីនេះ..." 
                    class="w-full text-xs bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500 leading-relaxed"></textarea>
          <button onclick="submitUserFeedback()" 
                  class="w-full py-2.5 rounded-xl accent-solid-btn text-xs font-bold active:scale-95 transition flex items-center justify-center gap-1.5 shadow-md">
            <i data-lucide="check" class="w-3.5 h-3.5"></i>
            <span>ផ្ញើមតិយោបល់</span>
          </button>
        </div>
      </div>
    `;
  } else if (type === 'logout') {
    title = 'ចាកចេញ (Clean Log Out)';
    sub = 'ជម្រះទិន្នន័យ និងគណនីចេញពីឧបករណ៍';
    icon = 'log-out';
    contentHTML = `
      <div class="space-y-3.5 text-xs select-none">
        <div class="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/25 text-slate-200 leading-relaxed space-y-2">
          <div class="flex items-center gap-2 text-rose-400 font-bold">
            <i data-lucide="alert-triangle" class="w-4 h-4 shrink-0"></i>
            <span>ជម្រះទិន្នន័យទាំងអស់ (Clean Logout)</span>
          </div>
          <p class="text-[11px] text-slate-300 leading-relaxed">
            មុខងារនេះនឹងលុបសម្អាត Cache, LocalStorage, Google Sheet ID, Profile និងទិន្នន័យ Offline ទាំងអស់ចេញពីឧបករណ៍នេះ ដើម្បីឱ្យកម្មវិធីក្លាយជាទំព័រថ្មីស្រឡាង សម្រាប់ឱ្យសមាជិកក្រុមផ្សេងអាច Login ភ្ជាប់ Google Sheet របស់គេវិញដោយសុវត្ថិភាព។
          </p>
        </div>
        <div class="space-y-2 pt-1">
          <button onclick="performCleanLogout()" 
                  class="w-full py-3 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs active:scale-95 transition flex items-center justify-center gap-2 shadow-lg shadow-rose-600/30">
            <i data-lucide="log-out" class="w-4 h-4"></i>
            <span>ចាកចេញ & ជម្រះទិន្នន័យទាំងអស់ (Clean Logout) 🚪</span>
          </button>
          <button onclick="closeProfileSubModal(); lockAppNow();" 
                  class="w-full py-2.5 rounded-2xl bg-white/10 hover:bg-white/15 text-slate-300 hover:text-white font-semibold text-xs active:scale-95 transition flex items-center justify-center gap-2">
            <i data-lucide="lock" class="w-3.5 h-3.5"></i>
            <span>គ្រាន់តែចាក់សោអេក្រង់ (Lock Screen)</span>
          </button>
        </div>
      </div>
    `;
  }

  header.innerHTML = `
    <div class="flex items-center gap-2.5">
      <div class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 shrink-0">
        <i data-lucide="${icon}" class="w-4 h-4"></i>
      </div>
      <div>
        <h3 class="font-bold text-sm text-white leading-tight">${title}</h3>
        <p class="text-[10px] text-slate-400 mt-0.5">${sub}</p>
      </div>
    </div>
    <button onclick="closeProfileSubModal()" 
            class="py-1 px-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-white/5 border border-white/10 flex items-center gap-1 active:scale-95 transition shadow-sm">
      <i data-lucide="chevron-left" class="w-3.5 h-3.5 text-orange-400"></i>
      <span>ត្រឡប់</span>
    </button>
  `;
  body.innerHTML = contentHTML;

  document.getElementById('profile-sub-modal')?.classList?.remove('hidden');
  setDockVisible(false);
  if (window.lucide) window.lucide.createIcons();
}

// ==========================================
// Full-Screen Bostar Team Members Directory Modal (Spacious like Customers/Expenses)
// ==========================================
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
window.escapeHtml = escapeHtml;

function toggleTeamMembersSearch() {
  const normalNav = document.getElementById('team-members-normal-nav');
  const searchBar = document.getElementById('team-members-search-bar');
  const input = document.getElementById('team-members-search-input');
  if (!normalNav || !searchBar) return;
  const isSearchOpen = !searchBar.classList.contains('hidden');
  if (isSearchOpen) {
    searchBar.classList.add('hidden');
    normalNav.classList.remove('hidden');
    if (input) input.value = '';
    renderTeamMembersList();
  } else {
    normalNav.classList.add('hidden');
    searchBar.classList.remove('hidden');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 80);
    }
  }
}

function clearTeamMembersSearch() {
  const input = document.getElementById('team-members-search-input');
  if (input) {
    input.value = '';
    input.focus();
    renderTeamMembersList();
  }
}

function openTeamMembersModal(memberNameToOpen = null) {
  closeProfileDrawer();
  const subModal = document.getElementById('profile-sub-modal');
  if (subModal) subModal.classList.add('hidden');

  const modal = document.getElementById('team-members-modal');
  if (!modal) return;

  const normalNav = document.getElementById('team-members-normal-nav');
  const searchBar = document.getElementById('team-members-search-bar');
  const searchInput = document.getElementById('team-members-search-input');
  if (normalNav) normalNav.classList.remove('hidden');
  if (searchBar) searchBar.classList.add('hidden');
  if (searchInput) searchInput.value = '';

  const listView = document.getElementById('team-members-list-view');
  const detailView = document.getElementById('team-members-detail-view');
  if (listView) listView.classList.remove('hidden');
  if (detailView) detailView.classList.add('hidden');

  modal.classList.remove('hidden');
  setDockVisible(true);

  try {
    renderTeamMembersList();
  } catch (err) {
    console.error('Error rendering team members list:', err);
  }

  const listEl = document.getElementById('team-members-list');
  if (listEl && typeof hookScrollableForDock === 'function') {
    hookScrollableForDock(listEl, false);
  }

  if (memberNameToOpen) {
    try {
      openTeamMemberDetail(memberNameToOpen);
    } catch (err) {
      console.error('Error opening team member detail:', err);
    }
  }

  if (window.lucide) window.lucide.createIcons();
  if (navigator.vibrate) try { navigator.vibrate(12); } catch (_) {}
}

function closeTeamMembersModal() {
  const modal = document.getElementById('team-members-modal');
  if (modal) modal.classList.add('hidden');
  setDockVisible(true);
}

function backToTeamMembersList() {
  const listView = document.getElementById('team-members-list-view');
  const detailView = document.getElementById('team-members-detail-view');
  if (listView) listView.classList.remove('hidden');
  if (detailView) detailView.classList.add('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function renderTeamMembersList() {
  const query = (document.getElementById('team-members-search-input')?.value || '').trim().toLowerCase();
  const countBadge = document.getElementById('team-members-count-badge');
  const summaryStrip = document.getElementById('team-members-summary-strip');
  const listEl = document.getElementById('team-members-list');
  if (!listEl) return;

  const d = (typeof DataService !== 'undefined' && DataService.data) ? DataService.data : ((window.DataService && window.DataService.data) ? window.DataService.data : null);
  const sales = (d && Array.isArray(d.personalSales)) ? d.personalSales : [];

  // Group sales by seller name (supporting both km and en)
  const sellerStats = {};
  let totalTeamBoxes = 0;
  let totalTeamOrders = 0;
  let totalTeamRev = 0;

  sales.forEach(s => {
    const sName = (s.seller || '').trim();
    if (!sName) return;
    if (!sellerStats[sName]) {
      sellerStats[sName] = { boxes: 0, orders: 0, totalAmount: 0 };
    }
    const b = Number(s.totalBoxQty || s.boxes || 0);
    const amt = Number(s.totalAmount || s.price || 0);
    sellerStats[sName].boxes += b;
    sellerStats[sName].orders += 1;
    sellerStats[sName].totalAmount += amt;
    totalTeamBoxes += b;
    totalTeamOrders += 1;
    totalTeamRev += amt;
  });

  const filtered = BOSTAR_TEAM_SELLERS.filter(seller => {
    if (!query) return true;
    return seller.km.toLowerCase().includes(query) || seller.en.toLowerCase().includes(query);
  });

  if (countBadge) {
    countBadge.textContent = `(${filtered.length} នាក់)`;
  }

  if (summaryStrip) {
    summaryStrip.innerHTML = `
      <div class="p-2 rounded-xl bg-black/30 border border-white/5 flex flex-col justify-between">
        <span class="text-[10px] text-slate-400 font-semibold truncate">👥 សមាជិក</span>
        <span class="font-mono text-white font-bold text-xs sm:text-sm mt-0.5">${filtered.length} <span class="text-[9.5px] font-sans font-normal text-slate-400">នាក់</span></span>
      </div>
      <div class="p-2 rounded-xl bg-black/30 border border-white/5 flex flex-col justify-between">
        <span class="text-[10px] text-slate-400 font-semibold truncate">📦 លក់សរុប</span>
        <span class="font-mono text-emerald-400 font-bold text-xs sm:text-sm mt-0.5">${formatInt(totalTeamBoxes)} <span class="text-[9.5px] font-sans font-normal text-slate-400">ប្រអប់</span></span>
      </div>
      <div class="p-2 rounded-xl bg-black/30 border border-white/5 flex flex-col justify-between">
        <span class="text-[10px] text-slate-400 font-semibold truncate">🧾 កុម្ម៉ង់សរុប</span>
        <span class="font-mono text-sky-400 font-bold text-xs sm:text-sm mt-0.5">${formatInt(totalTeamOrders)} <span class="text-[9.5px] font-sans font-normal text-slate-400">កុម្ម៉ង់</span></span>
      </div>
    `;
  }

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div class="py-12 text-center select-none">
        <div class="w-12 h-12 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-500 mb-2">
          <i data-lucide="search-x" class="w-6 h-6"></i>
        </div>
        <p class="text-xs text-slate-400 font-medium">រកមិនឃើញសមាជិកឈ្មោះ "${escapeHtml(query)}" ឡើយ</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  listEl.innerHTML = filtered.map((seller, idx) => {
    const stats = sellerStats[seller.km] || sellerStats[seller.en] || { boxes: 0, orders: 0, totalAmount: 0 };
    const goal = 100;
    const percent = goal > 0 ? Math.min(100, Math.round((stats.boxes / goal) * 100)) : 0;

    return `
      <div onclick="openTeamMemberDetail('${escapeHtml(seller.km)}')" 
           class="p-3.5 rounded-2xl ios-glass-card border border-white/10 hover:border-orange-500/40 flex items-center justify-between cursor-pointer active:scale-[0.99] transition group shadow-sm">
        <div class="flex items-center gap-3 min-w-0">
          <span class="w-8 h-8 rounded-xl bg-orange-500/15 border border-orange-500/25 text-orange-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
            ${String(idx + 1).padStart(2, '0')}
          </span>
          <div class="min-w-0">
            <div class="flex items-center gap-1.5 truncate">
              <span class="text-xs sm:text-sm font-bold text-white group-hover:text-orange-400 transition truncate">${seller.km}</span>
              <span class="text-[10px] text-slate-400 font-mono">(${seller.en})</span>
            </div>
            <div class="flex items-center gap-2 mt-0.5">
              <span class="text-[10px] text-slate-400 font-mono">${stats.orders} កុម្ម៉ង់</span>
              <span class="text-[9px] text-slate-500">•</span>
              <span class="text-[10px] text-amber-400/90 font-mono">គោលដៅ: ${goal} ប្រអប់</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2.5 shrink-0 pl-2">
          <div class="text-right">
            <span class="font-mono font-bold text-xs sm:text-sm text-emerald-400 block">${stats.boxes} <span class="text-[9.5px] font-sans font-normal text-slate-400">ប្រអប់</span></span>
            <div class="flex items-center justify-end gap-1 mt-0.5">
              <div class="w-12 h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div class="h-full bg-gradient-to-r from-orange-500 to-emerald-400 rounded-full" style="width: ${percent}%"></div>
              </div>
              <span class="text-[9.5px] text-slate-400 font-mono">${percent}%</span>
            </div>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-0.5 transition"></i>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) window.lucide.createIcons();
}

function openTeamMemberDetail(sellerKmName) {
  const seller = BOSTAR_TEAM_SELLERS.find(s => s.km === sellerKmName || s.en === sellerKmName) || { km: sellerKmName, en: getSellerLatinName(sellerKmName) };
  const d = (typeof DataService !== 'undefined' && DataService.data) ? DataService.data : ((window.DataService && window.DataService.data) ? window.DataService.data : null);
  const sales = (d && Array.isArray(d.personalSales)) ? d.personalSales.filter(s => (s.seller || '').trim() === seller.km || (s.seller || '').trim() === seller.en) : [];

  const totalBoxes = sales.reduce((sum, s) => sum + Number(s.totalBoxQty || s.boxes || 0), 0);
  const totalRevenue = sales.reduce((sum, s) => sum + Number(s.totalAmount || s.price || 0), 0);
  const totalOrders = sales.length;
  const goal = 100;
  const percent = Math.min(100, Math.round((totalBoxes / goal) * 100));

  const modal = document.getElementById('team-members-modal');
  if (modal && modal.classList.contains('hidden')) {
    modal.classList.remove('hidden');
    setDockVisible(true);
  }

  const listView = document.getElementById('team-members-list-view');
  const detailView = document.getElementById('team-members-detail-view');
  if (!detailView) return;

  if (listView) listView.classList.add('hidden');
  detailView.classList.remove('hidden');
  detailView.scrollTop = 0;

  detailView.innerHTML = `
    <!-- Top Action Bar for Detail View -->
    <div class="flex items-center justify-between pb-1">
      <button onclick="backToTeamMembersList()" 
              class="px-2.5 py-1 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 flex items-center gap-1.5 active:scale-95 transition shadow-sm">
        <i data-lucide="arrow-left" class="w-3.5 h-3.5 text-orange-400"></i>
        <span>បញ្ជីសមាជិក</span>
      </button>
      <span class="text-[11px] font-bold text-amber-400 font-mono">ID: ${escapeHtml(seller.en)}</span>
    </div>

    <!-- Member Identity Header Card -->
    <div class="p-4 rounded-3xl bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent border border-orange-500/30 flex items-center gap-3.5 shadow-lg">
      <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-orange-500/25 shrink-0">
        ${seller.km.slice(0, 2)}
      </div>
      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-2">
          <h4 class="font-bold text-sm sm:text-base text-white truncate">${seller.km}</h4>
          <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-[9px] font-bold">ACTIVE</span>
        </div>
        <p class="text-[11px] text-slate-300 font-mono mt-0.5">${seller.en}</p>
        <span class="inline-block mt-1 text-[10px] text-amber-300 font-medium">✨ អ្នកលក់ឆ្នើម BostarGroup</span>
      </div>
    </div>

    <!-- Performance KPI Grid -->
    <div class="grid grid-cols-3 gap-2">
      <div class="p-3 rounded-2xl bg-black/40 border border-white/10 text-center space-y-1">
        <span class="text-[10px] text-slate-400 block font-semibold">📦 ប្រអប់លក់</span>
        <span class="font-mono font-bold text-base text-emerald-400 block">${totalBoxes}</span>
        <span class="text-[9px] text-slate-500 font-mono">ប្រអប់</span>
      </div>
      <div class="p-3 rounded-2xl bg-black/40 border border-white/10 text-center space-y-1">
        <span class="text-[10px] text-slate-400 block font-semibold">🧾 កុម្ម៉ង់</span>
        <span class="font-mono font-bold text-base text-sky-400 block">${totalOrders}</span>
        <span class="text-[9px] text-slate-500 font-mono">ជោគជ័យ</span>
      </div>
      <div class="p-3 rounded-2xl bg-black/40 border border-white/10 text-center space-y-1">
        <span class="text-[10px] text-slate-400 block font-semibold">💵 ទឹកប្រាក់សរុប</span>
        <span class="font-mono font-bold text-base text-amber-400 block">$${totalRevenue.toFixed(0)}</span>
        <span class="text-[9px] text-slate-500 font-mono">USD</span>
      </div>
    </div>

    <!-- Goal Progress Bar -->
    <div class="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
      <div class="flex items-center justify-between text-[11px]">
        <span class="text-slate-300 font-semibold flex items-center gap-1.5">
          <i data-lucide="target" class="w-3.5 h-3.5 text-orange-400"></i>
          <span>គោលដៅប្រចាំខែ (${percent}%)</span>
        </span>
        <span class="font-mono font-bold text-orange-400">${totalBoxes} / ${goal} ប្រអប់</span>
      </div>
      <div class="w-full h-2 rounded-full bg-white/10 overflow-hidden">
        <div class="h-full bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-500" style="width: ${percent}%"></div>
      </div>
    </div>

    <!-- Recent Orders by this Member -->
    <div class="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
      <span class="text-[11px] font-bold text-slate-300 flex items-center gap-1.5 mb-1">
        <i data-lucide="history" class="w-3.5 h-3.5 text-sky-400"></i>
        <span>ប្រវត្តិការលក់ចុងក្រោយ (${sales.length} កុម្ម៉ង់)</span>
      </span>
      ${sales.length === 0 ? `
        <p class="text-[11px] text-slate-400 text-center py-5">មិនទាន់មានទិន្នន័យការលក់ជាក់ស្តែងក្នុង Google Sheet នៅឡើយទេ</p>
      ` : `
        <div class="space-y-1.5 max-h-64 overflow-y-auto no-scrollbar">
          ${sales.slice(0, 15).map(o => `
            <div class="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between text-xs">
              <div>
                <span class="font-semibold text-white block text-[11px]">${escapeHtml(o.customer || o.customerName || 'អតិថិជន')}</span>
                <span class="text-[9.5px] text-slate-400 font-mono">${o.date || o.orderDate || ''} • ${escapeHtml(o.delivery || 'ដឹកជញ្ជូន')}</span>
              </div>
              <div class="text-right">
                <span class="font-mono font-bold text-emerald-400 text-xs">${o.totalBoxQty || o.boxes || 0} ប្រអប់</span>
                <span class="text-[9.5px] text-amber-400 font-mono block">$${Number(o.totalAmount || o.price || 0).toFixed(2)}</span>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();
}

function openMemberDetailCard(sellerKmName) {
  openTeamMemberDetail(sellerKmName);
}

function performCleanLogout() {
  const confirmed = confirm('⚠️ តើអ្នកពិតជាចង់ចាកចេញ (Log Out) និងជម្រះទិន្នន័យទាំងអស់មែនទេ?\n\nរាល់ Google Sheet ID, ទិន្នន័យ Offline, និង Profile នឹងត្រូវលុបសម្អាតដើម្បីឱ្យសមាជិកផ្សេងអាចចូលប្រើបាន។');
  if (!confirmed) return;
  try {
    localStorage.clear();
    sessionStorage.clear();
  } catch (e) {
    console.warn('Logout clear error:', e);
  }
  showToastNotification('បានចាកចេញ និងជម្រះទិន្នន័យជោគជ័យ! 👋');
  setTimeout(() => {
    window.location.reload();
  }, 400);
}

// ==========================================
// iOS Settings Search Engine (Profile & Settings)
// ==========================================
const PROFILE_SETTINGS_SEARCH_ITEMS = [
  // Profile Dashboard Items
  {
    id: 'customers',
    group: 'Profile Dashboard',
    groupKm: 'មុខងារចម្បង',
    title: 'បញ្ជីអតិថិជនទាំងអស់',
    titleEn: 'Customer Directory',
    subtitle: 'Profile > បញ្ជីអតិថិជនលម្អិត & ប្រវត្តិកុម្ម៉ង់',
    subtitleEn: 'Profile > All Customer Directory & History',
    icon: 'users',
    iconBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    keywords: 'customer custommer all customers បញ្ជី អតិថិជន ទិញ ទំនិញ លក់ ប្រវត្តិ',
    action: () => { closeProfileSettingsSearch(); openAllCustomersModal(); }
  },
  {
    id: 'note',
    group: 'Profile Dashboard',
    groupKm: 'មុខងារចម្បង',
    title: 'កំណត់ត្រាផែនការ',
    titleEn: 'Notes & Plans',
    subtitle: 'Profile > កត់ត្រាផែនការ និងគោលដៅប្រចាំថ្ងៃ/ខែ',
    subtitleEn: 'Profile > Daily and Monthly Goals',
    icon: 'file-text',
    iconBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    keywords: 'note notes plan plans ផែនការ គោលដៅ កត់ត្រា note goal',
    action: () => { closeProfileSettingsSearch(); openProfileSubModal('note'); }
  },
  {
    id: 'book',
    group: 'Profile Dashboard',
    groupKm: 'មុខងារចម្បង',
    title: 'សៀវភៅ',
    titleEn: 'Life & Learning',
    subtitle: 'Profile > មេរៀន បទពិសោធន៍ និងការអាន',
    subtitleEn: 'Profile > Reading, Lessons & Growth',
    icon: 'book-open',
    iconBg: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
    keywords: 'book read reading learn learning សៀវភៅ រៀន មេរៀន',
    action: () => { closeProfileSettingsSearch(); openProfileSubModal('book'); }
  },
  {
    id: 'members',
    group: 'Profile Dashboard',
    groupKm: 'មុខងារចម្បង',
    title: 'សមាជិកក្រុម',
    titleEn: 'Team Members',
    subtitle: 'Profile > បញ្ជីសមាជិកក្រុម និងតួនាទី',
    subtitleEn: 'Profile > Team Members and Roles',
    icon: 'contact',
    iconBg: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
    keywords: 'member members list សមាជិក ក្រុម ថ្នាក់ដឹកនាំ leader',
    action: () => { closeProfileSettingsSearch(); openTeamMembersModal(); }
  },
  {
    id: 'attendance',
    group: 'Profile Dashboard',
    groupKm: 'មុខងារចម្បង',
    title: 'កត់ត្រាវត្តមាន',
    titleEn: 'Attendance Tracker',
    subtitle: 'Profile > កត់ត្រាម៉ោងចូល/ចេញ និងប្រតិទិនវត្តមាន (CheckinMe)',
    subtitleEn: 'Profile > Daily Check-in / Out & Attendance Matrix',
    icon: 'fingerprint',
    iconBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    keywords: 'attendance checkin checkout time clock matrix វត្តមាន ចូលធ្វើការ ចេញធ្វើការ ម៉ោង កត់ត្រា checkinme',
    action: () => { closeProfileSettingsSearch(); openAttendanceModal(); }
  },
  {
    id: 'telegram',
    group: 'Profile Dashboard',
    groupKm: 'មុខងារចម្បង',
    title: 'ទំនាក់ទំនង',
    titleEn: 'Contact & Chat',
    subtitle: 'Profile > ចូលទៅកាន់គ្រុបតេឡេក្រាមក្រុម (ទំនាក់ទំនង)',
    subtitleEn: 'Profile > Team Telegram Group & Chat',
    icon: 'send',
    iconBg: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    keywords: 'telegram chat group link contact ទំនាក់ទំនង ជជែក តេឡេក្រាម គ្រុប',
    action: () => { closeProfileSettingsSearch(); handleTelegramGroupClick(); }
  },
  {
    id: 'qr',
    group: 'Profile Dashboard',
    groupKm: 'មុខងារចម្បង',
    title: 'កូដទទួលប្រាក់',
    titleEn: 'Payment QR',
    subtitle: 'Profile > ស្កេនរូបភាព QR ទទួលប្រាក់',
    subtitleEn: 'Profile > Payment Receive QR Codes',
    icon: 'qr-code',
    iconBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    keywords: 'qr qrcode photo bank payment ទទួលប្រាក់ គណនី ស្កេន',
    action: () => { closeProfileSettingsSearch(); openProfileSubModal('qr'); }
  },
  {
    id: 'edit_profile',
    group: 'Profile Dashboard',
    groupKm: 'មុខងារចម្បង',
    title: 'ព័ត៌មានផ្ទាល់ខ្លួន',
    titleEn: 'Personal Profile',
    subtitle: 'Profile > ឈ្មោះ, លេខទូរស័ព្ទ, គណនីធនាគារ',
    subtitleEn: 'Profile > Name, Phone, Bank Account',
    icon: 'user-cog',
    iconBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    keywords: 'edit profile user info កែប្រែ ព័ត៌មាន ឈ្មោះ ទូរស័ព្ទ',
    action: () => { closeProfileSettingsSearch(); openEditProfileModal(); }
  },
  {
    id: 'security_pin',
    group: 'Settings / ការកំណត់',
    groupKm: 'ការកំណត់',
    title: 'លេខកូដសម្ងាត់',
    titleEn: 'Security PIN',
    subtitle: 'Settings > ប្តូរលេខកូដសុវត្ថិភាព ៤ ខ្ទង់',
    subtitleEn: 'Settings > Change 4-digit Passcode',
    icon: 'lock',
    iconBg: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
    keywords: 'pin lock password security សុវត្ថិភាព លេខកូដ សម្ងាត់',
    action: () => { closeProfileSettingsSearch(); openChangePinModal(); }
  },
  {
    id: 'accent_color',
    group: 'Settings / ការកំណត់',
    groupKm: 'ការកំណត់',
    title: 'ពណ៌ចម្បង',
    titleEn: 'Accent Color',
    subtitle: 'Settings > ទឹកក្រូច, បៃតង, ខៀវ, ស្វាយ, ផ្កាឈូក',
    subtitleEn: 'Settings > Orange, Emerald, Blue, Purple, Rose',
    icon: 'palette',
    iconBg: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    keywords: 'color theme accent ពណ៌ ទឹកក្រូច បៃតង ខៀវ ស្វាយ ផ្កាឈូក',
    action: () => { closeProfileSettingsSearch(); switchView('settings'); }
  },
  {
    id: 'font_family',
    group: 'Settings / ការកំណត់',
    groupKm: 'ការកំណត់',
    title: 'ពុម្ពអក្សរ',
    titleEn: 'Font Family',
    subtitle: 'Settings > Kantumruy Pro, Koh Santepheap, Siemreap...',
    subtitleEn: 'Settings > Kantumruy Pro, Koh Santepheap, Siemreap...',
    icon: 'type',
    iconBg: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    keywords: 'font text typography ពុម្ពអក្សរ កន្ទុមរុយ កោះសន្តិភាព សៀមរាប បាត់ដំបង',
    action: () => { closeProfileSettingsSearch(); switchView('settings'); }
  },
  {
    id: 'text_size',
    group: 'Settings / ការកំណត់',
    groupKm: 'ការកំណត់',
    title: 'ទំហំអក្សរ',
    titleEn: 'Text Size',
    subtitle: 'Settings > តូច, មធ្យម, ធំ',
    subtitleEn: 'Settings > Small, Medium, Large',
    icon: 'maximize-2',
    iconBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    keywords: 'size font text size ទំហំ អក្សរ តូច មធ្យម ធំ small medium large',
    action: () => { closeProfileSettingsSearch(); switchView('settings'); }
  },
  {
    id: 'wallpapers',
    group: 'Settings / ការកំណត់',
    groupKm: 'ការកំណត់',
    title: 'ផ្ទាំងរូបភាព',
    titleEn: 'Wallpapers',
    subtitle: 'Settings > រូបភាពគំរូ និងផ្ទៃផ្ទាំងរូបភាពផ្ទាល់ខ្លួន',
    subtitleEn: 'Settings > Lock Screen & Mesh Wallpapers',
    icon: 'image',
    iconBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    keywords: 'wallpaper background image ផ្ទាំងរូបភាព ផ្ទៃ រូបភាព',
    action: () => { closeProfileSettingsSearch(); switchView('settings'); }
  },
  {
    id: 'theme_dark_light',
    group: 'Settings / ការកំណត់',
    groupKm: 'ការកំណត់',
    title: 'ផ្ទៃងងឹត ឬ ពន្លឺ',
    titleEn: 'Dark & Light Theme',
    subtitle: 'Settings > Dark, Light, ឬ Auto តាមប្រព័ន្ធទូរស័ព្ទ',
    subtitleEn: 'Settings > Dark, Light, or System Auto',
    icon: 'moon',
    iconBg: 'bg-violet-500/20 text-violet-400 border-violet-500/30',
    keywords: 'theme dark light mode ងងឹត ពន្លឺ ប្រព័ន្ធ',
    action: () => { closeProfileSettingsSearch(); switchView('settings'); }
  },
  {
    id: 'language',
    group: 'Settings / ការកំណត់',
    groupKm: 'ការកំណត់',
    title: 'ភាសា',
    titleEn: 'Language',
    subtitle: 'Settings > ភាសាខ្មែរ / English',
    subtitleEn: 'Settings > Khmer / English',
    icon: 'globe',
    iconBg: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    keywords: 'language lang ភាសា ខ្មែរ english khmer',
    action: () => { closeProfileSettingsSearch(); switchView('settings'); }
  },
  {
    id: 'notifications',
    group: 'Settings / ការកំណត់',
    groupKm: 'ការកំណត់',
    title: 'ការជូនដំណឹង',
    titleEn: 'Notifications',
    subtitle: 'Settings > បើក ឬ បិទសំឡេង និងការជូនដំណឹង',
    subtitleEn: 'Settings > Toggle In-App Alerts & Sounds',
    icon: 'bell',
    iconBg: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    keywords: 'notification alert ជូនដំណឹង សារ',
    action: () => { closeProfileSettingsSearch(); switchView('settings'); }
  },
  {
    id: 'hide_subtitles',
    group: 'Settings / ការកំណត់',
    groupKm: 'ការកំណត់',
    title: 'លាក់ចំណងជើងរង',
    titleEn: 'Hide Subtitles',
    subtitle: 'Settings > បង្ហាញ ឬ លាក់ចំណងជើងរងកាត',
    subtitleEn: 'Settings > Show or Hide Card Subtitles',
    icon: 'eye-off',
    iconBg: 'bg-slate-500/20 text-slate-400 border-slate-500/30',
    keywords: 'subtitle hide លាក់ ចំណងជើង រង',
    action: () => { closeProfileSettingsSearch(); switchView('settings'); }
  },
  {
    id: 'card_preferences',
    group: 'Settings / ការកំណត់',
    groupKm: 'ការកំណត់',
    title: 'ការរៀបចំកាតទិន្នន័យ',
    titleEn: 'Card Layout & Display',
    subtitle: 'Settings > លំដាប់តម្រៀបកាត និងការកំណត់បង្ហាញកាត',
    subtitleEn: 'Settings > Card order and display preferences',
    icon: 'layers',
    iconBg: 'bg-teal-500/20 text-teal-400 border-teal-500/30',
    keywords: 'card layout visibility display order កាត តម្រៀប បង្ហាញ លាក់',
    action: () => { closeProfileSettingsSearch(); switchView('settings'); setTimeout(() => toggleSettingsItem('cardPreferences'), 100); }
  },
  {
    id: 'about',
    group: 'Settings / ការកំណត់',
    groupKm: 'ការកំណត់',
    title: 'អំពីកម្មវិធី',
    titleEn: 'About App',
    subtitle: 'Settings > ព័ត៌មានកម្មវិធី កំណែទម្រង់ v2.5 និងអ្នកអភិវឌ្ឍន៍',
    subtitleEn: 'Settings > Version v2.5 & Developer Credits',
    icon: 'info',
    iconBg: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    keywords: 'about version dev អំពី កម្មវិធី v2.5 ព័ត៌មាន',
    action: () => { closeProfileSettingsSearch(); openAboutModal(); }
  },
  {
    id: 'feedback_support',
    group: 'Settings / ការកំណត់',
    groupKm: 'ការកំណត់',
    title: 'មតិកែលម្អ & ជំនួយបច្ចេកទេស',
    titleEn: 'Feedback & Support',
    subtitle: 'Settings > ផ្ញើមតិកែលម្អ និងទំនាក់ទំនង Telegram ផ្ទាល់',
    subtitleEn: 'Settings > Send feedback or chat via Telegram',
    icon: 'message-square-heart',
    iconBg: 'bg-sky-500/20 text-sky-400 border-sky-500/30',
    keywords: 'feedback support help telegram contact មតិកែលម្អ ជំនួយ បច្ចេកទេស តេឡេក្រាម',
    action: () => { closeProfileSettingsSearch(); openProfileSubModal('feedback_support'); }
  },
  {
    id: 'daily_report',
    group: 'Profile Dashboard',
    groupKm: 'មុខងារចម្បង',
    title: 'របាយការណ៍លក់ប្រចាំថ្ងៃ',
    titleEn: 'Daily Sales Report',
    subtitle: 'Profile > របាយការណ៍លក់ ៩:០០ យប់ ផ្ញើចូលគ្រុប Telegram',
    subtitleEn: 'Profile > 9:00 PM Daily Sales Report for Telegram',
    icon: 'clipboard-check',
    iconBg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    keywords: 'daily report sales របាយការណ៍ លក់ ប្រចាំថ្ងៃ ឆាត ៩ យប់ telegram',
    action: () => { closeProfileSettingsSearch(); openDailyReportModal(); }
  }
];

function submitUserFeedback() {
  const input = document.getElementById('feedback-text-input');
  const val = input ? input.value.trim() : '';
  if (!val) {
    showToastNotification('សូមសរសេរមតិយោបល់មុននឹងផ្ញើ!');
    return;
  }
  showToastNotification('អរគុណច្រើនសម្រាប់មតិយោបល់របស់អ្នក! 🙏');
  if (input) input.value = '';
  closeProfileSubModal();
}
window.submitUserFeedback = submitUserFeedback;

function calculateDailyReportMetrics() {
  const chatTotal = cleanNumber(document.getElementById('rep-field-chat-total')?.value);
  const chatMistake = cleanNumber(document.getElementById('rep-field-chat-mistake')?.value);
  const targetInput = document.getElementById('rep-field-chat-target');
  
  if (chatTotal > 0 && chatMistake >= 0 && targetInput) {
    if (!targetInput.dataset.manualEdited) {
      const autoTarget = Math.max(0, chatTotal - chatMistake);
      targetInput.value = autoTarget || '';
    }
  }

  const buyNewB = cleanNumber(document.getElementById('rep-buy-new-b')?.value);
  const buyOldB = cleanNumber(document.getElementById('rep-buy-old-b')?.value);
  const buyFollowB = cleanNumber(document.getElementById('rep-buy-follow-b')?.value);

  const totalBoxes = buyNewB + buyOldB + buyFollowB;

  const totalDisp = document.getElementById('rep-total-summary-disp');
  if (totalDisp) {
    totalDisp.innerText = `${totalBoxes} ប្រអប់`;
  }
}

function generateDailyReportText() {
  const date = document.getElementById('rep-field-date')?.value || '';
  const page = document.getElementById('rep-field-page')?.value || '';
  const staff = document.getElementById('rep-field-staff')?.value || '';

  const chatTotal = document.getElementById('rep-field-chat-total')?.value || '';
  const chatMistake = document.getElementById('rep-field-chat-mistake')?.value || '';
  const chatTarget = document.getElementById('rep-field-chat-target')?.value || '';
  const callDirect = document.getElementById('rep-field-call-direct')?.value || '';

  const followOld = document.getElementById('rep-field-follow-old')?.value || '';
  const followPending = document.getElementById('rep-field-follow-pending')?.value || '';

  const buyNewP = document.getElementById('rep-buy-new-p')?.value || '';
  const buyNewB = document.getElementById('rep-buy-new-b')?.value || '';
  const buyOldP = document.getElementById('rep-buy-old-p')?.value || '';
  const buyOldB = document.getElementById('rep-buy-old-b')?.value || '';
  const buyFollowP = document.getElementById('rep-buy-follow-p')?.value || '';
  const buyFollowB = document.getElementById('rep-buy-follow-b')?.value || '';

  const totalBoxes = (Number(buyNewB) || 0) + (Number(buyOldB) || 0) + (Number(buyFollowB) || 0);
  const challenges = document.getElementById('rep-field-challenges')?.value || '';

  if (page) {
    try { localStorage.setItem('sd_report_page', page); } catch (_) {}
  }

  return `🔰 របាយការណ៍លក់ប្រចាំថ្ងៃ ទី ${date}
📌 ឈ្មោះផេក៖ ${page}
👤 បុគ្គលិកទទួលខុសត្រូវ / ក្រុម៖ ${staff}
--------------------------------------------------
📥 ១. ទិន្នន័យអតិថិជនថ្មីទាក់ទងមក
• ចំនួនឆាតថ្មីសរុប៖ ${chatTotal} នាក់
  - ឆាតប៉ះដៃ (ច្រឡំដៃ ឬស្ងាត់គ្មានការសន្ទនា)៖ ${chatMistake} នាក់
  - ឆាតគោលដៅ (សួរតម្លៃ ឬព័ត៌មានផលិតផលពិតប្រាកដ)៖ ${chatTarget} នាក់
• ចំនួនអតិថិជនថ្មីខលមកផ្ទាល់៖ ${callDirect} នាក់

🔄 ២. សកម្មភាពតាមដានអតិថិជន (Follow Up)
• ចំនួនអតិថិជនចាស់ដែលបានតាមដានសួរសុខទុក្ខ៖ ${followOld} នាក់
• ចំនួនអតិថិជនកំពុងពិចារណា (រង់ចាំចម្លើយ)៖ ${followPending} នាក់

📦 ៣. លទ្ធផលនៃការលក់ជាក់ស្តែង
• អតិថិជនថ្មីទិញ៖ ${buyNewP} នាក់ | ចំនួន៖ ${buyNewB} ប្រអប់
• អតិថិជនចាស់ទិញបន្ថែម៖ ${buyOldP} នាក់ | ចំនួន៖ ${buyOldB} ប្រអប់
• អតិថិជនដែលតាមដានទិញ (តាមដានលើកមុន មកទិញថ្ងៃនេះ)៖ ${buyFollowP} នាក់ | ចំនួន៖ ${buyFollowB} ប្រអប់
👉 សរុបទំនិញលក់បានទាំងអស់៖ ${totalBoxes} ប្រអប់ 

• បញ្ហាប្រឈម ឬចំណាំសំខាន់ៗ៖ ${challenges}
--------------------------------------------------
⏰ ម៉ោងរាយការណ៍៖ ៩:០០ យប់`;
}

async function copyDailyReportText() {
  const text = generateDailyReportText();
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    showToastNotification('បានចម្លងរបាយការណ៍ជោគជ័យ! ត្រៀម Paste ចូល Telegram 📋');
  } catch (_) {
    showToastNotification('ចម្លងបានជោគជ័យ!');
  }
}

function shareDailyReportToTelegram() {
  copyDailyReportText();
  const savedGroup = localStorage.getItem('sd_telegram_group_url') || 'https://t.me/sdey_sdoeung';
  window.open(savedGroup, '_blank');
}

function renderDailyReportModal() {
  const container = document.getElementById('daily-report-body-content');
  if (!container) return;

  const p = (typeof getProfileData === 'function') ? getProfileData() : {};
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();
  const defaultDate = `${dd}/${mm}/${yyyy}`;
  const savedPage = localStorage.getItem('sd_report_page') || 'Bostar Store';
  const staffName = p.name || 'សមាជិក Bostar';

  // Auto-detect today's sales from DataService
  let autoTodayBoxes = 0;
  let autoTodayOrders = 0;
  try {
    const todayIso = today.toISOString().slice(0, 10);
    const sales = (DataService.data && DataService.data.personalSales) ? DataService.data.personalSales : [];
    const todaySales = sales.filter(s => s.isoDate === todayIso);
    autoTodayOrders = todaySales.length;
    autoTodayBoxes = todaySales.reduce((sum, s) => sum + (Number(s.boxes) || 0), 0);
  } catch (_) {}

  container.innerHTML = `
    <div class="space-y-3 text-xs select-none">
      <!-- Card 1: Meta Information -->
      <div class="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2.5">
        <div class="flex items-center justify-between">
          <span class="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <i data-lucide="calendar" class="w-3.5 h-3.5"></i>
            <span>កាលបរិច្ឆេទ & ព័ត៌មាន</span>
          </span>
          <span class="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[9px] font-bold border border-emerald-500/30">
            ៩:០០ យប់
          </span>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[10px] text-slate-400 mb-1 font-semibold">កាលបរិច្ឆេទ៖</label>
            <input type="text" id="rep-field-date" value="${defaultDate}" 
                   class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs focus:outline-none focus:border-emerald-500">
          </div>
          <div>
            <label class="block text-[10px] text-slate-400 mb-1 font-semibold">ឈ្មោះផេក៖</label>
            <input type="text" id="rep-field-page" value="${savedPage}" placeholder="ឧ. Bostar Store" 
                   oninput="try { localStorage.setItem('sd_report_page', this.value); } catch(_) {}"
                   class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white text-xs focus:outline-none focus:border-emerald-500">
          </div>
        </div>
        <div>
          <label class="block text-[10px] text-slate-400 mb-1 font-semibold">បុគ្គលិកទទួលខុសត្រូវ / ក្រុម៖</label>
          <input type="text" id="rep-field-staff" value="${staffName}" 
                 class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white text-xs focus:outline-none focus:border-emerald-500">
        </div>
      </div>

      <!-- Card 2: Section 1 - 📥 ទិន្នន័យអតិថិជនថ្មីទាក់ទងមក -->
      <div class="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2.5">
        <span class="text-[10px] text-sky-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <i data-lucide="inbox" class="w-3.5 h-3.5"></i>
          <span>១. ទិន្នន័យអតិថិជនថ្មីទាក់ទងមក</span>
        </span>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[10px] text-slate-400 mb-1">ឆាតថ្មីសរុប (នាក់)៖</label>
            <input type="number" id="rep-field-chat-total" placeholder="0" oninput="calculateDailyReportMetrics()" 
                   class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs focus:outline-none focus:border-sky-500">
          </div>
          <div>
            <label class="block text-[10px] text-slate-400 mb-1">ឆាតប៉ះដៃ (នាក់)៖</label>
            <input type="number" id="rep-field-chat-mistake" placeholder="0" oninput="calculateDailyReportMetrics()" 
                   class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs focus:outline-none focus:border-sky-500">
          </div>
          <div>
            <label class="block text-[10px] text-slate-400 mb-1">ឆាតគោលដៅ (នាក់)៖</label>
            <input type="number" id="rep-field-chat-target" placeholder="0" oninput="calculateDailyReportMetrics()" 
                   class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-sky-300 font-bold font-mono text-xs focus:outline-none focus:border-sky-500">
          </div>
          <div>
            <label class="block text-[10px] text-slate-400 mb-1">អតិថិជនខលផ្ទាល់ (នាក់)៖</label>
            <input type="number" id="rep-field-call-direct" placeholder="0" 
                   class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs focus:outline-none focus:border-sky-500">
          </div>
        </div>
      </div>

      <!-- Card 3: Section 2 - 🔄 សកម្មភាពតាមដាន (Follow Up) -->
      <div class="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2.5">
        <span class="text-[10px] text-purple-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
          <span>២. សកម្មភាពតាមដានអតិថិជន (Follow Up)</span>
        </span>
        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="block text-[10px] text-slate-400 mb-1">អតិថិជនចាស់សួរសុខទុក្ខ (នាក់)៖</label>
            <input type="number" id="rep-field-follow-old" placeholder="0" 
                   class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs focus:outline-none focus:border-purple-500">
          </div>
          <div>
            <label class="block text-[10px] text-slate-400 mb-1">អតិថិជនរង់ចាំចម្លើយ (នាក់)៖</label>
            <input type="number" id="rep-field-follow-pending" placeholder="0" 
                   class="w-full bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs focus:outline-none focus:border-purple-500">
          </div>
        </div>
      </div>

      <!-- Card 4: Section 3 - 📦 លទ្ធផលនៃការលក់ជាក់ស្តែង -->
      <div class="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2.5">
        <span class="text-[10px] text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <i data-lucide="package" class="w-3.5 h-3.5"></i>
          <span>៣. លទ្ធផលនៃការលក់ជាក់ស្តែង</span>
        </span>
        
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-slate-300 w-32 shrink-0">អតិថិជនថ្មីទិញ:</span>
            <input type="number" id="rep-buy-new-p" placeholder="នាក់" oninput="calculateDailyReportMetrics()" class="w-1/2 bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs text-center focus:outline-none focus:border-emerald-500">
            <input type="number" id="rep-buy-new-b" placeholder="ប្រអប់" oninput="calculateDailyReportMetrics()" class="w-1/2 bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs text-center focus:outline-none focus:border-emerald-500">
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-slate-300 w-32 shrink-0">អតិថិជនចាស់ទិញបន្ថែម:</span>
            <input type="number" id="rep-buy-old-p" placeholder="នាក់" oninput="calculateDailyReportMetrics()" class="w-1/2 bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs text-center focus:outline-none focus:border-emerald-500">
            <input type="number" id="rep-buy-old-b" placeholder="ប្រអប់" oninput="calculateDailyReportMetrics()" class="w-1/2 bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs text-center focus:outline-none focus:border-emerald-500">
          </div>
          <div class="flex items-center gap-2">
            <span class="text-[10px] text-slate-300 w-32 shrink-0">អតិថិជនដែលតាមដានទិញ:</span>
            <input type="number" id="rep-buy-follow-p" placeholder="នាក់" oninput="calculateDailyReportMetrics()" class="w-1/2 bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs text-center focus:outline-none focus:border-emerald-500">
            <input type="number" id="rep-buy-follow-b" placeholder="ប្រអប់" oninput="calculateDailyReportMetrics()" class="w-1/2 bg-black/50 border border-white/10 rounded-xl p-2 text-white font-mono text-xs text-center focus:outline-none focus:border-emerald-500">
          </div>
        </div>

        <!-- Total Calculation Display -->
        <div class="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-xs font-mono">
          <span class="text-emerald-300 font-bold">👉 សរុបទំនិញលក់បានទាំងអស់៖</span>
          <span id="rep-total-summary-disp" class="text-emerald-400 font-bold text-sm">
            ${autoTodayBoxes || 0} ប្រអប់
          </span>
        </div>
      </div>

      <!-- Card 5: បញ្ហាប្រឈម ឬចំណាំសំខាន់ៗ -->
      <div class="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
        <label class="block text-[10px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
          <i data-lucide="alert-circle" class="w-3.5 h-3.5"></i>
          <span>បញ្ហាប្រឈម ឬចំណាំសំខាន់ៗ៖</span>
        </label>
        <textarea id="rep-field-challenges" rows="3" placeholder="ឧទាហរណ៍៖ អតិថិជនត្អូញត្អែរតម្លៃ, សេវាដឹកយឺត, អស់ទំនិញក្នុងស្តុក..." 
                  class="w-full bg-black/50 border border-white/10 rounded-xl p-2.5 text-white text-xs focus:outline-none focus:border-amber-500 leading-relaxed"></textarea>
      </div>
    </div>
  `;
}

function openDailyReportModal() {
  const modal = document.getElementById('daily-report-modal');
  if (!modal) return;
  closeAllModals();
  renderDailyReportModal();
  modal.classList.remove('hidden');
  setDockVisible(false);
  const bodyEl = document.getElementById('daily-report-body-content');
  if (bodyEl) bodyEl.scrollTop = 0;
  if (window.lucide) window.lucide.createIcons();
  if (navigator.vibrate) try { navigator.vibrate(15); } catch (_) {}
}

function closeDailyReportModal() {
  const modal = document.getElementById('daily-report-modal');
  if (modal) modal.classList.add('hidden');
  setDockVisible(true);
}

function resetDailyReportFields() {
  const ids = [
    'rep-field-chat-total', 'rep-field-chat-mistake', 'rep-field-chat-target', 'rep-field-call-direct',
    'rep-field-follow-old', 'rep-field-follow-pending',
    'rep-buy-new-p', 'rep-buy-new-b', 'rep-buy-old-p', 'rep-buy-old-b', 'rep-buy-follow-p', 'rep-buy-follow-b',
    'rep-field-challenges'
  ];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  const targetInput = document.getElementById('rep-field-chat-target');
  if (targetInput) delete targetInput.dataset.manualEdited;
  calculateDailyReportMetrics();
  showToastNotification('បានសម្អាតទិន្នន័យរបាយការណ៍!');
}

window.renderDailyReportModal = renderDailyReportModal;
window.closeDailyReportModal = closeDailyReportModal;
window.resetDailyReportFields = resetDailyReportFields;
window.openDailyReportModal = openDailyReportModal;
window.calculateDailyReportMetrics = calculateDailyReportMetrics;
window.copyDailyReportText = copyDailyReportText;
window.shareDailyReportToTelegram = shareDailyReportToTelegram;

function openProfileSettingsSearch() {
  const modal = document.getElementById('profile-settings-search-modal');
  const input = document.getElementById('profile-settings-search-input');
  const clearBtn = document.getElementById('profile-settings-search-clear-btn');
  if (modal) {
    modal.classList.remove('hidden');
    setDockVisible(false);
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 80);
    }
    if (clearBtn) clearBtn.classList.add('hidden');
    renderProfileSettingsSearchResults('');
  }
}

function closeProfileSettingsSearch() {
  const modal = document.getElementById('profile-settings-search-modal');
  if (modal) modal.classList.add('hidden');
  setDockVisible(true);
}

function clearProfileSettingsSearch() {
  const input = document.getElementById('profile-settings-search-input');
  const clearBtn = document.getElementById('profile-settings-search-clear-btn');
  if (input) {
    input.value = '';
    input.focus();
  }
  if (clearBtn) clearBtn.classList.add('hidden');
  renderProfileSettingsSearchResults('');
}

function handleProfileSettingsSearch(val) {
  const clearBtn = document.getElementById('profile-settings-search-clear-btn');
  if (clearBtn) {
    if (val && val.trim().length > 0) {
      clearBtn.classList.remove('hidden');
    } else {
      clearBtn.classList.add('hidden');
    }
  }
  renderProfileSettingsSearchResults(val);
}

function renderProfileSettingsSearchResults(query) {
  const container = document.getElementById('profile-settings-search-results');
  if (!container) return;

  const isEn = appState.language === 'en';
  const q = (query || '').toLowerCase().trim();
  const filtered = PROFILE_SETTINGS_SEARCH_ITEMS.filter(item => {
    if (!q) return true;
    const t = isEn ? (item.titleEn || item.title) : item.title;
    const s = isEn ? (item.subtitleEn || item.subtitle) : item.subtitle;
    return t.toLowerCase().includes(q) ||
           s.toLowerCase().includes(q) ||
           (item.keywords && item.keywords.toLowerCase().includes(q)) ||
           item.group.toLowerCase().includes(q) ||
           item.groupKm.toLowerCase().includes(q);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-8 text-center space-y-2">
        <div class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-slate-400">
          <i data-lucide="search-x" class="w-6 h-6"></i>
        </div>
        <p class="text-xs text-slate-300 font-bold">${isEn ? 'No results found' : 'រកមិនឃើញលទ្ធផល'}</p>
        <p class="text-[11px] text-slate-500">${isEn ? `No settings match "${query}"` : `គ្មានមុខងារណាត្រូវគ្នានឹង "${query}" ឡើយ`}</p>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
    return;
  }

  // Group items by group (Profile Dashboard vs Settings)
  const groups = {};
  filtered.forEach(item => {
    const gKey = isEn ? (item.group || 'Shortcuts') : item.groupKm;
    if (!groups[gKey]) groups[gKey] = [];
    groups[gKey].push(item);
  });

  let html = '';
  Object.keys(groups).forEach(groupName => {
    const items = groups[groupName];
    html += `
      <div class="space-y-1.5">
        <div class="px-2 text-[10px] uppercase font-bold tracking-wider text-slate-400">
          ${groupName}
        </div>
        <div class="bg-[#0F1B2E] rounded-2xl border border-white/10 overflow-hidden divide-y divide-white/5 shadow-xl">
          ${items.map(item => `
            <div onclick="executeProfileSettingsAction('${item.id}')"
                 class="p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.04] active:bg-white/[0.08] active:scale-[0.99] transition select-none group">
              <div class="flex items-center gap-3 min-w-0">
                <div class="w-8 h-8 rounded-xl ${item.iconBg} border flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                  <i data-lucide="${item.icon}" class="w-4 h-4"></i>
                </div>
                <div class="min-w-0">
                  <h4 class="text-xs font-bold text-white truncate leading-tight">${isEn ? (item.titleEn || item.title) : item.title}</h4>
                  <p class="text-[10px] text-slate-400 mt-0.5 truncate font-mono">${isEn ? (item.subtitleEn || item.subtitle) : item.subtitle}</p>
                </div>
              </div>
              <i data-lucide="chevron-right" class="w-4 h-4 text-slate-500 group-hover:text-white transition-colors shrink-0"></i>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  if (window.lucide) window.lucide.createIcons();
}

function executeProfileSettingsAction(itemId) {
  const item = PROFILE_SETTINGS_SEARCH_ITEMS.find(i => i.id === itemId);
  if (item && typeof item.action === 'function') {
    item.action();
  }
}

function toggleCardVisibility(cardKey) {
  if (!appState.cardVisibility) {
    appState.cardVisibility = {
      autoHideEmpty: false,
      pureCash: false,
      salesPerformance: true,
      netCash: false,
      expenses: true,
      teamSales: false,
      tools: true
    };
  }
  if (cardKey === 'autoHideEmpty') {
    appState.cardVisibility.autoHideEmpty = (appState.cardVisibility.autoHideEmpty === true) ? false : true;
  } else {
    appState.cardVisibility[cardKey] = (appState.cardVisibility[cardKey] === false) ? true : false;
  }
  try {
    localStorage.setItem('sd_card_visibility', JSON.stringify(appState.cardVisibility));
  } catch (_) {}
  renderCurrentView();
  if (navigator.vibrate) try { navigator.vibrate(12); } catch (_) {}
}

window.toggleCardVisibility = toggleCardVisibility;
window.clearCustomerSearchInput = clearCustomerSearchInput;
window.openProfileSettingsSearch = openProfileSettingsSearch;
window.closeProfileSettingsSearch = closeProfileSettingsSearch;
window.clearProfileSettingsSearch = clearProfileSettingsSearch;
window.handleProfileSettingsSearch = handleProfileSettingsSearch;
window.executeProfileSettingsAction = executeProfileSettingsAction;
window.toggleProfitNetBoost = toggleProfitNetBoost;
window.handleUniversalSwipeBack = handleBackNavigation;
window.handleHeaderScrollToTop = handleHeaderScrollToTop;
window.toggleTeamSetsSearchBar = typeof toggleTeamSetsSearchBar !== 'undefined' ? toggleTeamSetsSearchBar : null;
window.toggleTeamSetsFilterOnlySales = toggleTeamSetsFilterOnlySales;
window.openTeamSetsModal = openTeamSetsModal;
window.closeTeamSetsModal = closeTeamSetsModal;

const DEFAULT_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxlkNwEyMcrLb3tm0Fzuc4tefQ4EfP2MNUBKSGGyaaZiqiO8XoZCysQebZ3xYTlbYjP/exec';

function getAppsScriptWebhookUrl() {
  const saved = localStorage.getItem('sd_apps_script_url');
  if (!saved || saved.includes('AKfycbx3nkhqs8') || saved.includes('AKfycbw_BgUgVS0le9')) {
    localStorage.setItem('sd_apps_script_url', DEFAULT_APPS_SCRIPT_URL);
    return DEFAULT_APPS_SCRIPT_URL;
  }
  return saved;
}
try {
  localStorage.setItem('sd_apps_script_url', DEFAULT_APPS_SCRIPT_URL);
} catch (_) {}

const COMPANY_GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSd_hP30dqB-F5gCV44AuxcftgmoDjo5zzkN-NSMiK-1rDEqPQ/formResponse';

function onSellerNameChange(val) {
  const latinBadge = document.getElementById('order-seller-latin-disp');
  const latin = getSellerLatinName(val);
  if (latinBadge) {
    latinBadge.innerText = latin;
  }
  if (val && val.trim()) {
    try {
      localStorage.setItem('sd_last_seller', val.trim());
    } catch (_) {}
  }
}

function formatKhmerPhone(raw) {
  if (!raw) return '';
  let digits = raw.replace(/\D/g, '');
  if (!digits) return '';
  if (digits.startsWith('855')) {
    digits = '0' + digits.slice(3);
  }
  if (!digits.startsWith('0') && digits.length >= 8) {
    digits = '0' + digits;
  }
  if (digits.length <= 3) {
    return digits;
  } else if (digits.length <= 6) {
    return `${digits.slice(0, 3)} ${digits.slice(3)}`;
  } else if (digits.length <= 9) {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  } else {
    return `${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)}`;
  }
}
window.formatKhmerPhone = formatKhmerPhone;

let isExtraOrderProductsOpen = false;

function toggleExtraOrderProducts(forceState) {
  const container = document.getElementById('order-extra-products-container');
  const icon = document.getElementById('icon-toggle-extra-products');
  const label = document.getElementById('label-toggle-extra-products');
  if (!container) return;

  if (typeof forceState === 'boolean') {
    isExtraOrderProductsOpen = forceState;
  } else {
    isExtraOrderProductsOpen = !isExtraOrderProductsOpen;
  }

  if (isExtraOrderProductsOpen) {
    container.classList.remove('hidden');
    if (icon) icon.style.transform = 'rotate(180deg)';
    if (label) label.textContent = 'លាក់ (Emmi, S.G Pro)';
  } else {
    container.classList.add('hidden');
    if (icon) icon.style.transform = 'rotate(0deg)';
    if (label) label.textContent = 'បន្ថែម (Emmi, S.G Pro)';
  }
}
window.toggleExtraOrderProducts = toggleExtraOrderProducts;

function initProductSwipeGestures() {
  const cards = document.querySelectorAll('.product-swipe-item');
  cards.forEach(card => {
    if (card._swipeInitialized) return;
    card._swipeInitialized = true;

    let startX = 0;
    let startY = 0;
    let isSwiping = false;
    const prodKey = card.getAttribute('data-prod-key');
    if (!prodKey) return;

    card.addEventListener('touchstart', (e) => {
      if (e.target.closest('button')) return;
      const touch = e.touches[0];
      startX = touch.clientX;
      startY = touch.clientY;
      isSwiping = true;
    }, { passive: true });

    card.addEventListener('touchmove', (e) => {
      if (!isSwiping || e.target.closest('button')) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - startX;
      const deltaY = touch.clientY - startY;

      if (Math.abs(deltaX) > 38 && Math.abs(deltaX) > Math.abs(deltaY) * 1.5) {
        if (deltaX > 0) {
          adjustProductQty(prodKey, 1);
        } else {
          adjustProductQty(prodKey, -1);
        }
        if (navigator.vibrate) try { navigator.vibrate(10); } catch (_) {}
        startX = touch.clientX;
        startY = touch.clientY;
      }
    }, { passive: true });

    card.addEventListener('touchend', () => {
      isSwiping = false;
    }, { passive: true });
  });
}
window.initProductSwipeGestures = initProductSwipeGestures;

async function submitToCompanyGoogleForm(orderData) {
  try {
    const params = new URLSearchParams();
    
    // 1. Date: Year, Month, Day
    let y = '2026', m = '10', d = '19';
    if (orderData.isoDate && /^\d{4}-\d{2}-\d{2}$/.test(orderData.isoDate)) {
      const parts = orderData.isoDate.split('-');
      y = parts[0];
      m = String(parseInt(parts[1], 10));
      d = String(parseInt(parts[2], 10));
    } else if (orderData.date && /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(orderData.date)) {
      const parts = orderData.date.split('/');
      d = String(parseInt(parts[0], 10));
      m = String(parseInt(parts[1], 10));
      y = parts[2];
    } else {
      const now = new Date();
      y = String(now.getFullYear());
      m = String(now.getMonth() + 1);
      d = String(now.getDate());
    }
    params.append('entry.1581364351_year', y);
    params.append('entry.1581364351_month', m);
    params.append('entry.1581364351_day', d);

    // 2. Team: Strictly Bech_Nora for Company Form submission (Company settlement is strictly through Bech_Nora)
    params.append('entry.2053044994', 'Bech_Nora');

    // 3. Seller Name (Khmer)
    params.append('entry.193760049', orderData.seller || '');

    // 4. Seller Phone / No
    params.append('entry.1250998064', orderData.sellerPhone || '');

    // 5. Products (quantity 1 to 10)
    if (orderData.qtyYLP > 0) params.append('entry.404230430', String(orderData.qtyYLP));
    if (orderData.qtyYL > 0) params.append('entry.2028258738', String(orderData.qtyYL));
    if (orderData.qtyKN > 0) params.append('entry.1166279805', String(orderData.qtyKN));
    if (orderData.qtyPDO > 0) params.append('entry.1229436075', String(orderData.qtyPDO));
    if (orderData.qtyEmmi > 0) params.append('entry.1958386252', String(orderData.qtyEmmi));
    if (orderData.qtySGP > 0) params.append('entry.629009419', String(orderData.qtySGP));

    // 6. Price (clean number string)
    params.append('entry.615821671', String(orderData.price || ''));

    // 7. Receiver No (Phone)
    params.append('entry.1618786820', orderData.phone || '');

    // 8. Customer (Recipient Name)
    params.append('entry.485783433', orderData.customer || '');

    // 9. Address
    params.append('entry.1844490282', orderData.location || '');

    // 10. Delivery (exact enum value)
    let delivVal = 'VET(COD)';
    const dStr = (orderData.deliveryMethod || '').toLowerCase();
    if (dStr.includes('thai') || dStr.includes('ថៃ')) {
      delivVal = (dStr.includes('❌') || dStr.includes('no') || dStr.includes('មិន')) ? 'Thai ❌COD' : 'Thai ✅COD';
    } else if (dStr.includes('j&t') && dStr.includes('cod')) {
      delivVal = 'J&T (COD)';
    } else if (dStr.includes('vet') && dStr.includes('cod')) {
      delivVal = 'VET(COD)';
    } else if (dStr.includes('motor') || dStr.includes('ម៉ូតូ')) {
      delivVal = 'Motor';
    } else if (dStr.includes('j&t') || dStr.includes('jt')) {
      delivVal = 'J&T';
    } else if (dStr.includes('vet')) {
      delivVal = 'VET';
    }
    params.append('entry.77621526', delivVal);

    // 11. Note
    params.append('entry.1529022117', orderData.note || '');

    // 12. Seller's Latin Name
    const latinName = orderData.sellerLatin || getSellerLatinName(orderData.seller);
    params.append('entry.1608045144', latinName);

    // Submit to Company Google Form
    await fetch(COMPANY_GOOGLE_FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });
    return true;
  } catch (err) {
    console.warn('Company Google Form POST error:', err);
    return false;
  }
}

let currentOrderMode = 'paste';
let currentOrderType = 'standard';
let currentOrderCurrency = 'KHR';
let currentOrderProducts = {
  yl: 1,
  ylp: 1,
  kn: 0,
  pdo: 0,
  emmi: 0,
  sgp: 0,
  free: 0
};

function cleanNumber(val) {
  if (val === null || val === undefined) return 0;
  if (typeof val === 'number') return isNaN(val) ? 0 : val;
  const cleaned = String(val).replace(/,/g, '').replace(/[^\d.-]/g, '').trim();
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}

let miniCalYear = 2026;
let miniCalMonth = 9; // 0-indexed (9 = October)
let miniCalSelectedDay = 15;

const MONTH_NAMES_EN = [
  'OCTOBER', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
  'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
];

function updateOrderDateDisplay(isoDate) {
  if (!isoDate) {
    const now = new Date();
    isoDate = typeof getLocalIsoDate === 'function' ? getLocalIsoDate(now) : now.toISOString().slice(0, 10);
  }
  let ddmmyyyy = isoDate;
  const parts = String(isoDate).split('-');
  if (parts.length === 3) {
    ddmmyyyy = `${parts[2]}/${parts[1]}/${parts[0]}`;
    miniCalYear = parseInt(parts[0], 10);
    miniCalMonth = parseInt(parts[1], 10) - 1;
    miniCalSelectedDay = parseInt(parts[2], 10);
  }
  const textInput = document.getElementById('order-field-date-text');
  if (textInput) textInput.value = ddmmyyyy;
  const hiddenInp = document.getElementById('order-field-date');
  if (hiddenInp) hiddenInp.value = isoDate;
}

function onOrderDateTextInput(val) {
  const raw = (val || '').trim();
  const ddmmyyyy = raw.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})/);
  if (ddmmyyyy) {
    const dy = ddmmyyyy[1].padStart(2, '0');
    const mo = ddmmyyyy[2].padStart(2, '0');
    const yr = ddmmyyyy[3];
    const iso = `${yr}-${mo}-${dy}`;
    const hiddenInp = document.getElementById('order-field-date');
    if (hiddenInp) hiddenInp.value = iso;
    miniCalSelectedDay = parseInt(dy, 10);
    miniCalMonth = parseInt(mo, 10) - 1;
    miniCalYear = parseInt(yr, 10);
  }
}

function toggleOrderMiniCalendar(e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  const popup = document.getElementById('order-mini-calendar-popup');
  if (!popup) return;
  const isHidden = popup.classList.contains('hidden');
  if (isHidden) {
    syncMiniCalDateFromInput();
    renderOrderMiniCalendar();
    popup.classList.remove('hidden');
    setTimeout(() => {
      document.addEventListener('click', closeMiniCalendarOnClickOutside);
    }, 10);
  } else {
    popup.classList.add('hidden');
    document.removeEventListener('click', closeMiniCalendarOnClickOutside);
  }
}

function closeMiniCalendarOnClickOutside(e) {
  const popup = document.getElementById('order-mini-calendar-popup');
  const btn = document.getElementById('btn-toggle-mini-calendar');
  if (popup && !popup.contains(e.target) && btn && !btn.contains(e.target)) {
    popup.classList.add('hidden');
    document.removeEventListener('click', closeMiniCalendarOnClickOutside);
  }
}

function syncMiniCalDateFromInput() {
  const textInput = document.getElementById('order-field-date-text');
  const raw = (textInput?.value || '').trim();
  const ddmmyyyy = raw.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})/);
  if (ddmmyyyy) {
    miniCalSelectedDay = parseInt(ddmmyyyy[1], 10);
    miniCalMonth = parseInt(ddmmyyyy[2], 10) - 1;
    miniCalYear = parseInt(ddmmyyyy[3], 10);
  } else {
    const hiddenInp = document.getElementById('order-field-date');
    if (hiddenInp && /^\d{4}-\d{2}-\d{2}$/.test(hiddenInp.value)) {
      const p = hiddenInp.value.split('-');
      miniCalYear = parseInt(p[0], 10);
      miniCalMonth = parseInt(p[1], 10) - 1;
      miniCalSelectedDay = parseInt(p[2], 10);
    }
  }
}

function changeMiniCalMonth(delta, e) {
  if (e) e.stopPropagation();
  miniCalMonth += delta;
  if (miniCalMonth < 0) {
    miniCalMonth = 11;
    miniCalYear -= 1;
  } else if (miniCalMonth > 11) {
    miniCalMonth = 0;
    miniCalYear += 1;
  }
  renderOrderMiniCalendar();
}

function selectMiniCalDay(day, e) {
  if (e) e.stopPropagation();
  miniCalSelectedDay = day;

  const dy = String(day).padStart(2, '0');
  const mo = String(miniCalMonth + 1).padStart(2, '0');
  const yr = miniCalYear;
  const ddmmyyyy = `${dy}/${mo}/${yr}`;
  const iso = `${yr}-${mo}-${dy}`;

  const textInput = document.getElementById('order-field-date-text');
  if (textInput) textInput.value = ddmmyyyy;

  const hiddenInp = document.getElementById('order-field-date');
  if (hiddenInp) hiddenInp.value = iso;

  renderOrderMiniCalendar();

  setTimeout(() => {
    const popup = document.getElementById('order-mini-calendar-popup');
    if (popup) popup.classList.add('hidden');
    document.removeEventListener('click', closeMiniCalendarOnClickOutside);
  }, 120);

  if (navigator.vibrate) try { navigator.vibrate(10); } catch (_) {}
}

function renderOrderMiniCalendar() {
  const popup = document.getElementById('order-mini-calendar-popup');
  if (!popup) return;

  const monthNames = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];
  const monthName = monthNames[miniCalMonth] || 'OCTOBER';
  const firstDay = new Date(miniCalYear, miniCalMonth, 1).getDay(); // 0 = Sun
  const daysInMonth = new Date(miniCalYear, miniCalMonth + 1, 0).getDate();

  let html = `
    <!-- Header with Red Month Name and Navigation -->
    <div class="flex items-center justify-between mb-3 px-1">
      <span class="text-xs font-black tracking-wider text-[#FF453A] uppercase font-sans">
        ${monthName}
      </span>
      <div class="flex items-center gap-1.5">
        <button type="button" onclick="changeMiniCalMonth(-1, event)" class="w-6 h-6 rounded-full hover:bg-white/10 active:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold transition">‹</button>
        <span class="text-[10px] text-slate-400 font-mono">${miniCalYear}</span>
        <button type="button" onclick="changeMiniCalMonth(1, event)" class="w-6 h-6 rounded-full hover:bg-white/10 active:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold transition">›</button>
      </div>
    </div>

    <!-- Day Headers: S M T W T F S -->
    <div class="grid grid-cols-7 text-center mb-1 text-[11px] font-bold text-slate-400 font-sans">
      <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
    </div>

    <!-- Days Grid -->
    <div class="grid grid-cols-7 gap-y-1 text-center font-sans text-xs">
  `;

  // Empty leading slots
  for (let i = 0; i < firstDay; i++) {
    html += `<div></div>`;
  }

  // Days in month
  for (let d = 1; d <= daysInMonth; d++) {
    const isSelected = (d === miniCalSelectedDay);
    if (isSelected) {
      html += `
        <div class="flex items-center justify-center py-0.5">
          <button type="button" onclick="selectMiniCalDay(${d}, event)" 
                  class="w-7 h-7 rounded-full bg-[#FF453A] text-white font-black flex items-center justify-center shadow-lg shadow-red-500/40 active:scale-90 transition">
            ${d}
          </button>
        </div>
      `;
    } else {
      html += `
        <div class="flex items-center justify-center py-0.5">
          <button type="button" onclick="selectMiniCalDay(${d}, event)" 
                  class="w-7 h-7 rounded-full text-white font-bold hover:bg-white/15 active:bg-white/25 active:scale-90 flex items-center justify-center transition">
            ${d}
          </button>
        </div>
      `;
    }
  }

  html += `</div>`;
  popup.innerHTML = html;
}

function openOrderDatePicker() {
  toggleOrderMiniCalendar();
}

function setOrderCurrency(curr) {
  currentOrderCurrency = curr || 'KHR';
  const btnKhr = document.getElementById('curr-btn-khr');
  const btnThb = document.getElementById('curr-btn-thb');
  const btnUsd = document.getElementById('curr-btn-usd');

  const activeCls = 'px-1.5 py-0.5 rounded text-[10px] font-mono font-bold transition bg-orange-500 text-white shadow-sm flex items-center justify-center min-w-[20px] leading-none';
  const inactiveCls = 'px-1.5 py-0.5 rounded text-[10px] font-mono font-bold transition text-slate-400 hover:text-white flex items-center justify-center min-w-[20px] leading-none';

  if (btnKhr) btnKhr.className = (currentOrderCurrency === 'KHR' ? activeCls : inactiveCls);
  if (btnThb) btnThb.className = (currentOrderCurrency === 'THB' ? activeCls : inactiveCls);
  if (btnUsd) btnUsd.className = (currentOrderCurrency === 'USD' ? activeCls : inactiveCls);

  onPriceRawInput(false);
}

function onPriceRawInput(isTyping = false) {
  const priceRawInput = document.getElementById('order-field-price-raw');
  const totalUsdInput = document.getElementById('order-field-total-usd');
  const raw = cleanNumber(priceRawInput?.value);

  if (!raw || raw <= 0) {
    if (totalUsdInput) totalUsdInput.value = '';
    calculateOrderFinancials();
    return;
  }

  // ពេលវាយបញ្ចូល បើទឹកប្រាក់ធំជាង ឬស្មើ 10,000 កំណត់ស្វ័យប្រវត្តិជាប្រាក់រៀល (KHR)
  if (isTyping && raw >= 10000 && currentOrderCurrency !== 'KHR') {
    setOrderCurrency('KHR');
    return;
  }

  let totalUsd = 0;
  if (currentOrderCurrency === 'KHR') {
    // 360,000៛ / 4000 = $90.00
    totalUsd = raw / 4000;
  } else if (currentOrderCurrency === 'THB') {
    // រូបមន្តពិតតាម Google Sheet Col N: (M * 0.97) / 35.6
    totalUsd = (raw * 0.97) / 35.6;
  } else if (currentOrderCurrency === 'USD') {
    totalUsd = raw;
  }

  if (totalUsdInput) {
    totalUsdInput.value = totalUsd.toFixed(2);
  }
  calculateOrderFinancials();
}

// ==========================================
// Company Team Leaders (22 Official Leaders)
// ==========================================
const COMPANY_TEAM_LEADERS = [
  'Hou_Yarith',
  'Hem_Chanthy',
  'Sroeun_Leanghak',
  'Bech_Udom',
  'Sdey_Sdoeung',
  'Bech_Nora',
  'Vann_Sitha',
  'Vann_Thida',
  'V_Thida_Emmi',
  'Chhorn_Dara',
  'Meng_Samoeuk',
  'Chhoun_Vireak',
  'La_Thida',
  'Nhem_Somrith',
  'N_Somrith_Emmi',
  'Yat_Virakyuth',
  'Sarun_Chhayhor',
  'S_Chhayhor_Emmi',
  'Hong_Heng_Oeurn',
  'Heng_Oeun_Emmi',
  'Kru_Ta',
  'Long_Vuthy',
  'L_Vuthy_Emmi',
  'Sorn_Sabda',
  'Teng_Toeun',
  'Vann_Theary',
  'T_Toeun_Emmi'
];

function renderOrderTeamDropdown(filterText = '') {
  const menu = document.getElementById('order-team-dropdown-menu');
  if (!menu) return;
  const currentVal = (document.getElementById('order-field-team')?.value || '').trim();
  const search = (filterText || '').toLowerCase().trim();
  const filtered = search 
    ? COMPANY_TEAM_LEADERS.filter(item => item.toLowerCase().includes(search))
    : COMPANY_TEAM_LEADERS;

  if (filtered.length === 0) {
    menu.innerHTML = `<div class="px-3 py-2 text-slate-400 text-[11px] text-center italic">រកមិនឃើញ "${filterText}"</div>`;
    return;
  }

  menu.innerHTML = filtered.map(name => {
    const isSelected = (name.toLowerCase() === currentVal.toLowerCase());
    return `
      <button type="button" onclick="selectOrderTeam('${name}')" 
              class="w-full text-left px-3 py-1.5 rounded-xl transition flex items-center justify-between text-xs ${
                isSelected 
                  ? 'bg-orange-500/20 text-orange-400 font-bold border border-orange-500/30' 
                  : 'text-slate-200 hover:bg-white/10 hover:text-white'
              }">
        <div class="flex items-center gap-2 truncate">
          <i data-lucide="user-check" class="w-3.5 h-3.5 ${isSelected ? 'text-orange-400' : 'text-slate-500'} shrink-0"></i>
          <span class="truncate">${name}</span>
        </div>
        ${isSelected ? '<i data-lucide="check" class="w-3.5 h-3.5 text-orange-400 shrink-0"></i>' : ''}
      </button>
    `;
  }).join('');
  if (window.lucide) window.lucide.createIcons();
}

function openOrderTeamDropdown() {
  const menu = document.getElementById('order-team-dropdown-menu');
  const arrow = document.getElementById('team-dropdown-arrow');
  if (!menu) return;
  const input = document.getElementById('order-field-team');
  renderOrderTeamDropdown(input ? input.value : '');
  menu.classList.remove('hidden');
  if (arrow) arrow.classList.add('rotate-180');
}

function closeOrderTeamDropdown() {
  const menu = document.getElementById('order-team-dropdown-menu');
  const arrow = document.getElementById('team-dropdown-arrow');
  if (menu) menu.classList.add('hidden');
  if (arrow) arrow.classList.remove('rotate-180');
}

function toggleOrderTeamDropdown(event) {
  if (event) {
    event.stopPropagation();
    event.preventDefault();
  }
  const menu = document.getElementById('order-team-dropdown-menu');
  if (!menu) return;
  if (menu.classList.contains('hidden')) {
    openOrderTeamDropdown();
  } else {
    closeOrderTeamDropdown();
  }
}

function filterOrderTeamDropdown(val) {
  const menu = document.getElementById('order-team-dropdown-menu');
  if (menu && menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    const arrow = document.getElementById('team-dropdown-arrow');
    if (arrow) arrow.classList.add('rotate-180');
  }
  renderOrderTeamDropdown(val);
}

function selectOrderTeam(teamName) {
  const input = document.getElementById('order-field-team');
  if (input) {
    input.value = teamName;
  }
  try {
    localStorage.setItem('sd_last_team_leader', teamName);
  } catch (_) {}
  closeOrderTeamDropdown();
  if (navigator.vibrate) try { navigator.vibrate(10); } catch (_) {}
}

let currentOrderEntryMode = 'dock'; // 'dock' (3-in-1 fresh order) or 'telegram' (paste from telegram to personal sheet only)

function openNewOrderModal(mode = 'dock') {
  currentOrderEntryMode = mode || 'dock';
  const modal = document.getElementById('new-order-modal');
  if (!modal) return;

  const modalTitle = document.getElementById('order-modal-title');
  const modalSubtitle = document.getElementById('order-modal-subtitle');
  const pasteBox = document.getElementById('order-paste-box');
  const btnHeaderPass = document.getElementById('btn-header-pass');
  const card3in1 = document.getElementById('order-3in1-card');
  const syncToggle = document.getElementById('order-field-sync-company-form');
  const modalBody = document.getElementById('new-order-modal-body');
  if (modalBody) modalBody.scrollTop = 0;

  // Reset Telegram paste box to minimized 1-line state
  const pasteInput = document.getElementById('order-paste-input');
  if (pasteInput) {
    pasteInput.value = '';
    pasteInput.classList.remove('h-36', 'text-left');
    pasteInput.classList.add('h-9', 'text-center');
    pasteInput.setAttribute('rows', '1');
  }

  const orderTypeCard = document.getElementById('order-type-card');
  const stockCapsuleBtn = document.getElementById('btn-order-stock-capsule');

  if (currentOrderEntryMode === 'telegram') {
    if (modalTitle) modalTitle.textContent = 'កត់ត្រាពី Telegram';
    if (modalSubtitle) modalSubtitle.textContent = 'ចូល Google Sheet ផ្ទាល់ខ្លួន';
    if (pasteBox) pasteBox.classList.remove('hidden');
    if (btnHeaderPass) btnHeaderPass.classList.remove('hidden');
    if (card3in1) card3in1.classList.add('hidden'); // Removed from Telegram mode
    if (syncToggle) syncToggle.checked = false; // Strictly OFF for telegram mode by default!
    if (orderTypeCard) orderTypeCard.classList.remove('hidden');
    if (stockCapsuleBtn) {
      stockCapsuleBtn.classList.add('hidden');
      stockCapsuleBtn.style.display = 'none';
    }
  } else {
    // Dock Mode (បញ្ចូលការកុម្ម៉ង់ថ្មី)
    if (modalTitle) modalTitle.textContent = 'បញ្ចូលការកុម្ម៉ង់ថ្មី';
    if (modalSubtitle) modalSubtitle.textContent = 'Sync ផ្ទាល់ខ្លួន & ក្រុមហ៊ុន';
    if (pasteBox) pasteBox.classList.add('hidden');
    if (btnHeaderPass) btnHeaderPass.classList.add('hidden');
    if (card3in1) card3in1.classList.add('hidden'); // Removed from New Order mode
    if (syncToggle) syncToggle.checked = true; // Auto-sync active for 3-in-1 in background
    if (orderTypeCard) orderTypeCard.classList.add('hidden'); // Hidden in dock mode
    if (stockCapsuleBtn) {
      stockCapsuleBtn.classList.remove('hidden');
      stockCapsuleBtn.style.display = '';
      stockCapsuleBtn.onclick = null;
      stockCapsuleBtn.style.cursor = 'default';
      stockCapsuleBtn.classList.remove('active:scale-95');
      stockCapsuleBtn.title = 'ស្តុក';
      stockCapsuleBtn.innerHTML = `<span id="label-order-stock-capsule">ស្តុក</span>`;
    }
  }

  const profile = (typeof getProfileData === 'function') ? getProfileData() : {};
  const sellerInput = document.getElementById('order-field-seller');
  const sellerPhoneInput = document.getElementById('order-field-seller-phone');
  const customerPhoneInput = document.getElementById('order-field-phone');
  const dateInput = document.getElementById('order-field-date');
  const orderIdInput = document.getElementById('order-field-id');

  const todayIso = typeof getLocalIsoDate === 'function' ? getLocalIsoDate(new Date()) : new Date().toISOString().slice(0, 10);
  const isMaster = (window.DataService && typeof window.DataService.isMasterSheet === 'function' && window.DataService.isMasterSheet());
  
  const savedSeller = localStorage.getItem('sd_last_seller') || '';
  if (sellerInput) {
    sellerInput.value = savedSeller;
    onSellerNameChange(savedSeller);
  }
  
  const savedSellerPhone = localStorage.getItem('sd_last_seller_phone');
  if (sellerPhoneInput) {
    sellerPhoneInput.value = formatKhmerPhone(savedSellerPhone || (profile.phone || ''));
  }

  // Initialize Team Leader: Bech_Nora by default or from localStorage
  const teamInput = document.getElementById('order-field-team');
  const savedTeam = localStorage.getItem('sd_last_team_leader') || 'Bech_Nora';
  if (teamInput) {
    teamInput.value = savedTeam;
  }
  closeOrderTeamDropdown();

  if (customerPhoneInput && customerPhoneInput.value) {
    customerPhoneInput.value = formatKhmerPhone(customerPhoneInput.value);
  }

  if (dateInput) {
    dateInput.value = todayIso;
    updateOrderDateDisplay(todayIso);
  }

  // Order ID: Leave empty by default with placeholder '#' (no auto-increment, as instructed by Brother Sdoeung)
  if (orderIdInput) {
    orderIdInput.value = '';
    orderIdInput.placeholder = '#';
  }

  // Attach phone formatting listeners
  if (sellerPhoneInput && !sellerPhoneInput._phoneFormatBound) {
    sellerPhoneInput._phoneFormatBound = true;
    sellerPhoneInput.addEventListener('input', (e) => {
      e.target.value = formatKhmerPhone(e.target.value);
    });
  }
  if (customerPhoneInput && !customerPhoneInput._phoneFormatBound) {
    customerPhoneInput._phoneFormatBound = true;
    customerPhoneInput.addEventListener('input', (e) => {
      e.target.value = formatKhmerPhone(e.target.value);
      checkOrderSubmitValidation();
    });
  }

  // Reset products: Yong Liang: 1, Yong Liang Plus: 1, others: 0
  currentOrderProducts = { yl: 1, ylp: 1, kn: 0, pdo: 0, emmi: 0, sgp: 0, free: 0 };
  updateProductQtyDisplay();
  setOrderType('standard');
  
  // Default currency based on delivery carrier (THB strictly for Thai, KHR for Cambodian carriers)
  const deliverySel = document.getElementById('order-field-delivery');
  const isThaiDelivery = (deliverySel?.value || '').includes('Thai');
  setOrderCurrency(isThaiDelivery ? 'THB' : 'KHR');

  // Collapse extra products by default
  toggleExtraOrderProducts(false);

  // Initialize swipe gestures on product cards
  setTimeout(initProductSwipeGestures, 50);

  if (typeof updateDeliveryShippingDefault === 'function') updateDeliveryShippingDefault();
  if (typeof updateModalLanguage === 'function') updateModalLanguage();
  checkOrderSubmitValidation();

  if (stockCapsuleBtn) {
    if (currentOrderEntryMode === 'telegram') {
      stockCapsuleBtn.classList.add('hidden');
      stockCapsuleBtn.style.display = 'none';
    } else {
      stockCapsuleBtn.classList.remove('hidden');
      stockCapsuleBtn.style.display = '';
    }
  }

  modal.classList.remove('hidden');
  setDockVisible(true);
  const orderBody = document.getElementById('new-order-modal-body');
  if (orderBody && typeof hookScrollableForDock === 'function') {
    hookScrollableForDock(orderBody, false);
  }
  if (window.lucide) window.lucide.createIcons();
  if (navigator.vibrate) try { navigator.vibrate(15); } catch (_) {}
}

function closeNewOrderModal() {
  const modal = document.getElementById('new-order-modal');
  if (!modal) return;
  const miniCalPopup = document.getElementById('order-mini-calendar-popup');
  if (miniCalPopup) miniCalPopup.classList.add('hidden');
  closeOrderTeamDropdown();
  const delivMenu = document.getElementById('order-delivery-dropdown-menu');
  if (delivMenu) delivMenu.classList.add('hidden');
  const shipMenu = document.getElementById('order-ship-presets-dropdown-menu');
  if (shipMenu) shipMenu.classList.add('hidden');
  modal.classList.add('hidden');
  setDockVisible(true);
}

function checkOrderSubmitValidation() {
  const totalBoxes = (currentOrderProducts.yl || 0) + (currentOrderProducts.ylp || 0) + 
                     (currentOrderProducts.kn || 0) + (currentOrderProducts.pdo || 0) + 
                     (currentOrderProducts.emmi || 0) + (currentOrderProducts.sgp || 0) + 
                     (currentOrderProducts.free || 0);
  const phone = (document.getElementById('order-field-phone')?.value || '').trim().replace(/[\s\-\.]/g, '');
  const btn = document.getElementById('btn-submit-order');
  if (!btn) return;

  // បើមិនទាន់អាចបញ្ជូនបាន (0 ប្រអប់ ឬលេខទូរស័ព្ទតិចជាង ៨ ខ្ទង់) គឺ disable & dim
  const isReady = (totalBoxes > 0 && phone.length >= 8);
  if (isReady) {
    btn.disabled = false;
    btn.classList.remove('opacity-40', 'cursor-not-allowed', 'grayscale');
    btn.classList.add('shadow-lg', 'shadow-orange-500/25');
  } else {
    btn.disabled = true;
    btn.classList.add('opacity-40', 'cursor-not-allowed', 'grayscale');
    btn.classList.remove('shadow-lg', 'shadow-orange-500/25');
  }
}

function clearOrderInput() {
  const pasteInput = document.getElementById('order-paste-input');
  if (pasteInput) {
    pasteInput.value = '';
    pasteInput.classList.remove('h-36', 'text-left');
    pasteInput.classList.add('h-9', 'text-center');
    pasteInput.setAttribute('rows', '1');
  }

  const modalBody = document.getElementById('new-order-modal-body');
  if (modalBody) {
    modalBody.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const idInput = document.getElementById('order-field-id');
  if (idInput) {
    idInput.value = '';
    idInput.placeholder = '#';
  }

  const dateInput = document.getElementById('order-field-date');
  const todayIso = typeof getLocalIsoDate === 'function' ? getLocalIsoDate(new Date()) : new Date().toISOString().slice(0, 10);
  if (dateInput) dateInput.value = todayIso;
  updateOrderDateDisplay(todayIso);

  const sellerInput = document.getElementById('order-field-seller');
  if (sellerInput) {
    sellerInput.value = '';
    onSellerNameChange('');
  }

  const custInput = document.getElementById('order-field-customer');
  if (custInput) custInput.value = '';

  const phoneInput = document.getElementById('order-field-phone');
  if (phoneInput) phoneInput.value = '';

  const locInput = document.getElementById('order-field-location');
  if (locInput) locInput.value = '';

  const noteInput = document.getElementById('order-field-note');
  if (noteInput) noteInput.value = '';

  const sellerPhoneInput = document.getElementById('order-field-seller-phone');
  if (sellerPhoneInput) {
    sellerPhoneInput.value = '';
  }

  const deliveryInput = document.getElementById('order-field-delivery');
  if (deliveryInput) deliveryInput.value = 'VET (COD)';

  const shipInput = document.getElementById('order-field-ship');
  if (shipInput) shipInput.value = '';

  const priceRawInput = document.getElementById('order-field-price-raw');
  if (priceRawInput) priceRawInput.value = '';

  const totalUsdInput = document.getElementById('order-field-total-usd');
  if (totalUsdInput) totalUsdInput.value = '';

  if (typeof updateDeliveryShippingDefault === 'function') {
    updateDeliveryShippingDefault();
  } else {
    setOrderCurrency('KHR');
  }

  currentOrderProducts = { yl: 0, ylp: 0, kn: 0, pdo: 0, emmi: 0, sgp: 0, free: 0 };
  updateProductQtyDisplay();
  setOrderType('standard');
  calculateOrderFinancials();
  checkOrderSubmitValidation();

  showToastNotification('សម្អាតជោគជ័យ ✓');
  if (navigator.vibrate) try { navigator.vibrate(15); } catch (_) {}
}

function switchOrderMode(mode) {
  // Retained for backward compatibility
  currentOrderMode = mode;
  checkOrderSubmitValidation();
}

function toggleOrderTypeCapsule() {
  if (currentOrderEntryMode === 'dock') {
    // សម្រាប់ផ្ទាំងការកុម្ម៉ង់ថ្មី គឺរក្សាទុកជា «ស្តុក» ថេរ មិនផ្លាស់ប្តូរទៅរង្វាន់ទេ
    return;
  }
  if (currentOrderType === 'standard') {
    setOrderType('reward');
    showToastNotification('🎁 ប្តូរទៅជា «លក់រង្វាន់» (ថ្លៃដើមស្តុក $0)');
  } else {
    setOrderType('standard');
    showToastNotification('📦 ប្តូរទៅជា «ដាក់ចូលស្តុក» (គិតថ្លៃដើមស្តុក $24)');
  }
}

function setOrderType(type) {
  if (currentOrderEntryMode === 'dock') {
    type = 'standard'; // សម្រាប់ផ្ទាំងការកុម្ម៉ង់ថ្មី គឺស្តង់ដារ «ស្តុក» ជានិច្ច
  }
  currentOrderType = type;
  const capsuleBtn = document.getElementById('btn-order-stock-capsule');
  const btnStd = document.getElementById('btn-type-standard');
  const btnRwd = document.getElementById('btn-type-reward');
  const desc = document.getElementById('order-type-desc');
  const orderIdGroup = document.getElementById('group-order-id');
  const noteInput = document.getElementById('order-field-note');
  const sellerPhoneInput = document.getElementById('order-field-seller-phone');

  if (type === 'reward') {
    const isMaster = (window.DataService && typeof window.DataService.isMasterSheet === 'function' && window.DataService.isMasterSheet());
    if (capsuleBtn) {
      const isTele = (currentOrderEntryMode === 'telegram');
      capsuleBtn.className = 'px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/50 text-xs font-bold text-amber-400 active:scale-95 transition flex items-center justify-center shadow-sm' + (isTele ? ' hidden' : '');
      capsuleBtn.style.display = isTele ? 'none' : '';
      capsuleBtn.innerHTML = `<span id="label-order-stock-capsule">រង្វាន់</span>`;
    }
    if (btnRwd) btnRwd.className = 'p-2 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 bg-amber-500/20 border-amber-500 text-amber-400';
    if (btnStd) btnStd.className = 'p-2 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 bg-white/5 border-white/10 text-slate-400 hover:text-white';
    if (desc) desc.innerText = isMaster ? 'លក់រង្វាន់: មិនគិតថ្លៃដើមស្តុក ($0) និងកំណត់លេខអ្នកលក់ជា 097 859 5526 ស្វ័យប្រវត្តិ។' : 'លក់រង្វាន់: មិនគិតថ្លៃដើមស្តុក ($0)។';
    if (orderIdGroup) orderIdGroup.classList.add('opacity-40', 'pointer-events-none');
    if (noteInput && !noteInput.value) noteInput.value = 'លក់រង្វាន់';
    if (sellerPhoneInput && isMaster) sellerPhoneInput.value = '097 859 5526';
  } else {
    if (capsuleBtn) {
      const isTele = (currentOrderEntryMode === 'telegram');
      const isDock = (currentOrderEntryMode === 'dock');
      capsuleBtn.className = isDock 
        ? 'px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/40 text-xs font-bold text-orange-400 flex items-center justify-center shadow-sm select-none cursor-default'
        : ('px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/40 text-xs font-bold text-orange-400 active:scale-95 transition flex items-center justify-center shadow-sm' + (isTele ? ' hidden' : ''));
      capsuleBtn.style.display = isTele ? 'none' : '';
      if (isDock) capsuleBtn.onclick = null;
      capsuleBtn.innerHTML = `<span id="label-order-stock-capsule">ស្តុក</span>`;
    }
    if (btnStd) btnStd.className = 'p-2 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 bg-orange-500/20 border-orange-500 text-orange-400';
    if (btnRwd) btnRwd.className = 'p-2 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 bg-white/5 border-white/10 text-slate-400 hover:text-white';
    if (desc) desc.innerText = 'គិតថ្លៃដើមស្តុកធម្មតា ($24/ប្រអប់) និងបញ្ចូលលេខ Order ID ផ្លូវការ។';
    if (orderIdGroup) orderIdGroup.classList.remove('opacity-40', 'pointer-events-none');
    if (noteInput && noteInput.value === 'លក់រង្វាន់') noteInput.value = '';
    if (typeof updateDeliveryShippingDefault === 'function') updateDeliveryShippingDefault();
  }
  calculateOrderFinancials();
  checkOrderSubmitValidation();
  if (window.lucide) window.lucide.createIcons();
}

function adjustProductQty(prod, delta) {
  if (currentOrderProducts[prod] !== undefined) {
    currentOrderProducts[prod] = Math.max(0, (currentOrderProducts[prod] || 0) + delta);
    updateProductQtyDisplay();
    calculateOrderFinancials();
    checkOrderSubmitValidation();
    if (navigator.vibrate) try { navigator.vibrate(10); } catch (_) {}
  }
}

function updateProductQtyDisplay() {
  const prods = ['yl', 'ylp', 'kn', 'pdo', 'emmi', 'sgp', 'free'];
  // 6 កម្រិតស្មើគ្នាតាម iOS Volume Bar (0% -> 17% -> 34% -> 50% -> 68% -> 85% -> 100%)
  const steps = [0, 17, 34, 50, 68, 85, 100];

  prods.forEach(p => {
    const qty = currentOrderProducts[p] || 0;
    const el = document.getElementById(`qty-disp-${p}`);
    if (el) el.innerText = qty;

    const fillBar = document.getElementById(`fill-bar-${p}`);
    if (fillBar) {
      const pct = qty >= 6 ? 100 : (steps[qty] || 0);
      fillBar.style.width = `${pct}%`;
    }

    const card = document.getElementById(`product-card-${p}`);
    if (card) {
      if (qty > 0) {
        card.classList.add('border-white/25');
        card.classList.remove('border-white/10');
      } else {
        card.classList.remove('border-white/25');
        card.classList.add('border-white/10');
      }
    }
  });

  const total = (currentOrderProducts.yl || 0) + (currentOrderProducts.ylp || 0) + 
                (currentOrderProducts.kn || 0) + (currentOrderProducts.pdo || 0) + 
                (currentOrderProducts.emmi || 0) + (currentOrderProducts.sgp || 0) + 
                (currentOrderProducts.free || 0);

  const badge = document.getElementById('order-total-boxes-badge');
  if (badge) badge.innerText = `សរុប: ${total} ប្រអប់`;

  checkOrderSubmitValidation();
}

function toggleExtraProducts() {
  const panel = document.getElementById('extra-products-accordion');
  const btnText = document.getElementById('extra-prod-btn-text');
  const icon = document.getElementById('extra-prod-icon');
  if (!panel) return;
  const isHidden = panel.classList.contains('hidden');
  if (isHidden) {
    panel.classList.remove('hidden');
    if (btnText) btnText.innerText = '- លាក់មុខទំនិញបន្ថែម';
    if (icon) icon.classList.add('rotate-180');
  } else {
    panel.classList.add('hidden');
    if (btnText) btnText.innerText = '+ បង្ហាញមុខទំនិញបន្ថែម (KN, PDO, Free)';
    if (icon) icon.classList.remove('rotate-180');
  }
}

function calculateOrderFinancials() {
  const paidBoxes = (currentOrderProducts.yl || 0) + (currentOrderProducts.ylp || 0) + 
                    (currentOrderProducts.kn || 0) + (currentOrderProducts.pdo || 0) + 
                    (currentOrderProducts.emmi || 0) + (currentOrderProducts.sgp || 0);

  const totalUsdInput = document.getElementById('order-field-total-usd');
  const shipInput = document.getElementById('order-field-ship');

  const totalUsd = cleanNumber(totalUsdInput?.value) || 0;
  const shipFee = cleanNumber(shipInput?.value) || 0;

  let stockCost = 0;
  if (currentOrderType === 'reward') {
    stockCost = 0;
  } else {
    stockCost = paidBoxes * 24.00;
  }

  const profit = Math.max(0, totalUsd - stockCost - shipFee);

  const stockDisp = document.getElementById('summary-stock-disp');
  const profitDisp = document.getElementById('summary-profit-disp');

  if (stockDisp) stockDisp.innerText = currentOrderType === 'reward' ? '$0.00 (រង្វាន់)' : `$${stockCost.toFixed(2)}`;
  if (profitDisp) profitDisp.innerText = `$${profit.toFixed(2)}`;
}

function expandOrderPasteInput() {
  const pasteInput = document.getElementById('order-paste-input');
  if (pasteInput) {
    pasteInput.classList.remove('h-9', 'text-center');
    pasteInput.classList.add('h-36', 'text-left');
    pasteInput.setAttribute('rows', '5');
  }
}

function scrollOrderModalToForm() {
  setTimeout(() => {
    const pasteBox = document.getElementById('order-paste-box');
    const modalBody = document.getElementById('new-order-modal-body');
    if (pasteBox && modalBody) {
      const targetScroll = pasteBox.offsetTop + pasteBox.offsetHeight - 8;
      modalBody.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  }, 100);
}

async function pasteClipboardToOrderInput() {
  expandOrderPasteInput();
  const btn = document.getElementById('btn-header-pass');
  if (btn) {
    btn.classList.add('scale-90', 'bg-emerald-600');
    setTimeout(() => {
      btn.classList.remove('scale-90', 'bg-emerald-600');
    }, 200);
  }

  const input = document.getElementById('order-paste-input');

  // 1. បើមានអត្ថបទស្រាប់ក្នុងប្រអប់ Parse ភ្លាមៗ (ចុចតែ ១ ដង)
  if (input && input.value.trim().length > 10) {
    parsePastedOrderText(false);
    scrollOrderModalToForm();
    return;
  }

  // 2. បើប្រអប់ទំនេរ អានពី Clipboard មក Parse
  try {
    if (navigator.clipboard && navigator.clipboard.readText) {
      const text = await navigator.clipboard.readText();
      if (text && text.trim()) {
        if (input) input.value = text;
        parsePastedOrderText(false);
        scrollOrderModalToForm();
        return;
      }
    }
  } catch (e) {
    console.warn('Clipboard read error:', e);
  }

  if (input && input.value.trim()) {
    parsePastedOrderText(false);
    scrollOrderModalToForm();
  } else {
    showToastNotification('សូមចម្លងសារ ឬចុចបិទភ្ជាប់ក្នុងប្រអប់');
  }
}

function parsePastedOrderText(silent = false) {
  expandOrderPasteInput();
  const input = document.getElementById('order-paste-input');
  const text = (input?.value || '').trim();
  if (!text) {
    if (!silent) showToastNotification('សូមបិទភ្ជាប់អត្ថបទសារជាមុនសិន!');
    return;
  }

  const extract = (regex) => {
    const m = text.match(regex);
    return m ? m[1].trim() : '';
  };

  const orderId = extract(/(?:Order Row|Order ID|Order|ID)[:\s]*([#\w\d-]+)/i);
  const dateRaw = extract(/(?:កាលបរិច្ឆេទ\(Date\)|Date|កាលបរិច្ឆេទ)[:\s]*([^\n\r]+)/i);
  const seller = extract(/(?:ឈ្មោះអ្នកលក់|Seller(?:'s)? Name)[:\s]*([^\n\r]+)/i);
  const sellerNo = extract(/(?:លេខអ្នកលក់\(Seller No\)|Seller No|លេខអ្នកលក់)[:\s]*([^\n\r]+)/i);
  const ylQty = extract(/\[Yong Liang\][:\s]*(\d+)/i) || extract(/Yong Liang[:\s]*(\d+)/i);
  const ylpQty = extract(/\[Yong Liang Plus\][:\s]*(\d+)/i) || extract(/Yong Liang Plus[:\s]*(\d+)/i);
  const knQty = extract(/\[KN\][:\s]*(\d+)/i) || extract(/KN[:\s]*(\d+)/i) || extract(/\[Kidney Pro\][:\s]*(\d+)/i) || extract(/Kidney Pro[:\s]*(\d+)/i);
  const pdoQty = extract(/\[P D\.O\][:\s]*(\d+)/i) || extract(/P D\.O[:\s]*(\d+)/i) || extract(/\[Pro D\.O\][:\s]*(\d+)/i) || extract(/Pro D\.O[:\s]*(\d+)/i);
  const emmiQty = extract(/\[Emmi\][:\s]*(\d+)/i) || extract(/Emmi[:\s]*(\d+)/i);
  const sgpQty = extract(/\[SG\s*Pro\][:\s]*(\d+)/i) || extract(/SG\s*Pro[:\s]*(\d+)/i) || extract(/\[S\.G\s*Pro\][:\s]*(\d+)/i) || extract(/S\.G\s*Pro[:\s]*(\d+)/i);
  const freeQty = extract(/\[Free\][:\s]*(\d+)/i) || extract(/Free[:\s]*(\d+)/i) || extract(/\[ថែម\][:\s]*(\d+)/i) || extract(/ថែម[:\s]*(\d+)/i);
  const priceRaw = extract(/(?:តម្លៃ\(Price\)|Price|តម្លៃ)[:\s]*(\d+[\d,\.]*)/i);
  const receiverNo = extract(/(?:លេខអ្នកទទួល\(Receiver No\)|Receiver No|លេខអ្នកទទួល)[:\s]*([^\n\r]+)/i);
  const address = extract(/(?:អាសយដ្ឋាន\(Address\)|Address|អាសយដ្ឋាន|Location)[:\s]*([^\n\r]+)/i);
  const delivery = extract(/(?:ដឹកជញ្ជូនតាម\(Delivery\)|Delivery|ដឹកជញ្ជូនតាម)[:\s]*([^\n\r]+)/i);
  const teamRaw = extract(/(?:ថ្នាក់ដឹកនាំ|Team Leader|Team)[:\s]*([^\n\r]+)/i);

  if (orderId) {
    const idField = document.getElementById('order-field-id');
    if (idField) idField.value = orderId.startsWith('#') ? orderId : `#${orderId}`;
  }

  if (teamRaw) {
    const cleanTeam = teamRaw.trim().replace(/^[@#]/, '');
    const matched = COMPANY_TEAM_LEADERS.find(t => t.toLowerCase() === cleanTeam.toLowerCase()) ||
                    COMPANY_TEAM_LEADERS.find(t => t.toLowerCase().includes(cleanTeam.toLowerCase()));
    const teamField = document.getElementById('order-field-team');
    if (teamField && matched) {
      teamField.value = matched;
    }
  }

  if (dateRaw) {
    let iso = '';
    const ddmmyyyy = dateRaw.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})/);
    if (ddmmyyyy) {
      iso = `${ddmmyyyy[3]}-${ddmmyyyy[2].padStart(2, '0')}-${ddmmyyyy[1].padStart(2, '0')}`;
    } else {
      const d = new Date(dateRaw);
      if (!isNaN(d.getTime())) {
        iso = typeof getLocalIsoDate === 'function' ? getLocalIsoDate(d) : d.toISOString().slice(0, 10);
      }
    }
    const dateField = document.getElementById('order-field-date');
    if (dateField && iso) {
      dateField.value = iso;
      updateOrderDateDisplay(iso);
    }
  }

  if (seller) {
    const sField = document.getElementById('order-field-seller');
    if (sField) {
      sField.value = seller;
      onSellerNameChange(seller);
    }
  }
  if (receiverNo) {
    const rField = document.getElementById('order-field-phone');
    if (rField) rField.value = formatKhmerPhone(receiverNo);
  }
  if (address) {
    const aField = document.getElementById('order-field-location');
    if (aField) aField.value = address;
  }

  // មុខទំនិញ
  currentOrderProducts.yl = ylQty ? parseInt(ylQty) : 0;
  currentOrderProducts.ylp = ylpQty ? parseInt(ylpQty) : 0;
  currentOrderProducts.kn = knQty ? parseInt(knQty) : 0;
  currentOrderProducts.pdo = pdoQty ? parseInt(pdoQty) : 0;
  currentOrderProducts.emmi = emmiQty ? parseInt(emmiQty) : 0;
  currentOrderProducts.sgp = sgpQty ? parseInt(sgpQty) : 0;
  currentOrderProducts.free = freeQty ? parseInt(freeQty) : 0;

  // Auto-expand extra products if Emmi or SGP has quantity
  if (currentOrderProducts.emmi > 0 || currentOrderProducts.sgp > 0) {
    toggleExtraOrderProducts(true);
  }

  if (priceRaw) {
    const num = cleanNumber(priceRaw);
    const priceInput = document.getElementById('order-field-price-raw');
    const totalInput = document.getElementById('order-field-total-usd');
    if (priceInput) priceInput.value = num;

    if (num >= 10000) {
      setOrderCurrency('KHR');
      if (totalInput) totalInput.value = (num / 4000).toFixed(2);
    } else if (num >= 500) {
      setOrderCurrency('THB');
      if (totalInput) totalInput.value = ((num * 0.97) / 35.6).toFixed(2);
    } else if (num > 0) {
      setOrderCurrency('USD');
      if (totalInput) totalInput.value = num.toFixed(2);
    }
  }

  if (delivery) {
    const sel = document.getElementById('order-field-delivery');
    if (sel) {
      const dLower = delivery.toLowerCase();
      if (dLower.includes('vet') && dLower.includes('cod')) {
        sel.value = 'VET (COD)';
      } else if (dLower.includes('j&t') && dLower.includes('cod')) {
        sel.value = 'J&T (COD)';
      } else if (dLower.includes('thai') || dLower.includes('ថៃ')) {
        sel.value = (dLower.includes('❌') || dLower.includes('no') || dLower.includes('មិន')) ? 'Thai ❌COD' : 'Thai ✅COD';
      } else if (dLower.includes('vet')) {
        sel.value = 'VET Express';
      } else if (dLower.includes('j&t') || dLower.includes('jt')) {
        sel.value = 'J&T Cambodia';
      } else if (dLower.includes('motor') || dLower.includes('ម៉ូតូ') || dLower.includes('moto')) {
        sel.value = 'Motor ក្រុមហ៊ុន';
      }
    }
  }

  if (typeof updateDeliveryShippingDefault === 'function') updateDeliveryShippingDefault();

  const currentDeliv = document.getElementById('order-field-delivery')?.value || '';
  if (sellerNo && currentDeliv !== 'VET (COD)') {
    const phoneInput = document.getElementById('order-field-seller-phone');
    if (phoneInput) phoneInput.value = formatKhmerPhone(sellerNo);
  }

  updateProductQtyDisplay();
  calculateOrderFinancials();
  checkOrderSubmitValidation();

  if (!silent) {
    showToastNotification('Pass ជោគជ័យ ✓');
    if (navigator.vibrate) try { navigator.vibrate(20); } catch (_) {}
  }
  scrollOrderModalToForm();
}

async function submitNewOrder() {
  const getVal = (id) => (document.getElementById(id)?.value || '').trim();

  const isReward = (currentOrderType === 'reward');
  const orderId = isReward ? '' : getVal('order-field-id');
  
  // Format date to DD/MM/YYYY for Google Sheet
  const dateText = getVal('order-field-date-text');
  const dateRaw = dateText || getVal('order-field-date');
  let date = dateRaw;
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateRaw)) {
    const p = dateRaw.split('-');
    date = `${p[2]}/${p[1]}/${p[0]}`;
  } else if (!date) {
    const now = new Date();
    date = `${String(now.getDate()).padStart(2, '0')}/${String(now.getMonth() + 1).padStart(2, '0')}/${now.getFullYear()}`;
  }

  const isMaster = (window.DataService && typeof window.DataService.isMasterSheet === 'function' && window.DataService.isMasterSheet());
  const activeProf = (typeof getProfileData === 'function') ? getProfileData() : {};
  const defaultSeller = activeProf.name || 'សមាជិក Bostar';
  const seller = getVal('order-field-seller') || defaultSeller;
  const phone = getVal('order-field-phone');
  const location = getVal('order-field-location');
  const customer = getVal('order-field-customer');
  const delivery = getVal('order-field-delivery') || 'VET (COD)';
  const totalUsd = cleanNumber(getVal('order-field-total-usd')) || 90.00;
  const shipFee = cleanNumber(getVal('order-field-ship')) || 3.00;
  const priceRaw = cleanNumber(getVal('order-field-price-raw')) || 360000;
  const note = getVal('order-field-note') || (isReward ? 'លក់រង្វាន់' : '');
  const team = getVal('order-field-team') || 'Bech_Nora';

  // ចងចាំឈ្មោះអ្នកលក់ និងថ្នាក់ដឹកនាំក្នុង LocalStorage សម្រាប់លើកក្រោយ
  if (seller) {
    try { localStorage.setItem('sd_last_seller', seller); } catch (_) {}
  }
  if (team) {
    try { localStorage.setItem('sd_last_team_leader', team); } catch (_) {}
  }
  let sellerPhone = getVal('order-field-seller-phone') || (activeProf.phone || '');
  if (sellerPhone) {
    try { localStorage.setItem('sd_last_seller_phone', sellerPhone); } catch (_) {}
  }

  // គណនាប្រាក់បាត (Thai Baht) សម្រាប់ Col M ក្នុង Google Sheet ដើម្បីកុំឲ្យខូចរូបមន្ត Col N
  let thaiBaht = priceRaw;
  if (currentOrderCurrency === 'KHR') {
    // បើសិនជាប្រាក់រៀល (360,000៛) បំប្លែងទៅបាត (3303฿) ដើម្បីឲ្យរូបមន្ត Col N ស្មើ $90.00 គត់
    thaiBaht = Math.round((totalUsd * 35.6) / 0.97);
  } else if (currentOrderCurrency === 'USD') {
    thaiBaht = Math.round((totalUsd * 35.6) / 0.97);
  }

  const totalBoxes = (currentOrderProducts.yl || 0) + (currentOrderProducts.ylp || 0) + 
                     (currentOrderProducts.kn || 0) + (currentOrderProducts.pdo || 0) + 
                     (currentOrderProducts.emmi || 0) + (currentOrderProducts.sgp || 0) + 
                     (currentOrderProducts.free || 0);

  if (totalBoxes === 0) {
    showToastNotification('សូមជ្រើសរើសចំនួនប្រអប់ទំនិញ!');
    return;
  }

  if (!phone || phone.replace(/[\s\-\.]/g, '').length < 8) {
    showToastNotification('សូមបញ្ចូលលេខទូរសព្ទអ្នកទទួល!');
    return;
  }

  // ពិនិត្យភាពស្ទួនតាម Order ID (លក្ខខណ្ឌ៖ លេខទូរស័ព្ទដូចគ្នាអនុញ្ញាត តែ Order ID / Row ដូចគ្នាមិនបានទេ)
  if (orderId && DataService.data && Array.isArray(DataService.data.personalSales)) {
    const isDup = DataService.data.personalSales.some(s => s.orderId && s.orderId.toLowerCase() === orderId.toLowerCase());
    if (isDup) {
      alert(`⚠️ លេខកុម្ម៉ង់ ${orderId} នេះមានរួចហើយក្នុង Personal Sales! មិនអាចបញ្ចូលស្ទួនបានទេ។`);
      return;
    }
  }

  const btn = document.getElementById('btn-submit-order');
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i><span>កំពុងរក្សាទុក...</span>`;
    if (window.lucide) window.lucide.createIcons();
  }

  const stockCost = isReward ? 0 : (totalBoxes * 24.00);
  const profit = Math.max(0, totalUsd - stockCost - shipFee);

  const prodParts = [];
  if (currentOrderProducts.yl > 0) prodParts.push(currentOrderProducts.yl > 1 ? `YL (${currentOrderProducts.yl})` : `YL`);
  if (currentOrderProducts.ylp > 0) prodParts.push(currentOrderProducts.ylp > 1 ? `YLP (${currentOrderProducts.ylp})` : `YLP`);
  if (currentOrderProducts.kn > 0) prodParts.push(`KN (${currentOrderProducts.kn})`);
  if (currentOrderProducts.pdo > 0) prodParts.push(`PDO (${currentOrderProducts.pdo})`);
  if (currentOrderProducts.emmi > 0) prodParts.push(`Emmi (${currentOrderProducts.emmi})`);
  if (currentOrderProducts.sgp > 0) prodParts.push(`SGP (${currentOrderProducts.sgp})`);
  if (currentOrderProducts.free > 0) prodParts.push(`Free (${currentOrderProducts.free})`);
  const productSummary = prodParts.join(', ') || 'ទំនិញ';

  const newRecord = {
    date: date,
    isoDate: /^\d{4}-\d{2}-\d{2}$/.test(dateRaw) ? dateRaw : (typeof ddmmyyyyToIso === 'function' ? ddmmyyyyToIso(date) : date),
    orderId: orderId,
    recordId: `REC-${Date.now().toString().slice(-4)}`,
    customer: customer,
    seller: seller,
    sellerLatin: getSellerLatinName(seller),
    sellerPhone: sellerPhone,
    team: team,
    location: location,
    phone: phone,
    qtyYL: currentOrderProducts.yl || 0,
    qtyYLP: currentOrderProducts.ylp || 0,
    qtyKN: currentOrderProducts.kn || 0,
    qtyPDO: currentOrderProducts.pdo || 0,
    qtyEmmi: currentOrderProducts.emmi || 0,
    qtySGP: currentOrderProducts.sgp || 0,
    freeQty: currentOrderProducts.free || 0,
    totalBoxQty: totalBoxes,
    product: productSummary,
    price: priceRaw,
    thaiBaht: thaiBaht,
    totalAmount: totalUsd,
    shipFee: shipFee,
    deliveryMethod: delivery,
    codStatus: 'បានដាក់ការកុម្ម៉ង់', // កំណត់ពាក្យ "បានដាក់ការកុម្ម៉ង់" ជា Default
    profit: profit,
    note: note,
    createdAt: Date.now()
  };

  // 1. Immediately inject into live DataService in-memory
  if (DataService.data && Array.isArray(DataService.data.personalSales)) {
    DataService.data.personalSales.unshift(newRecord);
    if (DataService.data.meta) DataService.data.meta.totalSalesCount++;
  }

  // 2. Persist to localStorage pending orders
  try {
    const existing = JSON.parse(localStorage.getItem('sd_local_orders') || '[]');
    existing.unshift(newRecord);
    localStorage.setItem('sd_local_orders', JSON.stringify(existing));
  } catch (_) {}

  // 3. យុទ្ធសាស្ត្រ 3 in 1: បញ្ជូនចូល Google Sheet ផ្ទាល់ខ្លួន & Google Form ក្រុមហ៊ុន (បើ Mode Telegram មិនបញ្ជូនទៅក្រុមហ៊ុនដាច់ខាត)
  const syncToCompany = (currentOrderEntryMode !== 'telegram') && (document.getElementById('order-field-sync-company-form')?.checked !== false);
  const webhookUrl = getAppsScriptWebhookUrl();
  let syncSuccess = false;
  let companyFormSuccess = false;

  const syncTasks = [];

  // 3A. Personal Apps Script Webhook
  if (navigator.onLine && webhookUrl && webhookUrl.startsWith('http')) {
    syncTasks.push(
      fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'add_order',
          sheetId: (typeof DataService !== 'undefined' && DataService.getActiveSheetId) ? DataService.getActiveSheetId() : '',
          data: newRecord
        })
      }).then(() => {
        syncSuccess = true;
      }).catch(e => {
        console.warn('Personal Webhook POST error:', e);
      })
    );
  }

  // 3B. Company Google Form Auto-Sync (Only in 3-in-1 dock mode)
  if (syncToCompany && navigator.onLine) {
    syncTasks.push(
      submitToCompanyGoogleForm(newRecord).then(ok => {
        companyFormSuccess = ok;
      }).catch(e => {
        console.warn('Company Form submit error:', e);
      })
    );
  }

  if (syncTasks.length > 0) {
    await Promise.allSettled(syncTasks);
  }

  if (syncSuccess || companyFormSuccess) {
    const successMsg = (syncToCompany && companyFormSuccess) 
      ? '✅ បានកត់ត្រាការលក់ និងបញ្ជូនចូល Google Form ក្រុមហ៊ុនជោគជ័យ! 🚀'
      : '✅ បានកត់ត្រាការលក់ចូល Google Sheet ជោគជ័យ! 🚀';

    if (typeof addAppNotification === 'function') {
      addAppNotification({
        type: 'order',
        title: (syncToCompany ? 'កុម្ម៉ង់ 3-in-1: ' : 'កត់ត្រាការលក់: ') + `${customer || 'អតិថិជន'} (${orderId || newRecord.recordId})`,
        content: `${productSummary} | ${totalBoxes} ប្រអប់ | $${formatUSD(totalUsd).replace('$', '')} | Team: ${team} | ដឹក: ${delivery}`,
        tag: syncToCompany ? 'Google Form & Sheet ✓' : 'Google Sheet ✓',
        color: 'orange',
        icon: 'package'
      });
    }
    showToastNotification(successMsg);
  } else {
    if (typeof queueOfflineOrder === 'function') {
      queueOfflineOrder(newRecord);
    }
    if (typeof addAppNotification === 'function') {
      addAppNotification({
        type: 'order',
        title: `[Offline] បានរក្សាទុកក្នុងម៉ាស៊ីន: ${customer || 'អតិថិជន'}`,
        content: `${productSummary} | ចំនួន ${totalBoxes} ប្រអប់ | សរុប: $${formatUSD(totalUsd).replace('$', '')} (នឹង Sync ស្វ័យប្រវត្តពេលមានអ៊ីនធឺណិត)`,
        tag: 'Offline Queued ⏳',
        color: 'amber',
        icon: 'cloud-off'
      });
    }
    showToastNotification('📡 បានរក្សាទុកក្នុងទូរសព្ទ (នឹង Sync ស្វ័យប្រវត្តពេលមានអ៊ីនធឺណិត)!');
  }

  // 4. Update UI live and clear input
  clearOrderInput();
  closeNewOrderModal();
  renderCurrentView();

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i><span>បញ្ជូនចូលការលក់ 🚀</span>`;
  }

  if (navigator.vibrate) try { navigator.vibrate([30, 50, 30]); } catch (_) {}
}

window.openNewOrderModal = openNewOrderModal;
window.closeNewOrderModal = closeNewOrderModal;
window.switchOrderMode = switchOrderMode;
window.setOrderType = setOrderType;
window.toggleOrderTypeCapsule = toggleOrderTypeCapsule;
window.adjustProductQty = adjustProductQty;
window.toggleExtraProducts = toggleExtraProducts;
window.calculateOrderFinancials = calculateOrderFinancials;
window.pasteClipboardToOrderInput = pasteClipboardToOrderInput;
window.parsePastedOrderText = parsePastedOrderText;
window.expandOrderPasteInput = expandOrderPasteInput;
window.scrollOrderModalToForm = scrollOrderModalToForm;
window.submitNewOrder = submitNewOrder;
window.checkOrderSubmitValidation = checkOrderSubmitValidation;
window.clearOrderInput = clearOrderInput;
window.setOrderCurrency = setOrderCurrency;
window.onPriceRawInput = onPriceRawInput;
window.onSellerNameChange = onSellerNameChange;
window.submitToCompanyGoogleForm = submitToCompanyGoogleForm;
window.getSellerLatinName = getSellerLatinName;
window.updateOrderDateDisplay = updateOrderDateDisplay;
window.openOrderDatePicker = openOrderDatePicker;
window.toggleOrderMiniCalendar = toggleOrderMiniCalendar;
window.changeMiniCalMonth = changeMiniCalMonth;
window.selectMiniCalDay = selectMiniCalDay;
window.onOrderDateTextInput = onOrderDateTextInput;

// ==========================================
// Quick Expense Modal Logic (In-App Entry) & Mini Calendar
// ==========================================
let currentExpenseCurrency = 'USD';
let expenseMiniCalYear = 2026;
let expenseMiniCalMonth = 9; // Oct (0-indexed)
let expenseMiniCalSelectedDay = 16;

function toggleExpenseMiniCalendar(e) {
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  const popup = document.getElementById('expense-mini-calendar-popup');
  if (!popup) return;
  const isHidden = popup.classList.contains('hidden');
  if (isHidden) {
    syncExpenseMiniCalDateFromInput();
    renderExpenseMiniCalendar();
    popup.classList.remove('hidden');
    setTimeout(() => {
      document.addEventListener('click', closeExpenseMiniCalendarOnClickOutside);
    }, 10);
  } else {
    popup.classList.add('hidden');
    document.removeEventListener('click', closeExpenseMiniCalendarOnClickOutside);
  }
}

function closeExpenseMiniCalendarOnClickOutside(e) {
  const popup = document.getElementById('expense-mini-calendar-popup');
  const btn = document.getElementById('btn-toggle-expense-mini-calendar');
  if (popup && !popup.contains(e.target) && btn && !btn.contains(e.target)) {
    popup.classList.add('hidden');
    document.removeEventListener('click', closeExpenseMiniCalendarOnClickOutside);
  }
}

function syncExpenseMiniCalDateFromInput() {
  const textInput = document.getElementById('expense-field-date-text');
  const raw = (textInput?.value || '').trim();
  const ddmmyyyy = raw.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})/);
  if (ddmmyyyy) {
    expenseMiniCalSelectedDay = parseInt(ddmmyyyy[1], 10);
    expenseMiniCalMonth = parseInt(ddmmyyyy[2], 10) - 1;
    expenseMiniCalYear = parseInt(ddmmyyyy[3], 10);
  } else {
    const hiddenInp = document.getElementById('expense-field-date');
    if (hiddenInp && /^\d{4}-\d{2}-\d{2}$/.test(hiddenInp.value)) {
      const p = hiddenInp.value.split('-');
      expenseMiniCalYear = parseInt(p[0], 10);
      expenseMiniCalMonth = parseInt(p[1], 10) - 1;
      expenseMiniCalSelectedDay = parseInt(p[2], 10);
    }
  }
}

function changeExpenseMiniCalMonth(delta, e) {
  if (e) e.stopPropagation();
  expenseMiniCalMonth += delta;
  if (expenseMiniCalMonth < 0) {
    expenseMiniCalMonth = 11;
    expenseMiniCalYear -= 1;
  } else if (expenseMiniCalMonth > 11) {
    expenseMiniCalMonth = 0;
    expenseMiniCalYear += 1;
  }
  renderExpenseMiniCalendar();
}

function selectExpenseMiniCalDay(day, e) {
  if (e) e.stopPropagation();
  expenseMiniCalSelectedDay = day;

  const dy = String(day).padStart(2, '0');
  const mo = String(expenseMiniCalMonth + 1).padStart(2, '0');
  const yr = expenseMiniCalYear;
  const ddmmyyyy = `${dy}/${mo}/${yr}`;
  const iso = `${yr}-${mo}-${dy}`;

  const textInput = document.getElementById('expense-field-date-text');
  if (textInput) textInput.value = ddmmyyyy;

  const hiddenInp = document.getElementById('expense-field-date');
  if (hiddenInp) hiddenInp.value = iso;

  renderExpenseMiniCalendar();

  setTimeout(() => {
    const popup = document.getElementById('expense-mini-calendar-popup');
    if (popup) popup.classList.add('hidden');
    document.removeEventListener('click', closeExpenseMiniCalendarOnClickOutside);
  }, 120);

  if (navigator.vibrate) try { navigator.vibrate(10); } catch (_) {}
}

function renderExpenseMiniCalendar() {
  const popup = document.getElementById('expense-mini-calendar-popup');
  if (!popup) return;

  const monthNames = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];
  const monthName = monthNames[expenseMiniCalMonth] || 'OCTOBER';
  const firstDay = new Date(expenseMiniCalYear, expenseMiniCalMonth, 1).getDay();
  const daysInMonth = new Date(expenseMiniCalYear, expenseMiniCalMonth + 1, 0).getDate();

  let html = `
    <!-- Header with Rose Month Name and Navigation -->
    <div class="flex items-center justify-between mb-3 px-1">
      <span class="text-xs font-black tracking-wider text-rose-500 uppercase font-sans">
        ${monthName}
      </span>
      <div class="flex items-center gap-1.5">
        <button type="button" onclick="changeExpenseMiniCalMonth(-1, event)" class="w-6 h-6 rounded-full hover:bg-white/10 active:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold transition">‹</button>
        <span class="text-[10px] text-slate-400 font-mono">${expenseMiniCalYear}</span>
        <button type="button" onclick="changeExpenseMiniCalMonth(1, event)" class="w-6 h-6 rounded-full hover:bg-white/10 active:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-sm font-bold transition">›</button>
      </div>
    </div>

    <!-- Day Headers: S M T W T F S -->
    <div class="grid grid-cols-7 text-center mb-1 text-[11px] font-bold text-slate-400 font-sans">
      <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
    </div>

    <!-- Days Grid -->
    <div class="grid grid-cols-7 gap-y-1 text-center font-sans text-xs">
  `;

  for (let i = 0; i < firstDay; i++) {
    html += `<div></div>`;
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const isSelected = (d === expenseMiniCalSelectedDay);
    if (isSelected) {
      html += `
        <div class="flex items-center justify-center py-0.5">
          <button type="button" onclick="selectExpenseMiniCalDay(${d}, event)" 
                  class="w-7 h-7 rounded-full bg-rose-500 text-white font-black flex items-center justify-center shadow-lg shadow-rose-500/40 active:scale-90 transition">
            ${d}
          </button>
        </div>
      `;
    } else {
      html += `
        <div class="flex items-center justify-center py-0.5">
          <button type="button" onclick="selectExpenseMiniCalDay(${d}, event)" 
                  class="w-7 h-7 rounded-full text-white font-bold hover:bg-white/15 active:bg-white/25 active:scale-90 flex items-center justify-center transition">
            ${d}
          </button>
        </div>
      `;
    }
  }

  html += `</div>`;
  popup.innerHTML = html;
}

function onExpenseDateTextInput(val) {
  const ddmmyyyy = (val || '').trim().match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})/);
  if (ddmmyyyy) {
    const dy = ddmmyyyy[1].padStart(2, '0');
    const mo = ddmmyyyy[2].padStart(2, '0');
    const yr = ddmmyyyy[3];
    const iso = `${yr}-${mo}-${dy}`;
    const hiddenInp = document.getElementById('expense-field-date');
    if (hiddenInp) hiddenInp.value = iso;
    expenseMiniCalSelectedDay = parseInt(dy, 10);
    expenseMiniCalMonth = parseInt(mo, 10) - 1;
    expenseMiniCalYear = parseInt(yr, 10);
  }
}

function setExpenseCurrency(curr) {
  currentExpenseCurrency = curr || 'USD';
  const btnUsd = document.getElementById('exp-curr-btn-usd');
  const btnKhr = document.getElementById('exp-curr-btn-khr');
  const symEl = document.getElementById('expense-currency-symbol');
  const amtInput = document.getElementById('expense-field-amount');
  const hintEl = document.getElementById('expense-khr-convert-hint');

  const activeCls = 'w-7 h-7 rounded-lg text-xs font-mono font-bold transition bg-rose-500 text-white shadow-sm flex items-center justify-center';
  const inactiveCls = 'w-7 h-7 rounded-lg text-xs font-mono font-bold transition text-slate-400 hover:text-white flex items-center justify-center';

  if (btnUsd) btnUsd.className = (currentExpenseCurrency === 'USD' ? activeCls : inactiveCls);
  if (btnKhr) btnKhr.className = (currentExpenseCurrency === 'KHR' ? activeCls : inactiveCls);

  if (currentExpenseCurrency === 'KHR') {
    if (symEl) symEl.textContent = '៛';
    if (amtInput) amtInput.placeholder = '10000';
    if (hintEl) hintEl.classList.remove('hidden');
  } else {
    if (symEl) symEl.textContent = '$';
    if (amtInput) amtInput.placeholder = '0.00';
    if (hintEl) hintEl.classList.add('hidden');
  }

  onExpenseAmountInput();
}

function onExpenseAmountInput() {
  const amtInput = document.getElementById('expense-field-amount');
  const hintVal = document.getElementById('expense-khr-converted-usd');
  const hintEl = document.getElementById('expense-khr-convert-hint');
  const val = parseFloat(amtInput?.value || '0');

  // Auto detect if user pasted huge riel into USD
  if (currentExpenseCurrency === 'USD' && val >= 10000) {
    setExpenseCurrency('KHR');
    return;
  }

  if (currentExpenseCurrency === 'KHR') {
    if (hintEl) hintEl.classList.remove('hidden');
    const usdVal = (val / 4000).toFixed(2);
    if (hintVal) hintVal.textContent = `$${usdVal}`;
  } else {
    if (hintEl) hintEl.classList.add('hidden');
  }
}

function openNewExpenseModal() {
  const modal = document.getElementById('new-expense-modal');
  if (!modal) return;

  const now = new Date();
  const dy = String(now.getDate()).padStart(2, '0');
  const mo = String(now.getMonth() + 1).padStart(2, '0');
  const yr = now.getFullYear();
  const ddmmyyyy = `${dy}/${mo}/${yr}`;
  const iso = `${yr}-${mo}-${dy}`;

  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const timeStr = `${hh}:${mm}`;

  const dateTextInput = document.getElementById('expense-field-date-text');
  const hiddenDateInput = document.getElementById('expense-field-date');
  const timeInput = document.getElementById('expense-field-time');
  const descInput = document.getElementById('expense-field-desc');
  const catInput = document.getElementById('expense-field-category');
  const amtInput = document.getElementById('expense-field-amount');
  const noteInput = document.getElementById('expense-field-note');

  if (dateTextInput) dateTextInput.value = ddmmyyyy;
  if (hiddenDateInput) hiddenDateInput.value = iso;
  if (timeInput) timeInput.value = timeStr;
  if (descInput) descInput.value = '';
  if (catInput) catInput.value = 'ហូបចុក & ប្រចាំថ្ងៃ';
  if (amtInput) amtInput.value = '';
  if (noteInput) noteInput.value = '';

  expenseMiniCalSelectedDay = parseInt(dy, 10);
  expenseMiniCalMonth = parseInt(mo, 10) - 1;
  expenseMiniCalYear = yr;

  setExpenseCurrency('USD');

  if (typeof updateModalLanguage === 'function') updateModalLanguage();

  modal.classList.remove('hidden');
  setDockVisible(false);

  if (window.lucide) window.lucide.createIcons();
  if (descInput) setTimeout(() => descInput.focus(), 150);
}

function closeNewExpenseModal() {
  const modal = document.getElementById('new-expense-modal');
  if (modal) modal.classList.add('hidden');
  if (!isDialogModalOpen()) {
    setDockVisible(true);
  }
}

function applyExpensePreset(desc, category, amount) {
  const descInput = document.getElementById('expense-field-desc');
  const catInput = document.getElementById('expense-field-category');
  const amtInput = document.getElementById('expense-field-amount');

  if (descInput) descInput.value = desc;
  if (catInput) catInput.value = category;
  if (amtInput) amtInput.value = Number(amount).toFixed(2);

  if (navigator.vibrate) try { navigator.vibrate(15); } catch (_) {}
}

function setExpenseAmount(amount) {
  const amtInput = document.getElementById('expense-field-amount');
  if (amtInput) {
    amtInput.value = Number(amount).toFixed(2);
    amtInput.focus();
  }
  if (navigator.vibrate) try { navigator.vibrate(10); } catch (_) {}
}

async function submitNewExpense() {
  const dateInput = document.getElementById('expense-field-date');
  const timeInput = document.getElementById('expense-field-time');
  const descInput = document.getElementById('expense-field-desc');
  const catInput = document.getElementById('expense-field-category');
  const amtInput = document.getElementById('expense-field-amount');
  const noteInput = document.getElementById('expense-field-note');
  const btn = document.getElementById('btn-submit-expense');

  const desc = (descInput?.value || '').trim();
  const rawAmt = parseFloat(amtInput?.value || '0');
  const cat = (catInput?.value || 'ហូបចុក & ប្រចាំថ្ងៃ').trim();
  const dateTextInput = document.getElementById('expense-field-date-text');
  const dateStr = (dateTextInput?.value || dateInput?.value || '').trim();
  const timeStr = (timeInput?.value || '').trim();
  const note = (noteInput?.value || '').trim();

  if (!desc) {
    showToastNotification('សូមបញ្ចូលបរិយាយ ឬមុខចំណាយ! ✍️');
    if (descInput) descInput.focus();
    return;
  }

  if (isNaN(rawAmt) || rawAmt <= 0) {
    showToastNotification('សូមបញ្ចូលចំនួនទឹកប្រាក់ឲ្យបានត្រឹមត្រូវ! 💰');
    if (amtInput) amtInput.focus();
    return;
  }

  // Handle KHR to USD conversion
  let finalUsd = rawAmt;
  let finalNote = note;
  if (currentExpenseCurrency === 'KHR') {
    finalUsd = parseFloat((rawAmt / 4000).toFixed(2));
    const khrFormatted = Math.round(rawAmt).toLocaleString();
    finalNote = finalNote ? `${finalNote} (${khrFormatted}៛)` : `(${khrFormatted}៛)`;
  }

  // Format date correctly
  let ddmmyyyy = dateStr;
  let isoDate = '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    isoDate = dateStr;
    ddmmyyyy = typeof formatToDDMMYYYY === 'function' ? formatToDDMMYYYY(dateStr) : dateStr;
  } else if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateStr)) {
    ddmmyyyy = typeof formatToDDMMYYYY === 'function' ? formatToDDMMYYYY(dateStr) : dateStr;
    isoDate = typeof ddmmyyyyToIso === 'function' ? ddmmyyyyToIso(ddmmyyyy) : dateStr;
  } else {
    const now = new Date();
    isoDate = typeof getLocalIsoDate === 'function' ? getLocalIsoDate(now) : now.toISOString().slice(0, 10);
    ddmmyyyy = typeof formatToDDMMYYYY === 'function' ? formatToDDMMYYYY(isoDate) : dateStr;
  }

  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader" class="w-4 h-4 animate-spin"></i><span>កំពុងរក្សាទុក...</span>`;
    if (window.lucide) window.lucide.createIcons();
  }

  const newExpense = {
    date: ddmmyyyy,
    isoDate: isoDate,
    time: timeStr,
    description: desc,
    category: cat,
    amount: finalUsd,
    note: finalNote,
    rowIndex: (DataService.data && Array.isArray(DataService.data.expenses)) ? DataService.data.expenses.length + 1 : 1
  };

  // 1. Immediately inject into live DataService in-memory
  if (DataService.data && Array.isArray(DataService.data.expenses)) {
    DataService.data.expenses.unshift(newExpense);
    if (DataService.data.meta) DataService.data.meta.totalExpensesCount++;
  }

  // 2. Persist to localStorage pending expenses
  try {
    const existing = JSON.parse(localStorage.getItem('sd_local_expenses') || '[]');
    existing.unshift(newExpense);
    localStorage.setItem('sd_local_expenses', JSON.stringify(existing));
  } catch (_) {}

  // 3. Send to Google Apps Script Webhook or Queue Offline
  const webhookUrl = getAppsScriptWebhookUrl();
  let expSyncSuccess = false;

  if (navigator.onLine && webhookUrl && webhookUrl.startsWith('http')) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          action: 'add_expense',
          sheetId: (typeof DataService !== 'undefined' && DataService.getActiveSheetId) ? DataService.getActiveSheetId() : '',
          data: newExpense
        })
      });
      expSyncSuccess = true;
    } catch (e) {
      console.warn('Expense Webhook POST error (fallback to local & offline queue):', e);
      expSyncSuccess = false;
    }
  }

  if (expSyncSuccess) {
    if (typeof addAppNotification === 'function') {
      addAppNotification({
        type: 'expense',
        title: `កត់ត្រាចំណាយ: ${desc}`,
        content: `${cat} | ចំនួន: $${finalUsd.toFixed(2)} ${timeStr ? '(' + timeStr + ')' : ''}`,
        tag: 'Google Sheet ✓',
        color: 'rose',
        icon: 'receipt'
      });
    }
    showToastNotification(`កត់ត្រាចំណាយ "${desc}" ($${finalUsd.toFixed(2)}) ជោគជ័យ! 💸`);
  } else {
    if (typeof queueOfflineExpense === 'function') {
      queueOfflineExpense(newExpense);
    }
    if (typeof addAppNotification === 'function') {
      addAppNotification({
        type: 'expense',
        title: `[Offline] ចំណាយក្នុងម៉ាស៊ីន: ${desc}`,
        content: `${cat} | ចំនួន: $${finalUsd.toFixed(2)} (នឹង Sync ស្វ័យប្រវត្តពេលមានអ៊ីនធឺណិត)`,
        tag: 'Offline Queued ⏳',
        color: 'amber',
        icon: 'cloud-off'
      });
    }
    showToastNotification(`📡 បានរក្សាទុកក្នុងទូរសព្ទ (នឹង Sync ស្វ័យប្រវត្តពេលមានអ៊ីនធឺណិត)!`);
  }

  // 4. Update UI live
  closeNewExpenseModal();
  renderCurrentView();

  // If expenses drill-down modal is open, re-render it
  const expModal = document.getElementById('expenses-modal');
  if (expModal && !expModal.classList.contains('hidden')) {
    openExpensesModal();
  }

  if (btn) {
    btn.disabled = false;
    btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i><span>រក្សាទុកចំណាយ 💸</span>`;
  }

  if (navigator.vibrate) try { navigator.vibrate([30, 50, 30]); } catch (_) {}
}

window.openNewExpenseModal = openNewExpenseModal;
window.closeNewExpenseModal = closeNewExpenseModal;
window.applyExpensePreset = applyExpensePreset;
window.setExpenseAmount = setExpenseAmount;
window.submitNewExpense = submitNewExpense;
window.toggleExpenseMiniCalendar = toggleExpenseMiniCalendar;
window.changeExpenseMiniCalMonth = changeExpenseMiniCalMonth;
window.selectExpenseMiniCalDay = selectExpenseMiniCalDay;
window.onExpenseDateTextInput = onExpenseDateTextInput;
window.setExpenseCurrency = setExpenseCurrency;
window.onExpenseAmountInput = onExpenseAmountInput;

// ==========================================
// Delivery Shipping Auto-Defaults (Customizable)
// ==========================================
// Delivery Shipping Auto-Defaults (Customizable) & VET COD Seller Phone Rule
// ==========================================
function updateDeliveryShippingDefault() {
  const sel = document.getElementById('order-field-delivery');
  const shipInput = document.getElementById('order-field-ship');
  const sellerPhoneInput = document.getElementById('order-field-seller-phone');
  if (!sel || !shipInput) return;
  const val = sel.value || '';

  if (val.includes('Thai')) {
    shipInput.value = '5.50';
    setOrderCurrency('THB');
  } else if (val === 'VET (COD)') {
    shipInput.value = '3.00';
    setOrderCurrency('KHR');
    const isMaster = (window.DataService && typeof window.DataService.isMasterSheet === 'function' && window.DataService.isMasterSheet());
    if (isMaster && sellerPhoneInput && !sellerPhoneInput.value) {
      sellerPhoneInput.value = '097 859 5526';
    }
  } else if (val === 'J&T (COD)') {
    shipInput.value = '3.00';
    setOrderCurrency('KHR');
  } else if (val === 'VET Express') {
    shipInput.value = '2.50';
    setOrderCurrency('KHR');
  } else if (val === 'J&T Cambodia') {
    shipInput.value = '2.50';
    setOrderCurrency('KHR');
  } else if (val === 'Motor ក្រុមហ៊ុន') {
    shipInput.value = '2.00';
    setOrderCurrency('KHR');
  }
  calculateOrderFinancials();
  if (typeof syncOrderCarrierUI === 'function') syncOrderCarrierUI();
  if (typeof syncOrderShipUI === 'function') syncOrderShipUI();
  if (typeof checkOrderSubmitValidation === 'function') checkOrderSubmitValidation();
}

// ==========================================
// Delivery & Shipping Fee Custom UI Controls
// ==========================================
function toggleOrderDeliveryDropdown(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('order-delivery-dropdown-menu');
  const shipMenu = document.getElementById('order-ship-presets-dropdown-menu');
  if (shipMenu) shipMenu.classList.add('hidden');
  if (!menu) return;
  menu.classList.toggle('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function toggleOrderShipPresetsDropdown(event) {
  if (event) event.stopPropagation();
  const menu = document.getElementById('order-ship-presets-dropdown-menu');
  const delivMenu = document.getElementById('order-delivery-dropdown-menu');
  if (delivMenu) delivMenu.classList.add('hidden');
  if (!menu) return;
  menu.classList.toggle('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function setOrderCarrier(carrierVal) {
  const sel = document.getElementById('order-field-delivery');
  if (sel) {
    sel.value = carrierVal;
  }
  syncOrderCarrierUI();
  updateDeliveryShippingDefault();
  const menu = document.getElementById('order-delivery-dropdown-menu');
  if (menu) menu.classList.add('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function setOrderShippingFee(feeVal) {
  const shipInput = document.getElementById('order-field-ship');
  if (shipInput) {
    shipInput.value = feeVal;
  }
  syncOrderShipUI();
  calculateOrderFinancials();
  if (typeof checkOrderSubmitValidation === 'function') checkOrderSubmitValidation();
  const menu = document.getElementById('order-ship-presets-dropdown-menu');
  if (menu) menu.classList.add('hidden');
  if (window.lucide) window.lucide.createIcons();
}

function syncOrderCarrierUI() {
  const sel = document.getElementById('order-field-delivery');
  const disp = document.getElementById('order-carrier-disp');
  const val = sel?.value || 'VET (COD)';
  if (disp) disp.textContent = val;

  const map = {
    'VET (COD)': 'order-deliv-check-vet-cod',
    'VET Express': 'order-deliv-check-vet-exp',
    'J&T (COD)': 'order-deliv-check-jt-cod',
    'J&T Cambodia': 'order-deliv-check-jt-cam',
    'Motor ក្រុមហ៊ុន': 'order-deliv-check-motor',
    'Thai ✅COD': 'order-deliv-check-thai-cod',
    'Thai ❌COD': 'order-deliv-check-thai-nocod'
  };

  Object.entries(map).forEach(([k, checkId]) => {
    const el = document.getElementById(checkId);
    if (el) {
      if (k === val) el.classList.remove('hidden');
      else el.classList.add('hidden');
    }
  });
}

function syncOrderShipUI() {
  const shipInput = document.getElementById('order-field-ship');
  const num = parseFloat(shipInput?.value || 0);
  const val = isNaN(num) ? '' : num.toFixed(2);
  const map = {
    '3.00': 'order-ship-check-300',
    '2.50': 'order-ship-check-250',
    '2.00': 'order-ship-check-200',
    '5.50': 'order-ship-check-550',
    '1.50': 'order-ship-check-150',
    '0.00': 'order-ship-check-000'
  };
  Object.entries(map).forEach(([fee, checkId]) => {
    const el = document.getElementById(checkId);
    if (el) {
      if (fee === val) el.classList.remove('hidden');
      else el.classList.add('hidden');
    }
  });
}

// Global click handler to close order delivery, ship preset, and team dropdowns when tapping outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('#group-order-team')) {
    closeOrderTeamDropdown();
  }
  if (!e.target.closest('#btn-order-delivery-trigger') && !e.target.closest('#order-delivery-dropdown-menu')) {
    const menu = document.getElementById('order-delivery-dropdown-menu');
    if (menu) menu.classList.add('hidden');
  }
  if (!e.target.closest('#order-field-ship') && !e.target.closest('#order-ship-presets-dropdown-menu') && !e.target.closest('[onclick*="toggleOrderShipPresetsDropdown"]')) {
    const menu = document.getElementById('order-ship-presets-dropdown-menu');
    if (menu) menu.classList.add('hidden');
  }
});

// ==========================================
// Clean Language Separation for Modals (i18n)
// ==========================================
function updateModalLanguage() {
  const isKm = (appState.language !== 'en');

  // 1. Expense modal
  const expTitle = document.getElementById('expense-modal-title');
  const expSubtitle = document.getElementById('expense-modal-subtitle');
  const expPresetsLabel = document.getElementById('expense-presets-label');
  const expPresetsHint = document.getElementById('expense-presets-hint');
  const expLabelDate = document.getElementById('expense-label-date');
  const expLabelTime = document.getElementById('expense-label-time');
  const expLabelDesc = document.getElementById('expense-label-desc');
  const expFieldDesc = document.getElementById('expense-field-desc');
  const expLabelCategory = document.getElementById('expense-label-category');
  const expLabelAmount = document.getElementById('expense-label-amount');
  const expQuickAmt = document.getElementById('expense-quick-amount-label');
  const expLabelNote = document.getElementById('expense-label-note');
  const expFieldNote = document.getElementById('expense-field-note');
  const btnSubmitExp = document.getElementById('btn-submit-expense');

  if (expTitle) expTitle.textContent = isKm ? 'កត់ត្រាចំណាយថ្មី' : 'Record New Expense';
  if (expSubtitle) expSubtitle.textContent = isKm ? 'បញ្ចូលចំណាយប្រចាំថ្ងៃដោយផ្ទាល់' : 'Daily Expenses Direct Entry';
  if (expPresetsLabel) expPresetsLabel.innerHTML = `<i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-400"></i><span>${isKm ? 'ចំណាយញឹកញាប់៖' : 'Quick Presets:'}</span>`;
  if (expPresetsHint) expPresetsHint.textContent = isKm ? 'ចុច ១ដើម្បីបំពេញ' : 'Tap to auto-fill';
  if (expLabelDate) expLabelDate.textContent = isKm ? 'កាលបរិច្ឆេទ (dd/mm/yyyy):' : 'Date (dd/mm/yyyy):';
  if (expLabelTime) expLabelTime.textContent = isKm ? 'ម៉ោង:' : 'Time:';
  if (expLabelDesc) expLabelDesc.innerHTML = `${isKm ? 'បរិយាយ ឬមុខចំណាយ:' : 'Description:'} <span class="text-rose-400">*</span>`;
  if (expFieldDesc) expFieldDesc.placeholder = isKm ? 'ឧ. កាហ្វេ, បាយថ្ងៃត្រង់, ចាក់សាំង...' : 'e.g. Coffee, Lunch, Gas...';
  if (expLabelCategory) expLabelCategory.textContent = isKm ? 'ប្រភេទចំណាយ:' : 'Category:';
  if (expLabelAmount) expLabelAmount.innerHTML = `${isKm ? 'ចំនួនទឹកប្រាក់ ($):' : 'Amount ($):'} <span class="text-rose-400">*</span>`;
  if (expQuickAmt) expQuickAmt.textContent = isKm ? 'រហ័ស:' : 'Quick:';
  if (expLabelNote) expLabelNote.textContent = isKm ? 'សម្គាល់បន្ថែម (ស្រេចចិត្ត):' : 'Note (Optional):';
  if (expFieldNote) expFieldNote.placeholder = isKm ? 'ឧ. ទីតាំង ឬហាង...' : 'e.g. Location or store...';
  if (btnSubmitExp) btnSubmitExp.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i><span>${isKm ? 'រក្សាទុកចំណាយ 💸' : 'Save Expense 💸'}</span>`;

  // 2. Order modal
  const orderTitle = document.getElementById('order-modal-title');
  const orderSubtitle = document.getElementById('order-modal-subtitle');
  const orderBtnClear = document.getElementById('order-btn-clear-text');
  const orderPastePrompt = document.getElementById('order-label-paste-prompt');
  const orderLabelType = document.getElementById('order-label-type');
  const btnTypeStdText = document.getElementById('btn-type-standard-text');
  const btnTypeRwdText = document.getElementById('btn-type-reward-text');
  const orderTypeDesc = document.getElementById('order-type-desc');
  const orderLabelId = document.getElementById('order-label-id');
  const orderLabelTeam = document.getElementById('order-label-team');
  const orderLabelDate = document.getElementById('order-label-date');
  const orderLabelSeller = document.getElementById('order-label-seller');
  const orderLabelSellerPhone = document.getElementById('order-label-seller-phone');
  const orderCustSection = document.getElementById('order-label-cust-section');
  const orderCustName = document.getElementById('order-label-cust-name');
  const orderCustPhone = document.getElementById('order-label-cust-phone');
  const orderLocation = document.getElementById('order-label-location');
  const orderProducts = document.getElementById('order-label-products');
  const orderDelivSection = document.getElementById('order-label-delivery-section');
  const orderDelivLabel = document.getElementById('order-label-delivery');
  const orderShipLabel = document.getElementById('order-label-ship');
  const orderPriceRaw = document.getElementById('order-label-price-raw');
  const orderTotalUsd = document.getElementById('order-label-total-usd');
  const orderStockText = document.getElementById('order-label-stock-text');
  const orderProfitText = document.getElementById('order-label-profit-text');
  const orderLabelNote = document.getElementById('order-label-note');
  const btnSubmitOrder = document.getElementById('btn-submit-order');

  if (orderTitle) {
    orderTitle.textContent = currentOrderEntryMode === 'telegram'
      ? (isKm ? 'កត់ត្រាពី Telegram' : 'Record from Telegram')
      : (isKm ? 'បញ្ចូលការកុម្ម៉ង់ថ្មី' : 'New Order Entry');
  }
  if (orderSubtitle) {
    orderSubtitle.textContent = currentOrderEntryMode === 'telegram'
      ? (isKm ? 'ចូល Google Sheet ផ្ទាល់ខ្លួន' : 'To Personal Google Sheet')
      : (isKm ? 'Sync ផ្ទាល់ខ្លួន & ក្រុមហ៊ុន' : 'Sync Personal & Company');
  }
  if (orderBtnClear) orderBtnClear.textContent = isKm ? 'សម្អាត' : 'Clear';
  if (orderPastePrompt) orderPastePrompt.innerHTML = `<i data-lucide="sparkles" class="w-3.5 h-3.5 text-amber-400"></i><span>${isKm ? 'សារពី Telegram:' : 'Telegram Message:'}</span>`;
  if (orderLabelType) orderLabelType.textContent = isKm ? 'ប្រភេទការលក់:' : 'Order Type:';
  if (btnTypeStdText) btnTypeStdText.textContent = isKm ? 'ការលក់ធម្មតា' : 'Standard Order';
  if (btnTypeRwdText) btnTypeRwdText.textContent = isKm ? 'លក់រង្វាន់ (ថ្លៃដើម $0)' : 'Reward Order ($0 Cost)';
  if (orderTypeDesc) orderTypeDesc.textContent = isKm ? 'គិតថ្លៃដើមស្តុកធម្មតា ($24/ប្រអប់) និងបញ្ចូលលេខ Order ID ផ្លូវការ។' : 'Standard stock cost ($24/box) with official Order ID.';
  if (orderLabelTeam) orderLabelTeam.textContent = isKm ? 'ថ្នាក់ដឹកនាំ (Team):' : 'Team Leader:';
  if (orderLabelId) orderLabelId.textContent = isKm ? 'លេខកុម្ម៉ង់:' : 'Order ID:';
  if (orderLabelDate) orderLabelDate.textContent = isKm ? 'កាលបរិច្ឆេទ:' : 'Date:';
  if (orderLabelSeller) orderLabelSeller.textContent = isKm ? 'ឈ្មោះអ្នកលក់:' : 'Seller Name:';
  if (orderLabelSellerPhone) orderLabelSellerPhone.textContent = isKm ? 'លេខទូរសព្ទអ្នកលក់:' : 'Seller Phone:';
  if (orderCustSection) orderCustSection.innerHTML = `<i data-lucide="user" class="w-3.5 h-3.5 text-orange-400"></i><span>${isKm ? 'ព័ត៌មានអតិថិជន:' : 'Customer Information:'}</span>`;
  if (orderCustName) orderCustName.textContent = isKm ? 'ឈ្មោះអតិថិជន:' : 'Customer Name:';
  if (orderCustPhone) orderCustPhone.innerHTML = `${isKm ? 'លេខទូរសព្ទអ្នកទទួល:' : 'Receiver Phone:'} <span class="text-rose-400">*</span>`;
  if (orderLocation) orderLocation.textContent = isKm ? 'អាសយដ្ឋានដឹកជញ្ជូន:' : 'Delivery Address:';
  if (orderProducts) orderProducts.innerHTML = `<i data-lucide="boxes" class="w-3.5 h-3.5 text-orange-400"></i><span>${isKm ? 'មុខទំនិញ & ចំនួនប្រអប់:' : 'Products & Quantity:'}</span>`;
  if (orderDelivSection) orderDelivSection.innerHTML = `<i data-lucide="truck" class="w-3.5 h-3.5 text-orange-400"></i><span>${isKm ? 'សេវាដឹកជញ្ជូន & ទឹកប្រាក់:' : 'Delivery & Financials:'}</span>`;
  if (orderDelivLabel) orderDelivLabel.textContent = isKm ? 'ក្រុមហ៊ុនដឹកជញ្ជូន:' : 'Shipping Carrier:';
  if (orderShipLabel) orderShipLabel.textContent = isKm ? 'ថ្លៃដឹកជញ្ជូន ($):' : 'Shipping Fee ($):';
  if (orderPriceRaw) orderPriceRaw.textContent = isKm ? 'តម្លៃលក់:' : 'Sale Price:';
  if (orderTotalUsd) orderTotalUsd.textContent = isKm ? 'តម្លៃសរុប ($):' : 'Total Amount ($):';
  if (orderStockText) orderStockText.textContent = isKm ? 'ថ្លៃដើមស្តុក:' : 'Stock Cost:';
  if (orderProfitText) orderProfitText.textContent = isKm ? 'ប្រាក់ចំណេញ:' : 'Net Profit:';
  if (orderLabelNote) orderLabelNote.textContent = isKm ? 'ចំណាំបន្ថែម (ស្រេចចិត្ត):' : 'Note (Optional):';
  if (btnSubmitOrder) btnSubmitOrder.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i><span>${isKm ? 'បញ្ជូនចូលការលក់ 🚀' : 'Submit Order 🚀'}</span>`;

  if (window.lucide) window.lucide.createIcons();
}

function openEditBudgetModal() {
  const current = parseFloat(localStorage.getItem('sd_monthly_budget')) || 450;
  const input = prompt('🎯 កំណត់គោលដៅចំណាយប្រចាំខែ ($):', current);
  if (input !== null && input.trim() !== '') {
    const val = parseFloat(input.trim());
    if (!isNaN(val) && val >= 0) {
      localStorage.setItem('sd_monthly_budget', val);
      if (typeof showToastNotification === 'function') {
        showToastNotification(`🎯 បានកំណត់គោលដៅចំណាយ $${val}/ខែ រួចរាល់!`);
      }
      if (typeof renderCurrentView === 'function') renderCurrentView();
    }
  }
}
window.openEditBudgetModal = openEditBudgetModal;

function toggleAnalyticsProfitMode() {
  appState.analyticsProfitMode = (appState.analyticsProfitMode === 'net') ? 'gross' : 'net';
  if (typeof renderCurrentView === 'function') renderCurrentView();
}
window.toggleAnalyticsProfitMode = toggleAnalyticsProfitMode;

window.updateDeliveryShippingDefault = updateDeliveryShippingDefault;
window.updateModalLanguage = updateModalLanguage;
window.toggleOrderDeliveryDropdown = toggleOrderDeliveryDropdown;
window.toggleOrderShipPresetsDropdown = toggleOrderShipPresetsDropdown;
window.setOrderCarrier = setOrderCarrier;
window.setOrderShippingFee = setOrderShippingFee;
window.syncOrderCarrierUI = syncOrderCarrierUI;
window.syncOrderShipUI = syncOrderShipUI;

// Export Notification Center & Offline Sync Functions
window.getStoredNotifications = getStoredNotifications;
window.saveStoredNotifications = saveStoredNotifications;
window.addAppNotification = addAppNotification;
window.deleteNotification = deleteNotification;
window.clearAllNotifications = clearAllNotifications;
window.markAllNotificationsAsRead = markAllNotificationsAsRead;
window.getOfflineSyncQueue = getOfflineSyncQueue;
window.syncOfflineQueue = syncOfflineQueue;
window.queueOfflineOrder = queueOfflineOrder;
window.queueOfflineExpense = queueOfflineExpense;

// Export Expenses Filter & Search Functions
window.expensesFilterState = expensesFilterState;
window.toggleExpensesSearch = toggleExpensesSearch;
window.toggleExpensesDayDropdown = toggleExpensesDayDropdown;
window.renderExpensesMiniCalendar = renderExpensesMiniCalendar;
window.navigateExpensesCalendarMonth = navigateExpensesCalendarMonth;
window.selectExpensesCalendarDay = selectExpensesCalendarDay;
window.selectExpensesQuickDay = selectExpensesQuickDay;
window.toggleExpensesMonthDropdown = toggleExpensesMonthDropdown;
window.renderExpensesMonthDropdown = renderExpensesMonthDropdown;
window.navigateExpensesMonthYear = navigateExpensesMonthYear;
window.selectExpensesMonth = selectExpensesMonth;
window.toggleExpensesYearDropdown = toggleExpensesYearDropdown;
window.renderExpensesYearDropdown = renderExpensesYearDropdown;
window.selectExpensesYear = selectExpensesYear;
window.setExpensesPeriodFilter = setExpensesPeriodFilter;
window.applyExpensesFilterAndRender = applyExpensesFilterAndRender;
window.openExpensesModal = openExpensesModal;
window.closeExpensesModal = closeExpensesModal;
window.filterExpensesModalList = filterExpensesModalList;
window.clearExpensesModalSearch = clearExpensesModalSearch;

// Export Team Leader Selector Functions
window.COMPANY_TEAM_LEADERS = COMPANY_TEAM_LEADERS;
window.renderOrderTeamDropdown = renderOrderTeamDropdown;
window.openOrderTeamDropdown = openOrderTeamDropdown;
window.closeOrderTeamDropdown = closeOrderTeamDropdown;
window.toggleOrderTeamDropdown = toggleOrderTeamDropdown;
window.filterOrderTeamDropdown = filterOrderTeamDropdown;
window.selectOrderTeam = selectOrderTeam;
window.openMemberDetailCard = openMemberDetailCard;
window.openTeamMembersModal = openTeamMembersModal;
window.closeTeamMembersModal = closeTeamMembersModal;
window.toggleTeamMembersSearch = toggleTeamMembersSearch;
window.clearTeamMembersSearch = clearTeamMembersSearch;
window.renderTeamMembersList = renderTeamMembersList;
window.openTeamMemberDetail = openTeamMemberDetail;
window.backToTeamMembersList = backToTeamMembersList;
window.performCleanLogout = performCleanLogout;
