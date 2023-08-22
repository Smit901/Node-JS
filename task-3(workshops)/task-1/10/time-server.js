const net = require('net');

const server = net.createServer(function(socket) {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  socket.write(formattedDate + '\n');
  socket.end();
});

function formatDate(date) {
  const year = date.getFullYear();
  const month = zeroFill(date.getMonth() + 1);
  const day = zeroFill(date.getDate());
  const hours = zeroFill(date.getHours());
  const minutes = zeroFill(date.getMinutes());

  return `${year}-${month}-${day} ${hours}:${minutes}`;
}

function zeroFill(number) {
  return number < 10 ? '0' + number : number;
}

const port = process.argv[2] || 8080;
server.listen(port);
console.log(`Time server listening on port ${port}`);
