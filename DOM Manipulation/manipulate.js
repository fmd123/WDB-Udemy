/*
practice manipulating content

*/
var para1 = document.querySelector('.changed');
//select p class = changed elements

para1.textContent = "I changed this paragraph with textContent.";

var para2 = document.querySelector('#from');

//document.getElementById("to").innerHTML = para2;
//this shows the object not the text. hmmm... 


//document.getElementById("to").innerHTML = para2[0];
//this gives undefined. Grrr...

//JSON.stringify(para2);
//not sure I even have JSOn attached to this document... Grrr...
//how do I do this?

/*I think the short answer is that no one would use 
querySelector to do this!!!
DO THIS:
*/

var transfer = document.getElementById('from').innerHTML;
document.getElementById('to').innerHTML = transfer;

//WHEN DO I USE CSS # VS NOT USE IT????

//In console can use textContent on ul element to see that it returns
//only the string.
/*
IN CONSOLE: 
> var ul = document.querySelector('ul');

< undefined

> ul

< <ul>​
	<li>​item 1​</li>​
	<li>​item 2​</li>​
	<li>​item 3​</li>​
	<li>​item 4​</li>​
	</ul>​

> ul.textContent

< "
	item 1
	item 2
	item 3
	item 4
  "
*/