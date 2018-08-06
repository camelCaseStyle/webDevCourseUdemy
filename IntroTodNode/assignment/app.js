var express = require("express");

var app = express();

app.listen("3000", "127.0.0.1", function(){
    console.log("The server is up");
});

app.get("/", function(req, res){
    res.send("Welcome to my assignment!");
});

app.get("/speak/:animals", function(request, response){
    switch(request.params.animals){
        case "Dog".toLowerCase():
            response.send("The Dog goes woof");
            break;
        case "Pig".toLowerCase():
            response.send("The Pig goes oink");
            break;
        case "Cow".toLowerCase():
            response.send("The Cow goes moo");
            break;
        default:
            response.send("I have no idea the sound that "+request.params.animals +"makes");
            break;
    }
});

app.get("/repeat/:keyword/:id", function(request, response){
    var str =" ";
    for(var i = 0; i < request.params.id; i++){
        str = request.params.keyword + " "+ str;
    }
    response.send(str);
    
});

app.get("/speak/posts/anotherposts", function(request, response){
    response.render("/views/posts.ejs");
})
app.get("*", function(request, response){
    var str ="What are you doing!";
    
    response.send(str);
    
});

