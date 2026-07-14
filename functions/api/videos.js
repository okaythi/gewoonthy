export async function onRequest({ env }) {
  try {
    const d = atob('aHR0cHM6Ly9jZG4uc3Vkb3RoeS5tZQ==');
    const objects = (await env.MEDIA_BUCKET.list()).objects.filter(o => /\.mp4$|\.webm$/.test(o.key));
    
    let approvedAliases = {};
    if (env.QUOTE_DB) {
      try {
        const { results } = await env.QUOTE_DB.prepare(`SELECT track, alias FROM suggestions WHERE status = 'approved' AND alias IS NOT NULL`).all();
        results.forEach(r => approvedAliases[r.track.toLowerCase()] = r.alias);
      } catch(e) {}
    }

    const f = objects.map(o => {
      const fileName = o.key.split('/').pop().replace(/\.[^/.]+$/, "").toLowerCase();
      // Try to find if this track was suggested by someone
      let alias = null;
      for (const [suggestedTrack, suggAlias] of Object.entries(approvedAliases)) {
        if (fileName.includes(suggestedTrack) || suggestedTrack.includes(fileName)) {
           alias = suggAlias; break;
        }
      }
      return { url: `${d}/${encodeURIComponent(o.key)}`, alias };
    });

    return new Response(JSON.stringify(f), { headers: { 'content-type': 'application/json', 'Cache-Control': 'public, max-age=60' } });
  } catch (err) {
    return new Response('[]', { status: 500 });
  }
}
