const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('', (err, database) => {
  // server information
  if (err) return console.log(err);
  db = database;
  app.listen(3003, () => {
    console.log('listening on port 3003');
  });
});

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/form', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err);

    //res.json(result);
    res.render('form', { quotes: result });
  });
});

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err);

    console.log('saved to the DB');
    res.redirect('/');
  });
});
