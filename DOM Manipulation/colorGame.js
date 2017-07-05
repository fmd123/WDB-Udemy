
debugger;
/*list of random colors*/
//takes one argument that is the number of colors to generate
var numSquares = 6;
var colors = [];
//pickedColor-the target color from the list of 6 colors
var pickedColor ;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
//correct or try again message
var messageDisplay = document.querySelector("#message");
//change color of h1 element to match
var h1 = document.querySelector("h1");

var resetButton = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

init();
function init (){
	setupModeButtons();
	setupSquares();
	reset();
	}
function setupModeButtons(){
	for (var i = 0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			//undo whatever was there before
			this.classList.add("selected");
			//give clicked button the selected class

			//ternary operator doesn't work 
			//this.textContent === "Easy" ? numSquares = 3: numSquares =6;
			//Could use ternary operator instead of this...
			if (this.textContent ==="Easy"){
				numSquares = 3;
			}else{
				numSquares = 6;
			}
			reset();

		});
}
}

	//FOR LOOP to assign colors & add event listeners 
function setupSquares(){
for (var j =0; j<squares.length; j++){
	//add click listeners to squares
	squares[j].addEventListener("click", function(){
	//save clicked square's color to a var
	var clickedColor = this.style.backgroundColor;
	console.log(clickedColor, pickedColor);
	//IF/ELSE compare clicked to target
	if (clickedColor === pickedColor){
		messageDisplay.textContent = "Correct";
		resetButton.textContent = "PLAY AGAIN?";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	}else{
		//hide square by changing to body background-color
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});

}


}



function reset(){
	colors = generateRandomColors(numSquares);
	//pick a random color from the array for target
	pickedColor = pickColor();
	//change colorDisplay (the rgb numbers) to match picked Color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change the colors of the squares
	for(var i=0; i<squares.length; i++){
			if (colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	h1.style.backgroundColor = "cornflowerblue";
	}
}
/*
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
*/
//EASY BUTTON
/*easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	/*below: WHEN YOU ONLY GENERATE 3 COLORS THEN HIDE 
	THE UNCOLORED SQUARES.
	*/
	
/*	for (var i= 0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}


});*/

//HARD BUTTON
/*hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;*/
	/*below: reset all squares to display block so none are hidden
	*/
	
	/*for (var i= 0; i<squares.length; i++){
		
			squares[i].style.backgroundColor = colors[i];
		
			squares[i].style.display = "block";

	}

});
*/
//RESET OR NEW COLORS CLICKED

	/*//reset messages and h1 color
	resetButton.textContent = "NEW COLORS";
	h1.style.backgroundColor = "cornflowerblue";
	messageDisplay.textContent = "";

	//generate all new colors
	//pick a new target color
	//change displayed color rgb formula
	//change colors of squares
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	// REPEATED CODE WILL BE REFACTORED
	for (var i =0; i<squares.length; i++){

	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
	//save clicked square's color to a var
	var clickedColor = this.style.backgroundColor;
	console.log(clickedColor, pickedColor);
	//IF/ELSE compare clicked to target
	if (clickedColor === pickedColor){
		messageDisplay.textContent = "Correct";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
	}else{
		//hide square by changing to body background-color
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});

}
*/

//put rgb  target color into h1
colorDisplay.textContent = pickedColor;



function changeColors(color){
	//change all squares to single color when you get it correct
	for (var i = 0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//pick a random number
	var random = Math.floor(Math.random() * colors.length);
	return colors[random]; 

}

function generateRandomColors(numSquares){
	//make an array
	var arr =[];
	//add num random colors to array
	for (var i=0; i<numSquares; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array'
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()* 256);
	//pick a "red" from 0 to 255
	var g = Math.floor(Math.random()* 256);
	//pick a "green" from 0 to 255
	var b = Math.floor(Math.random()* 256);
	//pick a "blue" from 0 to 255

	return"rgb(" +r+ ", " +g+ ", " +b+ ")";
	//be careful to add spaces to get correct format for rgb

}

