export async function onRequest({ request, env }) {
  if (!env.QUOTE_DB) return new Response('Database not bound', { status: 500 });
  
  try {
    if (request.method === 'GET') {
      const url = new URL(request.url);
      const limit = url.searchParams.get('limit') || 100;
      
      const { results } = await env.QUOTE_DB.prepare(
        `SELECT * FROM threat_ledger ORDER BY id DESC LIMIT ?`
      ).bind(limit).all();
      
      return new Response(JSON.stringify(results), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (request.method === 'DELETE') {
      // Clear ledger
      await env.QUOTE_DB.prepare(`DELETE FROM threat_ledger`).run();
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response('Method not allowed', { status: 405 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
