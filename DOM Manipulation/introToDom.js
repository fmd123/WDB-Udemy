//alert("here");
/*

Where JS meets HTML and CSS..

Dom manipulation useful for games, scrolling effects,
drop down menus, form validations, interactivity, animations,

EXAMPLES: 
looked at search box in google
menus on Udemy
patatap.com

DOM = Document Object Model
The interface between your javascript and html/css
DOM = A bunch of objects that are modeling html elements.

When load an html page in browser, behind the scenes the DOM is constructed
from html. Makes a model of every single element with a javascript object.

The browser turns every HTML tag into a javascript object that we can manipulate

Document is the top level object.  Every web page has document object which is the model 

If enter #document into console will see the html of document
but not showing the actual JS object

To get object
console.dir(document) which will print out entire object

Can see all the elements

Looking at document of Google landing page is a good lesson in
understanding how much there is to know. Can't possibly know all of this.
He says 10% at most is all you need to know to be competent web deverloper.


140 THE PROCESS

the process of working with DOM is 2 things:

SELECT an element and then MANIPULATE



*/

var h1 = document.querySelector("h1");
h1.style.color = "pink";

/*
This doesn't actually work for me... What is missing?
Will talk more about querySelector later...
*/


var body = document.querySelector("body"); //SELECT
var isBlue = false;

setInterval(function (){
	if (isBlue){
		body.style.background = "white";
		document.getElementById("yes").innerHTML = "Kaloo Kalay!";
	} else{
		body.style.background = "#3498db";
		document.getElementById("yes").innerHTML = "Oh Frabjous Day!!";

	}
	isBlue = !isBlue;

}, 9000);

/*
143 IMPORTANT SELECTOR METHODS

open up any page and type into console:

document.URL
document.links
document.body
document.head

and see what happens.

Five main methods to talk about:
document.getElementById(id)
takes in an id name and returns the one element that matches.
Need to save in a variable. 

i.e. var something = document.getElementById("id");
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()

*/

/*
Type in console:
>var thing = document.getElementById("highlight")
<undefined
>thing
<li id=​"highlight">​Item 1​</li>​
(JS object NOT HTML)

NOTICE WHEN ELEMENTS ARE PLURAL!!!!!!!!!!

var things = document.getElementByClassName("bolded")

>var esss = document.getElementsByTagName("li")
<undefined
>esss
<(3) [li#highlight, li.boslded, li.bolded, highlight: li#highlight]
(THIS IS A NODE LIST. IT IS AN OBJECT)


>var liFirst = document.querySelector("li")
<undefined
>liFirst
<li id "highlight">​Item 1​</li>​
(This is an JS object NOT HTML.)
Returns only the FIRST li

var liAll = document.querySelectorAll("li")
undefined
liAll
(3) [li#highlight, li.boslded, li.bolded]
(THIS RETURNS A LIST OF ALL li)



*/



