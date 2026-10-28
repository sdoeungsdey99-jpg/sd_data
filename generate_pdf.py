import os, re, subprocess

BASE_DIR = "/Users/chesda/Desktop/SD Dashboard"
SOURCE_HTML = os.path.join(BASE_DIR, "slides.html")
OUTPUT_HTML = os.path.join(BASE_DIR, "slides_printable.html")
OUTPUT_PDF = "/Users/chesda/Desktop/Bostar_App_Benefits_Presentation.pdf"

with open(SOURCE_HTML, 'r', encoding='utf-8') as f:
    text = f.read()

start = text.find('const slidesData = [')
end = text.find('];\n\n    let currentSlide = 0;', start)
raw_slides = text[start:end]

blocks = re.findall(
    r'\{\s*id:\s*[\'\"](?P<id>.*?)[\'\"],[\s\S]*?'
    r'badge:\s*[\'\"](?P<badge>.*?)[\'\"],[\s\S]*?'
    r'badgeColor:\s*[\'\"](?P<badgeColor>.*?)[\'\"],[\s\S]*?'
    r'title:\s*[\'\"](?P<title>.*?)[\'\"],[\s\S]*?'
    r'subtitle:\s*[\'\"](?P<subtitle>.*?)[\'\"],[\s\S]*?'
    r'img:\s*[\'\"](?P<img>.*?)[\'\"],[\s\S]*?'
    r'points:\s*\[(?P<points>[\s\S]*?)\]\s*,[\s\S]*?'
    r'formula:\s*[\'\"](?P<formula>.*?)[\'\"]\s*\}',
    raw_slides
)

def clean_text(s):
    s = s.replace(r'\$', '$')
    s = s.replace(r'\rightarrow', '➔')
    s = s.replace(r'\ge', '≥')
    s = re.sub(r'\*\*(.*?)\*\*', r'<strong class="text-white font-semibold">\1</strong>', s)
    return s

def clean_formula(s):
    s = s.replace(r'\$', '$')
    s = s.replace(r'\rightarrow', '➔')
    s = s.replace(r'\ge', '≥')
    return s

slides = []
for b in blocks:
    id_val, badge, color, title, subtitle, img_path, points_raw, formula = b
    pts = re.findall(r'[\'\"](.*?)[\'\"]\s*,?', points_raw)
    slides.append({
        'id': id_val,
        'badge': badge,
        'badgeColor': color,
        'title': title,
        'subtitle': subtitle,
        'img': img_path,
        'points': [clean_text(p) for p in pts],
        'formula': clean_formula(formula)
    })

total_slides = len(slides)

