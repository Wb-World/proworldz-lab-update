const fs = require('fs');

// Fix eaglone_shop
let f = fs.readFileSync('d:/download/backup_php/eaglone_shop.tsx', 'utf8');
f = f.replace(/className="coin-pill"/g, 'className="coin-pill">');
// Revert double angle brackets if any were created
f = f.replace(/className="coin-pill">>/g, 'className="coin-pill">');
fs.writeFileSync('d:/download/backup_php/eaglone_shop.tsx', f);

// Remove PHP blocks from coursev.tsx
let f2 = fs.readFileSync('d:/download/backup_php/coursev.tsx', 'utf8');
// Many files have trailing exit();} from PHP sessions
f2 = f2.replace(/\{\/\* DOCTYPE removed \*\/\}.*?exit\(\);\s*\}\s*\}\s*\?>/s, '');
fs.writeFileSync('d:/download/backup_php/coursev.tsx', f2);

// header.tsx
let f3 = fs.readFileSync('d:/download/backup_php/header.tsx', 'utf8');
f3 = f3.replace(/\{\/\* DOCTYPE removed \*\/\}.*?exit\(\);\s*\}/s, '');
fs.writeFileSync('d:/download/backup_php/header.tsx', f3);

// Fix download.tsx unclosed tags
let dfile = fs.readFileSync('d:/download/backup_php/download.tsx', 'utf8');
// Usually it's just missing </main> or extra </div>
dfile = dfile.replace(/<\/div>\s*<\/>/g, '</div>\n  </main>\n  </>\n');
fs.writeFileSync('d:/download/backup_php/download.tsx', dfile);

// Run a general cleanup on ALL backup_php files to remove top PHP artifacts
const path = require('path');
const dir = 'd:/download/backup_php';
fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.tsx')) {
        let content = fs.readFileSync(path.join(dir, file), 'utf8');
        let orig = content;
        
        // Remove trailing `}` or `?>` or PHP authentication block artifacts at the top of the file
        // Look for: {/* DOCTYPE removed */} ... exit(); } ... ?>
        content = content.replace(/\{\/\* DOCTYPE removed \*\/\}\s*(?:<[^>]+>\s*)*.*?exit\(\);[\s\}]*\?>/s, '{/* PHP Logic removed */}');
        content = content.replace(/\{\/\* DOCTYPE removed \*\/\}\s*<div className="html-wrapper">.*?exit\(\);[\s\}]*\?>/s, '{/* PHP Logic removed */}');

        // Also fix the very common:
        // }
        // if (!isset($_SESSION['id'])) ...
        content = content.replace(/\}\s*if\s*\(\!isset\(\$_SESSION\['id'\]\)\)\s*\{[\s\S]*?\?>/s, '{/* Auth Logic removed */}');

        // Also fix `</div>\n</>` which should often be `</div>\n</main>\n</>`
        // Actually, let's just let it be for now and see what Vite says.
        
        if (orig !== content) {
            fs.writeFileSync(path.join(dir, file), content);
            console.log('Cleaned PHP blocks from ' + file);
        }
    }
});
