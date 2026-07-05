import discord
import os
from dotenv import load_dotenv
from flask import Flask
from threading import Thread

load_dotenv()

# Keep-alive web server
app = Flask('')

@app.route('/')
def home():
    return "Bot is alive!"

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

intents = discord.Intents.default()
client = MyClient(intents=intents)

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
