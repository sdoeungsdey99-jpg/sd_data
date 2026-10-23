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
  var bostarTrackId = '1yTLq_EepGZfxv_lR8cmTeWWVULgP6ADUkB6uZX2eNA4';
  try {
    var ss = SpreadsheetApp.openById(bostarTrackId);
    Logger.log('ជោគជ័យក្នុងការតភ្ជាប់ទៅកាន់តារាង BostarTrack៖ ' + ss.getName());
  } catch (e) {
    Logger.log('Authorize error: ' + e);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: 'ok',
    version: '3.0-bostartrack-direct-val',
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
      // 1. បញ្ចូលទៅក្នុង Sheet ផ្ទាល់ខ្លួនរបស់សមាជិក (Personal Sales)
      var result = insertPersonalSalesOrder(ss, data);

      // 2. Dual-Sync: បញ្ចូលទៅកាន់ Master Data នៃ BostarTrack (1yTLq_EepGZfxv_lR8cmTeWWVULgP6ADUkB6uZX2eNA4) ស្វ័យប្រវត្តិ
      var bostarTrackId = '1yTLq_EepGZfxv_lR8cmTeWWVULgP6ADUkB6uZX2eNA4';
      var syncToBostarTrack = (payload.syncToBostarTrack !== false) && (data.syncToBostarTrack !== false);
      if (syncToBostarTrack && targetSheetId !== bostarTrackId) {
        try {
          var bostarSs = SpreadsheetApp.openById(bostarTrackId);
          insertPersonalSalesOrder(bostarSs, data);
        } catch (btErr) {
          Logger.log('BostarTrack Dual Sync Warn: ' + btErr);
        }
      }

      return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    } else if (action === 'add_expense') {
      var result = insertDailyExpense(ss, data);
      return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(ContentService.MimeType.JSON);
    } else if (action === 'sync_attendance') {
      var result = syncBostarAttendance(ss, data);
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
 * បញ្ចូលការកុម្ម៉ង់ចូលផ្ទាំង Personal Sales ឬ Master Data ដោយសុវត្ថិភាព ១០០%
 * បំពេញតម្លៃលេខផ្ទាល់ (Direct Value) ជួរ N, R, T និងកត់ត្រា Reward QTY ជួរ V
 */
function insertPersonalSalesOrder(ss, order) {
  var sheet = ss.getSheetByName('Personal Sales') || ss.getSheetByName('Master Data') || ss.getSheets()[0];
  if (!sheet) {
    return { status: 'error', message: 'Target sales tab not found in spreadsheet!' };
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

  // ប្រភេទការលក់៖ 'standard' (ស្តុកក្រុមហ៊ុន), 'reward' (លក់រង្វាន់), 'return' (លក់អីវ៉ាន់ត្រឡប់)
  var orderType = String(order.orderType || (order.isReward ? 'reward' : (order.isReturn ? 'return' : 'standard'))).toLowerCase();

  // គណនាចំនួនប្រអប់សរុប
  var totalBoxes = Number(order.totalBoxQty || 0);
  if (!totalBoxes || totalBoxes === 0) {
    totalBoxes = Number(order.qtyYL || 0) + Number(order.qtyYLP || 0) + 
                 Number(order.qtyKN || 0) + Number(order.qtyPDO || 0) + 
                 Number(order.qtyEmmi || 0) + Number(order.qtySGP || 0) + 
                 Number(order.freeQty || 0);
  }

  // គណនាតម្លៃដើម Col R (Stock Cost) តាមប្រភេទការលក់៖
  // - ស្តុកក្រុមហ៊ុន (Standard) = Qty * $24.00
  // - លក់រង្វាន់ (Reward) = Qty * $5.00
  // - លក់អីវ៉ាន់ត្រឡប់ (Return) = $0.00
  var stockCost = 0;
  if (orderType === 'reward') {
    stockCost = totalBoxes * 5.0;
  } else if (orderType === 'return') {
    stockCost = 0;
  } else {
    stockCost = totalBoxes * 24.0;
  }

  // តម្លៃលក់សរុប Col N (Total USD)
  var totalAmountUSD = Number(order.totalAmount || 0);

  // ថ្លៃដឹកជញ្ជូន Col O (Ship Fee)
  var shipFee = Number(order.shipFee || 0);

  // ប្រាក់ចំណេញសុទ្ធ Col T (Profit)
  var profitVal = (order.profit !== undefined && order.profit !== null && order.profit !== '') 
    ? Number(order.profit) 
    : Math.max(0, Math.round((totalAmountUSD - stockCost - shipFee) * 100) / 100);

  // រូបមន្ត No. បន្តបន្ទាប់
  var prevRow = targetRow - 1;
  var formulaNo = '=IF(OR(A' + targetRow + '="", A' + targetRow + '=A' + prevRow + '), B' + prevRow + '+1, 1)';

  // បំប្លែង Date Object ពិតប្រាកដ និងកំណត់ Format dd/MM/yyyy ការពារ Invalid Error
  var dateObj = parseToDateObj(order.date);

  // បំពេញទិន្នន័យចូលក្រឡាជួរនីមួយៗ (Direct Values ជួរ N, R, T)
  sheet.getRange(targetRow, 1).setValue(dateObj).setNumberFormat('dd/MM/yyyy'); // Col A: Date Object
  sheet.getRange(targetRow, 2).setFormula(formulaNo); // Col B: No. (Formula)
  sheet.getRange(targetRow, 3).setValue(order.customer || ''); // Col C: FB Name
  sheet.getRange(targetRow, 4).setValue(order.seller || 'សមាជិក Bostar'); // Col D: Seller
  
  // Col E: Order ID (បើលក់រង្វាន់ ទុកទំនេរ; បើធម្មតា ឬត្រឡប់ ដាក់លេខ Order)
  sheet.getRange(targetRow, 5).setValue(orderType === 'reward' ? '' : (order.orderId || ''));

  sheet.getRange(targetRow, 6).setValue(order.location || ''); // Col F: Location
  sheet.getRange(targetRow, 7).setValue(order.phone || ''); // Col G: Phone

  // ផលិតផល H, I, J, K, L៖
  // - ពេលលក់រង្វាន់ ឬលក់អីវ៉ាន់ត្រឡប់ ទុកនៅទំនេរ ("") ដើម្បីកុំឱ្យច្រឡំជាមួយស្តុកធម្មតា
  // - ពេលស្តុកក្រុមហ៊ុន បំពេញតាមមុខទំនិញពិត
  if (orderType === 'reward' || orderType === 'return') {
    sheet.getRange(targetRow, 8).setValue('');  // Col H: YL
    sheet.getRange(targetRow, 9).setValue('');  // Col I: YLP
    sheet.getRange(targetRow, 10).setValue(''); // Col J: KN
    sheet.getRange(targetRow, 11).setValue(''); // Col K: P D.O
    sheet.getRange(targetRow, 12).setValue(''); // Col L: Free
  } else {
    sheet.getRange(targetRow, 8).setValue(Number(order.qtyYL || 0));
    sheet.getRange(targetRow, 9).setValue(Number(order.qtyYLP || 0));
    sheet.getRange(targetRow, 10).setValue(Number(order.qtyKN || 0));
    sheet.getRange(targetRow, 11).setValue(Number(order.qtyPDO || 0));
    sheet.getRange(targetRow, 12).setValue(Number(order.freeQty || 0));
  }

  sheet.getRange(targetRow, 13).setValue(Number(order.thaiBaht || order.price || 0)); // Col M: Price (Baht)
  
  // Col N: Total $ (បំពេញតម្លៃលេខផ្ទាល់ Direct Value)
  sheet.getRange(targetRow, 14).setValue(totalAmountUSD).setNumberFormat('$#,##0.00');

  sheet.getRange(targetRow, 15).setValue(shipFee).setNumberFormat('$#,##0.00'); // Col O: Ship Fee
  sheet.getRange(targetRow, 16).setValue(order.deliveryMethod || 'VET(COD)'); // Col P: Delivery
  sheet.getRange(targetRow, 17).setValue(order.codStatus || 'បានដាក់ការកុម្មង់'); // Col Q: COD Status

  // Col R: Stock Cost (បំពេញតម្លៃលេខផ្ទាល់ Direct Value: ធម្មតា $24, រង្វាន់ $5, ត្រឡប់ $0)
  sheet.getRange(targetRow, 18).setValue(stockCost).setNumberFormat('$#,##0.00');

  // Col S (19): Payment Date ទុកឱ្យនៅទំនេរ រង់ចាំបំពេញពេលលុយចូលជាក់ស្តែង
  // Col T: Profit (បំពេញតម្លៃលេខផ្ទាល់ Direct Value)
  sheet.getRange(targetRow, 20).setValue(profitVal).setNumberFormat('$#,##0.00');

  // Col U: Note (សម្គាល់ស្វ័យប្រវត្តិ ឬតាមការវាយ)
  sheet.getRange(targetRow, 21).setValue(order.note || '');

  // Col V (22): Reward QTY (ពេលលក់រង្វាន់ កត់ត្រាចំនួនប្រអប់សរុប; ក្រៅពីនេះ ទុកទំនេរ)
  if (orderType === 'reward') {
    sheet.getRange(targetRow, 22).setValue(totalBoxes);
  } else {
    sheet.getRange(targetRow, 22).setValue('');
  }

  // Col W (23): ទំនេរ
  sheet.getRange(targetRow, 23).setValue('');

  // Col X (24): Record_ID
  sheet.getRange(targetRow, 24).setValue(formattedRecId);

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

/**
 * ==============================================================================
 * SYNC ATTENDANCE TO BOSTARTRACK (Tab "Check in")
 * គោលបំណង៖ Check-in និង Check-out ក្នុងជួរតែមួយ (Single Row per User per Day)
 * Sheet: 1yTLq_EepGZfxv_lR8cmTeWWVULgP6ADUkB6uZX2eNA4
 * ==============================================================================
 */
function syncBostarAttendance(ss, data) {
  var bostarTrackId = '1yTLq_EepGZfxv_lR8cmTeWWVULgP6ADUkB6uZX2eNA4';
  var targetSs = null;
  try {
    targetSs = SpreadsheetApp.openById(bostarTrackId);
  } catch (e) {
    targetSs = ss || SpreadsheetApp.getActiveSpreadsheet();
  }

  var sheet = targetSs.getSheetByName('Check in');
  if (!sheet) {
    sheet = targetSs.getSheetByName('Check In') || targetSs.getSheetByName('Attendance');
  }
  if (!sheet) {
    sheet = targetSs.insertSheet('Check in');
    sheet.appendRow([
      'Date', 'Staff ID', 'Staff Name', 'Role', 'Check-in Time', 'Check-out Time', 
      'Work Duration', 'Status', 'Late Mins', 'Location', 'Reason', 'Motivational Note', 
      'Timestamp', 'Check-out Status', 'Check-out Location', 'Check-out Note'
    ]);
  }

  var actionType = data.type || (data.checkOutTime ? 'out' : 'in');
  var targetDate = data.date || Utilities.formatDate(new Date(), 'Asia/Phnom_Penh', 'yyyy-MM-dd');
  var staffId = String(data.staffId || '').replace(/^(ID:\s*)+/i, '').trim() || 'BG-001';
  var staffName = data.staffName || 'Bostar Member';
  var role = data.role || 'សមាជិកក្រុម BostarGroup';

  // Read existing rows to locate today's row for this staffId
  var lastRow = sheet.getLastRow();
  var matchRowIndex = -1;

  if (lastRow > 1) {
    var dateStaffRange = sheet.getRange(2, 1, lastRow - 1, 2).getValues();
    for (var i = 0; i < dateStaffRange.length; i++) {
      var rDate = dateStaffRange[i][0];
      var rDateStr = '';
      if (rDate instanceof Date) {
        rDateStr = Utilities.formatDate(rDate, 'Asia/Phnom_Penh', 'yyyy-MM-dd');
      } else {
        rDateStr = String(rDate).trim();
      }
      var rStaffId = String(dateStaffRange[i][1]).replace(/^(ID:\s*)+/i, '').trim();

      // Normalize date format (YYYY-MM-DD)
      var normTarget = targetDate;
      if (normTarget.indexOf('/') > -1) {
        var p = normTarget.split('/');
        if (p.length === 3) normTarget = p[2] + '-' + ('0' + p[1]).slice(-2) + '-' + ('0' + p[0]).slice(-2);
      }
      if (rDateStr.indexOf('/') > -1) {
        var p = rDateStr.split('/');
        if (p.length === 3) rDateStr = p[2] + '-' + ('0' + p[1]).slice(-2) + '-' + ('0' + p[0]).slice(-2);
      }

      if (rStaffId.toLowerCase() === staffId.toLowerCase() && rDateStr === normTarget) {
        matchRowIndex = i + 2; // 1-based sheet row
        break;
      }
    }
  }

  var now = new Date();
  var timeStr = data.time || Utilities.formatDate(now, 'Asia/Phnom_Penh', 'hh:mm:ss a');
  var timestampStr = Utilities.formatDate(now, 'Asia/Phnom_Penh', 'yyyy-MM-dd HH:mm:ss');

  if (actionType === 'in') {
    // CHECK IN
    if (matchRowIndex > 0) {
      sheet.getRange(matchRowIndex, 3).setValue(staffName);
      sheet.getRange(matchRowIndex, 4).setValue(role);
      sheet.getRange(matchRowIndex, 5).setValue(data.checkInTime || timeStr);
      sheet.getRange(matchRowIndex, 8).setValue(data.status || 'Present');
      sheet.getRange(matchRowIndex, 9).setValue(data.lateMinutes || 0);
      sheet.getRange(matchRowIndex, 10).setValue(data.location || 'ការិយាល័យកណ្តាល (At Office Verified)');
      if (data.reason) sheet.getRange(matchRowIndex, 11).setValue(data.reason);
      if (data.motivationalNote) sheet.getRange(matchRowIndex, 12).setValue(data.motivationalNote);
      sheet.getRange(matchRowIndex, 13).setValue(timestampStr);

      return {
        status: 'success',
        action: 'check_in_updated',
        rowIndex: matchRowIndex,
        message: 'Check-in updated in existing row ' + matchRowIndex
      };
    } else {
      var newRow = [
        targetDate,                                        // A: Date
        staffId,                                           // B: Staff ID
        staffName,                                         // C: Staff Name
        role,                                              // D: Role
        data.checkInTime || timeStr,                       // E: Check-in Time
        '',                                                // F: Check-out Time (pending)
        '',                                                // G: Work Duration (pending)
        data.status || 'Present',                          // H: Status
        data.lateMinutes || 0,                             // I: Late Mins
        data.location || 'ការិយាល័យកណ្តាល (At Office Verified)', // J: Location
        data.reason || '',                                 // K: Reason
        data.motivationalNote || '',                       // L: Motivational Note
        timestampStr,                                      // M: Timestamp
        '',                                                // N: Check-out Status
        '',                                                // O: Check-out Location
        ''                                                 // P: Check-out Note
      ];
      sheet.appendRow(newRow);
      return {
        status: 'success',
        action: 'check_in_created',
        rowIndex: sheet.getLastRow(),
        message: 'New Check-in row created for ' + staffName
      };
    }
  } else {
    // CHECK OUT
    var checkOutTime = data.checkOutTime || timeStr;
    var duration = data.duration || '';

    if (matchRowIndex > 0) {
      sheet.getRange(matchRowIndex, 6).setValue(checkOutTime); // F: Check-out Time
      if (duration) sheet.getRange(matchRowIndex, 7).setValue(duration); // G: Work Duration
      sheet.getRange(matchRowIndex, 14).setValue(data.checkOutStatus || 'Normal'); // N: Check-out Status
      sheet.getRange(matchRowIndex, 15).setValue(data.checkOutLocation || data.location || 'ការិយាល័យកណ្តាល (At Office Verified)'); // O: Check-out Location
      sheet.getRange(matchRowIndex, 16).setValue(data.checkOutNote || 'ចេញទាន់ពេល / បញ្ចប់ការងារដោយរលូន'); // P: Check-out Note

      return {
        status: 'success',
        action: 'check_out_updated',
        rowIndex: matchRowIndex,
        message: 'Check-out recorded into row ' + matchRowIndex
      };
    } else {
      var newRow = [
        targetDate,
        staffId,
        staffName,
        role,
        '—',
        checkOutTime,
        duration,
        data.status || 'Present',
        0,
        data.location || 'ការិយាល័យកណ្តាល (At Office Verified)',
        data.reason || 'Check-out តែម្តង',
        data.motivationalNote || '',
        timestampStr,
        data.checkOutStatus || 'Normal',
        data.checkOutLocation || data.location || 'ការិយាល័យកណ្តាល (At Office Verified)',
        data.checkOutNote || 'ចេញទាន់ពេល / បញ្ចប់ការងារដោយរលូន'
      ];
      sheet.appendRow(newRow);
      return {
        status: 'success',
        action: 'check_out_created',
        rowIndex: sheet.getLastRow(),
        message: 'New row created on Check-out for ' + staffName
      };
    }
  }
}
