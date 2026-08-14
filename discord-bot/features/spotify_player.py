import asyncio
import datetime
from typing import Dict, List, Optional, Any
import discord

class SpotifyPlayer:
    __slots__ = ("current_task", "current_album_info", "current_track_index", "is_running")

    def __init__(self) -> None:
        self.current_task: Optional[asyncio.Task] = None
        self.current_album_info: Optional[Dict[str, Any]] = None
        self.current_track_index: int = 0
        self.is_running: bool = False

    def is_playing(self) -> bool:
        return self.is_running or (self.current_task is not None and not self.current_task.done())

    def get_current_info(self) -> Optional[Dict[str, Any]]:
        if not self.is_playing() or not self.current_album_info:
            return None
        tracks = self.current_album_info.get("tracks", [])
        return {
            "album": self.current_album_info.get("album"),
            "artist": self.current_album_info.get("artist"),
            "current_track": tracks[self.current_track_index] if self.current_track_index < len(tracks) else None,
            "track_index": self.current_track_index + 1,
            "total_tracks": len(tracks)
        }

    async def play_album(self, client: discord.Client, album_data: Dict[str, Any], ctx_channel: Optional[discord.abc.Messageable] = None) -> None:
        await self.stop(client)
        self.current_album_info = album_data
        self.is_running = True
        self.current_task = asyncio.create_task(self._playback_loop(client, album_data))

    async def _playback_loop(self, client: discord.Client, album_data: Dict[str, Any]) -> None:
        tracks: List[Dict[str, Any]] = album_data.get("tracks", [])
        album_name = album_data.get("album", "Unknown Album")
        artist_name = album_data.get("artist", "Unknown Artist")
        
        cover_image = None
        image_hash = album_data.get("image_hash")
        if image_hash:
            try:
                data = await client.http.create_app_external_assets(159714140401418240, [f"https://i.scdn.co/image/{image_hash}"])
                if data:
                    cover_image = f"mp:{data[0]['external_asset_path']}"
            except Exception:
                pass

        if not cover_image:
            cover_image = album_data.get("spotify_image") or album_data.get("cover_url")

        try:
            for idx, track in enumerate(tracks):
                self.current_track_index = idx
                title = track.get("title", "Unknown Track")
                duration_sec = max(10, track.get("duration", 180))
                artist = track.get("artist", artist_name)

                activity = discord.Activity(
                    type=discord.ActivityType.listening,
                    name="Spotify",
                    details=title,
                    state=artist,
                    assets={"large_image": cover_image, "large_text": album_name} if cover_image else {}
                )

                try:
                    await client.change_presence(activities=[activity])
                except Exception:
                    pass
                await asyncio.sleep(duration_sec)
        except asyncio.CancelledError:
            pass
        except Exception:
            pass
        finally:
            self.is_running = False
            self.current_album_info = None
            try:
                await client.change_presence(activities=[])
            except Exception:
                pass

    async def stop(self, client: discord.Client) -> bool:
        was_active = self.is_playing()
        if self.current_task and not self.current_task.done():
            self.current_task.cancel()
            try:
                await asyncio.wait_for(self.current_task, timeout=1.0)
            except Exception:
                pass

        self.current_task = None
        self.is_running = False
        self.current_album_info = None

        try:
            await client.change_presence(activities=[])
        except Exception:
            pass

        return was_active
