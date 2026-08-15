import asyncio
import os
import time
import discord
from dotenv import load_dotenv

load_dotenv()
client = discord.Client()

@client.event
async def on_ready():
    try:
        activity = discord.Activity(
            type=discord.ActivityType.watching,
            name="A Movie",
            details="Watching The Matrix",
            state="Season 1 Episode 2",
            timestamps={"start": int(time.time()), "end": int(time.time()) + 3600}
        )
        await client.change_presence(activity=activity)
        print("Presence set successfully.")
    except Exception as e:
        print("Error", e)
    await asyncio.sleep(5)
    await client.close()

client.run(os.getenv('DISCORD_TOKEN'))
