export async function onRequest(context) {
  const { request, env, params } = context;
  const filename = decodeURIComponent(params.file);
  const url = new URL(request.url);

  if (filename === 'Spirit - Niemad Kan me Remmen.mp4' || filename === 'Spirit - Niemand Kan me Remmen.mp4') {
    const cf = request.cf || {};
    const country = cf.country;
    const userIp = request.headers.get('cf-connecting-ip') || 'unknown';
    const token = url.searchParams.get('token');
    const expectedToken = btoa(userIp + 'CUNO_DOESNT_CARE_2026');

    // 1. Cryptographic IP Binding (Kills VPN shifting and hotlinking)
    if (!token || token !== expectedToken) {
      return new Response('403 Forbidden - Invalid Session Token', { 
        status: 403,
        headers: { 'Cache-Control': 'private, no-store, no-cache, max-age=0' }
      });
    }

    // 2. Blacklist: Known VPNs, Datacentres, and Transit infrastructure
    const asnOrg = (cf.asOrganization || '').toUpperCase();
    const blockList = [
      'PROTON', 'MULLVAD', 'NORD', 'EXPRESS', 'SURFSHARK', 'CYBERGHOST', 'IVPN',
      'VPN', 'PROXY', 'TOR', 'ANONYMOUS', 'HOSTING', 'DATACENTRE', 'DATACENTER',
      'CLOUD', 'VPS', 'TRANSIT', 'BACKBONE', 'IXP', 'AMAZON', 'AWS', 'GOOGLE',
      'MICROSOFT', 'AZURE', 'DIGITALOCEAN', 'HETZNER', 'OVH', 'LINODE', 'M247',
      'CHOOPA', 'LEASEWEB', 'DATAPACKET', 'COGENT', 'LUMEN', 'GTT', 'ARELION',
      'NFORCE', 'I3D', 'WORLDSTREAM', 'CLOUVIDER', 'PACKETHUB', 'XTOM', 'SPEEDYNET'
    ];
    const isBlocked = blockList.some(keyword => asnOrg.includes(keyword));

    // 3. Exhaustive Whitelist: Major EU Consumer Residential ISPs
    const isVerifiedISP = [
      'PROXIMUS', 'BELGACOM', 'TELENET', 'VOO', 'ORANGE', 'SCARLET', // BE
      'KPN', 'ZIGGO', 'LIBERTY GLOBAL', 'VODAFONE', 'T-MOBILE', 'TELE2', 'DELTA', 'CAIW', // NL
      'DEUTSCHE TELEKOM', 'TELEFONICA', '1&1', 'O2', 'FREE', 'SFR', 'BOUYGUES', 'NUMERICABLE', // DE/FR
      'TIM', 'TELECOM ITALIA', 'WINDTRE', 'FASTWEB', 'ILIAD', // IT
      'MOVISTAR', 'MASMOVIL', 'JAZZTEL', // ES
      'TELIA', 'TELENOR', 'TRE', 'ELISA', 'DNA', 'ALTIBOX', 'BAHNHOF', // Nordics
      'EIR', 'VIRGIN', 'SKY', // IE/UK/EU
      'A1', 'MAGENTA', 'DREI', // AT
      'PLAY', 'PLUS' // PL
    ].some(isp => asnOrg.includes(isp));

    // Full 27 EU Member States
    const euCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'];
    
    // 4. Execution: Default-Deny Architecture
    if (!euCountries.includes(country) || cf.isTor || isBlocked || !isVerifiedISP) {
      return new Response('403 Forbidden - Geo/Proxy Block', { 
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
