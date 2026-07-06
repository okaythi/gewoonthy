export async function onRequest({ request, env }) {
  if (request.method === 'DELETE') {
    try {
      const existing = await env.MEDIA_BUCKET.list({ prefix: 'vanity/pfp.' });
      const keysToDelete = existing.objects.map(o => o.key);
      if (keysToDelete.length > 0) {
        await Promise.all(keysToDelete.map(k => env.MEDIA_BUCKET.delete(k)));
      }
      return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  }
  
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    if (!file) return new Response('No file provided', { status: 400 });
    
    const ext = file.name.split('.').pop().toLowerCase();
    const allowed = ['png', 'jpg', 'jpeg', 'gif', 'webp'];
    if (!allowed.includes(ext)) return new Response('Invalid file type', { status: 400 });

    // Delete existing vanity/pfp.*
    const existing = await env.MEDIA_BUCKET.list({ prefix: 'vanity/pfp.' });
    const keysToDelete = existing.objects.map(o => o.key);
    if (keysToDelete.length > 0) {
      await Promise.all(keysToDelete.map(k => env.MEDIA_BUCKET.delete(k)));
    }
    
    // Upload new
    const newKey = `vanity/pfp.${ext}`;
    await env.MEDIA_BUCKET.put(newKey, file.stream(), {
      httpMetadata: { contentType: file.type }
    });
    
    return new Response(JSON.stringify({ success: true, key: newKey }), {
       headers: { 'Content-Type': 'application/json' }
    });
  } catch(e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
