import { useCallback, useEffect, useState } from 'react'
import { Slider, Loader, MyList, Movies, Filter } from './components'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SingleMovie from './pages/singleMovie'

const API_KEY = import.meta.env.VITE_API_KEY
const urls = {
  trending: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&region=FI`,
}

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5)
}

const HomeLayout = () => {
  const [popularMovies, setPopularMovies] = useState([])
  const [upcomingMovies, setUpcomingMovies] = useState([])
  const [randomMovies, setRandomMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const allMovies = [...popularMovies, ...upcomingMovies]

  const uniqueMovies = allMovies.reduce((acc, movie) => {
    if (!acc.find((m) => m.id === movie.id)) {
      acc.push(movie)
    }
    return acc
  }, [])

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
    <>
      <Filter allMovies={uniqueMovies} />
      <Slider randomMovies={randomMovies} />
      <Movies movies={popularMovies} title="What's popular" />
      <Movies movies={upcomingMovies} title="Upcoming movies" />
      <MyList />
    </>
  )
}

import { loader as singleMovieLoader } from './pages/singleMovie'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/movie/:id',
    loader: singleMovieLoader,
    element: <SingleMovie />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
