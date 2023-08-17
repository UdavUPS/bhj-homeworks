const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const but = document.getElementById('tasks__add');
const input = document.getElementById('task__input');
let remBats = Array.from(document.querySelectorAll('.task__remove'));
console.log(remBats);

function delFun(){
    for (let i = 0; i < remBats.length; i++) {
        remBats[i].addEventListener('click', (event) => {
            //event.preventDefault();
            console.log(i);
            
        })
    }
}

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
    remBats = Array.from(document.querySelectorAll('.task__remove'));
    input.value = '';
    console.log(remBats);
    delFun()
}

function removeTask (num) {
    let mas = Array.from(document.querySelectorAll('.task'));
    mas[num].remove();
    remBats = Array.from(document.querySelectorAll('.task__remove'));
    delFun()
}


but.addEventListener('click', (event) => {
    event.preventDefault();
    addTask (input.value);
})


delFun();


/* 
a.addEventListener('click', () => console.log('Привет'))

for (let i = 0; i < remBats.length; i++) {
    remBats[i].addEventListener('click', (event) => {
        event.preventDefault();
        removeTask (i);
    })
} */

/* tasksList.addEventListener('click', () => {
    for (let i = 0; i < remBats.length; i++) {
        remBats[i].addEventListener('click', (event) => {
            event.preventDefault();
            removeTask (i);
        })
    }
}) */



