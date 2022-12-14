const tasksEl = document.getElementById('tasks')

function addTask(task,taskInfo) {
    const taskEl = document.createElement('div')
    taskEl.classList.add('task-card')

    taskEl.innerHTML = `
        <h2>${task}</h2>
        <p>${taskInfo}</p>
    `

    tasksEl.appendChild(taskEl)
}

const formEl = document.getElementById('toDoListForm')
formEl.addEventListener('submit', (event) => {
    event.preventDefault()

    let taskInput = document.getElementsByName('task')[0]
    let taskInfoInput = document.getElementsByName('taskInfo')[0]

    addTask(taskInput.value, taskInfoInput.value)

    taskInput.value = ''
    taskInfoInput.value = ''
})

const clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', (event) => {
    tasksEl.innerHTML = ''
})