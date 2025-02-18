import { useState } from 'react'

const ControlledInputs = () => {
  const [form, setForm] = useState({ name: '', email: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          id="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-input"
          id="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-block">
        submit
      </button>
    </form>
  )
}

export default ControlledInputs
