export async function onRequest({ env }) {
  if (!env.MEDIA_BUCKET) return new Response('Bucket not bound', { status: 500 });
  
  try {
    const listed = await env.MEDIA_BUCKET.list({ prefix: 'vanity/pfp.' });
    let targetKey = listed.objects.length > 0 ? listed.objects[0].key : 'vanity/fallback.png';
    
    const obj = await env.MEDIA_BUCKET.get(targetKey);
    if (!obj) {
      // Fallback SVG if nothing is found in the bucket
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#888"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;
      return new Response(svg, { headers: { 'content-type': 'image/svg+xml', 'Cache-Control': 'public, max-age=60, must-revalidate' }});
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
