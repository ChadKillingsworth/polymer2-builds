const fs = require('fs');
const contents = fs.readFileSync('polymer.es5.html', 'utf8');
const polymerSrc = /src="polymer.js"/g;
fs.writeFileSync('polymer.es5.html', contents.replace(polymerSrc, 'src="polymer.es5.js"'), 'utf8');
