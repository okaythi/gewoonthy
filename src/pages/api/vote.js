import { env } from "cloudflare:workers";

export const GET = async ({ request, cookies }) => {
  const url = new URL(request.url);
  const fileName = url.searchParams.get('file_name');
  
  if (!fileName) {
    return new Response(JSON.stringify({ error: 'Missing file_name' }), { status: 400 });
  }

  // Get user session cookie
  const cookieStr = request.headers.get('cookie') || '';
  const match = cookieStr.match(/sudothy_session=([^;]+)/);
  let username = 'guest';
  if (match) {
    try {
      const session = JSON.parse(decodeURIComponent(match[1]));
      username = session.user.username;
    } catch(e) {}
  }

  // use global env
  
  let totalLikes = 0;
  let totalDislikes = 0;
  let userLiked = false;
  let userDisliked = false;

  try {
    const sysRes = await env.system_data.prepare('SELECT likes, dislikes FROM song_votes WHERE file_name = ?').bind(fileName).first();
    if (sysRes) {
      totalLikes = sysRes.likes;
      totalDislikes = sysRes.dislikes;
    }

    if (username !== 'guest') {
      const usrRes = await env.user_data.prepare('SELECT action FROM user_song_votes WHERE username = ? AND file_name = ?').bind(username, fileName).first();
      if (usrRes) {
        if (usrRes.action === 'like') userLiked = true;
        if (usrRes.action === 'dislike') userDisliked = true;
      }
    }
    
    return new Response(JSON.stringify({ liked: userLiked, desliked: userDisliked, totalLikes, totalDislikes }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const POST = async ({ request, cookies }) => {
  const body = await request.json();
  const { file_name, action } = body; // action is 'like' or 'dislike'

  if (!file_name || !action) {
    return new Response(JSON.stringify({ error: 'Missing params' }), { status: 400 });
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
    return new Response(JSON.stringify({ error: 'Must be logged in to vote' }), { status: 403 });
  }

  // use global env

  try {
    // Determine previous action
    const usrRes = await env.user_data.prepare('SELECT action FROM user_song_votes WHERE username = ? AND file_name = ?').bind(username, file_name).first();
    const prevAction = usrRes ? usrRes.action : null;

    let likeDelta = 0;
    let dislikeDelta = 0;

    if (prevAction === action) {
      // Toggle off
      await env.user_data.prepare('DELETE FROM user_song_votes WHERE username = ? AND file_name = ?').bind(username, file_name).run();
      if (action === 'like') likeDelta = -1;
      if (action === 'dislike') dislikeDelta = -1;
    } else {
      // Upsert
      await env.user_data.prepare('INSERT OR REPLACE INTO user_song_votes (username, file_name, action) VALUES (?, ?, ?)').bind(username, file_name, action).run();
      
      if (action === 'like') {
        likeDelta = 1;
        if (prevAction === 'dislike') dislikeDelta = -1;
      }
      if (action === 'dislike') {
        dislikeDelta = 1;
        if (prevAction === 'like') likeDelta = -1;
      }
    }

    // Ensure row exists in system_data
    await env.system_data.prepare('INSERT OR IGNORE INTO song_votes (file_name, likes, dislikes) VALUES (?, 0, 0)').bind(file_name).run();

    // Update system_data
    if (likeDelta !== 0 || dislikeDelta !== 0) {
      await env.system_data.prepare('UPDATE song_votes SET likes = likes + ?, dislikes = dislikes + ? WHERE file_name = ?').bind(likeDelta, dislikeDelta, file_name).run();
    }

    const sysRes = await env.system_data.prepare('SELECT likes, dislikes FROM song_votes WHERE file_name = ?').bind(file_name).first();
    
    const isLiked = prevAction !== action && action === 'like';
    const isDisliked = prevAction !== action && action === 'dislike';

    return new Response(JSON.stringify({ 
      liked: isLiked, 
      desliked: isDisliked, 
      totalLikes: sysRes.likes, 
      totalDislikes: sysRes.dislikes 
    }), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
