"""
spotify_player.py - Advanced Spotify Rich Presence album player with intelligent multi-source metadata search.
"""
from __future__ import annotations
import asyncio
import datetime
import json
import urllib.parse
import urllib.request
from typing import Dict, List, Optional, Any, Tuple
import discord

class SpotifySearchError(Exception):
    pass

class SpotifyConflictError(Exception):
    pass

def search_album_deezer(query: str) -> Optional[Dict[str, Any]]:
    try:
        url = f"https://api.deezer.com/search/album?q={urllib.parse.quote(query)}"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=5) as res:
            data = json.loads(res.read().decode("utf-8"))

        if not data.get("data"):
            return None

        first_album = data["data"][0]
        album_id = first_album["id"]
        album_title = first_album.get("title", "Unknown Album")
        artist_name = first_album.get("artist", {}).get("name", "Unknown Artist")
        cover_url = (
            first_album.get("cover_xl")
            or first_album.get("cover_big")
            or first_album.get("cover_medium")
        )

        # Retrieve tracks in order
        tracks_url = f"https://api.deezer.com/album/{album_id}/tracks"
        with urllib.request.urlopen(urllib.request.Request(tracks_url, headers={"User-Agent": "Mozilla/5.0"}), timeout=5) as res:
            tracks_data = json.loads(res.read().decode("utf-8"))

        tracks = []
        for t in tracks_data.get("data", []):
            tracks.append({
                "title": t.get("title", "Unknown Track"),
                "duration": int(t.get("duration", 180)),  # seconds
                "artist": t.get("artist", {}).get("name", artist_name)
            })

        if not tracks:
            return None

        return {
            "album": album_title,
            "artist": artist_name,
            "cover_url": cover_url,
            "tracks": tracks
        }
    except Exception as e:
        print(f"[SpotifyPlayer] Deezer search error: {e}")
        return None

def search_album_itunes(query: str) -> Optional[Dict[str, Any]]:
    try:
        url = f"https://itunes.apple.com/search?term={urllib.parse.quote(query)}&entity=album&limit=1"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=5) as res:
            data = json.loads(res.read().decode("utf-8"))

        if not data.get("results"):
            return None

        first = data["results"][0]
        collection_id = first["collectionId"]
        album_name = first.get("collectionName", "Unknown Album")
        artist_name = first.get("artistName", "Unknown Artist")
        cover_url = first.get("artworkUrl100", "").replace("100x100bb", "600x600bb")

        # Lookup tracks in collection
        lookup_url = f"https://itunes.apple.com/lookup?id={collection_id}&entity=song"
        with urllib.request.urlopen(urllib.request.Request(lookup_url, headers={"User-Agent": "Mozilla/5.0"}), timeout=5) as res:
            lookup_data = json.loads(res.read().decode("utf-8"))

        tracks = []
        for item in lookup_data.get("results", []):
            if item.get("wrapperType") == "track":
                tracks.append({
                    "title": item.get("trackName", "Unknown Track"),
                    "duration": int(item.get("trackTimeMillis", 180000) / 1000),
                    "artist": item.get("artistName", artist_name)
                })

        if not tracks:
            return None

        return {
            "album": album_name,
            "artist": artist_name,
            "cover_url": cover_url,
            "tracks": tracks
        }
    except Exception as e:
        print(f"[SpotifyPlayer] iTunes fallback error: {e}")
        return None

def fetch_album_metadata(artist: str, album_query: str) -> Dict[str, Any]:
    """
    Searches for an album by artist and approximate album title using primary and fallback providers.
    """
    clean_artist = artist.strip()
    clean_album = album_query.strip()
    full_query = f"{clean_artist} {clean_album}".strip()

    if not full_query:
        raise SpotifySearchError("Empty search terms provided.")

    # 1. Primary: Deezer
    res = search_album_deezer(full_query)
    if res and res.get("tracks"):
        return res

    # 2. Fallback: iTunes
    res = search_album_itunes(full_query)
    if res and res.get("tracks"):
        return res

    raise SpotifySearchError(
        f"Could not find any matching album for '{clean_album}' by '{clean_artist}'. "
        "Please verify the artist/album spelling."
    )

class SpotifyPlayer:
    """
    Manages sequential album playback via discord.Spotify Rich Presence.
    """
    def __init__(self):
        self.current_task: Optional[asyncio.Task] = None
        self.current_album_info: Optional[Dict[str, Any]] = None
        self.current_track_index: int = 0
        self.is_running: bool = False

    def is_playing(self) -> bool:
        return self.is_running and self.current_task is not None and not self.current_task.done()

    def get_current_info(self) -> Optional[Dict[str, Any]]:
        if not self.is_playing() or not self.current_album_info:
            return None
        tracks = self.current_album_info.get("tracks", [])
        current_track = tracks[self.current_track_index] if self.current_track_index < len(tracks) else None
        return {
            "album": self.current_album_info.get("album"),
            "artist": self.current_album_info.get("artist"),
            "current_track": current_track,
            "track_index": self.current_track_index + 1,
            "total_tracks": len(tracks)
        }

    async def play_album(
        self,
        client: discord.Client,
        album_data: Dict[str, Any],
        ctx_channel: Optional[discord.abc.Messageable] = None
    ) -> None:
        """
        Starts sequential playback of the album tracks in order.
        """
        # Cancel any active background playback task
        await self.stop(client)

        self.current_album_info = album_data
        self.is_running = True
        self.current_task = asyncio.create_task(self._playback_loop(client, album_data))

    async def _playback_loop(self, client: discord.Client, album_data: Dict[str, Any]) -> None:
        tracks: List[Dict[str, Any]] = album_data.get("tracks", [])
        album_name = album_data.get("album", "Unknown Album")
        artist_name = album_data.get("artist", "Unknown Artist")
        cover_url = album_data.get("cover_url")

        try:
            for idx, track in enumerate(tracks):
                self.current_track_index = idx
                title = track.get("title", "Unknown Track")
                duration_sec = max(10, track.get("duration", 180))
                artist = track.get("artist", artist_name)

                start_time = datetime.datetime.now(datetime.timezone.utc)
                duration = datetime.timedelta(seconds=duration_sec)

                spotify_activity = discord.Spotify(
                    title=title,
                    artists=[artist],
                    album=album_name,
                    album_cover_url=cover_url,
                    start_time=start_time,
                    duration=duration,
                    party_owner_id=client.user.id
                )

                await client.change_presence(activity=spotify_activity)
                print(f"[SpotifyPlayer] Playing track {idx+1}/{len(tracks)}: '{title}' ({duration_sec}s)")

                # Sleep duration of the track
                await asyncio.sleep(duration_sec)

            print(f"[SpotifyPlayer] Album '{album_name}' finished.")
            # Clear presence once album ends
            await client.change_presence(activity=None)
        except asyncio.CancelledError:
            print("[SpotifyPlayer] Playback task cancelled.")
        except Exception as e:
            print(f"[SpotifyPlayer] Playback loop error: {e}")
        finally:
            self.is_running = False
            self.current_album_info = None

    async def stop(self, client: discord.Client) -> bool:
        """
        Stops the Spotify player and resets Discord presence.
        """
        was_playing = self.is_playing()
        if self.current_task and not self.current_task.done():
            self.current_task.cancel()
            try:
                await self.current_task
            except asyncio.CancelledError:
                pass
            except Exception:
                pass

        self.current_task = None
        self.is_running = False
        self.current_album_info = None

        try:
            await client.change_presence(activity=None)
        except Exception as e:
            print(f"[SpotifyPlayer] Failed to clear presence: {e}")

        return was_playing
