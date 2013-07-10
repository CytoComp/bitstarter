
//variables from the node.js sample
var express = require('express');

var app = express.createServer(express.logger());

//read "index.html" from disk and use that data in place of "Hello World 2!
var fs = require('fs');

var filecatch = fs.readFileSync('index.html','utf-8');

app.get('/', function(request, response) {
//replace "Hello World 2" with the index.html file
 // response.send('Hello World2!');
response.send(filecatch)
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
