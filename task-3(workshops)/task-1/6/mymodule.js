const path = require("path");
const fs = require("fs");

module.exports = function(folder,extension, callback){
    fs.readdir(folder,(err, files)=> {

        if(err){
            return callback(err)
        }
        files = files.filter((file)=> path.extname(file) === "."+extension)
        callback(null, files)
    })
}