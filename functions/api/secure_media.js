export async function onRequest({ request }) {
  const url = new URL(request.url);
  const targetUrl = url.searchParams.get('url');
  const token = url.searchParams.get('token');
  const st = url.searchParams.get('st');

  if (!targetUrl || !token || !st) {
    return new Response('Missing parameters', { status: 400 });
  }

  // Header enforcement to prevent external tools from scraping
  const fetchDest = request.headers.get('Sec-Fetch-Dest');
  
  // The frontend uses JS fetch() to grab the blob, so dest is 'empty'
  if (fetchDest && fetchDest !== 'empty') {
    return new Response('Forbidden context', { status: 403 });
  }

  // Token validation
  try {
    const decodedSt = atob(st); // timestamp|ip|MONDAY_GIRL_SECURE
    const [timestampStr, ip, secret] = decodedSt.split('|');
    const timestamp = parseInt(timestampStr, 10);
    
    if (secret !== 'MONDAY_GIRL_SECURE') {
       return new Response('Invalid token signature', { status: 403 });
    }

    const now = Date.now();
    if (now - timestamp > 15000) { // 15 seconds expiration
       return new Response('Token expired. Too slow!', { status: 403 });
    }
  } catch (e) {
    return new Response('Invalid token format', { status: 403 });
  }

  // Fetch the actual media from the bucket via the original R2 worker domain
  const mediaRes = await fetch(`${targetUrl}?token=${token}`, {
    headers: {
      'User-Agent': request.headers.get('User-Agent') || 'MediaProxy/1.0',
    }
  });

  return new Response(mediaRes.body, {
    status: mediaRes.status,
    headers: {
      'Content-Type': mediaRes.headers.get('Content-Type') || 'video/mp4',
      'Cache-Control': 'no-store',
      // Ensure cross-origin isolation if needed
      'Cross-Origin-Resource-Policy': 'same-site'
    }
  });
}
