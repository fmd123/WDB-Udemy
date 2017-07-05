function isEven(num){
//don't forget that prompt returns a string!! 
//Need to use Number()!!
	num = Number(prompt("please enter a number."));
	if (num%2 ===0){
		alert("This number is even");
		return true;
	} else{
		alert("This number is odd");
		return false;
	}

}



isEven();




//even shorter way to do it!!
function evenOdd(y){
	y = Number(prompt("please enter a number and I will return even or odd."));
	return y%2 ===0;
	//if it isn't divisable by two then it will return false
	//if it is then will return true.  easy peasy.
}
evenOdd();

function factorialize(x){
	x = Number(prompt("please enter a number to factorialize."));
	if (x===0 || x===1){
		x = 1;
		console.log(x);
		return x;
	}else {
		for (var i = x-1; i>=1; i--){
		x *=i; 
		console.log (x);
		//alert(x);
		
	}
	return x;

}
	
}
factorialize();

//I originally had (var i = x-1; x>=1; x--) which resulted
//in an infinite loop. Duh... don't mix up your variables!!
//debugger;

/*
His version:
function factorial(num){
	var result =1;
	for (var i = 2; i<=num; i++){
		result *=i;
	}
	return result;
}

He counts up and starts at two because starting at 1 is wasted effort (1*1 = 1)
This is better because don't need a special case for 0!. 
The while condition will NEVER allow you to do line:
 result *=i because 2!<=num when num =0 or num = 1
 and there it will just return result = 1;
*/


function kebabToSnake(str){
	
	str = prompt("give me a sentence with dashes between words");
	var newStr = str.replace(/-/gi, "_");
	
	//i means ignore case and g means global.
	//could I run into problems if I'm turning - into something other than _ AND there are
	//underscores in string? Nope. "adf-asdf-a-a__aa-adf-" becomes "adf8asdf8a8a__aa8adf8"
	//but don't need i
	return newStr;
	
}
	kebabToSnake();








