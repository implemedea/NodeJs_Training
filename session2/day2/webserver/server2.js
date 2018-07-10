var express = require('express');
var app = express();
var fs = require("fs");

var user = {
   "user10" : {
      "name" : "mohit10",
      "password" : "password4",
      "profession" : "teacher",
      "id": 10
   }
}

app.post('/addUser', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user10"] = user["user10"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8083, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})
