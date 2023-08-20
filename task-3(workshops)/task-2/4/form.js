const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.argv[2] || 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/form', (req, res) => {
  res.send(`
    <form method="post" action="/form">
      <input type="text" name="str" />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/form', (req, res) => {
  const reversedStr = req.body.str.split('').reverse().join('');
  res.send(reversedStr);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
