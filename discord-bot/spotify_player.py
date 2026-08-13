"""
spotify_player.py - Advanced Spotify Rich Presence album player with native Spotify CDN image hashing, robust task management, and presence wiping.
"""
from __future__ import annotations
import asyncio
import datetime
import json
import re
import urllib.parse
import urllib.request
from typing import Dict, List, Optional, Any, Tuple
import discord
from curl_cffi import requests

class SpotifySearchError(Exception):
    pass

class SpotifyConflictError(Exception):
    pass

def search_spotify_native(artist: str, album_query: str) -> Optional[Dict[str, Any]]:
    """
    Searches Spotify directly to obtain the real Spotify CDN image hash (spotify:ab67...)
    and accurate Spotify track IDs for rich presence rendering.
    """
    query = f"{artist} {album_query} spotify album".strip()
    session = requests.Session(impersonate="chrome")

    album_ids: List[str] = []

    # 1. Search DDG HTML for open.spotify.com/album/
    try:
        ddg_url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
        r = session.get(ddg_url, timeout=6)
        if r.status_code == 200:
            found = re.findall(r"open\.spotify\.com(?:%2F|/)album(?:%2F|/)([a-zA-Z0-9]{22})", r.text)
            album_ids.extend(found)
    except Exception as e:
        print(f"[SpotifyPlayer] DDG scrape error: {e}")

    # 2. Fallback: Bing Search
    if not album_ids:
        try:
            bing_url = f"https://www.bing.com/search?q={urllib.parse.quote(query)}"
            r_bing = session.get(bing_url, timeout=6)
            if r_bing.status_code == 200:
                found = re.findall(r"open\.spotify\.com/album/([a-zA-Z0-9]{22})", r_bing.text)
                album_ids.extend(found)
        except Exception as e:
            print(f"[SpotifyPlayer] Bing scrape error: {e}")

    if not album_ids:
        return None

    album_id = album_ids[0]

    # Fetch album embed metadata
    try:
        embed_url = f"https://open.spotify.com/embed/album/{album_id}"
        r_embed = session.get(embed_url, timeout=6)
        if r_embed.status_code != 200:
            return None

        matches = re.findall(r'<script id="__NEXT_DATA__"[^>]*>(.*?)</script>', r_embed.text, re.DOTALL)
        if not matches:
            return None

        data = json.loads(matches[0])
        entity = data.get("props", {}).get("pageProps", {}).get("state", {}).get("data", {}).get("entity", {})
        if not entity:
            return None

        title = entity.get("title") or entity.get("name", "Unknown Album")
        artists = [a.get("name") for a in entity.get("artists", []) if a.get("name")]
        artist_display = ", ".join(artists) if artists else artist

        # Extract real Spotify image hash
        image_hash = None
        visual_images = entity.get("visualIdentity", {}).get("image", [])
        cover_images = entity.get("coverArt", {}).get("sources", [])
        all_images = visual_images + cover_images

        for img in all_images:
            url = img.get("url", "")
            img_match = re.search(r"image/([a-zA-Z0-9]+)", url)
            if img_match:
                image_hash = img_match.group(1)
                break

        track_list = entity.get("trackList", [])
        tracks = []
        for t in track_list:
            t_artists = [a.get("name") for a in t.get("artists", []) if a.get("name")]
            track_artist = ", ".join(t_artists) if t_artists else artist_display
            uri = t.get("uri", "")
            track_id = uri.replace("spotify:track:", "") if "spotify:track:" in uri else None

            tracks.append({
                "title": t.get("title", "Unknown Track"),
                "duration": int(t.get("duration", 180000) / 1000),
                "artist": track_artist,
                "track_id": track_id
            })

        if not tracks:
            return None

        return {
            "album": title,
            "artist": artist_display,
            "album_id": album_id,
            "image_hash": image_hash,
            "spotify_image": f"spotify:{image_hash}" if image_hash else None,
            "tracks": tracks
        }
    except Exception as e:
        print(f"[SpotifyPlayer] Embed parse error: {e}")
        return None

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

        tracks_url = f"https://api.deezer.com/album/{album_id}/tracks"
        with urllib.request.urlopen(urllib.request.Request(tracks_url, headers={"User-Agent": "Mozilla/5.0"}), timeout=5) as res:
            tracks_data = json.loads(res.read().decode("utf-8"))

        tracks = []
        for t in tracks_data.get("data", []):
            tracks.append({
                "title": t.get("title", "Unknown Track"),
                "duration": int(t.get("duration", 180)),
                "artist": t.get("artist", {}).get("name", artist_name),
                "track_id": None
            })

        if not tracks:
            return None

        return {
            "album": album_title,
            "artist": artist_name,
            "cover_url": cover_url,
            "spotify_image": None,
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

        lookup_url = f"https://itunes.apple.com/lookup?id={collection_id}&entity=song"
        with urllib.request.urlopen(urllib.request.Request(lookup_url, headers={"User-Agent": "Mozilla/5.0"}), timeout=5) as res:
            lookup_data = json.loads(res.read().decode("utf-8"))

        tracks = []
        for item in lookup_data.get("results", []):
            if item.get("wrapperType") == "track":
                tracks.append({
                    "title": item.get("trackName", "Unknown Track"),
                    "duration": int(item.get("trackTimeMillis", 180000) / 1000),
                    "artist": item.get("artistName", artist_name),
                    "track_id": None
                })

        if not tracks:
            return None

        return {
            "album": album_name,
            "artist": artist_name,
            "cover_url": cover_url,
            "spotify_image": None,
            "tracks": tracks
        }
    except Exception as e:
        print(f"[SpotifyPlayer] iTunes fallback error: {e}")
        return None

def fetch_album_metadata(artist: str, album_query: str) -> Dict[str, Any]:
    """
    Searches for an album by artist and approximate album title.
    Prioritizes native Spotify metadata to obtain real Spotify CDN image hashes (spotify:ab67...)
    and Spotify track IDs. Falls back to Deezer and iTunes.
    """
    clean_artist = artist.strip()
    clean_album = album_query.strip()
    full_query = f"{clean_artist} {clean_album}".strip()

    if not full_query:
        raise SpotifySearchError("Empty search terms provided.")

    # 1. Primary: Native Spotify search & embed extraction
    res_spotify = search_spotify_native(clean_artist, clean_album)
    if res_spotify and res_spotify.get("tracks"):
        return res_spotify

    # 2. Secondary: Deezer search
    res_deezer = search_album_deezer(full_query)
    if res_deezer and res_deezer.get("tracks"):
        return res_deezer

    # 3. Tertiary: iTunes fallback
    res_itunes = search_album_itunes(full_query)
    if res_itunes and res_itunes.get("tracks"):
        return res_itunes

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
        return (self.is_running or (self.current_task is not None and not self.current_task.done()))

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
        await self.stop(client)

        self.current_album_info = album_data
        self.is_running = True
        self.current_task = asyncio.create_task(self._playback_loop(client, album_data))

    async def _playback_loop(self, client: discord.Client, album_data: Dict[str, Any]) -> None:
        tracks: List[Dict[str, Any]] = album_data.get("tracks", [])
        album_name = album_data.get("album", "Unknown Album")
        artist_name = album_data.get("artist", "Unknown Artist")
        spotify_image = album_data.get("spotify_image") or album_data.get("cover_url")
        album_id = album_data.get("album_id")

        try:
            for idx, track in enumerate(tracks):
                self.current_track_index = idx
                title = track.get("title", "Unknown Track")
                duration_sec = max(10, track.get("duration", 180))
                artist = track.get("artist", artist_name)
                track_id = track.get("track_id")

                start_time = datetime.datetime.now(datetime.timezone.utc)
                duration = datetime.timedelta(seconds=duration_sec)

                spotify_activity = discord.Spotify(
                    title=title,
                    artists=[artist],
                    album=album_name,
                    album_id=album_id,
                    track_id=track_id,
                    album_cover_url=spotify_image,
                    start_time=start_time,
                    duration=duration,
                    party_owner_id=client.user.id if client.user else 0
                )
                
                # IMPORTANT: Inject official Spotify application ID so Discord clients render the spotify: prefix image hashes
                spotify_activity.application_id = "159714140401418240"

                await client.change_presence(activities=[spotify_activity])
                print(f"[SpotifyPlayer] Playing track {idx+1}/{len(tracks)}: '{title}' ({duration_sec}s, image: {spotify_image})")

                # Sleep duration of the track
                await asyncio.sleep(duration_sec)

            print(f"[SpotifyPlayer] Album '{album_name}' finished.")
        except asyncio.CancelledError:
            print("[SpotifyPlayer] Playback task cancelled.")
        except Exception as e:
            print(f"[SpotifyPlayer] Playback loop error: {e}")
        finally:
            self.is_running = False
            self.current_album_info = None
            try:
                await client.change_presence(activities=[])
            except Exception as e:
                print(f"[SpotifyPlayer] Error resetting presence in finally: {e}")

    async def stop(self, client: discord.Client) -> bool:
        """
        Stops the Spotify player and resets Discord presence completely.
        """
        was_active = self.is_playing()

        if self.current_task and not self.current_task.done():
            self.current_task.cancel()
            try:
                await asyncio.wait_for(self.current_task, timeout=1.0)
            except (asyncio.CancelledError, asyncio.TimeoutError, Exception):
                pass

        self.current_task = None
        self.is_running = False
        self.current_album_info = None

        # Always explicitly wipe activities from presence
        try:
            await client.change_presence(activities=[])
        except Exception as e:
            print(f"[SpotifyPlayer] Failed to clear presence: {e}")

        return was_active
