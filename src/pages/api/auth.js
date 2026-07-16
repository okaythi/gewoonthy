import { env } from "cloudflare:workers";

export const POST = async ({ request, cookies }) => {
  const db = env.users;
  const body = await request.json();
  const { action, username, password, token } = body;

  if (action === 'login') {
    const { results } = await db.prepare('SELECT * FROM users WHERE username = ? AND password = ?').bind(username, password).all();
    if (results.length > 0) {
      const user = results[0];
      return new Response(JSON.stringify({ success: true, token: user.id, user }), { status: 200 });
    }
    return new Response(JSON.stringify({ success: false, error: 'Invalid credentials' }), { status: 401 });
  }

  if (action === 'guest') {
    const id = crypto.randomUUID();
    const guestUser = `guest-${Math.floor(Math.random() * 10000)}`;
    const ip = request.headers.get('CF-Connecting-IP') || '127.0.0.1';
    await db.prepare('INSERT INTO users (id, username, password, primary_group, secondary_groups, is_guest, creation_ip) VALUES (?, ?, ?, ?, ?, ?, ?)')
      .bind(id, guestUser, null, 'guests', '[]', 1, ip).run();
    return new Response(JSON.stringify({ success: true, token: id, user: { username: guestUser, is_guest: 1 } }), { status: 200 });
  }

  if (action === 'logout') {
    const authHeader = request.headers.get('Authorization');
    const sessionId = (authHeader ? authHeader.replace('Bearer ', '') : null) || body.token;
    if (sessionId) {
      const { results } = await db.prepare('SELECT is_guest FROM users WHERE id = ?').bind(sessionId).all();
      if (results.length > 0 && results[0].is_guest) {
        await db.prepare('DELETE FROM users WHERE id = ?').bind(sessionId).run();
      }
    }
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  }

  if (action === 'create') {
    const id = crypto.randomUUID();
    const ip = request.headers.get('CF-Connecting-IP') || '127.0.0.1';
    
    // Clean up volatile guest if they are logged in as one
    const authHeader = request.headers.get('Authorization');
    const sessionId = (authHeader ? authHeader.replace('Bearer ', '') : null) || body.token;
    if (sessionId) {
      const { results } = await db.prepare('SELECT is_guest FROM users WHERE id = ?').bind(sessionId).all();
      if (results.length > 0 && results[0].is_guest) {
        await db.prepare('DELETE FROM users WHERE id = ?').bind(sessionId).run();
      }
    }

    try {
      await db.prepare('INSERT INTO users (id, username, password, primary_group, secondary_groups, is_guest, creation_ip) VALUES (?, ?, ?, ?, ?, ?, ?)')
        .bind(id, username, password, 'users', '[]', 0, ip).run();
      return new Response(JSON.stringify({ success: true, token: id, user: { username } }), { status: 200 });
    } catch (e) {
      return new Response(JSON.stringify({ success: false, error: 'Username taken' }), { status: 400 });
    }
  }

  if (action === 'delete') {
    const authHeader = request.headers.get('Authorization');
    const sessionId = (authHeader ? authHeader.replace('Bearer ', '') : null) || body.token;
    if (!sessionId) return new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), { status: 401 });
    
    // Check if requester is root
    const { results } = await db.prepare('SELECT primary_group FROM users WHERE id = ?').bind(sessionId).all();
    if (results.length === 0 || results[0].primary_group !== 'root') {
      return new Response(JSON.stringify({ success: false, error: 'Forbidden' }), { status: 403 });
    }

    try {
      await db.prepare('DELETE FROM users WHERE username = ? AND primary_group != ?').bind(username, 'root').run();
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (e) {
      return new Response(JSON.stringify({ success: false, error: 'Delete failed' }), { status: 400 });
    }
  }

  return new Response(JSON.stringify({ success: false, error: 'Invalid action' }), { status: 400 });
};
