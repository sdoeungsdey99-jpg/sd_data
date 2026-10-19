/**
 * ==============================================================================
 * SD Dashboard & Personal Sales / Daily Expenses Sync Webhook
 * ==============================================================================
 * សុវត្ថិភាពខ្ពស់ ១០០% មិនប៉ះពាល់រូបមន្តចាស់ និងការពារទិន្នន័យ manual tracking
 * 
 * គោលការណ៍សុវត្ថិភាពទាំង ៤៖
 * 1. ពិនិត្យភាពស្ទួន (Deduplication) តាម Order ID (អនុញ្ញាតលេខទូរស័ព្ទដដែលសម្រាប់អតិថិជនទិញម្តងទៀត)
 * 2. ថែរក្សារូបមន្តស្វ័យប្រវត្តិ (No., Total $, Stock Cost, Profit)
 * 3. មិនប៉ះពាល់ជួរឈរដែលកត់ត្រាដោយដៃ (COD Status = បានដាក់ការកុម្មង់, Payment Date, Note)
 * 4. បង្កើត Record_ID (REC-XXXX) ស្វ័យប្រវត្តិសម្រាប់ AppSheet ស្គាល់
 * 5. បំប្លែងកាលបរិច្ឆេទជា Date Object ពិតប្រាកដ ការពារបញ្ហា Invalid Date លើ Google Sheet
 * ==============================================================================
 */

/**
 * ដំណើរការមុខងារនេះ ១ ដង (ចុច Run) ដើម្បីឱ្យ Google សួរទាមទារសិទ្ធិ (Authorize) ចូលទៅកាន់ Google Sheets ដទៃទៀត
 */
function authorizeExternalSheets() {
  DriveApp.getRootFolder();
  var testId = '1ewZpP5q63bvEEui2ARrKnFTE2tjTJKr2cU84rtLclis';
  var ss = SpreadsheetApp.openById(testId);
  Logger.log('ជោគជ័យក្នុងការតភ្ជាប់ទៅកាន់តារាង៖ ' + ss.getName());
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    version: '2.1-multi-sheet',
    message: 'SD Dashboard Webhook is live and ready! 🚀'
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  // រង់ចាំ lock រយៈពេលរហូតដល់ 30 វិនាទី ដើម្បីការពារការបញ្ជូនទិន្នន័យជាន់គ្នា (Concurrency Safety)
  var success = lock.tryLock(30000);
  if (!success) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: 'Server is busy, could not obtain lock.'
    })).setMimeType(ContentService.MimeType.JSON);
  }

  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'No data payload received'
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var payload = JSON.parse(e.postData.contents);
    var action = payload.action;
    var data = payload.data;
    var targetSheetId = (payload.sheetId && String(payload.sheetId).length > 15) ? String(payload.sheetId).trim() : null;
    var ss = targetSheetId ? SpreadsheetApp.openById(targetSheetId) : SpreadsheetApp.getActiveSpreadsheet();

    if (action === 'add_order') {
      var result = insertPersonalSalesOrder(ss, data);
      return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    } else if (action === 'add_expense') {
      var result = insertDailyExpense(ss, data);
      return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Unknown action: ' + action
      })).setMimeType(ContentService.MimeType.JSON);
    }

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/**
 * ជំនួយការបំប្លែង String ទៅជា JavaScript Date Object ពិតប្រាកដ
 * ការពារដាច់ខាតកុំឱ្យលោតសញ្ញា Invalid Date លើ Google Sheet Data Validation
 */
function parseToDateObj(dateStr) {
  if (!dateStr) return new Date();
  if (dateStr instanceof Date) return dateStr;
  var str = String(dateStr).trim();

  // ទម្រង់ DD/MM/YYYY ឬ D/M/YYYY
  var dmMatch = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (dmMatch) {
    var day = parseInt(dmMatch[1], 10);
    var month = parseInt(dmMatch[2], 10) - 1; // 0-indexed month
    var year = parseInt(dmMatch[3], 10);
    return new Date(year, month, day, 12, 0, 0);
  }

  // ទម្រង់ ISO YYYY-MM-DD
  var isoMatch = str.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
  if (isoMatch) {
    var iYear = parseInt(isoMatch[1], 10);
    var iMonth = parseInt(isoMatch[2], 10) - 1;
    var iDay = parseInt(isoMatch[3], 10);
    return new Date(iYear, iMonth, iDay, 12, 0, 0);
  }

  return new Date();
}

/**
 * បញ្ចូលការកុម្ម៉ង់ចូលផ្ទាំង Personal Sales ដោយសុវត្ថិភាព ១០០%
 */
