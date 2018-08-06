var express = require("express");
var app = express();

app.listen("3000", "127.0.0.1", function(){
    console.log("The server is running!");
});


// Public and view engine config details 
app.use(express.static("public")); 
app.set("view engine", "ejs");


//Home page
app.get("/", function(request, response){
    response.render("home.ejs");
});

//Falling in love with thing 
app.get("/fallinginlove/:thing", function(request, response){
    var thing = request.params.thing;
    response.render("love", {thing:thing});
});

//Get all the posts 
app.get("/posts", function(request, response){
    var posts = [
        {title : "JS", rank: "1", comments:"0"},
        {title : "CSS", rank: "1", comments:"2"},
        {title : "HTML", rank: "1", comments:"7"}
    ]
    response.render("posts",{posts: posts});
});

