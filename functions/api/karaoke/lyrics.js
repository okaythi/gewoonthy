// Live lyrics overlay reader from R2
export async function onRequestGet({ request, env }) {
  if (!env.MEDIA_BUCKET) {
    return new Response(JSON.stringify({ error: 'MEDIA_BUCKET not bound' }), { status: 404 });
  }

  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (!id) {
    return new Response(JSON.stringify({ error: 'Missing id param' }), { status: 400 });
  }

  try {
    const liveKey = `_lyrics_live/${id}.json`;
    const object = await env.MEDIA_BUCKET.get(liveKey);

    if (!object) {
      return new Response(JSON.stringify({ error: 'Not found in live overlay' }), { status: 404 });
    }

    const text = await object.text();
    return new Response(text, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache, no-store, must-revalidate'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
