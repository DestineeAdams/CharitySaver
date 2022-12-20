const express = require('express')
const path = require('path')
// const hbs = require('hbs')
const app = express()

// View Engine Setup
app.set('views', path.join(__dirname));
app.set('view engine', 'hbs');

app.get('/', function(req, res){
    res.render('./views/home.hbs');
})

app.listen(3000);