slides_html = ""
for idx, s in enumerate(slides, 1):
    slide_num = f"{idx:02d}"
    tot_num = f"{total_slides:02d}"
    
    abs_img = "file://" + os.path.join(BASE_DIR, s['img'])
    bostar_logo = "file://" + os.path.join(BASE_DIR, "bostar-logo.png")
    
    pts_markup = ""
    for pt in s['points']:
        pts_markup += f"""
        <div class="flex items-start gap-3.5 text-[17px] text-slate-300 leading-relaxed">
          <div class="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center shrink-0 mt-0.5">
            <svg class="w-4 h-4 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div>{pt}</div>
        </div>
        """
        
    slides_html += f"""
    <!-- SLIDE {slide_num} -->
    <section class="slide-page" id="slide-{slide_num}">
      <!-- Ambient Glows -->
      <div class="glow-orb glow-top"></div>
      <div class="glow-orb glow-bottom"></div>

      <!-- TOP HEADER -->
      <header class="slide-header">
        <div class="flex items-center gap-3.5">
          <div class="w-11 h-11 rounded-xl bg-amber-500/15 border border-orange-500/30 flex items-center justify-center p-2 shadow-lg shadow-orange-500/10">
            <img src="{bostar_logo}" alt="Bostar" class="w-full h-full object-contain">
          </div>
          <div>
            <div class="flex items-center gap-2.5">
              <span class="text-lg font-extrabold text-white tracking-tight">SD Data ERP — Bostar Group</span>
              <span class="px-2.5 py-0.5 text-xs font-bold bg-orange-500/20 text-orange-400 border border-orange-500/35 rounded-full font-mono">LIVE APP DATA</span>
            </div>
            <p class="text-xs text-slate-400">យុទ្ធនាការ Promotion ខែ ១១-១២ • គោលដៅ ៣,០០០+ ប្រអប់</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <span class="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300">
            ស្លាយទី <span class="text-orange-400 font-bold">{slide_num}</span> / {tot_num}
          </span>
        </div>
      </header>

      <!-- SLIDE BODY (2 COLS) -->
      <main class="slide-body">
        
        <!-- LEFT: iPhone Frame Mockup -->
        <div class="phone-column">
          <div class="iphone-frame">
            <!-- Dynamic Island -->
            <div class="dynamic-island">
              <span class="lens"></span>
              <span class="indicator"></span>
            </div>
            <!-- Screenshot -->
            <img src="{abs_img}" alt="{s['title']}" class="iphone-screen">
          </div>
        </div>

        <!-- RIGHT: Content Column -->
        <div class="content-column">
          <!-- Badge -->
          <div class="flex items-center gap-2.5 mb-2">
            <span class="px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/40">
              {s['badge']}
            </span>
            <span class="text-xs text-slate-500 font-mono tracking-wider font-semibold">SLIDE {slide_num}</span>
          </div>

          <!-- Title & Subtitle -->
          <div class="mb-5">
            <h1 class="text-[32px] font-extrabold text-white leading-tight tracking-tight">
              {s['title']}
            </h1>
            <p class="text-[17px] text-slate-300 font-medium mt-1.5 leading-snug">
              {s['subtitle']}
            </p>
          </div>

          <!-- 4 Bullet Points Card -->
          <div class="glass-card mb-5 space-y-3.5">
            {pts_markup}
          </div>

          <!-- Formula / Strategic Highlight -->
          <div class="formula-box">
            {s['formula']}
          </div>
        </div>

      </main>

      <!-- SLIDE FOOTER -->
      <footer class="slide-footer">
        <div class="text-xs text-slate-400 font-medium flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-orange-500"></span>
          <span>Bostar Group Co., Ltd. • ប្រព័ន្ធគ្រប់គ្រងទិន្នន័យការលក់ & ប្រតិបត្តិការផ្ទៃក្នុង SD Data ERP</span>
        </div>
        <div class="text-xs font-mono font-bold text-slate-400">
          ទំព័រទី {slide_num} នៃ {tot_num}
        </div>
      </footer>
    </section>
    """

