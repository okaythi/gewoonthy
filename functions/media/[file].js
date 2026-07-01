export async function onRequestGet(context) {
  const { request, env, params } = context;
  const filename = decodeURIComponent(params.file);
  const cache = caches.default;

  // 1. Check if the Edge already has this cached
  let response = await cache.match(request);
  if (response) {
    return response;
  }

  // 2. Not in cache? Fetch from R2, passing headers for Range/If-Modified-Since
  const object = await env.MEDIA_BUCKET.get(filename, {
    range: request.headers,
    onlyIf: request.headers,
  });

  if (object === null) {
    return new Response('Video not found', { status: 404 });
  }

  // 3. Reconstruct headers 
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  
  // Crucial for video players: tell them seeking is supported
  headers.set('Accept-Ranges', 'bytes'); 
  
  // s-maxage tells Cloudflare Edge to cache it, max-age tells the browser
  headers.set('Cache-Control', 'public, s-maxage=31536000, max-age=31536000, immutable');

  const hasRange = request.headers.has('range');
  const status = object.body ? (hasRange ? 206 : 200) : 304;

  // If it is a partial range request, we must explicitly declare the chunk size 
  if (hasRange && object.range) {
    headers.set('Content-Range', `bytes ${object.range.offset}-${object.range.offset + object.range.length - 1}/${object.size}`);
  }

  response = new Response(object.body, { headers, status });

  // 4. Save to Edge Cache
  // The Cache API only caches 200 OK responses natively.
  // Full downloads will be cached at the edge, and Cloudflare will automatically
  // handle slicing subsequent 206 Range requests from that cached 200 response.
  if (status === 200) {
    context.waitUntil(cache.put(request, response.clone()));
  }

  return response;
}
