export const GET = async ({ params, locals }) => {
  const { path } = params;
  
  if (!path) {
    return new Response('Not found', { status: 404 });
  }
  
  // Use Cloudflare R2 if available via bindings
  const bucket = locals.runtime?.env?.LOCALES_BUCKET;
  if (!bucket) {
    // Local fallback for dev if R2 is not configured properly
    try {
      const fs = await import('fs/promises');
      const nodePath = await import('path');
      const localPath = nodePath.resolve(process.cwd(), 'locales', path);
      const content = await fs.readFile(localPath, 'utf-8');
      
      let contentType = 'application/json';
      if (path.endsWith('.md')) contentType = 'text/markdown';
      else if (path.endsWith('.html')) contentType = 'text/html';
      
      return new Response(content, {
        headers: { 'Content-Type': contentType, 'Cache-Control': 'public, max-age=3600' }
      });
    } catch (e) {
      return new Response('Not found in local fallback', { status: 404 });
    }
  }

  const object = await bucket.get(path);
  if (!object) {
    return new Response('Not found in R2', { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  headers.set('Cache-Control', 'public, max-age=86400');
  
  let contentType = 'application/json';
  if (path.endsWith('.md')) contentType = 'text/markdown';
  headers.set('Content-Type', contentType);

  return new Response(object.body, { headers });
};
