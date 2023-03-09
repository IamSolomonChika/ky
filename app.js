const express = require('express');
const expresslayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;

const app = express();

app.use(expresslayouts);
app.set('layout', 'layout/layout.ejs');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/js'));
app.use(express.static(__dirname + '/public/imgs'));

app.get('/', (req, res, next) => {
    res.render('index', {text: 'This is Home'})
});

app.get('/about', (req, res, next) => {
    res.render('about', {text: 'This is about'})
});

app.get('/services', (req, res, next) => {
    res.render('services', {text: 'This is services'})
});

app.get('/contact', (req, res, next) => {
    res.render('contact', {text: 'This is contact'})
});

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT)
});