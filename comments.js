// Create web server and listen on port 3000
// Run node comments.js to start the server
// Use Postman to test the API

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var comments = [
  {id: 1, author: 'John Doe', text: 'This is a comment'},
  {id: 2, author: 'Jane Doe', text: 'This is *another* comment'}
];

app.get('/comments', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

app.post('/comments', function(req, res) {
  var newComment = req.body;
  newComment.id = comments.length + 1;
  comments.push(newComment);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(newComment));
});

app.listen(3000);
console.log('Server started: http://localhost:3000/');

