import { useState } from 'react'

const Form = ({ addColor }) => {
  const [color, setColor] = useState('#e3c24b')

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }
  return (
    <div className="container">
      <h4>Color Generator</h4>
      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          name="text"
          placeholder="#e3c24b"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button className="btn" type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </div>
  )
}

export default Form
