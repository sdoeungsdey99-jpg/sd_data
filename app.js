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
    textSizeDesc: '14px - 15.5px - 17px - 18.5px - 20px (XS ➔ XL)',
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
    auto: 'ស្វ័យប្រវត្តិ (Auto)',
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
    layoutTitle: 'ទម្រង់តម្រៀបកាត',
    layoutDesc: 'ជ្រើសរើសជម្រើសតម្រៀបកាត (1-2-3)',
    layout1: 'ស្តង់ដា',
    layout2: 'ហិរញ្ញវត្ថុ',
    layout3: 'ផ្នែកលក់',
    resetSettingsTitle: 'កំណត់ឡើងវិញទៅទម្រង់ដើម',
    resetSettingsDesc: 'កំណត់ពណ៌, Font, ទំហំអក្សរ និង Layout ទៅ Default វិញ',
    resetConfirmTitle: 'កំណត់ទៅទម្រង់ដើម (Reset to Default)?',
    resetConfirmMsg: 'តើអ្នកពិតជាចង់កំណត់ការកំណត់ទាំងអស់ (ពណ៌, Font, ទំហំអក្សរ, Layout) ទៅជាទម្រង់ដើមវិញមែនទេ?'
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
    settingsTitle: '⚙️ Settings',
    settingsSubtitle: 'Manage appearance, language, and system preferences',
    appearanceSection: 'Appearance & Preferences',
    appearanceDesc: 'Customize typography, text size, wallpapers, and language',
    accountSection: 'Account & System',
    accountDesc: 'Manage passcode security and profile information',
    fontTitle: 'Typography',
    fontDesc: 'Choose preferred readable font family',
    textSizeTitle: 'Text Size',
    textSizeDesc: '14px - 15.5px - 17px - 18.5px - 20px (XS ➔ XL)',
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
    auto: 'Auto (System)',
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
    layoutTitle: 'Card Layout',
    layoutDesc: 'Select preferred card order (1-2-3)',
    layout1: 'Standard',
    layout2: 'Finance',
    layout3: 'Sales',
    resetSettingsTitle: 'Reset to Default',
    resetSettingsDesc: 'Reset color, font, text size, and layout to defaults',
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
  hideSubtitles: localStorage.getItem('sd_hide_subtitles') === 'true',
  notificationsEnabled: localStorage.getItem('sd_notif_enabled') !== 'false'
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
  localStorage.removeItem('sd_theme');
  localStorage.removeItem('sd_lock_wallpaper');

  // Reset in appState
  appState.themeAccent = 'orange';
  appState.fontFamily = 'font-kantumruy';
  appState.textSize = 'md';
  appState.hideSubtitles = false;
  appState.cardLayout = '1';
  appState.theme = 'dark';
  appState.lockWallpaper = 'wp-deep-mesh';

  // Apply to DOM
  applyThemeAccent('orange');
  applyAppFont('font-kantumruy');
  applyAppTextSize('md');
  applyHideSubtitles(false);
  applyTheme('dark');
  applyLockWallpaper('wp-deep-mesh');

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
  window.addEventListener('online', () => {
    DataService.fetchData(false);
    checkOnlineOfflineStatus();
  });
  window.addEventListener('offline', () => {
    checkOnlineOfflineStatus();
  });
  setInterval(checkOnlineOfflineStatus, 2000);

  const urlParams = new URLSearchParams(window.location.search);
  if (!appState.pinEnabled || sessionStorage.getItem('sd_unlocked') === 'true' || urlParams.get('unlock') === '1') {
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

  if (urlParams.get('view')) {
    switchView(urlParams.get('view'));
  }
  if (urlParams.get('drawer') === 'profile') {
    setTimeout(openProfileDrawer, 150);
  }
  if (urlParams.get('customers') === '1') {
    setTimeout(openAllCustomersModal, 150);
  }
  if (urlParams.get('sortmenu') === '1') {
    setTimeout(() => {
      openAllCustomersModal();
      setTimeout(toggleCustomersSortMenu, 120);
    }, 180);
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
    const count = service.unreadNotifications.length;
    if (count > 0 && !appState.hasReadNotifications) {
      notifBadge.textContent = count;
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
  if (!document.getElementById('edit-profile-modal')?.classList?.contains('hidden')) {
    closeEditProfileModal();
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
    } else if (deltaX <= -50 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      // Swipe left to dismiss profile drawer
      const profDrawer = document.getElementById('profile-drawer-modal');
      if (profDrawer && !profDrawer.classList.contains('hidden')) {
        closeProfileDrawer();
        if (navigator.vibrate) navigator.vibrate(15);
      }
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
  if (viewName === 'profile') {
    openProfileDrawer();
    return;
  }
  const isAlreadyDashboard = (appState.currentView === 'dashboard' && viewName === 'dashboard');
  if (appState.currentView !== viewName) {
    appState.previousView = appState.currentView;
  }
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
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
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
  const monthlyBoostAmt = (d.boostByMonth && d.boostByMonth[selectedMonthInt]) || 0;
  const monthlyBudgetGoal = 450.0;
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
    const mNum = targetMonth.split('-')[1] || '10';
    dynamicExpenseTitle = isEn ? `Expenses (Month ${mNum})` : `ការចំណាយខែ ${mNum}`;
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

        <!-- Box 4: Monthly Boost Expense (តាមខែដែលបានជ្រើសរើស) -->
        <div class="p-2.5 rounded-xl bg-black/25 border border-white/5 flex flex-col justify-between">
          <span class="text-slate-400 text-[10px] block leading-tight mb-1">
            ${isEn ? `Boost Month ${selectedMonthNum}:` : `ចំណាយ Boost ខែ ${selectedMonthNum}:`}
          </span>
          <span class="font-mono text-rose-400 font-bold text-base tracking-tight">${formatUSD(monthlyBoostAmt)}</span>
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
        <!-- Top-Right (+) Button linked to AppSheet on Phone -->
        <button onclick="event.stopPropagation(); openExpenseShortcut();" 
                oncontextmenu="event.stopPropagation(); openShortcutModal(event);"
                title="ចុចដើម្បីបើក AppSheet កត់ត្រាចំណាយ (ចុចស្តាំដើម្បីកំណត់ Link)"
                class="w-8 h-8 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-400 border border-rose-500/30 flex items-center justify-center active:scale-95 transition shadow-sm shrink-0">
          <i data-lucide="plus" class="w-4 h-4"></i>
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

      <!-- Transferred Monthly Expense Budget Bar (កំណត់ចំណាយ 450$/ខែ) -->
      <div onclick="event.stopPropagation(); openExpensesModal(true);"
           title="មើលតារាងចំណាយពេញមួយខែ ${selectedMonthNum}"
           class="mt-2.5 p-2.5 rounded-xl bg-gradient-to-r from-rose-950/40 via-black/30 to-emerald-950/40 border border-white/10 flex items-center justify-between cursor-pointer hover:border-white/20 transition">
        <div class="flex items-center gap-1.5">
          <i data-lucide="target" class="w-3.5 h-3.5 text-rose-400 shrink-0"></i>
          <span class="text-xs text-slate-300 font-semibold">កំណត់ចំណាយ 450$/ខែ</span>
        </div>

        <div class="flex items-center gap-2">
          <!-- Remaining Budget text -->
          <span class="text-sm font-bold font-mono ${remainingBudget >= 0 ? 'text-emerald-400' : 'text-rose-400'}">
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

  const layout = appState.cardLayout || '1';
  if (layout === '2') {
    // Option 2: Finance / Cash Focus (Pure Cash -> Net Cash -> Expenses -> Period -> Performance -> Team Sales -> Tools)
    return `
      ${cardPureCash}
      ${cardNetCash}
      ${cardExpenses}
      ${periodBanner}
      ${cardPerformance}
      ${cardTeamSales}
      ${cardTools}
    `;
  } else if (layout === '3') {
    // Option 3: Sales Focus (Period -> Performance -> Team Sales -> Pure Cash -> Net Cash -> Expenses -> Tools)
    return `
      ${periodBanner}
      ${cardPerformance}
      ${cardTeamSales}
      ${cardPureCash}
      ${cardNetCash}
      ${cardExpenses}
      ${cardTools}
    `;
  }

  // Option 1: Standard (Default) (Pure Cash -> Period -> Performance -> Net Cash -> Expenses -> Team Sales -> Tools)
  return `
    ${cardPureCash}
    ${periodBanner}
    ${cardPerformance}
    ${cardNetCash}
    ${cardExpenses}
    ${cardTeamSales}
    ${cardTools}
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
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 shrink-0">
                <i data-lucide="bar-chart-2" class="w-4 h-4"></i>
              </div>
              <div>
                <div class="flex items-center gap-2">
                  <h3 class="font-bold text-xs uppercase text-white leading-tight">${monthTitle} - ការវិភាគតាមថ្ងៃ</h3>
                  <span class="px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-bold">Daily Trend</span>
                </div>
                <p class="text-[10px] text-slate-400 mt-0.5 leading-tight card-subtitle">តាមដានកំណើនឡើងចុះនៃការលក់ប្រចាំថ្ងៃ</p>
              </div>
            </div>
            <button onclick="setAnalyticsMonth('all')" class="text-xs text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1 shrink-0">
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
          <div class="flex items-center gap-2.5 mb-3">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
              <i data-lucide="trending-up" class="w-4 h-4"></i>
            </div>
            <div>
              <h4 class="font-bold text-xs uppercase text-white leading-tight">
                ការប្រែប្រួលឡើង-ចុះប្រចាំថ្ងៃ (${daysSorted.length} ថ្ងៃ)
              </h4>
              <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 card-subtitle">Daily Revenue Comparison</p>
            </div>
          </div>
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
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 shrink-0">
              <i data-lucide="bar-chart-2" class="w-4 h-4"></i>
            </div>
            <div>
              <h3 class="font-bold text-xs uppercase text-white leading-tight">${t('diagramTitle')}</h3>
              <p class="text-[10px] text-slate-400 leading-tight mt-0.5 card-subtitle">${t('diagramSubtitle')}</p>
            </div>
          </div>
          <span class="px-2.5 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-semibold shrink-0">${new Date().getFullYear()} Trend</span>
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
        <div class="flex items-center gap-2.5 mb-3">
          <div class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30 shrink-0">
            <i data-lucide="calendar" class="w-4 h-4"></i>
          </div>
          <div>
            <h4 class="font-bold text-xs uppercase text-white leading-tight">${appState.language === 'en' ? 'Monthly Summary Table' : 'តារាងសង្ខេបចំណូល-ចំណេញតាមខែ'}</h4>
            <p class="text-[10px] text-slate-400 font-mono leading-tight mt-0.5 card-subtitle">Monthly Revenue & Profit</p>
          </div>
        </div>
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
              <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">${isKm ? 'ខ្មែរ / English' : 'Khmer / English'}</p>
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
                        ${isKm ? 'លាក់ចំណងជើងរង (Hide Subtitles)' : 'Hide Subtitles'}
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
                    ${isKm ? 'ចំណងជើងរង • Subtitle Preview (ABA + ACLEDA)' : 'Subtitle Preview • Secondary Description'}
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
            <button onclick="toggleTheme('auto')" class="py-1 px-2 rounded-lg text-[10px] font-bold transition ${appState.theme === 'auto' ? 'accent-solid-btn shadow-sm' : 'text-slate-400 hover:text-white'}">Auto</button>
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

        <!-- 9. ទម្រង់តម្រៀបកាត (Card Layout - Accordion with >) -->
        <div>
          <div onclick="toggleSettingsItem('cardLayout')" 
               class="settings-row p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-all duration-150 select-none">
            <div class="settings-row-left flex items-center gap-3 min-w-0">
              <div class="settings-icon-box w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0 transition-all duration-150">
                <i data-lucide="layers" class="w-4 h-4 text-amber-400"></i>
              </div>
              <div class="min-w-0">
                <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${t('layoutTitle')}</h4>
                <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">${t('layoutDesc')}</p>
              </div>
            </div>
            <div class="flex items-center gap-2 shrink-0">
              <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/25 font-mono">
                ${appState.cardLayout === '1' ? '១. ' + t('layout1') : (appState.cardLayout === '2' ? '២. ' + t('layout2') : '៣. ' + t('layout3'))}
              </span>
              <i data-lucide="${active === 'cardLayout' ? 'chevron-down' : 'chevron-right'}" class="w-4 h-4 text-slate-400"></i>
            </div>
          </div>

          ${active === 'cardLayout' ? `
            <div class="p-4 bg-black/40 border-t border-white/5 space-y-3 animate-fade-in">
              <div class="flex items-center justify-between text-[11px] text-slate-300">
                <span class="font-bold text-white">${isKm ? 'ជ្រើសរើសលំដាប់កាតលើ Dashboard' : 'Choose Dashboard Card Order'}</span>
                <span class="text-[10px] text-slate-400">${isKm ? '៣ ជម្រើស' : '3 Options'}</span>
              </div>
              <!-- iOS Segmented Control: Option 1, 2, 3 -->
              <div class="grid grid-cols-3 gap-1 bg-black/50 p-1 rounded-2xl border border-white/10 text-center text-xs">
                <button onclick="setCardLayout('1')" 
                        class="py-2.5 rounded-xl text-[11px] font-semibold transition active:scale-95 ${appState.cardLayout === '1' ? 'accent-solid-btn shadow-md' : 'text-slate-400 hover:text-white'}">
                  <span>១. ${t('layout1')}</span>
                </button>
                <button onclick="setCardLayout('2')" 
                        class="py-2.5 rounded-xl text-[11px] font-semibold transition active:scale-95 ${appState.cardLayout === '2' ? 'accent-solid-btn shadow-md' : 'text-slate-400 hover:text-white'}">
                  <span>២. ${t('layout2')}</span>
                </button>
                <button onclick="setCardLayout('3')" 
                        class="py-2.5 rounded-xl text-[11px] font-semibold transition active:scale-95 ${appState.cardLayout === '3' ? 'accent-solid-btn shadow-md' : 'text-slate-400 hover:text-white'}">
                  <span>៣. ${t('layout3')}</span>
                </button>
              </div>
              <!-- Layout Description Box -->
              <div class="p-2.5 rounded-xl bg-white/5 border border-white/5 text-[10px] text-slate-300 leading-relaxed">
                ${appState.cardLayout === '1' 
                  ? '🔹 <strong>ស្តង់ដា៖</strong> ទឹកប្រាក់សុទ្ធ ➔ 📌 កាលបរិច្ឆេទ ➔ សង្ខេបលក់/ចំណាយ ➔ ស្ថាពរហិរញ្ញវត្ថុ ➔ ចំណាយថ្ងៃនេះ ➔ ក្រុម'
                  : (appState.cardLayout === '2'
                    ? '🔹 <strong>ហិរញ្ញវត្ថុ៖</strong> ទឹកប្រាក់សុទ្ធ ➔ ស្ថាពរហិរញ្ញវត្ថុ ➔ ចំណាយថ្ងៃនេះ ➔ 📌 កាលបរិច្ឆេទ ➔ សង្ខេបលក់/ចំណាយ ➔ ក្រុម'
                    : '🔹 <strong>ផ្នែកលក់៖</strong> 📌 កាលបរិច្ឆេទ ➔ សង្ខេបលក់/ចំណាយ ➔ លក់ក្រុម ➔ ទឹកប្រាក់សុទ្ធ ➔ ស្ថាពរហិរញ្ញវត្ថុ ➔ ចំណាយថ្ងៃនេះ')}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- 10. អំពីខ្ញុំ (About Me - ពេលចុចបង្ហាញផ្ទាំងកាតចំកណ្តាល Blur ផ្ទៃខាងក្រោយ & ប៉ះកន្លែងទំនេរបិទ) -->
        <div onclick="openAboutModal()" 
             class="settings-row p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/5 transition-all duration-150 select-none">
          <div class="settings-row-left flex items-center gap-3 min-w-0">
            <div class="settings-icon-box w-8 h-8 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center shrink-0 transition-all duration-150">
              <i data-lucide="user" class="w-4 h-4 text-orange-400"></i>
            </div>
            <div class="min-w-0">
              <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">${t('aboutMe')}</h4>
              <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">ស្តី ស្តើង • SDEY SDOEUNG</p>
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

  // Strict sorting from latest to earliest (Day 31 ➔ 01, Month 12 ➔ 01, latest row first)
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    const cmp = (b.isoDate || '').localeCompare(a.isoDate || '');
    if (cmp !== 0) return cmp;
    return (b.rowIndex || 0) - (a.rowIndex || 0);
  });
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
  }
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

let systemThemeMediaQueryListener = null;

function applyTheme(theme) {
  const metaTheme = document.getElementById('theme-color-meta');
  
  if (theme === 'auto') {
    const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const effectiveTheme = isSystemDark ? 'dark' : 'light';
    
    if (effectiveTheme === 'light') {
      document.documentElement.classList.add('light-theme');
      document.body.classList.add('light-theme');
      if (metaTheme) metaTheme.setAttribute('content', '#FFFFFF');
    } else {
      document.documentElement.classList.remove('light-theme');
      document.body.classList.remove('light-theme');
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
      if (metaTheme) metaTheme.setAttribute('content', '#FFFFFF');
    } else {
      document.documentElement.classList.remove('light-theme');
      document.body.classList.remove('light-theme');
      if (metaTheme) metaTheme.setAttribute('content', '#070D18');
    }
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
    // Update labels based on appState.language
    const isKm = appState.language === 'km';
    menu.querySelectorAll('.action-label-pdf').forEach(el => el.textContent = isKm ? 'រក្សាទុកជា PDF' : 'Save as PDF');
    menu.querySelectorAll('.action-label-share').forEach(el => el.textContent = isKm ? 'ចែករំលែក' : 'Share');
    menu.querySelectorAll('.action-label-copy').forEach(el => el.textContent = isKm ? 'ចម្លង' : 'Copy');
  }
}

function closeAllModalContextMenus() {
  ['sales', 'payables', 'expenses', 'cod'].forEach(type => {
    const m = document.getElementById(`modal-menu-${type}`);
    if (m) m.classList.add('hidden');
  });
}

// Close context menus when tapping anywhere outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('[id^="modal-menu-"]') && !e.target.closest('button[title="ជម្រើស"]')) {
    closeAllModalContextMenus();
  }
});

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

