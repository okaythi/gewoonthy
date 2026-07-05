export async function onRequest({ request, env }) {
  if (request.method !== 'PUT') return new Response('Method not allowed', { status: 405 });
  const url = new URL(request.url);
  const key = url.searchParams.get('key');
  
  if (env.MEDIA_BUCKET && key) {
    try {
      await env.MEDIA_BUCKET.put(key, request.body, {
        httpMetadata: { contentType: request.headers.get('Content-Type') || 'application/octet-stream' }
      });
      return new Response('OK', { status: 200 });
    } catch(e) {
      return new Response(e.message, { status: 500 });
    }
  }
  return new Response('Bucket not bound or missing key', { status: 500 });
}
