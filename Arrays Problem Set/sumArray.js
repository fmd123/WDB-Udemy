console.log("here");

function sumArray(arr){

	var sum = 0;
	for(var i=0; i<arr.length; i++){
		sum += arr[i];
	}
	console.log (sum);
	return sum;
}

sumArray([1,2,3]);
sumArray([10,3,10,4]);
sumArray([-5,100]);

/*
or could do a forEach...

function sumArray(arr){
var sum = 0;
arr.forEach(function (element){
	sum += element;
	
});

}

Here you use element (or any other word) as place holder rather than arr[i]
*/