import { useLoaderData, useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  const { id } = params
  const singleMovieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  try {
    const { data } = await axios.get(singleMovieURL)
    return data
  } catch (err) {
    console.error('Error fetching movie data:', err)
  }
}

const SingleMovie = () => {
  const movie = useLoaderData()

  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/`) // Navigate to movie details page
  }
  console.log('Rendering SingleMovie:', movie)
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
      />
      <button onClick={handleCardClick}>home</button>
    </div>
  )
}

export default SingleMovie
