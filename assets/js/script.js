// variables to select id of html elements
var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#task-to-do");

// dynamically creates task item
var createTaskHandler = function(event) {
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEl);
}

// Create new task item, style item, add text, append this element to task list.
formEl.addEventListener("submit", createTaskHandler); 


