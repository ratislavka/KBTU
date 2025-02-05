function addTask() {
    let taskInput = document.getElementById("task_input");
    let taskText = taskInput.value.trim();

    if (taskText === ""){
        alert("Please, enter new task!");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task_checkbox";

    checkbox.onchange = function() {
        li.classList.toggle("completed", checkbox.checked);
    };

    let span = document.createElement("span");
    span.textContent = taskText;

    let deleteButton = document.createElement("img");
    deleteButton.src = "assets/images/trash-can.png";
    deleteButton.alt = "Delete";
    deleteButton.className = "delete"; 
    deleteButton.style.width = "15px"; 
    deleteButton.style.cursor = "pointer"; // Makes it clickable

    deleteButton.onclick = function() {
        li.remove(); 
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    document.getElementById("task_list").appendChild(li); 

    taskInput.value = ""; 

    checkbox.onchange = function() {
        span.classList.toggle("completed", checkbox.checked);
    };
}
