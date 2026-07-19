# De Karaoke Engine Bouwen

Welkom in de backend van de Karaoke-applicatie. Een vloeiende, woord-voor-woord karaoke-ervaring bouwen in de browser (en dan zwijgen we nog over deze zelfgemaakte Linux terminal simulator) was een tof maar dikwijls echt slopend project, waarbij het niet gewoon draait om een videootje afspelen, maar om sub-milliseconde synchronisatie en het vechten tegen browser latency. Sleutelwoord: "vechten" lol

Zelfs als hobbyist wou ik iets bouwen dat native, vlot en exact aanvoelde. Hier is een blik onder de motorkap op hoe dit allemaal in elkaar zit.

## 1. Het Handenarbeid (lyrics.ts)

Als je je afvraagt welke AI of magische API ik heb gebruikt om de lyrics woord-voor-woord te synchroniseren...... het antwoord is pure wilskracht lol

Standaard `.lrc` bestanden synchroniseren meestal enkel per lijn, en de API's die ik vond waren zo middelmatig dat hun bestaan eigenlijk een beetje gênant is. Om die moderne, verende, woord-voor-woord highlight te krijgen, ben ik manueel door elke video gegaan. Ik heb minutieus de exacte timestamp voor het begin en einde van elk woord en elk couplet gemarkeerd. Eerlijk gezegd, prosodie en articulatorische fonetiek begrijpen is hier tegelijk een zegen en een vloek - een lyric visueel zien oplichten zelfs maar 150ms nadat de lettergreep effectief gezongen is, doet fysiek pijn aan mijn ziel.

> [!NOTE]
> Dit is nog steeds het geval voor het Russische liedje Плак-плак, maar vergeef het mij, ik kan wel Cyrillisch lezen maar ik spreek geen Russisch.

Dus, ik heb een script gedraaid (ik heb een LLM-model dit ene script voor mij laten schrijven) om het te formatteren naar onze `lyrics.ts` dataset. Het heeft letterlijk dagen geduurd, maar de precisie is goed genoeg dat ik er fier op ben om het te tonen.

```typescript
// Een blik in lyrics.ts
export const lyricsData = [
  { start: 12.45, end: 12.80, text: "Never", type: "word" },
  { start: 12.81, end: 13.10, text: "gonna", type: "word" },
  { start: 13.11, end: 13.50, text: "give", type: "word" }
];
```

## 2. Vechten Tegen de DOM (KaraokeWindow.js)

De grootste uitdaging was om de UI perfect gekoppeld te houden aan de afspeelstatus van de video. Mijn eerste domme insteek was de native `timeupdate` event van de HTML5 `<video>` tag te gebruiken.

Ik leerde al snel dat `timeupdate` echt dikke zever is hiervoor. Het triggert misschien 4 keer per seconde (ongeveer 250ms intervallen). Voor een trage ballade, allez ja, nog tot daar aan toe. Voor snelle rap verses of een stevige techno track? Het ziet eruit als een haperende, out-of-sync boeltje.

De workaround was om `timeupdate` volledig buiten te smijten en de `requestAnimationFrame` van de browser te kapen. Dit pollt `vid.currentTime` op 60 frames per seconde. Ik heb wat zitten graven en ontdekte dat het gebruik van de Web Audio API om een custom audio context node te maken technisch gezien de ultieme manier is voor absolute tijdsprecisie, maar de DOM strikt koppelen aan de videoklok via rAF werkte vlekkeloos, en custom audio buffer parsers schrijven was ver boven mijn intellectuele petje.

Zo dus:
```javascript
// Pollen aan 60fps in plaats van rekenen op trage event listeners
function updateLyrics() {
  const currentTime = vid.currentTime;
  // [...] woord-matching logica
  requestAnimationFrame(updateLyrics);
}
```

## 3. De Nachtmerrie van Font Rendering

Een groot obstakel dat ik niet zag aankomen: custom typografie latency. Omdat veel van deze tracks meertalig zijn, veroorzaakte het dynamisch on-the-fly ophalen van zware Japanse Google Fonts massale FOIT (Flash of Invisible Text). Tegen de tijd dat de browser het font had opgehaald, was het hele kanji couplet al voorbij, wat dus echt dikke miserie was.

Ik las over het "subsetten" van CJK fonts met Python om duizenden ongebruikte tekens te strippen zodat het bestand kleiner werd, maar eerlijk gezegd was ik te lui om dat voor elke taal te doen. Mijn workaround was brute force caching. Ik converteerde de ruwe `.ttf` naar een gecomprimeerde `.woff2` (ongeveer 1MB), hostte het direct op mijn eigen CDN (`cdn.sudothy.me`), en dwong de browser agressief om het te cachen via een `<link rel="preload">` directive in de document head, nog voor de karaoke module zelfs inlaadt. Gefikst.

## 4. Visuals & Garbage Collection (global.css)

Dan was er nog het probleem van instrumentale pauzes. Oude tekst die 40 seconden lang op het scherm blijft staan, ziet er echt marginaal uit. Ik heb een garbage collector geïmplementeerd: als er 3 seconden passeren zonder een lyric update, unmount de UI het tekstblok netjes.

Wanneer een woord *wel* actief is, moet het fysiek poppen. We gebruiken Canonical's Ubuntu Orange (`#E95420`) met een gelaagde gloed en een lichte `transform: scale(1.05)`.
Zo dus:
```css
.lyric-word.active {
  color: #E95420;
  text-shadow: 0 0 4px rgba(233, 84, 32, 0.8), 
               0 0 12px rgba(233, 84, 32, 0.4);
  transform: scale(1.05);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
```
*Een technische nota:* Om dit te laten draaien zonder frames te droppen, moest de `transform` property strikt geanimeerd worden om het hardware-accelerated te houden. Als je probeert om `font-size` te animeren voor die kinetische pop, flipt de layout engine van de browser en veroorzaakt massale lag. En ja, frames droppen nog altijd als zot dus alle tips zijn welkom. Je kan een issue openen op mijn Github repo hiervoor.

## 5. API Nachtmerries

Oorspronkelijk gebruikte ik de MusicBrainz/Cover Art Archive API om de album art dynamisch op te halen. Dat was echt om mee te lachen. Het haalde probleemloos het artwork op voor een of andere niche regionale pop track, maar gaf niets terug voor gigantisch bekende platen.

Ik heb het eruit gesmeten. We sturen de zoekopdracht nu door de iTunes Search API. Het is ongelooflijk vergevingsgezind met fuzzy searches en heeft een hit rate van bijna 100%. Soms is de simpelste corporate API gewoon beter dan een pedante open-source database. Wel flink balen, want ik steek normaal gezien liever mijn middelvinger op naar closed-source big tech spul.

## 6. Het Voting Systeem (vote.js)

Tot slot, de Like/Dislike client. Deze zit in de frontend en vuurt POST requests af naar een serverless backend (`vote.js`) die met mijn database praat. Ik moest local state tracking implementeren zodat gebruikers niet gewoon het endpoint spammen, maar door de UI updates optimistisch te houden (de kleur van de knop aanpassen voor de server antwoordt) voelt het instant responsief aan.

Het is een complex klein ecosysteem, maar om het vlekkeloos te zien draaien in een gesimuleerde desktop omgeving maakt elke timestamp de moeite waard.