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
        avatar_url = str(user.avatar.url) if user.avatar else str(user.default_avatar.url)
        members.append({
            "id": str(user.id),
            "username": user.name,
            "display_name": user.display_name,
            "avatar_url": avatar_url,
            "is_friend": is_friend,
            "friend_since": friend_since
        })

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
