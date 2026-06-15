const fs = require('fs');
const path = require('path');

function fix(fullPath, regex, replacement) {
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        content = content.replace(regex, replacement);
        fs.writeFileSync(fullPath, content);
    }
}

// 1. db.tsx
fix('d:/download/owasp_lab/db.tsx', /<div style=[\s\S]*?<\/div>"\);/g, "<div>DB Connection</div>");

// 2. crash-exploit
fix('d:/download/owasp_lab/exception-failures/advanced/crash-exploit/index.tsx', 
    /<form method="GET">([\s\S]*?)<\/div>/g, 
    '<form method="GET">$1</form></div>');
fix('d:/download/owasp_lab/exception-failures/advanced/crash-exploit/index.tsx', 
    /value="\{\/\* PHP echo removed \*\/\}" \/>/g, 
    'value="{/* PHP echo removed */}" />'); // clean up previous bad fix if needed

// 3. missing-logs
fix('d:/download/owasp_lab/logging-failures/beginner/missing-logs/index.tsx', 
    /className="mb-1 small">>/g, 
    'className="mb-1 small">');

// 4. weak-logging
fix('d:/download/owasp_lab/logging-failures/beginner/weak-logging/index.tsx', 
    /mt-2">>/g, 
    'mt-2">');

// 5. chained-injection-api
fix('d:/download/owasp_lab/injection/advanced/chained-injection-api/index.tsx', 
    /value="\{\/\* PHP echo removed \*\/\}<\/span \/>/g, 
    'value="{/* PHP echo removed */}" /></span>');

// 6. log-injection-chain
fix('d:/download/owasp_lab/logging-failures/advanced/log-injection-chain/index.tsx', 
    /<input([^>]*?)>/g, 
    (match, p1) => `<input${p1} />`);
// The previous regex might replace <input ... />> -> we should make it non-greedy and avoid replacing already closed
fix('d:/download/owasp_lab/logging-failures/advanced/log-injection-chain/index.tsx', 
    /<input([^>]*?)(?<!\/)>/g, 
    '<input$1 />');
