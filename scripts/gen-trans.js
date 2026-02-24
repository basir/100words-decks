const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const dir = args[0];
const lang = args[1];

if (!dir || !lang) {
    console.error('Usage: node scripts/gen-trans-cards.js <dir> <lang>');
    process.exit(1);
}

const csvFilePath = path.join('.', dir, `${lang}.csv`);
const enFilePath = path.join('.', dir, `en.json`);
const outFilePath = path.join('.', dir, `${lang}.json`);

// Parse CSV (handles commas inside fields if quoted)
function parseCsv(content) {
    const lines = content.trim().split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
        const values = [];
        let current = '';
        let inQuotes = false;
        for (const char of line) {
            if (char === '"') inQuotes = !inQuotes;
            else if (char === ',' && !inQuotes) { values.push(current); current = ''; }
            else current += char;
        }
        values.push(current);
        return Object.fromEntries(headers.map((h, i) => [h.trim(), (values[i] || '').trim()]));
    });
}


const csvContent = fs.readFileSync(csvFilePath, 'utf-8');
const enJson = JSON.parse(fs.readFileSync(enFilePath, 'utf-8'));

const translations = new Map(parseCsv(csvContent).map(row => [row.id, row]));

enJson.cards = enJson.cards.map(card => {
    const t = translations.get(String(card.id));
    if (!t) return card;
    const result = {};
    for (const key of Object.keys(card)) {
        result[key] = card[key];
        if (key === 'front') result.front_trans = t.front || '';
        if (key === 'back') result.back_trans = t.back || '';
        if (key === 'example') result.example_trans = t.example || '';
    }
    return result;
});

fs.writeFileSync(outFilePath, JSON.stringify(enJson, null, 2), 'utf-8');
console.log(`Written: ${outFilePath}`);