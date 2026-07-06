export async function onRequest({ env }) {
  if (!env.MEDIA_BUCKET) return new Response('Bucket not bound', { status: 500 });
  
  try {
    const listed = await env.MEDIA_BUCKET.list({ prefix: 'vanity/pfp.' });
    let targetKey = listed.objects.length > 0 ? listed.objects[0].key : 'vanity/fallback_pfp.png';
    
    const obj = await env.MEDIA_BUCKET.get(targetKey);
    if (!obj) {
      return new Response('Not found', { status: 404 });
    }
    
    const headers = new Headers();
    obj.writeHttpMetadata(headers);
    headers.set('etag', obj.httpEtag);
    headers.set('Cache-Control', 'public, max-age=60, must-revalidate'); 
    
    if (!headers.has('content-type')) {
       if (targetKey.endsWith('.png')) headers.set('content-type', 'image/png');
       else if (targetKey.endsWith('.gif')) headers.set('content-type', 'image/gif');
       else if (targetKey.endsWith('.jpg') || targetKey.endsWith('.jpeg')) headers.set('content-type', 'image/jpeg');
       else headers.set('content-type', 'application/octet-stream');
    }
    
    return new Response(obj.body, { headers });
  } catch (e) {
    return new Response(e.message, { status: 500 });
  }
}