full_html = f"""<!DOCTYPE html>
<html lang="km" class="dark">
<head>
  <meta charset="UTF-8">
  <title>Bostar Group — SD Data ERP Visual Presentation Deck</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Kantumruy+Pro:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * {{
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }}
    @page {{
      size: 1920px 1080px;
      margin: 0;
    }}
    html, body {{
      margin: 0;
      padding: 0;
      background-color: #060B14;
      color: #F1F5F9;
      font-family: 'Kantumruy Pro', 'Khmer Sangam MN', 'Khmer MN', sans-serif;
    }}
    .slide-page {{
      width: 1920px;
      height: 1080px;
      max-height: 1080px;
      background-color: #060B14;
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 32px 56px 28px 56px;
      page-break-after: always;
      break-after: page;
      margin: 0 auto;
    }}
    @media screen {{
      body {{
        padding: 40px 0;
        background-color: #030712;
      }}
      .slide-page {{
        margin-bottom: 40px;
        box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.08);
        border-radius: 20px;
      }}
    }}
    @media print {{
      body {{
        padding: 0 !important;
        background-color: #060B14 !important;
      }}
      .slide-page {{
        margin-bottom: 0 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }}
      .print-floating-bar {{
        display: none !important;
      }}
    }}
    .glow-orb {{
      position: absolute;
      width: 600px;
      height: 600px;
      border-radius: 9999px;
      pointer-events: none;
      z-index: 1;
    }}
    .glow-top {{
      top: -150px;
      left: -150px;
      background: radial-gradient(circle, rgba(249, 115, 22, 0.16) 0%, transparent 70%);
    }}
    .glow-bottom {{
      bottom: -150px;
      right: -150px;
      background: radial-gradient(circle, rgba(14, 165, 233, 0.14) 0%, transparent 70%);
    }}
    .slide-header {{
      position: relative;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      height: 72px;
      flex-shrink: 0;
    }}
    .slide-body {{
      position: relative;
      z-index: 10;
      display: flex;
      align-items: center;
      gap: 56px;
      flex: 1;
      padding: 20px 0;
    }}
    .phone-column {{
      width: 440px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }}
    .iphone-frame {{
      width: 380px;
      height: 770px;
      border-radius: 46px;
      border: 8px solid #1E293B;
      box-shadow: 0 0 0 2px #0F172A, 0 25px 60px -15px rgba(0, 0, 0, 0.95), 0 0 40px rgba(249, 115, 22, 0.18);
      position: relative;
      background: #000;
      overflow: hidden;
      flex-shrink: 0;
    }}
    .dynamic-island {{
      width: 96px;
      height: 24px;
      background: #000;
      border-radius: 20px;
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      z-index: 40;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
    }}
    .dynamic-island .lens {{
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: #0f172a;
      border: 1px solid rgba(148, 163, 184, 0.4);
    }}
    .dynamic-island .indicator {{
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #10B981;
    }}
    .iphone-screen {{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
      display: block;
    }}
    .content-column {{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }}
    .glass-card {{
      background: linear-gradient(135deg, rgba(15, 27, 46, 0.88) 0%, rgba(10, 20, 36, 0.96) 100%);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 24px;
      padding: 26px 30px;
      box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.6);
    }}
    .formula-box {{
      padding: 18px 24px;
      border-radius: 16px;
      background: linear-gradient(90deg, rgba(245, 158, 11, 0.15) 0%, rgba(249, 115, 22, 0.1) 60%, transparent 100%);
      border-left: 5px solid #F59E0B;
      color: #FDE68A;
      font-size: 17px;
      font-weight: 600;
      line-height: 1.5;
    }}
    .slide-footer {{
      position: relative;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 14px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      height: 48px;
      flex-shrink: 0;
    }}
  </style>
</head>
<body>

  <!-- Floating Print Control Bar (Visible in Screen mode only) -->
  <div class="print-floating-bar fixed top-5 right-8 z-50 flex items-center gap-3 bg-slate-900/95 backdrop-blur-md border border-white/20 px-5 py-3 rounded-2xl shadow-2xl">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
      <span class="text-xs text-slate-200 font-semibold">មាតិកាទាំងអស់ (១២ ស្លាយ)</span>
    </div>
    <a href="slides.html" class="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 text-xs font-semibold border border-white/10 transition">
      ត្រឡប់ទៅ Interactive Viewer
    </a>
    <button onclick="window.print()" class="px-4 py-1.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-lg shadow-orange-500/30 flex items-center gap-1.5 transition">
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
      <span>Print / ទាញយកជា PDF</span>
    </button>
  </div>

{slides_html}
</body>
</html>
"""

with open(OUTPUT_HTML, 'w', encoding='utf-8') as f:
    f.write(full_html)

print(f"Generated printable HTML: {OUTPUT_HTML}")

# Run Chrome Headless print to PDF
chrome_path = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cmd = [
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--run-all-compositor-stages-before-draw",
    f"--print-to-pdf={OUTPUT_PDF}",
    OUTPUT_HTML
]
print("Running Chrome print-to-pdf...")
res = subprocess.run(cmd, capture_output=True, text=True)
if os.path.isfile(OUTPUT_PDF):
    size_mb = os.path.getsize(OUTPUT_PDF) / (1024 * 1024)
    print(f"SUCCESS: Generated PDF at {OUTPUT_PDF} ({size_mb:.2f} MB)")
else:
    print("FAILED: PDF not generated")
    print(res.stderr)
