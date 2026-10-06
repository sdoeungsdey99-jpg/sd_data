import os
import json
import urllib.request
import csv
import io
import base64
from datetime import datetime
from http.server import BaseHTTPRequestHandler

SHEET_ID = os.environ.get("GOOGLE_SHEET_ID", "1Qu70irzkvKyYN49eoquTModvm33WT5ZEyTTjUFoEbWU")
AUTH_USER = os.environ.get("DASHBOARD_USER", "admin")
AUTH_PASS = os.environ.get("DASHBOARD_PASSWORD", "sd2026")
REQUIRE_AUTH = os.environ.get("REQUIRE_AUTH", "true").lower() in ["true", "1", "yes"]

def clean_number(val):
    if not val:
        return 0.0
    val = str(val).replace("$", "").replace(",", "").strip()
    try:
        return float(val)
    except:
        return 0.0

def fetch_csv(gid):
    url = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid={gid}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=15) as resp:
        content = resp.read().decode("utf-8", errors="replace")
        return list(csv.reader(io.StringIO(content)))

def parse_month_name(mo_str):
    if not mo_str:
        return ""
    m = mo_str.strip().lower()
    mapping = {
        "jan": "01", "មករា": "01", "1": "01", "01": "01",
        "feb": "02", "កុម្ភៈ": "02", "2": "02", "02": "02",
        "mar": "03", "មីនា": "03", "3": "03", "03": "03",
        "apr": "04", "មេសា": "04", "4": "04", "04": "04",
        "may": "05", "ឧសភា": "05", "5": "05", "05": "05",
        "jun": "06", "មិថុនា": "06", "6": "06", "06": "06",
        "jul": "07", "កក្កដា": "07", "7": "07", "07": "07",
        "aug": "08", "សីហា": "08", "8": "08", "08": "08",
        "sep": "09", "កញ្ញា": "09", "9": "09", "09": "09",
        "oct": "10", "តុលា": "10", "10": "10",
        "nov": "11", "វិច្ឆិកា": "11", "11": "11",
        "dec": "12", "ធ្នូ": "12", "12": "12"
    }
    for k, v in mapping.items():
        if k in m:
            return v
    return ""

