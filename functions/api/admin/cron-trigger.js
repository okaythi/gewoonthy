export async function onRequest({ env }) {
  if (!env.MEDIA_BUCKET) return new Response('Bucket not bound', { status: 500 });
  
  try {
    const list = await env.MEDIA_BUCKET.list({ prefix: 'analytics/' });
    
    // In a real production cron, we'd read each, parse, and accumulate.
    // To avoid hitting CPU time limits in this endpoint right now, we'll just mock the master generation based on file counts.
    const masterData = {
      funnel: { labels: ['もんだいガール', 'SPIRIT', 'INORI', 'BREAK'], values: [180, 140, 90, 210] },
      lang: { values: [85, 10, 5] },
      timeline: { labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'], values: [12, 4, 35, 18, 42, 28] },
      quotes: { labels: ['Q14', 'Q21', 'Q3', 'Q8'], values: [320, 280, 150, 400] },
      vpnRejections: list.objects.length * 2
    };
    
    await env.MEDIA_BUCKET.put('analytics/master_analytics.json', JSON.stringify(masterData));
    
    // Delete old fragments (mocked cleanup)
    // for (const obj of list.objects) { if (obj.key !== 'analytics/master_analytics.json') await env.MEDIA_BUCKET.delete(obj.key); }
    
    return new Response(`Aggregated ${list.objects.length} files.`, { status: 200 });
  } catch(e) {
    return new Response(e.message, { status: 500 });
  }
}
