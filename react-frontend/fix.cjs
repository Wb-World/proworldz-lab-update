const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');
content = content.replace(/src="images\//g, 'src="/images/');
fs.writeFileSync('src/pages/Home.tsx', content);
