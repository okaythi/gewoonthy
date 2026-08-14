import json
import re
import urllib.parse
import urllib.request
from typing import Dict, Any, Optional, List
from curl_cffi import requests

class SpotifySearchError(Exception):
    pass

class SpotifyConflictError(Exception):
    pass

def search_spotify_native(artist: str, album_query: str) -> Optional[Dict[str, Any]]:
    query = f"{artist} {album_query} spotify album".strip()
    session = requests.Session(impersonate="chrome")
    album_ids: List[str] = []

    try:
        ddg_url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query)}"
        r = session.get(ddg_url, timeout=6)
        if r.status_code == 200:
            album_ids.extend(re.findall(r"open\.spotify\.com(?:%2F|/)album(?:%2F|/)([a-zA-Z0-9]{22})", r.text))
    except Exception:
        pass

    if not album_ids:
        try:
            bing_url = f"https://www.bing.com/search?q={urllib.parse.quote(query)}"
            r_bing = session.get(bing_url, timeout=6)
            if r_bing.status_code == 200:
                album_ids.extend(re.findall(r"open\.spotify\.com/album/([a-zA-Z0-9]{22})", r_bing.text))
        except Exception:
            pass

    if not album_ids:
        return None

    album_id = album_ids[0]

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

        image_hash = None
        all_images = entity.get("visualIdentity", {}).get("image", []) + entity.get("coverArt", {}).get("sources", [])

        for img in all_images:
            img_match = re.search(r"image/([a-zA-Z0-9]+)", img.get("url", ""))
            if img_match and img_match.group(1).startswith("ab67616d0000b273"):
                image_hash = img_match.group(1)
                break

        if not image_hash:
            for img in all_images:
                img_match = re.search(r"image/([a-zA-Z0-9]+)", img.get("url", ""))
                if img_match:
                    h = img_match.group(1)
                    image_hash = "ab67616d0000b273" + h[16:] if len(h) == 40 else h
                    break

        tracks = []
        for t in entity.get("trackList", []):
            t_artists = [a.get("name") for a in t.get("artists", []) if a.get("name")]
            uri = t.get("uri", "")
            tracks.append({
                "title": t.get("title", "Unknown Track"),
                "duration": int(t.get("duration", 180000) / 1000),
                "artist": ", ".join(t_artists) if t_artists else artist_display,
                "track_id": uri.replace("spotify:track:", "") if "spotify:track:" in uri else None
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
    except Exception:
        return None

def search_album_deezer(query: str) -> Optional[Dict[str, Any]]:
    try:
        req = urllib.request.Request(f"https://api.deezer.com/search/album?q={urllib.parse.quote(query)}", headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=5) as res:
            data = json.loads(res.read().decode("utf-8"))

        if not data.get("data"):
            return None

        first_album = data["data"][0]
        artist_name = first_album.get("artist", {}).get("name", "Unknown Artist")

        with urllib.request.urlopen(urllib.request.Request(f"https://api.deezer.com/album/{first_album['id']}/tracks", headers={"User-Agent": "Mozilla/5.0"}), timeout=5) as res:
            tracks_data = json.loads(res.read().decode("utf-8"))

        tracks = [{"title": t.get("title", "Unknown Track"), "duration": int(t.get("duration", 180)), "artist": t.get("artist", {}).get("name", artist_name), "track_id": None} for t in tracks_data.get("data", [])]

        if not tracks:
            return None

        return {
            "album": first_album.get("title", "Unknown Album"),
            "artist": artist_name,
            "cover_url": first_album.get("cover_xl") or first_album.get("cover_big") or first_album.get("cover_medium"),
            "spotify_image": None,
            "tracks": tracks
        }
    except Exception:
        return None

def search_album_itunes(query: str) -> Optional[Dict[str, Any]]:
    try:
        req = urllib.request.Request(f"https://itunes.apple.com/search?term={urllib.parse.quote(query)}&entity=album&limit=1", headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=5) as res:
            data = json.loads(res.read().decode("utf-8"))

        if not data.get("results"):
            return None

        first = data["results"][0]
        artist_name = first.get("artistName", "Unknown Artist")

        with urllib.request.urlopen(urllib.request.Request(f"https://itunes.apple.com/lookup?id={first['collectionId']}&entity=song", headers={"User-Agent": "Mozilla/5.0"}), timeout=5) as res:
            lookup_data = json.loads(res.read().decode("utf-8"))

        tracks = [{"title": item.get("trackName", "Unknown Track"), "duration": int(item.get("trackTimeMillis", 180000) / 1000), "artist": item.get("artistName", artist_name), "track_id": None} for item in lookup_data.get("results", []) if item.get("wrapperType") == "track"]

        if not tracks:
            return None

        return {
            "album": first.get("collectionName", "Unknown Album"),
            "artist": artist_name,
            "cover_url": first.get("artworkUrl100", "").replace("100x100bb", "600x600bb"),
            "spotify_image": None,
            "tracks": tracks
        }
    except Exception:
        return None

def fetch_album_metadata(artist: str, album_query: str) -> Dict[str, Any]:
    clean_artist, clean_album = artist.strip(), album_query.strip()
    full_query = f"{clean_artist} {clean_album}".strip()

    if not full_query:
        raise SpotifySearchError("Empty search terms provided.")

    for func, args in [(search_spotify_native, (clean_artist, clean_album)), (search_album_deezer, (full_query,)), (search_album_itunes, (full_query,))]:
        res = func(*args)
        if res and res.get("tracks"):
            return res

    raise SpotifySearchError(f"Could not find any matching album for '{clean_album}' by '{clean_artist}'. Please verify the artist/album spelling.")
