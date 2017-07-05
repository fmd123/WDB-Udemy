// four different ways to select first paragraph
//get by Id


//Type vars into console to see the objects:
var tagId = document.getElementById("first");

//-select by tag (first item only)

var qS = document.querySelector("p");


var qSClass = document.querySelector(".special");


var getByTag = document.getElementsByTagName("p");
// use getByTag[0]

var getByClass = document.getElementsByClassName("special");
//use getByClass[0]

var getByqSAll = document.querySelectorAll("p");
//use getByqSAll[0]

var getFancy = document.querySelector("h1 + p");

//DON"T FORGET TO PUT SCRIPT AT BOTTOM OF HTML PAGE!!!!!!

