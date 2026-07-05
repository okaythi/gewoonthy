export async function onRequest({ request, env }) {
  if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
  
  try {
    const data = await request.json();
    const { action, key, newKey } = data;
    
    if (!key || !key.startsWith('media/')) {
      return new Response('Invalid key, must start with media/', { status: 400 });
    }

    if (action === 'delete') {
      await env.MEDIA_BUCKET.delete(key);
      return new Response(JSON.stringify({ success: true }));
    }
    
    if (action === 'rename') {
      if (!newKey || !newKey.startsWith('media/')) return new Response('Invalid newKey', { status: 400 });
      const object = await env.MEDIA_BUCKET.get(key);
      if (!object) return new Response('Object not found', { status: 404 });
      
      await env.MEDIA_BUCKET.put(newKey, object.body, {
        httpMetadata: object.httpMetadata,
        customMetadata: object.customMetadata
      });
      await env.MEDIA_BUCKET.delete(key);
      return new Response(JSON.stringify({ success: true }));
    }
    
    if (action === 'play_token') {
      if (!env.CONFIG_KV) return new Response('KV not bound', { status: 500 });
      const token = crypto.randomUUID();
      await env.CONFIG_KV.put(`play_token:${token}`, key, { expirationTtl: 60 });
      return new Response(JSON.stringify({ token, url: `/${key}?sandbox=${token}` }));
    }

    return new Response('Unknown action', { status: 400 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
