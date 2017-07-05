
function printReverse(arr){

	for (var i=arr.length-1; i>=0;i--){
		console.log(arr[i]);
	}
}





printReverse([1,2,3,4]);
printReverse(["a", "b", "c", "d", ]);

//can't use forEach method to go backwards through array. pretty sure...
//arr.reverse() would reverse the array but we only want to print 
//in reverse without altering original array.