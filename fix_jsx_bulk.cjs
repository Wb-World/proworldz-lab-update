const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('.vite') && !file.includes('react-frontend') && !file.includes('node-backend')) {
                results = results.concat(walk(file));
            }
        } else {
            if (file.endsWith('.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('d:/download');
let totalFixed = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Fix unclosed input tags (skip if already self-closing)
    content = content.replace(/<input([^>]*?[^\/])>/gi, '<input$1 />');
    
    // Fix unclosed img tags
    content = content.replace(/<img([^>]*?[^\/])>/gi, '<img$1 />');
    
    // Fix unclosed hr and br tags
    content = content.replace(/<hr\s*>/gi, '<hr />');
    content = content.replace(/<br\s*>/gi, '<br />');
    
    // Fix class to className inside tags
    // A bit dangerous as regex, but generally safe for React converted HTML
    content = content.replace(/\bclass="/gi, 'className="');
    
    // Fix for to htmlFor inside tags
    content = content.replace(/\bfor="/gi, 'htmlFor="');
    
    // Fix invalid values and placeholders
    content = content.replace(/value="\{\/\* PHP code removed \*\/}"/g, 'defaultValue=""');
    content = content.replace(/placeholder="\{\/\* PHP code removed \*\/}"/g, 'placeholder=""');
    
    // Fix style strings to objects (basic)
    // E.g., style="display: none;" -> style={{display: 'none'}}
    // This is hard with regex, maybe skip unless specifically failing.
    
    // Fix charset
    content = content.replace(/charset="UTF-8"/g, 'charSet="UTF-8"');
    
    // Remove extra dangling PHP tokens inside text areas
    content = content.replace(/<textarea([^>]*)>\{\/\* PHP code removed \*\/\}/g, '<textarea$1 defaultValue=""');
    
    // Auto-fix some known specific files
    if (file.includes('eaglone_shop.tsx')) {
        content = content.replace(/className="coin-pill">/g, 'className="coin-pill"'); // Just an example, let's let Vite tell us the exact line if this breaks
    }

    if (content !== original) {
        fs.writeFileSync(file, content);
        totalFixed++;
    }
});

console.log('Fixed common JSX syntax in ' + totalFixed + ' files.');
