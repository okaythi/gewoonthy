import asyncio
import discord

client = discord.Client()

@client.event
async def on_ready():
    print(f'Logged in as {client.user}')
    count = 0
    for rel in client.friends:
        user = rel.user
        try:
            profile = await client.fetch_user_profile(user.id)
            if profile.badges:
                print(f"User: {user.name}")
                for b in profile.badges:
                    print(f"  - Badge ID: {getattr(b, 'id', '')}, Desc: {getattr(b, 'description', '')}, Icon: {getattr(b, '_icon', '')}")
                count += 1
                if count > 5:
                    break
        except Exception as e:
            pass
    await client.close()

client.run('YOUR_DISCORD_TOKEN_HERE')
