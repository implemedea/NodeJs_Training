var http = require('http');  
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/MongoDatabase1";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var query = { address: "Delhi" };  
db.collection("employees").find(query).toArray(function(err, result) {  
if (err) throw err;  
console.log(result);  
db.close();  
});  
});