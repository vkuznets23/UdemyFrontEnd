import { AiFillStar } from 'react-icons/ai'
import { AddToList } from '../components'

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
      <AddToList
        addToMyList={addToMyList}
        title={title}
        id={id}
        poster_path={poster_path}
        vote_average={vote_average}
        release_date={release_date}
      />
    </div>
  )
}

export default Movie
