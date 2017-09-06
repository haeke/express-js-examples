const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('This works!');
});

app.listen(3000, function() {
  console.log('this example is listening on port 3000');
});
