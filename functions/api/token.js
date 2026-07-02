export async function onRequest(context) {
  const ip = context.request.headers.get('cf-connecting-ip') || 'unknown';
  const token = btoa(ip + 'CUNO_DOESNT_CARE_2026');
  return new Response(JSON.stringify({ token }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
