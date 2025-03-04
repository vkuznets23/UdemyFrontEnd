const Slide = ({ title, backdrop_path, poster_path }) => {
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
          <img src={imagePath} style={{ width: '150px' }} />
          <div className="slide-text">
            <h4>{title}</h4>
            <p>Watch the new {title} Trailer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
