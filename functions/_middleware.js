export async function onRequest({ request, next }) {
  // 1. Block China Mainland
  const country = request.cf?.country;
  if (country === 'CN') {
    return new Response('Access Denied. Traffic from your region is blocked.', { status: 403 });
  }

  // 2. Proceed to next to get the response
  const response = await next();

  // 3. Generate Nonce for CSP
  const nonce = crypto.randomUUID().replace(/-/g, '').slice(0, 16);
  
  // Create a new response to modify headers and body
  const newResponse = new Response(response.body, response);

  // Set CSP Header
  newResponse.headers.set('Content-Security-Policy', `default-src 'self'; script-src 'self' 'nonce-${nonce}' 'unsafe-inline' https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; media-src 'self' https: blob:; connect-src 'self' https: wss:; object-src 'none'; frame-ancestors 'none'; base-uri 'self';`);
  newResponse.headers.set('X-Content-Type-Options', 'nosniff');
  newResponse.headers.set('X-Frame-Options', 'DENY');
  newResponse.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // 4. Inject Nonce using HTMLRewriter (only for HTML responses)
  const contentType = newResponse.headers.get('Content-Type') || '';
  if (contentType.includes('text/html')) {
    return new HTMLRewriter()
      .on('script', {
        element(el) {
          el.setAttribute('nonce', nonce);
        }
      })
      .transform(newResponse);
  }

  return newResponse;
}
