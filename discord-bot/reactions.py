"""
reactions.py - Auto-reaction manager, emoji/user resolvers, burst option, and per-user per-day statistics tracking for discord.py-self.
"""
from __future__ import annotations
import asyncio
import json
import os
import re
from datetime import datetime, timezone
from typing import Dict, Optional, Tuple, Union, Any, List
import discord

DATA_FILE = os.path.join(os.path.dirname(__file__), "reaction_data.json")

def parse_emoji_input(client: discord.Client, emoji_input: str) -> Union[discord.Emoji, discord.PartialEmoji, str]:
    """
    Parses unicode emojis, custom emoji markdown tags (<:name:id>, <a:name:id>),
    short syntax (name:id), raw integer IDs, and emoji names.
    """
    emoji_str = emoji_input.strip()

    # 1. Custom emoji markup: <:name:id> or <a:name:id>
    custom_match = re.match(r"^<(a)?:([a-zA-Z0-9_]+):(\d+)>$", emoji_str)
    if custom_match:
        animated = bool(custom_match.group(1))
        name = custom_match.group(2)
        emoji_id = int(custom_match.group(3))
        emoji_obj = client.get_emoji(emoji_id)
        if emoji_obj:
            return emoji_obj
        return discord.PartialEmoji(name=name, id=emoji_id, animated=animated)

    # 2. Short custom syntax: name:id or a:name:id
    short_match = re.match(r"^(a)?:([a-zA-Z0-9_]+):(\d+)$", emoji_str)
    if short_match:
        animated = bool(short_match.group(1))
        name = short_match.group(2)
        emoji_id = int(short_match.group(3))
        emoji_obj = client.get_emoji(emoji_id)
        if emoji_obj:
            return emoji_obj
        return discord.PartialEmoji(name=name, id=emoji_id, animated=animated)

    # 3. Raw snowflake ID: 123456789
    if emoji_str.isdigit():
        emoji_id = int(emoji_str)
        emoji_obj = client.get_emoji(emoji_id)
        if emoji_obj:
            return emoji_obj
        return discord.PartialEmoji(name="emoji", id=emoji_id, animated=False)

    # 4. Search in client cached emojis by name
    for em in getattr(client, "emojis", []):
        if em.name.lower() == emoji_str.lower():
            return em

    # 5. Raw unicode emoji string
    return emoji_str

async def resolve_user(client: discord.Client, user_input: str) -> Optional[Tuple[int, str]]:
    """
    Resolves a user from a mention (<@id>, <@!id>), snowflake ID, or exact username / display name.
    """
    raw = user_input.strip()

    # 1. Mention pattern
    mention_match = re.match(r"^<@!?(\d+)>$", raw)
    if mention_match:
        uid = int(mention_match.group(1))
        user = client.get_user(uid)
        if not user:
            try:
                user = await client.fetch_user(uid)
            except Exception:
                pass
        name = user.name if user else f"User_{uid}"
        return uid, name

    # 2. Raw Snowflake ID
    if raw.isdigit():
        uid = int(raw)
        user = client.get_user(uid)
        if not user:
            try:
                user = await client.fetch_user(uid)
            except Exception:
                pass
        name = user.name if user else f"User_{uid}"
        return uid, name

    # 3. Exact username or display name search
    search_term = raw.lower()

    # Check friends
    for relationship in getattr(client, "friends", []):
        f = relationship.user
        if (
            f.name.lower() == search_term
            or (getattr(f, "global_name", None) and f.global_name.lower() == search_term)
            or f.display_name.lower() == search_term
        ):
            return f.id, f.name

    # Check cached users
    for u in getattr(client, "users", []):
        if (
            u.name.lower() == search_term
            or (getattr(u, "global_name", None) and u.global_name.lower() == search_term)
            or u.display_name.lower() == search_term
        ):
            return u.id, u.name

    # Check mutual guild members
    for g in getattr(client, "guilds", []):
        for m in g.members:
            if (
                m.name.lower() == search_term
                or (getattr(m, "global_name", None) and m.global_name.lower() == search_term)
                or m.display_name.lower() == search_term
            ):
                return m.id, m.name

    return None

