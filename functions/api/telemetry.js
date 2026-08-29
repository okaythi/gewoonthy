export async function onRequest({ request, env }) {
  if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });
  
  try {
    const data = await request.json();
    const { eventType, target } = data; 
    
    // Validate eventType to prevent abuse
    if (eventType !== 'ANTI_CAPTURE' && eventType !== 'HONEYPOT') {
      return new Response('Invalid event type', { status: 400 });
    }
    
    if (env.DB) {
      const ip = request.headers.get('cf-connecting-ip') || 'unknown';
      const cf = request.cf || {};
      const asn = (cf.asOrganization || '').toUpperCase();
      const country = cf.country || 'unknown';
      
      await env.DB.prepare(
        `INSERT INTO threat_ledger (ip_address, asn, country, event_type, target, blocked) VALUES (?, ?, ?, ?, ?, 1)`
      ).bind(ip, asn, country, eventType, target || 'unknown').run();
    }
    
    return new Response(JSON.stringify({ success: true }));
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
