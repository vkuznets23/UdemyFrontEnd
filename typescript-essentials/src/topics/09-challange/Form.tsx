import { useState } from 'react'
import { type Task } from './types'

type FormProps = {
  addTask: (task: Task) => void
}

const Form = ({ addTask }: FormProps) => {
  const [input, setInput] = useState('')

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim().length === 0) {
      alert(`task is empty, add something`)
      return
    }
    //add task
    const newTask: Task = {
      id: crypto.randomUUID(),
      description: input.trim(),
      isCompleted: false,
    }
    addTask(newTask)

    console.log(input)
    setInput('')
  }

  return (
    <form onSubmit={onSubmit} className="form">
      <input
        type="text"
        className="form-input"
        value={input.trim()}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn">
        add task
      </button>
    </form>
  )
}
export default Form
