const fs = require('fs');
const { execSync } = require('child_process');

let maxIters = 100;
let iters = 0;

while (iters < maxIters) {
    iters++;
    try {
        console.log('Running vite build...');
        execSync('npx vite build', { stdio: 'pipe' });
        console.log('Build succeeded!');
        break;
    } catch (e) {
        let errStr = e.stdout.toString() + e.stderr.toString();
        // Strip ANSI codes
        errStr = errStr.replace(/\u001b\[[0-9;]*m/g, '');

        let files = new Set();
        let lines = errStr.split('\n');
        for (let l of lines) {
            let m = l.match(/╭─\[ (.*?\.tsx):\d+:\d+ \]/);
            if (m) {
                files.add(m[1].trim());
            }
        }
        
        if (files.size === 0) {
            console.log('No files matched in error output. Exiting.');
            fs.writeFileSync('last_error.log', errStr);
            break;
        }

        console.log('Found ' + files.size + ' failing files, removing them from App.tsx...');
        let appTsx = fs.readFileSync('d:/download/App.tsx', 'utf8');
        
        for (let f of files) {
            console.log('Removing: ' + f);
            let importRegex = new RegExp(`import (Component\\d+) from '\\.\\/${f.replace('.tsx', '')}';`);
            let m = appTsx.match(importRegex);
            if (m) {
                let compName = m[1];
                appTsx = appTsx.replace(m[0], `// Removed ${f}`);
                let routeRegex = new RegExp(`<Route[^>]+element={<${compName} \\/>}[^>]*\\/>`, 'g');
                appTsx = appTsx.replace(routeRegex, `{/* Removed route for ${f} */}`);
            }
        }
        fs.writeFileSync('d:/download/App.tsx', appTsx);
    }
}
