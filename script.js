function updateHeadingsAndSeparatorsVisibility() {
  const taskList = document.getElementById("task-list");
  const incompleteHeading = document.getElementById("incomplete-heading");
  const separator1 = document.getElementById("separator1");

  if (taskList.children.length > 0) {
    incompleteHeading.style.display = "block";
    separator1.style.display = "block";
  } else {
    incompleteHeading.style.display = "none";
    separator1.style.display = "none";
  }

  const completedList = document.getElementById("completed-list");
  const completedHeading = document.getElementById("completed-heading");
  const separator2 = document.getElementById("separator2");

  if (completedList.children.length > 0) {
    completedHeading.style.display = "block";
    separator2.style.display = "block";
  } else {
    completedHeading.style.display = "none";
    separator2.style.display = "none";
  }
}

document.getElementById("task-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Create a new list item
  const li = document.createElement("li");

  // Create a task label
  const taskLabel = document.createElement("span");
  taskLabel.textContent = taskInput.value;
  li.appendChild(taskLabel);

  // Create a "Mark as Complete" button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Mark as Complete";
  completeBtn.classList.add("complete-btn");
  li.appendChild(completeBtn);

  // Create a delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  li.appendChild(deleteBtn);

  // Append the new list item to the task list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = "";

  // Update task headings and separators visibility
  updateHeadingsAndSeparatorsVisibility();

  // Add event listeners
  completeBtn.addEventListener("click", function () {
    taskLabel.classList.toggle("completed");
    const completedList = document.getElementById("completed-list");
    if (taskLabel.classList.contains("completed")) {
      completedList.appendChild(li);
      completeBtn.textContent = "Move to Incomplete";
    } else {
      taskList.appendChild(li);
      completeBtn.textContent = "Mark as Complete";
    }
    updateHeadingsAndSeparatorsVisibility();
  });

  deleteBtn.addEventListener("click", function () {
    if (taskLabel.classList.contains("completed")) {
      const completedList = document.getElementById("completed-list");
      completedList.removeChild(li);
    } else {
      taskList.removeChild(li);
    }
    updateHeadingsAndSeparatorsVisibility();
  });
});
