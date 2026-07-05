export async function onRequest({ request, env }) {
  if (request.method === 'GET') {
    if (!env.CONFIG_KV) return new Response(JSON.stringify({}), { status: 200 });
    const configStr = await env.CONFIG_KV.get('dashboard_config');
    return new Response(configStr || JSON.stringify({}), { headers: { 'Content-Type': 'application/json' } });
  } else if (request.method === 'POST') {
    if (!env.CONFIG_KV) return new Response('KV not bound', { status: 500 });
    const body = await request.text();
    await env.CONFIG_KV.put('dashboard_config', body);
    return new Response('OK', { status: 200 });
  }
  return new Response('Method Not Allowed', { status: 405 });
}
