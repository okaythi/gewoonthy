const fs = require('fs');
const https = require('https');

const songs = [
  { file: "San Joe - Desculpa Ai Doutor.mp4", query: "San Joe Desculpa Doutor" },
  { file: "VIDEOCLUB - Roi.mp4", query: "VIDEOCLUB Roi" },
  { file: "Kero Kero Bonito - Break.mp4", query: "Kero Kero Bonito Break" }
];

const targetFile = 'C:\\\\Users\\\\thy\\\\Projects\\\\gewoonthy\\\\src\\\\data\\\\lyrics.ts';

function fetchLyrics(query) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching lyrics for: ${query}`);
    const url = `https://lrclib.net/api/search?q=${encodeURIComponent(query)}`;
    
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json && json.length > 0) {
            resolve(json[0].plainLyrics || json[0].syncedLyrics);
          } else {
            resolve(null);
          }
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function parseToVerses(lyricsStr) {
  const lines = lyricsStr.split('\n').map(l => l.trim()).filter(l => l);
  const verses = [];
  
  let time = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Remove existing LRCLIB timestamps if it returned synced lyrics
    const cleanLine = line.replace(/^\[\d{2}:\d{2}\.\d{2,3}\]\s*/, '');
    
    // Split by space
    const tokens = cleanLine.split(/\s+/).filter(Boolean);
    const words = [];
    
    for (const token of tokens) {
      words.push({ word: token, start: 0, end: 0 });
    }
    
    verses.push({
      verseStart: time,
      verseEnd: time + 3,
      words
    });
    time += 3;
  }
  return verses;
}

async function main() {
  let fileContent = fs.readFileSync(targetFile, 'utf8');
  let appended = false;

  for (const song of songs) {
    if (fileContent.includes(`"${song.file}"`)) {
      console.log(`Song ${song.file} already exists in lyrics.ts. Skipping.`);
      continue;
    }

    let lyricsStr;
    try {
      lyricsStr = await fetchLyrics(song.query);
    } catch(e) {
      console.error(`Error fetching ${song.query}:`, e);
      continue;
    }
    
    if (!lyricsStr) {
      console.log(`Could not find lyrics for ${song.query}`);
      continue;
    }

    const verses = parseToVerses(lyricsStr);
    const songData = {
      globalOffset: 0,
      lyricsData: verses
    };

    const songDataStr = `\n  "${song.file}": ${JSON.stringify(songData, null, 4).replace(/\n/g, '\n  ')},`;
    
    const lastBraceIndex = fileContent.lastIndexOf('};');
    if (lastBraceIndex !== -1) {
      fileContent = fileContent.substring(0, lastBraceIndex) + songDataStr + '\n' + fileContent.substring(lastBraceIndex);
      appended = true;
      console.log(`Added ${song.file} to lyrics.ts`);
    }
  }

  if (appended) {
    fs.writeFileSync(targetFile, fileContent);
    console.log("Successfully updated lyrics.ts");
  }
}

main().catch(console.error);
