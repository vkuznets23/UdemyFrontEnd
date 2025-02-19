import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { nanoid } from 'nanoid'
import Form from './components/Form'
import Items from './components/Items'

function App() {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem('items')) || []
  })

  const deleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId)
    setItems(updatedItems)
    toast.success('Item removed')
  }

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      completed: false,
      name: itemName,
    }
    setItems([...items, newItem])
    toast.success('item added to the list')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
  }

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} deleteItem={deleteItem} editItem={editItem} />
    </section>
  )
}

export default App
