// Lists all video files and live lyrics overlays hosted in Cloudflare R2 MEDIA_BUCKET
export async function onRequestGet({ env }) {
  if (!env.MEDIA_BUCKET) {
    return new Response(JSON.stringify({ error: 'MEDIA_BUCKET not bound', videos: [], liveLyrics: [] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const listed = await env.MEDIA_BUCKET.list();
    const liveLyrics = (listed.objects || [])
      .filter(o => o.key.startsWith('_lyrics_live/') && o.key.endsWith('.json'))
      .map(o => o.key.replace('_lyrics_live/', '').replace('.json', ''));

    const videos = (listed.objects || [])
      .filter(o => /\.(mp4|webm|mkv)$/i.test(o.key))
      .map(o => ({
        key: o.key,
        size: o.size,
        uploaded: o.uploaded
      }));

    return new Response(JSON.stringify({ videos, liveLyrics }), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message, videos: [], liveLyrics: [] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
