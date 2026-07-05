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

@app.route('/api/search_members')
def search_members():
    q = request.args.get('q', '').lower()
    if not q:
        return jsonify([])

    guild_id = 238393736478851074
    guild = client.get_guild(guild_id)
    if not guild:
        return jsonify({"error": "Guild not found"}), 404

    members = []
    for member in guild.members:
        if q in member.name.lower() or q in member.display_name.lower():
            avatar_url = str(member.avatar.url) if member.avatar else str(member.default_avatar.url)
            members.append({
                "id": str(member.id),
                "username": member.name,
                "display_name": member.display_name,
                "avatar_url": avatar_url
            })
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
