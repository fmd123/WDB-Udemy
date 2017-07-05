function isUniform (arr){
//debugger;
	var uniformity = true;
	var compare = arr[0];
	for (var i = 1; i < arr.length; i++) {

		if (compare !== arr[i]){
			uniformity = false;
			console.log(uniformity);
			return uniformity;
		} 
	
	}
	console.log(uniformity);
	return uniformity;
}
isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a", "b", "p",]);
isUniform(["b", "b", "b",]);