// Create web server
// Create a new web server using the express module
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Add middleware to parse JSON data
app.use(bodyParser.json());

// Add middleware to handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Create an array to store comments
const comments = [
  { id: 1, author: 'Adam', text: 'I love cats!' },
  { id: 2, author: 'Jane', text: 'I love dogs!' },
  { id: 3, author: 'John', text: 'I love birds!' }
];

// Create a route to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route to get a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found.');
  } else {
    res.json(comment);
  }
});

// Create a route to add a new comment
app.post('/comments', (req, res) => {
  const comment = {
    id: comments.length + 1
  };
});