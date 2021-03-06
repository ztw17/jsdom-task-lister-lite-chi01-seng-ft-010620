document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let tasks = document.getElementById('tasks');
    let userInput = event.target.children[1].value;
    let createNewNode = document.createElement("li");
    createNewNode.innerText = userInput;
    tasks.appendChild(createNewNode);
      taskForm.reset();

    let button = document.createElement("BUTTON");
    button.innerHTML = "X";
    createNewNode.appendChild(button);
    button.addEventListener("click", function () {
      createNewNode.remove();
    })
  })
});

// let button = document.createElement("BUTTON");
// let buttonChild = createNewNode.appendChild(button);
// buttonChild.innerHTML = "X";
// createNewNode.remove()