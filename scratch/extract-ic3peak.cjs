const fs = require('fs');

const lyrics = fs.readFileSync('src/data/lyrics.ts', 'utf8');
const jsonStr = lyrics.split('export const songsDictionary: Record<string, SongData> = ')[1];

let dict;
eval('dict = ' + jsonStr);

const verses = dict["IC3PEAK - Boo-Hoo.mp4"].lyricsData.map(v => v.words.map(w => w.word).join(' '));

fs.writeFileSync('scratch/ic3peak.json', JSON.stringify(verses, null, 2));
console.log('Saved to scratch/ic3peak.json');
