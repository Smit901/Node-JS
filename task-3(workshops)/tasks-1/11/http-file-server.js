const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  const filePath = process.argv[3];


  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

const port = process.argv[2] || 8080; 
server.listen(port, function () {
  console.log(`HTTP server listening on port ${port}`);
});
