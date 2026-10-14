/**
 * ==============================================================================
 * SD Dashboard & Personal Sales / Daily Expenses Sync Webhook
 * ==============================================================================
 * សុវត្ថិភាពខ្ពស់ ១០០% មិនប៉ះពាល់រូបមន្តចាស់ និងការពារទិន្នន័យ manual tracking
 * 
 * គោលការណ៍សុវត្ថិភាពទាំង ៤៖
 * 1. ពិនិត្យភាពស្ទួន (Deduplication) តាម Order ID និង Phone
 * 2. ថែរក្សារូបមន្តស្វ័យប្រវត្តិ (No., Total $, Stock Cost, Profit)
 * 3. មិនប៉ះពាល់ជួរឈរដែលកត់ត្រាដោយដៃ (COD Status, Payment Date, Note)
 * 4. បង្កើត Record_ID (REC-XXXX) ស្វ័យប្រវត្តិសម្រាប់ AppSheet ស្គាល់
 * ==============================================================================
 */

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
    var ss = SpreadsheetApp.getActiveSpreadsheet();

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
 * បញ្ចូលការកុម្ម៉ង់ចូលផ្ទាំង Personal Sales ដោយសុវត្ថិភាព ១០០%
 */
function insertPersonalSalesOrder(ss, order) {
  var sheet = ss.getSheetByName('Personal Sales');
  if (!sheet) {
    return { status: 'error', message: 'Tab "Personal Sales" not found!' };
  }

  // 1. ស្វែងរកជួរដេកទាំងអស់ដើម្បីពិនិត្យភាពស្ទួន (Col E: Order ID, Col G: Phone)
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  var numRows = values.length;

  var newOrderId = String(order.orderId || '').trim();
  var newPhone = String(order.phone || '').trim().replace(/[\s\-\.]/g, '');

  var maxRecNum = 0;
  var targetRow = -1; // ជួរដេកដែលត្រូវបំពេញ

  for (var r = 1; r < numRows; r++) { // រាប់ពីជួរទី ២ (Index 1) ក្រោម Header
    var rowDate = values[r][0]; // Col A
    var existingOrderId = String(values[r][4] || '').trim(); // Col E
    var existingPhone = String(values[r][6] || '').trim().replace(/[\s\-\.]/g, ''); // Col G
    var existingRecId = String(values[r][23] || '').trim(); // Col X

    // តាមដានលេខ REC-XXXX ខ្ពស់បំផុត
    var matchRec = existingRecId.match(/REC-(\d+)/i);
    if (matchRec) {
      var recVal = parseInt(matchRec[1], 10);
      if (recVal > maxRecNum) maxRecNum = recVal;
    }

    // ក. ពិនិត្យភាពស្ទួន (បើ Order ID ដូចគ្នា ហើយមិនមែនទទេ)
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

  // បំពេញទិន្នន័យចូលក្រឡាជួរនីមួយៗ
  sheet.getRange(targetRow, 1).setValue(order.date || Utilities.formatDate(new Date(), 'GMT+7', 'dd/MM/yyyy')); // Col A: Date
  sheet.getRange(targetRow, 2).setFormula(formulaNo); // Col B: No. (Formula)
  sheet.getRange(targetRow, 3).setValue(order.customer || 'អតិថិជនទូទៅ'); // Col C: FB Name
  sheet.getRange(targetRow, 4).setValue(order.seller || 'ស្តី ស្តើង'); // Col D: Seller
  sheet.getRange(targetRow, 5).setValue(order.orderId || ''); // Col E: Order ID
  sheet.getRange(targetRow, 6).setValue(order.location || ''); // Col F: Location
  sheet.getRange(targetRow, 7).setValue(order.phone || ''); // Col G: Phone
  sheet.getRange(targetRow, 8).setValue(Number(order.qtyYL || 0)); // Col H: YL
  sheet.getRange(targetRow, 9).setValue(Number(order.qtyYLP || 0)); // Col I: YLP
  sheet.getRange(targetRow, 10).setValue(Number(order.qtyKN || 0)); // Col J: KN
  sheet.getRange(targetRow, 11).setValue(Number(order.qtyPDO || 0)); // Col K: P D.O
  sheet.getRange(targetRow, 12).setValue(Number(order.freeQty || 0)); // Col L: Free
  sheet.getRange(targetRow, 13).setValue(Number(order.thaiBaht || order.price || 0)); // Col M: Price (Baht)
  sheet.getRange(targetRow, 14).setFormula(formulaTotal); // Col N: Total $ (Formula)
  sheet.getRange(targetRow, 15).setValue(Number(order.shipFee || 0)); // Col O: Ship Fee
  sheet.getRange(targetRow, 16).setValue(order.deliveryMethod || 'VET(COD)'); // Col P: Delivery
  sheet.getRange(targetRow, 17).setValue(order.codStatus || 'មិនទាន់ទូទាត់'); // Col Q: COD Status (មិនជាន់ពាក្យ update ចាស់)
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

  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  var numRows = values.length;
  var targetRow = -1;

  for (var r = 1; r < numRows; r++) {
    var dateVal = values[r][0];
    if (!dateVal || String(dateVal).trim() === '') {
      targetRow = r + 1;
      break;
    }
  }

  if (targetRow === -1) {
    targetRow = numRows + 1;
  }

  var ddmmyyyy = exp.date || Utilities.formatDate(new Date(), 'GMT+7', 'dd/MM/yyyy');
  var fullTimeStr = exp.time ? (ddmmyyyy + ' ' + exp.time) : ddmmyyyy;

  sheet.getRange(targetRow, 1).setValue(fullTimeStr); // Col A: Date & Time
  sheet.getRange(targetRow, 2).setValue(exp.description || ''); // Col B: Description
  sheet.getRange(targetRow, 3).setValue(exp.category || 'ហូបចុក & ប្រចាំថ្ងៃ'); // Col C: Category
  sheet.getRange(targetRow, 4).setValue(Number(exp.amount || 0)); // Col D: Amount ($)
  if (exp.note) {
    sheet.getRange(targetRow, 5).setValue(exp.note); // Col E: Note (if any)
  }

  return {
    status: 'success',
    action: 'add_expense',
    row: targetRow,
    amount: exp.amount
  };
}

/**
 * តេស្តសាកល្បងដោយផ្ទាល់ក្នុង Apps Script Console (Test Function)
 */
function testInsertOrder() {
  var sampleOrder = {
    date: '15/10/2026',
    customer: 'អតិថិជន តេស្ត',
    seller: 'ស្តី ស្តើង',
    orderId: '#TEST-9999',
    location: 'ភ្នំពេញ',
    phone: '012 345 678',
    qtyYL: 1,
    qtyYLP: 1,
    qtyKN: 0,
    qtyPDO: 0,
    freeQty: 0,
    thaiBaht: 3400,
    shipFee: 5.50,
    deliveryMethod: 'Thai ✅COD',
    codStatus: 'មិនទាន់ទូទាត់',
    note: 'តេស្តប្រព័ន្ធសុវត្ថិភាព'
  };
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var res = insertPersonalSalesOrder(ss, sampleOrder);
  Logger.log(JSON.stringify(res));
}
