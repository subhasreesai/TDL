let input = document.getElementById("input-task");
let add = document.getElementById("add-task");
let taskList = document.getElementById("tasks-list");

input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        add.click();
    }
});


add.addEventListener('click', () => {
    let inputText = input.value.trim();
    if (inputText === "") {
        alert("Please Enter a Task");
    } else {
        addTaskToList(inputText, false); 
        saveTasks();
    }
    input.value = "";
});

 addTaskToList=(inputText, isCompleted = false)=> {
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = inputText;
    if (isCompleted) {
        span.classList.add("completed");
    }

    
    span.addEventListener('click', () => {
        span.classList.toggle("completed");
        saveTasks();
    });
    let deleteButton = document.createElement("img");
    deleteButton.src = "data:image/png;base64,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";
    deleteButton.addEventListener('click', () => {
        li.remove();
        saveTasks();
    });

    
    let editButton = document.createElement("img");
    editButton.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvmVezPI-vU0gD8tYC6Rm9bet2AMf86ypYFg&s";
    editButton.addEventListener('click', () => {
        let div = document.createElement("div");
        div.classList = "editbox";
        let textarea = document.createElement("input");
        textarea.value = span.textContent;

        textarea.addEventListener('keypress', (e) => {
            if (e.key === "Enter") {
                updateButton.click();
            }
        });

        let updateButton = document.createElement("button");
        updateButton.innerHTML = "Update";
        updateButton.id = "update-task";
        updateButton.addEventListener('click', () => {
            span.textContent = textarea.value;
            div.remove();
            saveTasks();
        });

        div.appendChild(textarea);
        div.appendChild(updateButton);
        li.appendChild(div);
    });

    li.appendChild(span);
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
}


function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#tasks-list li").forEach((task) => {
        tasks.push({
            text: task.querySelector("span").textContent,
            completed: task.querySelector("span").classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => addTaskToList(task.text, task.completed));
}
loadTasks();