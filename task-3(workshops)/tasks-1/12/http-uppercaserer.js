const http = require("http");
const map = require('through2-map')

const server = http.createServer(function (req, res) {
  if (req.method !== "POST") {
    return res.end("Invalid method!");
  }

  req.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase()
  })).pipe(res)
});

const port = process.argv[2] || 8080;
server.listen(port, function () {
  console.log(`HTTP server listening on port ${port}`);
});
