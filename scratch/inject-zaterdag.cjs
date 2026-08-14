const fs = require('fs');

const translations = [
  "Zaterdagavond ga ik in het bad",
  "Want er groeien al champignons uit mijn gat",
  "Mijn okselgeur is niet meer te doen",
  "Ik spuit deodorant in elke schoen",
  "Ik was mijn haar want het is weer vettig",
  "Ik ben op tijd, twintig uur dertig",
  "Dat is dus nog tijd voor wat puisten uit te knijpen",
  "En binnen het uurtje ben ik weg",
  "Ja zaterdagavond, mijn haar in de plooi",
  "Op en top in kostuum, dat zie je zo",
  "Ik ben de playboy, ik weet dat van mijn eigen",
  "Maar over mijn witte kousen moet je gaan zwijgen",
  "Ik bewonder nog een keer mijn eigen kop",
  "Om te zien is het goed of is het een flop",
  "Ik ben klaar voor het café, dus goed gezind",
  "En als ik binnenkom kraak ik direct mijn pint",
  "Maar zoek je een Bob, maak ik mij uit de voeten",
  "Ik drink zaterdags liever een stuk in mijn kloten",
  "Bob hier Bob daar, het is allemaal iets vies",
  "Als ik op een boom peer kom ik toch op het nieuws",
  "Joepiao, Jupilerajee",
  "Wij gaan feesten en als dat nog niet mag",
  "Joepiao, Jupilerajee",
  "Want zaterdag is het krapoeltjesdag",
  "Joepiao, Jupilerajee",
  "Wij gaan feesten en als dat nog niet mag",
  "Joepiao, Jupilerajee",
  "Want zaterdag is het krapoeltjesdag",
  "Er is een fuif, daar ga ik eens binnen",
  "Over die honderd frank inkom moet je niet beginnen",
  "Zij heeft twee ogen en ik twee duimen",
  "Ik kom hier niet voor de fuif, maar voor de pramen",
  "Hilde of Hilda, ik grijp ze bij de kraag",
  "Het speelt voor mij allemaal geen rol",
  "Nee, zaterdags lig ik niet in mijn bed",
  "En op de televisie is het ook niet vet",
  "Je moet niet proberen van het mij te beletten",
  "Om zaterdags een stapje in de wereld te zetten",
  "Met toverwater van de interbrew",
  "Of de nectar van de haacht, dat is al even goed",
  "Even goed voor de stress en de dynamiek",
  "Voor uw piston en de elektriciteit",
  "Over naar huis gaan moet je tegen mij direct nog niet praten",
  "Ik ga eerst nog wat pintjes in mijn kamizool kappen",
  "Joepiao, Jupilerajee",
  "Wij gaan feesten en als dat nog niet mag",
  "Joepiao, Jupilerajee",
  "Want zaterdag is het krapoeltjesdag",
  "Joepiao, Jupilerajee",
  "Wij gaan feesten en als dat nog niet mag",
  "Joepiao, Jupilerajee",
  "Want zaterdag is het krapoeltjesdag",
  "Het broebelt in mijn strot en alles draait",
  "Ik moet naar de koer, alles moet eruit",
  "Ik braak curryworst en wat soep van daarnet",
  "Het ligt allemaal te drijven in de GFT-bak",
  "Als ik denk dat het is gedaan, valt nog een flats op mijn hemd",
  "Ik val over mijn voeten, dat is niet het slimste",
  "Het wordt te veel, ik begin het te voelen",
  "Maar eerst de kots-smaak met nog een pintje wegspoelen",
  "En ik val in slaap in de asbak",
  "Geef nu toe, ik ben eigenlijk toch een krak",
  "Ik ga naar mijn thuis waar de Stella staat",
  "Je weet wel waar die omgekapte boom staat",
  "Ik pak de trap naar boven, maar hij loopt meer naar beneden",
  "Dat is al van vorige zaterdag geleden",
  "Dat de trap niet meer doet wat je verwacht",
  "Dat kan je voorhebben op een zaterdagnacht",
  "Joepiao, Jupilerajee",
  "Wij gaan feesten en als dat nog niet mag",
  "Joepiao, Jupilerajee",
  "Want zaterdag is het krapoeltjesdag",
  "Joepiao, Jupilerajee",
  "Wij gaan feesten en als dat nog niet mag",
  "Joepiao, Jupilerajee",
  "Want zaterdag is het krapoeltjesdag",
  "Joepiao, Jupilerajee",
  "Wij gaan feesten en als dat nog niet mag",
  "Want zaterdag is het krapoeltjesdag",
  "Wij gaan feesten en als dat nog niet mag",
  "Want zaterdag is het krapoeltjesdag"
];

const targetPath = 'C:\\\\Users\\\\thy\\\\Projects\\\\gewoonthy\\\\src\\\\data\\\\lyrics.ts';

function main() {
  let tsContent = fs.readFileSync(targetPath, 'utf8');
  let jsonString = tsContent.split('export const songsDictionary: Record<string, SongData> = ')[1];
  if (!jsonString) throw new Error('Could not parse dictionary');
  jsonString = jsonString.trim().replace(/;$/, '');
  
  let dict;
  eval('dict = ' + jsonString);
  
  const songData = dict["Zaterdag.mp4"];
  if (!songData) throw new Error("Could not find Zaterdag.mp4");
  
  songData.isDialect = true;
  
  if (songData.lyricsData.length !== translations.length) {
    console.warn('Warning: translations length (' + translations.length + ') does not match verses length (' + songData.lyricsData.length + ')');
  }
  
  for (let i = 0; i < songData.lyricsData.length; i++) {
    songData.lyricsData[i].translation = translations[i] || '';
  }
  
  const newFileContent = `export interface Word {
  word: string;
  start: number;
  end: number;
  furigana?: string;
}

export interface Verse {
  verseStart: number;
  verseEnd: number;
  speaker?: string;
  translation?: string;
  words: Word[];
}

export interface SongData {
  globalOffset: number;
  isDialect?: boolean;
  lyricsData: Verse[];
}

export const songsDictionary: Record<string, SongData> = ${JSON.stringify(dict, null, 2)};
`;

  fs.writeFileSync(targetPath, newFileContent, 'utf8');
  console.log("Successfully injected translations for Zaterdag.mp4");
}

main();
