const fs = require('fs');

const phpFile = 'd:/download/_admin/index.php';
const tsxFile = 'd:/download/_admin/index.tsx';

try {
  const content = fs.readFileSync(phpFile, 'utf8');
  
  // Find the start of the HTML
  const htmlStartIndex = content.indexOf('<!DOCTYPE html>');
  if (htmlStartIndex === -1) {
    console.error('No HTML found in file.');
    process.exit(1);
  }
  
  let html = content.substring(htmlStartIndex);
  
  // Basic HTML to JSX conversions
  html = html.replace(/class=/g, 'className=');
  html = html.replace(/for=/g, 'htmlFor=');
  html = html.replace(/onclick=/gi, 'onClick=');
  html = html.replace(/onsubmit=/gi, 'onSubmit=');
  html = html.replace(/onchange=/gi, 'onChange=');
  html = html.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  // Self closing tags
  const voidElements = ['img', 'input', 'br', 'hr', 'link', 'meta'];
  voidElements.forEach(tag => {
    const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>`, 'gi');
    html = html.replace(regex, `<${tag}$1 />`);
  });

  // Strip script tags with inline logic or change them
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '{/* Script tags removed for React conversion */}');
  
  // Create React component wrapper
  const tsxContent = `import React, { useState, useEffect } from 'react';

export default function AdminDashboard() {
  // State variables and handlers will go here
  
  return (
    <>
${html}
    </>
  );
}
`;

  fs.writeFileSync(tsxFile, tsxContent);
  console.log('Successfully created _admin/index.tsx');

} catch (err) {
  console.error('Error during conversion:', err);
}
