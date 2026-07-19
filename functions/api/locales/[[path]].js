export async function onRequest(context) {
  const { request, env, params } = context;
  
  // [[path]] gives an array of path segments in Cloudflare Pages Functions
  let pathStr = '';
  if (params.path && Array.isArray(params.path)) {
    pathStr = params.path.join('/');
  } else if (params.path) {
    pathStr = params.path;
  }
  
  if (!pathStr) {
    return new Response('Not found', { status: 404 });
  }
  
  // Use Cloudflare R2 if available via bindings
  const bucket = env.LOCALES_BUCKET;
  if (!bucket) {
    // Local fallback for dev if R2 is not configured properly (requires --local)
    // Cloudflare Pages functions can't dynamically require fs in production,
    // but in local Wrangler development sometimes they mock it or you just have to mock it.
    // Assuming bucket is bound properly in production.
    return new Response('LOCALES_BUCKET not bound', { status: 500 });
  }

  const object = await bucket.get(pathStr);
  if (!object) {
    return new Response('Not found in R2', { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  headers.set('Cache-Control', 'public, max-age=86400');
  
  let contentType = 'application/json';
  if (pathStr.endsWith('.md')) contentType = 'text/markdown';
  else if (pathStr.endsWith('.html')) contentType = 'text/html';
  headers.set('Content-Type', contentType);

  return new Response(object.body, { headers });
}
