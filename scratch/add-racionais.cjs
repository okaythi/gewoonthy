const fs = require('fs');

const ptLines = [
  "Sempre fui sonhador, é isso que me mantém vivo", "Quando pivete, meu sonho era ser jogador de futebol, vai vendo",
  "Mas o sistema limita nossa vida de tal forma", "Que tive que fazer minha escolha: Sonhar ou sobreviver",
  "Os anos se passaram e eu fui me esquivando do ciclo vicioso", "Porém, o capitalismo me obrigou a ser bem sucedido",
  "Acredito que o sonho de todo pobre é ser rico", "Em busca do meu sonho de consumo",
  "Procurei dar uma solução rápida e fácil pros meus problemas:", "O crime",
  "Mas é um dinheiro amaldiçoado", "Quanto mais eu ganhava, mais eu gastava",
  "Logo fui cobrado pela lei da natureza, vish", "14 anos de reclusão",
  "Barato é loco, barato é loco",
  
  "É necessário sempre acreditar que o sonho é possível", "Que o céu é o limite e você, truta, é imbatível",
  "Que o tempo ruim vai passar, é só uma fase", "Que o sofrimento alimenta mais a sua coragem",
  "Que a sua família precisa de você", "Lado a lado se ganhar pra te apoiar se perder",
  "Falo do amor entre homem, filho e mulher", "A única verdade universal que mantém a fé",
  "Olho as crianças que é o futuro e esperança", "Que ainda não conhecem, não sentem o que é ódio e ganância",
  "Eu vejo o rico que teme perder a fortuna", "Enquanto o mano desempregado, viciado, se afunda",
  "Falo do enfermo, (irmão) falo do são (então)", "Falo da rua que pra esse louco mundão",
  "Que o caminho da cura pode ser a doença", "Que o caminho do perdão às vezes é a sentença",
  "Desavença, treta e falsa união", "A ambição é como um véu que cega os irmão",
  "Que nem um carro guiado na estrada da vida", "Sem farol no deserto das trevas perdidas",
  "Eu fui orgia, ébrio, louco, mas hoje ando sóbrio", "Guardo o revólver quando você me fala em ódio",
  "Eu vejo o corpo, a mente, a alma, o espírito", "Ouço o repente e o que diz lá no canto lírico",
  "Falo do cérebro e do coração", "Vejo egoísmo, preconceito de irmão pra irmão",
  "A vida não é o problema, é batalha, desafio", "Cada obstáculo é uma lição, eu anuncio",

  "É isso aí, você não pode parar", "Esperar o tempo ruim vir te abraçar",
  "Acreditar que sonhar sempre é preciso", "É o que mantém os irmãos vivos",

  "Várias famílias, vários barracos", "Uma mina grávida",
  "E o mano tá lá trancafiado", "Ele sonha na direta com a liberdade",
  "Ele sonha em um dia voltar pra rua longe da maldade", "Na cidade grande é assim",
  "Você espera tempo bom e o que vem é só tempo ruim", "No esporte, no boxe ou no futebol",
  "Alguém sonhando com uma medalha o seu lugar ao sol, porém", "Fazer o que se o maluco não estudou",
  "500 anos de Brasil e o Brasil aqui nada mudou", "Desesperô aí, cena do louco",
  "Invadiu o mercado farinhado armado e mais um pouco", "Isso é reflexo da nossa atualidade",
  "Esse é o espelho derradeiro da realidade", "Não é areia, conversa, xaveco",
  "Porque o sonho de vários na quebrada é abrir um boteco", "Ser empresário não dá, estudar nem pensar",
  "Tem que trampar ou ripar pros irmãos sustentar", "Ser criminoso aqui é bem mais prático",
  "Rápido, sádico, ou simplesmente esquema tático", "Será instinto ou consciência",
  "Viver entre o sonho ou a merda da sobrevivência",

  "O aprendizado foi duro", "E mesmo diante desse revés não parei de sonhar",
  "Fui persistente, porque o fraco não alcança a meta", "Através do rap corri atrás do preju",
  "E pude realizar meu sonho", "Por isso que eu, Afro-X, nunca deixo de sonhar",

  "Conheci o paraíso e eu conheço o inferno", "Vi Jesus de calça bege e o diabo vestido de terno",
  "No mundo moderno, as pessoas não se falam", "Ao contrário, se calam, se pisam, se traem, se matam",
  "Embaralho as cartas da inveja e da traição", "Copa, ouro e uma espada na mão",
  "O que é bom é pra si e o que sobra é do outro", "Que nem o sol que aquece, mas também apodrece o esgoto",
  "É muito louco olhar as pessoas", "A atitude do mal influencia a minoria boa",
  "Morrer à toa, que mais? Matar à toa, que mais?", "Ser presa à toa , sonhando com uma fita boa",
  "A vida voa e o futuro pega", "Quem se firmô, falô",
  "Quem não ganhou, o jogo entrega", "Mais um queda em 15 milhões",
  "Na mais rica metrópole, suas várias contradições", "É incontável, inaceitável, implacável, inevitável",
  "Ver o lado miserável se sujeitando com migalhas, favores", "Se esquivando entre noite de medo e horrores",
  "Qual é a fita, a treta, a cena?", "A gente reza, foge, continua sempre os mesmo problema",
  "Mulher e dinheiro tá sempre envolvido", "Vaidade, ambição, munição pra criar inimigo",
  "Desde o povo antigo foi sempre assim", "Quem não se lembra que Abel foi morto por Caim",
  "Enfim, quero vencer sem pilantrar com ninguém", "Quero dinheiro sem pisar na cabeça de alguém",
  "O certo é certo na guerra ou na paz", "Se for um sonho não me acorde nunca mais",
  "Roleta russa, quanto custa engatilhar?", "Eu pago o dobro pra você em mim acreditar",

  "É isso ai você não pode parar", "Esperar o tempo ruim vir te abraçar",
  "Acreditar que sonhar sempre é preciso", "É o que mantém os irmãos vivos",

  "Geralmente quando os problemas aparecem", "A gente está desprevenido né, não?",
  "Errado!", "É você que perdeu o controle da situação",
  "Perdeu a capacidade de controlar os desafios", "Principalmente quando a gente foge das lição",
  "Que a vida coloca na nossa frente assim, tá ligado?", "Você se acha sempre incapaz de resolver",
  "Se acovarda, morô?", "O pensamento é a força criadora",
  "O amanha é ilusório", "Porque ainda não existe",
  "O hoje é real", "É a realidade que você pode interferir",
  "As oportunidades de mudança", "Tá no presente",
  "Não espere o futuro mudar sua vida", "Porque o futuro será a consequência do presente",
  "Parasita hoje, um coitado amanhã", "Corrida hoje, vitória amanhã",
  "Nunca esqueça disso, irmão"
];

