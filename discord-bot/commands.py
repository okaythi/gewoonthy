"""
commands.py - High performance, decorator-driven command engine and state-of-the-art deletion/status/reaction/spotify modules for discord.py-self.
"""
from __future__ import annotations
import asyncio
import os
import random
import time
from typing import Callable, Coroutine, Dict, List, Optional, Any, Union
import discord
from lifecycle import LifecycleManager
from reactions import ReactionManager, resolve_user, parse_emoji_input
from spotify_player import SpotifyPlayer, fetch_album_metadata, SpotifySearchError, SpotifyConflictError

class CommandContext:
    def __init__(self, message: discord.Message, client: discord.Client, command_name: str, args: List[str], raw_args: str):
        self.message = message
        self.client = client
        self.channel = message.channel
        self.author = message.author
        self.guild = message.guild
        self.command_name = command_name
        self.args = args
        self.raw_args = raw_args

    async def reply(self, content: str, **kwargs) -> Optional[discord.Message]:
        try:
            return await self.channel.send(content, **kwargs)
        except Exception as e:
            print(f"[CommandContext] Failed to send message: {e}")
            return None

    async def react_success(self) -> None:
        try:
            await self.message.add_reaction("✅")
        except Exception as e:
            print(f"[CommandContext] Failed to add checkmark reaction: {e}")

    async def react_fail(self) -> None:
        try:
            await self.message.add_reaction("❌")
        except Exception as e:
            print(f"[CommandContext] Failed to add fail reaction: {e}")

    async def delete_trigger(self) -> None:
        try:
            await self.message.delete()
        except Exception:
            pass

class Command:
    def __init__(
        self,
        name: str,
        callback: Callable[..., Coroutine[Any, Any, Any]],
        aliases: Optional[List[str]] = None,
        description: str = "",
        usage: str = ""
    ):
        self.name = name.lower()
        self.callback = callback
        self.aliases = [a.lower() for a in (aliases or [])]
        self.description = description
        self.usage = usage

    async def invoke(self, ctx: CommandContext) -> Any:
        return await self.callback(ctx, *ctx.args)

class CommandEngine:
    def __init__(self, client: discord.Client, prefix: str = "."):
        self.client = client
        self.prefix = prefix
        self.commands: Dict[str, Command] = {}
        self.reaction_manager: Optional[ReactionManager] = None
        self.spotify_player: SpotifyPlayer = SpotifyPlayer()

    def command(self, name: str, aliases: Optional[List[str]] = None, description: str = "", usage: str = ""):
        def decorator(func: Callable[..., Coroutine[Any, Any, Any]]):
            cmd = Command(name=name, callback=func, aliases=aliases, description=description, usage=usage)
            self.commands[cmd.name] = cmd
            for alias in cmd.aliases:
                self.commands[alias] = cmd
            return func
        return decorator

    async def process_message(self, message: discord.Message) -> bool:
        # Strictly listen to own messages (self-bot user account)
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

        ctx = CommandContext(
            message=message,
            client=self.client,
            command_name=cmd_name,
            args=args,
            raw_args=raw_args
        )

        try:
            await cmd.invoke(ctx)
            return True
        except TypeError as te:
            print(f"[CommandEngine] Argument mismatch for '.{cmd_name}': {te}")
            await ctx.react_fail()
            await ctx.reply(f"⚠️ **Usage**: `.{cmd.name} {cmd.usage}`")
            return False
        except Exception as e:
            print(f"[CommandEngine] Error executing '.{cmd_name}': {e}")
            await ctx.react_fail()
            return False

