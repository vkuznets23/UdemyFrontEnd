import { useState, useEffect, useCallback } from 'react'
const url = 'https://api.github.com/users'

const FetchData = () => {
  const [, setUsers] = useState([])
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(url)
      const users = await response.json()
      setUsers(users)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])
  // rest of the logic
}

export default FetchData
