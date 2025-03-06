import { AiFillStar } from 'react-icons/ai'
import { AddToList } from '../components'
import { useGlobalContext } from '../context'

const Movie = ({ movie, posterUrl }) => {
  const { title = 'Unknown Title', vote_average = 'N/A' } = movie
  const { addToMyList } = useGlobalContext()

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
      </div>
      <AddToList addToMyList={addToMyList} movie={movie} />
    </div>
  )
}

export default Movie
