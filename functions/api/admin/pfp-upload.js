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
    const file = formData.get('file'); // The cropped version
    const originalFile = formData.get('originalFile'); // The full version
    if (!file || !originalFile) return new Response('Files not provided', { status: 400 });
    
    const ext = file.name.split('.').pop().toLowerCase();
    const origExt = originalFile.name.split('.').pop().toLowerCase();

    // Delete existing vanity/pfp.* and vanity/pfp-original.*
    const existing = await env.MEDIA_BUCKET.list({ prefix: 'vanity/pfp' });
    const keysToDelete = existing.objects.map(o => o.key).filter(k => k.startsWith('vanity/pfp.') || k.startsWith('vanity/pfp-original.'));
    if (keysToDelete.length > 0) {
      await Promise.all(keysToDelete.map(k => env.MEDIA_BUCKET.delete(k)));
    }
    
    // Upload new
    const newKey = `vanity/pfp.${ext}`;
    await env.MEDIA_BUCKET.put(newKey, file.stream(), {
      httpMetadata: { contentType: file.type }
    });

    const origKey = `vanity/pfp-original.${origExt}`;
    await env.MEDIA_BUCKET.put(origKey, originalFile.stream(), {
      httpMetadata: { contentType: originalFile.type }
    });
    
    return new Response(JSON.stringify({ success: true, key: newKey }), {
       headers: { 'Content-Type': 'application/json' }
    });
  } catch(e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
