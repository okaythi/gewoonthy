export async function onRequest(context) {
  try {
    const listed = await context.env.MEDIA_BUCKET.list();
    
    // Force all generated video links to use the new custom domain
    const customDomain = 'https://media.thiago.qzz.io';
    
    const files = listed.objects
      .filter(obj => obj.key.endsWith('.mp4') || obj.key.endsWith('.webm'))
      .map(obj => `${customDomain}/media/${encodeURIComponent(obj.key)}`);
    
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
