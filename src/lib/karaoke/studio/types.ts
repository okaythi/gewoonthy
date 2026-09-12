import type { SongCatalogItem, Verse, Word, SaveLyricsPayload } from '../../../types/karaoke';

export type FilterMode = 'all' | 'needs_sync' | 'synced';

export interface StudioState {
  catalog: SongCatalogItem[];
  currentFilter: FilterMode;
  activeSong: SongCatalogItem | null;
  localLyrics: Verse[];
  globalOffset: number;
  currentV: number;
  currentW: number;
  playbackRate: number;
}
