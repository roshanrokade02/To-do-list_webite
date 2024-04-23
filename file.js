document.getElementById("addTaskBtn").addEventListener("click", function() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var todoList = document.querySelector(".todo-list");
        var listItem = document.createElement("li");
        listItem.classList.add("todo-item");
        listItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        todoList.appendChild(listItem);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
});

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        var listItem = event.target.parentElement;
        listItem.remove();
    }
});
