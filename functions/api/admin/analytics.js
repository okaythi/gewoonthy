export async function onRequest({ env }) {
  if (!env.MEDIA_BUCKET) return new Response('{}', { status: 200 });
  
  try {
    const obj = await env.MEDIA_BUCKET.get('analytics/master_analytics.json');
    if (!obj) {
      // Return a basic mock if the master sweep hasn't run yet
      const fallbackData = {
        funnel: { labels: ['Track 1', 'Track 2'], values: [120, 150] },
        lang: { values: [75, 15, 10] },
        timeline: { labels: ['Mon', 'Tue', 'Wed'], values: [10, 25, 15] },
        quotes: { labels: ['Plato', 'Socrates'], values: [40, 60] },
        vpnRejections: 0
      };
      return new Response(JSON.stringify(fallbackData), { headers: { 'Content-Type': 'application/json' } });
    }
    return new Response(obj.body, { headers: { 'Content-Type': 'application/json' } });
  } catch(e) {
    return new Response('{}', { status: 200 });
  }
}
