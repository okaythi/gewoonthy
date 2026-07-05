export async function onRequest({ request, env }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');

  if (!q) {
    return new Response(JSON.stringify([]), {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // The Python bot URL should be configured in environment variables
  const botUrl = env.DISCORD_BOT_URL || 'http://127.0.0.1:3000';
  
  try {
    const response = await fetch(`${botUrl}/api/search_members?q=${encodeURIComponent(q)}`);
    
    if (!response.ok) {
       return new Response(JSON.stringify({ error: 'Failed to fetch from bot' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
