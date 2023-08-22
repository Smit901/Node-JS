const getExt = require("./mymodule");
const folder = process.argv[2];
const ext = process.argv[3];

getExt(folder, ext, function (err, list) {
  list.forEach((file) => console.log(file));
});
