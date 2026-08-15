import asyncio
import aiohttp
import time
import json
import discord
import psutil
import os
from collections import deque

DASHBOARD_URL = os.getenv("DASHBOARD_URL", "https://self.sudothy.me")
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
        
        self.last_sent_message = None
        self.cached_channel_context = {"channel_name": "No recent messages", "messages": []}
        self.cached_dm_messages = []
        self.bot_status = "online"

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
            cmd_type = cmd_data.get('type')
            
            if cmd_type == 'shell':
                command_text = cmd_data.get('text', '')
                
                if command_text.startswith('.uptime'):
                    uptime_seconds = int(time.time() - getattr(self.client, "start_time", time.time()))
                    m, s = divmod(uptime_seconds, 60)
                    h, m = divmod(m, 60)
                    d, h = divmod(h, 24)
                    parts = []
                    if d > 0: parts.append(f"{d}d")
                    if h > 0: parts.append(f"{h}h")
                    if m > 0: parts.append(f"{m}m")
                    parts.append(f"{s}s")
                    self.log_command(cmd_data.get('id', 'N/A'), command_text, f"Uptime: {' '.join(parts)}", 'success')
                
                elif command_text.startswith('.git diff'):
                    import subprocess
                    cwd = os.path.join(os.path.dirname(__file__), "..", "..")
                    try:
                        res = await asyncio.to_thread(
                            subprocess.run, 
                            ["git", "--no-pager", "show", "--stat", "--format=Commit: %h | Date: %cd%nMessage: %s", "HEAD"], 
                            cwd=cwd, capture_output=True, text=True, timeout=10
                        )
                        output = res.stdout.strip() if res.returncode == 0 else res.stderr.strip()
                        self.log_command(cmd_data.get('id', 'N/A'), command_text, output, 'success' if res.returncode == 0 else 'error')
                    except Exception as e:
                        self.log_command(cmd_data.get('id', 'N/A'), command_text, str(e), 'error')
                
                else:
                    cmd_to_run = command_text[1:] if command_text.startswith('.') else command_text
                    import subprocess
                    cwd = os.path.join(os.path.dirname(__file__), "..", "..")
                    try:
                        res = await asyncio.to_thread(
                            subprocess.run, cmd_to_run, shell=True, cwd=cwd, capture_output=True, text=True, timeout=10
                        )
                        output = res.stdout.strip() if res.stdout else res.stderr.strip()
                        if not output: output = "Command executed successfully with no output."
                        self.log_command(cmd_data.get('id', 'N/A'), command_text, output, 'success' if res.returncode == 0 else 'error')
                    except Exception as e:
                        self.log_command(cmd_data.get('id', 'N/A'), command_text, str(e), 'error')
                        
            elif cmd_type == 'update_profile':
                if self.client.user:
                    edit_kwargs = {}
                    
                    if 'bio' in cmd_data:
                        edit_kwargs['bio'] = cmd_data['bio']
                        
                    primary_hex = str(cmd_data.get('bannerColor', '')).replace('#', '')
                    accent_hex = str(cmd_data.get('accentColor', '')).replace('#', '')
                    
                    if primary_hex and accent_hex:
                        try:
                            primary_int = int(primary_hex, 16)
                            accent_int = int(accent_hex, 16)
                            await self.client.http.edit_profile({"theme_colors": [primary_int, accent_int]})
                        except Exception as e:
                            self.log_command(str(time.time()), 'update_profile', f'Theme color error: {e}', 'error')
                    
                    status_str = cmd_data.get('status')
                    if status_str:
                        status_enum = getattr(discord.Status, status_str, discord.Status.online)
                        await self.client.change_presence(status=status_enum)
                        self.bot_status = status_str
                                
                    avatar_url = cmd_data.get('avatarUrl')
                    if avatar_url == '':
                        edit_kwargs['avatar'] = None
                    elif avatar_url and 'cdn.discordapp.com' not in avatar_url:
                        try:
                            async with self.session.get(avatar_url) as resp:
                                if resp.status == 200:
                                    edit_kwargs['avatar'] = await resp.read()
                        except Exception as e:
                            self.log_command(str(time.time()), 'update_profile', f'Failed to download avatar: {e}', 'error')
                            
                    banner_url = cmd_data.get('bannerUrl')
                    if banner_url == '':
                        edit_kwargs['banner'] = None
                    elif banner_url and 'cdn.discordapp.com' not in banner_url:
                        try:
                            async with self.session.get(banner_url) as resp:
                                if resp.status == 200:
                                    edit_kwargs['banner'] = await resp.read()
                        except Exception as e:
                            self.log_command(str(time.time()), 'update_profile', f'Failed to download banner: {e}', 'error')
                            
                    if edit_kwargs:
                        try:
                            await self.client.user.edit(**edit_kwargs)
                            self.log_command(str(time.time()), 'update_profile', 'Profile updated successfully.', 'success')
                        except Exception as e:
                            self.log_command(str(time.time()), 'update_profile', f'Discord API Error: {e}', 'error')
                else:
                    self.log_command(str(time.time()), 'update_profile', 'Client user not ready.', 'error')
                    
            elif cmd_type == 'fetch_channel_context':
                msg = getattr(self, 'last_sent_message', None)
                if msg and msg.channel:
                    try:
                        before = [m async for m in msg.channel.history(limit=18, before=msg)]
                        after = [m async for m in msg.channel.history(limit=11, after=msg)]
                        all_msgs = list(reversed(before)) + [msg] + after
                        
                        formatted = []
                        for m in all_msgs:
                            formatted.append({
                                "id": str(m.id),
                                "author": m.author.name,
                                "color": str(m.author.color) if hasattr(m.author, 'color') else '#ffffff',
                                "avatar": str(m.author.display_avatar.url) if m.author.display_avatar else "https://cdn.discordapp.com/embed/avatars/0.png",
                                "content": m.content,
                                "time": m.created_at.strftime('%H:%M'),
                                "isBot": m.author.id == self.client.user.id
                            })
                        
                        self.cached_channel_context = {
                            "channel_name": getattr(msg.channel, 'name', 'Unknown'),
                            "messages": formatted
                        }
                    except Exception as e:
                        pass
                        
            elif cmd_type == 'fetch_dm_messages':
                channel_id = int(cmd_data.get('channel_id', 0))
                channel = self.client.get_channel(channel_id)
                if channel:
                    try:
                        msgs = [m async for m in channel.history(limit=22)]
                        formatted = []
                        for m in reversed(msgs):
                            formatted.append({
                                "id": str(m.id),
                                "author": m.author.name,
                                "avatar": str(m.author.display_avatar.url) if m.author.display_avatar else "https://cdn.discordapp.com/embed/avatars/0.png",
                                "content": m.content,
                                "time": m.created_at.strftime('%H:%M'),
                                "isBot": m.author.id == self.client.user.id
                            })
                        self.cached_dm_messages = formatted
                    except Exception:
                        pass
                        
            elif cmd_type == 'send_dm_message':
                channel_id = int(cmd_data.get('channel_id', 0))
                content = cmd_data.get('content', '')
                channel = self.client.get_channel(channel_id)
                if channel and content:
                    await channel.send(content)
                    # Automatically fetch messages again to update view
                    cmd['command'] = json.dumps({'type': 'fetch_dm_messages', 'channel_id': str(channel_id)})
                    await self._execute_command(cmd)
        except Exception as e:
            pass

    async def push_state(self):
        if not self.client.user: return
        
        process = psutil.Process(os.getpid())
        ram_mb = process.memory_info().rss / (1024 * 1024)
        
        # fetch recent DMs
        recent_dms_list = []
        try:
            sorted_dms = sorted(self.client.private_channels, key=lambda c: getattr(c, 'last_message_id', 0) or 0, reverse=True)[:6]
            for dm in sorted_dms:
                target = getattr(dm, 'recipient', None)
                if not target and hasattr(dm, 'recipients') and dm.recipients:
                    target = dm.recipients[0]
                if target:
                    recent_dms_list.append({
                        "id": str(dm.id),
                        "name": getattr(target, 'name', 'Unknown User'),
                        "avatar": str(target.display_avatar.url) if getattr(target, 'display_avatar', None) else "https://cdn.discordapp.com/embed/avatars/0.png"
                    })
        except Exception as e:
            self.log_command(str(time.time()), 'push_state (fetch dms)', f'Failed to fetch DMs: {e}', 'error')
            
            
        state_data = [
            {"key": "bot_username", "value": self.client.user.name},
            {"key": "bot_display_name", "value": getattr(self.client.user, 'display_name', self.client.user.name)},
            {"key": "bot_pfp", "value": str(self.client.user.display_avatar.url) if self.client.user.display_avatar else None},
            {"key": "bot_banner", "value": str(self.client.user.banner.url) if getattr(self.client.user, 'banner', None) else None},
            {"key": "bot_banner_color", "value": str(self.client.user.accent_colour) if getattr(self.client.user, 'accent_colour', None) else '#000000'},
            {"key": "bot_bio", "value": getattr(self.client.user, 'bio', '')},
            {"key": "bot_status", "value": self.bot_status},
            {"key": "bot_latency", "value": round(self.client.latency * 1000)},
            {"key": "bot_ram_usage", "value": round(ram_mb, 1)},
            {"key": "bot_console_history", "value": list(self.console_history)},
            
            {"key": "bot_channel_context", "value": self.cached_channel_context},
            {"key": "bot_recent_dms_list", "value": recent_dms_list},
            {"key": "bot_active_dm_messages", "value": self.cached_dm_messages}
        ]
        
        try:
            async with self.session.post(f"{DASHBOARD_URL}/api/push-state", json=state_data) as resp:
                if resp.status != 200:
                    text = await resp.text()
                    print(f"Push state failed: {resp.status} - {text}")
        except Exception as e:
            print(f"Exception in push_state: {e}")
