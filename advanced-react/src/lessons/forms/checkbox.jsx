import { useState } from 'react'

const initialTasks = [
  { id: 1, task: 'do blinis', isDone: false },
  { id: 2, task: 'get some rest', isDone: false },
  { id: 3, task: 'watch "Office"', isDone: false },
]

const CheckBox = () => {
  const [tasks, setTasks] = useState(initialTasks)

  const handleIsDone = (id) => {
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, isDone: !task.isDone } : task
      })
    )
  }

  return (
    <>
      {tasks.map(({ task, id, isDone }) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '8px',
            }}
            key={id}
          >
            <input
              type="checkbox"
              checked={isDone}
              onChange={() => handleIsDone(id)}
            />
            <p style={{ margin: 0 }}> {task}</p>
          </div>
        )
      })}
    </>
  )
}

export default CheckBox
