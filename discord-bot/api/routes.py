import asyncio
import time
from typing import Dict, Any, Optional
from flask import request, jsonify
from api.server import app
import discord
from utils.discord_data import extract_user_data

profile_cache: Dict[int, Dict[str, Any]] = {}

async def fetch_profile_safe(client: discord.Client, user_id: int) -> Optional[Any]:
    now = time.time()
    if user_id in profile_cache and (now - profile_cache[user_id]['time']) < 3600:
        return profile_cache[user_id]['profile']
    try:
        profile = await client.fetch_user_profile(user_id)
        profile_cache[user_id] = {'time': now, 'profile': profile}
        return profile
    except Exception:
        return None

def register_routes(client: discord.Client) -> None:
    @app.route('/')
    def home():
        return "Bot is alive!"

    @app.route('/api/me', methods=['GET'])
    def get_me():
        guild = client.get_guild(238393736478851074)
        member = guild.get_member(client.user.id) if guild else None
        return jsonify({
            "username": client.user.name,
            "display_name": client.user.display_name,
            "avatar_url": str(client.user.avatar.url) if client.user.avatar else str(client.user.default_avatar.url),
            "status": str(member.status) if member else 'offline'
        })

    @app.route('/api/search_members', methods=['GET'])
    def search_members():
        q = request.args.get('q', '').lower()
        if not q: return jsonify([])

        members = []
        seen_ids = set()

        def add_user(user: Any, is_friend: bool, friend_since: Optional[str]) -> None:
            if user.id in seen_ids: return
            seen_ids.add(user.id)
            members.append(extract_user_data(user, is_friend, friend_since))

        guild = client.get_guild(238393736478851074)
        if guild:
            for member in guild.members:
                if q in member.name.lower() or q in member.display_name.lower():
                    rel = next((r for r in getattr(client, "friends", []) if r.user.id == member.id), None)
                    add_user(member, rel is not None, rel.since.isoformat() if rel and rel.since else None)
                    if len(members) >= 15: break

        if len(members) < 15:
            for rel in getattr(client, "friends", []):
                if q in rel.user.name.lower() or q in rel.user.display_name.lower():
                    add_user(rel.user, True, rel.since.isoformat() if rel.since else None)
                    if len(members) >= 15: break

        return jsonify(members)

    @app.route('/api/commands', methods=['GET'])
    def get_commands():
        if not hasattr(client, 'command_engine'):
            return jsonify([])
        
        engine = client.command_engine
        unique_cmds = []
        seen = set()
        
        for name, cmd in engine.commands.items():
            if cmd.name not in seen:
                seen.add(cmd.name)
                unique_cmds.append({
                    "name": cmd.name,
                    "aliases": cmd.aliases,
                    "description": cmd.description,
                    "usage": cmd.usage
                })
                
        return jsonify(unique_cmds)

    @app.route('/api/get_users', methods=['GET'])
    def get_users():
        ids_str = request.args.get('ids', '')
        if not ids_str: return jsonify([])
        
        users_data = []
        for uid in [int(i.strip()) for i in ids_str.split(',') if i.strip().isdigit()]:
            user = client.get_user(uid)
            if user:
                try:
                    profile = asyncio.run_coroutine_threadsafe(fetch_profile_safe(client, uid), client.loop).result(timeout=10)
                except Exception:
                    profile = None
                rel = next((r for r in getattr(client, "friends", []) if r.user.id == user.id), None)
                users_data.append(extract_user_data(user, rel is not None, rel.since.isoformat() if rel and rel.since else None, profile))
                
        return jsonify(users_data)
