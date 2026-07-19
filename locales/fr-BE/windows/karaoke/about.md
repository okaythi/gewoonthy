# Concevoir le Moteur Karaoké

Bienvenue dans le backend de l'application Karaoké. Construire une expérience karaoké fluide, mot par mot dans le navigateur (sans parler de ce simulateur de terminal Linux fait maison) était un projet sympa mais souvent vraiment crevant, où il ne s'agit pas juste de lire une vidéo, mais de synchronisation à la sous-milliseconde et de se battre contre la latence du navigateur. Le mot clé ici, c'est "se battre" lol

Même en tant qu'amateur, je voulais quand même construire un truc qui paraisse natif, réactif et précis. Voici un aperçu sous le capot de la façon dont tout cela s'assemble.

## 1. Le Travail Manuel (lyrics.ts)

Si vous vous demandez quelle IA ou API magique j'ai utilisée pour synchroniser les paroles mot par mot...... la réponse est la force de la volonté lol

Les fichiers `.lrc` standards ne se synchronisent généralement que ligne par ligne, et les API que j'ai trouvées étaient tellement médiocres que franchement, leur existence même est gênante. Pour obtenir ce surlignage moderne, rebondissant et mot par mot, j'ai manuellement passé en revue chaque vidéo. J'ai minutieusement marqué le timestamp exact pour le début et la fin de chaque mot et couplet. Honnêtement, comprendre la prosodie de la parole et la phonétique articulatoire est à la fois une bénédiction et une malédiction ici - voir une parole s'allumer visuellement même 150ms après que la syllabe a été effectivement chantée fait physiquement mal à mon âme.

> [!NOTE]
> C'est toujours le cas pour la chanson russe Плак-плак, mais soyez indulgents avec moi, je sais lire le cyrillique mais je ne parle pas russe.

Donc, j'ai lancé un script (j'ai fait écrire ce seul script par un modèle LLM) pour le formater dans notre dataset `lyrics.ts`. Ça m'a pris littéralement des jours, mais la précision est assez bonne pour que je sois fier de la montrer.

```typescript
// Un aperçu de lyrics.ts
export const lyricsData = [
  { start: 12.45, end: 12.80, text: "Never", type: "word" },
  { start: 12.81, end: 13.10, text: "gonna", type: "word" },
  { start: 13.11, end: 13.50, text: "give", type: "word" }
];
```

## 2. Se Battre Contre le DOM (KaraokeWindow.js)

Le défi principal était de garder l'UI parfaitement accrochée à l'état de lecture de la vidéo. Mon approche idiote au début a été d'utiliser l'événement natif `timeupdate` de la balise HTML5 `<video>`.

J'ai vite appris que `timeupdate` est de la grosse daube pour ça. Ça se déclenche peut-être 4 fois par seconde (environ par intervalles de 250ms). Pour une ballade lente, allez, ça passe. Pour des couplets de rap rapides ou un morceau techno percutant ? Ça ressemble à un bazar saccadé et désynchronisé.

La solution de contournement a été de jeter `timeupdate` par la fenêtre et de pirater le `requestAnimationFrame` du navigateur. Ça sonde `vid.currentTime` à 60 images par seconde. J'ai fait quelques recherches et découvert qu'utiliser la Web Audio API pour créer un nœud de contexte audio personnalisé pourrait techniquement être la méthode divine pour gérer la précision temporelle absolue, mais lier le DOM strictement à l'horloge vidéo via rAF a fonctionné de manière impeccable, et écrire des analyseurs de buffer audio personnalisés dépassait largement mes capacités intellectuelles.

Comme ceci :
```javascript
// Sondage à 60fps au lieu de compter sur des écouteurs d'événements lents
function updateLyrics() {
  const currentTime = vid.currentTime;
  // [...] logique de correspondance des mots
  requestAnimationFrame(updateLyrics);
}
```

## 3. Le Cauchemar du Rendu des Polices

Un gros obstacle que je n'avais pas vu venir : la latence de la typographie personnalisée. Comme beaucoup de ces morceaux sont multilingues, récupérer dynamiquement des Google Fonts japonaises lourdes à la volée causait un énorme FOIT (Flash of Invisible Text). Le temps que le navigateur récupère la police, tout le couplet en kanji était déjà passé, donc c'était de la pure merde.

J'ai lu des trucs sur le "subsetting" des polices CJK avec Python pour supprimer des milliers de glyphes inutilisés afin de réduire la taille du fichier, mais honnêtement j'avais la flemme de faire tout ça pour chaque langue. Ma solution de contournement a été la mise en cache en force brute. J'ai converti le `.ttf` brut en un `.woff2` compressé (environ 1Mo), je l'ai hébergé directement sur mon propre CDN (`cdn.sudothy.me`), et j'ai forcé de manière agressive le navigateur à le mettre en cache en utilisant une directive `<link rel="preload">` dans l'en-tête du document avant même que le module karaoké ne soit monté. Réglé.

## 4. Visuels & Garbage Collection (global.css)

Ensuite, il y a eu le problème des pauses instrumentales. Du texte obsolète qui reste affiché à l'écran pendant quarante secondes, ça fait vraiment dégueulasse. J'ai implémenté un ramasse-miettes : si 3 secondes s'écoulent sans mise à jour des paroles, l'UI démonte gracieusement le bloc de texte.

Quand un mot *est* actif, il doit physiquement ressortir. Nous utilisons l'Ubuntu Orange de Canonical (`#E95420`) avec une lueur superposée et un léger `transform: scale(1.05)`.
Comme ceci :
```css
.lyric-word.active {
  color: #E95420;
  text-shadow: 0 0 4px rgba(233, 84, 32, 0.8), 
               0 0 12px rgba(233, 84, 32, 0.4);
  transform: scale(1.05);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
```
*Une note technique :* Faire tourner ça sans perdre d'images signifiait animer strictement la propriété `transform` pour garder ça avec accélération matérielle. Si on essaie d'animer `font-size` pour ce pop cinétique, le moteur de layout du navigateur pique une crise et cause un lag massif. Et oui, des images sautent toujours comme un malade donc tous les conseils sont les bienvenus. Vous pouvez ouvrir une issue sur mon dépôt Github pour ça.

## 5. Les Cauchemars d'API

Au départ, j'utilisais l'API MusicBrainz/Cover Art Archive pour récupérer dynamiquement la pochette de l'album. C'était une vraie blague. Ça récupérait avec succès l'illustration d'un morceau de pop régionale de niche, mais ne renvoyait rien pour des disques massivement connus.

Je l'ai virée. On fait maintenant rebondir la chaîne de recherche via l'API iTunes Search. C'est incroyablement tolérant avec les recherches floues et a un taux de réussite de près de 100%. Parfois, l'API d'entreprise la plus simple est juste meilleure qu'une base de données open-source pointilleuse. Ça fout les boules quand même car d'habitude je préfère dire merde aux trucs fermés des grandes boîtes tech.

## 6. Le Système de Vote (vote.js)

Enfin, le client Like/Dislike. Il se trouve dans le frontend et tire des requêtes POST vers un backend serverless (`vote.js`) qui parle à ma base de données. J'ai dû implémenter un suivi d'état local pour que les utilisateurs ne spamment pas bêtement l'endpoint, mais en gardant les mises à jour de l'UI optimistes (mise à jour de la couleur du bouton avant que le serveur ne réponde), ça donne une sensation de réactivité instantanée.

C'est un petit écosystème complexe, mais le voir tourner sans problème dans un environnement de bureau simulé fait que chaque timestamp en vaut la peine.