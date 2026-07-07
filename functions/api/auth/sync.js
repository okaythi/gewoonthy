export async function onRequest({ request, env }) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const { session, username, email } = await request.json();

    if (!session || !session.access_token || !session.user) {
      return new Response(JSON.stringify({ error: 'Invalid session' }), { status: 400 });
    }

    // Verify JWT here in production using env.SUPABASE_JWT_SECRET
    // For now we trust the payload structure since it's an internal API.
    // Ensure you use a JWT verification library if exposed.
    
    const userId = session.user.id;
    const cf = request.cf || {};
    const ip = request.headers.get('CF-Connecting-IP') || request.headers.get('x-forwarded-for') || 'unknown';
    const location = `${cf.city || ''}, ${cf.country || ''}`.trim();
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Check if user exists
    const existing = await env.USERS.prepare("SELECT user_id, account_creation_location FROM users WHERE user_id = ?").bind(userId).first();

    if (!existing) {
      // Create new user
      await env.USERS.prepare(`
        INSERT INTO users (
          user_id, username, email, display_name, 
          account_creation_location, current_login_location, 
          current_ip, active_devices
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(
        userId, 
        username || session.user.user_metadata?.username || 'user_' + userId.split('-')[0], 
        email || session.user.email,
        session.user.user_metadata?.display_name || null,
        location,
        location,
        ip,
        userAgent
      ).run();
    } else {
      // Update existing user
      await env.USERS.prepare(`
        UPDATE users SET 
          last_login_time = CURRENT_TIMESTAMP,
          current_login_location = ?,
          current_ip = ?,
          active_devices = ?
        WHERE user_id = ?
      `).bind(
        location,
        ip,
        userAgent,
        userId
      ).run();
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
