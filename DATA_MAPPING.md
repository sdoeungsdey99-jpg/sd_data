# របាយការណ៍ពិនិត្យប្រភពទិន្នន័យ Google Sheet និងផែនទីទិន្នន័យ (DATA MAPPING)

**កាលបរិច្ឆេទធ្វើបច្ចុប្បន្នភាព៖** ថ្ងៃទី ០៦ ខែ តុលា ឆ្នាំ ២០២៦  
**ប្រព័ន្ធ៖** SD Data - ERP Dashboard  
**ស្ថានភាពសិទ្ធិចូលមើល (Access Status)៖** ✅ **ជោគជ័យ (HTTP 200 OK - បានអានទិន្នន័យផ្ទាល់ពី Google Sheet)**

---

## ១. ព័ត៌មានប្រភពទិន្នន័យដែលបានពិនិត្យជាក់ស្ដែង (Verified Google Sheet Source)

- **ឈ្មោះឯកសារ Spreadsheet៖** `Business Data​ VST Form - Google ថាស`
- **Spreadsheet ID៖** `1Qu70irzkvKyYN49eoquTModvm33WT5ZEyTTjUFoEbWU`
- **បញ្ជីសន្លឹកការងារ (Sheet Tabs) ទាំង ១៣ ដែលបានពិនិត្យ៖**

| ល.រ | ឈ្មោះ Tab ពិតប្រាកដ | Sheet GID | ប្រភេទ Tab (Classification) | ចំនួនជួរដេក | តួនាទីក្នុងប្រព័ន្ធ |
| :---: | :--- | :--- | :--- | :---: | :--- |
| 1 | **Master data** | `0` | **ប្រតិបត្តិការដើម (Raw Transaction)** | 134 ជួរ | កត់ត្រាប្រតិបត្តិការលក់រួម, ថ្លៃដើម, ដឹកជញ្ជូន និងចំណេញដុល |
| 2 | **Personal Sales** | `1802751802` | **ប្រតិបត្តិការដើម (Raw Transaction)** | 999 ជួរ | កត់ត្រាការលក់រាយផ្ទាល់ខ្លួនប្រចាំថ្ងៃ, ទីតាំង, អតិថិជន, ថ្លៃដឹក |
| 3 | **Daily Expenses** | `1413782774` | **ប្រតិបត្តិការដើម (Raw Transaction)** | 756 ជួរ | កត់ត្រាចំណាយប្រតិបត្តិការប្រចាំថ្ងៃ តាមប្រភេទចំណាយ |
| 4 | **Product List** | `205669274` | **បញ្ជីយោង (Master Lookup)** | 451 ជួរ | បញ្ជីឈ្មោះផលិតផល និងថ្លៃដើមរោងចក្រ (Factory Cost: $24.00) |
| 5 | **Team** | `892217243` | **បញ្ជីយោង (Master Lookup)** | 9 ជួរ | បញ្ជីឈ្មោះក្រុម និងថ្លៃដើមផ្គត់ផ្គង់តាមក្រុមនីមួយៗ (Cost per Team) |
| 6 | **Date** | `289155757` | **បញ្ជីយោង (Master Lookup)** | 32 ជួរ | កាលបរិច្ឆេទ ជម្រើសប្រភេទប្រតិបត្តិការ និងសេវាដឹកជញ្ជូន |
| 7 | **Dashboard** | `1458756437` | **របាយការណ៍សង្ខេប (Summary Report)** | 18 ជួរ | សង្ខេបប្រចាំខែ (កុម្ម៉ង់, ចំណូល, ថ្លៃដើម, Boost, ចំណេញសុទ្ធ) |
| 8 | **Monthly View** | `1826001070` | **របាយការណ៍សង្ខេប (Summary Report)** | 103 ជួរ | របាយការណ៍លម្អិតប្រចាំខែជ្រើសរើស (ភ្ជាប់រូបមន្តពី Personal Sales) |
| 9 | **Team Monthly View** | `30391871` | **របាយការណ៍សង្ខេប (Summary Report)** | 38 ជួរ | របាយការណ៍តាមដានការលក់តាមក្រុមប្រចាំខែ |
| 10 | **Team Sales** | `608899183` | **របាយការណ៍សង្ខេប (Summary Report)** | 380 ជួរ | តាមដានការលក់ និងគោលដៅលក់តាមក្រុមការងារ (Set Boxes) |
| 11 | **Bank & Cash Balance** | `1381982614` | **របាយការណ៍សង្ខេប (Summary Report)** | 29 ជួរ | ផ្ទាំងតាមដានសមតុល្យគណនីធនាគារ និងសាច់ប្រាក់រាវ |
| 12 | **App_Bank_Balance** | `2112651128` | **បញ្ជីយោង / សមតុល្យ** | 13 ជួរ | បញ្ជីគណនីធនាគារ (ABA, ACLEDA, លុយសុទ្ធ) ជាដុល្លារ និងរៀល |
| 13 | **Quotes Of The Day** | `121165832` | **ផ្សេងៗ (Content)** | — | ពាក្យស្លោកលើកទឹកចិត្ត |

