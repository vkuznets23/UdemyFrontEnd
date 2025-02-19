import { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!inputValue.trim() || inputValue.length > 100) {
      toast.error('please provide value')
      return
    }
    addItem(inputValue)
    setInputValue('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          name="item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit" className="btn">
          submit
        </button>
      </div>
    </form>
  )
}

export default Form
