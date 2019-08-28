const express = require('express');
const config = require('./config');

const app = express();

app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

app.get('/', (req, res) => res.render('pages/index', {
  phoneNumber: config.phonePrimary,
  page: '',
  customCss: 'index.css',
  jumboWidth: '7'
}));

app.get('/option2', (req, res) => res.render('pages/index', {
  phoneNumber: config.phonePrimary,
  page: '',
  customCss: 'index2.css'
}));

app.get('/option3', (req, res) => res.render('pages/index', {
  phoneNumber: config.phonePrimary,
  page: '',
  customCss: 'index3.css',
  header: 'header-transparent'
}));

app.get('/contact', (req, res) => res.render('pages/contact', {
  phoneNumber: config.phonePrimary,
  page: 'Contact'
}));

app.get('/privacy', (req, res) => res.render('pages/privacy', {
  phoneNumber: config.phonePrimary,
  page: 'Privacy',
  domain: config.domain
}));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listening on port ${port}.`));