const enLines = [
  "I’ve always been a dreamer, that’s what keeps me alive", "When I was a kid, my dream was to be a footballer, check it out",
  "But the system restricts our lives in such a way", "That I had to make my choice: Dream or survive",
  "Years went by and I dodged the vicious cycle", "However, capitalism forced me to be successful",
  "I reckon every poor man's dream is to be rich", "In pursuit of my dream of consumption",
  "I tried to find a quick and easy fix for my problems:", "Crime",
  "But it’s cursed money", "The more I earned, the more I spent",
  "Soon I was charged by the law of nature, blimey", "14 years behind bars",
  "The game is mad, the game is mad",

  "You always gotta believe that the dream is possible", "That the sky's the limit and you, mate, are unbeatable",
  "That the bad times will pass, it’s just a phase", "That the suffering just feeds your courage",
  "That your family needs you", "Side by side if you win, to back you up if you lose",
  "I speak of the love between a man, his son and his woman", "The only universal truth that keeps the faith",
  "I look at the kids who are the future and hope", "Who don't yet know, don't feel what hate and greed are",
  "I see the rich man who fears losing his fortune", "While the unemployed brother, addicted, sinks",
  "I speak of the sick (brother), I speak of the healthy (then)", "I speak of the street, which to this mad big world",
  "The path to the cure might just be the disease", "That the path of forgiveness is sometimes the sentence",
  "Disagreement, beef and fake unity", "Ambition is like a veil that blinds the brothers",
  "Just like a car driven on the road of life", "Without headlights in the desert of lost darkness",
  "I was an orgy, drunk, crazy, but today I walk sober", "I put away the revolver when you speak to me of hate",
  "I see the body, the mind, the soul, the spirit", "I hear the beat and what’s said there in the lyric chant",
  "I speak of the brain and the heart", "I see selfishness, prejudice from brother to brother",
  "Life isn't the problem, it's a battle, a challenge", "Every obstacle is a lesson, I announce",

  "That's right, you can't stop", "Wait for the bad times to come embrace you",
  "Believe that dreaming is always necessary", "It's what keeps the brothers alive",

  "Several families, several shacks", "A pregnant girl",
  "And the lad is locked up in there", "He dreams straight up of freedom",
  "He dreams of one day going back to the streets far from the wickedness", "In the big city it's like this",
  "You expect good weather and all that comes is bad weather", "In sports, in boxing or football",
  "Someone dreaming of a medal, their place in the sun, however", "What to do if the bloke didn't study",
  "500 years of Brazil and the Brazil here hasn't changed at all", "Getting desperate, scene of a madman",
  "Invaded the market, powdered up, armed and then some", "This is a reflection of our current reality",
  "This is the ultimate mirror of reality", "It's no bullshit, chatter, or sweet talk",
  "Because the dream of many in the ends is to open a pub", "Being an entrepreneur won't work, studying no way",
  "Gotta graft or steal to sustain the brothers", "Being a criminal here is way more practical",
  "Fast, sadistic, or simply a tactical scheme", "Is it instinct or conscience",
  "Living between the dream or the shite of survival",

  "The learning was hard", "And even faced with this setback I didn't stop dreaming",
  "I was persistent, because the weak don't reach the goal", "Through rap I chased my losses",
  "And I could make my dream come true", "That's why I, Afro-X, never stop dreaming",

  "I knew paradise and I know hell", "I saw Jesus in beige trousers and the devil dressed in a suit",
  "In the modern world, people don't talk to each other", "On the contrary, they stay silent, step on each other, betray, kill",
  "I shuffle the cards of envy and treason", "Hearts, diamonds and a spade in hand",
  "What's good is for oneself and what's left is for the other", "Just like the sun that warms, but also rots the sewer",
  "It's very crazy looking at people", "The bad attitude influences the good minority",
  "Dying for nothing, what else? Killing for nothing, what else?", "Getting nicked for nothing, dreaming of a good score",
  "Life flies by and the future catches up", "Who stood firm, spoke",
  "Who didn't win, gives up the game", "Another fall among 15 million",
  "In the richest metropolis, its several contradictions", "It's countless, unacceptable, relentless, inevitable",
  "Seeing the miserable side subjecting itself to crumbs, favours", "Dodging between nights of fear and horrors",
  "What's the deal, the beef, the scene?", "We pray, we flee, it's always the same problems carrying on",
  "Women and money are always involved", "Vanity, ambition, ammo to create enemies",
  "Since ancient times it was always like this", "Who doesn't remember that Abel was killed by Cain",
  "Anyway, I want to win without mugging anyone off", "I want money without stepping on anyone's head",
  "Right is right in war or in peace", "If it's a dream don't wake me up ever again",
  "Russian roulette, how much does it cost to cock it?", "I'll pay double for you to believe in me",

  "That's right you can't stop", "Wait for the bad times to come embrace you",
  "Believe that dreaming is always necessary", "It's what keeps the brothers alive",

  "Usually when problems appear", "We're caught off guard right, ain't we?",
  "Wrong!", "It's you who lost control of the situation",
  "Lost the ability to control the challenges", "Especially when we run away from the lessons",
  "That life puts in front of us like this, you get me?", "You always think you're incapable of solving it",
  "You bottle it, ya know?", "Thought is the creative force",
  "Tomorrow is an illusion", "Because it doesn't exist yet",
  "Today is real", "It's the reality you can interfere with",
  "The opportunities for change", "Are in the present",
  "Don't wait for the future to change your life", "Because the future will be the consequence of the present",
  "Parasite today, a poor sod tomorrow", "Hustle today, victory tomorrow",
  "Never forget that, brother"
];

