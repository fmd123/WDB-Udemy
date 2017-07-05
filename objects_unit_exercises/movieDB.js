var database = [
	{	title: "Galaxy Quest",
		rating: 5,
		seen: true,

	},

	{
		title: "Italian for Beginners",
		rating: 5,
		seen: true,

	},

	{
		title: "Transformers 2",
		rating: 2,
		seen: true,

	},

	{
		title: "Wonder Woman",
		//rating: null,
		seen: false,

	},

];
/*

for(var i = 0; i<database.length; i++){
	var rated = database[i].rating || "not yet rated";
	if (database[i].seen ===true){
		console.log("You have seen " + database[i].title + " - rating: "+  rated);
	}else{
		console.log("You have not seen " + database[i].title + " - rating: "+ rated);

	}
}
*/

database.forEach(function(obj){
	var rated = obj.rating || "not yet rated";
	if (obj.seen){
		console.log("You have seen " + obj.title + " - rating: "+  rated);
	}else{
		console.log("You have not seen " + obj.title + " - rating: "+ rated);

	}
});

//BOTH VERSIONS WORK. :-)

//I added a little something extra to the exercise by allowing for null ratings.
//Try it with undefined. I.e. missing rating key value pair.
//that also will give me a var rated of "not yet rated." Hurrah!
//my first try I had var rated = database[i].rating + " stars" which would NOT
//be false value. I rearranged the syntax of the output so that I didn't have to
//have str " stars" at the end of sentence. 