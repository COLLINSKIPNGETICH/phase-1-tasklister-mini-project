document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get the task description from the input field
    const taskDescription = document.getElementById('new-task-description').value;

    // Validate if the task description is not empty
    if (taskDescription.trim() !== '') {
      // Create a new task element (e.g., list item)
      const newTask = document.createElement('li');
      newTask.textContent = taskDescription;

      // Append the new task element to the task list
      taskList.appendChild(newTask);

      // Clear the input field for the next task
      document.getElementById('new-task-description').value = '';
    }
  });


});
});
