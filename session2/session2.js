var express = require('express');
var app = express();
var fs = require('fs');

console.log(__dirname);

app.get('/listusers', function(req,res){
    console.log(__dirname+'sample.json');
    fs.readFile(__dirname+'/sample.json','utf-8',function(err,data){
        console.log('err = '+err);
        console.log('data = '+data);
        res.end(data);
    });
})

app.post('/addUsers', function(req,res){
    console.log(__dirname+'sample.json');
    fs.readFile(__dirname+'/sample.json','utf-8',function(err,data){
        console.log('err = '+err);
        console.log('data = '+data);
        res.end(data);
    });
})

var server = app.listen(8081,function(){
    var host = server.address().address
    var port = server.address().port
    console.log('listening host %s and port %s',host,port);
})



