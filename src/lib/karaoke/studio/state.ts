import type { StudioState, FilterMode } from './types';
import type { SongCatalogItem, Verse } from '../../../types/karaoke';

export const state: StudioState = {
  catalog: [],
  currentFilter: 'all',
  activeSong: null,
  localLyrics: [],
  globalOffset: 0,
  currentV: 0,
  currentW: 0,
  playbackRate: 1.0,
};

export function setCatalog(newCatalog: SongCatalogItem[]) {
  state.catalog = newCatalog;
}

export function setFilter(filter: FilterMode) {
  state.currentFilter = filter;
}

export function setActiveSong(song: SongCatalogItem | null) {
  state.activeSong = song;
}

export function setLyrics(lyrics: Verse[]) {
  state.localLyrics = lyrics;
}

export function setOffset(offset: number) {
  state.globalOffset = offset;
}

export function setPlaybackRate(rate: number) {
  state.playbackRate = rate;
}

export function setTargetIndices(v: number, w: number) {
  state.currentV = v;
  state.currentW = w;
}