> **ចំណាំសំខាន់ដើម្បីជៀសវាងរាប់ទិន្នន័យស្ទួន (Prevent Double Counting):**  
> ការគណនា Dashboard ត្រូវទាញពី Tab ប្រតិបត្តិការដើម (**Master data**, **Personal Sales**, **Daily Expenses**) ឬទាញពី **Dashboard Tab** (សម្រាប់ផ្ទៀងផ្ទាត់តួលេខសង្ខេប)។ ហាមដាច់ខាតមិនត្រូវបូកទិន្នន័យពី Monthly View ឬ Team Sales បញ្ចូលគ្នាជាមួយ Master data ឡើយ ព្រោះវាជាទិន្នន័យចម្លងសង្ខេប (Aggregated Views)។

---

## ២. ការកំណត់អត្ថន័យនៃជួរដេក និងជួរឈរ (Rows & Columns Semantics)

### ២.១. នៅក្នុង Tab «Master data»
- **ក្បាលតារាង (Header Row):** ស្ថិតនៅ **ជួរដេកទី ២ (Row 2)**
- **ទិន្នន័យចាប់ផ្ដើម (Data Starts):** ពី **ជួរដេកទី ៤ (Row 4)** (ជួរដេកទី ៣ ជាចន្លោះទទេ)
- **មួយជួរដេកតំណាងឱ្យ៖** ប្រតិបត្តិការបញ្ជាទិញ/លក់មួយ (One Sales Order Transaction)
- **ជួរដេកសរុប (Subtotal):** មិនមានលាយឡំនៅចន្លោះទិន្នន័យឡើយ (ជួរដេកនីមួយៗជាប្រតិបត្តិការដាច់ដោយឡែក)
- **ទម្រង់៖** កាលបរិច្ឆេទបំបែកជា `Date`, `Month`, `Year`។ រូបិយប័ណ្ណជាដុល្លារ `$` (USD)។

### ២.២. នៅក្នុង Tab «Daily Expenses»
- **ក្បាលតារាង (Header Row):** ស្ថិតនៅ **ជួរដេកទី ១ (Row 1)**
- **ទិន្នន័យចាប់ផ្ដើម (Data Starts):** ពី **ជួរដេកទី ២ (Row 2)**
- **មួយជួរដេកតំណាងឱ្យ៖** ចំណាយមួយមុខ (One Expense Item)
- **ទម្រង់កាលបរិច្ឆេទ៖** `DD/MM/YYYY` (ឧ. `01/01/2026`)
- **រូបិយប័ណ្ណ៖** ដុល្លារ `$` (USD)

---

## ៣. តារាង DATA MAPPING (សម្រាប់ Dashboard ERP)

