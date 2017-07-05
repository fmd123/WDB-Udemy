$("div").css("background-color", "rgb(200, 0, 200)");
$("div.highlight").css("width","200px");
$("#third").css("border", "3px solid rgb(250, 100, 0)" );
$("div:first").css("color", "rgb(255, 200, 200)");

//if only want divs with class of highlight do div.highlight 
//E.g. what if there were anchor tags with .highlight?

//extra challenge was to create my own rgb colors. :-)

//div:first-of-type is native css while div:first is jQuery 
//first-of-type is a little faster.
