export const GET = async ({ request }) => {
  const continent = request.cf?.continent;
  const isEU = continent === 'EU';

  return new Response(JSON.stringify({ isEU }), {
    headers: { 'Content-Type': 'application/json' }
  });
};