| ឈ្មោះទិន្នន័យក្នុង Dashboard | Tab ប្រភពពិត | ឈ្មោះក្បាល Column ពិត | អត្ថន័យ / ឯកតា | លក្ខខណ្ឌ & ចំណាំ |
| :--- | :--- | :--- | :--- | :--- |
| **កាលបរិច្ឆេទ** | `Master data` / `Daily Expenses` | `Date`, `Month`, `Year` / `Date` | ថ្ងៃ ខែ ឆ្នាំ (`DD/MM/YYYY`) | បំប្លែងឱ្យទៅជា Format ស្តង់ដារតែមួយ |
| **លេខប្រតិបត្តិការ** | `Personal Sales` / `Master data` | `Order ID` / `Fb Customer` | អត្ថបទ / លេខកូដវិក្កយបត្រ | ឧទាហរណ៍៖ `#1257`, `#1280` |
| **ប្រភេទប្រតិបត្តិការ** | `Master data` | `Operation Type` | អត្ថបទ (`Sale`, `Stock In`, `Expense`) | ក្នុងទិន្នន័យបច្ចុប្បន្នភាគច្រើនជា `Sale` |
| **ក្រុម** | `Master data` | `Team` | ឈ្មោះក្រុម | ឧ. `Customer 1`, `Customer 2`, `Customer 3`, `Customer 5`, `Chheng Thy`, `Chheng Rasung` |
| **សមាជិក / អ្នកលក់** | `Master data` / `Personal Sales` | `Member` / `Seller` | ឈ្មោះបុគ្គលិក / សមាជិក | ឧ. `Chheng Rasung`, `Chheng Thy`, `SDEY SDOEUNG` |
| **ផលិតផល** | `Master data` | `Product Name` | ឈ្មោះផលិតផល | ឧ. `Kidney Pro+Pro D.O`, `Yong Liang+Yong Liang Plus`, `S.G Pro` |
| **ចំនួនលក់** | `Master data` | `Sale QTY` | ចំនួនប្រអប់/កំប៉ុង (Integer) | ចំនួនឯកតាទំនិញលក់ពិត |
| **ចំនួនថែម (Free)** | `Personal Sales` | `Free` | ចំនួនឯកតាថែម (Integer) | មានកត់ត្រាក្នុង Personal Sales |
| **ចំនួនកុម្ម៉ង់ (Orders)** | `Dashboard` / `Personal Sales` | `ចំនួនកុម្ម៉ង់` / `Order ID` | ចំនួនប្រតិបត្តិការ (Orders) | សរុប 502 orders ក្នុងឆ្នាំ ២០២៦ |
| **ចំនួនចូលស្តុក** | `Master data` | `Stock In QTY` | ចំនួនឯកតា (Integer) | បច្ចុប្បន្នក្រឡានេះនៅទទេច្រើន |
| **ចំណូលសរុប (Revenue)** | `Master data` | `Total Cost` | ដុល្លារ ($ USD) | ⚠️ **តម្លៃដែលក្រុមទិញ/អតិថិជនបង់សរុប** (Gross Revenue របស់ក្រុមហ៊ុន) |
| **ថ្លៃដើមឯកតាផ្គត់ផ្គង់** | `Master data` | `Cost ` (មាន space នៅចុង) | ដុល្លារ ($ USD) | ថ្លៃដើមគិតតាមក្រុមនីមួយៗ ($38.33, $45.00, etc.) |
| **ថ្លៃដើមរោងចក្រឯកតា** | `Master data` | `Com.Cost` | ដុល្លារ ($ USD) | ថ្លៃដើមផ្ទាល់របស់ក្រុមហ៊ុន ($24.00) |
| **ថ្លៃដើមរោងចក្រសរុប** | `Master data` | `Total Com.Cost` | ដុល្លារ ($ USD) | ថ្លៃដើមទំនិញលក់ពិត (COGS របស់ក្រុមហ៊ុន) = QTY * $24.00 |
| **ចំណេញដុល (Gross Profit)** | `Master data` | `Gross Profit` | ដុល្លារ ($ USD) | រូបមន្តក្នុង Sheet៖ `Total Cost - Total Com.Cost` |
| **ថ្លៃដឹកជញ្ជូន** | `Master data` | `Shipping Cost` | ដុល្លារ ($ USD) | ថ្លៃសេវាដឹក (VET, Thai COD: $2.50 - $5.50) |
| **វិធីដឹកជញ្ជូន** | `Master data` | `Shipping Method` | អត្ថបទ | ឧ. `VET(COD)`, `Thai ✅COD`, `J&T` |
| **ស្ថានភាពដឹក/ទូទាត់** | `Master data` | `Status` | អត្ថបទ | `បានទូទាត់`, `សុំ Canceled`, (ទទេ) |
| **ចំណាយប្រតិបត្តិការ** | `Daily Expenses` | `Amount ($)` | ដុល្លារ ($ USD) | ចំណាយប្រចាំថ្ងៃបែងចែកតាម Category |
| **ប្រភេទចំណាយ** | `Daily Expenses` | `Category` | អត្ថបទ | ៧ ប្រភេទ៖ `ចំណាយថេរ`, `ហូបចុក & ប្រចាំថ្ងៃ`, `កម្សាន្ត & ចំណង់`, `វិនិយោគ & អភិវឌ្ឍន៍`, `សុខភាព & ថែទាំ`, `សង្គ្រោះបន្ទាន់ & ធម៌ទាន`, `ផ្សេងៗ` |
| **ចំណាយ Boost សរុប** | `Dashboard` / `Team Monthly View`| `ចំណាយ Boost ($)` | ដុល្លារ ($ USD) | ចំណាយផ្សព្វផ្សាយពាណិជ្ជកម្ម Facebook |
| **សមតុល្យសាច់ប្រាក់** | `App_Bank_Balance` | `សមតុល្យ ($)`, `សមតុល្យ (៛)` | USD / KHR | សមតុល្យក្នុងធនាគារ ABA, ACLEDA និងលុយសុទ្ធ |

