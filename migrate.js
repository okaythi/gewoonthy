import fs from 'fs';
import { execSync } from 'child_process';

const quoteCode = fs.readFileSync('functions/api/quote.js', 'utf8');
const match = quoteCode.match(/const quotes = (\[[\s\S]*?\]);\n/);
if (!match) {
  console.error("Could not find quotes array.");
  process.exit(1);
}

// Evaluate the array safely
let quotes;
eval(`quotes = ${match[1]}`);

console.log(`Found ${quotes.length} quotes.`);

let sql = '';
for (const q of quotes) {
  const author = q.author.replace(/'/g, "''");
  const en = q.text.en.replace(/'/g, "''");
  const nl = (q.text.nl || '').replace(/'/g, "''");
  const fr = (q.text.fr || '').replace(/'/g, "''");
  
  sql += `INSERT INTO quotes (author, text_en, text_nl, text_fr, weight, views) VALUES ('${author}', '${en}', '${nl}', '${fr}', 1, 0);\n`;
}

fs.writeFileSync('seed.sql', sql);
console.log('seed.sql written.');
