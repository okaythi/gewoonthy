const fs = require('fs');
const file = 'src/data/lyrics.ts';
let c = fs.readFileSync(file, 'utf8');
c = c.replace(/"Racionais MC's - A Vida E([^ ]+) Desafio\.mp4":/g, '"A Vida E$1 Desafio.mp4":');
fs.writeFileSync(file, c);
console.log('Fixed');
