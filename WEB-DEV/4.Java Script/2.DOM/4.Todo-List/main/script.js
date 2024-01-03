let keyEnter = document.querySelector("#taskInput");
let submit = document.querySelector("#submit");
keyEnter.addEventListener("keydown", addNewTask);
submit.addEventListener("click", addNewTask);

function addNewTask(event){
    eventValue = event.type;
    let performAction;
    if(eventValue == "click"){
        performAction = 1;
    }
    else if(eventValue == "keydown" && event.key == "Enter"){
        performAction = 1;

    }
    else{
        performAction = 0;
    }
    if(performAction == 1){
        // Inserting pending task
        let newTask = document.getElementById("taskInput").value;
        let pendingTasksList = document.querySelector("#pendingTasksList");
        let taskInput = document.querySelector("#taskInput");
        taskInput.value = "";
        let li = document.createElement("li");
        li.classList.add("liStyle");
        li.innerHTML = `<i class="fa-regular fa-circle-check fa-lg" style="color: #ff0000;"></i> <p> ${newTask}</p>`;
        pendingTasksList.appendChild(li); 
    }
}

