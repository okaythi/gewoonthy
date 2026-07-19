# Entwicklung der Karaoke-Engine

Willkommen im Backend der Karaoke-Anwendung. Ein nahtloses Wort-für-Wort-Karaoke-Erlebnis im Browser zu entwickeln (ganz zu schweigen von diesem selbstgebauten Linux-Terminal-Simulator), war ein spaßiges, aber oft auch echt verdammt anstrengendes Projekt. Es geht eben nicht nur darum, ein Video abzuspielen, sondern um Sub-Millisekunden-Synchronisation und den Kampf gegen die Browser-Latenz. Schlüsselwort: "Kampf" lol

Selbst als Hobby-Entwickler wollte ich etwas bauen, das sich nativ, reaktionsschnell und exakt anfühlt. Hier ist ein Blick unter die Haube, wie das alles zusammenpasst.

## 1. Die Handarbeit (lyrics.ts)

Falls du dich fragst, welche KI oder magische API ich benutzt habe, um die Songtexte Wort für Wort zu synchronisieren...... die Antwort lautet schiere Willenskraft lol

Standardmäßige `.lrc`-Dateien synchronisieren normalerweise nur zeilenweise, und die APIs, die ich gefunden habe, waren so mittelmäßig, dass ihre bloße Existenz ehrlich gesagt peinlich ist. Um diese moderne, dynamische Wort-für-Wort-Hervorhebung hinzubekommen, bin ich jedes einzelne Video manuell durchgegangen. Ich habe minutiös den exakten Zeitstempel für den Anfang und das Ende jedes einzelnen Wortes und Verses markiert. Ehrlich gesagt ist das Verständnis von Sprachprosodie und artikulatorischer Phonetik hier Fluch und Segen zugleich – visuell zu sehen, wie ein Text selbst 150ms nachdem die Silbe tatsächlich gesungen wurde, aufleuchtet, tut mir körperlich in der Seele weh.

> [!NOTE]
> Das ist beim russischen Song Плак-плак leider immer noch der Fall, aber habt Nachsicht mit mir, ich kann zwar Kyrillisch lesen, aber spreche kein Russisch.

Also habe ich ein Skript ausgeführt (dieses eine Skript habe ich mir von einem LLM schreiben lassen), um es in unseren `lyrics.ts` Datensatz zu formatieren. Es dauerte wortwörtlich Tage, aber die Präzision ist gut genug, dass ich stolz darauf bin, sie zu zeigen.

```typescript
// Ein Einblick in lyrics.ts
export const lyricsData = [
  { start: 12.45, end: 12.80, text: "Never", type: "word" },
  { start: 12.81, end: 13.10, text: "gonna", type: "word" },
  { start: 13.11, end: 13.50, text: "give", type: "word" }
];
```

## 2. Der Kampf gegen das DOM (KaraokeWindow.js)

Die eigentliche Herausforderung bestand darin, die Benutzeroberfläche perfekt an den Wiedergabestatus des Videos zu koppeln. Mein erster dummer Ansatz war es, das native `timeupdate`-Event des HTML5-`<video>`-Tags zu nutzen. 

Ich habe schnell gelernt, dass `timeupdate` dafür der reinste Müll ist. Es feuert vielleicht 4-mal pro Sekunde (also in Abständen von ca. 250ms). Für eine langsame Ballade, meinetwegen, das geht noch. Aber für schnelle Rap-Verse oder einen druckvollen Techno-Track? Das sieht aus wie ein ruckeliger, asynchroner Albtraum. 

Der Workaround bestand darin, `timeupdate` komplett über Bord zu werfen und das `requestAnimationFrame` des Browsers zu kapern. Dadurch wird `vid.currentTime` 60-mal pro Sekunde abgefragt. Ich habe ein bisschen recherchiert und herausgefunden, dass die Nutzung der Web Audio API zur Erstellung eines benutzerdefinierten Audio-Context-Nodes technisch gesehen der absolute Königsweg für absolute zeitliche Präzision wäre. Aber das DOM über rAF streng an die Video-Uhr zu binden funktionierte einwandfrei, und das Schreiben eigener Audio-Buffer-Parser war dann doch eine Nummer zu groß für mich.

Das sieht so aus:
```javascript
// Polling mit 60fps, anstatt sich auf langsame Event-Listener zu verlassen
function updateLyrics() {
  const currentTime = vid.currentTime;
  // [...] Wortabgleich-Logik
  requestAnimationFrame(updateLyrics);
}
```

