var playerScoreOne = 0;
var playerScoreTwo = 0;
document.querySelector('input').value = 5;;
var scoreLimit = document.querySelector('input');
var playerOne = document.getElementById("playerOne");
var playerTwo = document.getElementById("playerTwo");

var playerOneButton = document.getElementById("button1");
var playerTwoButton = document.getElementById("button2");
var reset = document.getElementById("button3");

var buttons = document.querySelectorAll('button');

var playingTo = document.getElementById('playingTo');

scoreLimit.addEventListener('change', function(){
	playingTo.textContent = scoreLimit.value;
});

var isGameWon = false;

for(var i = 0; i < buttons.length; i++){
	buttons[i].addEventListener('click', function(){
		switch(this.id){
			case "button1":
				//increment player one score 
				
				var score = function(){
					if(playerScoreOne < scoreLimit.value && !isGameWon){
						playerScoreOne++;
						if(playerScoreOne == scoreLimit.value){
							playerOne.style.color = 'green';
							isGameWon = true;
						}
					}
					return playerScoreOne;
				}
				playerOne.textContent = score();
				break;
			case "button2":
	
				//increment player two score 
				var scoretwo = function(){
					if(playerScoreTwo < scoreLimit.value && !isGameWon){
						playerScoreTwo++;
						if(playerScoreTwo == scoreLimit.value){
							playerTwo.style.color = 'green';
							isGameWon = true;
						}
					}
					return playerScoreTwo;
				}
				playerTwo.textContent = scoretwo();
				break;
			case "reset":
				scoreLimit.value = 5;
				// reset the game 
				playerOne.textContent = playerTwo.textContent = '0';
				playerScoreTwo = playerScoreOne = 0;
				playerOne.style.color = playerTwo.style.color = 'black';
				playingTo.textContent = scoreLimit.value;
				break;
			default:
				// do nothing 
				break;
		}

	});
}

