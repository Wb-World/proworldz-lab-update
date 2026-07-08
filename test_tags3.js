const fs = require('fs');
const content = fs.readFileSync('_admin/index.tsx', 'utf-8');
const stack = [];
const lines = content.split('\n');
const tagRegex = /<\/?([a-zA-Z0-9]+)([^>]*?)(\/?)>/g;

for (let i = 740; i < 1130; i++) {
    const line = lines[i];
    if (line.includes('{/*') || line.includes('*/}')) continue;
    
    let match;
    while ((match = tagRegex.exec(line)) !== null) {
        const fullTag = match[0];
        const isClosing = fullTag.startsWith('</');
        const tagName = match[1];
        const isSelfClosing = match[3] === '/';
        if (isSelfClosing) continue;
        if (['input', 'img', 'br', 'hr', 'meta', 'link'].includes(tagName)) continue;
        
        if (isClosing) {
            if (stack.length === 0) {
                console.log('Error: Found closing tag </' + tagName + '> without opening tag at line ' + (i + 1));
            } else {
                const last = stack.pop();
                if (last.tagName !== tagName) {
                    console.log('Error: Mismatched tag at line ' + (i + 1) + '. Expected </' + last.tagName + '> but found </' + tagName + '>');
                    console.log('Opening tag <' + last.tagName + '> was at line ' + (last.line + 1));
                    process.exit(1);
                }
            }
        } else {
            stack.push({ tagName, line: i });
        }
    }
}
if (stack.length > 0) {
    console.log('Unclosed tags remaining:');
    stack.forEach(tag => console.log('<' + tag.tagName + '> at line ' + (tag.line + 1)));
}