---

## ៤. ការពារកំហុស COLUMN រំកិល (Header-Based Mapping Enforcement)

1. **ការកាត់ចន្លោះទទេ (Whitespace Trimming):**
   - ក្នុង `Master data` ក្បាល Column ថ្លៃដើមមានឈ្មោះថា `'Cost '` (មានចន្លោះទទេនៅខាងចុង)។ ប្រព័ន្ធត្រូវប្រើ `.trim()` ដើម្បីចាប់យក `'Cost'` ដោយស្វ័យប្រវត្តិ។
2. **ការស្គាល់ Column តាមអត្ថបទក្បាលតារាង (Header Lookup Index):**
   - ពេលទាញទិន្នន័យ ប្រព័ន្ធនឹងស្កេនរកជួរដេកដែលមានពាក្យ `'Date'` និង `'Product Name'` ឬ `'Operation Type'` ដើម្បីកំណត់ថាជាជួរក្បាលតារាងពិតប្រាកដ។
   - ចាប់យក Index តាមឈ្មោះ ដូចជា៖
     ```javascript
     const colIndex = {
       date: headers.findIndex(h => h.trim().toLowerCase() === 'date'),
       product: headers.findIndex(h => h.trim().toLowerCase() === 'product name'),
       qty: headers.findIndex(h => h.trim().toLowerCase() === 'sale qty'),
       totalRevenue: headers.findIndex(h => h.trim().toLowerCase() === 'total cost'),
       comCost: headers.findIndex(h => h.trim().toLowerCase() === 'total com.cost'),
       grossProfit: headers.findIndex(h => h.trim().toLowerCase() === 'gross profit'),
       status: headers.findIndex(h => h.trim().toLowerCase() === 'status')
     };
     ```
3. **ការគ្រប់គ្រងកំហុស (Error Handling):**
   - ប្រសិនបើរកមិនឃើញក្បាល Column ចាំបាច់ណាមួយ ប្រព័ន្ធនឹងបង្ហាញ Error Notification ភ្លាមៗ ដោយមិនសន្មត ឬដាក់ជំនួសដោយលេខ 0 ឡើយ។

---

## ៥. និយមន័យ និងការផ្ទៀងផ្ទាត់ការគណនា (Verified Calculations & Sample Check)

### ៥.១. ការផ្ទៀងផ្ទាត់គំរូជាក់ស្ដែងលើជួរដេកទី ៤ នៃ «Master data»
- **ទិន្នន័យគំរូ៖**
  - កាលបរិច្ឆេទ៖ `12-Aug-2026`
  - ផលិតផល៖ `Kidney Pro+Pro D.O`
  - ក្រុម៖ `Customer 3`
  - ចំនួនលក់ (`Sale QTY`): **3**
  - តម្លៃលក់ឱ្យក្រុម (`Cost`): **$38.33 / ឯកតា**
  - ចំណូលសរុប (`Total Cost`): **$115.00** *(3 × $38.33 = $114.99 ≈ $115.00)*
  - ថ្លៃដើមរោងចក្រ (`Com.Cost`): **$24.00 / ឯកតា**
  - ថ្លៃដើមរោងចក្រសរុប (`Total Com.Cost`): **$72.00** *(3 × $24.00 = $72.00)*
  - ចំណេញដុល (`Gross Profit`): **$43.00** *(ចំណូល $115.00 - ថ្លៃដើម $72.00 = $43.00)*
  - ស្ថានភាព (`Status`): `បានទូទាត់`

### ៥.២. និយមន័យការគណនាអាជីវកម្ម (Business Logic Definitions)
1. **ចំនួនលក់ (Sales Qty):**
   - រាប់តែប្រតិបត្តិការដែលមាន `Operation Type = 'Sale'` ហើយ `Status` មិនមែនជា `'សុំ Canceled'`។
