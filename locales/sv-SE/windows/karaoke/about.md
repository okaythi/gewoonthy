# Att bygga Karaoke-motorn

Välkommen till backend för Karaoke-appen. Att bygga en sömlös karaokemiljö, ord för ord, i webbläsaren (för att inte tala om inuti denna hemmagjorda Linux-terminalsimulator) var ett roligt men ibland rätt jäkla utmattande projekt, som inte bara handlar om att spela upp en video, det handlar om synkronisering på millisekundnivå och att kriga mot webbläsarens latens. Nyckelord: "kriga" lol

Även som hobbykodare ville jag bygga något som kändes inbyggt, snabbt och exakt. Här är en titt under huven på hur det hela hänger ihop.

## 1. Det manuella arbetet (lyrics.ts)

Om du undrar vilket AI eller vilket magiskt API jag använde för att synka texten ord för ord...... så är svaret ren och skär viljestyrka lol

Standard `.lrc`-filer brukar bara synka rad för rad, och de API:er jag hittade var så mediokra att deras existens ärligt talat är ganska pinsam. För att få till den där moderna, studsande ord-för-ord-markeringen, gick jag manuellt igenom varenda video. Jag markerade omsorgsfullt den exakta tidsstämpeln för början och slutet av varenda ord och vers. Ärligt talat, att förstå talprosodi och artikulatorisk fonetik är både en välsignelse och en förbannelse här - att se en text visuellt lysa upp ens 150ms efter att stavelsen faktiskt har sjungits gör fysiskt ont i min själ.

> [!NOTE]
> Det är fortfarande fallet för den ryska låten Плак-плак, men ha tålamod, jag kan läsa kyrilliska men jag pratar inte ryska.

Så jag körde ett skript (jag lät en LLM skriva just det här skriptet åt mig) för att formatera in det i vår `lyrics.ts`-dataset. Det tog bokstavligen dagar, men precisionen är bra nog för att jag ska vara stolt över att visa upp den.

```typescript
// En liten inblick i lyrics.ts
export const lyricsData = [
  { start: 12.45, end: 12.80, text: "Never", type: "word" },
  { start: 12.81, end: 13.10, text: "gonna", type: "word" },
  { start: 13.11, end: 13.50, text: "give", type: "word" }
];
```

## 2. Att slåss mot DOM:en (KaraokeWindow.js)

Kärnutmaningen var att hålla UI:t perfekt sammanlänkat med videons uppspelningsstatus. Min första idiotiska metod var att använda HTML5 `<video>`-taggens inbyggda händelse `timeupdate`. 

Jag lärde mig snabbt att `timeupdate` är rent skräp för detta. Det triggas kanske 4 gånger per sekund (i intervaller på ungefär 250ms). För en långsam ballad, okej då. För snabba rapverser eller ett tungt technospår? Det ser ut som en ryckig, osynkad röra. 

Lösningen var att slänga ut `timeupdate` helt och hållet och kapa webbläsarens `requestAnimationFrame`. Detta kontrollerar `vid.currentTime` i 60 bilder per sekund. Jag snokade runt lite och insåg att användandet av Web Audio API för att skapa en anpassad ljudkontext-nod tekniskt sett hade varit det optimala sättet att hantera absolut tidsprecision. Men att binda DOM:en strikt till videoklockan via rAF funkade felfritt, och att skriva anpassade ljudbuffer-parsers var långt över min intellektuella förmåga.

Så här:
```javascript
// Pollning i 60fps i stället för att förlita sig på slöa event listeners
function updateLyrics() {
  const currentTime = vid.currentTime;
  // [...] logik för ordmatchning
  requestAnimationFrame(updateLyrics);
}
```

## 3. Mardrömmen med typsnittsrendering

Ett stort hinder som jag inte såg komma: latens för anpassad typografi. Eftersom många av dessa låtar är flerspråkiga orsakade den dynamiska hämtningen av tunga japanska Google-typsnitt på stört ett massivt FOIT (Flash of Invisible Text). När webbläsaren väl hade hämtat typsnittet hade hela kanji-versen redan flugit förbi, så det var ren smörja.

Jag läste om "subsetting" av CJK-typsnitt med Python för att rensa bort tusentals oanvända tecken för att göra filen mindre, men ärligt talat pallade jag inte att göra allt det där för varje enskilt språk. Min lösning var stenhård cachning. Jag konverterade den råa `.ttf`-filen till en komprimerad `.woff2` (runt 1MB), hostade den direkt på mitt eget CDN (`cdn.sudothy.me`), och tvingade aggressivt webbläsaren att cacha den genom att använda ett `<link rel="preload">`-direktiv i dokumentets head innan karaokemodulen ens startas. Så löste man det.

## 4. Grafik & Garbage Collection (global.css)

Sedan fanns det problem med instrumentala pauser. Gammal text som hänger kvar på skärmen i 40 sekunder ser riktigt risigt ut. Jag implementerade en garbage collector: om det går 3 sekunder utan en textuppdatering avmonterar användargränssnittet snyggt textblocket.

När ett ord *är* aktivt, måste det fysiskt poppa ut. Vi använder Canonicals Ubuntu Orange (`#E95420`) med ett textsken i lager och en lätt `transform: scale(1.05)`. 
Så här:
```css
.lyric-word.active {
  color: #E95420;
  text-shadow: 0 0 4px rgba(233, 84, 32, 0.8), 
               0 0 12px rgba(233, 84, 32, 0.4);
  transform: scale(1.05);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
```
*En teknisk notis:* För att få detta att köras utan att tappa bilder krävdes det att `transform`-egenskapen animerades strikt för att behålla hårdvaruaccelerationen. Om man försöker animera `font-size` för det där kinetiska poppet ballar webbläsarens layout-motor ur och orsakar enormt lagg. Och ja, frames droppar fortfarande som in i helvete så alla tips är välkomna. Ni får gärna öppna ett issue på mitt Github-repo för detta.

## 5. API-mardrömmar

Jag använde ursprungligen MusicBrainz/Cover Art Archive API för att hämta albumomslag dynamiskt. Det var ett rent skämt. Det kunde hämta omslaget för någon nischad regional poplåt felfritt, men gav inte tillbaka någonting alls för enormt ikoniska skivor. 

Jag slet bort det. Nu skickar vi söksträngen direkt via iTunes Search API istället. Det är otroligt förlåtande mot luddiga sökningar och har nästan 100% träffsäkerhet. Ibland är det enklaste företags-API:t bara bättre än en pedantisk open-source-databas. Det suger ganska mycket ändå för jag brukar vilja ge långfingret åt storföretagens stängda system.

## 6. Röstningssystemet (vote.js)

Till sist, gilla/ogilla-klienten. Den sitter i frontend och skickar POST-förfrågningar till en serverlös backend (`vote.js`) som pratar med min databas. Jag var tvungen att implementera en lokal statusspårning så att användarna inte bara spammar endpointen, men genom att hålla användargränssnittets uppdateringar optimistiska (uppdatera knappfärgen innan servern svarar) känns det som att den reagerar blixtsnabbt. 

Det är ett komplicerat litet ekosystem, men att se det köra felfritt i en simulerad skrivbordsmiljö gör varje liten tidsstämpel värd besväret.