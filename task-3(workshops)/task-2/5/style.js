const express = require('express');
const stylus = require('stylus');
const path = require('path');

const app = express();
const port = process.argv[2] || 3000;
const pathfile = process.argv[3] || "./template"

app.use(stylus.middleware(pathfile));

// app.use(express.static(path.join(__dirname, pathfile)));
app.use(express.static(pathfile));

// app.get('/', (req, res) => {
//   res.sendFile('index.html');
// });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
