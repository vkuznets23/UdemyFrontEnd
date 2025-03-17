import { AiFillStar } from 'react-icons/ai'
import { AddToList } from '../components'
import { useGlobalContext } from '../context'
import useTrailer from '../hooks/useFetchTrailers'
import { useNavigate } from 'react-router-dom'

const Movie = ({ movie, posterUrl }) => {
  const { title = 'Unknown Title', vote_average = 'N/A' } = movie
  const { addToMyList } = useGlobalContext()
  const trailerKey = useTrailer(movie.id)
  const navigate = useNavigate()

  const handleCardClick = () => {
    navigate(`/movie/${movie.id}`) // Navigate to movie details page
  }

  //styles
  const favStyle = { display: 'flex', alignItems: 'center', gap: '0.6rem' }

  return (
    <div className="movie">
      <img src={posterUrl} alt={title} style={{ height: '20rem' }} />
      <div className="card-content">
        <div style={favStyle}>
          <AiFillStar />
          <p>{Math.round(vote_average * 10) / 10}</p>
        </div>
        <h3>{title}</h3>
        {trailerKey && (
          <div>
            <button className="watch-list-btn">
              <a
                href={`https://www.youtube.com/watch?v=${trailerKey}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Trailer
              </a>
            </button>
            <button onClick={handleCardClick} style={{ cursor: 'pointer' }}>
              info
            </button>
          </div>
        )}
      </div>
      <AddToList addToMyList={addToMyList} movie={movie} />
    </div>
  )
}

export default Movie
