const fs = require('fs');
const contents = fs.readFileSync('polymer.html', 'utf8');
const sourceMappingUrlExpr = /\n\/\/# sourceMappingURL=(.*)/g;
fs.writeFileSync('polymer.es5.html', contents.replace(sourceMappingUrlExpr, ''), 'utf8');
