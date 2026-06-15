const fs = require('fs');
const path = require('path');

function getTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fullPath.includes('node_modules') || fullPath.includes('backup_php') || fullPath.includes('react-frontend') || fullPath.includes('owasp_lab') || fullPath.includes('node-backend') || file.startsWith('.')) continue;
    
    if (fs.statSync(fullPath).isDirectory()) {
      getTsxFiles(fullPath, fileList);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('main.tsx') && !fullPath.includes('App.tsx')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const allTsx = getTsxFiles('d:/download');

let imports = "import { BrowserRouter, Routes, Route } from 'react-router-dom';\n";
let routes = "";

let counter = 1;
for (const file of allTsx) {
  const relativePath = file.replace('d:\\download\\', '').replace(/\\/g, '/');
  const importPath = './' + relativePath.replace('.tsx', '');
  
  // Basic route mapping e.g. _admin/index.tsx -> /_admin/index
  let routePath = '/' + relativePath.replace('.tsx', '');
  
  const compName = 'Component' + counter;
  imports += `import ${compName} from '${importPath}';\n`;
  routes += `        <Route path="${routePath}" element={<${compName} />} />\n`;
  
  // also add default route if it's index
  if (routePath.endsWith('/index')) {
    routes += `        <Route path="${routePath.replace('/index', '') || '/'}" element={<${compName} />} />\n`;
  }
  
  counter++;
}

const appTsx = `${imports}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
${routes}
      </Routes>
    </BrowserRouter>
  );
}
`;

fs.writeFileSync('d:/download/App.tsx', appTsx);
fs.writeFileSync('d:/download/main.tsx', `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
`);

console.log('App.tsx and main.tsx successfully generated!');
