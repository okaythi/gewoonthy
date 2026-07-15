const http = require('http');
const fs = require('fs');
const path = require('path');

const targetPath = 'C:\\\\Users\\\\thy\\\\Projects\\\\gewoonthy\\\\src\\\\data\\\\lyrics.ts';

const server = http.createServer((req, res) => {
  // Setup CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/save') {
    req.on('error', (err) => console.error('Request error:', err.message));
    res.on('error', (err) => console.error('Response error:', err.message));
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const { songKey, globalOffset, lyricsData } = JSON.parse(body);
        
        let tsContent = fs.readFileSync(targetPath, 'utf8');
        let jsonString = tsContent.split('export const songsDictionary: Record<string, SongData> = ')[1];
        if (!jsonString) throw new Error('Could not parse dictionary from lyrics.ts');
        jsonString = jsonString.trim().replace(/;$/, '');
        let dict = JSON.parse(jsonString);

        if (!dict[songKey]) {
          dict[songKey] = { globalOffset: 0, lyricsData: [] };
        }
        dict[songKey].globalOffset = globalOffset;
        dict[songKey].lyricsData = lyricsData;

        const newFileContent = `export interface Word {
  word: string;
  start: number;
  end: number;
  furigana?: string;
}

export interface Verse {
  verseStart: number;
  verseEnd: number;
  speaker?: string;
  words: Word[];
}

export interface SongData {
  globalOffset: number;
  lyricsData: Verse[];
}

export const songsDictionary: Record<string, SongData> = ${JSON.stringify(dict, null, 2)};
`;
        
        fs.writeFileSync(targetPath, newFileContent, 'utf8');
        console.log('Saved updated lyrics for', songKey);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));
      } catch (e) {
        console.error('Error saving lyrics:', e);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: e.message }));
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

const PORT = 4322;
server.listen(PORT, () => {
  console.log(`Sync Server listening on http://localhost:${PORT}`);
});
