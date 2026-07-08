const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const replacements = [
    { from: / onClick="([^"]*)"/g, to: ' onClick={() => {$1}}' },
    { from: / onError="([^"]*)"/g, to: ' onError={() => {$1}}' },
    { from: / onChange="([^"]*)"/g, to: ' onChange={(e) => {$1}}' },
    { from: / onKeyUp="([^"]*)"/g, to: ' onKeyUp={(e) => {$1}}' },
    // Remove unused imports
    { from: /import React from 'react';\n/g, to: '' },
    { from: /import \{ Link \} from 'react-router-dom';\n/g, to: '' }
];

let changedFiles = 0;

walkDir(path.join(__dirname, 'src'), function(filePath) {
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        
        replacements.forEach(rep => {
            content = content.replace(rep.from, rep.to);
        });
        
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content);
            console.log('Updated: ' + filePath);
            changedFiles++;
        }
    }
});

console.log('Finished updating ' + changedFiles + ' files.');
