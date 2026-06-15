const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.git')) {
                results = results.concat(walk(file));
            }
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.js')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('d:/download');
let changed = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content
        .replace(/href="([^"]+)\.php([^"]*)"/gi, 'href="$1$2"')
        .replace(/action="([^"]+)\.php([^"]*)"/gi, 'action="$1$2"')
        .replace(/location='([^']+)\.php([^']*)'/gi, 'location=\'$1$2\'')
        .replace(/Location:\s*([^'"\s]+)\.php/gi, 'Location: $1')
        .replace(/selectLang\('([^']+)\.php'\)/gi, 'selectLang(\'$1\')')
        .replace(/window\.location\.href\s*=\s*['"]([^'"]+)\.php([^'"]*)['"]/gi, 'window.location.href = "$1$2"');
        
    if (content !== newContent) {
        fs.writeFileSync(file, newContent);
        changed++;
        console.log('Fixed links in: ' + file);
    }
});
console.log('Done. Changed ' + changed + ' files.');
