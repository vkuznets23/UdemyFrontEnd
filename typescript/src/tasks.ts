const taskForm = document.querySelector<HTMLFormElement>('.form')
const formInput = document.querySelector<HTMLInputElement>('.form-input')
const taskList = document.querySelector<HTMLUListElement>('.list')

type Task = {
  description: string
  isComlited: boolean
}

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks')
  return storedTasks ? JSON.parse(storedTasks) : []
}

let tasks: Task[] = loadTasks()
tasks.forEach(renderTask)

function createTask(e: SubmitEvent) {
  e.preventDefault()
  const taskDescription = formInput?.value
  if (taskDescription) {
    console.log(taskDescription)
    const task: Task = {
      description: taskDescription,
      isComlited: false,
    }
    //add task to list
    addTask(task)
    //render tasks
    renderTask(task)
    // update local storage
    updateStorage()
    formInput.value = ''
    return
  }
  alert('please enter value')
}

taskForm?.addEventListener('submit', (e) => {
  createTask(e)
})

function addTask(task: Task): void {
  tasks.push(task)
  console.log(tasks)
}

function renderTask(task: Task): void {
  const taskElement = document.createElement('li')
  taskElement.textContent = task.description
  //checkbox
  const taskCheckbox = document.createElement('input')
  taskCheckbox.type = 'checkbox'
  taskCheckbox.checked = task.isComlited

  taskCheckbox.addEventListener('change', () => {
    task.isComlited = !task.isComlited
    updateStorage()
  })

  taskElement.appendChild(taskCheckbox)
  taskList?.appendChild(taskElement)
}

function updateStorage(): void {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
