import { IoPlayCircleOutline } from 'react-icons/io5'
import { AddToList } from '../components'
import { useGlobalContext } from '../context'

const getImagePath = (path, size = 'original') =>
  `https://image.tmdb.org/t/p/${size}${path}`

const Slide = ({ movie }) => {
  const { addToMyList } = useGlobalContext()
  const { poster_path, backdrop_path, title } = movie

  //styles
  const imgStyle = { width: '150px', marginRight: 40 }
  const bgImgStyle = {
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0) 60%), url(${getImagePath(
      backdrop_path
    )})`,
  }

  return (
    <div className="slider-container">
      <div className="slider-slide" style={bgImgStyle}>
        <div className="slider-content">
          <div className="img-container">
            <img
              src={getImagePath(poster_path)}
              alt={title}
              loading="lazy"
              style={imgStyle}
            />
            <AddToList addToMyList={addToMyList} movie={movie} />
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
