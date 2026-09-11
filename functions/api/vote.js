async function getUsername(request, env, explicitToken = null) {
  // 1. Explicit token if provided
  const authHeader = request.headers.get('Authorization');
  const token = explicitToken || (authHeader ? authHeader.replace(/^Bearer\s+/i, '').trim() : null);
  if (token) {
    try {
      const user = await env.DB.prepare('SELECT username FROM users WHERE id = ?').bind(token).first();
      if (user && user.username) return user.username;
    } catch (e) {}
  }

  // 2. Cookie header: sudothy_session
  const cookieStr = request.headers.get('cookie') || '';
  const match = cookieStr.match(/sudothy_session=([^;]+)/);
  if (match) {
    try {
      const session = JSON.parse(decodeURIComponent(match[1]));
      if (session?.user?.username) {
        return session.user.username;
      }
      if (session?.token) {
        const user = await env.DB.prepare('SELECT username FROM users WHERE id = ?').bind(session.token).first();
        if (user && user.username) return user.username;
      }
    } catch (e) {}
  }

  return null;
}

export async function onRequestGet({ request, env }) {
  const url = new URL(request.url);
  const fileName = url.searchParams.get('file_name');
  
  if (!fileName) {
    return new Response(JSON.stringify({ error: 'Missing file_name' }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const username = await getUsername(request, env, url.searchParams.get('token'));

  let totalLikes = 0;
  let totalDislikes = 0;
  let userLiked = false;
  let userDisliked = false;

  try {
    const sysRes = await env.DB.prepare('SELECT likes, dislikes FROM song_votes WHERE file_name = ?').bind(fileName).first();
    if (sysRes) {
      totalLikes = sysRes.likes;
      totalDislikes = sysRes.dislikes;
    }

    if (username) {
      const usrRes = await env.DB.prepare('SELECT action FROM user_song_votes WHERE username = ? AND file_name = ?').bind(username, fileName).first();
      if (usrRes) {
        if (usrRes.action === 'like') userLiked = true;
        if (usrRes.action === 'dislike') userDisliked = true;
      }
    }
    
    return new Response(JSON.stringify({ 
      liked: userLiked, 
      disliked: userDisliked,
      desliked: userDisliked, 
      totalLikes, 
      totalDislikes 
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestPost({ request, env }) {
  let body;
  try {
    body = await request.json();
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid JSON body' }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const { file_name, action, token: bodyToken } = body;

  if (!file_name || !action) {
    return new Response(JSON.stringify({ error: 'Missing params' }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  if (action !== 'like' && action !== 'dislike') {
    return new Response(JSON.stringify({ error: 'Invalid action' }), { 
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const username = await getUsername(request, env, bodyToken);

  if (!username) {
    return new Response(JSON.stringify({ error: 'Must be logged in to vote' }), { 
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  try {
    // Determine previous action
    const usrRes = await env.DB.prepare('SELECT action FROM user_song_votes WHERE username = ? AND file_name = ?').bind(username, file_name).first();
    const prevAction = usrRes ? usrRes.action : null;

    let likeDelta = 0;
    let dislikeDelta = 0;

    if (prevAction === action) {
      // Toggle off
      await env.DB.prepare('DELETE FROM user_song_votes WHERE username = ? AND file_name = ?').bind(username, file_name).run();
      if (action === 'like') likeDelta = -1;
      if (action === 'dislike') dislikeDelta = -1;
    } else {
      // Upsert
      await env.DB.prepare('INSERT OR REPLACE INTO user_song_votes (username, file_name, action, timestamp) VALUES (?, ?, ?, CURRENT_TIMESTAMP)').bind(username, file_name, action).run();
      
      if (action === 'like') {
        likeDelta = 1;
        if (prevAction === 'dislike') dislikeDelta = -1;
      }
      if (action === 'dislike') {
        dislikeDelta = 1;
        if (prevAction === 'like') likeDelta = -1;
      }
    }

    // Ensure row exists in song_votes
    await env.DB.prepare('INSERT OR IGNORE INTO song_votes (file_name, likes, dislikes) VALUES (?, 0, 0)').bind(file_name).run();

    // Update song_votes with non-negative clamping
    if (likeDelta !== 0 || dislikeDelta !== 0) {
      await env.DB.prepare('UPDATE song_votes SET likes = MAX(0, likes + ?), dislikes = MAX(0, dislikes + ?) WHERE file_name = ?').bind(likeDelta, dislikeDelta, file_name).run();
    }

    const sysRes = await env.DB.prepare('SELECT likes, dislikes FROM song_votes WHERE file_name = ?').bind(file_name).first();
    
    const isLiked = prevAction !== action && action === 'like';
    const isDisliked = prevAction !== action && action === 'dislike';

    return new Response(JSON.stringify({ 
      liked: isLiked, 
      disliked: isDisliked,
      desliked: isDisliked, 
      totalLikes: sysRes ? sysRes.likes : 0, 
      totalDislikes: sysRes ? sysRes.dislikes : 0 
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