2. **ចំណូលសរុប (Total Revenue):**
   - ក្នុង Sheet នេះ Column `Total Cost` គឺជាទឹកប្រាក់លក់ចេញសរុបទៅឱ្យក្រុម/អតិថិជន (Gross Sales Revenue)។
3. **ថ្លៃដើមទំនិញលក់សរុប (COGS):**
   - ប្រើ Column `Total Com.Cost` (បរិមាណលក់ × $24.00 ថ្លៃរោងចក្រ)។
4. **ចំណេញដុល (Gross Profit):**
   - `Gross Profit = Total Revenue (Total Cost) - COGS (Total Com.Cost)`
5. **ចំណេញសុទ្ធ (Net Profit):**
   - `Net Profit = Gross Profit - Shipping Cost - Ad Boost - Daily Operating Expenses`
6. **ការប្រៀបធៀប (Comparison Variance):**
   - `កើន/ថយ = លទ្ធផលខែទី២ - លទ្ធផលខែទី១`
   - `ភាគរយ % = ((ខែទី២ - ខែទី១) / ខែទី១) * 100`

---

## ៦. បញ្ហាគុណភាពទិន្នន័យដែលបានរកឃើញ (Data Quality Observations)

1. **ការសរសេរឈ្មោះក្រុមមិនដូចគ្នា (Case-sensitivity / Whitespace):**
   - រកឃើញទាំង `'Customer 2'` (C ធំ) និង `'customer 2'` (c តូច) នៅក្នុង Master data។
   - *ដំណោះស្រាយ៖* ប្រព័ន្ធ Dashboard ត្រូវធ្វើ Normalization (`.trim().toLowerCase()`) ពេល Filter ក្រុម។
2. **ឈ្មោះក្បាល Column មាន Whitespace៖**
   - Column `Cost ` មានចន្លោះទទេនៅចុង។
3. **ទិន្នន័យ Member ក្នុង Master Data នៅទំនេរច្រើន៖**
   - ក្នុង Master Data ជួរភាគច្រើនមានបំពេញតែ `Team` ប៉ុន្តែក្រឡា `Member` នៅទទេ (បំពេញតែពេលជា Chheng Rasung ឬ Chheng Thy)។
4. **ប្រតិបត្តិការដែលបានលុបចោល (Cancelled Orders):**
   - មានជួរដេកមួយចំនួនមាន Status ជា `'សុំ Canceled'` (ឧ. Row 8) ដែលមាន `Sale QTY` ទំនេរ។ ប្រព័ន្ធត្រូវច្រោះជួរទាំងនេះចេញពីការបូកសរុបលក់។
5. **ការប្រើឈ្មោះ Column បញ្ច្រាសទម្លាប់ទូទៅ៖**
   - Column ដែលដាក់ឈ្មោះថា `Total Cost` ធាតុពិតជា **ចំណូលសរុបពីការលក់ (Total Sales Revenue)** ទៅវិញ ហើយ Column `Total Com.Cost` ទើបជា **ថ្លៃដើមពិតរបស់ក្រុមហ៊ុន**។ ការគូសវាស Data Mapping ខាងលើបានកែសម្រួលការយល់ច្រឡំនេះរួចរាល់។

---

## ៧. ស្ថានភាពនៃ Modules ក្នុង Dashboard ធៀបនឹងប្រភពទិន្នន័យ

