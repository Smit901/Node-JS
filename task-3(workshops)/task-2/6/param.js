const express = require('express')

const app = express();
const port = process.argv[2] || 3000;

app.put('/message/:id', function(req, res){
  const id = req.params.id
  const str = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(str)
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
