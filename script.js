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

// Other functions and event listeners remain unchanged

// Other functions and event listeners remain unchanged

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

  // Set the background color, border color, and pulsing box shadow of the list item and buttons based on the color toggle switch state
  const colorToggle = document.getElementById("color-toggle");
  if (colorToggle.checked) {
    li.style.backgroundColor = "white";
    li.style.borderColor = "#9c27b0";
    li.style.color = "#9c27b0";
    li.style.animationName = "pulse-purple";
    completeBtn.style.backgroundColor = "#9c27b0";
    completeBtn.style.color = "white";
    completeBtn.style.animationName = "pulse-purple";
    deleteBtn.style.backgroundColor = "#9c27b0";
    deleteBtn.style.color = "white";
    deleteBtn.style.animationName = "pulse-purple";
  } else {
    li.style.backgroundColor = "#222";
  }

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

// The rest of the code remains unchanged


// The rest of the code remains unchanged


// The rest of the code remains unchanged


const toggleColorScheme = () => {
  const colorToggle = document.getElementById("color-toggle");
  const taskInput = document.getElementById("task-input");

  if (colorToggle.checked) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#9c27b0";
    taskInput.style.backgroundColor = "white";
    document.querySelectorAll("input, button, li, li span.completed").forEach((elem) => {
      elem.style.borderColor = "#9c27b0";
      elem.style.color = "#9c27b0";
      elem.style.animationName = "pulse-purple";
    });
    document.querySelectorAll("button, button[type='submit']").forEach((elem) => {
      elem.style.backgroundColor = "#9c27b0";
      elem.style.color = "white";
    });
    document.querySelectorAll("li").forEach((elem) => {
      elem.style.backgroundColor = "white";
    });
  } else {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "#21ff00";
    taskInput.style.backgroundColor = "#222";
    document.querySelectorAll("input, button, li, li span.completed").forEach((elem) => {
      elem.style.borderColor = "#21ff00";
      elem.style.color = "#21ff00";
      elem.style.animationName = "pulse-green";
    });
    document.querySelectorAll("button, button[type='submit']").forEach((elem) => {
      elem.style.backgroundColor = "#21ff00";
      elem.style.color = "white";
    });
    document.querySelectorAll("li").forEach((elem) => {
      elem.style.backgroundColor = "#222";
    });
  }

  const separatorColor = colorToggle.checked ? "#9c27b0" : "white";
  document.querySelectorAll(".separator").forEach((separator) => {
    separator.style.backgroundColor = separatorColor;
  });
};



document.getElementById("color-toggle").addEventListener("change", toggleColorScheme);

