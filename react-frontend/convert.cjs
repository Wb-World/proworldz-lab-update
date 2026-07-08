const fs = require('fs');
const path = require('path');

const phpPath = path.join('d:', 'download', 'index.php');
const tsxPath = path.join('d:', 'download', 'react-frontend', 'src', 'pages', 'Home.tsx');
const cssPath = path.join('d:', 'download', 'react-frontend', 'src', 'pages', 'Home.css');

let content = fs.readFileSync(phpPath, 'utf-8');

// Extract styles
const styleMatch = content.match(/<style>([\s\S]*?)<\/style>/);
if (styleMatch) {
    fs.writeFileSync(cssPath, styleMatch[1]);
}

// Extract body
const bodyMatch = content.match(/<body>([\s\S]*?)<\/body>/);
if (!bodyMatch) {
    console.error("No body found");
    process.exit(1);
}

let bodyContent = bodyMatch[1];

// Remove scripts
bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// Convert HTML to JSX
bodyContent = bodyContent.replace(/class=/g, 'className=');
bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
bodyContent = bodyContent.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
bodyContent = bodyContent.replace(/<br>/g, '<br />');
bodyContent = bodyContent.replace(/<hr>/g, '<hr />');
bodyContent = bodyContent.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
// Fix inline styles manually or clear them (very few in index.php usually)
bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, p1) => {
    // simple heuristic: style="color: red; margin-top: 10px;"
    const styles = p1.split(';').filter(s => s.trim().length > 0).map(s => {
        const [k, v] = s.split(':');
        if(!k || !v) return '';
        const camelK = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        return `${camelK}: '${v.trim()}'`;
    }).join(', ');
    return `style={{${styles}}}`;
});

const componentCode = `import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div className="home-wrapper">
            ${bodyContent}
        </div>
    );
}
`;

fs.writeFileSync(tsxPath, componentCode);
console.log("Converted index.php to Home.tsx");
