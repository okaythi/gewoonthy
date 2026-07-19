# Ingeniería del Motor de Karaoke

Bienvenido al backend de la aplicación de Karaoke. Armar una experiencia de karaoke fluida, palabra por palabra, en el navegador (ni hablemos de adentro de este simulador casero de terminal Linux) fue un proyecto copado pero también un re quilombo, porque no es solamente darle play a un video, es sobre sincronización al sub-milisegundo y pelearse contra la latencia del navegador. La palabra clave acá es "pelearse" jajaja

Incluso como hobby, yo igual quería armar algo que se sintiera nativo, rápido y exacto. Acá va un vistazo bajo el capó de cómo se armó todo esto.

## 1. El Laburo Manual (lyrics.ts)

Si te estás preguntando qué IA o API mágica usé para sincronizar la letra palabra por palabra...... la respuesta es pura fuerza de voluntad jajaja

Los archivos `.lrc` comunes normalmente solo sincronizan por línea, y las APIs que encontré eran tan mediocres que la verdad su simple existencia da vergüenza ajena. Para lograr ese remarcado moderno, con onda, palabra por palabra, me puse manualmente con cada video. Marqué con tremendo cuidado el timestamp exacto de inicio y fin de cada palabra y estrofa. Honestamente, entender la prosodia y la fonética articulatoria es a la vez una bendición y una maldición acá - ver una letra iluminarse apenas 150ms después de que la sílaba fue cantada me duele físicamente en el alma.

> [!NOTE]
> Esto todavía pasa con el tema ruso Плак-плак, pero bancame un toque, sé leer cirílico pero no hablo ruso ni a palos.

Así que, corrí un script (este script sí se lo pedí a un LLM) para formatearlo en nuestro dataset `lyrics.ts`. Tardó literalmente días, pero la precisión quedó tan bien que estoy orgulloso de mostrarlo.

```typescript
// Un vistazo a lyrics.ts
export const lyricsData = [
  { start: 12.45, end: 12.80, text: "Never", type: "word" },
  { start: 12.81, end: 13.10, text: "gonna", type: "word" },
  { start: 13.11, end: 13.50, text: "give", type: "word" }
];
```

## 2. Peleándose contra el DOM (KaraokeWindow.js)

El mayor bardo era mantener la UI perfectamente enganchada al estado de reproducción del video. Mi primera idea boluda fue usar el evento nativo `timeupdate` de la etiqueta HTML5 `<video>`.

Al toque me di cuenta que `timeupdate` es una cagada para esto. Se dispara capaz 4 veces por segundo (intervalos de unos 250ms). Para una balada lenta, bueno, zafa. ¿Pero para un rap rápido o un tema tecno con punch? Se ve como un desastre entrecortado y desfasado.

La vuelta que le encontré fue mandar el `timeupdate` al carajo y hackear el `requestAnimationFrame` del navegador. Eso consulta el `vid.currentTime` a 60 cuadros por segundo. Me puse a investigar y descubrí que usar la Web Audio API para crear un nodo de contexto de audio personalizado podría ser técnicamente la posta absoluta para manejar la precisión del tiempo, pero atar el DOM estrictamente al reloj del video mediante rAF funcionó de diez, y escribir parsers de buffer de audio personalizados estaba muy por encima de mi capacidad mental.

Tipo así:
```javascript
// Consultando a 60fps en vez de depender de listeners lentos
function updateLyrics() {
  const currentTime = vid.currentTime;
  // [...] lógica para emparejar palabras
  requestAnimationFrame(updateLyrics);
}
```

## 3. La Pesadilla de Renderizar Fuentes

Un bardo groso que no vi venir: la latencia de las tipografías personalizadas. Como muchos de estos temas son multilingües, traer dinámicamente esas fuentes japonesas pesadas de Google Fonts en el momento causaba un tremendo FOIT (Flash de Texto Invisible). Para cuando el navegador terminaba de cargar la fuente, todo el verso en kanji ya había pasado, así que era una porquería.

Leí sobre hacer "subsetting" de fuentes CJK con Python para borrar miles de caracteres sin uso para achicar el archivo, pero la verdad que me daba re paja hacer todo eso por cada idioma. Mi solución fue cachear a lo bruto. Convertí el archivo crudo `.ttf` en un `.woff2` comprimido (más o menos 1MB), lo alojé directo en mi propia CDN (`cdn.sudothy.me`), y obligué agresivamente al navegador a meterlo en caché usando una etiqueta `<link rel="preload">` en el head del documento antes de que el módulo de karaoke siquiera se monte. Solucionado.

## 4. Visuales y Garbage Collection (global.css)

Después estaba el tema de las pausas instrumentales. Un texto viejo clavado en pantalla por 40 segundos se ve re croto. Así que armé un recolector de basura: si pasan 3 segundos sin que se actualice la letra, la UI desmonta con delicadeza el bloque de texto.

Cuando una palabra *sí* está activa, tiene que resaltar físicamente. Usamos el Naranja Ubuntu de Canonical (`#E95420`) con un resplandor en capas y un toque de `transform: scale(1.05)`.
Tipo así:
```css
.lyric-word.active {
  color: #E95420;
  text-shadow: 0 0 4px rgba(233, 84, 32, 0.8), 
               0 0 12px rgba(233, 84, 32, 0.4);
  transform: scale(1.05);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
```
*Una nota técnica:* Para hacer que esto ande sin que se caigan los cuadros hubo que animar estrictamente la propiedad `transform` para mantenerlo acelerado por hardware. Si intentás animar `font-size` para darle ese pop kinético, el motor de layout del navegador se re calienta y causa un lag masivo. Y sí, igual los cuadros se siguen cayendo a lo loco así que cualquier tip viene joya. Podés abrir un issue en mi repo de Github sobre esto.

## 5. Pesadillas con APIs

Al principio usé la API de MusicBrainz/Cover Art Archive para traer la portada del álbum dinámicamente. Era una reverenda cargada. Lograba traer el arte de algún temita pop regional que no conoce nadie, pero no devolvía absolutamente nada de discos archiconocidos.

La mandé a volar. Ahora le tiramos la búsqueda directo a la API de iTunes Search. Te perdona la vida con las búsquedas medio flojas y tiene una tasa de acierto de casi el 100%. A veces la API corporativa más simple es simplemente mejor que una base de datos open-source rompebolas. Me dolió en el alma igual porque soy el primero en mandar a cagar las cosas de código cerrado de las grandes empresas tech.

## 6. El Sistema de Votos (vote.js)

Por último, el cliente de Like/Dislike. Está en el frontend y tira peticiones POST a un backend serverless (`vote.js`) que habla con mi base de datos. Tuve que meter un rastreo de estado local para que los usuarios no vivan spameando el endpoint, pero manteniendo las actualizaciones de la UI bien optimistas (cambiando el color del botón antes de que el servidor conteste) se siente de respuesta instantánea.

Es un ecosistema chiquito pero re complejo, pero verlo andar de diez en un entorno de escritorio simulado hace que cada timestamp valga la pena.