const targetFile = 'C:\\\\Users\\\\thy\\\\Projects\\\\gewoonthy\\\\src\\\\data\\\\lyrics.ts';

function main() {
  const verses = [];
  
  let time = 0;
  for (let i = 0; i < ptLines.length; i++) {
    const tokens = ptLines[i].split(/\s+/).filter(Boolean);
    const words = [];
    
    for (const token of tokens) {
      words.push({ word: token, start: 0, end: 0 });
    }
    
    verses.push({
      verseStart: time,
      verseEnd: time + 3,
      translation: enLines[i],
      words
    });
    time += 3;
  }

  const songData = {
    globalOffset: 0,
    lyricsData: verses
  };

  const songDataStr = `,\n  "Racionais MC's - A Vida É Desafio.mp4": ${JSON.stringify(songData, null, 4).replace(/\n/g, '\n  ')}`;

  let fileContent = fs.readFileSync(targetFile, 'utf8');
  
  const endIdx = fileContent.lastIndexOf('};');
  if (endIdx !== -1) {
    fileContent = fileContent.substring(0, endIdx) + songDataStr + '\n' + fileContent.substring(endIdx);
    fs.writeFileSync(targetFile, fileContent);
    console.log("Successfully appended Racionais MC's to lyrics.ts");
  }
}

main();
