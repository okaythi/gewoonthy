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

    let disabledVideos = [];
    if (env.CONFIG) {
      try {
        const { results } = await env.CONFIG.prepare(`SELECT value FROM system_config WHERE key = 'media.disabled_videos'`).all();
        if (results.length > 0 && results[0].value) {
          disabledVideos = JSON.parse(results[0].value);
        }
      } catch(e) {}
    }

    const f = objects
      .filter(o => !disabledVideos.includes(o.key))
      .map(o => {
        const fileName = o.key.split('/').pop().replace(/\.[^/.]+$/, "").toLowerCase();
        // Try to find if this track was suggested by someone
        let alias = null;
        for (const [suggestedTrack, suggAlias] of Object.entries(approvedAliases)) {
          if (fileName.includes(suggestedTrack) || suggestedTrack.includes(fileName)) {
             alias = suggAlias; break;
          }
        }
        return { url: `${d}/${o.key.split('/').map(encodeURIComponent).join('/')}`, alias };
      });

    return new Response(JSON.stringify(f), { headers: { 'content-type': 'application/json', 'Cache-Control': 'public, max-age=60' } });
  } catch (err) {
    return new Response('[]', { status: 500 });
  }
}
