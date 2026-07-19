export async function onRequest(context) {
  const continent = context.request.cf?.continent;
  const isEU = continent === 'EU';

  return new Response(JSON.stringify({ isEU }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
