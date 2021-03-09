const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/components', function (req, res) {
  res.render('food_blog');
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(5000);
