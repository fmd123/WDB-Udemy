/*

to create a click listener...

*/

$("h1").click(function(){
	alert("h1 clicked!");
});

/*
 now add click listener to all the buttons at once
*/
$("button").click(function(){
	alert("oh no!!!! You clicked me!");
});

/*in vanilla JS would have had to select them all, then run a 
for-loop to loop through all of them and then 
individually add an event listener to each. This loop is happening 
but is being done by jquery behind the scenes.

*/

$("button").click(function(){
	$(this).css("background", "pink");
});

/*
Vanilla JS uses 'this' but jQuery uses '$(this)'. 
jQuery wraps vanilla JS in it's big jQuery hug ...
Can't use plain old "this "
You have to wrap it in jQuery

*/

$("button").click(function(){
	var text = $(this).text();
	console.log("You clicked: " + text);
});

/*
keypress()
keydown() fired any time you press a key down
keyup() is fired when you release the key

keypress() is fired in between keydown and keyup

keydown and keyup provide a code indicating which key was pressed while 
keypress indicates the character.
So for lowercase "a" keydown and keyup report 65 while keypress reports 97.
for uppercase "A" keydown and keyup AND keypress report 65.

Also keydown and keypress fire on both the a key and the shift key
stackoverflow post: whats-the-theory-behind-jquery-keypress-keydown-keyup-black-magic-on-macs
*/







*/