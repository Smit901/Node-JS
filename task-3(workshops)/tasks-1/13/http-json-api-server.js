const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
  const parsedUrl = url.parse(req.url, true);
  const pathName = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathName === '/api/parsetime' && query.iso) {
    const isoDate = new Date(query.iso);
    const responseData = {
      hour: isoDate.getHours(),
      minute: isoDate.getMinutes(),
      second: isoDate.getSeconds()
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));
  } else if (pathName === '/api/unixtime' && query.iso) {
    const unixTime = new Date(query.iso).getTime();
    const responseData = { unixtime: unixTime };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(responseData));
  } else {
    res.writeHead(404);
    res.end();
  }
});

const port = process.argv[2] || 8080;
server.listen(port, function () {
  console.log(`HTTP JSON API server listening on port ${port}`);
});