class ReactionManager:
    """
    Manages active auto-reaction targets and per-user per-day statistics persistence.
    """
    def __init__(self, client: discord.Client):
        self.client = client
        self.targets: Dict[str, Dict[str, Any]] = {}  # str(user_id) -> {"emoji": str, "username": str, "burst": bool}
        self.stats: Dict[str, Dict[str, int]] = {}     # "YYYY-MM-DD" -> {str(user_id): count}
        self.user_names: Dict[str, str] = {}           # str(user_id) -> username
        self.load_data()

    def load_data(self) -> None:
        if os.path.exists(DATA_FILE):
            try:
                with open(DATA_FILE, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    self.targets = data.get("targets", {})
                    self.stats = data.get("stats", {})
                    self.user_names = data.get("user_names", {})
            except Exception as e:
                print(f"[ReactionManager] Failed to load {DATA_FILE}: {e}")

    def save_data(self) -> None:
        try:
            payload = {
                "targets": self.targets,
                "stats": self.stats,
                "user_names": self.user_names
            }
            with open(DATA_FILE, "w", encoding="utf-8") as f:
                json.dump(payload, f, indent=2, ensure_ascii=False)
        except Exception as e:
            print(f"[ReactionManager] Failed to save {DATA_FILE}: {e}")

    def set_target(self, user_id: int, username: str, emoji_raw: str, burst: bool = False) -> None:
        uid_str = str(user_id)
        self.targets[uid_str] = {
            "emoji": emoji_raw,
            "username": username,
            "burst": bool(burst)
        }
        self.user_names[uid_str] = username
        self.save_data()

    def remove_target(self, user_id: int) -> bool:
        uid_str = str(user_id)
        if uid_str in self.targets:
            del self.targets[uid_str]
            self.save_data()
            return True
        return False

    def record_reaction(self, user_id: int, username: Optional[str] = None) -> None:
        uid_str = str(user_id)
        if username:
            self.user_names[uid_str] = username

        today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        if today not in self.stats:
            self.stats[today] = {}

        self.stats[today][uid_str] = self.stats[today].get(uid_str, 0) + 1
        self.save_data()

    def get_stats_summary(self) -> Tuple[bool, str]:
        """
        Returns (has_data, formatted_string).
        """
        if not self.stats:
            return False, ""

        total_reactions = 0
        lines = []

        # Sort dates descending
        for date_str in sorted(self.stats.keys(), reverse=True):
            user_counts = self.stats[date_str]
            day_total = sum(user_counts.values())
            if day_total == 0:
                continue

            total_reactions += day_total
            lines.append(f"📅 **{date_str}** (Total: {day_total})")

            for uid_str, count in sorted(user_counts.items(), key=lambda x: x[1], reverse=True):
                uname = self.user_names.get(uid_str, f"User_{uid_str}")
                target_cfg = self.targets.get(uid_str)
                emoji_tag = f" [{target_cfg['emoji']}]" if target_cfg else ""
                burst_tag = " (💥 Burst)" if target_cfg and target_cfg.get("burst") else ""
                lines.append(f"  • **{uname}** (`{uid_str}`): **{count}** reaction{'s' if count != 1 else ''}{emoji_tag}{burst_tag}")

        if total_reactions == 0 or not lines:
            return False, ""

        header = f"📊 **Reaction Statistics** (Total Delivered: {total_reactions})\n"
        return True, header + "\n".join(lines)

    async def handle_incoming_message(self, message: discord.Message) -> None:
        """
        Listens to all incoming messages, waits 1.03s, and applies the configured emoji reaction (supporting burst).
        """
        if not message.author:
            return

        uid_str = str(message.author.id)
        if uid_str not in self.targets:
            return

        target_cfg = self.targets[uid_str]
        emoji_raw = target_cfg["emoji"]
        is_burst = target_cfg.get("burst", False)

        # Wait exactly 1.03s as specified
        await asyncio.sleep(1.03)

        parsed_emoji = parse_emoji_input(self.client, emoji_raw)
        try:
            if is_burst:
                try:
                    await message.add_reaction(parsed_emoji, burst=True)
                except Exception as e:
                    print(f"[ReactionManager] Burst reaction failed, falling back to standard: {e}")
                    await message.add_reaction(parsed_emoji)
            else:
                await message.add_reaction(parsed_emoji)

            self.record_reaction(message.author.id, message.author.name)
            print(f"[ReactionManager] Reacted with {emoji_raw} (burst={is_burst}) to message from {message.author.name} ({message.author.id})")
        except discord.Forbidden:
            print(f"[ReactionManager] Missing permissions to react in channel {message.channel}.")
        except discord.NotFound:
            # Message was deleted before 1.03s elapsed
            pass
        except Exception as e:
            print(f"[ReactionManager] Error reacting to message {message.id}: {e}")
