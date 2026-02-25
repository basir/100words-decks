

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const dir = args[0];

if (!dir) {
    console.error('Usage: node scripts/gen-trans-cards.js <dir>');
    process.exit(1);
}


const filePath = path.join('.', dir, `en.json`);
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

const cards = data.cards.map(({ id, front, back, example }) => ({ id, front, back, example }));

const header = 'id,front,back,example';
const rows = cards.map(c =>
    [c.id, c.front, c.back, c.example].map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',')
);
const csv = [header, ...rows].join('\n');

const outPath = path.join('.', dir, 'en-for-trans.csv');
fs.writeFileSync(outPath, csv, 'utf-8');

/*
after generation en-for-trans.csv file, run this prompt

Translate this to {lang}.
[content of en-for-trans.csv]

Output in csv file as follow:
id,front,back,example
1,translation of front,translation of back,translation of example
*/