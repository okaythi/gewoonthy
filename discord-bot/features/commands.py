import asyncio
import discord
from core.command_engine import CommandEngine, CommandContext
from core.deleter import AdaptiveDeleter
from core.lifecycle import LifecycleManager
from features.reactions import ReactionManager
from utils.resolvers import parse_emoji_input, resolve_user
from utils.spotify_search import fetch_album_metadata, SpotifySearchError
from features.spotify_player import SpotifyPlayer

def register_default_commands(engine: CommandEngine, reaction_manager: ReactionManager) -> None:
    engine.reaction_manager = reaction_manager
    engine.spotify_player = SpotifyPlayer()

    @engine.command("delete", ["del", "purge"], usage="<channelID> [messageID | 'all']")
    async def cmd_delete(ctx: CommandContext, *args: str) -> None:
        if not args:
            await ctx.react_fail()
            await ctx.reply("⚠️ **Usage**: `.delete <channelID> [messageID | 'all']`")
            return

        if not args[0].strip().isdigit():
            await ctx.react_fail()
            await ctx.reply("⚠️ **Error**: `channelID` must be a valid integer ID.")
            return

        channel_id = int(args[0].strip())
        channel = ctx.client.get_channel(channel_id)
        if not channel:
            try:
                channel = await ctx.client.fetch_channel(channel_id)
            except Exception:
                await ctx.react_fail()
                return

        if ctx.channel.id == channel_id:
            await ctx.delete_trigger()
        else:
            await ctx.react_success()

        target_opt = args[1].lower().strip() if len(args) > 1 else "all"
        deleter = AdaptiveDeleter(ctx.client)

        if target_opt == "all":
            await deleter.purge_channel_messages(channel)
        elif target_opt.isdigit():
            await deleter.delete_single_message(channel, int(target_opt))
        else:
            await ctx.reply(f"⚠️ **Error**: Unknown delete target `{target_opt}`.")

    @engine.command("restart", ["reboot", "reload"])
    async def cmd_restart(ctx: CommandContext, *args: str) -> None:
        await ctx.react_success()
        await LifecycleManager.initiate_restart(ctx.client, ctx.channel)

    @engine.command("status", ["presence", "setstatus", "customstatus"], usage="<message> [emoji]")
    async def cmd_status(ctx: CommandContext, *args: str) -> None:
        if not args:
            await ctx.react_fail()
            return

        raw_text = " ".join(args).strip()
        if raw_text.lower() in ("clear", "reset", "none", "off"):
            try:
                await ctx.client.change_presence(activities=[])
                await ctx.react_success()
            except Exception:
                await ctx.react_fail()
            return

        emoji_arg = None
        status_message = raw_text

        if len(args) > 1:
            parsed = parse_emoji_input(ctx.client, args[-1])
            if isinstance(parsed, (discord.Emoji, discord.PartialEmoji)) or (isinstance(parsed, str) and len(parsed) <= 4 and not parsed.isalnum()):
                emoji_arg = parsed
                status_message = " ".join(args[:-1]).strip()

        if len(status_message) > 128:
            await ctx.react_fail()
            return

        try:
            await ctx.client.change_presence(activities=[discord.CustomActivity(name=status_message, emoji=emoji_arg)])
            await ctx.react_success()
        except Exception:
            await ctx.react_fail()

    @engine.command("reaction", ["react", "autoreact"], usage="<user_id|status|remove> [emoji] [burst]")
    async def cmd_reaction(ctx: CommandContext, *args: str) -> None:
        if not args:
            await ctx.react_fail()
            return

        subcmd = args[0].lower().strip()

        if subcmd == "status":
            has_data, summary = reaction_manager.get_stats_summary()
            if not has_data:
                await ctx.react_fail()
            else:
                await ctx.delete_trigger()
                await ctx.reply(summary)
            return

        if subcmd in ("remove", "delete", "clear", "off", "stop"):
            if len(args) < 2:
                await ctx.react_fail()
                return
            removed, uid, uname = reaction_manager.remove_target(args[1])
            if not removed:
                user_target = await resolve_user(ctx.client, args[1])
                if user_target:
                    removed, uid, uname = reaction_manager.remove_target(user_target[0])
            if removed:
                await ctx.react_success()
                await ctx.reply(f"🗑️ **Auto-Reaction Disabled**: `{uid}`")
            else:
                await ctx.react_fail()
            return

        if len(args) < 2:
            await ctx.react_fail()
            return

        user_input, emoji_input = args[0], args[1]

        if emoji_input.lower() in ("remove", "delete", "off", "none", "stop", "clear"):
            removed, uid, uname = reaction_manager.remove_target(user_input)
            if not removed:
                user_target = await resolve_user(ctx.client, user_input)
                if user_target:
                    removed, uid, uname = reaction_manager.remove_target(user_target[0])
            if removed:
                await ctx.react_success()
            else:
                await ctx.react_fail()
            return

        is_burst = len(args) > 2 and args[2].lower().strip() in ("burst", "super", "true", "1", "yes")
        user_target = await resolve_user(ctx.client, user_input)
        
        if not user_target:
            await ctx.react_fail()
            return

        uid, uname = user_target
        if not parse_emoji_input(ctx.client, emoji_input):
            await ctx.react_fail()
            return

        reaction_manager.set_target(int(uid), uname, emoji_input, burst=is_burst)
        await ctx.react_success()

    @engine.command("spotify", ["spot", "listen"], usage="<artist> <album> | stop")
    async def cmd_spotify(ctx: CommandContext, *args: str) -> None:
        if not args:
            await ctx.react_fail()
            return

        if args[0].lower().strip() in ("stop", "pause", "end", "off", "cancel"):
            await engine.spotify_player.stop(ctx.client)
            await ctx.react_success()
            return

        if len(args) < 2:
            await ctx.react_fail()
            return

        try:
            await ctx.message.add_reaction("🔍")
        except Exception:
            pass

        try:
            album_data = await asyncio.to_thread(fetch_album_metadata, args[0].strip(), " ".join(args[1:]).strip())
        except SpotifySearchError:
            await ctx.react_fail()
            return
        except Exception:
            await ctx.react_fail()
            return

        tracks = album_data.get("tracks", [])
        if not tracks:
            await ctx.react_fail()
            return

        await engine.spotify_player.play_album(ctx.client, album_data, ctx_channel=ctx.channel)
        await ctx.react_success()

        total_duration = sum(t.get("duration", 0) for t in tracks)
        await ctx.reply(f"🎵 **Now Playing on Spotify**:\n💿 **{album_data.get('album')}** by **{album_data.get('artist')}**\n📑 **{len(tracks)} tracks** ({total_duration // 60}m {total_duration % 60}s total)")

    @engine.command("git", ["gitdiff", "changes"], usage="diff")
    async def cmd_git(ctx: CommandContext, *args: str) -> None:
        if not args or args[0].lower() != "diff":
            await ctx.react_fail()
            return
        import subprocess
        import os
        try:
            cwd = os.path.join(os.path.dirname(__file__), "..", "..")
            res = subprocess.run(
                ["git", "--no-pager", "show", "--stat", "--format=Commit: %h | Date: %cd%nMessage: %s", "HEAD"], 
                cwd=cwd, capture_output=True, text=True, timeout=10
            )
            if res.returncode == 0:
                summary = res.stdout.strip()
                if len(summary) > 1900:
                    summary = summary[:1900] + "\n... (truncated)"
                await ctx.reply(f"```diff\n{summary}\n```")
                await ctx.react_success()
            else:
                await ctx.react_fail()
        except Exception:
            await ctx.react_fail()

    @engine.command("uptime", usage="")
    async def cmd_uptime(ctx: CommandContext, *args: str) -> None:
        import time
        uptime_seconds = int(time.time() - getattr(ctx.client, "start_time", time.time()))
        m, s = divmod(uptime_seconds, 60)
        h, m = divmod(m, 60)
        d, h = divmod(h, 24)
        parts = []
        if d > 0: parts.append(f"{d}d")
        if h > 0: parts.append(f"{h}h")
        if m > 0: parts.append(f"{m}m")
        parts.append(f"{s}s")
        await ctx.reply(f"⏱️ **Uptime**: {' '.join(parts)}")
        await ctx.react_success()
