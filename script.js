let taskList = [];

let taskInput = document.getElementById("task-name");
let taskCategory = document.getElementById("category");
let taskDeadline = document.getElementById("task-deadline");
let taskStatus = document.getElementById("status");
let addTaskButton = document.getElementById("add-task");
let tasks = document.getElementById("task");

addTaskButton.addEventListener("click", function () {
  if (!taskInput.value) {
    alert("Please enter a task name.");
    return;
  }

  let mytask = {
  name: taskInput.value,
  cat: taskCategory.querySelector('option:checked').textContent,
  time: taskDeadline.value,
  stat: taskStatus.querySelector('option:checked').textContent,
}
//   if (mytask === "") {
//     alert("Please enter an item.");
//     // exiting the function (stop here)
//     return;
//   } 
  addTask(mytask);
  renderList();
  taskInput.value="";
  taskDeadline.value = "";
  taskCategory.selectedIndex = 0;
  taskStatus.selectedIndex = 0;   
});

function isTaskOverdue(task) {
  if (!task.time) {
    return false;
  }

  let deadline = new Date(task.time);
  let now = new Date();

  return deadline < now;
}

function renderList() {
  // Clear existing list (emptying the <ul></ul>)
  tasks.innerHTML = ""; 
  // creating and adding <li> to our <ul> based off of the elements in our cart array
  for (let i = 0; i < taskList.length; i++) {
    // create the <li>
    let listTask = document.createElement("li");
    let overdue = isTaskOverdue(taskList[i]);

    let taskText = document.createElement("span");
    taskText.innerText =
      "Name: " + taskList[i].name +
      " | Category: " + taskList[i].cat +
      " | Time: " + taskList[i].time +
      " | Status: " + taskList[i].stat;

    if (overdue) {
      taskText.innerText += " | Overdue";
    }

    let statusSelect = document.createElement("select");
    let statusOptions = ["Not Started", "In Progress", "Completed"];

    statusOptions.forEach(function (optionText) {
      let option = document.createElement("option");
      option.value = optionText;
      option.textContent = optionText;
      if (taskList[i].stat === optionText) {
        option.selected = true;
      }
      statusSelect.appendChild(option);
    });

    statusSelect.addEventListener("change", function () {
      taskList[i].stat = statusSelect.value;
      renderList();
    });

    listTask.appendChild(taskText);
    listTask.appendChild(statusSelect);
    tasks.appendChild(listTask);
  }
}

function addTask(thistask) {
    taskList.push(thistask);
}