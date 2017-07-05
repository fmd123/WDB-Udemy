console.log("here");

function max (arr){
	var max = arr[0];
	for (var i= 1; i<arr.length; i++){
		if (max < arr[i]){
			max = arr[i];
		}

	}
	console.log(max);
	return max;
}

max([1,2,3]);
max([10,3,10,4]);
max([-5,100]);

