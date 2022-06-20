var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amanda",
    added: new Date()
  },
  {
    text: "Wazzup?",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', {title: 'New Message'});
})

router.post('/new', (req, res, next) => {
  const messageText = req.body.message;
  const messageAuthor = req.body.author;
  messages.push({text: messageText, user: messageAuthor, added: new Date()});
  res.redirect('/')
})

module.exports = router;
