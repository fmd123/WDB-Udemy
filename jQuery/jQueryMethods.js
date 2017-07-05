//api.jquery.com has everything you need to know
//.text() gets combined text contents of each element. 
//Compare to .textContent in vanilla JS
//strips out all the tags

console.log($("h1").text());
console.log($("li").text());
//gives a string with content of all li run together.
//"PeruginaChocoloveHershey's" 
//jQuery has changed since this lesson was made

$("h1").text("New Text!");
//update the text in an element

//.html() corresponds to JS .innerHTML()
/*
Returns:
	<li>Perugina</li>
	<li>Chocolove</li>
	<li>Hershey's</li>*/

console.log($("ul").html());
//can also update html
$("ul").html("<li>Peaches</li><li>Chili</li><li>Hamburgers</li>");

//.text is html safe. it won't treat what you pass it as html but 
//it will treat it as a string. 
//GOod because if USE TEXT IN INPUTS TO KEEP PEOPLE FROM ENTERING HTML
//OR JS and messing up the site. 

