const fs = require('fs');

const translations = [
  "Boo-hoo, boo-hoo",
  "Boo-hoo, boo-hoo",
  "I wrote to you and waited for you in the night (boo-hoo)",
  "You don't answer my calls anymore (boo-hoo)",
  "Every evening I leave a tooth under the pillow (boo-hoo)",
  "Begging the heavens to bring you back (boo-hoo)",
  "I was good, and I wasn't bad (boo-hoo)",
  "All my life, like a good girl, I lived by the rules (boo-hoo)",
  "I'm tired of crying, I'm tired of suffering (boo-hoo)",
  "Still won't be able to foresee my own death (boo-hoo)",
  "La-la-la-la-la-a-a-a",
  "La-la-la-la-la-a-a-a",
  "Mum told me: \"Listen to your husband\"",
  "I'm not obedient, I make it worse",
  "I don't do it like dad ordered",
  "Instead of a star, I grab a grenade",
  "Mum told me: \"Listen to your husband\"",
  "I'm not obedient, I make it worse",
  "I don't do it like dad ordered",
  "Instead of a star, I grab a grenade",
  "I'd like to hug you like back then",
  "But for that I'd have to dig up the body",
  "Your ice-cold bones are somewhere down at the bottom",
  "Flowers will sprout in this wept-over earth",
  "Boo-hoo, boo-hoo",
  "Boo-hoo, boo-hoo",
  "Your brains are splattered all over the wall (boo-hoo)",
  "Got really angry at you, you gotta forgive me (boo-hoo)",
  "For the hundredth time in my sleep I watch your end (boo-hoo)",
  "And it's really not that scary to die (boo-hoo)",
  "I was good, and I wasn't bad (boo-hoo)",
  "And all my life like a good girl, I lived by the rules (boo-hoo)",
  "I'm tired of crying, I'm tired of suffering (boo-hoo)",
  "Still won't be able to foresee my own death (boo-hoo)",
  "Mum told me: \"Listen to your husband\"",
  "I'm not obedient, I make it worse",
  "I don't do it like dad ordered",
  "Instead of a star, I grab a grenade",
  "Mum told me: \"Listen to your husband\"",
  "I'm not obedient, I make it worse",
  "I don't do it like dad ordered",
  "Instead of a star, I grab a grenade",
  "La-la-la-la-la-a-a-a",
  "La-la-la-la-la-a-a-a",
  "La-la-la-la-la-a-a-a",
  "La-la-la-la-la-a-a-a",
  "I'd like to hug you like back then",
  "But for that I'd have to dig up the body",
  "Your ice-cold bones are somewhere down at the bottom",
  "Flowers will sprout in this wept-over earth"
];

const targetPath = 'C:\\\\Users\\\\thy\\\\Projects\\\\gewoonthy\\\\src\\\\data\\\\lyrics.ts';

function main() {
  let tsContent = fs.readFileSync(targetPath, 'utf8');
  let jsonString = tsContent.split('export const songsDictionary: Record<string, SongData> = ')[1];
  if (!jsonString) throw new Error('Could not parse dictionary');
  jsonString = jsonString.trim().replace(/;$/, '');
  
  let dict;
  eval('dict = ' + jsonString);
  
  const songData = dict["IC3PEAK - Boo-Hoo.mp4"];
  if (!songData) throw new Error("Could not find IC3PEAK song");
  
  if (songData.lyricsData.length !== translations.length) {
    console.warn('Warning: translations length (' + translations.length + ') does not match verses length (' + songData.lyricsData.length + ')');
  }
  
  for (let i = 0; i < songData.lyricsData.length; i++) {
    songData.lyricsData[i].translation = translations[i] || '';
  }
  
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
  translation?: string;
  words: Word[];
}

export interface SongData {
  globalOffset: number;
  lyricsData: Verse[];
}

export const songsDictionary: Record<string, SongData> = ${JSON.stringify(dict, null, 2)};
`;

  fs.writeFileSync(targetPath, newFileContent, 'utf8');
  console.log("Successfully injected translations for IC3PEAK");
}

main();
