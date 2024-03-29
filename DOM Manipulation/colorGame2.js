var numSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
/*-------------------------------------------------------------------------*/

init();
function init(){
	setupModeButtons();
	setupSquares();
	reset();
}
/*--------------------------------------------------*/
function setupModeButtons(){
	for(var i=0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			//this.textContent ==="Easy" ? numSquares = 3: numSquares = 6;
				if(this.textContent === "Easy"){
					numSquares = 3;
				}else{
					numSquares =6;
				}
			reset();
		});
	}
}
/*-------------------------------------------------------------*/

function setupSquares(){
	for (var i=0; i<squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			console.log(clickedColor, pickedColor);
			//compare color to pickedColor
			if (clickedColor === pickedColor){
				messageDisplay.textContent = "Correct";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}

		});
	}
}
/*-------------------------------------------------------------*/

function reset(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";

	//change colors of squares
	for (var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "cornflowerblue";
}
/*----------------------------------------------------------------------*/

resetButton.addEventListener("click", function(){
	reset();
});

/*------------------------------------------------------------------*/

function changeColors(color){
	
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}
/*----------------------------------------------------------------*/
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
/*-----------------------------------------------------------------*/
function generateRandomColors(numSquares){
	//make an empty array
	var arr = [];
	//add numSquares random colors to array
	for (var i = 0; i<numSquares; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return the array
	return arr;

}
/*---------------------------------------------------------------------*/
function randomColor(){
	//make a red, a green, and a blue, eaching ranging from 0 to 255
	var r =Math.floor(Math.random() * 256);
	var g =Math.floor(Math.random() * 256);
	var b =Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";
}

/*----------------------------------------------------------------------*/