| Module ក្នុង Dashboard | ស្ថានភាពប្រភព | ប្រភព Tab ដែលត្រូវប្រើ |
| :--- | :---: | :--- |
| **ផ្ទាំងសង្ខេប (Dashboard)** | 🟢 គ្រប់គ្រាន់ពេញលេញ | `Master data`, `Dashboard`, `Daily Expenses` |
| **ការលក់ និងក្រុម (Sales & Team)** | 🟢 គ្រប់គ្រាន់ពេញលេញ | `Master data`, `Team Monthly View`, `Team` |
| **ការប្រៀបធៀប (Comparison)** | 🟢 គ្រប់គ្រាន់ពេញលេញ | `Dashboard`, `Master data`, `Team Sales` |
| **ស្តុកទំនិញ (Inventory)** | 🟡 មួយផ្នែក | មាន `Stock In QTY` ក្នុង Master data និងតម្លៃក្នុង Product List ប៉ុន្តែមិនទាន់ឃើញ Tab ចលនាស្តុកដាច់ដោយឡែក (Stock Balance) |
| **ការបញ្ជាទិញ (Orders)** | 🟢 គ្រប់គ្រាន់ពេញលេញ | `Master data`, `Personal Sales` (តាមដាន Status) |
| **ចំណូល/ចំណាយ (Income/Expense)**| 🟢 គ្រប់គ្រាន់ពេញលេញ | `Daily Expenses`, `Master data`, `Dashboard` |
| **វិក្កយបត្រ (Invoices)** | 🟡 មួយផ្នែក | មាន `Order ID`, `FB Customer`, `Receiver No`, `Status` (បានទូទាត់) |
| **ចំណេញ/ខាត (Profit/Loss)** | 🟢 គ្រប់គ្រាន់ពេញលេញ | `Dashboard`, `Daily Expenses`, `Master data` |
| **ការដឹកជញ្ជូន (Delivery)** | 🟢 គ្រប់គ្រាន់ពេញលេញ | `Master data` (មាន Location, Shipping Method, Shipping Cost, Status) |
| **បុគ្គលិក (Staff)** | 🟡 មួយផ្នែក | មានបញ្ជីឈ្មោះក្នុង `Team` និង `Member` (ពុំទាន់មានតារាងប្រវត្តិរូបពេញលេញ) |
| **របាយការណ៍ (Reports)** | 🟢 គ្រប់គ្រាន់ពេញលេញ | អាចទាញចេញពី `Dashboard` និង `Monthly View` |
| **ការកំណត់ (Settings)** | 🟢 គ្រប់គ្រាន់ | ប្រើ `App_Bank_Balance` (អត្រាប្តូរប្រាក់ 4,100 ៛) និងការកំណត់ក្នុង App |

---

## ៨. សំណួរដែលត្រូវការការបញ្ជាក់បន្ថែមពីលោកអ្នក (Questions for Clarification)

1. **ការកំណត់អត្តសញ្ញាណសមាជិក (Member):**
   - នៅក្នុង `Master data` ប្រតិបត្តិការមួយចំនួនមានតែឈ្មោះ `Team: Customer 2` ឬ `Customer 3` ប៉ុន្តែមិនមានឈ្មោះ `Member` ឡើយ។ តើពេលមើលក្នុង Tab «សមាជិក» យើងគួរចាត់ទុកប្រតិបត្តិការដែលគ្មានឈ្មោះ Member នោះថាជា "ទូទៅក្នុងក្រុម" ឬយ៉ាងណា?
2. **ប្រភពសម្រាប់ Personal Sales ធៀបនឹង Master Data:**
   - ក្នុង Sheet មានទាំង Tab `Master data` (134 ជួរ) និង `Personal Sales` (999 ជួរ)។ តើ `Personal Sales` នេះជាការលក់រាយដាច់ដោយឡែក ឬមួយក៏ត្រូវច្របាច់បញ្ចូលគ្នាជាមួយ `Master data` ដែរ?
3. **ស្តុកទំនិញ (Inventory):**
   - តើមាន Sheet ស្តុកទំនិញផ្សេងទៀតសម្រាប់រាប់ចំនួនផលិតផលនៅសល់ក្នុងឃ្លាំង ឬយើងត្រូវគណនា `Stock In QTY - Sale QTY` ពីក្នុង `Master data`?

---

## ៩. សំណើវិធីសាស្រ្តតភ្ជាប់ទិន្នន័យសម្រាប់ដំណាក់កាលបន្ទាប់ (Stage 3 Integration Strategy)

ដោយសារ Google Sheet នេះអាចទាញយកបានតាម Export URL (`gid` CSV/JSON) ដោយផ្ទាល់ និងមានសុវត្ថិភាពខ្ពស់ យើងអាចអនុវត្តតាម **២ ដំណាក់កាលបន្ត**៖
1. **Live Data Fetcher (Client-side / Service Layer):**
   - បង្កើត `sheetService.js` ក្នុងគម្រោង ដែលទាញទិន្នន័យផ្ទាល់ពី Google Sheet CSV តាម `gid` នីមួយៗ ដោយមាន Caching (រយៈពេល 5 នាទី) និងប៊ូតុង **«ទាញទិន្នន័យឡើងវិញ (Sync Now)»**។
2. **Data Pipeline & Transformer:**
   - បំប្លែងជួរដេកតាមក្បាល Header ដែលបានកំណត់ខាងលើ ទៅជា Clean Objects សម្រាប់ផ្គត់ផ្គង់ដល់ Dashboard, ការលក់ និងការប្រៀបធៀបដោយស្វ័យប្រវត្តិ។
