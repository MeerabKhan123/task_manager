document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task-btn");
    const taskList = document.getElementById("task-list");
    const detailsContainer = document.createElement("div");
    detailsContainer.id = "task-details";

    // Function to add a task
    const addTask = () => {
        const taskText = taskInput.value.trim();
        
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteBtn = document.createElement("span");
        deleteBtn.textContent = "❌";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = () => {
            taskList.removeChild(li);
            if (detailsContainer.parentNode !== null) {
                detailsContainer.parentNode.removeChild(detailsContainer);
            }
        };

        li.appendChild(deleteBtn);

        const details = document.createElement("div");
        details.textContent = "No details available.";
        details.style.display = "none";
        details.id = `task-${Math.floor(Math.random() * 10000)}`;
        detailsContainer.appendChild(details);

        li.appendChild(detailsContainer);
        taskList.appendChild(li);
        taskInput.value = ""; // Clear input field

        li.addEventListener("click", function() {
            if (detailsContainer.style.display === "block") {
                detailsContainer.style.display = "none";
            } else {
                detailsContainer.style.display = "block";
            }
        });
    };

    // Event listener for Add Task button
    addTaskBtn.addEventListener("click", addTask);

    // Event listener for keyboard input (Enter key)
    taskInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});