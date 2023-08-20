const express = require('express');

const app = express();
const port = process.argv[2] || 3000;

app.get('/home', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
