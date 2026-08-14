import asyncio
from typing import Callable, Coroutine, Dict, List, Optional, Any
import discord

class CommandContext:
    __slots__ = ("message", "client", "channel", "author", "guild", "command_name", "args", "raw_args")

    def __init__(self, message: discord.Message, client: discord.Client, command_name: str, args: List[str], raw_args: str) -> None:
        self.message = message
        self.client = client
        self.channel = message.channel
        self.author = message.author
        self.guild = message.guild
        self.command_name = command_name
        self.args = args
        self.raw_args = raw_args

    async def reply(self, content: str, **kwargs: Any) -> Optional[discord.Message]:
        try:
            return await self.channel.send(content, **kwargs)
        except Exception:
            return None

    async def react_success(self) -> None:
        try:
            await self.message.add_reaction("✅")
        except Exception:
            pass

    async def react_fail(self) -> None:
        try:
            await self.message.add_reaction("❌")
        except Exception:
            pass

    async def delete_trigger(self) -> None:
        try:
            await self.message.delete()
        except Exception:
            pass

class Command:
    __slots__ = ("name", "callback", "aliases", "description", "usage")

    def __init__(self, name: str, callback: Callable[..., Coroutine[Any, Any, Any]], aliases: Optional[List[str]] = None, description: str = "", usage: str = "") -> None:
        self.name = name.lower()
        self.callback = callback
        self.aliases = [a.lower() for a in (aliases or [])]
        self.description = description
        self.usage = usage

    async def invoke(self, ctx: CommandContext) -> Any:
        return await self.callback(ctx, *ctx.args)

class CommandEngine:
    __slots__ = ("client", "prefix", "commands", "reaction_manager", "spotify_player")

    def __init__(self, client: discord.Client, prefix: str = ".") -> None:
        self.client = client
        self.prefix = prefix
        self.commands: Dict[str, Command] = {}
        self.reaction_manager: Any = None
        self.spotify_player: Any = None

    def command(self, name: str, aliases: Optional[List[str]] = None, description: str = "", usage: str = "") -> Callable[[Callable[..., Coroutine[Any, Any, Any]]], Callable[..., Coroutine[Any, Any, Any]]]:
        def decorator(func: Callable[..., Coroutine[Any, Any, Any]]) -> Callable[..., Coroutine[Any, Any, Any]]:
            cmd = Command(name, func, aliases, description, usage)
            self.commands[cmd.name] = cmd
            for alias in cmd.aliases:
                self.commands[alias] = cmd
            return func
        return decorator

    async def process_message(self, message: discord.Message) -> bool:
        if not message.author or message.author.id != self.client.user.id:
            return False

        content = message.content.strip()
        if not content.startswith(self.prefix):
            return False

        body = content[len(self.prefix):].strip()
        if not body:
            return False

        parts = body.split()
        cmd_name = parts[0].lower()
        args = parts[1:]
        raw_args = body[len(cmd_name):].strip()

        cmd = self.commands.get(cmd_name)
        if not cmd:
            return False

        ctx = CommandContext(message, self.client, cmd_name, args, raw_args)
        
        try:
            await cmd.invoke(ctx)
            return True
        except TypeError:
            await ctx.react_fail()
            await ctx.reply(f"⚠️ **Usage**: `.{cmd.name} {cmd.usage}`")
            return False
        except Exception:
            await ctx.react_fail()
            return False
