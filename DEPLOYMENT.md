# SD Data — ERP Dashboard Deployment Guide

ឯកសារនេះណែនាំពីរបៀបដាក់ពង្រាយ (Deploy) Web App **SD Data** ឡើងទៅកាន់ Cloud Hosting ដើម្បីទទួលបាន **HTTPS Link** ដែលដំណើរការ ២៤/៧ មិនពឹងលើកុំព្យូទ័រលោកអ្នក និងមានប្រព័ន្ធការពារសុវត្ថិភាពទិន្នន័យ (Authentication) ពេញលេញ។

---

## ១. ស្ថាបត្យកម្មគម្រោង និងសុវត្ថិភាព (Architecture & Security)

- **Frontend:** HTML5, Tailwind CSS, Lucide Icons, Vanilla JavaScript
- **Backend/API:** Python 3 HTTP Server (`server.py`) ផ្ដល់ `/api/data`
- **ការការពារទិន្នន័យអាជីវកម្ម (Business Data Security):**
  - មានប្រព័ន្ធការពារ **HTTP Basic Authentication** ទាំងលើ Web UI និង API Endpoint (មិនអនុញ្ញាតឱ្យអ្នកក្រៅចូលមើល ឬទាញ API ដោយគ្មានគណនីឡើយ)។
  - Google Sheet ID និងគណនីចូល ត្រូវបានកំណត់តាម **Environment Variables**។
  - គ្មានការដាក់ Token ឬ Password នៅខាង Browser ឡើយ។

---

## ២. ជម្រើស Hosting ឥតគិតថ្លៃ និងសមស្របបំផុត (Recommended Free Hosting)

### ជម្រើសទី ១ (ណែនាំបំផុត)៖ **Render.com** (ឥតគិតថ្លៃ ១០០%)
- **ប្រភេទ Service:** Web Service (Python)
- **លក្ខណៈពិសេស:** ផ្ដល់ Free HTTPS Domain (ឧ. `https://sd-data-erp.onrender.com`), ដំណើរការ Python 24/7, មិនបាច់បើកកុំព្យូទ័រចោល។

### ជំហាន Deploy លើ Render (ងាយស្រួលបំផុត):
1. បង្កើត Repository មួយលើ **GitHub** របស់អ្នក (Private ឬ Public)។
2. Push កូដក្នុង Folder `SD Dashboard/` នេះទៅកាន់ GitHub៖
   ```bash
   git init
   git add .
   git commit -m "Deploy SD Data ERP Dashboard"
   git branch -M main
   git remote add origin <តំណភ្ជាប់_GITHUB_REPO_របស់លោកអ្នក>
   git push -u origin main
   ```
3. ចូលទៅកាន់ [Render.com](https://render.com) (ចុះឈ្មោះដោយប្រើ GitHub ដោយឥតគិតថ្លៃ)។
4. ចុច **New +** -> ជ្រើសរើស **Web Service** -> ភ្ជាប់ជាមួយ GitHub Repo ខាងលើ។
5. កំណត់ Settings:
   - **Name:** `sd-data-dashboard`
   - **Environment:** `Python 3`
   - **Build Command:** *(ទុកទំនេរ ឬ `pip install --upgrade pip`)*
   - **Start Command:** `python3 server.py`
6. បញ្ចូល **Environment Variables** (សម្ងាត់):
   - `DASHBOARD_USER` = `admin` *(ឬឈ្មោះដែលអ្នកចង់ដាក់)*
   - `DASHBOARD_PASSWORD` = `sd2026` *(ឬលេខសម្ងាត់ផ្ទាល់ខ្លួន)*
   - `REQUIRE_AUTH` = `true`
   - `GOOGLE_SHEET_ID` = `1Qu70irzkvKyYN49eoquTModvm33WT5ZEyTTjUFoEbWU`
7. ចុច **Create Web Service** -> រង់ចាំ ១ នាទី នោះ Render នឹងផ្ដល់ **HTTPS Link** ផ្លូវការភ្លាម!

---

## ៣. ព័ត៌មានគណនីលំនាំដើម (Default Credentials)

- **Username:** `admin`
- **Password:** `sd2026`

*(ពេលបើកមើលលើទូរស័ព្ទ ឬកុំព្យូទ័រដំបូង Browser នឹងលោតផ្ទាំងទាមទារ User & Password នេះ ដើម្បីការពារទិន្នន័យអាជីវកម្ម)*
