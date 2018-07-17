var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://localhost:27017/ MongoDatabase1";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
db.createCollection("employees1", function(err, res) {  
if (err) throw err;  
console.log("Collection is created!");  
db.close();  
});  
}); 