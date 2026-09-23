# Redirects (host + HTTPS)

Canonical host: **https://www.sonicbold.com**

## In-repo (drop-in)

- `/_redirects` — path-only `.html` → clean 301s for Cloudflare Pages/Workers, plus `/favicon.ico` → `/favicon.png`.
- Short legal paths: `/privacy` → `/privacy-policy` and `/terms-of-service` → `/terms` (also in `cloudflare-bulk-redirects.csv`).
- Retired paths (`/free-google-ads-audit`, `/audit`, `/plumbing-landing-pages`, `/plumbing-call-tracking`, `/google-business-profile-for-plumbers`, and the booked-job tracking and PPC landing-page posts) 301 to `/free-30-days`, `/google-ads-for-plumbers`, `/`, or `/blog`.
- `redirects/cloudflare-bulk-redirects.csv` — import in the Cloudflare dashboard for **HTTP→HTTPS** and **apex→www**.

> Cloudflare Pages/Workers `_redirects` cannot express host-level rules. Host consolidation **must** be done in the dashboard (or via Bulk Redirects import).

## Cloudflare dashboard steps (required)

1. **SSL/TLS** → encryption mode **Full (strict)**.
2. **SSL/TLS → Edge Certificates** → **Always Use HTTPS**: On.
3. Set primary hostname to **www.sonicbold.com** (Custom Domains / Pages project domains).
4. **Bulk Redirects** (or Redirect Rules): import `cloudflare-bulk-redirects.csv`.
   - Expected outcomes:
     - `http://*` → `https://www.sonicbold.com/...` (301)
     - `https://sonicbold.com/...` → `https://www.sonicbold.com/...` (301)
5. After redirects are stable ~1–2 weeks, enable **HSTS** (Edge Certificates → HSTS). Do not add HSTS only in static HTML.

## Verify after deploy

```bash
curl -sI http://www.sonicbold.com/ | head -5          # expect 301 → https://www...
curl -sI http://sonicbold.com/ | head -5
curl -sI https://sonicbold.com/ | head -5             # expect 301 → https://www...
curl -sI https://www.sonicbold.com/favicon.ico | head -5
```
