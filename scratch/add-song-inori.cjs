const fs = require('fs');

const lyricsStr = `御[お] 手[て] を 合[あ] わ せ て
御[お] 手[て] を 合[あ] わ せ て
御[お] 手[て] を 合[あ] わ せ て
さ あ ご 一[いっ] 緒[しょ] に
御[お] 手[て] を 合[あ] わ せ て
御[お] 手[て] を 合[あ] わ せ て
ご 唱[しょう] 和[わ] く だ さ い

お 可[か] 哀[わい] 想[そう] に
意[い] 味[み] な し 価[か] 値[ち] な し 魅[み] 力[りょく] な し 生[う] ま れ た 時[じ] 点[てん] で 終[お] わ っ て る

そ ろ そ ろ 人[にん] 間[げん] や め ま し ょ か
そ ろ そ ろ 人[にん] 間[げん] や め ま し ょ か
通[とお] り ゃ ん せ 通[とお] り ゃ ん せ
こ の 世[よ] の 終[お] わ り 絶[ぜつ] 望[ぼう] ル ー ト
通[とお] り ゃ ん せ 通[とお] り ゃ ん せ
お 先[さき] 真[ま] っ 暗[くら] 死[し] に ゲ ー ル ー ト

羯[ぎゃ] 諦[てい] 羯[ぎゃ] 諦[てい] 羯[ぎゃ] 諦[てい] 羯[ぎゃ] 諦[てい]
諦[てい] 諦[てい] 諦[てい] 諦[てい]
羯[ぎゃ] 諦[てい] 羯[ぎゃ] 諦[てい] 波[は] 羅[ら] 羯[ぎゃ] 諦[てい]
羯[ぎゃ] 諦[てい] 羯[ぎゃ] 諦[てい] 波[は] 羅[ら] 羯[ぎゃ] 諦[てい]
羯[ぎゃ] 諦[てい] 羯[ぎゃ] 諦[てい] 波[は] 羅[ら] 羯[ぎゃ] 諦[てい]
羯[ぎゃ] 諦[てい] 羯[ぎゃ] 諦[てい] 波[は] 羅[ら] 羯[ぎゃ] 諦[てい]
羯[ぎゃ] 諦[てい] 羯[ぎゃ] 諦[てい] 波[は] 羅[ら] 羯[ぎゃ] 諦[てい]

才[さい] 能[のう] レ ベ ル の 社[しゃ] 会[かい] 不[ふ] 適[てき] 合[ごう] 者[しゃ]

そ ろ そ ろ 人[にん] 間[げん] や め ま し ょ か
そ ろ そ ろ 人[にん] 間[げん] や め ま し ょ か
そ ろ そ ろ 人[にん] 間[げん] や め ま し ょ か
そ ろ そ ろ 人[にん] 間[げん] や め ま し ょ か

御[お] 手[て] を 合[あ] わ せ て
御[お] 手[て] を 合[あ] わ せ て
御[お] 手[て] を 合[あ] わ せ て

さ あ ご 一[いっ] 緒[しょ] に
御[お] 手[て] を 合[あ] わ せ て
御[お] 手[て] を 合[あ] わ せ て
御[お] 手[て] を 合[あ] わ せ て

ご 唱[しょう] 和[わ] く だ さ い

お 可[か] 哀[わい] 想[そう] に
お 可[か] 哀[わい] 想[そう] に
お 可[か] 哀[わい] 想[そう] に
お 可[か] 哀[わい] 想[そう] に
お 可[か] 哀[わい] 想[そう] に
お 可[か] 哀[わい] 想[そう] に

羯[ぎゃ] 諦[てい] 羯[ぎゃ] 諦[てい] 波[は] 羅[ら] 羯[ぎゃ] 諦[てい]
羯[ぎゃ] 諦[てい] 羯[ぎゃ] 諦[てい] 波[は] 羅[ら] 羯[ぎゃ] 諦[てい]
羯[ぎゃ] 諦[てい] 羯[ぎゃ] 諦[てい] 波[は] 羅[ら] 羯[ぎゃ] 諦[てい]
羯[ぎゃ] 諦[てい] 羯[ぎゃ] 諦[てい] 波[は] 羅[ら] 羯[ぎゃ] 諦[てい]

存[そん] 在[ざい] 自[じ] 体[たい] が 罪[つみ] 深[ぶか] い
底[てい] 辺[へん] 廃[はい] 人[じん] 人[ひと] で な し
闇[やみ] 堕[お] ち 無[む] 気[き] 力[りょく] デ バ フ 持[も] ち
人[にん] 間[げん] 失[しっ] 格[かく] 這[ほ] う 這[ほ] う の 体[てい]
最[さい] 終[しゅう] 宣[せん] 告[こく] ご 愁[しゅう] 傷[しょう] 様[さま]`;

const fileName = "INORI.mp4";
const targetFile = 'C:\\\\Users\\\\thy\\\\Projects\\\\gewoonthy\\\\src\\\\data\\\\lyrics.ts';

function parseLines(str) {
  const lines = str.split('\n').map(l => l.trim()).filter(l => l);
  const verses = [];
  
  let time = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Split by space. For Japanese, we put explicit spaces between every chunk in the lyrics string above
    const tokens = line.split(/\s+/).filter(Boolean);
    const words = [];
    
    for (const token of tokens) {
      // Check for Kanji[furigana]
      const match = token.match(/^(.*?)\[(.*?)\]$/);
      if (match) {
        words.push({ word: match[1], start: 0, end: 0, furigana: match[2] });
      } else {
        words.push({ word: token, start: 0, end: 0 });
      }
    }
    
    const verseObj = {
      verseStart: time,
      verseEnd: time + 3,
      words
    };
    
    verses.push(verseObj);
    time += 3;
  }
  
  return verses;
}

try {
  console.log(`Parsing ${fileName} lyrics...`);
  const allVerses = parseLines(lyricsStr);

  const source = fs.readFileSync(targetFile, 'utf8');

  const match = source.match(/export const songsDictionary: Record<string, SongData> = (\{[\s\S]*\});/);
  if (!match) {
    throw new Error("Could not find the existing songsDictionary object in lyrics.ts");
  }

  const existingDict = JSON.parse(match[1]);

  if (existingDict[fileName] && existingDict[fileName].lyricsData) {
    const oldData = existingDict[fileName].lyricsData;
    for (let i = 0; i < Math.min(oldData.length, allVerses.length); i++) {
      allVerses[i].verseStart = oldData[i].verseStart;
      allVerses[i].verseEnd = oldData[i].verseEnd;
      
      for (let j = 0; j < Math.min(oldData[i].words.length, allVerses[i].words.length); j++) {
        // Only transfer if the text matches to prevent weird offsets if words changed
        if (oldData[i].words[j].word === allVerses[i].words[j].word) {
          allVerses[i].words[j].start = oldData[i].words[j].start;
          allVerses[i].words[j].end = oldData[i].words[j].end;
        }
      }
    }
  }

  existingDict[fileName] = {
    globalOffset: existingDict[fileName]?.globalOffset || 0,
    lyricsData: allVerses
  };

  const outContent = `export interface Word {
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

export const songsDictionary: Record<string, SongData> = ${JSON.stringify(existingDict, null, 2)};
`;

  fs.writeFileSync(targetFile, outContent);
  console.log(`Successfully added ${fileName} to lyrics.ts!`);
} catch (err) {
  console.error(err);
}
