import asyncio
import os
import discord
from dotenv import load_dotenv

load_dotenv()
client = discord.Client()

@client.event
async def on_ready():
    try:
        user = await client.fetch_user_profile(1339570380943261697)
        for b in getattr(user, 'badges', []):
            print(b.id, getattr(b, '_icon', ''), getattr(b, 'url', ''))
    except Exception as e:
        print("Error", e)
    await client.close()

client.run(os.getenv('DISCORD_TOKEN'))
