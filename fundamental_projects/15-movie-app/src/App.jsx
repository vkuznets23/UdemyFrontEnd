import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Movies from './components/Movies'
// import Filter from './components/Filter'
import { questions } from './data'
import Questions from './components/Questions'
import Slider from './components/Slider'
import Loader from './components/Loader'

const API_KEY = import.meta.env.VITE_API_KEY
const trendingURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`
const upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&region=FI`
const urls = { trending: trendingURL, upcoming: upcomingURL }

const shuffleArray = (array) => {
  let shuffled = [...array] // Make a copy of the array
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
  }
  return shuffled
}

function App() {
  const [popularMovies, setPopularMovies] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [randomMovies, setRandomMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [filter, setFilter] = useState('')
  const [myList, setMyList] = useState([])

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

  // const filteredMovies = popularMovies.filter((movie) =>
  //   movie.title.toLowerCase().includes(filter.toLowerCase())
  // )

  const addToMyList = (movie) => {
    if (!myList.some((m) => m.title === movie.title)) {
      setMyList((prev) => [...prev, movie])
    }
  }
  useEffect(() => {
    console.log('Updated myList:', myList)
  }, [myList])

  if (isLoading) return <Loader />
  return (
    <>
      <Slider randomMovies={randomMovies} />
      {/* <Filter filter={filter} setFilter={setFilter} /> */}
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
      <Questions questions={questions} />
      {myList.length > 0 ? (
        <Movies movies={myList} title="My list" />
      ) : (
        <div>
          <h1>My list</h1>
          <p>my list is empty</p>
        </div>
      )}
    </>
  )
}

export default App
