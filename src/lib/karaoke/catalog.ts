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
 * Fetches the list of video files and live lyrics overlays from Cloudflare R2
 */
export async function fetchR2Data(): Promise<{ videoKeys: string[]; liveLyrics: Set<string> } | null> {
  try {
    const res = await fetch('/api/karaoke/videos');
    if (!res.ok) return null;
    const data = await res.json();
    let videoList: (R2VideoItem | string)[] = [];
    let liveLyricsList: string[] = [];

    if (Array.isArray(data)) {
      videoList = data;
    } else if (data && typeof data === 'object') {
      if (Array.isArray(data.videos)) videoList = data.videos;
      if (Array.isArray(data.liveLyrics)) liveLyricsList = data.liveLyrics;
    }

    const videoKeys = videoList.map((v: R2VideoItem | string) => typeof v === 'string' ? v : v.key);
    return {
      videoKeys,
      liveLyrics: new Set(liveLyricsList)
    };
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
 * Returns the unified catalog combining R2 storage videos, Git lyrics, and R2 live overlay lyrics
 */
export async function loadCatalog(): Promise<SongCatalogItem[]> {
  const localSongs = getLocalManifest();
  const r2Data = await fetchR2Data();

  const r2KeySet = r2Data ? new Set(r2Data.videoKeys) : null;
  const liveLyricsSet = r2Data ? r2Data.liveLyrics : new Set<string>();
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

  // 2. Discover unsynced or live-synced videos in R2
  if (r2Data) {
    for (const videoKey of r2Data.videoKeys) {
      if (!knownVideoFiles.has(videoKey)) {
        const { artist, title } = parseSongInfoFromFilename(videoKey);
        const slug = canonicalSongId(artist, title);
        const hasLyrics = liveLyricsSet.has(slug);
        catalog.push({
          id: slug,
          videoFile: videoKey,
          title,
          artist,
          globalOffset: 0,
          hasTranslation: false,
          isDialect: false,
          isOnR2: true,
          hasLyrics,
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
