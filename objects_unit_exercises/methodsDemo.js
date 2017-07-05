var obj = {
name: "Chuck",
age: 45,
isCool: false,
friends: ["bob", "tina"],
add: function (x,y){
	return x+y;
}

};

// to call the function add...

obj.add(10,5);
/*This is same format as console.log() In fact, console is an object 
and log is a method called on it.

Why use methods instead of a function?
1. organization: put all the cat methods inside cat space 
and dog methods inside dogSpace.

2. namespace collision

Here is a function. 
function speak(){
	return "WOOF!";
}

If we create a similar function speak () for cats that returns meow 
then the last created version will be the one returned so no dog version accessible.
This is name space collision

To avoid this namespace collision, create namespace objects:
*/
var dogSpace = {}; //create empty objects to which we will add our methods
//add a method: 
dogSpace.speak = function(){
	return "Woof!";
};

var catSpace = {};
catSpace.speak = function(){
	return "meow";
};
/*now we can use the similar methods but customized to each namespace object.
Only way to call a speak function is through the objects for which they are methods.
*/ 
dogSpace.speak();
catSpace.speak();