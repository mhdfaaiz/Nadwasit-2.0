/**
 * Security headers applied to every Worker response. Import in app/src/server.ts
 * and wrap the final response: `return applySecurityHeaders(response)`.
 */
export function applySecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  // The deployment platform owns `frame-ancestors`; setting it here would add
  // a second, intersecting policy that can block the host preview.
  headers.set(
    "Content-Security-Policy",
    "default-src 'self'; " +
      "script-src 'self' 'unsafe-inline'; " +
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
      "font-src 'self' https://fonts.gstatic.com; " +
      // blob: is required: the scroll journey assigns Blob URLs to <video src>.
      "img-src 'self' data: https:; media-src 'self' blob: https:; " +
      "connect-src 'self' https:; " +
      "frame-src 'self' https://auth.higgsfield.app https://auth.higgsfield-dev.app; " +
      "base-uri 'self'; form-action 'self'",
  );
  headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  headers.set("X-XSS-Protection", "0");

  // The SSR document names the hashed JS bundles, so a stale copy of it loads
  // stale code no matter how fresh those bundles are. Without an explicit
  // directive browsers fall back to heuristic caching, and Safari will happily
  // serve a day-old document, which pins a phone to the previous deploy.
  // `no-cache` still allows storage and 304s, it just forces revalidation.
  // Hashed assets keep their own long-lived caching; this only targets HTML.
  if (response.headers.get("Content-Type")?.includes("text/html")) {
    headers.set("Cache-Control", "no-cache, must-revalidate");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
