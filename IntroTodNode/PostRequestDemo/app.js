var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var port = "3000";
var address = "127.0.0.1";
var friends = ["tony", "adam", "james", "hunty",  "javey"];
/*
    Config Settings 
    - Set up the listen port and address 
    - Set up the view engine
    - Set up the partials
*/
app.listen(port, address, function(){
    console.log("The server is listening!");
});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

//Routes 
app.get("/", function(request, response){
    response.render("home");
});

app.get("/friends", function(request, response){
    
    response.render("friends", {friends:friends});
});

//POST Route 

app.post("/addFriend", function(request, response){
    console.log(request.body.newFriend);
    friends.push(request.body.newFriend);
    response.redirect("/friends");
});