export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // 1. THE SECRET KNOCK: Injecting the secure admin cookie
  if (url.searchParams.get('system_override') === 'CUNO_DOESNT_CARE_2026') {
    url.searchParams.delete('system_override');
    
    return new Response('Override Accepted. Rebooting UI...', {
      status: 302,
      headers: {
        'Location': url.pathname || '/',
        'Set-Cookie': `thy_admin_session=VALIDATED_SECURE_ACCESS_994; HttpOnly; Secure; SameSite=Strict; Max-Age=315360000; Path=/`
      }
    });
  }

  // 2. STANDARD REQUEST HANDLING
  const response = await next();
  const cookies = request.headers.get('Cookie') || '';
  const isAuthorizedAdmin = cookies.includes('thy_admin_session=VALIDATED_SECURE_ACCESS_994');

  // 3. HTML REWRITER: The Edge Gatekeeper
  if (response.headers.get('content-type')?.includes('text/html')) {
    return new HTMLRewriter()
      .on('#secure-admin-context', {
        element(el) {
          if (!isAuthorizedAdmin) {
            el.remove();
          }
        }
      })
      .transform(response);
  }

  return response;
}
