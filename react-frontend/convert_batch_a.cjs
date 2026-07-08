const fs = require('fs');
const path = require('path');

const filesToConvert = ['about-home.php', 'contact-home.php', 'ourcourse.php'];
const srcDir = 'd:/download/backup_php';
const outDir = 'd:/download/react-frontend/src/pages';
const appTsxPath = 'd:/download/react-frontend/src/App.tsx';

let routesConfig = [];
let importsConfig = [];

function toPascalCase(str) {
    return str.replace(/\.php$/, '')
              .split(/[-_]/)
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join('');
}

filesToConvert.forEach(file => {
    const compName = toPascalCase(file);
    const content = fs.readFileSync(path.join(srcDir, file), 'utf-8');

    // Extract styles
    const styleMatch = content.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
    if (styleMatch) {
        fs.writeFileSync(path.join(outDir, `${compName}.css`), styleMatch[1]);
    }

    // Extract body
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = bodyMatch ? bodyMatch[1] : content;

    // Strip out navbar and footer from the body content since we use components now
    bodyContent = bodyContent.replace(/<nav[^>]*>[\s\S]*?<\/nav>/i, '<Navbar />');
    bodyContent = bodyContent.replace(/<footer[^>]*>[\s\S]*?<\/footer>/i, '<Footer />');

    // Strip PHP and scripts
    bodyContent = bodyContent.replace(/<\?php[\s\S]*?\?>/gi, '');
    bodyContent = bodyContent.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

    // JSX replacements
    bodyContent = bodyContent.replace(/class=/g, 'className=');
    bodyContent = bodyContent.replace(/for=/g, 'htmlFor=');
    bodyContent = bodyContent.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    bodyContent = bodyContent.replace(/<img([^>]*[^\/])>/g, '<img$1 />');
    bodyContent = bodyContent.replace(/<input([^>]*[^\/])>/g, '<input$1 />');
    bodyContent = bodyContent.replace(/<textarea([^>]*[^\/])>/g, '<textarea$1 />'); // Fix textarea
    bodyContent = bodyContent.replace(/<br\s*>/gi, '<br />');
    bodyContent = bodyContent.replace(/<hr\s*>/gi, '<hr />');
    bodyContent = bodyContent.replace(/src="images\//g, 'src="/images/');

    // Fix style objects roughly
    bodyContent = bodyContent.replace(/style="([^"]*)"/g, (match, p1) => {
        const styles = p1.split(';').filter(s => s.trim().length > 0).map(s => {
            let [k, ...v] = s.split(':');
            if(!k || v.length === 0) return '';
            const camelK = k.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            return `${camelK}: '${v.join(':').trim().replace(/'/g, "\\'")}'`;
        }).join(', ');
        return `style={{${styles}}}`;
    });

    const hasCss = !!styleMatch;
    
    const tsxContent = `import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
${hasCss ? `import './${compName}.css';` : ''}

export default function ${compName}() {
    return (
        <div className="${compName.toLowerCase()}-wrapper">
            ${bodyContent}
        </div>
    );
}
`;

    fs.writeFileSync(path.join(outDir, `${compName}.tsx`), tsxContent);
    console.log(`Generated ${compName}.tsx`);

    const routePath = file === 'ourcourse.php' ? '/courses' : `/${file.replace('-home.php', '')}`;
    routesConfig.push(`<Route path="${routePath}" element={<${compName} />} />`);
    importsConfig.push(`import ${compName} from './pages/${compName}';`);
});

// Update App.tsx
let appContent = fs.readFileSync(appTsxPath, 'utf-8');
const importInjection = importsConfig.join('\n');
const routeInjection = routesConfig.join('\n        ');

appContent = appContent.replace('// Mock components for pages', `// Mock components for pages\n${importInjection}`);
appContent = appContent.replace('{/* other routes can be added here */}', `{/* auto routes */}\n        ${routeInjection}\n        {/* other routes can be added here */}`);

fs.writeFileSync(appTsxPath, appContent);
console.log("Updated App.tsx with Batch A routes.");
