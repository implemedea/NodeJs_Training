
var express = require('Express');
var app = express();
var router = require('./router.js');
app.use('/assignment3',router);
app.listen(8081);