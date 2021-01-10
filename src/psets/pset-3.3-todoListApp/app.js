// Define UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {

    // DOM Load event
    document.addEventListener('DOMContentLoaded', getTasks);

    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filter.addEventListener('keyup', filterTasks);
}

// Get tasks from LS
function getTasks () {
    let tasks;
    if (localStorage.getItem('tasks') === /* TODO: What could we get here ?? */) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    renderList(tasks);
}

// render list of tasks
function renderList(tasks){
    taskList.innerHTML = '';
    tasks.forEach( function(task) {
        // Create List element
        const li = document.createElement("li");
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        // Create link for delete button
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // Append the link to list element
        li.appendChild(link);

        // Append li to ul
        taskList.appendChild(li);
    })
}

// Add task
function addTask(e) {
    // Ensure task has a name 
    if (taskInput.value === ''){
        alert('Please add a value! ');
        return
    }

    // Create List element
    const li = document.createElement("li");
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    // Create link for delete button
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to list element
    li.appendChild(link);

    // Check if Li has been created correctly

    // Append and update localStorage
    taskList.appendChild(li);
    storeTaskInLocalStorage(taskInput.value);

    // Clear input
    taskInput.value = '';

    // Prevent from default action
    e.preventDefault(); 
}

// storing task in local storage as well
function storeTaskInLocalStorage (task) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        // TODO
        // read values into `tasks` from localstorage
    }

    // TODO
    // push new task to tasks
    // save tasks to localstorage
}

// Remove task function
function removeTask (e) {
    if (e.target.parentElement.classList.contains('delete-item') ) {
        // console.log(e.target)
        if (confirm('Are you sure want to delete "' + e.target.parentElement.parentElement.textContent + '" ??')) {
            e.target.parentElement.parentElement.remove();
            // Remove from LS
            removeFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// Remove from LS function def
function removeFromLocalStorage (taskItem, index) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        if (taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear tasks
function clearTasks () {
    if (confirm('Are you sure want to clear ??')) {
        
        // TODO
        // clear tasks form DOM as well as from LocalStorage
        // hint: we have a function `clearTasksFromLocalStorage`
    }
}

// clear from LS
function clearTasksFromLocalStorage () {
    // TODO
    // clear the localstorage
}

// Filter tasks
function filterTasks (e) {
    const text = e.target.value.toLowerCase();

    let tasks = JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
    let searchedList = [];
    tasks.forEach(function (item) {
        // TODO
        if (item.toLocaleLowerCase().indexOf(text) != /* what value are we expecting if it is not in the list ??*/) {
            searchedList.push(item);
        }
    });

    // render the searchlist after modifications
    renderList(searchedList);
}

