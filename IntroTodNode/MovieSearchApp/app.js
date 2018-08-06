var express = require("express");
var app = express();
var request = require("request");
var key = "5add51f4";

var PORT = "3000";
var IP = "127.0.0.1";


app.set("view engine", "ejs");
app.listen(PORT, IP, function(){
    console.log("Movie app has started!");
});

//GET 
app.get("/results", function(req, res){
    var userSearch = req.query.search;
    var url = "http://www.omdbapi.com/?s=" + userSearch+"&apikey=5add51f4";
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200){
            var data = JSON.parse(body);
            console.log(data);
            if(data.Response != "False"){
                res.render("results", {data:data});
            }else{
                res.render("search");
            }
            
        }
    });
});

app.get("/", function(req, res){
    res.render("search");
});