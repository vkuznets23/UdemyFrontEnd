import { useEffect } from 'react'
import axios from 'axios'

const productsUrl = 'https://www.course-api.com/react-store-products'
const randomUserUrl = 'https://randomuser.me/api'

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const res1 = await axios(productsUrl)
      const res2 = await axios(randomUserUrl)
      console.log(res1, res2)
    } catch (err) {
      console.log(err.res1)
      console.log(err.res2)
    }
    console.log('global axios instance')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">global instance</h2>
}
export default GlobalInstance
