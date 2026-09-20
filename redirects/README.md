# Redirects

Canonical host: **https://www.sonicbold.com**
URL pattern: **extensionless** (no `.html`)

## In-repo

- `/_redirects` — path-only `.html` → clean 301s for Cloudflare Pages / Workers. Host-level rules are omitted here because Workers Builds rejects them.
- `cloudflare-bulk-redirects.csv` — import in **Cloudflare → Bulk Redirects / Redirect Rules** for HTTP→HTTPS and apex→www.

## Dashboard (required for P0 host consolidation)

1. SSL/TLS → Full (strict)
2. Always Use HTTPS: On
3. Primary hostname: `www.sonicbold.com`
4. Import `cloudflare-bulk-redirects.csv`
5. After redirects are stable 1–2 weeks, enable HSTS (do not add it in HTML yet)
