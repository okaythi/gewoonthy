const fs = require('fs');

const lyrics = `I know it seems kinda tough
But really it's easy enough
For us to slow down the pace
So we can all go take a break
In fact, there’s not much better than nothing at all
And that's especially true when there is something to do

目[め] の 前[まえ] を
ぐ る ぐ る 世[せ] 界[かい] が 駆[か] け 抜[ぬ] け る
で も 私[わたし] は daydream 夢[ゆめ] 見[み] て る
Look out the window 窓[まど] の 外[そと]
Watching the world go by, goodbye
み ん な ど こ か へ 向[む] か っ て る
で も か み が dancing in the wind
こ う い う 時[とき] に 思[おも] う ん だ
生[い] き て い て 本[ほん] 当[とう] に よ か っ た
幸[しあわ] せ 気[き] 分[ぶん] に な れ る ん だ
こ れ で い い 気[き] が す る ん だ
I got a smile on my face
Cause now I'm taking a break

何[なに] も し な い こ の 時[じ] 間[かん]
今[いま] っ て い う こ の 瞬[しゅん] 間[かん]
ペ ー ス に ブ レ ー キ か け て
Let's slow down

I know it seems kinda tough
But really it's easy enough
For us to slow down the pace
So we can all go take a break
In fact, there's not much better than nothing at all
And that's especially true
When there is something to do

Just move very slowly to the beat (a-yo, a-a-yo-o)
Now get down and put up your feet (a-yo, a-a-yo-o)
If you like to lounge, relax, or flop (a-yo, a-a-yo-o)
Doesn't really matter when you're doing squat
(a-yo, a-a-yo-o)

空[そら] を 見[み] 上[あ] げ る 満[まん] 月[げつ]
星[ほし] っ て こ ん な に 綺[き] 麗[れい] な ん だ
こ う い う 時[とき] に 思[おも] う ん だ
生[い] き て る っ て 不[ふ] 思[し] 議[ぎ]
Life is a race, that's what they say
So time out, and look around
立[た] ち 止[ど] ま る と 見[み] え て く る
I see it now
(Take a break!)

"Hey, you've reached Gus and Jamie from KKB
We're recording right now
So leave your message after the beep"
Yo, Gus and Jamie, it's Sarah
Just to let you know that I don't wanna do anything today
So I'll see you later, bye!

I know it seems kinda tough
But really it's easy enough
For us to slow down the pace
So we could all go take a break
In fact, there's not much better than nothing at all
And that's especially true
When there is something to do

Just move very slowly to the beat (a-yo, a-a-yo-o)
Now get down and put up your feet (a-yo, a-a-yo-o)
If you like to lounge, relax, or flop (a-yo, a-a-yo-o)
Doesn't really matter when you're doing squat (a-yo, a-yo)`;

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
      // Check for Kanji[furigana] format
      const match = token.match(/^(.*?)\[(.*?)\]$/);
      if (match) {
        words.push({ word: match[1], start: 0, end: 0, furigana: match[2] });
      } else {
        words.push({ word: token, start: 0, end: 0 });
      }
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

  const startIdx = fileContent.indexOf('"Kero Kero Bonito - Break.mp4":');
  if (startIdx === -1) {
    console.error("Could not find KKB entry to replace!");
    return;
  }

  const endIdx = fileContent.lastIndexOf('};');
  if (endIdx === -1) {
    console.error("Could not find end of file dictionary!");
    return;
  }

  // Slice out the old entry
  let newContent = fileContent.substring(0, startIdx);

  const verses = parseToVerses(lyrics);
  const songData = {
    globalOffset: 0,
    lyricsData: verses
  };

  const songDataStr = `  "Kero Kero Bonito - Break.mp4": ${JSON.stringify(songData, null, 4).replace(/\n/g, '\n  ')}\n`;
  
  newContent = newContent + songDataStr + fileContent.substring(endIdx);
  
  fs.writeFileSync(targetFile, newContent);
  console.log("Successfully replaced Kero Kero Bonito - Break.mp4");
}

main();
