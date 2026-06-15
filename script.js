const fs = require('fs');
const path = require('path');
const srcDir = 'd:/download/react-frontend/src';
function extractImagePaths(dir, paths = new Set()) {
  for (const f of fs.readdirSync(dir)) {
    const fp = path.join(dir, f);
    if (fs.statSync(fp).isDirectory()) extractImagePaths(fp, paths);
    else if (['.ts', '.tsx', '.css', '.js', '.jsx'].some(e => f.endsWith(e))) {
      const content = fs.readFileSync(fp, 'utf8');
      const matches = content.match(/[\"\'\`]([^\`\"\'\>]+?\.(?:png|jpe?g|svg|webp|gif))[\"\'\`]/gi);
      if (matches) {
        for (const m of matches) {
          paths.add(m.replace(/[\"\'\`]/g, ''));
        }
      }
    }
  }
  return paths;
}
const paths = extractImagePaths(srcDir);
const html = fs.readFileSync('d:/download/react-frontend/index.html', 'utf8');
const htmlMatches = html.match(/[\"\'\`]([^\`\"\'\>]+?\.(?:png|jpe?g|svg|webp|gif))[\"\'\`]/gi);
if (htmlMatches) {
  for (const m of htmlMatches) {
    paths.add(m.replace(/[\"\'\`]/g, ''));
  }
}
console.log(Array.from(paths));
