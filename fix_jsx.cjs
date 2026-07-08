const fs = require('fs');
const path = require('path');

function camelizeStyleName(string) {
  return string.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
}

function convertStyleStringToObject(styleStr) {
  const styles = styleStr.split(';').filter(s => s.trim() !== '');
  let styleObjStr = '';
  styles.forEach((style, index) => {
    let [key, ...valueParts] = style.split(':');
    if (!key || valueParts.length === 0) return;
    key = camelizeStyleName(key.trim());
    let val = valueParts.join(':').trim();
    val = val.replace(/'/g, "\\'"); // escape single quotes
    styleObjStr += `${key}: '${val}'${index < styles.length - 1 ? ', ' : ''}`;
  });
  return `{{ ${styleObjStr} }}`;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    
    if (fullPath.includes('node_modules') || fullPath.includes('react-frontend') || fullPath.includes('node-backend')) continue;
    
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') && !fullPath.includes('main.tsx') && !fullPath.includes('App.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // 1. Remove DOCTYPE and HTML wrappers
      content = content.replace(/<!DOCTYPE\s+html[^>]*>/gi, '{/* DOCTYPE removed */}');
      content = content.replace(/<html[^>]*>/gi, '<div className="html-wrapper">');
      content = content.replace(/<\/html>/gi, '</div>');
      content = content.replace(/<head[^>]*>/gi, '<div className="head-wrapper">');
      content = content.replace(/<\/head>/gi, '</div>');
      content = content.replace(/<body[^>]*>/gi, '<div className="body-wrapper">');
      content = content.replace(/<\/body>/gi, '</div>');
      
      // 2. Fix inline styles using regex
      content = content.replace(/style="([^"]*)"/g, (match, p1) => {
        return `style=${convertStyleStringToObject(p1)}`;
      });
      content = content.replace(/style='([^']*)'/g, (match, p1) => {
        return `style=${convertStyleStringToObject(p1)}`;
      });

      // 2b. Fix <style> blocks
      content = content.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi, (match, p1) => {
        // Escape backticks and ${} inside the CSS so it doesn't break the template literal
        const safeCss = p1.replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
        return `<style dangerouslySetInnerHTML={{ __html: \`${safeCss}\` }} />`;
      });
      
      // 3. Fix common JSX attribute case issues
      content = content.replace(/\btabindex=/gi, 'tabIndex=');
      content = content.replace(/\bautocomplete=/gi, 'autoComplete=');
      content = content.replace(/\bmaxlength=/gi, 'maxLength=');
      content = content.replace(/\bminlength=/gi, 'minLength=');
      content = content.replace(/\bautofocus=/gi, 'autoFocus=');
      content = content.replace(/\breadonly=/gi, 'readOnly=');
      content = content.replace(/\bcolspan=/gi, 'colSpan=');
      content = content.replace(/\browspan=/gi, 'rowSpan=');
      content = content.replace(/\bdatetime=/gi, 'dateTime=');
      content = content.replace(/\bclass=/g, 'className=');
      
      // 4. Fix SVG attributes
      content = content.replace(/\bfill-rule=/gi, 'fillRule=');
      content = content.replace(/\bclip-rule=/gi, 'clipRule=');
      content = content.replace(/\bstroke-width=/gi, 'strokeWidth=');
      content = content.replace(/\bstroke-linecap=/gi, 'strokeLinecap=');
      content = content.replace(/\bstroke-linejoin=/gi, 'strokeLinejoin=');

      // 5. Fix .php redirections in hrefs
      content = content.replace(/href="([^"]+)\.php"/gi, 'href="$1"');
      content = content.replace(/href='([^']+)\.php'/gi, "href='$1'");
      
      // 6. Fix JS window.location redirects
      content = content.replace(/window\.location\.href\s*=\s*["']([^"']+)\.php["']/gi, "window.location.href='$1'");
      content = content.replace(/window\.location\.replace\(["']([^"']+)\.php["']\)/gi, "window.location.replace('$1')");
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

console.log('Running JSX Fixer...');
processDirectory('d:/download');
console.log('Finished JSX Fixer!');
