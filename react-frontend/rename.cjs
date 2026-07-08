const fs = require('fs');
const path = require('path');

const tsxFile = path.join(__dirname, 'src/pages/AboutHome.tsx');
const cssFile = path.join(__dirname, 'src/pages/AboutHome.css');

let tsx = fs.readFileSync(tsxFile, 'utf8');
let css = fs.readFileSync(cssFile, 'utf8');

// Order matters: replace longer strings first!
const replacements = [
    { from: /\.section-description\b/g, to: '.about-section-description' },
    { from: /\"section-description(.*?)\"/g, to: '"about-section-description$1"' },
    
    { from: /\.section-title\b/g, to: '.about-section-title' },
    { from: /\"section-title(.*?)\"/g, to: '"about-section-title$1"' },
    
    { from: /\.section-badge\b/g, to: '.about-section-badge' },
    { from: /\"section-badge(.*?)\"/g, to: '"about-section-badge$1"' },
    
    { from: /\.section-header\b/g, to: '.about-section-header' },
    { from: /\"section-header(.*?)\"/g, to: '"about-section-header$1"' },
    
    { from: /\.section\b/g, to: '.about-section' },
    { from: /\"section(.*?)\"/g, to: '"about-section$1"' },
    
    { from: /\.hero-badge\b/g, to: '.about-hero-badge' },
    { from: /\"hero-badge(.*?)\"/g, to: '"about-hero-badge$1"' },
    
    { from: /\.hero-content\b/g, to: '.about-hero-content' },
    { from: /\"hero-content(.*?)\"/g, to: '"about-hero-content$1"' },
    
    { from: /\.hero\b/g, to: '.about-hero' },
    { from: /\"hero(.*?)\"/g, to: '"about-hero$1"' },
];

replacements.forEach(({from, to}) => {
    tsx = tsx.replace(from, to);
    css = css.replace(from, to);
});

fs.writeFileSync(tsxFile, tsx);
fs.writeFileSync(cssFile, css);
console.log('Renamed classes safely');