class AdaptiveDeleter:
    """
    State-of-the-Art adaptive rate-limiting deletion engine for user accounts (selfbots).
    Uses Additive-Increase/Multiplicative-Decrease (AIMD) congestion control,
    batch history paging, and immediate 429 retry-after recovery to maximize throughput
    while strictly avoiding Discord anti-spam flags.
    """
    def __init__(
        self,
        client: discord.Client,
        min_delay: float = 0.05,
        initial_delay: float = 0.15,
        max_delay: float = 2.5
    ):
        self.client = client
        self.min_delay = min_delay
        self.current_delay = initial_delay
        self.max_delay = max_delay

    async def delete_single_message(self, channel: discord.abc.Messageable, message_id: int) -> bool:
        try:
            msg = await channel.fetch_message(message_id)
            if msg.author.id != self.client.user.id:
                print(f"[AdaptiveDeleter] Message {message_id} was not authored by self. Skipping.")
                return False
            await msg.delete()
            return True
        except discord.NotFound:
            print(f"[AdaptiveDeleter] Message {message_id} not found (already deleted).")
            return False
        except discord.HTTPException as e:
            if e.status == 429:
                retry_after = getattr(e, "retry_after", 1.0)
                print(f"[AdaptiveDeleter] Rate limited on single delete. Backing off {retry_after}s...")
                await asyncio.sleep(retry_after + 0.05)
                # Retry once
                try:
                    msg = await channel.fetch_message(message_id)
                    await msg.delete()
                    return True
                except Exception:
                    pass
            print(f"[AdaptiveDeleter] HTTP error deleting message {message_id}: {e}")
            return False

    async def purge_channel_messages(
        self,
        channel: discord.abc.Messageable,
        target_message_id: Optional[int] = None,
        max_messages: Optional[int] = None
    ) -> int:
        """
        Fast, rate-limit-compliant bulk deletion of own messages in a channel.
        """
        deleted_count = 0
        last_message: Optional[discord.Message] = None

        print(f"[AdaptiveDeleter] Starting purge in channel {getattr(channel, 'id', channel)}...")

        while True:
            try:
                history_kwargs: Dict[str, Any] = {"limit": 100}
                if last_message:
                    history_kwargs["before"] = last_message

                batch: List[discord.Message] = []
                async for msg in channel.history(**history_kwargs):
                    batch.append(msg)

                if not batch:
                    break

                last_message = batch[-1]

                # Filter for self messages
                self_messages = [m for m in batch if m.author.id == self.client.user.id]

                for msg in self_messages:
                    if target_message_id and msg.id != target_message_id:
                        continue

                    while True:
                        try:
                            await msg.delete()
                            deleted_count += 1

                            # Additive decrease of delay on success (speed up)
                            self.current_delay = max(self.min_delay, self.current_delay * 0.95)
                            
                            jitter = random.uniform(0.01, 0.03)
                            await asyncio.sleep(self.current_delay + jitter)
                            break

                        except discord.NotFound:
                            break

                        except discord.Forbidden:
                            print(f"[AdaptiveDeleter] Forbidden: Cannot delete message {msg.id} in {channel}.")
                            return deleted_count

                        except discord.HTTPException as e:
                            if e.status == 429:
                                retry_after = getattr(e, "retry_after", 1.0)
                                print(f"[AdaptiveDeleter] 429 Rate Limit hit. Backing off for {retry_after:.2f}s...")
                                await asyncio.sleep(retry_after + 0.05)
                                self.current_delay = min(self.max_delay, max(0.5, self.current_delay * 1.6))
                                continue
                            else:
                                print(f"[AdaptiveDeleter] HTTPException {e.status} on message {msg.id}: {e}")
                                break

                        except Exception as e:
                            print(f"[AdaptiveDeleter] Unexpected error on message {msg.id}: {e}")
                            break

                    if target_message_id and msg.id == target_message_id:
                        return deleted_count

                    if max_messages and deleted_count >= max_messages:
                        return deleted_count

            except discord.Forbidden:
                print(f"[AdaptiveDeleter] Lacking permissions to read history in {channel}.")
                break
            except Exception as e:
                print(f"[AdaptiveDeleter] Error fetching history chunk: {e}")
                break

        print(f"[AdaptiveDeleter] Purge completed. Deleted {deleted_count} messages.")
        return deleted_count

