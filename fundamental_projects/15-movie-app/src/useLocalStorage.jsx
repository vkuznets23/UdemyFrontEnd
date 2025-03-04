import { useState, useEffect } from 'react'

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const savedList = localStorage.getItem(key)
      return savedList ? JSON.parse(savedList) : initialValue
    } catch (err) {
      console.error('Error reading from localStorage', err)
      return initialValue
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.error('Error writing to localStorage:', err)
    }
  }, [key, value])

  const removeItem = (id) => {
    try {
      const updatedList = value.filter((item) => item.id !== id)
      setValue(updatedList)
      localStorage.setItem(key, JSON.stringify(updatedList))
    } catch (err) {
      console.error('Error removing from localStorage:', err)
    }
  }

  return [value, setValue, removeItem]
}

export default useLocalStorage
