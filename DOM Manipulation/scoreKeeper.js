//alert("hey");

//buttons
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
//Displays
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
//raw scores
var p1Score = 0;
var p2Score = 0;

var numInput = document.querySelector("input");

var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if (p1Score === winningScore){
			console.log("game over");
			gameOver = true;
			score1.classList.add("winner");
			//adds the class .winner to score1 span
			//and changes score to green

		}
		score1.textContent = p1Score;
		//changes content of score1 span.
	}
});


p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if (p2Score === winningScore){
			console.log("game over");
			gameOver = true;
			score2.classList.add("winner");
		}
		score2.textContent = p2Score;
		//changes content of score2 span.
	}
});

resetButton.addEventListener("click", function(){
	reset();

});
//A change event will run any time a change happens
numInput.addEventListener("change", function(){
	reset();
	var maxNum = document.querySelector("#maxNum");
	maxNum.textContent = numInput.value;
	//notice that need to use .value!!!!
	winningScore = Number(numInput.value);
	//numInput.value is a string so need to change it to a number

});

function reset(){
	p1Score = 0;
	p2Score = 0;
	score1.textContent = p1Score;
	score2.textContent = p2Score;
	score1.classList.remove("winner");
	score2.classList.remove("winner");
	gameOver = false;

}