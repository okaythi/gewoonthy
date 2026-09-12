import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { SaveLyricsPayload, SongMetadata } from '../src/types/karaoke';
import { validateSongContract } from '../src/lib/karaoke/naming';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');

const lyricsDir = path.join(projectRoot, 'src', 'data', 'lyrics');
const manifestPath = path.join(projectRoot, 'src', 'data', 'songs-manifest.json');

// Ensure lyrics directory exists
if (!fs.existsSync(lyricsDir)) {
  fs.mkdirSync(lyricsDir, { recursive: true });
}

const PORT = Number(process.env.PORT) || 4322;

const server = http.createServer(async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);

  // Health check endpoint
  if (req.method === 'GET' && url.pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', port: PORT, time: new Date().toISOString() }));
    return;
  }

  // Save lyrics endpoint
  if (req.method === 'POST' && url.pathname === '/save') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        const payload = JSON.parse(body) as SaveLyricsPayload;

        const validation = validateSongContract(payload);
        if (!validation.valid) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: false, errors: validation.errors }));
          return;
        }

        // 1. Write individual lyric JSON file
        const songFilePath = path.join(lyricsDir, `${payload.id}.json`);
        fs.writeFileSync(songFilePath, JSON.stringify(payload, null, 2), 'utf8');

        // 2. Update songs-manifest.json atomically
        let manifest: SongMetadata[] = [];
        if (fs.existsSync(manifestPath)) {
          try {
            manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
          } catch (e) {
            manifest = [];
          }
        }

        const meta: SongMetadata = {
          id: payload.id,
          videoFile: payload.videoFile,
          title: payload.title,
          artist: payload.artist,
          globalOffset: payload.globalOffset || 0,
          hasTranslation: !!payload.hasTranslation,
          isDialect: !!payload.isDialect
        };

        if (payload.itunesArtist) meta.itunesArtist = payload.itunesArtist;
        if (payload.itunesTrack) meta.itunesTrack = payload.itunesTrack;

        const existingIdx = manifest.findIndex(m => m.id === payload.id);
        if (existingIdx >= 0) {
          manifest[existingIdx] = meta;
        } else {
          manifest.push(meta);
        }

        manifest.sort((a, b) => a.title.localeCompare(b.title, undefined, { sensitivity: 'base' }));
        fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');

        console.log(`[Sync Server] ✅ Saved lyrics for: "${payload.title}" (${payload.id}) -> ${songFilePath}`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          id: payload.id,
          filePath: `src/data/lyrics/${payload.id}.json`
        }));
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        console.error('[Sync Server] ❌ Error saving lyrics:', msg);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: msg }));
      }
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Endpoint not found' }));
});

server.listen(PORT, () => {
  console.log(`\n🎵 [Karaoke Sync Daemon] listening on http://localhost:${PORT}`);
  console.log(`   Target Directory: ${lyricsDir}`);
  console.log(`   Target Manifest:  ${manifestPath}\n`);
});
