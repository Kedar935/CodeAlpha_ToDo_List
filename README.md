# CodeAlpha_ToDo_List

HTML Structure:
Container: The entire app is wrapped in a container for styling and alignment purposes.
Input Section: The input field (taskInput) allows users to type in their tasks. The button (addTaskBtn) adds the task to the list when clicked.
Task List: The ul element (taskList) holds the list of tasks, which will be dynamically generated.

CSS Styling:
Responsive Design: The layout is designed to be centered on the page, with a maximum width of 400px.
Styling Tasks: Each task is displayed in a flexbox layout, with a "Delete" button on the right. Completed tasks are marked with a line-through.
Buttons: Styled for interactivity with hover effects for better user experience.

JavaScript Functionality:
Add Task: When the "Add Task" button is clicked, the text in the input field is used to create a new list item (li).
If the input is empty, an alert prompts the user to enter a task.
The task is then appended to the task list.
Mark as Completed: Clicking on the task itself (not the delete button) toggles the completed class, which applies the strikethrough effect to indicate that the task is finished.
Delete Task: Clicking the "Delete" button removes the task from the list.
Keyboard Interaction: The user can press the "Enter" key to add tasks without needing to click the button.
