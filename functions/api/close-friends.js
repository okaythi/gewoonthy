export async function onRequest({ request, env }) {
  if (!env.CLOSE_FRIENDS) return new Response('Database not bound', { status: 500 });
  
  try {
    if (request.method === 'GET') {
      const { results } = await env.CLOSE_FRIENDS.prepare(`SELECT * FROM close_friends`).all();
      const parsedResults = results.map(r => ({
         ...r,
         badges: JSON.parse(r.badges || '[]')
      }));
      
      try {
         const userIds = parsedResults.map(r => r.user_id).join(',');
         if (userIds) {
            const freshRes = await fetch(`https://gewoonthy.onrender.com/api/get_users?ids=${userIds}`);
            if (freshRes.ok) {
               const freshUsers = await freshRes.json();
               const freshMap = {};
               for (const f of freshUsers) freshMap[f.user_id] = f;
               
               for (const r of parsedResults) {
                  const fresh = freshMap[r.user_id];
                  if (fresh) {
                     r.username = fresh.username;
                     r.display_name = fresh.display_name;
                     r.avatar_url = fresh.avatar_url;
                     r.badges = fresh.badges;
                  }
               }
            }
         }
      } catch (err) {
         // Silently fallback to DB data if bot is down
      }
      
      return new Response(JSON.stringify(parsedResults), {
        headers: { 
           'Content-Type': 'application/json',
           'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate'
        }
      });
    }

    if (request.method === 'POST') {
      const data = await request.json();
      const { user_id, username, display_name, avatar_url, is_friend, friend_since, badges } = data;
      
      if (!user_id) {
         return new Response('Missing user_id', { status: 400 });
      }

      await env.CLOSE_FRIENDS.prepare(
        `INSERT INTO close_friends (user_id, username, display_name, avatar_url, is_friend, friend_since, badges) VALUES (?, ?, ?, ?, ?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET username=excluded.username, display_name=excluded.display_name, avatar_url=excluded.avatar_url, is_friend=excluded.is_friend, friend_since=excluded.friend_since, badges=excluded.badges`
      ).bind(user_id, username || '', display_name || '', avatar_url || '', is_friend ? 1 : 0, friend_since || null, JSON.stringify(badges || [])).run();
      
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
