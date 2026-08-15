import time
import asyncio
import discord
from core.command_engine import CommandEngine
from core.lifecycle import LifecycleManager

class MyClient(discord.Client):
    __slots__ = ("command_engine", "reaction_manager", "dashboard_bridge", "start_time", "ready_handled")

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        from core.dashboard_bridge import DashboardBridge
        self.command_engine = CommandEngine(self, prefix=".")
        self.dashboard_bridge = DashboardBridge(self)
        self.reaction_manager = None
        self.start_time = time.time()
        self.ready_handled = False

    async def on_ready(self) -> None:
        if not self.ready_handled:
            self.ready_handled = True
            await LifecycleManager.handle_post_restart(self)
        
        self.dashboard_bridge.start()

    async def on_message(self, message: discord.Message) -> None:
        if self.reaction_manager:
            asyncio.create_task(self.reaction_manager.handle_incoming_message(message))
            
        if message.author.id == self.user.id and not isinstance(message.channel, (discord.DMChannel, discord.GroupChannel)):
            self.dashboard_bridge.last_sent_message = message
            
        await self.command_engine.process_message(message)
