import asyncio
import aiohttp
import time
import json
import discord
import psutil
import os
from collections import deque

DASHBOARD_URL = os.getenv("DASHBOARD_URL", "https://selfdash.pages.dev")
API_TOKEN = os.getenv("DASHBOARD_API_TOKEN", "SUPER_SECRET_TOKEN")

class DashboardBridge:
    __slots__ = ("client", "session", "polling_task", "console_history", "recent_messages", "recent_dms")

    def __init__(self, client: discord.Client):
        self.client = client
        self.session = None
        self.console_history = deque(maxlen=50)
        self.recent_messages = deque(maxlen=20)
        self.recent_dms = deque(maxlen=20)
        self.polling_task = None

    def start(self):
        if self.session is None:
            self.session = aiohttp.ClientSession(
                headers={
                    "Authorization": f"Bearer {API_TOKEN}", 
                    "Content-Type": "application/json",
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
                }
            )
        if self.polling_task is None:
            self.polling_task = asyncio.create_task(self._poll_commands())

    def log_command(self, cmd_id: str, cmd_text: str, output: str, status: str):
        self.console_history.append({"id": cmd_id, "cmd": cmd_text, "output": output, "status": status})

    async def _poll_commands(self):
        await self.client.wait_until_ready()
        while not self.client.is_closed():
            try:
                async with self.session.get(f"{DASHBOARD_URL}/api/poll-commands", timeout=5) as resp:
                    if resp.status == 200:
                        data = await resp.json()
                        commands = data.get("commands", [])
                        for cmd in commands:
                            await self._execute_command(cmd)
            except Exception:
                pass
            
            await self.push_state()
            await asyncio.sleep(1.89)

    async def _execute_command(self, cmd: dict):
        try:
            cmd_data = json.loads(cmd['command'])
            if cmd_data.get('type') == 'shell':
                self.log_command(cmd_data.get('id', 'N/A'), cmd_data.get('text', ''), 'Command executed on bot.', 'success')
            elif cmd_data.get('type') == 'update_profile':
                if self.client.user:
                    await self.client.user.edit(bio=cmd_data.get('bio', ''))
                self.log_command(str(time.time()), 'update_profile', 'Profile bio updated.', 'success')
        except Exception as e:
            pass

    async def push_state(self):
        if not self.client.user: return
        
        process = psutil.Process(os.getpid())
        ram_mb = process.memory_info().rss / (1024 * 1024)
        
        state_data = [
            {"key": "bot_username", "value": self.client.user.name},
            {"key": "bot_display_name", "value": getattr(self.client.user, 'display_name', self.client.user.name)},
            {"key": "bot_pfp", "value": str(self.client.user.display_avatar.url) if self.client.user.display_avatar else None},
            {"key": "bot_bio", "value": getattr(self.client.user, 'bio', '')},
            {"key": "bot_status", "value": "online"},
            {"key": "bot_latency", "value": round(self.client.latency * 1000)},
            {"key": "bot_ram_usage", "value": round(ram_mb, 1)},
            {"key": "bot_console_history", "value": list(self.console_history)},
            {"key": "bot_recent_messages", "value": list(self.recent_messages)},
            {"key": "bot_recent_dms", "value": list(self.recent_dms)}
        ]
        
        try:
            async with self.session.post(f"{DASHBOARD_URL}/api/push-state", json=state_data) as resp:
                if resp.status != 200:
                    text = await resp.text()
                    print(f"Push state failed: {resp.status} - {text}")
        except Exception as e:
            print(f"Exception in push_state: {e}")
