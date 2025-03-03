const Slide = ({
  title,
  backdrop_path,
  handleNext,
  handlePrev,
  poster_path,
}) => {
  const imagePath = `https://image.tmdb.org/t/p/original${poster_path}`
  const backdropImagePath = `https://image.tmdb.org/t/p/original${backdrop_path}`
  return (
    <div className="slider-container">
      <div
        className="slider-slide"
        style={{
          backgroundImage: `url(${backdropImagePath})`,
        }}
      >
        <div className="slider-content">
          <img src={imagePath} style={{ width: '150px' }} />
          <div className="slide-text">
            <h4>{title}</h4>
            <p>Watch the new {title} Trailer</p>
          </div>
        </div>
        <div className="buttons">
          <button onClick={handlePrev}>prev</button>
          <button onClick={handleNext}>next</button>
        </div>
      </div>
    </div>
  )
}

export default Slide
