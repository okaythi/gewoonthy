export async function onRequest({ request, env }) {
  if (!env.CLOSE_FRIENDS) return new Response('Database not bound', { status: 500 });
  
  try {
    if (request.method === 'GET') {
      const { results } = await env.CLOSE_FRIENDS.prepare(`SELECT * FROM close_friends`).all();
      return new Response(JSON.stringify(results), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (request.method === 'POST') {
      const data = await request.json();
      const { user_id, username, display_name, avatar_url } = data;
      
      if (!user_id) {
         return new Response('Missing user_id', { status: 400 });
      }

      await env.CLOSE_FRIENDS.prepare(
        `INSERT INTO close_friends (user_id, username, display_name, avatar_url) VALUES (?, ?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET username=excluded.username, display_name=excluded.display_name, avatar_url=excluded.avatar_url`
      ).bind(user_id, username || '', display_name || '', avatar_url || '').run();
      
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (request.method === 'DELETE') {
      const body = await request.json();
      const { user_id } = body;
      
      if (user_id) {
        await env.CLOSE_FRIENDS.prepare(`DELETE FROM close_friends WHERE user_id = ?`).bind(user_id).run();
      }
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    return new Response('Method not allowed', { status: 405 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
