# របៀប Deploy «SD Data» លើ Vercel ដោយឥតគិតថ្លៃ ១០០% (Vercel Free Deployment)

**Vercel** គឺជាជម្រើសដ៏ល្អបំផុត និងលឿនបំផុតសម្រាប់ Host Web App នេះ ដោយឥតគិតថ្លៃ មាន **HTTPS Domain ស្វ័យប្រវត្តិ** និងដំណើរការ ២៤/៧ លើ Global Edge Network។

---

### ១. អ្វីដែលខ្ញុំបានរៀបចំរួចជាស្រេចក្នុងគម្រោង (Vercel Ready)

1. [vercel.json](file:///Users/chesda/Desktop/SD%20Dashboard/vercel.json) — កំណត់ Route និង Serverless Functions ស្វ័យប្រវត្តិ។
2. [api/data.py](file:///Users/chesda/Desktop/SD%20Dashboard/api/data.py) — Vercel Python Serverless Function សម្រាប់ទាញ Google Sheet និងផ្ទៀងផ្ទាត់ Authentication ដោយសុវត្ថិភាព។
3. [dataService.js](file:///Users/chesda/Desktop/SD%20Dashboard/dataService.js) — គាំទ្រការផ្ញើ Header Authentication ទៅកាន់ API លើ Vercel។

---

### ២. ជំហាន Deploy លើ Vercel (ចំណាយពេលត្រឹមតែ ២ នាទី)

#### ជំហានទី ១៖ បង្កើត GitHub Repository
1. ចូលទៅកាន់ [github.com](https://github.com) រួចចុចបង្កើត **New Repository** (ដាក់ឈ្មោះថា `sd-dashboard`)។
2. នៅក្នុង Terminal ឬកុំព្យូទ័ររបស់អ្នក Push កូដឡើងទៅ GitHub៖
   ```bash
   cd "/Users/chesda/Desktop/SD Dashboard"
   git init
   git add .
   git commit -m "Deploy SD Data to Vercel"
   git branch -M main
   git remote add origin <URL_REPOSITORY_របស់លោកអ្នក>
   git push -u origin main
   ```

#### ជំហានទី ២៖ Import ចូលទៅ Vercel (ឥតគិតថ្លៃ)
1. ចូលទៅកាន់គេហទំព័រ **[vercel.com](https://vercel.com)** ហើយ **Sign Up / Log In** ដោយជ្រើសរើស **«Continue with GitHub»**។
2. នៅលើ Vercel Dashboard សូមចុចប៊ូតុង **«Add New...»** -> ជ្រើសរើស **«Project»**។
3. លោកអ្នកនឹងឃើញ Repository `sd-dashboard` ដែលទើបតែ Push -> សូមចុចប៊ូតុង **«Import»**។
4. នៅត្រង់ផ្នែក **Environment Variables** (ខាងក្រោម Build Settings) សូមចុចបន្ថែម ៣ ជួរនេះ៖
   - `DASHBOARD_USER` = `admin` *(ឬឈ្មោះដែលអ្នកចង់បាន)*
   - `DASHBOARD_PASSWORD` = `sd2026` *(ឬលេខសម្ងាត់ផ្ទាល់ខ្លួន)*
   - `REQUIRE_AUTH` = `true`
5. ចុចប៊ូតុង **«Deploy»**!

---

### ៣. លទ្ធផលទទួលបាន

* រង់ចាំប្រហែល ៣០ វិនាទី នោះ Vercel នឹងផ្ដល់ **HTTPS Link ផ្លូវការ** ជូនភ្លាម ឧទាហរណ៍៖
  👉 **`https://sd-dashboard.vercel.app`**
* លោកអ្នកអាចយក Link នេះទៅបើកលើទូរស័ព្ទដៃ iPhone, Android ឬកុំព្យូទ័រណាផ្សេងទៀតបានភ្លាមៗ ដោយមិនបាច់បើកកុំព្យូទ័រ Mac របស់អ្នកចោលទៀតឡើយ!
* ពេលបើកដំបូង ប្រព័ន្ធនឹងទាមទារ User: `admin` និង Password: `sd2026` ដើម្បីការពារទិន្នន័យអាជីវកម្ម។
