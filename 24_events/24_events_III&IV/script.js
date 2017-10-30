
document.addEventListener("DOMContentLoaded", function(){	

	var toDoList = document.getElementById("myTodos");
	var todoForm = document.getElementById("newTodo");

	var todos = JSON.parse(localStorage.getItem("todos")) || [];

	todos.forEach(function(item){
		var todoItem = document.createElement("li");
		var doneButton = document.createElement("input");
		doneButton.type = "checkbox";
		var removeButton = document.createElement("button");
		removeButton.innerText = "x";
		console.log(item.task)
		todoItem.innerText = item.task;

		if(item.completed === true){
			console.log(todoItem.style)
			todoItem.style.textDecoration = "line-through";
			doneButton.checked = true;
		}

		todoItem.appendChild(doneButton);
		todoItem.appendChild(removeButton);
		toDoList.appendChild(todoItem);	
		
	})

	function addItem(event){ 

		//new todo item
		var todoItem = document.createElement("li");
		var taskVal = document.getElementById("newTask").value;
		todoItem.innerText = taskVal;

		//checkbox for done items
		var doneButton = document.createElement("input");
		doneButton.type = "checkbox";
		
		//remove item
		var removeButton = document.createElement("button");
		removeButton.innerText = "x";
		

		//append station
		todoItem.appendChild(doneButton);
		todoItem.appendChild(removeButton);
		toDoList.appendChild(todoItem);

		todoForm.reset();

		todos.push({task: taskVal, completed: false});
		localStorage.setItem("todos", JSON.stringify(todos));

		}

	todoForm.addEventListener("submit", addItem);	

	toDoList.addEventListener("click", function(event){
		if(event.target.tagName.toLowerCase() === "button"){
			event.target.parentNode.remove();
			for(var i = 0; i<todos.length; i++){
				if(event.target.parentNode.innerText.indexOf(todos[i].task) !== -1){
					todos.splice(i,1);
					return localStorage.setItem("todos", JSON.stringify(todos)); 
				}
			}		
		} else if(event.target.tagName.toLowerCase() === "input"){
			for(var i = 0; i<todos.length; i++){
				if(event.target.parentNode.innerText.indexOf(todos[i].task) !== -1){
					todos[i].completed = !todos[i].completed;
					if(todos[i].completed){
					event.target.parentElement.style.textDecoration = "line-through";
					} else {
					event.target.parentElement.style.textDecoration = "none";	
					}
					return localStorage.setItem("todos", JSON.stringify(todos)); 
				}
			}
		}	
		
	})
	
})

