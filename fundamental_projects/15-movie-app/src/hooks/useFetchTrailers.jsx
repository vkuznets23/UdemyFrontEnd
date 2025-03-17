import axios from 'axios'
import { useState, useEffect } from 'react'

const API_KEY = import.meta.env.VITE_API_KEY

const fetchMovieTrailers = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    )
    const trailers = response.data.results.filter(
      (video) => video.type === 'Trailer'
    )
    if (trailers.length > 0) {
      return trailers[0].key // Return the trailer key
    }
    return null
  } catch (error) {
    console.error('Error fetching trailers:', error)
    return null
  }
}

const useTrailer = (movieId) => {
  const [trailerKey, setTrailerKey] = useState(null)

  useEffect(() => {
    const fetchTrailer = async () => {
      const key = await fetchMovieTrailers(movieId)
      setTrailerKey(key)
    }

    fetchTrailer()
  }, [movieId])

  return trailerKey
}

export default useTrailer
