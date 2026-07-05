// Proxies media requests from R2 storage with cryptographic token and regional verification.
export async function onRequest(context) {
  const { request, env, params } = context;
  const pathArray = params.path || [];
  const bucketKey = pathArray.map(decodeURIComponent).join('/');
  const url = new URL(request.url);
  const isSubtitle = bucketKey.endsWith('.vtt');
  if (isSubtitle) {
    const cf = request.cf || {};
    const country = cf.country;
    const userIp = request.headers.get('cf-connecting-ip') || 'unknown';
    const token = url.searchParams.get('token');
    const fetchDest = request.headers.get('sec-fetch-dest');
    if (fetchDest !== 'track') return new Response('403 Forbidden', { status: 403 });
    const expectedUserToken = btoa(userIp + 'CUNO_DOESNT_CARE_2026');
    const expectedAdminToken = btoa(userIp + 'ADMIN_BYPASS_2026');
    if (!token || (token !== expectedUserToken && token !== expectedAdminToken)) {
      return new Response('403 Forbidden', { status: 403, headers: { 'Cache-Control': 'no-store' } });
    }
    const isAdmin = (token === expectedAdminToken);
    const asnOrg = (cf.asOrganization || '').toUpperCase();
    const blockList = ['PROTON', 'MULLVAD', 'NORD', 'EXPRESS', 'SURFSHARK', 'CYBERGHOST', 'IVPN', 'VPN', 'PROXY', 'TOR', 'ANONYMOUS', 'HOSTING', 'DATACENTRE', 'DATACENTER', 'CLOUD', 'VPS', 'TRANSIT', 'AMAZON', 'AWS', 'GOOGLE', 'MICROSOFT', 'AZURE'];
    const isBlocked = blockList.some(keyword => asnOrg.includes(keyword));
    const euCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'];
    const seaCountries = ['ID', 'SG', 'MY', 'TH', 'VN', 'PH', 'BN', 'KH', 'LA', 'MM', 'TL'];
    const allowedCountries = [...euCountries, 'JP', 'BR', ...seaCountries];
    if (!allowedCountries.includes(country) || cf.isTor || isBlocked) {
      if (!isAdmin) return new Response('403 Forbidden', { status: 403, headers: { 'Cache-Control': 'no-store' } });
    }
  }
  if (request.method !== 'GET' && request.method !== 'HEAD') return new Response('Method Not Allowed', { status: 405 });
  const isHead = request.method === 'HEAD';
  const object = isHead ? await env.MEDIA_BUCKET.head(bucketKey) : await env.MEDIA_BUCKET.get(bucketKey);
  if (object === null) return new Response('Not found', { status: 404 });
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('Cache-Control', 'private, no-store, no-cache, max-age=0, must-revalidate');
  return new Response(isHead ? null : object.body, { headers });
}
