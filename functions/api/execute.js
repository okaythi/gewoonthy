import { Permissions } from '../../lib/Permissions.js';

const commandManifest = {
  'help': { owner: 'root', group: 'root', perms: 777 },
  'about': { owner: 'root', group: 'root', perms: 777 },
  'clear': { owner: 'root', group: 'root', perms: 777 },
  'account': { owner: 'root', group: 'root', perms: 777 },
  'logout': { owner: 'root', group: 'root', perms: 777 },
  'projects': { owner: 'root', group: 'root', perms: 777 },
  'uptime': { owner: 'root', group: 'root', perms: 777 }
};

export async function onRequestPost({ request, env }) {
  const db = env.users;
  const authHeader = request.headers.get('Authorization');
  const sessionId = authHeader ? authHeader.replace('Bearer ', '') : null;
  
  if (!sessionId) {
    return new Response(JSON.stringify({ allowed: false, error: 'Unauthorized' }), { status: 401 });
  }

  const { results } = await db.prepare('SELECT * FROM users WHERE id = ?').bind(sessionId).all();
  if (results.length === 0) {
    return new Response(JSON.stringify({ allowed: false, error: 'User not found' }), { status: 401 });
  }
  const user = results[0];

  const body = await request.json();
  const { command } = body;

  const manifest = commandManifest[command];
  if (!manifest) {
    return new Response(JSON.stringify({ allowed: false, error: 'command not found' }), { status: 404 });
  }

  const allowed = Permissions.check(user, manifest.owner, manifest.group, manifest.perms);

  if (allowed) {
    // Update stats
    let stats = {};
    try {
      stats = JSON.parse(user.command_stats || '{}');
    } catch(e) {}
    stats[command] = (stats[command] || 0) + 1;
    await db.prepare('UPDATE users SET command_stats = ? WHERE id = ?').bind(JSON.stringify(stats), user.id).run();

    return new Response(JSON.stringify({ allowed: true }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ allowed: false, error: 'Permission denied' }), { status: 403 });
  }
};
