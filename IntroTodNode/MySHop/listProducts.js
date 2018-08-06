var fakeData = require("faker");

function genFakeData(){
    for(var i = 0; i < 10; i++){
        console.log("Product Name = "+ fakeData.commerce.productName() +" Price = "+fakeData.commerce.price() );
    }
}

genFakeData();