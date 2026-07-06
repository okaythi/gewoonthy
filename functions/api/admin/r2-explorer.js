export async function onRequest({ env }) {
  if (!env.MEDIA_BUCKET) return new Response('[]', { headers: { 'Content-Type': 'application/json' } });
  
  try {
    const listed = await env.MEDIA_BUCKET.list();
    let files = listed.objects.map(obj => ({
      key: obj.key,
      size: obj.size,
      uploaded: obj.uploaded,
      hash: obj.customMetadata?.hash || null
    }));
    return new Response(JSON.stringify(files), { headers: { 'Content-Type': 'application/json' } });
  } catch(e) {
    return new Response(JSON.stringify([]), { headers: { 'Content-Type': 'application/json' }, status: 500 });
  }
}
