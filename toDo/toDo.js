var todos = [];
var input = prompt("What would you like to do?");

while(input !=="quit"){
	if (input === "list"){
		listToDos();
	} else if(input ==="new"){
		addToDos();
	} else if(input === "delete"){
		deleteToDos();
	}

	var input = prompt("What would you like to do?");

}

console.log("ok you quit the app");

function listToDos(){
	console.log("**************");
	todos.forEach(function(todo, i){
	console.log(i + ": " + todo);
	});
	console.log("**************");

}

function addToDos(){
	var newToDo = prompt("Enter a new to do");
	todos.push(newToDo);
	console.log("new item added.");
}

function deleteToDos(){

	var index = prompt("enter index of to do to deleted");
	todos.splice(index, 1);
	console.log("item deleted");
}