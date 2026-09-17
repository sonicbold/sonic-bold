/**
 * Canonicalize production URLs to https://www.sonicbold.com + extensionless paths.
 *
 * Cloudflare Pages `_redirects` cannot match on hostname (domain-level
 * redirects are unsupported). This middleware covers:
 *   - http → https
 *   - sonicbold.com → www.sonicbold.com
 *   - /index.html → /
 *   - /*.html → /:path (301, replacing Pages' default 307 pretty-URL redirect)
 *   - trailing slash → no trailing slash (except `/`)
 *
 * Preview hosts (*.pages.dev) keep their hostname so deploy previews still work.
 * Zone-level Redirect Rules + Always Use HTTPS are still recommended so host
 * canonicalization happens before the request reaches Pages.
 */

const CANONICAL_HOST = "www.sonicbold.com";
const PRODUCTION_HOSTS = new Set(["sonicbold.com", "www.sonicbold.com"]);

function canonicalizePath(pathname) {
  if (pathname === "/index.html" || pathname === "/index") {
    return "/";
  }

  if (pathname.endsWith("/index.html")) {
    const parent = pathname.slice(0, -"/index.html".length);
    return parent === "" ? "/" : parent;
  }

  if (pathname.endsWith(".html")) {
    return pathname.slice(0, -".html".length);
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

export async function onRequest(context) {
  const { request } = context;
  const method = request.method;

  if (method !== "GET" && method !== "HEAD") {
    return context.next();
  }

  const url = new URL(request.url);
  const originalHref = url.href;
  const isProduction = PRODUCTION_HOSTS.has(url.hostname);

  if (isProduction) {
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
  }

  url.pathname = canonicalizePath(url.pathname);

  if (url.href !== originalHref) {
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
