export async function onRequest({ request, env }) {
  if (!env.QUOTE_DB) return new Response('DB not bound', { status: 500 });

  try {
    if (request.method === 'GET') {
      const { results } = await env.QUOTE_DB.prepare(`SELECT * FROM about_blocks ORDER BY order_index ASC`).all();
      return new Response(JSON.stringify(results), { headers: { 'Content-Type': 'application/json' } });
    }

    if (request.method === 'POST') {
      const blocks = await request.json();
      // Bulk replace blocks
      await env.QUOTE_DB.prepare(`DELETE FROM about_blocks`).run();
      
      const stmts = blocks.map((b, i) => 
        env.QUOTE_DB.prepare(`INSERT INTO about_blocks (type, content, order_index) VALUES (?, ?, ?)`).bind(b.type, b.content, i)
      );
      if (stmts.length > 0) {
        await env.QUOTE_DB.batch(stmts);
      }
      return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
    }

    return new Response('Method not allowed', { status: 405 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
