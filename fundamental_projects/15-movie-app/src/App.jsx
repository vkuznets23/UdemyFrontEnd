import { useCallback, useEffect, useState } from 'react'
import { Slider, Loader, MyList, Movies } from './components'
import axios from 'axios'
import useLocalStorage from './useLocalStorage'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const API_KEY = import.meta.env.VITE_API_KEY
const urls = {
  trending: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&region=FI`,
}

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

function App() {
  const [popularMovies, setPopularMovies] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [randomMovies, setRandomMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [myList, setMyList, removeItem] = useLocalStorage('myList', [])

  const fetchData = useCallback(async () => {
    try {
      const [trendingResponse, upcomingResponse] = await Promise.all([
        axios.get(urls.trending),
        axios.get(urls.upcoming),
      ])

      setPopularMovies(trendingResponse.data.results)
      setUpcomingMovies(upcomingResponse.data.results)

      const randomMovies = shuffleArray(trendingResponse.data.results)
      setRandomMovies(randomMovies.slice(0, 5))
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  const addToMyList = (movie) => {
    if (!myList.some((m) => m.id === movie.id)) {
      setMyList((prev) => [...prev, movie])
      toast.success('Added film to wanna watch')
    }
  }

  const handleDelete = (id) => {
    removeItem(id)
    toast.success('Movie deleted from wanna watch')
  }

  if (isLoading) return <Loader />
  return (
    <>
      <ToastContainer />
      <Slider randomMovies={randomMovies} />
      <Movies
        movies={popularMovies}
        addToMyList={addToMyList}
        title="What's popular"
      />
      <Movies
        movies={upcomingMovies}
        addToMyList={addToMyList}
        title="Upcoming movies"
      />
      <MyList myList={myList} handleDelete={handleDelete} />
    </>
  )
}

export default App
