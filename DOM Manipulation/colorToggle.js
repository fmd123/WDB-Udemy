


// CLICK ME -my version
var thing = document.querySelector("#color");
var h1 = document.querySelector("h1");
//var body = document.querySelector("body");
//don't need above line when use document.body etc.

console.log(thing);
thing.addEventListener("click", function(){
	thing.style.background = "green";

	if (document.body.style.background ==="cornflowerblue"){
		document.body.style.background = "orange";
		h1.style.color = "cornflowerblue";
		this.style.color = "blue";
	}else {
	document.body.style.background = "cornflowerblue";
	h1.style.color = "orange";
	this.style.color = "red";
	}

	
});
//CLICK ME ALSO
//HIS SHORTER BETTER WAY...
var thing2 = document.querySelector("#next");
var big2 = document.querySelector("#change");
var isPurple = false;
thing2.addEventListener("click", function(){
	if (isPurple){
		document.body.style.background = "white";
		big2.style.color = "red";
	}else{
		document.body.style.background = "purple";
		big2.style.color = "deeppink";
	}
	isPurple = !isPurple;
});


//TOGGLE METHOD don't need any logic. Whatever state it is in will toggle
//to opposite. This is hide/show method
var thing3 = document.querySelector("#clicky");
var big3 = document.querySelector("#clacky");

	thing3.addEventListener("click", function(){
		document.body.classList.toggle("leaf");
		big3.style.color = "dodgerblue";

	});

//'this' refers to 'thing' inside the eventlistener function
//can use 'thing' but 'this' is tidier.


/*using document.body etc. means that you don't have to do 
 var body = document.querySelector("body");
But you do have to create a var for the button in order to 
have something to which to add an addEventListener (etc.)
 */