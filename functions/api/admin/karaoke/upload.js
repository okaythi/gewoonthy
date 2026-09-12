// Upload video endpoint for Karaoke in Cloudflare Pages
export async function onRequestPost({ request, env }) {
  if (!env.MEDIA_BUCKET) {
    return new Response(JSON.stringify({ error: 'MEDIA_BUCKET not bound' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    const contentType = request.headers.get('content-type') || '';
    let filename = '';
    let fileBody = null;

    if (contentType.includes('multipart/form-data')) {
      const formData = await request.formData();
      const file = formData.get('video');
      if (!file || typeof file === 'string') {
        return new Response(JSON.stringify({ error: 'No video file provided' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
      filename = file.name;
      fileBody = file.stream();
    } else {
      const url = new URL(request.url);
      filename = url.searchParams.get('filename') || 'track.mp4';
      fileBody = request.body;
    }

    if (!filename || !/\.(mp4|webm|mkv)$/i.test(filename)) {
      return new Response(JSON.stringify({ error: 'File must be .mp4, .webm, or .mkv' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Clean filename
    const cleanKey = filename.replace(/[\/\\:*?"<>|]/g, '').trim();

    await env.MEDIA_BUCKET.put(cleanKey, fileBody, {
      httpMetadata: {
        contentType: 'video/mp4'
      }
    });

    return new Response(JSON.stringify({
      success: true,
      key: cleanKey,
      videoUrl: `https://cdn.sudothy.me/${encodeURIComponent(cleanKey)}`
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
