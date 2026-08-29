export async function onRequest({ request, env }) {
  const url = new URL(request.url);

  if (!env.DB) {
    return new Response(JSON.stringify({ error: 'DB not bound' }), { status: 500 });
  }

  try {
    if (request.method === 'GET') {
      const { results } = await env.DB.prepare(
        `SELECT * FROM suggestions ORDER BY 
         CASE status 
           WHEN 'pending' THEN 1 
           WHEN 'approved' THEN 2 
           WHEN 'discarded' THEN 3 
         END, timestamp DESC`
      ).all();
      return new Response(JSON.stringify(results), { headers: { 'Content-Type': 'application/json' } });
    }

    if (request.method === 'PUT') {
      const { id, status } = await request.json();
      await env.DB.prepare(
        `UPDATE suggestions SET status = ? WHERE id = ?`
      ).bind(status, id).run();
      return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
    }

    if (request.method === 'DELETE') {
      await env.DB.prepare(
        `DELETE FROM suggestions WHERE status = 'discarded'`
      ).run();
      return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
    }

    return new Response('Method not allowed', { status: 405 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
