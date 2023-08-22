const fs = require('fs')

const file = fs.readFileSync(process.argv[2],'utf-8');

const lines = file.split('\n').length;

console.log(lines);

