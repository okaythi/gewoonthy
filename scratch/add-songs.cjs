const fs = require('fs');

const songs = [
  {
    file: "San Joe - Desculpa Ai Doutor.mp4",
    lyrics: `Eu tava em casa
E me ligou no WhatsApp
Querendo ir pro Mandela
A mãe dela me odeia
O pai quer eu na cadeia
E eu quero o coração dela
O pai dela é chato
Advogado, engravatado
E não quer me ver com ela

Desculpa aí doutor
Eu não tenho culpa se ela gosta dos favela
Eu vi de longe que ela me ganhou no bonde
Porque eu tava cheio de prata
Perguntou meu nome
Brisou na minha Juliette
No meu cabelo de rasta
Cheia de intenção, pegou na minha mão
Me levou pro corredor da casa
Tomou no meu copo
Fumou do meu baseado
Ela gamou no quebrada

Toda sexta-feira me ligava no radinho
Querendo sair comigo
"Onde você tá?"
Desculpa linda, eu tô no corre
Eu te retorno e mais tarde falo contigo

Ô, ô, ô... roubou meu coração
Ô, ô, ô... amor de cadeia ou prisão
Ô, ô, ô... favela sinistra
Sua família me odeia
O que eu posso fazer se eu sou cria?
Ô, ô, ô... roubou meu coração
Ô, ô, ô... amor de cadeia ou prisão
Ô, ô, ô... favela sinistra
Sua família me odeia
O que eu posso fazer se eu sou cria?

E lá no baile
Me trombava com os amigo
Queria foto comigo
Ela sabia que já tava apaixonada
E comigo corre perigo
Eu sou do morrão, ela é confusão
Isso não é bom e você sabe
Se o corôa descobre
Eu tô atrás das grades
Falou pra mim que tá suave na madruga
E ela gosta de aventura
Amanheceu o dia, meu parceiro me ligou
"A VT tá lá na sua"`
  },
  {
    file: "VIDEOCLUB - Roi.mp4",
    lyrics: `T'en trouveras d'autres des mecs comme moi
Y'en aura plein des gars pour toi
Tes boucles brunes s'évaporent
Dans mon âme, dans mon corps

Je te cherche dans mes songes, je te traque dans mes rêves
À l'aube ou dans mon ombre, ère en vaine sur tes lèvres
Écorchant les abîmes de mon cœur écarlate
Tu n'es que le point fixe de mes songes disparates
Aime-moi dans la neige, aime-moi sous l'soleil, aime-moi la peau beige dans les fleurs de vermeilles
J'vois des gens qui courent nus, j'vois des gens qui m'sourient
Mais moi j'plane dans la rue, dans tes yeux, sous la pluie
Et je reste l'esprit de tes lointains souvenirs, dans mes songes ensevelis, tes larmes, tes rires
Tu es ma femme iconique, tu es mon rubis saphir
Je suis ta rose lyrique, je suis ces gens qui t'admirent

Aime-moi dans la neige, aime-moi sous le soleil, aime-moi la peau beige dans les fleurs de vermeilles
Aime-moi dans la neige, aime-moi sous le soleil, aime-moi la peau beige dans les fleurs de vermeilles

Des jours durant, fuyant la nuit, j'parcours ta peau, j'parcours la ville
La fumée suave de ta bouche, file, s'échappe de jours en jours
Quand je râle dans la nuit, je suis seule sous mes vices
Je t'aime quand il pleut tu es la nymphe de mes vœux, je t'embrasse dans mes rêves et je t'aime au bout des lèvres
Je déteste le gout mièvre de leurs bouches, de leurs rêves
Dans la nuit tu me regardes, sous les nuages je divague

Avec toi je suis roi
Toi je suis roi
Toi je suis roi
Toi je suis roi

Aime-moi dans la neige, aime-moi sous le soleil, aime-moi la peau beige dans les fleurs de vermeilles
Aime-moi dans la neige, aime-moi sous le soleil, aime-moi la peau beige dans les fleurs de vermeilles`
  },
  {
    file: "Kero Kero Bonito - Break.mp4",
    lyrics: `I know it seems kinda tough
But really it's easy enough
For us to slow down the pace
So we can all go take a break
In fact, there's not much better than nothing at all
And that's especially true
When there is something to do
Just move very slowly to the beat
Now get down and put up your feet
If you like to lounge, relax, or flop
Doesn't really matter when you're doing squat

Life is a race, that's what they say
So time out, and look around
Tachidomaru to miete kuru
I see it now (Take a break!)

"Hey, you've reached Gus and Jamie from KKB
We're recording right now
So leave your message after the beep"
Yo, Gus and Jamie, it's Sarah
Just to let you know that I don't wanna do anything today
So I'll see you later, bye!
Nanimoshinai kono toki
Sora o miageru mangetsu
Hoshitte kon'nani kirei nanda`
  }
];

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
      words.push({ word: token, start: 0, end: 0 });
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
  let appended = false;

  for (const song of songs) {
    if (fileContent.includes(`"${song.file}"`)) {
      console.log(`Song ${song.file} already exists. Skipping.`);
      continue;
    }

    const verses = parseToVerses(song.lyrics);
    const songData = {
      globalOffset: 0,
      lyricsData: verses
    };

    const songDataStr = `,\n  "${song.file}": ${JSON.stringify(songData, null, 4).replace(/\n/g, '\n  ')}`;
    
    const lastBraceIndex = fileContent.lastIndexOf('};');
    if (lastBraceIndex !== -1) {
      fileContent = fileContent.substring(0, lastBraceIndex) + songDataStr + '\n' + fileContent.substring(lastBraceIndex);
      appended = true;
      console.log(`Added ${song.file} to lyrics.ts`);
    }
  }

  if (appended) {
    fs.writeFileSync(targetFile, fileContent);
    console.log("Successfully updated lyrics.ts");
  }
}

main();
