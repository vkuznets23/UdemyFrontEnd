import { IoPlayCircleOutline } from 'react-icons/io5'
import { AddToList } from '../components'

const Slide = ({
  id,
  title,
  backdrop_path,
  poster_path,
  vote_average,
  release_date,
  addToMyList,
}) => {
  const imagePath = `https://image.tmdb.org/t/p/original${poster_path}`
  const backdropImagePath = `https://image.tmdb.org/t/p/original${backdrop_path}`
  return (
    <div className="slider-container">
      <div
        className="slider-slide"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 60%), url(${backdropImagePath})`,
          loading: 'lazy',
        }}
      >
        <div className="slider-content">
          <div className="img-container">
            <img src={imagePath} style={{ width: '150px', marginRight: 40 }} />
            <AddToList
              addToMyList={addToMyList}
              title={title}
              id={id}
              poster_path={poster_path}
              vote_average={vote_average}
              release_date={release_date}
            />
          </div>
          <div className="movie-card-play">
            <IoPlayCircleOutline size={90} />
            <div className="slide-text">
              <h4>{title}</h4>
              <p>Watch the new {title} Trailer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
