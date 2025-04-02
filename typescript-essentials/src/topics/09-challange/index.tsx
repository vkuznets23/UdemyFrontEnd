import { useEffect, useState } from 'react'
import Form from './Form'
import List from './List'
import { type Task } from './types'

function loadTasks(): Task[] {
  const storedTasks = localStorage.getItem('tasks')
  return storedTasks ? JSON.parse(storedTasks) : []
}

const Component = () => {
  const [tasks, setTasks] = useState<Task[]>(loadTasks)

  const addTask = (task: Task) => {
    setTasks([...tasks, task])
  }

  const toggleTask = ({ id }: { id: string }) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted }
        }
        return task
      })
    )
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  console.log(tasks)

  return (
    <>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </>
  )
}

export default Component
