export async function onRequest({ request }) {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405 });
  
  try {
    const { query } = await request.json();
    if (!query || typeof query !== 'string') {
      return new Response(JSON.stringify({ error: 'Empty query' }), { status: 400 });
    }

    let track = "Unknown Track";
    let artist = "Unknown Artist";
    let artwork = "";
    let provider = "text";

    let debugInfo = "";
    
    // Spotify URL Detection
    if (query.includes('spotify.com/track/')) {
      const res = await fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(query)}`);
      if (res.ok) {
        const data = await res.json();
        track = data.title;
        if (track.includes(' - song and lyrics by ')) {
          const parts = track.split(' - song and lyrics by ');
          track = parts[0];
          artist = parts[1];
        }
        artwork = data.thumbnail_url;
        provider = "spotify";
      }
    } 
    // YouTube URL Detection
    else if (query.includes('youtube.com/watch') || query.includes('youtu.be/')) {
      const res = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(query)}&format=json`);
      if (res.ok) {
        const data = await res.json();
        track = data.title;
        artist = data.author_name;
        artwork = data.thumbnail_url;
        provider = "youtube";
      }
    }
    // Apple Music or Raw Text Search -> iTunes Search API
    else {
      let searchTerm = query;
      if (query.includes('music.apple.com/')) {
         const urlParts = new URL(query);
         const pathSegs = urlParts.pathname.split('/');
         searchTerm = pathSegs[pathSegs.length - 2]?.replace(/-/g, ' ') || query;
      }

      const targetUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(searchTerm)}&entity=song&limit=1`;
      const res = await fetch(targetUrl, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      
      debugInfo = `Status: ${res.status}`;
      if (res.ok) {
        const data = await res.json();
        debugInfo += ` | Results: ${data.results?.length}`;
        if (data.results && data.results.length > 0) {
          const song = data.results[0];
          track = song.trackName;
          artist = song.artistName;
          artwork = song.artworkUrl100 ? song.artworkUrl100.replace('100x100', '600x600') : '';
          provider = query.includes('music.apple.com') ? 'apple' : 'itunes_search';
        }
      } else {
        debugInfo += ` | Text: ${await res.text()}`;
      }
    }

    return new Response(JSON.stringify({ track, artist, artwork, provider, debug: debugInfo }), {
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Metadata fetch failed', debug: err.message }), { status: 500, headers: {'Content-Type': 'application/json'} });
  }
}
