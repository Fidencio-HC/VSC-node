var http = require("http");
var log = require('./modules/my-log');


var server=http.createServer(function(request,response){

    if(request.url==="/"){
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write("<html><body><p>hello</p></body></hml>");
        response.end();
    }else if(request.url==="/exit"){
        response.writeHead(200, {"Content-Type":"text/html"});
        response.write("<html><body><p>exit</p></body></hml>");
        response.end();
    }else {
    response.writeHead(404, {"Content-Type":"text/html"});
    response.write("<html><body><p>Not Found</p></body></hml>");
    response.end();
    }
});

server.listen(4000);
console.log("running in 4000");