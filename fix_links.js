const fs = require('fs');
const files = ['backup_php/index.tsx', 'backup_php/contact-home.tsx', 'backup_php/about-home.tsx', 'backup_php/ourcourse.tsx'];
files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        content = content.replace(/href="index"/g, 'href="/"');
        content = content.replace(/href="about-home"/g, 'href="/about-home"');
        content = content.replace(/href="contact-home"/g, 'href="/contact-home"');
        content = content.replace(/href="login"/g, 'href="/login"');
        content = content.replace(/href="ourcourse"/g, 'href="/ourcourse"');
        fs.writeFileSync(file, content);
    }
});
console.log('Fixed links!');
