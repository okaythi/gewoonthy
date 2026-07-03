const ADMIN_PAYLOAD = `
<div id="secure-admin-context">
  <button id="admin-trigger" class="admin-trigger-btn" aria-label="System Override">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14.5 13.5L21 7l-3-3-6.5 6.5M10.5 17.5L3 21l2.5-7.5L10 9l4 4-3.5 4.5z"/>
      <path d="M16 8l-2 2M9 11l-2 2"/>
    </svg>
  </button>

  <div id="admin-dashboard" class="admin-panel">
    <div class="admin-content">
      <div class="admin-header">
        <h3>SYSTEM OVERRIDE</h3>
        <button id="admin-close" class="admin-close-btn">✕</button>
      </div>
      
      <div class="admin-grid">
        <div class="admin-card">
          <h4>Media Vault</h4>
          <button class="admin-action">Upload New Video</button>
          <button class="admin-action danger">Purge Bucket Cache</button>
        </div>
        <div class="admin-card">
          <h4>Geo-Fencing Framework</h4>
          <div class="admin-toggle"><span>EU Universal Block</span><div class="toggle-switch active"></div></div>
          <div class="admin-toggle"><span>VPN/Proxy Interrogator</span><div class="toggle-switch active"></div></div>
          <button class="admin-action" style="margin-top: 1rem;">View Audit Logs</button>
        </div>
        <div class="admin-card">
          <h4>Quote Engine</h4>
          <button class="admin-action">Edit Active Quote</button>
          <button class="admin-action">Rotate Quote Library</button>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .admin-trigger-btn { position: fixed; top: 3dvh; left: 3vw; z-index: 9999; background: none; border: none; padding: 8px; cursor: pointer; color: #444; transition: color 0.3s ease, transform 0.2s ease; outline: none; }
  .admin-trigger-btn:hover { color: #fff; transform: scale(1.1) rotate(-5deg); }
  .admin-trigger-btn svg { width: 24px; height: 24px; }
  .admin-panel { position: fixed; top: 0; left: 0; width: 100vw; height: 100dvh; background: rgba(5, 5, 5, 0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); z-index: 10000; display: flex; flex-direction: column; align-items: center; justify-content: center; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
  .admin-panel.active { opacity: 1; pointer-events: all; }
  .admin-content { background: #0a0a0a; border: 1px solid #222; border-radius: 4px; width: 90%; max-width: 800px; max-height: 85dvh; overflow-y: auto; padding: 2rem; box-shadow: 0 20px 50px rgba(0,0,0,0.5); font-family: ui-sans-serif, system-ui, -apple-system, sans-serif; color: #d9d9d9; text-align: left;}
  .admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; border-bottom: 1px solid #333; padding-bottom: 1rem; }
  .admin-header h3 { margin: 0; font-size: 1.2rem; letter-spacing: 3px; font-weight: 900; color: #fff; }
  .admin-close-btn { background: none; border: none; color: #888; font-size: 1.5rem; cursor: pointer; transition: color 0.2s ease; }
  .admin-close-btn:hover { color: #fff; }
  .admin-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
  .admin-card { background: #111; border: 1px solid #222; padding: 1.5rem; border-radius: 2px; }
  .admin-card h4 { margin: 0 0 1rem 0; font-size: 0.85rem; color: #aaa; text-transform: uppercase; letter-spacing: 2px; }
  .admin-action { width: 100%; background: #1a1a1a; border: 1px solid #333; color: #ddd; padding: 0.75rem; margin-bottom: 0.5rem; cursor: pointer; font-family: inherit; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1px; transition: all 0.2s ease; }
  .admin-action:hover { background: #d9d9d9; color: #000; border-color: #d9d9d9; }
  .admin-action.danger { color: #ff4a4a; border-color: #4a1111; background: #1a0505; }
  .admin-action.danger:hover { background: #ff4a4a; color: #fff; }
  .admin-toggle { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-top: 1px solid #222; font-size: 0.85rem; }
  .toggle-switch { width: 40px; height: 20px; background: #333; border-radius: 10px; position: relative; cursor: pointer; }
  .toggle-switch::after { content: ''; position: absolute; top: 2px; left: 2px; width: 16px; height: 16px; background: #fff; border-radius: 50%; transition: transform 0.2s ease; }
  .toggle-switch.active { background: #fff; }
  .toggle-switch.active::after { background: #000; transform: translateX(20px); }
</style>

<script>
  (function() {
    function initAdminUI() {
      const trigger = document.getElementById('admin-trigger');
      const dashboard = document.getElementById('admin-dashboard');
      const closeBtn = document.getElementById('admin-close');
      const toggles = document.querySelectorAll('.toggle-switch');

      if (trigger && dashboard && closeBtn) {
        trigger.onclick = () => dashboard.classList.add('active');
        closeBtn.onclick = () => dashboard.classList.remove('active');
        toggles.forEach(toggle => {
          toggle.onclick = () => toggle.classList.toggle('active');
        });
      }
    }
    initAdminUI();
    document.addEventListener('astro:page-load', initAdminUI);
  })();
</script>
`;

export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // 1. THE SECRET KNOCK
  if (url.searchParams.get('system_override') === 'CUNO_DOESNT_CARE_2026') {
    url.searchParams.delete('system_override');
    return new Response('Override Accepted. Rebooting UI...', {
      status: 302,
      headers: {
        'Location': url.pathname || '/',
        'Set-Cookie': 'thy_admin_session=VALIDATED_SECURE_ACCESS_994; HttpOnly; Secure; SameSite=Strict; Max-Age=315360000; Path=/'
      }
    });
  }

  const response = await next();
  const cookies = request.headers.get('Cookie') || '';
  const isAuthorizedAdmin = cookies.includes('thy_admin_session=VALIDATED_SECURE_ACCESS_994');

  // 2. EDGE HTML INJECTION: Only appends the payload if fully authorized.
  const contentType = response.headers.get('content-type') || '';
  if (isAuthorizedAdmin && contentType.toLowerCase().includes('text/html')) {
    return new HTMLRewriter()
      .on('body', {
        element(el) {
          el.append(ADMIN_PAYLOAD, { html: true });
        }
      })
      .transform(response);
  }

  return response;
}
