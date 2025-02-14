import { useEffect } from 'react'
import { useState } from 'react'
import JobInfo from './components/JobInfo'
import BtnContainer from './components/BtnContainer'

const url = 'https://www.course-api.com/react-tabs-project'

const App = () => {
  const [data, setData] = useState([])
  const [currentItem, setCurrentItem] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url)
      const data = await res.json()
      setData(data)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  if (isLoading) return <h2>loading...</h2>
  return (
    <main className="jobs-center">
      <BtnContainer data={data} setCurrentItem={setCurrentItem} />
      <JobInfo data={data} currentItem={currentItem} />
    </main>
  )
}
export default App
