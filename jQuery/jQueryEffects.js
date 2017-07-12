$("button").on("click", function(){
	//alert("hey");
	$("div").fadeOut(2000);
	$("div").fadeIn(2000);

	$("p").fadeIn(2000);
	$("p").FADEOUT(2000);


	//$("div").remove();
	//$("div").fadeIn(2000);//this doesn't run because there are no divs anymore
	
	
	
	
});

/*The divs are still there in the HTML. They are still part of the DOM
but they are hidden. 
*/
/*FADEOUT() DOES NOT WORK WITH SLIM jQUERY. USE MIN or UNCOMPRESSED*/

/* This is another useful method: detach()
https://stackoverflow.com/questions/2747775/jquery-remove-is-there-a-way-to-get-the-object-back-after-you-remove-it/2747786#2747786*/

/*remove() is a common method used with fadeout. 
E.g. think an item on a to do list
It literally removes it from the html in the console. 
Can't get it back unless you refresh screen.
*/

/*https://stackoverflow.com/questions/4729846/jquery-simultaneously-fadein-and-fadeout*/