def register_default_commands(engine: CommandEngine, reaction_manager: ReactionManager) -> None:
    """
    Registers the core command suite: .delete, .restart, .status, .reaction, and .spotify.
    """
    engine.reaction_manager = reaction_manager
    spotify_player = engine.spotify_player

    @engine.command(
        name="delete",
        aliases=["del", "purge"],
        description="Deletes own messages using SOTA rate-limiting congestion control.",
        usage="<channelID> [messageID | 'all']"
    )
    async def cmd_delete(ctx: CommandContext, *args: str) -> None:
        if not args:
            await ctx.react_fail()
            await ctx.reply("⚠️ **Usage**: `.delete <channelID> [messageID | 'all']`")
            return

        channel_arg = args[0].strip()
        if not channel_arg.isdigit():
            await ctx.react_fail()
            await ctx.reply("⚠️ **Error**: `channelID` must be a valid integer ID.")
            return

        channel_id = int(channel_arg)
        channel = ctx.client.get_channel(channel_id)
        if channel is None:
            try:
                channel = await ctx.client.fetch_channel(channel_id)
            except Exception as e:
                await ctx.react_fail()
                await ctx.reply(f"⚠️ **Error**: Failed to resolve channel `{channel_id}`: {e}")
                return

        # If the command was sent in the same channel as the target channel, delete the command trigger message
        is_same_channel = (ctx.channel.id == channel_id)
        if is_same_channel:
            await ctx.delete_trigger()
        else:
            await ctx.react_success()

        target_opt = args[1].lower().strip() if len(args) > 1 else "all"
        deleter = AdaptiveDeleter(ctx.client)

        if target_opt == "all":
            await deleter.purge_channel_messages(channel)
        elif target_opt.isdigit():
            msg_id = int(target_opt)
            await deleter.delete_single_message(channel, msg_id)
        else:
            await ctx.reply(f"⚠️ **Error**: Unknown delete target `{target_opt}`. Use a message ID or `'all'`.")

    @engine.command(
        name="restart",
        aliases=["reboot", "reload"],
        description="Gracefully restarts the bot, sends loading emoji, and diffs updates upon reboot.",
        usage=""
    )
    async def cmd_restart(ctx: CommandContext, *args: str) -> None:
        await ctx.react_success()
        await LifecycleManager.initiate_restart(ctx.client, ctx.channel)

    @engine.command(
        name="status",
        aliases=["presence", "setstatus", "customstatus"],
        description="Updates custom status message and optional emoji with pre-API validation.",
        usage="<message> [emoji]"
    )
    async def cmd_status(ctx: CommandContext, *args: str) -> None:
        if not args:
            await ctx.react_fail()
            await ctx.reply("⚠️ **Usage**: `.status <message> [emoji]` or `.status clear`")
            return

        raw_text = " ".join(args).strip()

        # Handle clear
        if raw_text.lower() in ("clear", "reset", "none", "off"):
            try:
                await ctx.client.change_presence(activity=None)
                await ctx.react_success()
                await ctx.reply("✨ **Custom Status Cleared**.")
            except Exception as e:
                await ctx.react_fail()
                await ctx.reply(f"⚠️ **Error clearing status**: {e}")
            return

        # Check if the last argument is an emoji
        emoji_arg = None
        status_message = raw_text

        if len(args) > 1:
            possible_emoji = args[-1]
            parsed = parse_emoji_input(ctx.client, possible_emoji)
            if (
                isinstance(parsed, (discord.Emoji, discord.PartialEmoji))
                or (isinstance(parsed, str) and len(parsed) <= 4 and not parsed.isalnum())
            ):
                emoji_arg = parsed
                status_message = " ".join(args[:-1]).strip()

        # Pre-API Character Count Validation (Discord hard limit is 128 characters)
        if len(status_message) > 128:
            await ctx.react_fail()
            overflow = len(status_message) - 128
            await ctx.reply(
                f"⚠️ **Error (Pre-API Validation)**: Status message exceeds Discord's 128-character limit "
                f"({len(status_message)}/128 characters). Please shorten it by **{overflow}** character{'s' if overflow != 1 else ''}."
            )
            return

        try:
            custom_activity = discord.CustomActivity(name=status_message, emoji=emoji_arg)
            await ctx.client.change_presence(activity=custom_activity)
            await ctx.react_success()
            emoji_display = f" {emoji_arg}" if emoji_arg else ""
            print(f"[CommandEngine] Updated custom status to: '{status_message}'{emoji_display}")
        except discord.HTTPException as e:
            await ctx.react_fail()
            await ctx.reply(f"⚠️ **Discord API Error**: Failed to update status: {e}")
        except Exception as e:
            await ctx.react_fail()
            await ctx.reply(f"⚠️ **Unexpected Error**: {e}")

    @engine.command(
        name="reaction",
        aliases=["react", "autoreact"],
        description="Configures auto-reactions for target users (with optional burst mode) or displays statistics.",
        usage="<user_id | status | remove> [emoji | user_id] [burst]"
    )
    async def cmd_reaction(ctx: CommandContext, *args: str) -> None:
        if not args:
            await ctx.react_fail()
            await ctx.reply("⚠️ **Usage**: `.reaction <user_id|mention|username> <emoji> [burst]` or `.reaction status` or `.reaction remove <user>`")
            return

        subcmd = args[0].lower().strip()

        # Handle: .reaction status
        if subcmd == "status":
            has_data, summary = reaction_manager.get_stats_summary()
            if not has_data:
                # If none, strictly react with :x: without adding checkmark or deleting
                await ctx.react_fail()
            else:
                # Self deletes command msg and sends the total amount of reactions per user per day
                await ctx.delete_trigger()
                await ctx.reply(summary)
            return

        # Handle: .reaction remove <user> OR .reaction delete <user> OR .reaction clear <user>
        if subcmd in ("remove", "delete", "clear", "off", "stop"):
            if len(args) < 2:
                await ctx.react_fail()
                await ctx.reply("⚠️ **Usage**: `.reaction remove <user_id|mention|username>`")
                return

            target_user_input = args[1]
            
            # First try direct removal in ReactionManager targets
            removed, uid, uname = reaction_manager.remove_target(target_user_input)

            # If not found directly, attempt gateway resolve
            if not removed:
                user_target = await resolve_user(ctx.client, target_user_input)
                if user_target:
                    r_uid, r_uname = user_target
                    removed, uid, uname = reaction_manager.remove_target(r_uid)

            if removed:
                await ctx.react_success()
                await ctx.reply(f"🗑️ **Auto-Reaction Disabled**: Successfully removed auto-reaction for **{uname}** (`{uid}`).")
            else:
                await ctx.react_fail()
                await ctx.reply(f"⚠️ No active auto-reaction configured for **{target_user_input}**.")
            return

        # Handle: .reaction <user_id> <emoji> [burst]
        if len(args) < 2:
            await ctx.react_fail()
            await ctx.reply("⚠️ **Usage**: `.reaction <user_id|mention|username> <emoji> [burst]`")
            return

        user_input = args[0]
        emoji_input = args[1]

        # Handle: .reaction <user_id> remove / off / none
        if emoji_input.lower() in ("remove", "delete", "off", "none", "stop", "clear"):
            removed, uid, uname = reaction_manager.remove_target(user_input)
            if not removed:
                user_target = await resolve_user(ctx.client, user_input)
                if user_target:
                    r_uid, _ = user_target
                    removed, uid, uname = reaction_manager.remove_target(r_uid)

            if removed:
                await ctx.react_success()
                await ctx.reply(f"🗑️ **Auto-Reaction Disabled**: Successfully removed auto-reaction for **{uname}** (`{uid}`).")
            else:
                await ctx.react_fail()
                await ctx.reply(f"⚠️ No active auto-reaction configured for **{user_input}**.")
            return

        is_burst = False
        if len(args) > 2:
            is_burst = args[2].lower().strip() in ("burst", "super", "true", "1", "yes")

        user_target = await resolve_user(ctx.client, user_input)
        if not user_target:
            await ctx.react_fail()
            await ctx.reply(f"⚠️ **Error**: Could not resolve user `{user_input}`. Provide a valid mention, ID, or username.")
            return

        uid, uname = user_target
        parsed_emoji = parse_emoji_input(ctx.client, emoji_input)
        if not parsed_emoji:
            await ctx.react_fail()
            await ctx.reply(f"⚠️ **Error**: Invalid emoji `{emoji_input}`.")
            return

        reaction_manager.set_target(int(uid), uname, emoji_input, burst=is_burst)
        await ctx.react_success()
        burst_desc = " with **Super/Burst** mode" if is_burst else ""
        await ctx.reply(
            f"✨ **Auto-Reaction Configured**: Reacting with {emoji_input}{burst_desc} to every message by **{uname}** (`{uid}`) after 1.03s delay."
        )

    @engine.command(
        name="spotify",
        aliases=["spot", "listen"],
        description="Plays an album in order on Spotify Rich Presence, or stops active playback.",
        usage="<artist> <album name> | stop"
    )
    async def cmd_spotify(ctx: CommandContext, *args: str) -> None:
        if not args:
            await ctx.react_fail()
            await ctx.reply("⚠️ **Usage**: `.spotify <artist> <album name>` (e.g. `.spotify daft punk discovery`) or `.spotify stop`")
            return

        subcmd = args[0].lower().strip()

        # Handle: .spotify stop
        if subcmd in ("stop", "pause", "end", "off", "cancel"):
            was_playing = await spotify_player.stop(ctx.client)
            await ctx.react_success()
            if was_playing:
                await ctx.reply("⏹️ **Spotify Playback Stopped**.")
            else:
                await ctx.reply("ℹ️ No active Spotify album was currently playing.")
            return

        if len(args) < 2:
            await ctx.react_fail()
            await ctx.reply("⚠️ **Missing Parameters**: Please specify both artist and approximate album title.\n*Example:* `.spotify daft punk discovery`")
            return

        artist_query = args[0].strip()
        album_query = " ".join(args[1:]).strip()

        # Search for album metadata
        try:
            album_data = fetch_album_metadata(artist_query, album_query)
        except SpotifySearchError as sse:
            await ctx.react_fail()
            await ctx.reply(f"⚠️ **Spotify Search Error**: {sse}")
            return
        except Exception as e:
            await ctx.react_fail()
            await ctx.reply(f"⚠️ **Error Querying Album Metadata**: {e}")
            return

        tracks = album_data.get("tracks", [])
        if not tracks:
            await ctx.react_fail()
            await ctx.reply(f"⚠️ **Error**: Album **{album_data.get('album')}** has 0 playable tracks.")
            return

        # Start playback in order
        await spotify_player.play_album(ctx.client, album_data, ctx_channel=ctx.channel)
        await ctx.react_success()

        album_title = album_data.get("album")
        artist_name = album_data.get("artist")
        first_track = tracks[0].get("title", "Track 1")
        total_duration = sum(t.get("duration", 0) for t in tracks)
        dur_min = total_duration // 60
        dur_sec = total_duration % 60

        await ctx.reply(
            f"🎵 **Now Playing on Spotify**:\n"
            f"💿 **{album_title}** by **{artist_name}**\n"
            f"📑 **{len(tracks)} tracks** ({dur_min}m {dur_sec}s total)\n"
            f"▶️ Track 1: **{first_track}**"
        )
