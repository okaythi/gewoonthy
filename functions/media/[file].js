export async function onRequest(context) {
  const { request, env, params } = context;
  const filename = decodeURIComponent(params.file);

  if (filename === 'Spirit - Niemad Kan me Remmen.mp4' || filename === 'Spirit - Niemand Kan me Remmen.mp4') {
    const cf = request.cf || {};
    const country = cf.country;
    
    // 1. Aggressive ASN & Threat Interrogation
    const asnOrg = (cf.asOrganization || '').toUpperCase();
    const isDatacenter = [
      'AMAZON', 'AWS', 'GOOGLE', 'MICROSOFT', 'AZURE', 'DIGITALOCEAN', 
      'HETZNER', 'OVH', 'LINODE', 'M247', 'DATACAMP', 'CHOOPA', 'LEASEWEB',
      'SERVER', 'HOSTING', 'DATACENTER', 'CLOUD', 'VPN', 'PROXY', 'VPS',
      'DATAPACKET', 'COGENT', 'LUMEN', 'GTT', 'ARELION', 'NFORCE', 'I3D', 
      'WORLDSTREAM', 'CLOUVIDER', 'PACKETHUB', 'FDCSERVERS', 'XTOM',
      'PROTON', 'MULLVAD', 'NORDVPN', 'EXPRESSVPN', 'SURFSHARK'
    ].some(keyword => asnOrg.includes(keyword));

    const euCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'];
    
    // 2. Strict Whitelist of major consumer ISPs only
    const isVerifiedISP = [
      'PROXIMUS', 'BELGACOM', 'TELENET', 'VOO', 'ORANGE', 'SCARLET', 
      'KPN', 'ZIGGO', 'LIBERTY GLOBAL', 'VODAFONE', 'T-MOBILE', 'TELE2', 'DELTA', 'CAIW', 
      'DEUTSCHE TELEKOM', 'TELEFONICA', '1&1', 'O2', 'FREE', 'SFR', 'BOUYGUES',
      'TIM', 'WINDTRE', 'FASTWEB', 'MOVISTAR', 'TELIA', 'TELENOR'
    ].some(isp => asnOrg.includes(isp));

    // 3. Nuclear Block: If it's not a verified ISP, it's a proxy.
    if (!euCountries.includes(country) || cf.isTor || isDatacenter || !isVerifiedISP) {
      return new Response('403 Forbidden', { 
        status: 403,
        headers: { 'Cache-Control': 'private, no-store, no-cache, max-age=0' }
      });
    }
  }

  // --- STANDARD STREAMING LOGIC ---
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const isHead = request.method === 'HEAD';
  const object = isHead
    ? await env.MEDIA_BUCKET.head(filename)
    : await env.MEDIA_BUCKET.get(filename, { range: request.headers });

  if (object === null) {
    return new Response('Video not found', { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  headers.set('Accept-Ranges', 'bytes');

  if (filename === 'Spirit - Niemad Kan me Remmen.mp4' || filename === 'Spirit - Niemand Kan me Remmen.mp4') {
    headers.set('Cache-Control', 'private, no-store, no-cache, max-age=0, must-revalidate');
  } else {
    headers.set('Cache-Control', 'public, s-maxage=31536000, max-age=31536000, immutable');
  }

  const hasRange = request.headers.has('range');
  const status = object.body ? (hasRange ? 206 : 200) : (isHead ? 200 : 304);

  if (hasRange && object.range) {
    headers.set('Content-Range', `bytes ${object.range.offset}-${object.range.offset + object.range.length - 1}/${object.size}`);
  }

  return new Response(isHead ? null : object.body, { headers, status });
}
