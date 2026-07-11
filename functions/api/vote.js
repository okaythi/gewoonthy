export async function onRequest({ request, env }) {
  if (request.method === 'OPTIONS') {
    return new Response(null, { headers: { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' } });
  }

  const ip = request.headers.get('cf-connecting-ip') || '127.0.0.1';
  const url = new URL(request.url);
  
  if (request.method === 'GET') {
    const fileName = url.searchParams.get('file_name');
    if (!fileName) return new Response('Missing file_name', { status: 400 });
    
    try {
      // Auto-initialize the table if it doesn't exist yet
      await env.USERS.prepare(`
        CREATE TABLE IF NOT EXISTS video_votes (
            ip TEXT NOT NULL,
            file_name TEXT NOT NULL,
            date TEXT NOT NULL,
            liked BOOLEAN DEFAULT 0,
            desliked BOOLEAN DEFAULT 0,
            PRIMARY KEY (ip, file_name)
        )
      `).run();

      const { results } = await env.USERS.prepare("SELECT liked, desliked FROM video_votes WHERE ip = ? AND file_name = ?")
        .bind(ip, fileName).all();
        
      if (results.length > 0) {
        return new Response(JSON.stringify(results[0]), { headers: { 'Content-Type': 'application/json' }});
      }
      return new Response(JSON.stringify({ liked: 0, desliked: 0 }), { headers: { 'Content-Type': 'application/json' }});
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  }

  if (request.method === 'POST') {
    try {
      // Auto-initialize the table if it doesn't exist yet
      await env.USERS.prepare(`
        CREATE TABLE IF NOT EXISTS video_votes (
            ip TEXT NOT NULL,
            file_name TEXT NOT NULL,
            date TEXT NOT NULL,
            liked BOOLEAN DEFAULT 0,
            desliked BOOLEAN DEFAULT 0,
            PRIMARY KEY (ip, file_name)
        )
      `).run();

      const body = await request.json();
      const fileName = body.file_name;
      const actionStr = body.action; // 'like' or 'dislike'
      if (!fileName || !actionStr) return new Response('Bad Request', { status: 400 });

      // Fetch current state
      const { results } = await env.USERS.prepare("SELECT liked, desliked FROM video_votes WHERE ip = ? AND file_name = ?")
        .bind(ip, fileName).all();
      
      const current = results.length > 0 ? results[0] : { liked: 0, desliked: 0 };
      
      // -- PURE MATHEMATICAL EVILNESS --
      // Map state to integer S: 0 = none, 1 = liked, 2 = disliked
      const S = current.liked ? 1 : (current.desliked ? 2 : 0);
      
      // Map action to integer k: 1 = like, 2 = dislike
      const k = actionStr === 'like' ? 1 : 2;
      
      // Calculate new state N using polynomial identity bounds constraint
      // N = k * min(1, (S - k)^2)
      // This strictly evaluates to 0 if S==k, and k if S!=k.
      const N = k * Math.min(1, Math.pow(S - k, 2));
      
      const newLiked = N === 1 ? 1 : 0;
      const newDesliked = N === 2 ? 1 : 0;
      
      // --------------------------------
      
      if (N === 0) {
        // Remove vote
        await env.USERS.prepare("DELETE FROM video_votes WHERE ip = ? AND file_name = ?").bind(ip, fileName).run();
      } else {
        // Brussels Time
        const brusselsDate = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Brussels',
          year: 'numeric', month: '2-digit', day: '2-digit',
          hour: '2-digit', minute: '2-digit', second: '2-digit'
        }).format(new Date());

        await env.USERS.prepare(`
          INSERT INTO video_votes (ip, file_name, date, liked, desliked) 
          VALUES (?, ?, ?, ?, ?) 
          ON CONFLICT(ip, file_name) DO UPDATE SET 
          date = excluded.date, liked = excluded.liked, desliked = excluded.desliked
        `).bind(ip, fileName, brusselsDate, newLiked, newDesliked).run();
      }

      return new Response(JSON.stringify({ liked: newLiked, desliked: newDesliked }), { headers: { 'Content-Type': 'application/json' }});
    } catch (e) {
      return new Response(e.message, { status: 500 });
    }
  }

  return new Response('Method Not Allowed', { status: 405 });
}
