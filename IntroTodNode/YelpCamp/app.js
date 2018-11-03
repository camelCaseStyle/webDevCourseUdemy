var express = require("express"),
    app     = express(),
    request = require("request"),
    mongoose = require("mongoose");

var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
})
var Campground = mongoose.model("campground", campgroundSchema);

Campground.create(
    {
        name: "YellowStone National Park",
        image: "https://www.nps.gov/npgallery/GetAsset/ABE1C874-155D-451F-678E2B7A1B7D2229/proxy/hires/",
        description: "This is an yellowstone park. It is very beautiful!"
    },
    function(error, camp){
        if(error){
            console.log(error);
        }else{
            console.log(camp);
        }
});

var PORT = "3000";
var IP = "127.0.0.1";

app.listen(PORT, IP, function(){
    console.log("The server is up!");
});

//Landing page 
app.get("/", function(req, res){
    res.render("landing");
});

//INDEX route 
//CampGrounds 
app.get("/campgrounds", function(req, res){
    Campground.find({}, function(error, campGrounds){
        if(error){
            console.log(error);
        }else{
            res.render("index", {campGrounds: campGrounds});
        }
    });
    
});

//Create Route 
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var imageURL = req.body.imageURL;
    var desc = req.body.description;
    console.log(name +" "+ imageURL);
    Campground.create({name: name, image: imageURL, description: desc}, function(error, camp){
        if(error){
            console.log(error);
        }else{
            console.log(camp);
        }
    })
    res.redirect("/campgrounds");
});

//Show the form which will show the data to send to this form 
app.get("/campgrounds/new", function(req, res){
        res.render("new");
});

app.get("/campgrounds/:id", function(req, res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log("Error");
        }else{
            res.render("show",{campGround :foundCampground});
        }
    });
})