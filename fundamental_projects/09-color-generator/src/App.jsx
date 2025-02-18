import Form from './components/Form'
import ColorList from './components/ColorList'
import Values from 'values.js'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

function App() {
  const [colors, setColors] = useState(new Values('#e3c24b').all(10))
  const addColor = (color) => {
    try {
      let newColor = new Values(color).all(10)
      setColors(newColor)
    } catch (err) {
      toast.error(err.message)
    }
  }
  return (
    <main>
      <ToastContainer position="top-center" />
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  )
}

export default App
