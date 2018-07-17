var express = require('Express');
var app = express();

var main = require('./route.js');

//both index.js and things.js should be in same directory
app.use('/main', main);

app.listen(3000);