def load_data():
    master_rows = fetch_csv("0")
    if len(master_rows) < 2:
        raise ValueError("Master data row count is insufficient")

    master_headers = [h.strip() for h in master_rows[1]]
    m_hmap = {h: idx for idx, h in enumerate(master_headers)}

    sales = []
    for r in master_rows[3:]:
        if not any(r):
            continue
        d_val = r[m_hmap.get("Date", 0)].strip()
        mo_val = r[m_hmap.get("Month", 1)].strip()
        yr_val = r[m_hmap.get("Year", 2)].strip()
        if not d_val or not mo_val or not yr_val:
            continue

        mo_num = parse_month_name(mo_val)
        if not mo_num:
            continue

        try:
            d_int = int(float(d_val))
            yr_int = int(float(yr_val))
            iso_date = f"{yr_int:04d}-{mo_num}-{d_int:02d}"
        except:
            continue

        status = r[m_hmap["Status"]].strip() if "Status" in m_hmap and len(r) > m_hmap["Status"] else ""
        if status == "សុំ Canceled":
            continue

        qty = clean_number(r[m_hmap["Sale QTY"]]) if "Sale QTY" in m_hmap else 0.0
        revenue = clean_number(r[m_hmap["Total Cost"]]) if "Total Cost" in m_hmap else 0.0
        com_cost = clean_number(r[m_hmap["Total Com.Cost"]]) if "Total Com.Cost" in m_hmap else 0.0
        gross_profit = clean_number(r[m_hmap["Gross Profit"]]) if "Gross Profit" in m_hmap else 0.0
        team = r[m_hmap["Team"]].strip() if "Team" in m_hmap else "ទូទៅ"
        member = r[m_hmap["Member"]].strip() if "Member" in m_hmap and len(r) > m_hmap["Member"] else ""
        product = r[m_hmap["Product Name"]].strip() if "Product Name" in m_hmap else "មិនបានបញ្ជាក់"
        location = r[m_hmap["Location"]].strip() if "Location" in m_hmap and len(r) > m_hmap["Location"] else ""
        ship_method = r[m_hmap["Shipping Method"]].strip() if "Shipping Method" in m_hmap and len(r) > m_hmap["Shipping Method"] else ""
        ship_cost = clean_number(r[m_hmap["Shipping Cost"]]) if "Shipping Cost" in m_hmap and len(r) > m_hmap["Shipping Cost"] else 0.0

        sales.append({
            "date": iso_date,
            "year": yr_int,
            "month": mo_num,
            "day": d_int,
            "team": team or "ទូទៅ",
            "member": member or (team or "ទូទៅ"),
            "product": product or "មិនបានបញ្ជាក់",
            "qty": qty,
            "revenue": revenue,
            "cogs": com_cost,
            "grossProfit": gross_profit,
            "shippingCost": ship_cost,
            "shippingMethod": ship_method,
            "location": location,
            "status": status
        })

    exp_rows = fetch_csv("1413782774")
    exp_headers = [h.strip() for h in exp_rows[0]]
    e_hmap = {h: idx for idx, h in enumerate(exp_headers)}

    expenses = []
    for r in exp_rows[1:]:
        if not any(r):
            continue
        date_raw = r[e_hmap.get("Date", 0)].strip()
        parts = date_raw.split("/")
        if len(parts) == 3:
            try:
                d_int = int(parts[0])
                m_int = int(parts[1])
                y_int = int(parts[2])
                iso_date = f"{y_int:04d}-{m_int:02d}-{d_int:02d}"
            except:
                continue
        else:
            continue

        desc = r[e_hmap["Description"]].strip() if "Description" in e_hmap else ""
        cat = r[e_hmap["Category"]].strip() if "Category" in e_hmap else "ផ្សេងៗ"
        amt = clean_number(r[e_hmap["Amount ($)"]]) if "Amount ($)" in e_hmap else 0.0

        expenses.append({
            "date": iso_date,
            "year": y_int,
            "month": f"{m_int:02d}",
            "day": d_int,
            "description": desc,
            "category": cat or "ផ្សេងៗ",
            "amount": amt
        })

    return {
        "status": "success",
        "spreadsheetId": SHEET_ID,
        "fetchedAt": datetime.now().isoformat(),
        "totalSalesRecords": len(sales),
        "totalExpenseRecords": len(expenses),
        "sales": sales,
        "expenses": expenses
    }

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        # 1. Authentication Check
        if REQUIRE_AUTH:
            auth_header = self.headers.get("Authorization")
            authenticated = False
            if auth_header and auth_header.startswith("Basic "):
                try:
                    encoded = auth_header.split(" ", 1)[1]
                    decoded = base64.b64decode(encoded).decode("utf-8")
                    user, pwd = decoded.split(":", 1)
                    if user == AUTH_USER and pwd == AUTH_PASS:
                        authenticated = True
                except Exception:
                    pass

            if not authenticated:
                self.send_response(401)
                self.send_header("WWW-Authenticate", 'Basic realm="SD Data Secure ERP"')
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.end_headers()
                self.wfile.write("<h3>401 Unauthorized: សូមបញ្ចូលឈ្មោះ និងលេខសម្ងាត់</h3>".encode("utf-8"))
                return

        # 2. Fetch and return data
        try:
            data = load_data()
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(data, ensure_ascii=False).encode("utf-8"))
        except Exception as e:
            self.send_response(500)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            err_resp = {"status": "error", "message": str(e)}
            self.wfile.write(json.dumps(err_resp, ensure_ascii=False).encode("utf-8"))
