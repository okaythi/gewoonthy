export async function onRequest(context) {
  const { request, env, params } = context;
  const filename = decodeURIComponent(params.file);
  const cache = caches.default;

  // We only want to handle GET and HEAD requests
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const isHead = request.method === 'HEAD';
  let response;

  // 1. Check if the Edge already has this cached (Cache API only stores GETs)
  if (!isHead) {
    response = await cache.match(request);
    if (response) return response;
  }

  // 2. Fetch from R2 (Use cheap .head() for HEAD requests, .get() for video streaming)
  const object = isHead
    ? await env.MEDIA_BUCKET.head(filename)
    : await env.MEDIA_BUCKET.get(filename, { range: request.headers });

  if (object === null) {
    return new Response('Video not found', { status: 404 });
  }

  // 3. Reconstruct headers for the CDN and the Browser
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Cache-Control', 'public, s-maxage=31536000, max-age=31536000, immutable');

  const hasRange = request.headers.has('range');
  const status = object.body ? (hasRange ? 206 : 200) : (isHead ? 200 : 304);

  // If a chunk is requested, tell the player exactly which bytes are arriving
  if (hasRange && object.range) {
    headers.set('Content-Range', `bytes ${object.range.offset}-${object.range.offset + object.range.length - 1}/${object.size}`);
  }

  // HEAD requests must return null bodies
  response = new Response(isHead ? null : object.body, { headers, status });

  // 4. Save full downloads to the Edge Cache
  if (!isHead && status === 200) {
    context.waitUntil(cache.put(request, response.clone()));
  }

  return response;
}
