const fs = require('fs');

function fixHtml(file) {
    let content = fs.readFileSync(file, 'utf8');
    const startIdx = content.indexOf('<body>');
    const endIdx = content.lastIndexOf('</body>');
    if (startIdx !== -1 && endIdx !== -1) {
        const bodyContent = content.substring(startIdx + 6, endIdx);
        
        // reconstruct
        const parts = content.split('<!DOCTYPE html>');
        let preamble = parts[0]; // imports etc
        
        const finalContent = preamble + bodyContent + '\n        </div>\n    );\n}\n';
        fs.writeFileSync(file, finalContent);
        console.log("Fixed " + file);
    }
}

fixHtml('d:/download/react-frontend/src/pages/Teams.tsx');
fixHtml('d:/download/react-frontend/src/pages/Leaderboard.tsx');
