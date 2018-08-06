var express = require("express");
var app = express();
var request = require("request");
var accessKey = "f3ba25906107038aa1b834248ff6185615dabb09a6f5dd6757a5b8ea04c70678";
var secretKey = "075caf8e066853292948546c944dfca83814784c789538ff3c291688b84ada91";
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

var campGrounds = [
    {name: "YellowStone National Park", url: "https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg"},
    {name: "MilkyWay National Park", url: "https://cdn.pixabay.com/photo/2015/09/01/06/17/milky-way-916523_960_720.jpg"},
    {name: "Andromeda National Park", url: "https://cdn.pixabay.com/photo/2015/05/06/16/31/andromeda-galaxy-755442_960_720.jpg"},
    {name: "YellowStone National Park", url: "https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg"},
    {name: "MilkyWay National Park", url: "https://cdn.pixabay.com/photo/2015/09/01/06/17/milky-way-916523_960_720.jpg"},
    {name: "Andromeda National Park", url: "https://cdn.pixabay.com/photo/2015/05/06/16/31/andromeda-galaxy-755442_960_720.jpg"},
    {name: "YellowStone National Park", url: "https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg"},
    {name: "MilkyWay National Park", url: "https://cdn.pixabay.com/photo/2015/09/01/06/17/milky-way-916523_960_720.jpg"},
    {name: "Andromeda National Park", url: "https://cdn.pixabay.com/photo/2015/05/06/16/31/andromeda-galaxy-755442_960_720.jpg"},

];

var PORT = "3000";
var IP = "127.0.0.1";

app.listen(PORT, IP, function(){
    console.log("The server is up!");
});

//Landing page 
app.get("/", function(req, res){
    res.render("landing");
});

//CampGrounds 
app.get("/campgrounds", function(req, res){
        res.render("campgrounds", {campGrounds: campGrounds});
});

//Create new campgrounds 
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var imageURL = req.body.imageURL;
    console.log(name +" "+ imageURL);
    campGrounds.push({name: name, url : imageURL});
    res.redirect("/campgrounds");
});

//Show the form which will show the data to send to this form 
app.get("/campgrounds/new", function(req, res){
        res.render("new");
});