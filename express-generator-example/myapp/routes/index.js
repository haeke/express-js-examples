var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express Example' });
});

router.get('/about', (req, res) => {
  // res.send('test this works');
  res.render('about', { title: 'About' });
});

router.get('/form', (req, res) => {
  const companies = {
    name: 'Google',
    age: 10,
    software: {
        name: 'Google Search Engine',
    },
  };
  //res.json(companies);
  res.render('form', { title: 'Form', companies: companies });
});

module.exports = router;