function insertPersonalSalesOrder(ss, order) {
  var sheet = ss.getSheetByName('Personal Sales');
  if (!sheet) {
    return { status: 'error', message: 'Tab "Personal Sales" not found!' };
  }

  // 1. ស្វែងរកជួរដេកទាំងអស់ដើម្បីពិនិត្យភាពស្ទួន Order ID (Col E)
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  var numRows = values.length;

  var newOrderId = String(order.orderId || '').trim();

  var maxRecNum = 0;
  var targetRow = -1; // ជួរដេកដែលត្រូវបំពេញ

  for (var r = 1; r < numRows; r++) { // រាប់ពីជួរទី ២ (Index 1) ក្រោម Header
    var rowDate = values[r][0]; // Col A
    var existingOrderId = String(values[r][4] || '').trim(); // Col E
    var existingRecId = String(values[r][23] || '').trim(); // Col X

    // តាមដានលេខ REC-XXXX ខ្ពស់បំផុត
    var matchRec = existingRecId.match(/REC-(\d+)/i);
    if (matchRec) {
      var recVal = parseInt(matchRec[1], 10);
      if (recVal > maxRecNum) maxRecNum = recVal;
    }

    // ពិនិត្យភាពស្ទួនតាម Order ID (បើ Order ID ដូចគ្នា មិនឱ្យបញ្ចូលទេ តែលេខទូរស័ព្ទដូចគ្នាអនុញ្ញាត)
    if (newOrderId && existingOrderId && newOrderId.toLowerCase() === existingOrderId.toLowerCase()) {
      return { 
        status: 'duplicate', 
        message: 'Order ID ' + newOrderId + ' មានរួចហើយក្នុងជួរទី ' + (r + 1),
        row: r + 1 
      };
    }

    // ស្វែងរកជួរទំនេរដំបូង (Col A ទទេ ឬគ្មាន Date)
    if (targetRow === -1 && (!rowDate || String(rowDate).trim() === '')) {
      targetRow = r + 1; // 1-indexed row number
    }
  }

  // បើរកមិនឃើញជួរទំនេរដែលមានស្រាប់ទេ ត្រូវបន្ថែមជួរថ្មីនៅខាងក្រោម
  if (targetRow === -1) {
    targetRow = numRows + 1;
  }

  // បង្កើត Record_ID ថ្មីបន្តបន្ទាប់ (ឧ. REC-0503)
  var nextRecNum = maxRecNum + 1;
  var formattedRecId = 'REC-' + ('0000' + nextRecNum).slice(-4);

  // រូបមន្តស្របតាមស្តង់ដារជាក់ស្តែងរបស់ Google Sheet
  var prevRow = targetRow - 1;
  var formulaNo = '=IF(OR(A' + targetRow + '="", A' + targetRow + '=A' + prevRow + '), B' + prevRow + '+1, 1)';
  var formulaTotal = '=(M' + targetRow + '*0.97)/35.6';
  var formulaStock = '=(H' + targetRow + '+I' + targetRow + '+J' + targetRow + '+K' + targetRow + '+L' + targetRow + ')*24';
  var formulaProfit = '=N' + targetRow + '-(O' + targetRow + '+R' + targetRow + ')';

  // បំប្លែង Date Object ពិតប្រាកដ និងកំណត់ Format dd/MM/yyyy ការពារ Invalid Error
  var dateObj = parseToDateObj(order.date);

  // បំពេញទិន្នន័យចូលក្រឡាជួរនីមួយៗ
  sheet.getRange(targetRow, 1).setValue(dateObj).setNumberFormat('dd/MM/yyyy'); // Col A: Date Object (លែងមាន Invalid)
  sheet.getRange(targetRow, 2).setFormula(formulaNo); // Col B: No. (Formula)
  sheet.getRange(targetRow, 3).setValue(order.customer || ''); // Col C: FB Name (រំលង/ទុកទំនេរបាន)
  sheet.getRange(targetRow, 4).setValue(order.seller || 'សមាជិក Bostar'); // Col D: Seller
  sheet.getRange(targetRow, 5).setValue(order.orderId || ''); // Col E: Order ID
  sheet.getRange(targetRow, 6).setValue(order.location || ''); // Col F: Location
  sheet.getRange(targetRow, 7).setValue(order.phone || ''); // Col G: Phone (លេខទូរស័ព្ទដូចគ្នាអាចបញ្ជូនបាន)
  sheet.getRange(targetRow, 8).setValue(Number(order.qtyYL || 0)); // Col H: YL (Yong Liang)
  sheet.getRange(targetRow, 9).setValue(Number(order.qtyYLP || 0)); // Col I: YLP (Yong Liang Plus)
  sheet.getRange(targetRow, 10).setValue(Number(order.qtyKN || 0)); // Col J: KN (Kidney Pro)
  sheet.getRange(targetRow, 11).setValue(Number(order.qtyPDO || 0)); // Col K: P D.O (Pro D.O)
  sheet.getRange(targetRow, 12).setValue(Number(order.freeQty || 0)); // Col L: Free
  sheet.getRange(targetRow, 13).setValue(Number(order.thaiBaht || order.price || 0)); // Col M: Price (Baht)
  sheet.getRange(targetRow, 14).setFormula(formulaTotal); // Col N: Total $ (Formula auto)
  sheet.getRange(targetRow, 15).setValue(Number(order.shipFee || 0)); // Col O: Ship Fee
  sheet.getRange(targetRow, 16).setValue(order.deliveryMethod || 'VET(COD)'); // Col P: Delivery
  sheet.getRange(targetRow, 17).setValue(order.codStatus || 'បានដាក់ការកុម្មង់'); // Col Q: COD Status (Default: បានដាក់ការកុម្មង់)
  sheet.getRange(targetRow, 18).setFormula(formulaStock); // Col R: Stock Cost (Formula)
  // Col S (19): Payment Date ទុកឱ្យនៅទំនេរ រង់ចាំលោកគ្រូបំពេញពេលលុយចូលជាក់ស្តែង
  sheet.getRange(targetRow, 20).setFormula(formulaProfit); // Col T: Profit (Formula)
  sheet.getRange(targetRow, 21).setValue(order.note || ''); // Col U: Note
  sheet.getRange(targetRow, 24).setValue(formattedRecId); // Col X: Record_ID

  return {
    status: 'success',
    action: 'add_order',
    row: targetRow,
    recordId: formattedRecId,
    orderId: order.orderId
  };
}

