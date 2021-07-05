// variables to select id of html elements
var formEl = document.querySelector("#task-form");
var taskToDoEl = document.querySelector("#task-to-do");

// dynamically creates task item
var createTaskHandler = function(event) {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value
    
    //create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    //give it a class name
    taskInfoEl.className = "task-info";
    //add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

    listItemEl.appendChild(taskInfoEl);

    //add entire list item to list
    // listItemEl.textContent = taskNameInput;
    taskToDoEl.appendChild(listItemEl);
}

// Create new task item, style item, add text, append this element to task list.
formEl.addEventListener("submit", createTaskHandler); 


