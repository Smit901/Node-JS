const express = require("express");
const path = require("path")

const app = express();
const port = process.argv[2] || 3000;
const template = process.argv[3] || './';


app.set("view engine","pug");
app.set("views", path.join(__dirname, template));

app.get("/home", (req, res) => {
  res.render("index", { date: new Date().toDateString() });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
