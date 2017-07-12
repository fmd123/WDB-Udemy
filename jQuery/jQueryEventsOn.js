//typo in next lexture should be: $('input[type="text"]')
/*on() very similar to vanilla JS addEventListener()
on allows us to specify if we are doing a click or a dblclick or a dragstart or keypress
All the events we can do with addEventListener we can do with .on()
*/

/*$("h1").on("click", function(){
	$("h1").css("color", "purple");
});
*/
/*doing it this way will target ALL h1*/

$("h1").on("click", function(){
	$(this).css("color", "red");
});

/*Use $("this") to target the specific h1 that was clicked */
/*---------------------------------------------------------------*/
/*Here is a different effect with paragraphs*/


$("p").on("click", function(){
	$("p").css("color", "purple");
});

$("p").on("click", function(){
	$(this).css("color", "red");
});
/*------------------------------------------------------------*/
$("input").on("keypress", function(){
	console.log("keypressed");
});
/*every time you enter a character into input box it will console log*/
/*-------------------------------------------------------------*/

/*THIS IS COOL!!!!!*/
$("button").on("mouseenter", function(){
	$(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
});
/*-------------------------------------------------------------*/
/*

IMPORTANT DIFFERENCE BETWEEN CLICK() and ON("CLICK")

click() only adds listeners for existing elements
on() will add listeners for all potential future elements.
This will make sense in to do list video!
*/
/*---------------------------------------------------------------*/









