const express = require('express');
const router = express.Router();

// Sample messages
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
    // Render index view and pass messages array

    res.render('index', { title: 'Message Board', messages: messages });
});

/* GET new message form. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});

module.exports = router;
