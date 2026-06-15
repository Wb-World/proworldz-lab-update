const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function fixFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (!fullPath.includes('node_modules')) {
                fixFiles(fullPath);
            }
        } else if (fullPath.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let original = content;

            // 1. Textarea missing >
            content = content.replace(/<textarea([^>]*?)defaultValue=""<\/textarea>/g, '<textarea$1defaultValue=""></textarea>');
            
            // 2. Extra > > in weak-logging
            content = content.replace(/className="([^"]+)"\s*>\s*>\s*\{\/\*\s*PHP echo removed\s*\*\/\}/g, 'className="$1"> {/* PHP echo removed */}');
            
            // 3. input value="{/* PHP echo removed */}</div />
            content = content.replace(/value="\{\/\* PHP echo removed \*\/\}\<\/div \/\>/g, 'value="{/* PHP echo removed */}" /></div>');
            content = content.replace(/value="\{\/\* PHP echo removed \*\/\}"\>\<\/div \/\>/g, 'value="{/* PHP echo removed */}" /></div>');

            // 4. Missing closing tags in header.tsx
            if (fullPath.includes('header.tsx')) {
                const openDivs = (content.match(/<div/g) || []).length;
                const closeDivs = (content.match(/<\/div>/g) || []).length;
                if (openDivs > closeDivs) {
                    content = content.replace(/\s*<\/>/, '\n' + '</div>'.repeat(openDivs - closeDivs) + '\n    </>');
                }
            }

            // 5. Unbalanced tags in footer.tsx
            if (fullPath.includes('footer.tsx')) {
                const openDivs = (content.match(/<div/g) || []).length;
                let closeDivs = (content.match(/<\/div>/g) || []).length;
                while (closeDivs > openDivs) {
                    content = content.replace(/<\/div>\s*$/, '');
                    closeDivs--;
                }
                // also remove any leading </div> that don't match
                content = content.replace(/^{\/\* DOCTYPE removed \*\/}<\/div><\/div>/, '{/* DOCTYPE removed */}');
            }

            // 6. <input ... ></div> without closing input -> <input ... /></div>
            content = content.replace(/<input([^>]*[^/])>\s*<\/div>/g, '<input$1/></div>');
            
            // 7. stray </div />
            content = content.replace(/<\/div \/>/g, '</div>');

            // 8. unclosed tags like <textarea ... > ... 
            // e.g. pythoni.tsx: <textarea id="code" placeholder="...">print(...)</textarea>
            // this is valid JSX, so it shouldn't cause a Vite transform error unless children is mixed with value.

            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log('Fixed', fullPath);
            }
        }
    }
}

fixFiles(path.join(__dirname, 'owasp_lab'));
fixFiles(path.join(__dirname, 'lab'));
fixFiles(path.join(__dirname, 'ss'));
