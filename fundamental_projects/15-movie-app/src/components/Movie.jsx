import { BsBookmarkPlusFill } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

const Movie = ({ movie, posterUrl, addToMyList }) => {
  const { title, id, vote_average, poster_path, release_date } = movie
  return (
    <div className="movie">
      <img src={posterUrl} alt={title} style={{ height: '20rem' }} />
      <div className="card-content">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <AiFillStar />
          <p style={{ padding: 0 }}>{Math.round(vote_average * 10) / 10}</p>
        </div>
        <h3>{title}</h3>
      </div>
      <button
        className="add-list-btn"
        onClick={() =>
          addToMyList({ id, title, poster_path, vote_average, release_date })
        }
      >
        <BsBookmarkPlusFill />
      </button>
    </div>
  )
}

export default Movie
