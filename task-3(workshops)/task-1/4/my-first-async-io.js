const fs = require('fs')

let lines;

fs.readFile(process.argv[2],'utf-8',(err,data)=>{
     lines = data.toString().split('\n').length-1;
     console.log(lines)
});



