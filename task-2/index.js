const fs = require("fs");

const data = fs.readFileSync("Train_details.csv","utf8");

console.log(data.split("."));