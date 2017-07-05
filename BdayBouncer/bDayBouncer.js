var age = Number(prompt("How old are you?"));

if(age <18 && age >0){
	console.log("You are too young to enter club. Goodbye.");
	document.getElementById("message").innerHTML = "You are too young to enter club. Goodbye.";
}
else if (age <0){
	var age = prompt("Please enter a non-negative age");
}

else if (age<21){
	console.log("You may enter club but you can't drink.");
	document.getElementById("message").innerHTML = "You may enter club but you can't drink.";

}
else if (age === 21){
	console.log("You can enter club and drink and by the way... Happy 21st Birthday!");
	document.getElementById("message").innerHTML = "Happy 21!";
}
else{
	console.log("You may enter club and also drink.");
	document.getElementById("message").innerHTML = "You may enter club and also drink.";
}

if(age%2 !== 0 ){
	console.log("Your age is odd.");
	document.getElementById("extra").innerHTML = "Your age is odd.";
}

if (age%Math.sqrt(age)===0){
	console.log("your age is a perfect square.");
	document.getElementById("extra").innerHTML = "Your age is a perfect square.";
}