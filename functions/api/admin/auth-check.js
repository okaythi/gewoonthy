export async function onRequest({ request }) {
  const url = new URL(request.url);
  const redirectUrl = url.searchParams.get('redirect') || '/dashboard/';
  
  // This endpoint is protected by CF Access. If the user reaches here,
  // they have successfully authenticated. We can safely redirect them back.
  return Response.redirect(new URL(redirectUrl, request.url).toString(), 302);
}
