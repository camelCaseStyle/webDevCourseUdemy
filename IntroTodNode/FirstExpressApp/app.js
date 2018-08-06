var express = require("express");

var app = express();

var port = process.env.PORT || 3000;
var ip = process.env.IP || "127.0.0.1";

app.listen(port, ip, function(){
    console.log("Server has started! on port = "+port+"and IP = "+ip);
});

app.get("/", function(request, response){
    console.log(request.params);
    response.send("Hi There!");
    
});

app.get("/:name/:id/:action", function(request, response){
    console.log(request.params);
    response.send(request.params);
});