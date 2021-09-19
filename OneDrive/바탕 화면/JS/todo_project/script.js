//selectors
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let filterOption = document.querySelector(".filter-todo");

//evnt listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCheck);
filterOption.addEventListener("change", filterTodo);
//functions

function addTodo(e) {
  e.preventDefault();
  //create div with class todo
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //create li with class todo-item
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");

  //add the value of the input to li
  newTodo.innerText = todoInput.value;
  //add li to div
  todoDiv.appendChild(newTodo);
  //create a complete button with class complete-btn and add to div
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("complete-btn");
  todoDiv.appendChild(completeButton);
  //create a trash button with class trash-btn and add to div
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //add div to ul
  todoList.appendChild(todoDiv);
  //clear input
  todoInput.value = "";
}

function deleteOrCheck(e) {
  const item = e.target;
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.add("completed");
  }

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    //await sleep(2000); delete html after 2000 milliseconds. why this one not working?
    //setTimeout(() => todo.remove(), 500); //not good. transition timeset is 2 sec, but transition happens less that 2 sec
    todo.addEventListener("transitionend", () => {
      todo.remove(); //after transition, remove is executed
    });
  }
}

function filterTodo(e) {
  let todos = todoList.childNodes; //will return array. all the elements of the todo list
  console.log(todos);

  console.log(e.target.value);

  //no parameter -> need bracket, one parameter -> bracket not necessary
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "All":
        todo.style.display = "flex";
        break;
      case "Completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "Uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      default:
        console.log("error");
    }
  });
}

function getTodos() {
  axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    res.data.forEach((item) => {
      //create div with class todo
      const todoDiv = document.createElement("div");
      todoDiv.classList.add("todo");
      if (item.completed == true) {
        todoDiv.classList.add("completed");
      }

      //create li with class todo-item
      const newTodo = document.createElement("li");
      newTodo.classList.add("todo-item");

      //add the value of the input to li
      newTodo.innerText = item.title;
      //add li to div
      todoDiv.appendChild(newTodo);
      //create a complete button with class complete-btn and add to div
      const completeButton = document.createElement("button");
      completeButton.innerHTML = '<i class="fas fa-check"></i>';
      completeButton.classList.add("complete-btn");
      todoDiv.appendChild(completeButton);
      //create a trash button with class trash-btn and add to div
      const trashButton = document.createElement("button");
      trashButton.innerHTML = '<i class="fas fa-trash"></i>';
      trashButton.classList.add("trash-btn");
      todoDiv.appendChild(trashButton);
      //add div to ul
      todoList.appendChild(todoDiv);
    });
    console.log(res);
    //let arrayExample = ["hi", "I", "am", "Jinjoo"]; //array
    //let objectExample = [
    //  { name: "Jinjoo", city: "seoul" },
    //  { name: "Ibrahim", city: "Guri" },
    //]; //object no quotation for name
    //object is easier to delete&insert an element
    //foreach is used for array
    //arrayExample.forEach((item) => console.log(item));
    //objectExample.forEach((item) => console.log(item.city));
  });
}

getTodos();
//change this data to actual todo with style&html
