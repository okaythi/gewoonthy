export async function onRequest({ request, env }) {
  if (request.method !== 'GET') return new Response('Method not allowed', { status: 405 });

  try {
    if (!env.ABOUT_ME) return new Response('[]', { status: 500 });
    const { results } = await env.ABOUT_ME.prepare(
      `SELECT id, type, content, order_index FROM about_blocks ORDER BY order_index ASC`
    ).all();
    
    // Add stale-while-revalidate edge caching
    return new Response(JSON.stringify(results), { 
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60, stale-while-revalidate=86400'
      } 
    });
  } catch (err) {
    return new Response('[]', { status: 500 });
  }
}
