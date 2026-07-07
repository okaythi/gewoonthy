export async function onRequest({ request, env }) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  try {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new Response('Unauthorized', { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    const supabaseUrl = 'https://coxzzkfdssrgjplstnmo.supabase.co';
    const supabaseKey = 'sb_publishable_EhBCngvPs468DymzEn1e6g_wvcto6Hs'; // publishable anon key is enough for getUser

    // Verify token with Supabase directly
    const userRes = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'apikey': supabaseKey
      }
    });

    if (!userRes.ok) {
      return new Response('Invalid token', { status: 401 });
    }

    const user = await userRes.json();
    const userId = user.id;
    const email = user.email || '';
    const username = user.user_metadata?.username || '';
    // Preserve existing role logic if the user already has one
    const role = user.user_metadata?.role || 'Verified';
    const pfp = user.user_metadata?.profile_picture_url || 'https://media.thiago.qzz.io/media/vanity/fallback.png';

    // Telemetry from CF object
    const ip = request.headers.get('cf-connecting-ip') || '';
    const country = request.cf?.country || '';
    const city = request.cf?.city || '';
    const location = city ? `${city}, ${country}` : country;

    // Upsert into D1
    const db = env.USERS;
    if (!db) {
      console.error('D1 USERS binding not found');
      return new Response('Database Error', { status: 500 });
    }

    // Check if user exists
    const existing = await db.prepare('SELECT user_id, account_creation_location, role FROM users WHERE user_id = ?').bind(userId).first();

    if (existing) {
      // If D1 role is Admin, don't let a missing metadata role demote them!
      const finalRole = existing.role === 'Admin' ? 'Admin' : role;
      
      // Update existing login telemetry
      await db.prepare(`
        UPDATE users 
        SET last_login_time = CURRENT_TIMESTAMP,
            current_login_location = ?,
            current_ip = ?,
            role = ?
        WHERE user_id = ?
      `).bind(location, ip, finalRole, userId).run();
    } else {
      // Insert new user
      await db.prepare(`
        INSERT INTO users (user_id, username, email, profile_picture_url, account_creation_location, current_login_location, current_ip, role)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `).bind(userId, username, email, pfp, location, location, ip, role).run();
    }

    return new Response(JSON.stringify({ success: true }), { 
      status: 200, 
      headers: { 'content-type': 'application/json' } 
    });

  } catch (err) {
    console.error('Sync Error:', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
