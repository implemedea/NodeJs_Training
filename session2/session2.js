var express = require('express');
var app = express();
var fs = require('fs');

console.log(__dirname);

app.get('/listusers', function(req,res){
    fs.readFile(__dirname+'sample.json')

})