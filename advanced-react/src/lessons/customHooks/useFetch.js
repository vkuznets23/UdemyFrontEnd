import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(url)
        setData(data)
      } catch (err) {
        setIsError(true)
        console.log(err)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [url])

  return { data, isLoading, isError }
}

export default useFetch