/**
 * បញ្ចូលការចំណាយចូលផ្ទាំង Daily Expenses
 */
function insertDailyExpense(ss, exp) {
  var sheet = ss.getSheetByName('Daily Expenses');
  if (!sheet) {
    return { status: 'error', message: 'Tab "Daily Expenses" not found!' };
  }

  // ស្វែងរកជួរដេកទំនេរដំបូង (Sequential First Empty Row) ការពារកុំឱ្យរំលងជួរទទេ
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  var numRows = values.length;
  var targetRow = -1;

  for (var r = 1; r < numRows; r++) {
    var rowDate = values[r][0];
    var rowDesc = values[r][1];
    var rowAmt = values[r][3];
    // បើ Col A, Col B និង Col D សុទ្ធតែទំនេរ នោះជាជួរទំនេរដំបូងពិតប្រាកដ
    if ((!rowDate || String(rowDate).trim() === '') && 
        (!rowDesc || String(rowDesc).trim() === '') && 
        (rowAmt === '' || rowAmt === null || rowAmt === undefined)) {
      targetRow = r + 1;
      break;
    }
  }

  // ប្រសិនបើគ្មានជួរទំនេរកណ្តាលទេ គឺដាក់នៅចុងទិន្នន័យ
  if (targetRow === -1) {
    targetRow = numRows + 1;
  }

  // បំប្លែង Date Object ពិតប្រាកដ និងកំណត់ Format dd/MM/yyyy សុទ្ធ
  // ការពារដាច់ខាតកុំឱ្យលោតសញ្ញា Invalid Date ដោយសារជាប់ម៉ោង HH:mm លើ Data Validation របស់ Google Sheet
  var dateObj = parseToDateObj(exp.date);
  sheet.getRange(targetRow, 1).setValue(dateObj).setNumberFormat('dd/MM/yyyy'); // Col A: Date

  sheet.getRange(targetRow, 2).setValue(exp.description || ''); // Col B: Description
  sheet.getRange(targetRow, 3).setValue(exp.category || 'ហូបចុក & ប្រចាំថ្ងៃ'); // Col C: Category
  sheet.getRange(targetRow, 4).setValue(Number(exp.amount || 0)); // Col D: Amount ($)

  // ប្រសិនបើមានបញ្ជាក់ម៉ោង (Time) ដាក់ចូលក្នុង Col E (Note) ដើម្បីកុំឱ្យខូច Data Validation នៃ Col A
  var noteText = exp.note || '';
  if (exp.time) {
    noteText = noteText ? (exp.time + ' - ' + noteText) : ('ម៉ោង ' + exp.time);
  }
  if (noteText) {
    sheet.getRange(targetRow, 5).setValue(noteText); // Col E: Note
  }

  return {
    status: 'success',
    action: 'add_expense',
    version: '2.0-sequential',
    row: targetRow,
    amount: exp.amount
  };
}