function getModalContentText(modalType) {
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
  }
  return '';
}

function exportModalToPDF(modalType) {
  const modalIdMap = {
    sales: 'sales-modal',
    payables: 'payables-modal',
    expenses: 'expenses-modal',
    cod: 'cod-modal'
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
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-full shadow-2xl z-[999] animate-bounce';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 2200);
}

// =========================================================
// PROFILE DASHBOARD (Facebook Menu + iOS Liquid Glass Hub)
// =========================================================

const DEFAULT_PROFILE_DATA = {
  name: 'ស្តី ស្តើង',
  memberId: 'ID: SD-0001',
  subtitle: 'SDEY SDOEUNG',
  avatar: 'profile.png',
  work: 'ស្ថាបនិក & អ្នកគ្រប់គ្រងនៅ SD Data',
  study: 'ជីវិតជាការរៀនសូត្រ (Life is Learning)',
  live: 'រាជធានីភ្នំពេញ',
  from: 'ព្រះរាជាណាចក្រកម្ពុជា',
  status: 'កំពុងអភិវឌ្ឍអាជីវកម្ម',
  phone: '096 212 9261',
  privacy: {
    showWork: true,
    showStudy: true,
    showLive: true,
    showFrom: true,
    showStatus: true,
    showPhone: true
  }
};

function getProfileData() {
  try {
    const raw = localStorage.getItem('sd_profile_data');
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...DEFAULT_PROFILE_DATA,
        ...parsed,
        privacy: {
          ...DEFAULT_PROFILE_DATA.privacy,
          ...(parsed.privacy || {})
        }
      };
    }
  } catch (e) {
    console.warn('Error reading sd_profile_data:', e);
  }
  return { ...DEFAULT_PROFILE_DATA, privacy: { ...DEFAULT_PROFILE_DATA.privacy } };
}

