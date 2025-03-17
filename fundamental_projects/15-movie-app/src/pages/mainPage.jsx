import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const urls = {
  trending: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&region=FI`,
}

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

const MainPage = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [randomMovies, setRandomMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

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

  if (isLoading) return <Loader />
  return (
    <div>
      <Slider randomMovies={randomMovies} />
      <Movies movies={popularMovies} title="What's popular" />
      <Movies movies={upcomingMovies} title="Upcoming movies" />
      <MyList />
    </div>
  )
}

export default MainPage
