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

  if (request.method === 'PATCH') {
    try {
      const body = await request.json();
      const { userId, username, email, role, account_creation_location, current_login_location, current_ip } = body;

      if (!userId) return new Response(JSON.stringify({ error: 'Missing userId' }), { status: 400 });

      // 1. Update D1 synchronously
      await db.prepare(`UPDATE users SET username=?, email=?, role=?, account_creation_location=?, current_login_location=?, current_ip=? WHERE user_id=?`)
        .bind(username || '', email || '', role || 'Guest', account_creation_location || '', current_login_location || '', current_ip || '', userId)
        .run();

      // 2. Sync to Supabase metadata and email
      const supabaseUrl = 'https://coxzzkfdssrgjplstnmo.supabase.co';
      const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY; 

      if (serviceKey) {
        // Fetch current user from Supabase to preserve existing metadata (like PFP)
        const currentRes = await fetch(`${supabaseUrl}/auth/v1/admin/users/${userId}`, {
          method: 'GET',
          headers: { 'Authorization': `Bearer ${serviceKey}`, 'apikey': serviceKey }
        });
        
        let existingMetadata = {};
        if (currentRes.ok) {
           const userData = await currentRes.json();
           existingMetadata = userData.user_metadata || {};
        }

        const updateBody = {
          email: email,
          user_metadata: {
             ...existingMetadata,
             username: username,
             role: role
          }
        };

        const updateRes = await fetch(`${supabaseUrl}/auth/v1/admin/users/${userId}`, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${serviceKey}`,
            'apikey': serviceKey,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updateBody)
        });

        if (!updateRes.ok) {
           const err = await updateRes.text();
           console.error('Supabase sync failed:', err);
           // Even if Supabase sync fails slightly (e.g. invalid email format), we still updated D1. 
           // But let's return an error so the admin knows.
           return new Response(JSON.stringify({ error: `D1 updated, but Supabase sync failed: ${err}` }), { status: 500 });
        }
      } else {
        console.warn('No SUPABASE_SERVICE_ROLE_KEY found, skipped Supabase sync.');
      }

      return new Response(JSON.stringify({ success: true }), { 
        status: 200, 
        headers: { 'content-type': 'application/json' } 
      });
    } catch(e) {
      return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: {'content-type': 'application/json'} });
    }
  }

  return new Response('Method Not Allowed', { status: 405 });
}
