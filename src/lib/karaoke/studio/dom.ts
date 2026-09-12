/**
 * Strongly-typed DOM element cache for the Karaoke Studio
 */
export function getStudioElements() {
  return {
    studioGrid: document.getElementById('studio-grid') as HTMLElement,
    btnToggleSidebar: document.getElementById('btn-toggle-sidebar') as HTMLButtonElement,
    vid: document.getElementById('studio-video') as HTMLVideoElement,
    trackSelector: document.getElementById('track-selector') as HTMLSelectElement,
    matrixPane: document.getElementById('matrix-pane') as HTMLElement,
    versesContainer: document.getElementById('verses-container') as HTMLElement,

    hudCurrentTime: document.getElementById('hud-current-time') as HTMLElement,
    hudTotalTime: document.getElementById('hud-total-time') as HTMLElement,
    offsetDisplay: document.getElementById('offset-display') as HTMLElement,

    timelineTrack: document.getElementById('timeline-track') as HTMLElement,
    timelinePlayhead: document.getElementById('timeline-playhead') as HTMLElement,
    timelineBlocksContainer: document.getElementById('timeline-blocks-container') as HTMLElement,

    activeHud: document.getElementById('active-hud') as HTMLElement,
    activeHudWords: document.getElementById('active-hud-words') as HTMLElement,
    activeHudTranslation: document.getElementById('active-hud-translation') as HTMLElement,

    trackArtImg: document.getElementById('track-art-img') as HTMLImageElement,
    artStatusBadge: document.getElementById('art-status-badge') as HTMLElement,
    syncProgressFill: document.getElementById('sync-progress-fill') as HTMLElement,
    statsWordsTimed: document.getElementById('stats-words-timed') as HTMLElement,
    statsVersesCount: document.getElementById('stats-verses-count') as HTMLElement,
    statsR2Status: document.getElementById('stats-r2-status') as HTMLElement,

    metaId: document.getElementById('meta-id') as HTMLInputElement,
    metaTitle: document.getElementById('meta-title') as HTMLInputElement,
    metaArtist: document.getElementById('meta-artist') as HTMLInputElement,
    metaItunesTrack: document.getElementById('meta-itunes-track') as HTMLInputElement,
    metaItunesArtist: document.getElementById('meta-itunes-artist') as HTMLInputElement,
    metaHasTranslation: document.getElementById('meta-has-translation') as HTMLInputElement,
    metaIsDialect: document.getElementById('meta-is-dialect') as HTMLInputElement,

    btnPlayPause: document.getElementById('btn-play-pause') as HTMLButtonElement,
    playPauseLabel: document.getElementById('play-pause-label') as HTMLElement,
    btnSeekBack: document.getElementById('btn-seek-back') as HTMLButtonElement,
    btnSeekFwd: document.getElementById('btn-seek-fwd') as HTMLButtonElement,
    btnWipe: document.getElementById('btn-wipe-timestamps') as HTMLButtonElement,
    btnSaveMaster: document.getElementById('btn-save-master') as HTMLButtonElement,
    btnSaveTelemetry: document.getElementById('btn-save-telemetry') as HTMLButtonElement | null,
    btnSaveDeck: document.getElementById('btn-save-deck') as HTMLButtonElement | null,
    btnExportJson: document.getElementById('btn-export-json') as HTMLButtonElement,
    btnShortcuts: document.getElementById('btn-shortcuts') as HTMLButtonElement,
    btnAddVerse: document.getElementById('btn-add-verse') as HTMLButtonElement,

    toastHud: document.getElementById('toast-hud') as HTMLElement,
    toastMessage: document.getElementById('toast-message') as HTMLElement,
    toastDot: document.getElementById('toast-dot') as HTMLElement,

    // Upload modal
    uploadModal: document.getElementById('upload-modal') as HTMLElement,
    btnOpenUpload: document.getElementById('btn-open-upload') as HTMLButtonElement,
    btnCloseUpload: document.getElementById('btn-close-upload') as HTMLButtonElement,
    btnCancelUpload: document.getElementById('btn-cancel-upload') as HTMLButtonElement,
    btnStartUpload: document.getElementById('btn-start-upload') as HTMLButtonElement,
    uploadFileInput: document.getElementById('upload-file-input') as HTMLInputElement,
    uploadArtistInput: document.getElementById('upload-artist-input') as HTMLInputElement,
    uploadTitleInput: document.getElementById('upload-title-input') as HTMLInputElement,
    uploadCanonicalKey: document.getElementById('upload-canonical-key') as HTMLInputElement,
    uploadProgressContainer: document.getElementById('upload-progress-container') as HTMLElement,
    uploadProgressFill: document.getElementById('upload-progress-fill') as HTMLElement,
    uploadPctText: document.getElementById('upload-pct-text') as HTMLElement,

    // Ingest modal
    ingestModal: document.getElementById('ingest-modal') as HTMLElement,
    btnOpenIngest: document.getElementById('btn-open-ingest') as HTMLButtonElement,
    btnCloseIngest: document.getElementById('btn-close-ingest') as HTMLButtonElement,
    btnCancelIngest: document.getElementById('btn-cancel-ingest') as HTMLButtonElement,
    btnApplyIngest: document.getElementById('btn-apply-ingest') as HTMLButtonElement,
    rawLyricsInput: document.getElementById('raw-lyrics-input') as HTMLTextAreaElement,

    // Shortcuts modal
    shortcutsModal: document.getElementById('shortcuts-modal') as HTMLElement,
    btnCloseShortcuts: document.getElementById('btn-close-shortcuts') as HTMLButtonElement,
    btnDismissShortcuts: document.getElementById('btn-dismiss-shortcuts') as HTMLButtonElement,

    // Export modal
    exportModal: document.getElementById('export-modal') as HTMLElement,
    btnCloseExport: document.getElementById('btn-close-export') as HTMLButtonElement,
    btnCopyExport: document.getElementById('btn-copy-export') as HTMLButtonElement,
    btnDownloadExport: document.getElementById('btn-download-export') as HTMLButtonElement,
    exportJsonDisplay: document.getElementById('export-json-display') as HTMLTextAreaElement,
  };
}
