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
        print("Badges:")
        for b in getattr(user, 'badges', []):
            print(getattr(b, 'id', ''), getattr(b, 'description', ''), getattr(b, 'icon', ''))
        
        print("PREMIUM:", getattr(user, 'premium_since', None))
        print("GUILD:", getattr(user, 'premium_guild_since', None))
    except Exception as e:
        print("Error", e)
    await client.close()

client.run(os.getenv('DISCORD_TOKEN'))
