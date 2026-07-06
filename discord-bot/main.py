import discord
import os
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS
from threading import Thread

load_dotenv()

# Keep-alive web server
app = Flask('')
CORS(app)

@app.route('/')
def home():
    return "Bot is alive!"

import time
import asyncio

profile_cache = {}

async def fetch_profile_safe(user_id):
    now = time.time()
    if user_id in profile_cache and (now - profile_cache[user_id]['time']) < 3600:
        return profile_cache[user_id]['profile']
    try:
        profile = await client.fetch_user_profile(user_id)
        profile_cache[user_id] = {'time': now, 'profile': profile}
        return profile
    except Exception as e:
        print(f"Failed to fetch profile for {user_id}: {e}")
        return None

def extract_user_data(user, is_friend, friend_since, profile=None):
    badges = []
    flags = getattr(user, 'public_flags', None)
    if flags:
        if getattr(flags, 'staff', False): badges.append("staff.svg")
        if getattr(flags, 'partner', False): badges.append("partner.svg")
        if getattr(flags, 'hypesquad', False): badges.append("hypesquad_events.svg")
        if getattr(flags, 'bug_hunter', False): badges.append("bug_hunter.svg")
        if getattr(flags, 'hypesquad_bravery', False): badges.append("hypesquad_bravery.svg")
        if getattr(flags, 'hypesquad_brilliance', False): badges.append("hypesquad_brilliance.svg")
        if getattr(flags, 'hypesquad_balance', False): badges.append("hypesquad_balance.svg")
        if getattr(flags, 'early_supporter', False): badges.append("early_supporter.svg")
        if getattr(flags, 'bug_hunter_level_2', False): badges.append("bug_hunter_level_2.svg")
        if getattr(flags, 'verified_bot_developer', False): badges.append("verified_bot_developer.svg")
        if getattr(flags, 'discord_certified_moderator', False): badges.append("discord-mod.svg")
        if getattr(flags, 'active_developer', False): badges.append("active-developer.svg")
        
    is_nitro = False
    if getattr(user, 'premium_since', None): is_nitro = True
    elif user.avatar and user.avatar.is_animated(): is_nitro = True
    elif getattr(user, 'banner', None): is_nitro = True
    
    if profile:
        if getattr(profile, 'premium_since', None): is_nitro = True
        if getattr(profile, 'premium_guild_since', None): is_nitro = True
        if getattr(profile, 'legacy_username', None): badges.append("username.png")
        
        for b in profile.badges:
            bid = str(getattr(b, 'id', '')).lower()
            desc = str(getattr(b, 'description', '')).lower()
            if 'legacy' in bid or 'legacy' in desc: badges.append("username.png")
            elif 'quest' in bid or 'quest' in desc: badges.append("quest.svg")
            elif 'orb' in bid or 'orb' in desc: badges.append("orb.svg")
            elif 'gifting' in bid or 'cadeau' in desc or 'gift' in desc:
                if 'mecenas' in desc or 'patron' in desc: badges.append("patron.png")
                elif 'kampioen' in desc or 'champion' in desc: badges.append("champion.png")
                elif 'held' in desc or 'hero' in desc: badges.append("hero.png")
                elif 'grootheid' in desc or 'luminary' in desc: badges.append("luminary.png")
                elif 'icoon' in desc or 'icon' in desc or 'legend' in desc or 'legende' in desc: badges.append("legend.png")
                else: badges.append("champion.png")
            elif 'champion' in bid or 'champion' in desc: badges.append("champion.png")
            elif 'hero' in bid or 'hero' in desc: badges.append("hero.png")
            elif 'legend' in bid or 'legend' in desc: badges.append("legend.png")
            elif 'luminary' in bid or 'luminary' in desc: badges.append("luminary.png")
            elif 'patron' in bid or 'patron' in desc: badges.append("patron.png")

    if is_nitro:
        badges.append("premium.svg")
        
    # Remove duplicates preserving order
    badges = list(dict.fromkeys(badges))
        
    avatar_url = str(user.avatar.url) if user.avatar else str(user.default_avatar.url)
    return {
        "id": str(user.id),
        "user_id": str(user.id),
        "username": user.name,
        "display_name": user.display_name,
        "avatar_url": avatar_url,
        "is_friend": is_friend,
        "friend_since": friend_since,
        "badges": badges
    }

@app.route('/api/search_members', methods=['GET'])
def search_members():
    q = request.args.get('q', '').lower()
    if not q:
        return jsonify([])

    members = []
    seen_ids = set()

    def add_user_to_results(user, is_friend, friend_since):
        if user.id in seen_ids:
            return
        seen_ids.add(user.id)
        members.append(extract_user_data(user, is_friend, friend_since))

    # 1. Search in guild members
    guild_id = 238393736478851074
    guild = client.get_guild(guild_id)
    if guild:
        for member in guild.members:
            if q in member.name.lower() or q in member.display_name.lower():
                relationship = next((r for r in client.friends if r.user.id == member.id), None)
                is_friend = relationship is not None
                friend_since = relationship.since.isoformat() if relationship and relationship.since else None
                add_user_to_results(member, is_friend, friend_since)
                if len(members) >= 15:
                    break

    # 2. Search in client's friends list
    if len(members) < 15:
        for relationship in client.friends:
            friend_user = relationship.user
            if q in friend_user.name.lower() or q in friend_user.display_name.lower():
                is_friend = True
                friend_since = relationship.since.isoformat() if relationship.since else None
                add_user_to_results(friend_user, is_friend, friend_since)
                if len(members) >= 15:
                    break

    return jsonify(members)

@app.route('/api/get_users', methods=['GET'])
def get_users():
    ids_str = request.args.get('ids', '')
    if not ids_str:
        return jsonify([])
    
    user_ids = [int(i.strip()) for i in ids_str.split(',') if i.strip().isdigit()]
    users_data = []
    
    for uid in user_ids:
        user = client.get_user(uid)
        if user:
            future = asyncio.run_coroutine_threadsafe(fetch_profile_safe(uid), client.loop)
            try:
                profile = future.result(timeout=10)
            except Exception as e:
                print(f"Timeout fetching profile: {e}")
                profile = None
                
            relationship = next((r for r in client.friends if r.user.id == user.id), None)
            is_friend = relationship is not None
            friend_since = relationship.since.isoformat() if relationship and relationship.since else None
            
            users_data.append(extract_user_data(user, is_friend, friend_since, profile))
            
    return jsonify(users_data)

def run_server():
    # Use standard HTTP port 3000
    app.run(host='0.0.0.0', port=3000)

def keep_alive():
    t = Thread(target=run_server)
    t.start()

# Discord Bot Setup
class MyClient(discord.Client):
    async def on_ready(self):
        print(f'Logged in as {self.user}')
        print(f'Latency: {round(self.latency * 1000)}ms')

client = MyClient()

if __name__ == '__main__':
    # Start the web server
    keep_alive()
    
    # Start the bot
    token = os.getenv('DISCORD_TOKEN')
    if token:
        try:
            client.run(token)
        except Exception as e:
            print(f"Error starting the bot: {e}")
    else:
        print("DISCORD_TOKEN not found in environment variables.")
