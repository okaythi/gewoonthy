import asyncio
import time
import aiohttp
import discord
from typing import Optional, Dict, Any, List

TMDB_API_KEY = "0eefe96259161a6cd594539b12644bfe"
APPLICATION_ID = 1537927177058910309

class ActivityPlayer:
    def __init__(self, client: discord.Client):
        self.client = client
        self.current_media: Optional[Dict[str, Any]] = None
        self.queue: List[Dict[str, Any]] = []
        self.playing = False
        self.start_time = 0.0
        self.duration = 0.0
        self.paused_at = 0.0
        
        self.monitor_task: Optional[asyncio.Task] = None

    async def _fetch_tmdb(self, url: str) -> Dict[str, Any]:
        async with aiohttp.ClientSession() as session:
            async with session.get(url, params={"api_key": TMDB_API_KEY, "language": "en-US"}) as resp:
                if resp.status == 200:
                    return await resp.json()
                return {}

    async def get_media_details(self, tmdb_id: int, media_type: str, season: int = 1, episode: int = 1) -> Dict[str, Any]:
        if media_type == "movie":
            data = await self._fetch_tmdb(f"https://api.themoviedb.org/3/movie/{tmdb_id}")
            if not data: return {}
            return {
                "id": tmdb_id,
                "type": "movie",
                "title": data.get("title", "Unknown Movie"),
                "duration": data.get("runtime", 0) * 60, # minutes to seconds
                "poster": f"https://image.tmdb.org/t/p/w500{data.get('poster_path', '')}" if data.get('poster_path') else None,
                "year": data.get("release_date", "")[:4]
            }
        elif media_type == "tv":
            show_data = await self._fetch_tmdb(f"https://api.themoviedb.org/3/tv/{tmdb_id}")
            ep_data = await self._fetch_tmdb(f"https://api.themoviedb.org/3/tv/{tmdb_id}/season/{season}/episode/{episode}")
            
            if not show_data or not ep_data: return {}
            
            # Find next episode info
            next_ep = None
            total_seasons = show_data.get("number_of_seasons", 1)
            season_data = await self._fetch_tmdb(f"https://api.themoviedb.org/3/tv/{tmdb_id}/season/{season}")
            ep_count = len(season_data.get("episodes", [])) if season_data else 1
            
            if episode < ep_count:
                next_ep = {"season": season, "episode": episode + 1}
            elif season < total_seasons:
                next_ep = {"season": season + 1, "episode": 1}

            # TMDB episode runtime might be 0, fallback to show average
            ep_runtime = ep_data.get("runtime")
            if not ep_runtime:
                runtimes = show_data.get("episode_run_time", [])
                ep_runtime = runtimes[0] if runtimes else 45
                
            return {
                "id": tmdb_id,
                "type": "tv",
                "show_title": show_data.get("name", "Unknown Show"),
                "ep_title": ep_data.get("name", f"Episode {episode}"),
                "season": season,
                "episode": episode,
                "duration": ep_runtime * 60,
                "poster": f"https://image.tmdb.org/t/p/w500{show_data.get('poster_path', '')}" if show_data.get('poster_path') else None,
                "next_ep": next_ep
            }
        return {}

    async def play(self, media_info: Dict[str, Any]) -> None:
        self.current_media = media_info
        self.duration = media_info.get("duration", 0)
        self.start_time = time.time()
        self.paused_at = 0.0
        self.playing = True
        
        await self._update_presence()
        
        if self.monitor_task:
            self.monitor_task.cancel()
        self.monitor_task = asyncio.create_task(self._monitor_playback())

    async def pause(self) -> None:
        if not self.playing or not self.current_media: return
        self.playing = False
        self.paused_at = time.time()
        await self._update_presence()

    async def resume(self) -> None:
        if self.playing or not self.current_media: return
        self.playing = True
        # Shift start time forward by how long it was paused
        self.start_time += (time.time() - self.paused_at)
        self.paused_at = 0.0
        await self._update_presence()

    async def seek(self, target_seconds: float) -> None:
        if not self.current_media: return
        self.start_time = time.time() - target_seconds
        if not self.playing:
            self.paused_at = time.time()
        await self._update_presence()

    async def stop(self) -> None:
        self.current_media = None
        self.playing = False
        if self.monitor_task:
            self.monitor_task.cancel()
        await self.client.change_presence(activity=None)

    async def _update_presence(self) -> None:
        if not self.current_media:
            await self.client.change_presence(activity=None)
            return

        m = self.current_media
        
        details = m.get("title", "") if m["type"] == "movie" else f"{m.get('show_title')} (S{m.get('season'):02d}E{m.get('episode'):02d})"
        state = f"({m.get('year')})" if m["type"] == "movie" else m.get("ep_title", "")
        if not self.playing:
            state = f"[PAUSED] {state}"

        assets = {}
        if m.get("poster"):
            assets["large_image"] = m["poster"]
            assets["large_text"] = details

        start_ts = int(self.start_time)
        end_ts = int(self.start_time + self.duration)
        
        activity = discord.Activity(
            type=discord.ActivityType.watching,
            application_id=APPLICATION_ID,
            name=details,
            details=details,
            state=state,
            timestamps={"start": start_ts, "end": end_ts} if self.playing else None,
            assets=assets
        )
        
        await self.client.change_presence(activity=activity)

    async def _monitor_playback(self) -> None:
        while self.current_media:
            if self.playing:
                elapsed = time.time() - self.start_time
                remaining = self.duration - elapsed
                
                # Auto-play next episode 14.2 seconds before end
                if remaining <= 14.2 and self.current_media.get("type") == "tv":
                    next_ep_info = self.current_media.get("next_ep")
                    if next_ep_info:
                        next_media = await self.get_media_details(
                            self.current_media["id"], 
                            "tv", 
                            next_ep_info["season"], 
                            next_ep_info["episode"]
                        )
                        if next_media:
                            asyncio.create_task(self.play(next_media))
                            return # End current monitor task
                            
                # Auto stop if we reached end and no next ep
                if remaining <= 0:
                    if self.queue:
                        next_media = self.queue.pop(0)
                        asyncio.create_task(self.play(next_media))
                        return
                    else:
                        asyncio.create_task(self.stop())
                        return
                        
            await asyncio.sleep(1)
