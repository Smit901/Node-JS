const fs = require("fs");
const path = require("path");

let folder = process.argv[2];
let file_ext = "." + process.argv[3];

fs.readdir(folder, (err, files) => {
  // console.log('\n',"|***** All Files *****|");
  // console.log(files,'\n');

  // console.log("|***** Sort by file extension  *****|");
  files.forEach(function(file){
    if (path.extname(file) === file_ext) {
      console.log(file);
    }
  });
});
