import asyncio
import json
import os
from datetime import datetime, timezone
from typing import Dict, Optional, Tuple, Union, Any
import discord
from utils.resolvers import parse_emoji_input, resolve_user

DATA_FILE: str = os.path.join(os.path.dirname(__file__), "..", "reaction_data.json")

class ReactionManager:
    __slots__ = ("client", "targets", "stats", "user_names")

    def __init__(self, client: discord.Client) -> None:
        self.client = client
        self.targets: Dict[str, Dict[str, Any]] = {}
        self.stats: Dict[str, Dict[str, int]] = {}
        self.user_names: Dict[str, str] = {}
        self.load_data()

    def load_data(self) -> None:
        if os.path.exists(DATA_FILE):
            try:
                with open(DATA_FILE, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    self.targets = data.get("targets", {})
                    self.stats = data.get("stats", {})
                    self.user_names = data.get("user_names", {})
            except Exception:
                pass

    def save_data(self) -> None:
        try:
            with open(DATA_FILE, "w", encoding="utf-8") as f:
                json.dump({"targets": self.targets, "stats": self.stats, "user_names": self.user_names}, f, indent=2, ensure_ascii=False)
        except Exception:
            pass

    def set_target(self, user_id: int, username: str, emoji_raw: str, burst: bool = False) -> None:
        uid_str = str(user_id)
        self.targets[uid_str] = {"emoji": emoji_raw, "username": username, "burst": bool(burst)}
        self.user_names[uid_str] = username
        self.save_data()

    def remove_target(self, user_identifier: Union[int, str]) -> Tuple[bool, Optional[str], Optional[str]]:
        raw_str = str(user_identifier).strip()
        if raw_str.startswith("<@") and raw_str.endswith(">"):
            raw_str = raw_str.strip("<@!>")

        if raw_str in self.targets:
            uname = self.targets[raw_str].get("username", self.user_names.get(raw_str, f"User_{raw_str}"))
            del self.targets[raw_str]
            self.save_data()
            return True, raw_str, uname

        lower_term = raw_str.lower()
        for uid_str, cfg in list(self.targets.items()):
            if lower_term in (cfg.get("username", "").lower(), self.user_names.get(uid_str, "").lower()):
                uname = cfg.get("username", self.user_names.get(uid_str, f"User_{uid_str}"))
                del self.targets[uid_str]
                self.save_data()
                return True, uid_str, uname

        return False, None, None

    def record_reaction(self, user_id: int, username: Optional[str] = None) -> None:
        uid_str = str(user_id)
        if username:
            self.user_names[uid_str] = username

        today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        self.stats.setdefault(today, {})
        self.stats[today][uid_str] = self.stats[today].get(uid_str, 0) + 1
        self.save_data()

    def get_stats_summary(self) -> Tuple[bool, str]:
        if not self.stats:
            return False, ""

        total_reactions = 0
        lines = []

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

        return True, f"📊 **Reaction Statistics** (Total Delivered: {total_reactions})\n\n" + "\n".join(lines)

    async def handle_incoming_message(self, message: discord.Message) -> None:
        if not message.author:
            return

        uid_str = str(message.author.id)
        if uid_str not in self.targets:
            return

        target_cfg = self.targets[uid_str]
        emoji_raw, is_burst = target_cfg["emoji"], target_cfg.get("burst", False)

        await asyncio.sleep(1.03)

        if uid_str not in self.targets:
            return

        try:
            parsed = parse_emoji_input(self.client, emoji_raw)
            if is_burst:
                try:
                    await message.add_reaction(parsed, burst=True)
                except Exception:
                    await message.add_reaction(parsed)
            else:
                await message.add_reaction(parsed)
            self.record_reaction(message.author.id, message.author.name)
        except Exception:
            pass
