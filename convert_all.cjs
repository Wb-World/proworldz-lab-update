const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    
    // Safety exclusion for node_modules to avoid breaking dependencies
    if (fullPath.includes('node_modules')) continue;
    
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.php')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      const hasHtml = content.includes('<!DOCTYPE html>') || content.includes('<div') || content.includes('<html>');
      
      if (hasHtml) {
        const targetPath = fullPath.replace(/\.php$/, '.tsx');
        
        let htmlStartIndex = content.indexOf('<!DOCTYPE html>');
        if (htmlStartIndex === -1) htmlStartIndex = content.indexOf('<html');
        if (htmlStartIndex === -1) htmlStartIndex = content.indexOf('<div');
        
        let html = '';
        if (htmlStartIndex !== -1) {
            html = content.substring(htmlStartIndex);
            html = html.replace(/class=/g, 'className=');
            html = html.replace(/for=/g, 'htmlFor=');
            html = html.replace(/onclick=/gi, 'onClick=');
            html = html.replace(/onsubmit=/gi, 'onSubmit=');
            html = html.replace(/onchange=/gi, 'onChange=');
            html = html.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
            
            const voidElements = ['img', 'input', 'br', 'hr', 'link', 'meta', 'source'];
            voidElements.forEach(tag => {
            const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>`, 'gi');
            html = html.replace(regex, `<${tag}$1 />`);
            });

            html = html.replace(/<\?php[\s\S]*?\?>/g, '{/* PHP code removed */}');
            html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '{/* Script tags removed */}');
            html = html.replace(/<\?=[\s\S]*?\?>/g, '{/* PHP echo removed */}');
        } else {
            html = `<div>Could not parse HTML</div>`;
        }
        
        const tsxContent = `import React from 'react';\n\nexport default function Component() {\n  return (\n    <>\n${html}\n    </>\n  );\n}\n`;
        fs.writeFileSync(targetPath, tsxContent);
        console.log(`Created ${targetPath}`);
      } else {
        const targetPath = fullPath.replace(/\.php$/, '.js');
        const jsContent = `// Node.js backend route converted from PHP\nconst express = require('express');\nconst router = express.Router();\n\nrouter.all('/', (req, res) => {\n  res.json({ message: 'Converted from ${path.basename(fullPath)}' });\n});\n\nmodule.exports = router;\n`;
        fs.writeFileSync(targetPath, jsContent);
        console.log(`Created ${targetPath}`);
      }
    }
  }
}

processDirectory('d:/download');
