const express = require('express');
const app = express();
// const bootstrap = require('bootstrap') 

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/shop', (req, res) => {
    res.render('shop.ejs');
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

app.get('/workshops', (req, res) => {
   res.render('workshops.ejs'); 
});


app.listen(3000);