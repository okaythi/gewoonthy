export async function onRequest({ request, env }) {
  if (!env.DB) return new Response('DB not bound', { status: 500 });

  try {
    if (request.method === 'GET') {
      const { results } = await env.DB.prepare(`SELECT * FROM about_blocks ORDER BY order_index ASC`).all();
      return new Response(JSON.stringify(results), { headers: { 'Content-Type': 'application/json' } });
    }

    if (request.method === 'POST') {
      const blocks = await request.json();
      
      const ip = request.headers.get('cf-connecting-ip') || 'unknown';
      const timeBrussels = new Date().toLocaleString("en-BE", {timeZone: "Europe/Brussels"});

      // Bulk replace blocks, but preserve status (id=0) and pfp_crop (id=-1)
      await env.DB.prepare(`DELETE FROM about_blocks WHERE id NOT IN (0, -1)`).run();
      
      const stmts = blocks.map((b, i) => 
        env.DB.prepare(`INSERT INTO about_blocks (type, content, order_index, edited_by_ip, updated_at) VALUES (?, ?, ?, ?, ?)`).bind(b.type, b.content, i, ip, timeBrussels)
      );
      if (stmts.length > 0) {
        await env.DB.batch(stmts);
      }
      return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
    }

    return new Response('Method not allowed', { status: 405 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
