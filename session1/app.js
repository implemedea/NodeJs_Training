var http = require("http");
http.createServer(function(request,response){
    response.writeHead(200,{'ContentType':'text/plain'});
    response.end('server responding text');
}).listen(8081);

