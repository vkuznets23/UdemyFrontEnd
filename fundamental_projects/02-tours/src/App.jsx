import { useEffect, useState } from 'react'
import Tours from './components/Tours'
import Button from './components/Button'
import Loading from './components/Loading'
import Title from './components/Title'

const url = 'https://www.course-api.com/react-tours-project'

const App = () => {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchTours = async () => {
    setIsLoading(true)
    try {
      const req = await fetch(url)
      const data = await req.json()
      setTours(data)
    } catch (err) {
      console.error('Error fetching tours:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title text="Our tours" />
          {tours.length > 0 ? (
            <Tours tours={tours} setTours={setTours} />
          ) : (
            <Button className="btn" onClick={fetchTours} text="refresh" />
          )}
        </>
      )}
    </main>
  )
}
export default App
