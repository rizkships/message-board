// routes/index.js

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
    res.render('index', { title: 'Message Board', messages: messages });
});

/* GET new message form. */
router.get('/new', function(req, res, next) {
    res.render('form', { title: 'New Message' });
});

/* POST new message. */
router.post('/new', function(req, res, next) {
    // Extract data from the form submission
    const { author, message } = req.body;

    // Create a new message object
    const newMessage = {
        text: message,
        user: author,
        added: new Date()
    };

    // Add the new message to the messages array
    messages.push(newMessage);

    // Redirect to the home page
    res.redirect('/');
});

module.exports = router;
