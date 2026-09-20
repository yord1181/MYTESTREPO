const fs = require('fs');

const pattern = process.argv[2];
const fileName = process.argv[3];
const n = Number(process.argv[4]);

const content = fs.readFileSync(fileName, 'utf8');
const lines = content.split('\n');
const firstNLines = lines.slice(0, n);
const matches = firstNLines.filter(line => line.includes(pattern));

console.log(matches.join('\n'));
