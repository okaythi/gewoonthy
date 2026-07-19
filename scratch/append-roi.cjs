const fs = require('fs');

const lyrics = `J'suis un garçon de la nuit, moi je laisse tomber les filles
Je n'aime que tes bas résilles qui dans mes pensées grésillent
J'suis un garçon de la nuit, moi je laisse tomber les filles
Je n'aime que tes bas résilles qui dans mes pensées grésillent

Aime-moi dans la neige, aime-moi sous le soleil
Aime-moi la peau beige dans les fleurs de vermeille
Aime-moi dans la neige, aime-moi sous le soleil
Aime-moi la peau beige dans les fleurs de vermeille`;

const targetFile = 'C:\\\\Users\\\\thy\\\\Projects\\\\gewoonthy\\\\src\\\\data\\\\lyrics.ts';

function parseToVerses(lyricsStr) {
  const lines = lyricsStr.split('\n').map(l => l.trim()).filter(l => l);
  const verses = [];
  
  let time = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const tokens = line.split(/\s+/).filter(Boolean);
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

function main() {
  let fileContent = fs.readFileSync(targetFile, 'utf8');

  // Find VIDEOCLUB entry
  const startIdx = fileContent.indexOf('"VIDEOCLUB - Roi.mp4"');
  if (startIdx === -1) {
    console.error("Could not find VIDEOCLUB entry");
    return;
  }
  
  // Find the end of lyricsData array for VIDEOCLUB
  // We look for the "Kero Kero Bonito - Break.mp4" entry which is immediately after it, and find the `]` right before it.
  const nextSongIdx = fileContent.indexOf('"Kero Kero Bonito - Break.mp4"', startIdx);
  if (nextSongIdx === -1) {
      console.error("Could not find next song entry");
      return;
  }

  // The end of the lyricsData array is the last `]` before nextSongIdx
  const endBracketIdx = fileContent.lastIndexOf(']', nextSongIdx);

  const verses = parseToVerses(lyrics);
  // Format the verses as JSON and remove the outer `[` and `]`
  let versesJson = JSON.stringify(verses, null, 4);
  versesJson = versesJson.substring(1, versesJson.length - 1);
  // Add proper indentation (8 spaces)
  versesJson = versesJson.split('\n').map(l => '    ' + l).join('\n');
  
  // We need to add a comma before the new verses
  const insertionStr = `,\n${versesJson}`;
  
  fileContent = fileContent.substring(0, endBracketIdx) + insertionStr + '\n    ' + fileContent.substring(endBracketIdx);
  
  fs.writeFileSync(targetFile, fileContent);
  console.log("Successfully appended new lyrics to VIDEOCLUB - Roi.mp4");
}

main();
