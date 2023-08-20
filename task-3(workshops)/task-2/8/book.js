const express = require("express");
const fs = require("fs");

const app = express();
const port = process.argv[2] || 3000;

app.get("/books", function (req, res) {
  const filename = process.argv[3];
  fs.readFile(filename, function (e, data) {
    if (e) return res.sendStatus(500);
    books = JSON.parse(data);
    res.json(books);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
