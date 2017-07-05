
var number = Math.floor((Math.random() * 10) + 1);
alert(number);
var guess = Number(prompt("Guess a number between 1 and 10"));
var endIt = false;
document.getElementById("reply").innerHTML = "";


while(endIt === false){
	if (guess === number){
		document.getElementById("reply").innerHTML = "You guessed correctly! The number is " + number + "!";
		endIt =true;
	} else if (guess>number){
		var guess = Number(prompt("Your number is too high. Guess again"));
	} else {
		var guess = Number(prompt("Your number is too low. Guess again"));
	}
}