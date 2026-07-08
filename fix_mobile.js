const fs = require('fs');
const files = ['backup_php/index.tsx', 'backup_php/contact-home.tsx', 'backup_php/about-home.tsx'];
files.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf-8');
        if (!content.includes('const [isMobileMenuOpen')) {
            content = content.replace(/import React from 'react';/, "import React, { useState } from 'react';");
            content = content.replace(/export default function Component\(\) \{/, "export default function Component() {\n  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n");
            content = content.replace(/className="menu-toggle" id="menuToggle"/, 'className={"menu-toggle" + (isMobileMenuOpen ? " active" : "")} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}');
            content = content.replace(/className="nav-links"/, 'className={"nav-links" + (isMobileMenuOpen ? " active" : "")}');
            fs.writeFileSync(file, content);
        }
    }
});
console.log('Fixed mobile menu!');
