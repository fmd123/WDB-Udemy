var comments = {
	

};

comments.data = ["good job!", "bye", "blah blah"];
/*function that is not a method because it exists outside of comments object
function print(arr){
	arr.forEach(function(el){
		console.log(el);
	});
}
to run this function need to invoke: 
print (comments.data)
(el for element)
*/

//to add method to comments object do this:
comments.print = function (){
	this.data.forEach(function(el){
		console.log(el);
	});
};

//(no need to name the function so removed the name print after function)
//instead of arr want to referr to comments.data inside of comments.print.
//to do this you use the this keyword. Compare the function and the method.
//here this in a method refers to comments object in which method is defined.
comments.print();