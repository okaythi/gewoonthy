export async function onRequest({ request, env }) {
  if (!env.ABOUT_ME) return new Response('DB not bound', { status: 500 });

  try {
    if (request.method === 'POST') {
      const { content } = await request.json();
      const ip = request.headers.get('cf-connecting-ip') || 'unknown';
      const timeBrussels = new Date().toLocaleString("en-BE", {timeZone: "Europe/Brussels"});
      
      // Upsert id=0
      await env.ABOUT_ME.prepare(`DELETE FROM about_blocks WHERE id = 0`).run();
      if (content) {
         await env.ABOUT_ME.prepare(`INSERT INTO about_blocks (id, type, content, order_index, edited_by_ip, updated_at) VALUES (0, 'status', ?, 0, ?, ?)`).bind(content, ip, timeBrussels).run();
      }
      return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
    }
    
    return new Response('Method not allowed', { status: 405 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
