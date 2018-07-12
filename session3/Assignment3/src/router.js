var express = require('Express');
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/index.html',function(req,res){
    res.sendFile(path.join(__dirname + '/app/index.html'));
});

router.get('/login.html',function(req,res){
    res.sendFile(path.join(__dirname + '/app/login.html'));
});

router.get('/signup.html',function(req,res){
    res.sendFile(path.join(__dirname + '/app/signup.html'));
});

router.post('/signup',urlencodedParser,function(req,res){
    fs.readFile(path.resolve(__dirname, 'userlist.json'),'utf8',function(err,data){
        var userdetail = JSON.parse( data );
        userdetail.users.push(req.body);
        fs.writeFile(path.resolve(__dirname, 'userlist.json'),  JSON.stringify(userdetail), function(err) {
            if(err) {
                return console.log(err);
            }
            res.sendFile(path.join(__dirname + '/app/login.html'));
        });
    });
});

router.post('/login',urlencodedParser,function(req,res){
    console.log(req.body);
    fs.readFile(path.resolve(__dirname, 'userlist.json'),'utf8',function(err,data){
        var userdetail = JSON.parse( data );
        var isLogedInSuccess = false;

        userdetail.users.forEach(function(user){
            console.log("user",user);
            console.log(user.username,user.password);
            console.log(req.body.username,req.body.password);
            if(user.username == req.body.username && user.password == req.body.password){
                isLogedInSuccess = true;
            }
          });

        if(isLogedInSuccess == true){
            res.end("logged in success");
        }else{
            res.end("logged in failed");
        }
    });
});

module.exports = router;