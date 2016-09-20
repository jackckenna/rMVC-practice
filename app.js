var express = require('express');
var app = express();
var ejs = require('ejs');
var routes = require('./config/routes');
var layouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');

app.use(layouts);

app.use(routes);




app.listen(3000 , function(){
  console.log('app is listening on port 3000');
});
