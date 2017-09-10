var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express Example' });
});

router.get('/about', (req, res) => {
  // res.send('test this works');
});

module.exports = router;
