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
            if (file.endsWith('.tsx') && !file.endsWith('App.tsx') && !file.endsWith('main.tsx')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('d:/download').map(f => f.replace(/\\/g, '/'));
let imports = [];
let routes = [];
let compIndex = 1;

files.forEach(file => {
    let relative = file.replace('d:/download/', '');
    let routePath = relative.replace('.tsx', '');
    
    // For backup_php files, they should map to the root level
    if (relative.startsWith('backup_php/')) {
        routePath = relative.replace('backup_php/', '').replace('.tsx', '');
    }
    
    // Ensure all route paths correctly start without a slash to build it easily
    if (routePath === 'index') {
        routePath = ''; // will become /
    } else if (routePath.endsWith('/index')) {
        routes.push(`        <Route path="/${routePath.replace('/index', '')}" element={<Component${compIndex} />} />`);
    }
    
    let importPath = './' + relative.replace('.tsx', '');
    imports.push(`import Component${compIndex} from '${importPath}';`);
    routes.push(`        <Route path="/${routePath}" element={<Component${compIndex} />} />`);
    compIndex++;
});

const appTsx = `import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
${imports.join('\n')}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
${routes.join('\n')}
      </Routes>
    </BrowserRouter>
  );
}
`;

fs.writeFileSync('d:/download/App.tsx', appTsx);
console.log('App.tsx rebuilt with ' + files.length + ' routes.');
