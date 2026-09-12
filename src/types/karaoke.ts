export interface Word {
  word: string;
  start: number;
  end: number;
  furigana?: string;
}

export interface Verse {
  verseStart: number;
  verseEnd: number;
  speaker?: string;
  translation?: string;
  words: Word[];
}

export interface SongMetadata {
  id: string;
  videoFile: string;
  title: string;
  artist: string;
  itunesArtist?: string;
  itunesTrack?: string;
  globalOffset: number;
  hasTranslation: boolean;
  isDialect: boolean;
}

export interface SongLyricFile extends SongMetadata {
  lyricsData: Verse[];
}

/**
 * Catalog item enriched with Cloudflare R2 and Git lyrics availability
 */
export interface SongCatalogItem extends SongMetadata {
  isOnR2: boolean;
  hasLyrics: boolean;
  videoUrl: string;
  lyricsUrl?: string | null;
}

/**
 * Contract for the future Lyrics Sync Dashboard
 */
export interface SaveLyricsPayload {
  id: string;
  videoFile: string;
  title: string;
  artist: string;
  itunesArtist?: string;
  itunesTrack?: string;
  globalOffset: number;
  isDialect?: boolean;
  hasTranslation?: boolean;
  lyricsData: Verse[];
}

export interface SaveLyricsResponse {
  success: boolean;
  id: string;
  filePath?: string;
  error?: string;
}

export interface R2VideoItem {
  key: string;
  size?: number;
  uploaded?: string;
}
