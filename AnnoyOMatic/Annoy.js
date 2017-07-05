

/*var response = prompt("Are we there yet?");
while (response !== "yes" && response !== "yeah" &&response !== "yup" ){
	var response = prompt("Are we there yet?");
}
if (response === "yes"){
	alert("Finally!");
}

*/

// version 2

var response = prompt("Are we there yet?");
while (response.indexOf("yes") === -1)
{
	var response = prompt("Are we there yet?");
}
if (response === "yes"){
	alert("Finally!");
}

//if the string given in response.indexOf is not found then it will return -1.
//this version allows us to find yes anywhere in a string.
// can't have more than one success strings.