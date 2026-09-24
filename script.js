let taskList = [];

let taskInput = document.getElementById("task-name");
let taskCategory = document.getElementById("category");
let taskDeadline = document.getElementById("task-deadline");
let taskStatus = document.getElementById("status");
let addTaskButton = document.getElementById("add-task");
let tasks = document.getElementById("task");

addTaskButton.addEventListener("click", function () {
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
});

function renderList() {
  // Clear existing list (emptying the <ul></ul>)
  tasks.innerHTML = ""; 
  // creating and adding <li> to our <ul> based off of the elements in our cart array
  for (let i = 0; i < taskList.length; i++) {
    // create the <li>
    let listTask = document.createElement("li");
    console.log(taskList[i].name);
    console.log(taskList[i].cat);
    console.log(taskList[i].time);
    console.log(taskList[i].stat);
    // use the data from the cart to add text to our new <li>
    listTask.innerText += "Name: " + taskList[i].name + " Category: " + taskList[i].cat + " Time: " + 
    taskList[i].time + " Status: " + taskList[i].stat;
    console.log(tasks)
    // add the <li> to the <ul> (and make it appear on our page!)
   tasks.appendChild(listTask);
  }
}

function addTask(thistask) {
    taskList.push(thistask);
}