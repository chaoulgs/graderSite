//Dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');

var app = express();

//Routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/download'));

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//view engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

//Start server
app.listen(80);
console.log('Site is running on port 80');