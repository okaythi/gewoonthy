// Lists all video files hosted in the Cloudflare R2 MEDIA_BUCKET
export async function onRequestGet({ env }) {
  if (!env.MEDIA_BUCKET) {
    return new Response(JSON.stringify({ error: 'MEDIA_BUCKET not bound', videos: [] }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const listed = await env.MEDIA_BUCKET.list();
    const videos = (listed.objects || [])
      .filter(o => /\.(mp4|webm|mkv)$/i.test(o.key))
      .map(o => ({
        key: o.key,
        size: o.size,
        uploaded: o.uploaded
      }));

    return new Response(JSON.stringify(videos), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60, s-maxage=60'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message, videos: [] }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
