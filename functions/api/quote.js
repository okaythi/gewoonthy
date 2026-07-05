export async function onRequest({ request, env }) {
  if (!env.QUOTE_DB) {
    return new Response(JSON.stringify({ text: { en: "Database not bound." } }), { status: 500 });
  }
  
  try {
    const u = new URL(request.url);
    const s = u.searchParams.get('seen');
    const v = s ? s.split(',').map(Number).filter(n => !isNaN(n)) : [];
    
    // Fetch all quotes (it's very fast for ~150 rows)
    const { results: quotes } = await env.QUOTE_DB.prepare(`SELECT * FROM quotes`).all();
    
    if (!quotes || quotes.length === 0) {
      return new Response(JSON.stringify({ text: { en: "No quotes available." } }), { status: 404 });
    }

    // History reconciliation
    let eligible = quotes.filter(q => !v.includes(q.id));
    if (eligible.length === 0) {
      eligible = quotes; // Reset if all seen
    }
    
    // Weighted random selection for Delivery Bias Controller
    let totalWeight = eligible.reduce((sum, q) => sum + (q.weight || 1), 0);
    let randomVal = Math.random() * totalWeight;
    let selected = eligible[0];
    
    for (const q of eligible) {
      randomVal -= (q.weight || 1);
      if (randomVal <= 0) {
        selected = q;
        break;
      }
    }

    // Asynchronously update view count for analytics
    env.QUOTE_DB.prepare(`UPDATE quotes SET views = views + 1 WHERE id = ?`).bind(selected.id).run().catch(e => console.error("View update failed", e));
    
    // Format payload to match the legacy structure
    const payload = {
      id: selected.id,
      author: selected.author,
      source: "", // Source was dropped in schema optimization
      text: {
        en: selected.text_en,
        nl: selected.text_nl || null,
        fr: selected.text_fr || null
      }
    };

    return new Response(JSON.stringify(payload), { 
      headers: { 
        'content-type': 'application/json', 
        'Cache-Control': 'no-store, max-age=0, must-revalidate', 
        'Access-Control-Allow-Origin': '*' 
      } 
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}