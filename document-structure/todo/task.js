const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const but = document.getElementById('tasks__add');
const input = document.getElementById('task__input');


function addTask (taskText) {
    let taskElementSell = document.createElement ('div');
    taskElementSell.classList.add('task');
    let taskElement = document.createElement ('div');
    taskElement.classList.add('task__title');
    let removeElement = document.createElement ('a');
    removeElement.classList.add('task__remove');
    taskElement.innerHTML = taskText;
    removeElement.href = '#';
    removeElement.innerHTML = '&times';
    taskElementSell.appendChild(taskElement);
    taskElementSell.appendChild(removeElement);
    tasksList.appendChild(taskElementSell);
    input.value = '';
}

but.addEventListener('click', (event) => {
    event.preventDefault();
    addTask (input.value);
})

tasksList.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.value == 'task__remove') {
        event.target.parentElement.remove();
    }
})

