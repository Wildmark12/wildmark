import fs from 'fs';
let content = fs.readFileSync('constants.tsx', 'utf8');
// Remove portfolioImages array block
content = content.replace(/\s*portfolioImages:\s*\[[\s\S]*?\],/g, '');
// Remove logoVariants array block
content = content.replace(/\s*logoVariants:\s*\[[\s\S]*?\],?/g, '');
fs.writeFileSync('constants.tsx', content);
console.log('Cleaned up constants.tsx');
