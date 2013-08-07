var express = require('express');
var app = express();

app.get('/hello', function(req, res){
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

var port = process.argv[2];
app.listen(port);
console.log('Listening on port ' + port);
