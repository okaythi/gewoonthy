export async function onRequest({ request, env }) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const text = await request.text();
    const data = JSON.parse(text);
    const sessionId = data.id || crypto.randomUUID();
    
    // Format YYYY-MM-DD
    const dateStr = new Date().toISOString().split('T')[0];
    const path = `analytics/${dateStr}/${sessionId}-${Date.now()}.json`;

    if (env.MEDIA_BUCKET) {
      await env.MEDIA_BUCKET.put(path, text);
    } else {
      console.log('Analytics data received but MEDIA_BUCKET not bound. Payload:', text);
    }
    return new Response('OK', { status: 200 });
  } catch (e) {
    return new Response('Error parsing payload', { status: 400 });
  }
}
