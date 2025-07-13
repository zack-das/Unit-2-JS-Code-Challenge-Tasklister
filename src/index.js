document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
  const listContainer = document.getElementById("list");
  const form = document.getElementById("create-task-form");

  const renderApp = () => (listContainer.innerHTML = taskList.render());

  // Add Form Behavior
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("due-date").value;
    
    if (taskDescription.trim() !== "") {
      const newTask = new TaskListItem(taskDescription, priority, dueDate);
      taskList.addTask(newTask);
      renderApp();
      form.reset(); 
    }
  });     


  listContainer.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
      const taskId = e.target.dataset.taskId;
      taskList.deleteTask(taskId);
      renderApp();
    }
  });

  renderApp();
});