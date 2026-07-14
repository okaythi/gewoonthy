export async function onRequest({ request, env, next }) {
  const url = new URL(request.url);
  if (url.hostname.endsWith('gewoonthy.pages.dev')) {
    url.hostname = 'sudothy.me';
    return Response.redirect(url.toString(), 301);
  }

  // 1. Block China Mainland
  const country = request.cf?.country;
  if (country === 'CN') {
    return new Response('Access Denied. Traffic from your region is blocked.', { status: 403 });
  }

  // MOBILE INTERCEPT: Redirect mobile users to /m
  const userAgent = request.headers.get('user-agent') || '';
  const isMobile = /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/i.test(userAgent);
  const normalizedPath = url.pathname.replace(/\/$/, '') || '/';

  if (isMobile && normalizedPath === '/') {
    return Response.redirect(url.origin + '/m' + url.search, 302);
  }

  // MAINTENANCE INTERCEPT: Redirect all non-essential page loads to the root maintenance page
  if (!normalizedPath.startsWith('/api') && !normalizedPath.startsWith('/media') && !normalizedPath.startsWith('/_astro') && !normalizedPath.startsWith('/sync-lyrics') && normalizedPath !== '/' && normalizedPath !== '/m') {
    const rewriteReq = new Request(new URL(url.origin + '/'), request);
    return env.ASSETS.fetch(rewriteReq);
  }

  // Pre-fetch Data logic for instant loading (HTMLRewriter injection)
  let preloadedScript = '';
  
  if (normalizedPath === '/') {
     try {
       const { results } = await env.ABOUT_ME.prepare("SELECT * FROM about_blocks ORDER BY order_index ASC").all();
       preloadedScript = `<script id="preloaded-about-data" type="application/json">${JSON.stringify(results).replace(/</g, '\\u003c')}</script>`;
       
       const { results: profResults } = await env.PROFESSIONAL_PROFILE.prepare("SELECT id FROM professional_blocks LIMIT 1").all();
       preloadedScript += `<script id="preloaded-prof-data" type="application/json">${JSON.stringify(profResults).replace(/</g, '\\u003c')}</script>`;
     } catch(e) {}
  } else if (normalizedPath === '/professional') {
     try {
       const { results } = await env.PROFESSIONAL_PROFILE.prepare("SELECT * FROM professional_blocks ORDER BY order_index ASC").all();
       preloadedScript = `<script id="preloaded-prof-data" type="application/json">${JSON.stringify(results).replace(/</g, '\\u003c')}</script>`;
       
       const { results: aboutRes } = await env.ABOUT_ME.prepare("SELECT * FROM about_blocks WHERE type IN ('status', 'pfp_crop')").all();
       preloadedScript += `<script id="preloaded-prof-about-data" type="application/json">${JSON.stringify(aboutRes).replace(/</g, '\\u003c')}</script>`;
     } catch(e) {}
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

  // 4. Inject Nonce and Preloaded Data using HTMLRewriter
  const contentType = newResponse.headers.get('Content-Type') || '';
  if (contentType.includes('text/html')) {
    let rewriter = new HTMLRewriter()
      .on('script', {
        element(el) {
          el.setAttribute('nonce', nonce);
        }
      });
      
    if (preloadedScript) {
      rewriter = rewriter.on('head', {
        element(el) {
          el.append(preloadedScript, { html: true });
        }
      });
    }
    
    return rewriter.transform(newResponse);
  }

  return newResponse;
}
