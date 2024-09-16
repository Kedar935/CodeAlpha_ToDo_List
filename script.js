const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');


addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.querySelector('.delete-btn').addEventListener('click', function() {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);

    taskInput.value = '';
});

taskInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTaskBtn.click();
    }
});
