from typing import Dict, Any, Optional

def extract_user_data(user: Any, is_friend: bool, friend_since: Optional[str], profile: Optional[Any] = None) -> Dict[str, Any]:
    badges = []
    flags = getattr(user, 'public_flags', None)
    if flags:
        flag_map = {
            'staff': 'staff.svg',
            'partner': 'partner.svg',
            'hypesquad': 'hypesquad_events.svg',
            'bug_hunter': 'bug_hunter.svg',
            'hypesquad_bravery': 'hypesquad_bravery.svg',
            'hypesquad_brilliance': 'hypesquad_brilliance.svg',
            'hypesquad_balance': 'hypesquad_balance.svg',
            'early_supporter': 'early_supporter.svg',
            'bug_hunter_level_2': 'bug_hunter_level_2.svg',
            'verified_bot_developer': 'verified_bot_developer.svg',
            'discord_certified_moderator': 'discord-mod.svg',
            'active_developer': 'active-developer.svg'
        }
        for attr, badge in flag_map.items():
            if getattr(flags, attr, False):
                badges.append(badge)
                
    is_nitro = bool(
        getattr(user, 'premium_since', None)
        or (user.avatar and user.avatar.is_animated())
        or getattr(user, 'banner', None)
    )
    
    if profile:
        is_nitro = is_nitro or bool(getattr(profile, 'premium_since', None)) or bool(getattr(profile, 'premium_guild_since', None))
        if getattr(profile, 'legacy_username', None):
            badges.append("username.png")
            
        for b in getattr(profile, 'badges', []):
            bid = str(getattr(b, 'id', '')).lower()
            desc = str(getattr(b, 'description', '')).lower()
            if 'legacy' in bid or 'legacy' in desc: badges.append("username.png")
            elif 'quest' in bid or 'quest' in desc: badges.append("quest.png")
            elif 'orb' in bid or 'orb' in desc: badges.append("orb.svg")
            elif 'gifting' in bid or 'cadeau' in desc or 'gift' in desc:
                if 'mecenas' in desc or 'patron' in desc: badges.append("patron.png")
                elif 'kampioen' in desc or 'champion' in desc: badges.append("champion.png")
                elif 'held' in desc or 'hero' in desc: badges.append("hero.png")
                elif 'grootheid' in desc or 'luminary' in desc: badges.append("luminary.png")
                elif any(k in desc for k in ('icoon', 'icon', 'legend', 'legende')): badges.append("legend.png")
                else: badges.append("champion.png")
            elif 'champion' in bid or 'champion' in desc: badges.append("champion.png")
            elif 'hero' in bid or 'hero' in desc: badges.append("hero.png")
            elif 'legend' in bid or 'legend' in desc: badges.append("legend.png")
            elif 'luminary' in bid or 'luminary' in desc: badges.append("luminary.png")
            elif 'patron' in bid or 'patron' in desc: badges.append("patron.png")

    if is_nitro:
        badges.append("premium.svg")
        
    badges = list(dict.fromkeys(badges))
    avatar_url = str(user.avatar.url) if user.avatar else str(user.default_avatar.url)
    
    raw_flags = getattr(user, 'flags', None)
    flags_val = raw_flags.value if raw_flags else getattr(flags, 'value', 0)
    
    flag_names = []
    if raw_flags:
        for name, value in raw_flags:
            if value:
                flag_names.append(name)
    elif flags:
        for name, value in flags:
            if value:
                flag_names.append(name)
    
    status = 'offline'
    custom_status = None
    
    # Try to find presence data if user is in our mutual guilds
    for guild in getattr(user, '_state', getattr(user, '_client', user)).guilds if hasattr(user, '_state') else []:
        member = guild.get_member(user.id)
        if member and hasattr(member, 'status'):
            status = str(member.status)
            if member.activities:
                for activity in member.activities:
                    if hasattr(activity, 'name') and activity.type and getattr(activity.type, 'value', -1) == 4: # Custom Status
                        custom_status = getattr(activity, 'state', getattr(activity, 'name', None))
            break

    return {
        "id": str(user.id),
        "user_id": str(user.id),
        "username": user.name,
        "display_name": user.display_name,
        "avatar_url": avatar_url,
        "is_friend": is_friend,
        "friend_since": friend_since,
        "badges": badges,
        "flags": flags_val,
        "flag_names": flag_names,
        "status": status,
        "custom_status": custom_status
    }
