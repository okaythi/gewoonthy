export async function onRequest(context) {
  const { request, next, env } = context;
  const url = new URL(request.url);

  // Read cookies
  const cookieString = request.headers.get('Cookie') || '';
  const cookies = {};
  cookieString.split(';').forEach(cookie => {
    const parts = cookie.split('=');
    cookies[parts[0].trim()] = (parts[1] || '').trim();
  });

  const authToken = cookies['sb-auth-token'];

  if (!authToken) {
    // No session token -> unauthenticated
    return Response.redirect(`${url.origin}/`, 302);
  }

  const jwtSecret = env.SUPABASE_JWT_SECRET;
  if (!jwtSecret) {
    // Fallback if secret is missing (though user said it is set)
    console.warn('SUPABASE_JWT_SECRET is missing');
    return Response.redirect(`${url.origin}/`, 302);
  }

  try {
    const parts = authToken.split('.');
    if (parts.length !== 3) throw new Error('Invalid token');
    
    const [header, payload, signature] = parts;
    
    // 1. Verify Signature
    const encoder = new TextEncoder();
    const data = encoder.encode(`${header}.${payload}`);
    const key = await crypto.subtle.importKey(
      'raw',
      encoder.encode(jwtSecret),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['verify']
    );
    
    const sigBytes = atob(signature.replace(/-/g, '+').replace(/_/g, '/'));
    const sigArray = new Uint8Array(sigBytes.length);
    for (let i = 0; i < sigBytes.length; i++) {
      sigArray[i] = sigBytes.charCodeAt(i);
    }
    
    const isValid = await crypto.subtle.verify('HMAC', key, sigArray, data);
    if (!isValid) {
      return Response.redirect(`${url.origin}/`, 302);
    }

    // 2. Decode payload & Check expiration
    const jsonPayload = decodeURIComponent(atob(payload.replace(/-/g, '+').replace(/_/g, '/')).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const parsedPayload = JSON.parse(jsonPayload);
    
    const currentTimestamp = Math.floor(Date.now() / 1000);
    if (parsedPayload.exp && parsedPayload.exp < currentTimestamp) {
      return Response.redirect(`${url.origin}/`, 302);
    }
    
    // Pass to the page
    return await next();
  } catch (e) {
    // Malformed token
    return Response.redirect(`${url.origin}/`, 302);
  }
}
