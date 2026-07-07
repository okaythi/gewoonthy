export async function onRequest({ request, env }) {
  const db = env.USERS;
  if (!db) return new Response('Database Error', { status: 500 });

  if (request.method === 'GET') {
    try {
      const { results } = await db.prepare('SELECT * FROM users ORDER BY last_login_time DESC').all();
      return new Response(JSON.stringify({ users: results }), { 
        status: 200, 
        headers: { 'content-type': 'application/json' } 
      });
    } catch(e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
  }

  if (request.method === 'PUT') {
    try {
      const body = await request.json();
      const { userId, field, value } = body;

      const allowedFields = ['username', 'email', 'profile_picture_url', 'role', 'account_creation_location', 'current_login_location', 'current_ip'];
      if (!allowedFields.includes(field)) {
        return new Response('Invalid field', { status: 400 });
      }

      // 1. Update D1
      await db.prepare(`UPDATE users SET ${field} = ? WHERE user_id = ?`)
        .bind(value, userId)
        .run();

      // 2. Sync to Supabase if it's a metadata field or email
      if (['username', 'profile_picture_url', 'role', 'email'].includes(field)) {
        const supabaseUrl = 'https://coxzzkfdssrgjplstnmo.supabase.co';
        const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY; 

        if (serviceKey) {
          const updateBody = field === 'email' 
            ? { email: value } 
            : { user_metadata: { [field]: value } };

          await fetch(`${supabaseUrl}/auth/v1/admin/users/${userId}`, {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${serviceKey}`,
              'apikey': serviceKey,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateBody)
          });
        } else {
          console.warn('No SUPABASE_SERVICE_ROLE_KEY found, skipped Supabase sync.');
        }
      }

      return new Response(JSON.stringify({ success: true }), { 
        status: 200, 
        headers: { 'content-type': 'application/json' } 
      });
    } catch(e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500 });
    }
  }

  return new Response('Method Not Allowed', { status: 405 });
}
