// Resolves and maps cloud bucket objects to authorized delivery endpoints.
export async function onRequest({ env }) {
  try {
    const d = atob('aHR0cHM6Ly9tZWRpYS50aGlhZ28ucXp6Lmlv');
    const f = (await env.MEDIA_BUCKET.list()).objects.filter(o => /\.mp4$|\.webm$/.test(o.key)).map(o => `${d}/media/${encodeURIComponent(o.key)}`);
    return new Response(JSON.stringify(f), { headers: { 'content-type': 'application/json', 'Cache-Control': 'public, max-age=60' } });
  } catch (_) {
    return new Response('[]', { status: 500 });
  }
}
