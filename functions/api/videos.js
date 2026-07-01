export async function onRequest(context) {
  try {
    const listed = await context.env.MEDIA_BUCKET.list();
    
    // Grabs your current domain (gewoonthy.pages.dev) dynamically
    const origin = new URL(context.request.url).origin;
    
    const files = listed.objects
      .filter(obj => obj.key.endsWith('.mp4') || obj.key.endsWith('.webm'))
      .map(obj => `${origin}/media/${encodeURIComponent(obj.key)}`);
    
    return new Response(JSON.stringify(files), {
      headers: { 
        'content-type': 'application/json',
        'Cache-Control': 'public, max-age=60' 
      }
    });
  } catch (e) {
    return new Response(JSON.stringify([]), { status: 500 });
  }
}
