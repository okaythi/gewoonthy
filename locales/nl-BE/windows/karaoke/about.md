[This document is localized in nl-BE]

# Engineering the Karaoke Engine

Welcome to the backend of the Karaoke application. Building a seamless, word-by-word karaoke experience in the browser (never mind inside this custom-made Linux terminal simulator) was a fun but sometimes proper knackering project, which isn't just about playing a video, it’s about sub-millisecond synchronisation and fighting browser latency. Keyword: "fighting" lol

Even as a hobbyist, I still wanted to build something that felt native, snappy, and exact. Here is a look under the hood at how this comes together.

## 1. The Manual Labour (lyrics.ts)

If you are wondering what AI or magical API I used to sync the lyrics word-by-word...... the answer is sheer willpower lol

Standard `.lrc` files usually only sync line-by-line, and the APIs I found were so mediocre that tbh their very existence is embarrassing. To get that modern, bouncy, word-by-word highlight, I manually went through every single video. I painstakingly marked the exact timestamp for the beginning and end of every single word and verse. Honestly, understanding speech prosody and articulatory phonetics is both a blessing and a curse here - seeing a lyric visually light up even 150ms after the syllable is actually sung physically hurts my soul.

> [!NOTE]
> This is still the case for the Russian song Плак-плак, but bear with me, I can read Cyrillic but I don't speak Russian.

So, I ran a script (I had an LLM model create this one script for me) to format it into our `lyrics.ts` dataset. It took literal days, but the precision is good enough that I'm proud to show it off.

```typescript
// A glimpse into lyrics.ts
export const lyricsData = [
  { start: 12.45, end: 12.80, text: "Never", type: "word" },
  { start: 12.81, end: 13.10, text: "gonna", type: "word" },
  { start: 13.11, end: 13.50, text: "give", type: "word" }
];
```

## 2. Fighting the DOM (KaraokeWindow.js)

The core challenge was keeping the UI perfectly tethered to the video's playback state. The daft-me approach was using the HTML5 `<video>` tag's native `timeupdate` event. 

I quickly learned that `timeupdate` is absolute bollocks for this. It fires maybe 4 times a second (roughly 250ms intervals). For a slow ballad, I mean, fine I guess. For fast rap verses or a punchy techno track? It looks like a jittery, out-of-sync mess. 

The workaround was to throw `timeupdate` out the window entirely and hijack the browser's `requestAnimationFrame`. This polls `vid.currentTime` at 60 frames per second. I did some digging around and found that using the Web Audio API to create a custom audio context node might technically be the godlike way to handle absolute time precision, but tying the DOM strictly to the video clock via rAF worked flawlessly, and writing custom audio buffer parsers was way above my intellectual grade.

Like so:
```javascript
// Polling at 60fps instead of relying on slow event listeners
function updateLyrics() {
  const currentTime = vid.currentTime;
  // [...] word-matching logic
  requestAnimationFrame(updateLyrics);
}
```

## 3. The Font Rendering Nightmare

A major hurdle I didn't see coming: custom typography latency. Because a lot of these tracks are multilingual, dynamically fetching heavy Japanese Google Fonts on the fly caused massive FOIT (Flash of Invisible Text). By the time the browser fetched the font, the entire kanji verse had already passed by so it was pure wank.

I read about "subsetting" CJK fonts using Python to strip out thousands of unused glyphs to make the file smaller, but tbh I couldn't be arsed to do all that for every single language. My workaround was to brute force caching. I converted the raw `.ttf` into a compressed `.woff2` (about 1MB), hosted it directly on my own CDN (`cdn.sudothy.me`), and aggressively forced the browser to cache it using a `<link rel="preload">` directive in the document head before the karaoke module even mounts. Sorted.

## 4. Visuals & Garbage Collection (global.css)

Then there was the issue of instrumental breaks. Stale text lingering on screen for 40 seconds looks proper ropey. I implemented a garbage collector: if 3 seconds pass without a lyric update, the UI gracefully unmounts the text block.

When a word *is* active, it needs to physically pop. We use Canonical's Ubuntu Orange (`#E95420`) with a layered glow and a slight `transform: scale(1.05)`. 
Like so:
```css
.lyric-word.active {
  color: #E95420;
  text-shadow: 0 0 4px rgba(233, 84, 32, 0.8), 
               0 0 12px rgba(233, 84, 32, 0.4);
  transform: scale(1.05);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
```
*A technical note:* Getting this to run without dropping frames meant strictly animating the `transform` property to keep it hardware-accelerated. If you try to animate `font-size` for that kinetic pop, the browser's layout engine throws a fit and causes major lag. And yes frames are still dropping like a bastard so any tips are welcome. You can open an issue on my Github repo for this.

## 5. API Nightmares

I originally used the MusicBrainz/Cover Art Archive API to fetch the album art dynamically. It was an absolute piss-take. It would successfully pull the artwork for some niche regional pop track, but return nothing for massively defining records. 

I ripped it out. We now bounce the search string through the iTunes Search API. It’s incredibly forgiving with fuzzy searches and has a near 100% hit rate. Sometimes the simplest corporate API is just better than a pedantic open-source database. Proper gutting tho cause I'm usually one to stick two fingers up at closed-source big tech stuff.

## 6. The Voting System (vote.js)

Finally, the Like/Dislike client. It sits in the frontend and fires off POST requests to a serverless backend (`vote.js`) that talks to my database. I had to implement local state tracking so users don't just spam the endpoint, but keeping the UI updates optimistic (updating the button colour before the server responds) makes it feel instantly responsive. 

It is a complex little ecosystem, but seeing it run flawlessly in a simulated desktop environment makes every timestamp worth it.