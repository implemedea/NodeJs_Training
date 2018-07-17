var http = require('http');  
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/ MongoDatabase1";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
var myquery = { address: 'Ghaziabad' };  
db.collection("employees").remove(myquery, function(err, obj) {  
if (err) throw err;  
console.log(obj.result.n + " record(s) deleted");  
db.close();  
});  
});  