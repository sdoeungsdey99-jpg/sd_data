#!/usr/bin/env python3
"""
SD Data - Backend Server (Stage 3)
Serves static frontend files and provides /api/data endpoint to fetch and parse Google Sheets.
Runs on localhost:3000 without exposing any tokens or credentials to the browser.
"""

import http.server
import socketserver
import urllib.request
import csv
import io
import json
import os
import re
from datetime import datetime

# Environment variables with sensible defaults
PORT = int(os.environ.get("PORT", 3000))
SHEET_ID = os.environ.get("GOOGLE_SHEET_ID", "1Qu70irzkvKyYN49eoquTModvm33WT5ZEyTTjUFoEbWU")
AUTH_USER = os.environ.get("DASHBOARD_USER", "admin")
AUTH_PASS = os.environ.get("DASHBOARD_PASSWORD", "sd2026")
REQUIRE_AUTH = os.environ.get("REQUIRE_AUTH", "true").lower() in ["true", "1", "yes"]

CACHE = {
    "timestamp": None,
    "data": None
}
CACHE_TTL_SECONDS = int(os.environ.get("CACHE_TTL", 10))

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

def load_all_sheet_data(force_refresh=False):
    global CACHE
    now = datetime.now().timestamp()
    if not force_refresh and CACHE["data"] and CACHE["timestamp"] and (now - CACHE["timestamp"] < CACHE_TTL_SECONDS):
        return CACHE["data"]

    # 1. Fetch Master data (gid=0)
    master_rows = fetch_csv("0")
    if len(master_rows) < 2:
        raise ValueError("Master data row count is insufficient")

    master_headers = [h.strip() for h in master_rows[1]]
    m_hmap = {h: idx for idx, h in enumerate(master_headers)}

    # Ensure required headers exist
    required_master = ["Date", "Month", "Year", "Product Name", "Team", "Sale QTY", "Total Cost", "Total Com.Cost", "Gross Profit"]
    for req in required_master:
        if req not in m_hmap:
            raise KeyError(f"Missing required header '{req}' in Master data")

    sales = []
    for r in master_rows[3:]:
        if not any(r):
            continue
        d_val = r[m_hmap["Date"]].strip()
        mo_val = r[m_hmap["Month"]].strip()
        yr_val = r[m_hmap["Year"]].strip()
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

        qty = clean_number(r[m_hmap["Sale QTY"]])
        revenue = clean_number(r[m_hmap["Total Cost"]]) # In sheet, Total Cost is Sale Revenue
        com_cost = clean_number(r[m_hmap["Total Com.Cost"]]) # Company Cost (COGS)
        gross_profit = clean_number(r[m_hmap["Gross Profit"]])
        team = r[m_hmap["Team"]].strip()
        member = r[m_hmap["Member"]].strip() if "Member" in m_hmap and len(r) > m_hmap["Member"] else ""
        product = r[m_hmap["Product Name"]].strip()
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

    # 2. Fetch Daily Expenses (gid=1413782774)
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

    # 3. Fetch Dashboard Tab (gid=1458756437) for official monthly benchmarks
    dash_rows = fetch_csv("1458756437")
    benchmarks = []
    if len(dash_rows) > 5:
        d_hdr = [h.strip() for h in dash_rows[4]]
        for r in dash_rows[5:]:
            if any(r) and len(r) > 1 and r[1].strip():
                benchmarks.append({
                    "month": r[1].strip(),
                    "orders": clean_number(r[2]) if len(r) > 2 else 0,
                    "revenue": clean_number(r[3]) if len(r) > 3 else 0,
                    "cogs": clean_number(r[4]) if len(r) > 4 else 0,
                    "shipping": clean_number(r[5]) if len(r) > 5 else 0,
                    "boost": clean_number(r[6]) if len(r) > 6 else 0,
                    "profit": clean_number(r[7]) if len(r) > 7 else 0,
                    "dividend": clean_number(r[8]) if len(r) > 8 else 0,
                    "netProfit": clean_number(r[9]) if len(r) > 9 else 0,
                    "expenses": clean_number(r[11]) if len(r) > 11 else 0
                })

    result = {
        "status": "success",
        "spreadsheetId": SHEET_ID,
        "fetchedAt": datetime.now().isoformat(),
        "totalSalesRecords": len(sales),
        "totalExpenseRecords": len(expenses),
        "sales": sales,
        "expenses": expenses,
        "benchmarks": benchmarks
    }

    CACHE["timestamp"] = now
    CACHE["data"] = result
    return result

import base64

class AppRequestHandler(http.server.SimpleHTTPRequestHandler):
    def check_authenticated(self):
        if not REQUIRE_AUTH:
            return True
        auth_header = self.headers.get("Authorization")
        if not auth_header or not auth_header.startswith("Basic "):
            return False
        try:
            encoded_credentials = auth_header.split(" ", 1)[1]
            decoded_credentials = base64.b64decode(encoded_credentials).decode("utf-8")
            username, password = decoded_credentials.split(":", 1)
            return (username == AUTH_USER and password == AUTH_PASS)
        except Exception:
            return False

    def send_auth_challenge(self):
        self.send_response(401)
        self.send_header("WWW-Authenticate", 'Basic realm="SD Data Secure ERP"')
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.end_headers()
        self.wfile.write("<h3>401 Unauthorized: សូមបញ្ចូលឈ្មោះ និងពាក្យសម្ងាត់ដើម្បីចូលប្រើប្រាស់ SD Data</h3>".encode("utf-8"))

    def do_GET(self):
        if not self.check_authenticated():
            self.send_auth_challenge()
            return

        if self.path.startswith("/api/data"):
            force = "refresh=true" in self.path
            try:
                data = load_all_sheet_data(force_refresh=force)
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
            return

        # Serve static files from workspace root
        return super().do_GET()

if __name__ == "__main__":
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), AppRequestHandler) as httpd:
        print(f"SD Data Server running at http://localhost:{PORT}")
        print(f"Auth enabled: {REQUIRE_AUTH} (User: {AUTH_USER})")
        httpd.serve_forever()
