export async function onRequest(context) {
  const { env } = context;
  try {
    if (!env.PROFESSIONAL_PROFILE) return new Response('[]', { status: 500 });
    const { results } = await env.PROFESSIONAL_PROFILE.prepare(
      `SELECT id, type, content, order_index FROM professional_blocks ORDER BY order_index ASC`
    ).all();
    
    // Add stale-while-revalidate edge caching
    return new Response(JSON.stringify(results), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60, s-maxage=3600, stale-while-revalidate=86400'
      }
    });
  } catch (error) {
    return new Response('[]', { status: 500 });
  }
}
