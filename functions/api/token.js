export async function onRequest(context) {
  const { request } = context;
  const cf = request.cf || {};
  const ip = request.headers.get('cf-connecting-ip') || 'unknown';
  const token = btoa(ip + 'CUNO_DOESNT_CARE_2026');

  const cookies = request.headers.get('Cookie') || '';
  const isAuthorizedAdmin = cookies.includes('thy_admin_session=VALIDATED_SECURE_ACCESS_994');

  let isBypassed = false;

  if (isAuthorizedAdmin) {
    const country = cf.country;
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

    const isVerifiedISP = [
      'PROXIMUS', 'BELGACOM', 'TELENET', 'VOO', 'ORANGE', 'SCARLET',
      'KPN', 'ZIGGO', 'LIBERTY GLOBAL', 'VODAFONE', 'T-MOBILE', 'TELE2', 'DELTA', 'CAIW',
      'DEUTSCHE TELEKOM', 'TELEFONICA', '1&1', 'O2', 'FREE', 'SFR', 'BOUYGUES', 'NUMERICABLE',
      'TIM', 'TELECOM ITALIA', 'WINDTRE', 'FASTWEB', 'ILIAD',
      'MOVISTAR', 'MASMOVIL', 'JAZZTEL',
      'TELIA', 'TELENOR', 'TRE', 'ELISA', 'DNA', 'ALTIBOX', 'BAHNHOF',
      'EIR', 'VIRGIN', 'SKY',
      'A1', 'MAGENTA', 'DREI',
      'PLAY', 'PLUS'
    ].some(isp => asnOrg.includes(isp));

    const euCountries = ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE'];

    if (!euCountries.includes(country) || cf.isTor || isBlocked || !isVerifiedISP) {
      isBypassed = true;
    }
  }

  return new Response(JSON.stringify({ token, isBypassed }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
