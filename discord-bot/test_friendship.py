import discord
import os
import asyncio
from dotenv import load_dotenv

load_dotenv()

class TestClient(discord.Client):
    async def on_ready(self):
        print(f'Logged in as {self.user}')
        target_id = 118125076330577925  # mug3
        relationship = next((r for r in self.friends if r.user.id == target_id), None)
        is_friend = relationship is not None
        since = relationship.since if relationship else None
        print(f"User {target_id} is_friend: {is_friend}, since: {since}")
        if is_friend:
            print("TEST PASSED: mug3 is a friend.")
        else:
            print("TEST FAILED: mug3 is NOT a friend.")
        await self.close()

client = TestClient()
token = os.getenv('DISCORD_TOKEN')
if token:
    client.run(token)
else:
    print("DISCORD_TOKEN not found.")
