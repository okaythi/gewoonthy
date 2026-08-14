const fs = require('fs');

const lyrics = fs.readFileSync('src/data/lyrics.ts', 'utf8');
const jsonStr = lyrics.split('export const songsDictionary: Record<string, SongData> = ')[1].replace(/;$/, '');

let dict;
eval('dict = ' + jsonStr);

const songData = dict["Zaterdag.mp4"];
if (!songData) {
  console.error('Song not found');
  process.exit(1);
}

const verses = songData.lyricsData.map(v => v.words.map(w => w.word).join(' '));

fs.writeFileSync('scratch/zaterdag.json', JSON.stringify(verses, null, 2));
console.log('Saved to scratch/zaterdag.json');
