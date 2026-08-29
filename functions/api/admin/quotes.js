export async function onRequest({ request, env }) {
  if (!env.DB) return new Response('Database not bound', { status: 500 });
  
  try {
    if (request.method === 'GET') {
      const { results } = await env.DB.prepare(`SELECT * FROM quotes ORDER BY id DESC`).all();
      return new Response(JSON.stringify(results), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (request.method === 'PUT' || request.method === 'POST') {
      const data = await request.json();
      const { id, author, text_en, text_nl, text_fr, weight } = data;
      
      if (!id) {
        // Insert new
        await env.DB.prepare(
          `INSERT INTO quotes (author, text_en, text_nl, text_fr, weight, views) VALUES (?, ?, ?, ?, ?, 0)`
        ).bind(author, text_en, text_nl || null, text_fr || null, weight || 1).run();
      } else {
        // Update existing
        await env.DB.prepare(
          `UPDATE quotes SET author = ?, text_en = ?, text_nl = ?, text_fr = ?, weight = ? WHERE id = ?`
        ).bind(author, text_en, text_nl || null, text_fr || null, weight || 1, id).run();
      }
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (request.method === 'DELETE') {
      let id;
      try {
        const body = await request.json();
        id = body.id;
      } catch (e) {
        // Fallback to URL parameter just in case
        const url = new URL(request.url);
        id = url.searchParams.get('id');
      }
      
      if (id) {
        await env.DB.prepare(`DELETE FROM quotes WHERE id = ?`).bind(id).run();
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
