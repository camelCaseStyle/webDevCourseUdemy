/*eslint-env browser*/
var colours = [];
var squares = document.querySelectorAll('.square');
var reset = document.querySelector('#reset');
var easyMode = document.getElementById('easy');
var hardMode = document.getElementById('hard');
var numberOfSquares = 6; 
var easySelected = false;
var heading = document.querySelector('h1');



assignRandomColours();
var pickedColor = pickColorForChoosing();

easyMode.addEventListener('click', function(){
    document.getElementById('message').textContent = "";
    // We only have three active squares when easy mode is selected
    // Below we hide the three bottom squares
    for(var i = 3; i < 6; i++){
        squares[i].classList.add('fadeOut');
        squares[i].classList.remove('fadeIn');
    }
    // Pick three random colours

    this.classList.add('selected');
    hardMode.classList.remove('selected');
    emptyColours();
    easySelected = true;
    assignRandomColours();
    pickedColor = pickColorForChoosing();
});


hardMode.addEventListener('click', function(){
    document.getElementById('message').textContent = "";
    for(var i = 3; i < 6; i++){
        squares[i].classList.add('fadeIn');
        squares[i].classList.remove('fadeOut');
    }
    this.classList.add('selected');
    easyMode.classList.remove('selected');
    emptyColours();
    easySelected = false;
    assignRandomColours();
    pickedColor = pickColorForChoosing();
});

function emptyColours(){
    for(var i = 0 ; i < squares.length; i++){
        colours.pop();
    }
    heading.style.backgroundColor = "steelblue";
}
reset.addEventListener('click', function(){
    for(var i = 0; i < numberOfSquares; i++){
        squares[i].classList.add('fadeIn');
        squares[i].classList.remove('fadeOut');
    }
    document.getElementById('message').textContent = "";
    emptyColours();
    assignRandomColours();
    document.querySelector("button").textContent = "New Game";
    document.querySelector("h1").style.backgroundColor = "steelblue";
    pickedColor = pickColorForChoosing();
    
});

for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', function(){
        if(this.style.backgroundColor === pickedColor){
            
            document.getElementById("message").textContent = "Correct";
            document.querySelector("h1").style.backgroundColor = pickedColor;
            document.querySelector("button").textContent = "Play Again?"
            changeColors();
        }else{
            this.classList.remove('fadeIn');
            this.classList.add('fadeOut');
            document.getElementById("message").textContent = "Try Again";
        
        }
    })
}

function changeColors(){
    for(var i = 0; i < numberOfSquares; i++){
        squares[i].classList.remove('fadeOut');
        squares[i].style.backgroundColor = pickedColor;
    }
}

function colorSelector(){
    // need to select three random rgb values 
    var max = 255;
    var min = 0;
    min = Math.ceil(min);
    max = Math.floor(max);
    var threeColours = [];
    for(var i = 0; i < 3 ; i++){
        threeColours[i] = randomPicker(max, min);
    }
    return threeColours;
}

function randomPicker(max, min ){
    // returns a random number between max and min 
    Math.random() * (max - min) + min;
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}

function assignRandomColours(){
    // assigns random colors to squares
    if(easySelected === true){
        numberOfSquares = 3;
    }else{
        numberOfSquares = 6;
    }
    var squares = document.querySelectorAll(".square");
    for(var i = 0; i < numberOfSquares; i++){
        var colour = colorSelector();
        var colorString = "rgb"+ "("+ colour[0] +", " +colour[1]+", "+ colour[2]+")";
        squares[i].style.background = colorString;
        colours.push(colorString);
    }
}

function pickColorForChoosing(){
    var min = 0; 
    var max = colours.length -1;
    var i = randomPicker(max, min);
    document.getElementById('rgbValues').textContent = colours[i].toUpperCase();
    return colours[i];
}





