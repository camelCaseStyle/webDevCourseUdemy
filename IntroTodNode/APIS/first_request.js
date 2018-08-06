var request = require("request");

request("https://www.google.com.au", function(error, response, body){
    if(!error && response.statusCode === 200){
        console.log(body);
    }
});