export async function onRequest({ request }) {
  const url = new URL(request.url);
  const filename = url.searchParams.get('filename');
  if (!filename) return new Response('Missing filename', { status: 400 });
  
  const hash = url.searchParams.get('hash') || '';
  // Returns a URL that the frontend can PUT the file chunks directly into
  return new Response(JSON.stringify({ 
    uploadUrl: `/api/admin/direct-upload?key=media/${encodeURIComponent(filename)}&hash=${hash}`
  }), { headers: { 'Content-Type': 'application/json' } });
}
