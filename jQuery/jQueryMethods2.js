//.attr( ) gets the value of an attribute for the first element in the set
//of  matched elements or set one or more attributes for every matched element

//$("img").attr("width", "200px" );
//I can change the width of the photo

//change the img

//$('img').attr("src", "https://www.thetreecenter.com/wp-content/uploads/austrian-pine-1-263x349.jpg");
//select the input and change type of input e.g. change from text to color input
$("input").attr("type", "color");
//click on input box and a color picker will pop up.

$("input").attr("type", "checkbox");
//turns into a checkbox although the placeholder text won't show up
$("input").attr("type", "text");

$('img').css("width", "200px");

//what if we only want to change the first image?

$('img:first-of-type').attr("src", "https://www.thetreecenter.com/wp-content/uploads/austrian-pine-1-263x349.jpg");

//what about changing the last img?

$("img").last().attr("src", "http://chimpmania.com/forum/attachment.php?attachmentid=82202&d=1422827486&thumb=1");
//changing all images:
$("img").attr("src", "http://chimpmania.com/forum/attachment.php?attachmentid=82202&d=1422827486&thumb=1");
//SUMMARY: 
//if you don't fill in arguments then it will get the values
//e.g. $("img").attr("src") will get the value of src
//if you fill in argument for value of src (add a url or jpg file) then it will set the values 
//(and also add an attribute that wasn't there previously )

//val() METHOD
//.cal is jQuery's wrapper for .value()

//can use it to get stuff from an input element...
//and can also use as a setter

//if you want to clear the value in the input...
//you would use .val() like so...

$("input").val("");

//.val works on checkboxes, color inputs, dropdown menus etc.

//$("select").val();  will tell you what value the user has selected
//cool! :-)

/*
Added some classes
$("h1").addClass("correct");  


$("h1").removeClass("correct")
(
$("h1").addClass("correct")

$("li").addClass("done")

Can add more than one class at a time.
$("li").addClass("done someOtherClass")

$("li").toggleClass("correct") works like classList.toggle in vanilla JS

$("li").first.toggleClass("done")


*/