## 3. Der Albtraum des Font-Renderings

Eine große Hürde, die ich nicht kommen sah: Die Latenz benutzerdefinierter Typografie. Da viele dieser Tracks mehrsprachig sind, verursachte das dynamische On-the-Fly-Laden schwerer japanischer Google-Schriftarten massive FOIT (Flash of Invisible Text). Bis der Browser die Schriftart geladen hatte, war der gesamte Kanji-Vers schon vorbei, was einfach kompletter Schrott war.

Ich habe über "Subsetting" von CJK-Schriftarten mit Python gelesen, um Tausende nicht verwendeter Glyphen zu entfernen und die Datei kleiner zu machen, aber um ehrlich zu sein, hatte ich keinen Bock, das für jede einzelne Sprache zu machen. Mein Workaround war Caching mit der Brechstange. Ich konvertierte die rohe `.ttf` in eine komprimierte `.woff2` (ca. 1 MB), hostete sie direkt auf meinem eigenen CDN (`cdn.sudothy.me`) und zwang den Browser aggressiv, sie zwischenzuspeichern, indem ich eine `<link rel="preload">`-Direktive im Document-Head platzierte, noch bevor das Karaoke-Modul überhaupt geladen wird. Problem gelöst.

## 4. Visuals & Garbage Collection (global.css)

Dann gab es noch das Problem mit den Instrumentalpausen. Alter Text, der 40 Sekunden lang auf dem Bildschirm rumhängt, sieht echt schäbig aus. Ich habe einen Garbage Collector implementiert: Wenn 3 Sekunden lang kein Text-Update stattfindet, blendet die UI den Textblock elegant aus.

Wenn ein Wort *aktiv* ist, muss es physisch hervorstechen. Wir verwenden Canonicals Ubuntu Orange (`#E95420`) mit einem mehrschichtigen Leuchteffekt und einem leichten `transform: scale(1.05)`. 
Wie hier:
```css
.lyric-word.active {
  color: #E95420;
  text-shadow: 0 0 4px rgba(233, 84, 32, 0.8), 
               0 0 12px rgba(233, 84, 32, 0.4);
  transform: scale(1.05);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
```
*Eine technische Anmerkung:* Um dies ohne Frame Drops zum Laufen zu bringen, durfte strikt nur die Eigenschaft `transform` animiert werden, um die Hardwarebeschleunigung aufrechtzuerhalten. Wenn man versucht, die `font-size` für diesen kinetischen Pop-Effekt zu animieren, rastet die Layout-Engine des Browsers aus und verursacht massiven Lag. Und ja, Frames droppen immer noch wie verrückt, also bin ich für jeden Tipp dankbar. Ihr könnt dafür gerne ein Issue in meinem Github-Repo öffnen.

## 5. API-Albträume

Ursprünglich nutzte ich die MusicBrainz/Cover Art Archive API, um das Album-Cover dynamisch abzurufen. Das war ein absoluter Witz. Bei irgendeinem nischigen regionalen Pop-Track wurde das Artwork problemlos gefunden, aber bei absolut legendären Alben kam einfach gar nichts zurück. 

Ich habe es rausgeworfen. Jetzt jagen wir den Suchstring durch die iTunes Search API. Sie ist unglaublich nachsichtig bei ungenauen Suchanfragen und hat eine Trefferquote von fast 100%. Manchmal ist die einfachste Unternehmens-API einfach besser als eine pedantische Open-Source-Datenbank. Tut schon etwas weh, da ich normalerweise derjenige bin, der den Closed-Source-Systemen von Big Tech gerne den Mittelfinger zeigt.

## 6. Das Abstimmungssystem (vote.js)

Zu guter Letzt der Like/Dislike-Client. Er sitzt im Frontend und feuert POST-Requests an ein serverloses Backend (`vote.js`), das mit meiner Datenbank kommuniziert. Ich musste ein lokales State-Tracking implementieren, damit die Nutzer den Endpunkt nicht einfach zuspammen. Dadurch, dass die UI-Updates jedoch optimistisch gehalten sind (die Farbe des Buttons ändert sich, bevor der Server antwortet), fühlt es sich augenblicklich reaktionsschnell an. 

Es ist ein komplexes kleines Ökosystem, aber es fehlerfrei in einer simulierten Desktop-Umgebung laufen zu sehen, macht jeden einzelnen Zeitstempel die Mühe wert.