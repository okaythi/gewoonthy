import asyncio
import aiohttp
import time
import json
import discord

DASHBOARD_URL = "https://selfdash.pages.dev" # Change to local for dev if needed
API_TOKEN = "SUPER_SECRET_TOKEN" # In a real app this should be an env var

class DashboardBridge:
    __slots__ = ("client", "session", "polling_task")

    def __init__(self, client: discord.Client):
        self.client = client
        self.session = aiohttp.ClientSession(
            headers={"Authorization": f"Bearer {API_TOKEN}", "Content-Type": "application/json"}
        )
        self.polling_task = asyncio.create_task(self._poll_commands())

    async def _poll_commands(self):
        """Polls Cloudflare D1 for commands every 1.89 seconds."""
        await self.client.wait_until_ready()
        while not self.client.is_closed():
            try:
                # Poll logic here...
                async with self.session.get(f"{DASHBOARD_URL}/api/poll-commands", timeout=5) as resp:
                    if resp.status == 200:
                        data = await resp.json()
                        commands = data.get("commands", [])
                        for cmd in commands:
                            await self._execute_command(cmd)
            except Exception:
                pass # Ignore polling errors
            
            await asyncio.sleep(1.89)

    async def _execute_command(self, cmd: dict):
        # Handle parsed command (e.g. send DM, update profile)
        pass

    async def push_state(self):
        """Instantly pushes bot state (profile, status) to dashboard."""
        if not self.client.user: return
        
        state_data = [
            {"key": "bot_username", "value": self.client.user.name},
            {"key": "bot_display_name", "value": self.client.user.display_name},
            {"key": "bot_pfp", "value": str(self.client.user.display_avatar.url) if self.client.user.display_avatar else None},
            {"key": "bot_status", "value": "online"}, # Replace with actual status tracking
            {"key": "bot_latency", "value": round(self.client.latency * 1000)}
        ]
        
        try:
            async with self.session.post(f"{DASHBOARD_URL}/api/push-state", json=state_data) as resp:
                pass
        except Exception:
            pass
