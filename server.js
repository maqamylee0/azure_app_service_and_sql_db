var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.sendFile('src/index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
//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