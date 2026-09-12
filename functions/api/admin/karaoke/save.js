// Multi-tier Save Handler for Karaoke in Cloudflare Pages
export async function onRequestPost({ request, env }) {
  try {
    const payload = await request.json();

    if (!payload || !payload.id || !payload.videoFile || !Array.isArray(payload.lyricsData)) {
      return new Response(JSON.stringify({ error: 'Invalid SaveLyricsPayload structure' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { id } = payload;
    let liveCached = false;
    let githubCommitted = false;
    let githubError = null;

    // 1. Instant Live Overlay to R2 (Zero-delay playback in production)
    if (env.MEDIA_BUCKET) {
      try {
        const liveKey = `_lyrics_live/${id}.json`;
        await env.MEDIA_BUCKET.put(liveKey, JSON.stringify(payload, null, 2), {
          httpMetadata: { contentType: 'application/json' }
        });
        liveCached = true;
      } catch (r2Err) {
        console.warn('Failed to write live overlay to R2:', r2Err);
      }
    }

    // 2. GitHub Git Permanence (if GITHUB_TOKEN is available in env)
    const ghToken = env.GITHUB_TOKEN;
    const repo = env.GITHUB_REPO || 'okaythi/gewoonthy';
    const branch = env.GITHUB_BRANCH || 'production';

    if (ghToken) {
      try {
        const headers = {
          'Authorization': `Bearer ${ghToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Cloudflare-Pages-Karaoke-Studio'
        };

        // A. Commit lyric file: src/data/lyrics/<id>.json
        const lyricPath = `src/data/lyrics/${id}.json`;
        let sha = null;

        const getFileRes = await fetch(`https://api.github.com/repos/${repo}/contents/${lyricPath}?ref=${branch}`, { headers });
        if (getFileRes.ok) {
          const fileData = await getFileRes.json();
          sha = fileData.sha;
        }

        const lyricContentBase64 = btoa(unescape(encodeURIComponent(JSON.stringify(payload, null, 2))));

        const putLyricRes = await fetch(`https://api.github.com/repos/${repo}/contents/${lyricPath}`, {
          method: 'PUT',
          headers,
          body: JSON.stringify({
            message: `sync(lyrics): update timings for ${id}`,
            content: lyricContentBase64,
            branch,
            sha: sha || undefined
          })
        });

        if (putLyricRes.ok) {
          githubCommitted = true;
        } else {
          const errData = await putLyricRes.json();
          githubError = errData.message || 'GitHub commit failed';
        }
      } catch (ghErr) {
        githubError = ghErr.message;
      }
    }

    return new Response(JSON.stringify({
      success: true,
      id,
      liveCached,
      githubCommitted,
      githubError
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