function syncHeaderProfileUI() {
  const p = getProfileData();
  const avatarEl = document.getElementById('header-profile-avatar');
  const nameEl = document.getElementById('header-profile-name');
  const subEl = document.getElementById('header-profile-sub');
  if (avatarEl) avatarEl.src = p.avatar || 'profile.png';
  if (nameEl) nameEl.textContent = p.name || 'ស្តី ស្តើង';
  if (subEl) subEl.textContent = p.subtitle || 'SDEY SDOEUNG';
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
  try {
    const raw = localStorage.getItem('sd_profile_notes');
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return [
    { id: 1, title: 'គោលដៅលក់ប្រចាំខែ', text: 'ពង្រឹងការតាមដានអតិថិជនចាស់ និងបង្កើនការលក់ឈុត 2-3 ប្រអប់។', date: '13/10/2026' }
  ];
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
// Profile Dashboard Drawer (82% Width - Facebook Style)
// ==========================================
function openProfileDrawer() {
  const modal = document.getElementById('profile-drawer-modal');
  const panel = document.getElementById('profile-drawer-panel');
  if (!modal || !panel) return;

  renderProfileDrawerContent();
  modal.classList.remove('hidden');

  requestAnimationFrame(() => {
    panel.classList.remove('-translate-x-full');
    panel.classList.add('translate-x-0');
  });

  if (window.lucide) window.lucide.createIcons();
  if (navigator.vibrate) navigator.vibrate(15);
}

function closeProfileDrawer() {
  const modal = document.getElementById('profile-drawer-modal');
  const panel = document.getElementById('profile-drawer-panel');
  if (!modal || !panel) return;

  panel.classList.remove('translate-x-0');
  panel.classList.add('-translate-x-full');

  setTimeout(() => {
    modal.classList.add('hidden');
  }, 260);
}

function renderProfileDrawerContent() {
  const p = getProfileData();
  const customers = getAllUniqueCustomers();
  const notes = getProfileNotes();
  const qrList = getQrPhotosList();
  const uploadedQrCount = qrList.filter(q => q.image).length;
  const d = DataService.data;
  const membersCount = (d && d.teamLeaders) ? d.teamLeaders.length : 3;

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
    { key: 'showPhone', icon: 'phone', color: 'text-amber-400', label: 'ទូរសព្ទ', val: p.phone }
  ].filter(item => p.privacy[item.key] !== false && item.val && item.val.trim() !== '');

  const container = document.getElementById('profile-drawer-content');
  if (!container) return;

  container.innerHTML = `
    <!-- ZONE 1: 6 GRID SHORTCUTS (មុខងារក្នុង Dashboard) -->
    <div>
      <div class="flex items-center justify-between px-1 mb-2">
        <span class="text-xs font-bold text-slate-300">មុខងារក្នុង Dashboard</span>
        <span class="text-[10px] text-slate-400 font-mono">All Shortcuts</span>
      </div>

      <div class="grid grid-cols-2 gap-2.5">
        
        <!-- 1. បញ្ជីអតិថិជនទាំងអស់ (ពេញអេក្រង់) -->
        <div onclick="closeProfileDrawer(); openAllCustomersModal();" 
             class="ios-glass-card rounded-2xl p-3 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-orange-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <div class="w-8 h-8 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center">
              <i data-lucide="users" class="w-4 h-4"></i>
            </div>
            <span class="px-1.5 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-mono font-bold text-[10px]">
              ${customers.length} នាក់
            </span>
          </div>
          <div>
            <h3 class="font-bold text-xs text-white leading-tight">បញ្ជីអតិថិជនទាំងអស់</h3>
            <p class="text-[9.5px] text-slate-400 mt-0.5 card-subtitle">បង្ហាញពេញអេក្រង់ 100%</p>
          </div>
        </div>

        <!-- 2. ផែនការ (Note) -->
        <div onclick="closeProfileDrawer(); openProfileSubModal('note');" 
             class="ios-glass-card rounded-2xl p-3 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-amber-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <div class="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <i data-lucide="notebook-pen" class="w-4 h-4"></i>
            </div>
            <span class="px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-bold text-[10px]">
              ${notes.length} Note
            </span>
          </div>
          <div>
            <h3 class="font-bold text-xs text-white leading-tight">ផែនការ (Note)</h3>
            <p class="text-[9.5px] text-slate-400 mt-0.5 card-subtitle">កត់ត្រាផែនការ & គោលដៅ</p>
          </div>
        </div>

        <!-- 3. សៀវភៅ (ជីវិតជាការរៀនសូត្រ) -->
        <div onclick="closeProfileDrawer(); openProfileSubModal('book');" 
             class="ios-glass-card rounded-2xl p-3 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-emerald-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <div class="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
              <i data-lucide="book-open" class="w-4 h-4"></i>
            </div>
            <span class="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono font-bold text-[10px]">
              អាន
            </span>
          </div>
          <div>
            <h3 class="font-bold text-xs text-white leading-tight">សៀវភៅ</h3>
            <p class="text-[9.5px] text-slate-400 mt-0.5 card-subtitle">ជីវិតជាការរៀនសូត្រ</p>
          </div>
        </div>

        <!-- 4. Members List -->
        <div onclick="closeProfileDrawer(); openProfileSubModal('members');" 
             class="ios-glass-card rounded-2xl p-3 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-blue-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <div class="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
              <i data-lucide="contact-round" class="w-4 h-4"></i>
            </div>
            <span class="px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-mono font-bold text-[10px]">
              ${membersCount} នាក់
            </span>
          </div>
          <div>
            <h3 class="font-bold text-xs text-white leading-tight">Members List</h3>
            <p class="text-[9.5px] text-slate-400 mt-0.5 card-subtitle">បញ្ជីសមាជិកក្រុម</p>
          </div>
        </div>

        <!-- 5. ជជែក (Link Telegram Group) -->
        <div onclick="closeProfileDrawer(); handleTelegramGroupClick();" 
             class="ios-glass-card rounded-2xl p-3 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-sky-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <div class="w-8 h-8 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center">
              <i data-lucide="send" class="w-4 h-4"></i>
            </div>
            <button onclick="event.stopPropagation(); closeProfileDrawer(); openProfileSubModal('telegram_edit');" 
                    title="កែ Link Telegram"
                    class="p-1 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition">
              <i data-lucide="settings-2" class="w-3 h-3"></i>
            </button>
          </div>
          <div>
            <h3 class="font-bold text-xs text-white leading-tight">ជជែក (សមាជិក)</h3>
            <p class="text-[9.5px] text-slate-400 mt-0.5 card-subtitle">Telegram Group</p>
          </div>
        </div>

        <!-- 6. QR Code (Photos) -->
        <div onclick="closeProfileDrawer(); openQrPhotosModal();" 
             class="ios-glass-card rounded-2xl p-3 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-purple-500/40">
          <div class="flex items-center justify-between mb-1.5">
            <div class="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
              <i data-lucide="qr-code" class="w-4 h-4"></i>
            </div>
            <span class="px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 font-mono font-bold text-[10px]">
              ${uploadedQrCount}/4 រូប
            </span>
          </div>
          <div>
            <h3 class="font-bold text-xs text-white leading-tight">QR Code</h3>
            <p class="text-[9.5px] text-slate-400 mt-0.5 card-subtitle">រូបភាព QR ស្កេន</p>
          </div>
        </div>

      </div>
    </div>

    <!-- ZONE 2: ព័ត៌មានសមាជិក (Member Info) + Button «កែប្រែ» -->
    <div class="ios-glass-card rounded-2xl p-3 border border-white/10">
      <div class="flex items-center justify-between mb-2">
        <span class="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
          <i data-lucide="id-card" class="w-3.5 h-3.5 text-orange-400"></i>
          <span>ព័ត៌មានសមាជិក (Info)</span>
        </span>
        <button onclick="closeProfileDrawer(); openEditProfileModal();" 
                class="text-[11px] font-bold text-orange-400 hover:underline flex items-center gap-1 active:scale-95 transition">
          <i data-lucide="pencil" class="w-3 h-3"></i>
          <span>កែប្រែ</span>
        </button>
      </div>

      <div class="space-y-1.5">
        ${infoItems.map(item => `
          <div class="flex items-center gap-2 text-xs py-1 px-2 rounded-xl bg-black/20 border border-white/5">
            <i data-lucide="${item.icon}" class="w-3.5 h-3.5 ${item.color} shrink-0"></i>
            <span class="text-slate-400 text-[10.5px] shrink-0">${item.label}:</span>
            <span class="text-white font-semibold truncate text-[11px]">${item.val}</span>
          </div>
        `).join('') || `<p class="text-xs text-slate-400 text-center py-1">មិនទាន់បង្ហាញព័ត៌មានផ្ទាល់ខ្លួន</p>`}
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
            <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">ការកំណត់ (Settings)</h4>
            <p class="text-[9.5px] text-slate-400 mt-0.5 truncate settings-subtitle">ពណ៌, ពុម្ពអក្សរ, ទំហំអក្សរ, ផ្ទាំងរូបភាព</p>
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
            <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">ឯកជនភាព (Privacy)</h4>
            <p class="text-[9.5px] text-slate-400 mt-0.5 truncate settings-subtitle">បិទ/បើកការបង្ហាញព័ត៌មានផ្ទាល់ខ្លួន</p>
          </div>
        </div>
        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
      </div>

      <!-- 3. ផ្តល់មតិយោបល់មកក្រុមហ៊ុន (Feedback) -->
      <div onclick="closeProfileDrawer(); openProfileSubModal('feedback');" 
           class="settings-row p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition select-none">
        <div class="settings-row-left flex items-center gap-2.5 min-w-0">
          <div class="settings-icon-box w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0">
            <i data-lucide="message-square-plus" class="w-3.5 h-3.5 text-blue-400"></i>
          </div>
          <div class="min-w-0">
            <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">ផ្តល់មតិយោបល់មកក្រុមហ៊ុន</h4>
            <p class="text-[9.5px] text-slate-400 mt-0.5 truncate settings-subtitle">ផ្ញើសំណូមពរ និងមតិកែលម្អ</p>
          </div>
        </div>
        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-slate-400 shrink-0"></i>
      </div>

      <!-- 4. សុំជំនួយ (Help / Support) -->
      <div onclick="closeProfileDrawer(); openProfileSubModal('support');" 
           class="settings-row p-3 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition select-none">
        <div class="settings-row-left flex items-center gap-2.5 min-w-0">
          <div class="settings-icon-box w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
            <i data-lucide="help-circle" class="w-3.5 h-3.5 text-amber-400"></i>
          </div>
          <div class="min-w-0">
            <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">សុំជំនួយ</h4>
            <p class="text-[9.5px] text-slate-400 mt-0.5 truncate settings-subtitle">ទំនាក់ទំនងក្រុមការងារបច្ចេកទេស</p>
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
            <h4 class="settings-row-title text-xs font-bold text-rose-400 truncate leading-tight">ចាកចេញ (Log Out)</h4>
            <p class="text-[9.5px] text-slate-400 mt-0.5 truncate settings-subtitle">ចាកចេញដើម្បីប្រើប្រាស់ Email ផ្សេង</p>
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
  const membersCount = (d && d.teamLeaders) ? d.teamLeaders.length : 3;

  const infoItems = [
    { key: 'showWork', icon: 'briefcase', color: 'text-orange-400', label: 'ធ្វើការនៅ', val: p.work },
    { key: 'showStudy', icon: 'graduation-cap', color: 'text-blue-400', label: 'សិក្សានៅ', val: p.study },
    { key: 'showLive', icon: 'home', color: 'text-emerald-400', label: 'រស់នៅ', val: p.live },
    { key: 'showFrom', icon: 'map-pin', color: 'text-rose-400', label: 'មកពី', val: p.from },
    { key: 'showStatus', icon: 'heart', color: 'text-pink-400', label: 'ស្ថានភាព', val: p.status },
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



        <!-- Member Info (Live, Study, Work, From, Status, Phone - Editable) -->
        <div class="mt-4 pt-3.5 border-t border-white/10 text-left">
          <div class="flex items-center justify-between mb-2">
            <span class="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <i data-lucide="id-card" class="w-3.5 h-3.5 text-orange-400"></i>
              <span>ព័ត៌មានសមាជិក (Info)</span>
            </span>
            <button onclick="openEditProfileModal()" 
                    class="text-[11px] font-bold text-orange-400 hover:underline flex items-center gap-1 active:scale-95 transition">
              <i data-lucide="pencil" class="w-3 h-3"></i>
              <span>កែប្រែ</span>
            </button>
          </div>

          <div class="space-y-1.5">
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

          <!-- 4. Members List -->
          <div onclick="openProfileSubModal('members')" 
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
              <h3 class="font-bold text-xs text-white leading-tight">Members List</h3>
              <p class="text-[10px] text-slate-400 mt-0.5 card-subtitle">បញ្ជីសមាជិកក្រុម</p>
            </div>
          </div>

          <!-- 5. ជជែក (សមាជិកក្រុម Link Telegram Group) -->
          <div onclick="handleTelegramGroupClick()" 
               class="ios-glass-card rounded-2xl p-3.5 border border-white/10 cursor-pointer active:scale-95 transition flex flex-col justify-between hover:border-sky-500/40">
            <div class="flex items-center justify-between mb-2">
              <div class="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center justify-center">
                <i data-lucide="send" class="w-4.5 h-4.5"></i>
              </div>
              <button onclick="event.stopPropagation(); openProfileSubModal('telegram_edit');" 
                      title="កែដាក់ Link Telegram Group ខ្លួនឯង"
                      class="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition">
                <i data-lucide="settings-2" class="w-3.5 h-3.5"></i>
              </button>
            </div>
            <div>
              <h3 class="font-bold text-xs text-white leading-tight">ជជែក (សមាជិកក្រុម)</h3>
              <p class="text-[10px] text-slate-400 mt-0.5 card-subtitle">Link Telegram Group</p>
            </div>
          </div>

          <!-- 6. QR Code (Photos) -->
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
              <h3 class="font-bold text-xs text-white leading-tight">QR Code (Photos)</h3>
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

        <!-- 2. ផ្តល់មតិយោបល់មកក្រុមហ៊ុន (Feedback) -->
        <div onclick="openProfileSubModal('feedback')" 
             class="settings-row p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition select-none">
          <div class="settings-row-left flex items-center gap-3 min-w-0">
            <div class="settings-icon-box w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center shrink-0">
              <i data-lucide="message-square-heart" class="w-4 h-4 text-amber-400"></i>
            </div>
            <div class="min-w-0">
              <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">ផ្តល់មតិយោបល់មកក្រុមហ៊ុន</h4>
              <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">ចូលរួមផ្តល់មតិកែលម្អប្រព័ន្ធ SD Data</p>
            </div>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 shrink-0"></i>
        </div>

        <!-- 3. សុំជំនួយ (Help & Support) -->
        <div onclick="openProfileSubModal('help')" 
             class="settings-row p-3.5 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] active:scale-[0.99] transition select-none">
          <div class="settings-row-left flex items-center gap-3 min-w-0">
            <div class="settings-icon-box w-8 h-8 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center shrink-0">
              <i data-lucide="circle-help" class="w-4 h-4 text-sky-400"></i>
            </div>
            <div class="min-w-0">
              <h4 class="settings-row-title text-xs font-bold text-white truncate leading-tight">សុំជំនួយ (Help & Support)</h4>
              <p class="text-[10px] text-slate-400 mt-0.5 truncate settings-subtitle">មជ្ឈមណ្ឌលជំនួយ និងទំនាក់ទំនងបច្ចេកទេស</p>
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
  const p = getProfileData();
  tempAvatarDataUrl = p.avatar || 'profile.png';

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
  setVal('edit-prof-phone', p.phone);

  document.getElementById('edit-profile-modal')?.classList?.remove('hidden');
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
          w = Math.round((w * maxSizePx) / h);
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
  tempAvatarDataUrl = 'profile.png';
  const preview = document.getElementById('edit-prof-avatar-preview');
  if (preview) preview.src = 'profile.png';
}

function saveProfileData() {
  const current = getProfileData();
  const getVal = (id) => (document.getElementById(id)?.value || '').trim();

  const updated = {
    ...current,
    avatar: tempAvatarDataUrl || current.avatar || 'profile.png',
    name: getVal('edit-prof-name') || 'ស្តី ស្តើង',
    memberId: getVal('edit-prof-id') || 'ID: SD-0001',
    subtitle: getVal('edit-prof-sub') || 'SDEY SDOEUNG',
    work: getVal('edit-prof-work'),
    study: getVal('edit-prof-study'),
    live: getVal('edit-prof-live'),
    from: getVal('edit-prof-from'),
    status: getVal('edit-prof-status'),
    phone: getVal('edit-prof-phone')
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

  let lastScrollTop = 0;
  let summaryIdleTimer = null;

  listEl.addEventListener('scroll', () => {
    const currentScrollTop = listEl.scrollTop;
    const diff = currentScrollTop - lastScrollTop;

    // 1. Dragging finger UP (content scrolling down into deeper items) -> Hide Summary
    if (diff > 6 && currentScrollTop > 25) {
      summaryEl.classList.add('summary-collapsed');
    }
    // 2. Dragging finger DOWN (content scrolling back up towards top) OR near top -> Show Summary
    else if (diff < -5 || currentScrollTop <= 15) {
      summaryEl.classList.remove('summary-collapsed');
    }

    lastScrollTop = currentScrollTop;

    // 3. When scrolling stops / screen is still -> Smoothly restore Summary!
    clearTimeout(summaryIdleTimer);
    summaryIdleTimer = setTimeout(() => {
      summaryEl.classList.remove('summary-collapsed');
    }, 400);
  }, { passive: true });
}

function openAllCustomersModal() {
  expandedCustomerKey = null;
  const searchInput = document.getElementById('all-customers-search-input');
  if (searchInput) searchInput.value = '';
  renderAllCustomersList();
  setupAllCustomersScroll();
  document.getElementById('all-customers-modal')?.classList?.remove('hidden');
  if (window.lucide) window.lucide.createIcons();
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

  if (countBadge) countBadge.textContent = `${customers.length} នាក់`;

  const totalOrdersSum = customers.reduce((acc, c) => acc + c.totalOrders, 0);
  const totalBoxesSum = customers.reduce((acc, c) => acc + c.totalBoxes, 0);
  const totalSpentSum = customers.reduce((acc, c) => acc + c.totalSpent, 0);

  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="p-2 rounded-xl bg-black/30 border border-white/5">
        <span class="text-[10px] text-slate-400 block">សរុបការកុម្ម៉ង់</span>
        <span class="font-mono font-bold text-xs text-white">${formatInt(totalOrdersSum)} ដង</span>
      </div>
      <div class="p-2 rounded-xl bg-black/30 border border-white/5">
        <span class="text-[10px] text-slate-400 block">សរុបប្រអប់</span>
        <span class="font-mono font-bold text-xs text-orange-400">${formatInt(totalBoxesSum)} ប្រអប់</span>
      </div>
      <div class="p-2 rounded-xl bg-black/30 border border-white/5">
        <span class="text-[10px] text-slate-400 block">ទឹកប្រាក់សរុប</span>
        <span class="font-mono font-bold text-xs text-emerald-400">${formatUSD(totalSpentSum)}</span>
      </div>
    `;
  }

  listEl.innerHTML = customers.map((c, idx) => {
    const isExpanded = expandedCustomerKey === c.key;
    const encodedKey = encodeURIComponent(c.key);
    const sortedOrders = [...c.orders].sort((a, b) => (b.isoDate || '').localeCompare(a.isoDate || ''));

    return `
      <div class="ios-glass-card rounded-2xl p-3 border border-white/10 transition">
        <div onclick="toggleCustomerOrderHistory('${encodedKey}')" class="flex items-center justify-between gap-2 cursor-pointer select-none">
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="w-7 h-7 rounded-xl bg-orange-500/20 border border-orange-500/30 text-orange-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
              ${idx + 1}
            </span>
            <div class="min-w-0">
              <div class="flex items-center gap-1.5">
                <h4 class="font-bold text-xs text-white truncate">${c.name}</h4>
                <span class="px-1.5 py-0.2 rounded bg-white/10 text-[9px] font-mono text-slate-300 shrink-0">${c.totalOrders} ដង</span>
              </div>
              <div class="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5 truncate">
                <span>📍 ${c.location}</span>
                <span>•</span>
                <span class="font-mono">📞 ${c.phone}</span>
              </div>
            </div>
          </div>

          <div class="text-right shrink-0">
            <div class="font-mono font-bold text-xs text-emerald-400">${formatUSD(c.totalSpent)}</div>
            <div class="text-[10px] font-mono text-orange-400 font-bold">${c.totalBoxes} ប្រអប់ • ${c.lastDate}</div>
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
                  <div>
                    <span class="font-mono text-white font-bold">${o.date}</span>
                    <span class="text-slate-400 ml-1.5">(${o.deliveryMethod || '—'})</span>
                  </div>
                  <div class="font-mono">
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
  openProfileSubModal('note');
  if (appState.currentView === 'profile') renderCurrentView();
}

function deleteProfileNote(id) {
  const notes = getProfileNotes().filter(n => n.id !== id);
  localStorage.setItem('sd_profile_notes', JSON.stringify(notes));
  openProfileSubModal('note');
  if (appState.currentView === 'profile') renderCurrentView();
}

function closeProfileSubModal() {
  document.getElementById('profile-sub-modal')?.classList?.add('hidden');
  openProfileDrawer();
}

function openProfileSubModal(type) {
  const header = document.getElementById('profile-sub-modal-header');
  const body = document.getElementById('profile-sub-modal-body');
  if (!header || !body) return;

  let title = '';
  let sub = '';
  let icon = 'sparkles';
  let contentHTML = '';

  if (type === 'privacy') {
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
  } else if (type === 'note') {
    const notes = getProfileNotes();
    title = 'ផែនការ (Note)';
    sub = 'កត់ត្រាផែនការ និងកិច្ចការសំខាន់ៗ';
    icon = 'notebook-pen';
    contentHTML = `
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
    `;
  } else if (type === 'book') {
    title = 'សៀវភៅ (ជីវិតជាការរៀនសូត្រ)';
    sub = 'គតិបណ្ឌិត និងការអភិវឌ្ឍខ្លួនប្រចាំថ្ងៃ';
    icon = 'book-open';
    contentHTML = `
      <div class="space-y-2.5">
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
      </div>
    `;
  } else if (type === 'members') {
    const d = DataService.data;
    const leaders = (d && d.teamLeaders) ? d.teamLeaders : [];
    title = 'Members List (សមាជិកក្រុម)';
    sub = 'បញ្ជីឈ្មោះសមាជិក និងលទ្ធផលការងារ';
    icon = 'contact-round';
    contentHTML = `
      <div class="space-y-2">
        ${leaders.map((m, idx) => `
          <div class="p-3 rounded-2xl bg-black/30 border border-white/10 flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <span class="w-7 h-7 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-400 font-mono font-bold text-xs flex items-center justify-center">0${idx + 1}</span>
              <div>
                <div class="flex items-center gap-1">
                  <span class="text-xs font-bold text-white">${m.name}</span>
                  ${idx === 0 ? '<img src="blue-tick.png" class="w-3.5 h-3.5 object-contain">' : ''}
                </div>
                <span class="text-[10px] text-slate-400">គោលដៅ: ${m.targetGoal} ប្រអប់</span>
              </div>
            </div>
            <span class="font-mono font-bold text-xs text-emerald-400">${m.totalBoxes} ប្រអប់ (${m.targetPercent}%)</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (type === 'feedback') {
    title = 'ផ្តល់មតិយោបល់មកក្រុមហ៊ុន';
    sub = 'រាល់មតិយោបល់របស់បងជួយឱ្យប្រព័ន្ធកាន់តែល្អប្រសើរ';
    icon = 'message-square-heart';
    contentHTML = `
      <div class="space-y-2.5">
        <textarea id="feedback-text-input" rows="3" placeholder="សូមសរសេរមតិយោបល់ ឬសំណូមពររបស់អ្នក..." 
                  class="w-full text-xs bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-amber-500"></textarea>
        <button onclick="showToastNotification('អរគុណសម្រាប់មតិយោបល់របស់អ្នក!'); closeProfileSubModal();" 
                class="w-full py-2.5 rounded-xl accent-solid-btn text-xs font-bold active:scale-95 transition">
          ផ្ញើមតិយោបល់
        </button>
      </div>
    `;
  } else if (type === 'help') {
    title = 'សុំជំនួយ (Help & Support)';
    sub = 'ទំនាក់ទំនងផ្នែកជំនួយបច្ចេកទេស';
    icon = 'circle-help';
    contentHTML = `
      <div class="space-y-2.5 text-xs">
        <div class="p-3 rounded-2xl bg-black/30 border border-white/10 space-y-1.5">
          <p class="text-white font-bold">📞 ទូរសព្ទជំនួយបន្ទាន់៖ <span class="font-mono text-orange-400">096 212 9261</span></p>
          <p class="text-slate-300">💬 Telegram៖ <span class="font-mono text-sky-400">@sdey_sdoeung</span></p>
        </div>
        <a href="https://t.me/sdey_sdoeung" target="_blank" 
           class="w-full py-2.5 rounded-xl accent-solid-btn text-xs font-bold flex items-center justify-center gap-1.5 active:scale-95 transition">
          <i data-lucide="send" class="w-3.5 h-3.5"></i>
          <span>ទាក់ទងតាម Telegram ផ្ទាល់</span>
        </a>
      </div>
    `;
  } else if (type === 'logout') {
    title = 'ចាកចេញ (Log out - Beta)';
    sub = 'ប្តូរគណនី ដើម្បីប្រើអ៊ីមែលផ្សេង';
    icon = 'log-out';
    contentHTML = `
      <div class="space-y-3 text-xs">
        <div class="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-slate-200 leading-relaxed">
          មុខងារ <strong>Log out (Beta)</strong> អនុញ្ញាតឱ្យអ្នកចាកចេញពីសម័យប្រើប្រាស់បច្ចុប្បន្ន ឬប្តូរទៅប្រើគណនី Google / Email ផ្សេង។
        </div>
        <div class="flex items-center gap-2">
          <button onclick="closeProfileSubModal(); lockAppNow();" 
                  class="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs active:scale-95 transition">
            🔒 ចាក់សោអេក្រង់
          </button>
          <button onclick="window.location.href='/logout';" 
                  class="flex-1 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs active:scale-95 transition">
            🚪 ប្តូរអ៊ីមែលផ្សេង
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
  if (window.lucide) window.lucide.createIcons();
}


