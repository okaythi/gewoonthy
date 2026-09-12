import type { SongMetadata, SongCatalogItem, SongLyricFile, R2VideoItem } from '../../types/karaoke';
import manifestData from '../../data/songs-manifest.json';
import { parseSongInfoFromFilename, canonicalSongId } from './naming';

// Vite lazy-load mapping for all individual lyric files committed to git
const lyricModules = import.meta.glob('../../data/lyrics/*.json');

/**
 * Returns static song metadata committed to git
 */
export function getLocalManifest(): SongMetadata[] {
  return manifestData as SongMetadata[];
}

/**
 * Fetches the list of video files physically uploaded to Cloudflare R2
 */
export async function fetchR2Videos(): Promise<string[] | null> {
  try {
    const res = await fetch('/api/karaoke/videos');
    if (!res.ok) return null;
    const data = await res.json();
    if (Array.isArray(data)) {
      return data.map((v: R2VideoItem | string) => typeof v === 'string' ? v : v.key);
    }
    if (data && Array.isArray(data.videos)) {
      return data.videos.map((v: R2VideoItem | string) => typeof v === 'string' ? v : v.key);
    }
    return null;
  } catch (err) {
    console.warn('[Karaoke Catalog] Failed to query /api/karaoke/videos, falling back to local list:', err);
    return null;
  }
}

/**
 * Re-export parseSongInfoFromFilename from naming module
 */
export { parseSongInfoFromFilename };

/**
 * Returns the unified catalog combining R2 storage videos and Git lyrics
 */
export async function loadCatalog(): Promise<SongCatalogItem[]> {
  const localSongs = getLocalManifest();
  const r2VideoKeys = await fetchR2Videos();

  const r2KeySet = r2VideoKeys ? new Set(r2VideoKeys) : null;
  const knownVideoFiles = new Set(localSongs.map(s => s.videoFile));

  // 1. Process all songs registered in the Git manifest
  const catalog: SongCatalogItem[] = localSongs.map(song => {
    const isOnR2 = r2KeySet ? r2KeySet.has(song.videoFile) : true;
    return {
      ...song,
      isOnR2,
      hasLyrics: true,
      videoUrl: `https://cdn.sudothy.me/${encodeURIComponent(song.videoFile)}`
    };
  });

  // 2. Discover unsynced videos in R2 (videos on R2 that don't have lyrics in git)
  if (r2VideoKeys) {
    for (const videoKey of r2VideoKeys) {
      if (!knownVideoFiles.has(videoKey)) {
        const { artist, title } = parseSongInfoFromFilename(videoKey);
        const slug = canonicalSongId(artist, title);
        catalog.push({
          id: slug,
          videoFile: videoKey,
          title,
          artist,
          globalOffset: 0,
          hasTranslation: false,
          isDialect: false,
          isOnR2: true,
          hasLyrics: false,
          videoUrl: `https://cdn.sudothy.me/${encodeURIComponent(videoKey)}`
        });
      }
    }
  }

  return catalog;
}

/**
 * Dynamically loads word/verse timing data for a specific song on demand.
 * Checks for live overlay from R2/cache first for zero-build-delay live updates,
 * then falls back to static git bundled JSON.
 */
export async function loadLyrics(songId: string): Promise<SongLyricFile | null> {
  // Check live overlay API first (if hosted on Cloudflare Pages)
  try {
    const liveRes = await fetch(`/api/karaoke/lyrics?id=${encodeURIComponent(songId)}`, {
      headers: { 'Accept': 'application/json' }
    });
    if (liveRes.ok) {
      const liveData = await liveRes.json();
      if (liveData && liveData.lyricsData) {
        return liveData as SongLyricFile;
      }
    }
  } catch (_) {
    // Non-blocking fallback to local bundle
  }

  // Fallback to static bundled module
  const targetPath = `../../data/lyrics/${songId}.json`;
  const loader = lyricModules[targetPath];
  if (!loader) {
    console.warn(`[Karaoke Catalog] No static lyrics found for "${songId}" at ${targetPath}`);
    return null;
  }
  try {
    const module = await loader() as { default: SongLyricFile } | SongLyricFile;
    return ('default' in module) ? module.default : module;
  } catch (err) {
    console.error(`[Karaoke Catalog] Error loading static lyrics for "${songId}":`, err);
    return null;
  }
}
