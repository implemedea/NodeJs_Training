var express = require('express');  
var app = express();  
//set view engine  
app.set("view engine","pug")  

app.get('/', function (req, res) {  
//res.render('index1.pug', index1);  
 res.render('index1');  
});  
var server = app.listen(5000, function () {  
    console.log('Node server is running..');  
});  