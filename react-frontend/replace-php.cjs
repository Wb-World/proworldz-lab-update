const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const replacements = [
    { from: /href="index\.php"/g, to: 'href="/"' },
    { from: /href="login\.php"/g, to: 'href="/login"' },
    { from: /href="logout\.php"/g, to: 'href="/login"' },
    { from: /href="dashboard\.php"/g, to: 'href="/dashboard"' },
    { from: /href="contact-home\.php"/g, to: 'href="/contact"' },
    { from: /href="contactus\.php"/g, to: 'href="/contact"' },
    { from: /href="about\.php"/g, to: 'href="/about"' },
    { from: /href="lab\.php"/g, to: 'href="/lab"' },
    { from: /href="tasks\.php"/g, to: 'href="/tasks"' },
    { from: /href="ourcourse\.php"/g, to: 'href="/courses"' },
    { from: /href="course_video\.php"/g, to: 'href="/course_video"' },
    { from: /href="assignment\.php"/g, to: 'href="/assignment"' },
    { from: /href="download\.php"/g, to: 'href="/download"' },
    { from: /href="leaderboard\.php"/g, to: 'href="/leaderboard"' },
    { from: /href="teams\.php"/g, to: 'href="/teams"' },
    { from: /href="tournament\.php"/g, to: 'href="/tournament"' },
    { from: /href="settings\.php"/g, to: 'href="/settings"' },
    { from: /href="setting\.php"/g, to: 'href="/setting"' },
    { from: /href="eaglone_shop\.php"/g, to: 'href="#"' },
    { from: /href="maintanance\.php"/g, to: 'href="#"' },
    { from: /href="\.\.\/_admin\/index\.php"/g, to: 'href="/admin"' },
    { from: /href="_admin\/index\.php"/g, to: 'href="/admin"' },
    { from: /href="\.\.\/_admin"/g, to: 'href="/admin"' },
    
    // Fix invalid onclick attributes
    { from: /onclick="location\.href='lab\/langs\.php'"/g, to: 'onClick={() => window.location.href=\'/lab/langs\'}' },
    { from: /onclick="location\.href='lab\/lin_term\.php'"/g, to: 'onClick={() => window.location.href=\'/lab/lin_term\'}' },
    
    { from: /onclick="selectLang\('lab\/codings\/pythoni\.php'\)"/g, to: 'onClick={() => selectLang(\'/lab/codings/pythoni\')}' },
    { from: /onclick="selectLang\('lab\/codings\/js\.php'\)"/g, to: 'onClick={() => selectLang(\'/lab/codings/js\')}' },
    { from: /onclick="selectLang\('lab\/codings\/cpp\.php'\)"/g, to: 'onClick={() => selectLang(\'/lab/codings/cpp\')}' },
    { from: /onclick="selectLang\('lab\/codings\/php\.php'\)"/g, to: 'onClick={() => selectLang(\'/lab/codings/php\')}' }
];

let changedFiles = 0;

walkDir(path.join(__dirname, 'src'), function(filePath) {
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        
        replacements.forEach(rep => {
            content = content.replace(rep.from, rep.to);
        });
        
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content);
            console.log('Updated: ' + filePath);
            changedFiles++;
        }
    }
});

console.log('Finished updating ' + changedFiles + ' files.');
