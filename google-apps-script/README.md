# សេចក្តីណែនាំអំពីការដំឡើង Google Apps Script Webhook សម្រាប់ SD Dashboard

ឯកសារកូដ: `Code.gs`

## ១. របៀបដំឡើងក្នុង Google Sheets (រយៈពេល ២ នាទី)

1. បើក Google Sheet របស់អ្នក (ឯកសារ Business Data VST)
2. ចុចម៉ឺនុយ **Extensions** ➜ **Apps Script**
3. លុបកូដចាស់ក្នុងផ្ទាំងកូដចោល ហើយចម្លង (Copy) កូដពី [Code.gs](file:///Users/chesda/Desktop/SD%20Dashboard/google-apps-script/Code.gs) មកបិទភ្ជាប់ (Paste) ជំនួស
4. ចុចប៊ូតុង **Save (រូបថាស)** ឬចុច `Ctrl+S` / `Cmd+S`

## ២. របៀប Deploy ជា Web App ដើម្បីទទួលបាន Webhook URL

1. នៅជ្រុងខាងលើស្តាំដៃ ចុចប៊ូតុង **Deploy** ➜ ជ្រើសយក **New deployment**
2. ចុចរូបកង់ធ្មេញ (Select type) ➜ ជ្រើសរើស **Web app**
3. កំណត់ដូចខាងក្រោម៖
   - **Description**: `SD Dashboard Webhook v1.0`
   - **Execute as**: `Me (អាសយដ្ឋាន Gmail របស់អ្នក)`
   - **Who has access**: `Anyone` (ដើម្បីឱ្យ Dashboard អាចបញ្ជូនទិន្នន័យមកបានដោយមិនជាប់ Login)
4. ចុច **Deploy**
5. ប្រសិនបើមានផ្ទាំងសួររកសិទ្ធិ (Authorization):
   - ចុច **Authorize access** ➜ ជ្រើសរើសគណនី Google របស់អ្នក
   - ចុច **Advanced** (នៅខាងឆ្វេងក្រោម) ➜ ចុច **Go to ... (unsafe)** ➜ ចុច **Allow**
6. ចម្លងយក **Web app URL** (ដែលចាប់ផ្តើមដោយ `https://script.google.com/macros/s/.../exec`)

## ៣. ស្ថានភាពភ្ជាប់ Web App URL ក្នុង SD Dashboard

✅ **បានភ្ជាប់រួចជាស្រេចក្នុងកូដ Dashboard (`app.js`):**
```
https://script.google.com/macros/s/AKfycbx3nkhqs8_dzCOKgdsC3nWZJWUz6Lsegguu22PFws3eLlUm3yux33kSWgFnf4g_-OBW/exec
```

រាល់ពេលដែលលោកគ្រូ ឬក្រុមការងារចុច «បញ្ជូនការកុម្ម៉ង់» ឬ «កត់ត្រាការចំណាយ» លើ Dashboard នោះទិន្នន័យនឹងត្រូវសរសេរចូល Google Sheet ដោយស្វ័យប្រវត្តិតាមគោលការណ៍សុវត្ថិភាពទាំង ៤៖
- ពិនិត្យភាពស្ទួន (Duplicate check)
- ការពាររូបមន្ត (No., Total $, Stock, Profit)
- រក្សាទុកកន្លែង Manual update (COD Status, Payment Date, Note)
- បង្កើត `REC-XXXX` បន្តបន្ទាប់ដោយស្វ័យប្រវត្តិសម្រាប់ AppSheet

