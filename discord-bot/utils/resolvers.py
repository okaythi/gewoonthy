import re
from typing import Optional, Tuple, Union
import discord

def parse_emoji_input(client: discord.Client, emoji_input: str) -> Union[discord.Emoji, discord.PartialEmoji, str]:
    emoji_str = emoji_input.strip()

    custom_match = re.match(r"^<(a)?:([a-zA-Z0-9_]+):(\d+)>$", emoji_str)
    if custom_match:
        animated = bool(custom_match.group(1))
        name = custom_match.group(2)
        emoji_id = int(custom_match.group(3))
        return client.get_emoji(emoji_id) or discord.PartialEmoji(name=name, id=emoji_id, animated=animated)

    short_match = re.match(r"^(a)?:([a-zA-Z0-9_]+):(\d+)$", emoji_str)
    if short_match:
        animated = bool(short_match.group(1))
        name = short_match.group(2)
        emoji_id = int(short_match.group(3))
        return client.get_emoji(emoji_id) or discord.PartialEmoji(name=name, id=emoji_id, animated=animated)

    if emoji_str.isdigit():
        emoji_id = int(emoji_str)
        return client.get_emoji(emoji_id) or discord.PartialEmoji(name="emoji", id=emoji_id, animated=False)

    for em in getattr(client, "emojis", []):
        if em.name.lower() == emoji_str.lower():
            return em

    return emoji_str

async def resolve_user(client: discord.Client, user_input: str) -> Optional[Tuple[int, str]]:
    raw = user_input.strip()

    mention_match = re.match(r"^<@!?(\d+)>$", raw)
    if mention_match:
        uid = int(mention_match.group(1))
        user = client.get_user(uid)
        if not user:
            try:
                user = await client.fetch_user(uid)
            except Exception:
                pass
        return uid, user.name if user else f"User_{uid}"

    if raw.isdigit():
        uid = int(raw)
        user = client.get_user(uid)
        if not user:
            try:
                user = await client.fetch_user(uid)
            except Exception:
                pass
        return uid, user.name if user else f"User_{uid}"

    search_term = raw.lower()

    for relationship in getattr(client, "friends", []):
        f = relationship.user
        if search_term in (f.name.lower(), getattr(f, "global_name", "") or "".lower(), f.display_name.lower()):
            return f.id, f.name

    for u in getattr(client, "users", []):
        if search_term in (u.name.lower(), getattr(u, "global_name", "") or "".lower(), u.display_name.lower()):
            return u.id, u.name

    for g in getattr(client, "guilds", []):
        for m in g.members:
            if search_term in (m.name.lower(), getattr(m, "global_name", "") or "".lower(), m.display_name.lower()):
                return m.id, m.name

    return None
