import { useState } from 'react'
type Person = {
  name: string
}

function Component() {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // to get data without use of useState
    const formData = new FormData(e.currentTarget)
    // const formData = new FormData(e.target as HTMLFormElement)
    const text = formData.get('text') as string //cos it mb null as well
    const person: Person = { name: text }
    console.log('name', person)

    setText('')
    setEmail('')
  }

  return (
    <section>
      <h2>events example</h2>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          className="form-input mb-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          name="text"
        />
        <input
          type="email"
          className="form-input mb-1"
          value={email}
          onChange={handleChange}
          name="email"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </section>
  )
}
export default Component
