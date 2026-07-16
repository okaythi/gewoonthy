import { env } from "cloudflare:workers";

export const GET = async ({ request, cookies }) => {
  const cookieStr = request.headers.get('cookie') || '';
  const match = cookieStr.match(/sudothy_session=([^;]+)/);
  let username = 'guest';
  if (match) {
    try {
      const session = JSON.parse(decodeURIComponent(match[1]));
      username = session.user.username;
    } catch(e) {}
  }

  if (username === 'guest') {
    return new Response(JSON.stringify({ projects: [] }), { headers: { 'Content-Type': 'application/json' } });
  }

  // use global env

  try {
    const res = await env.user_data.prepare('SELECT project_id, timestamp FROM recent_projects WHERE username = ? ORDER BY timestamp DESC LIMIT 20').bind(username).all();
    return new Response(JSON.stringify({ projects: res.results }), { headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const POST = async ({ request, cookies }) => {
  const body = await request.json();
  const { project_id } = body;

  if (!project_id) {
    return new Response(JSON.stringify({ error: 'Missing project_id' }), { status: 400 });
  }

  const cookieStr = request.headers.get('cookie') || '';
  const match = cookieStr.match(/sudothy_session=([^;]+)/);
  let username = 'guest';
  if (match) {
    try {
      const session = JSON.parse(decodeURIComponent(match[1]));
      username = session.user.username;
    } catch(e) {}
  }

  if (username === 'guest') {
    // We don't save recents for guest
    return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
  }

  // use global env

  try {
    await env.user_data.prepare('INSERT OR REPLACE INTO recent_projects (username, project_id, timestamp) VALUES (?, ?, CURRENT_TIMESTAMP)').bind(username, project_id).run();
    return new Response(JSON.stringify({ success: true }), { headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
