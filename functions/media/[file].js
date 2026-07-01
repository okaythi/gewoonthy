export async function onRequest(context) {
  const { request, env, params } = context;
  const filename = decodeURIComponent(params.file);

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const isHead = request.method === 'HEAD';
  const object = isHead
    ? await env.MEDIA_BUCKET.head(filename)
    : await env.MEDIA_BUCKET.get(filename, { range: request.headers });

  if (object === null) {
    return new Response('Video not found', { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Cache-Control', 'public, s-maxage=31536000, max-age=31536000, immutable');

  const hasRange = request.headers.has('range');
  const status = object.body ? (hasRange ? 206 : 200) : (isHead ? 200 : 304);

  if (hasRange && object.range) {
    headers.set('Content-Range', `bytes ${object.range.offset}-${object.range.offset + object.range.length - 1}/${object.size}`);
  }

  return new Response(isHead ? null : object.body, { headers, status });
}
