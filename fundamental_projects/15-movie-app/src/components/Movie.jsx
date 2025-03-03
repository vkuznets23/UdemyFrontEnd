const Movie = ({ movie, posterUrl, addToMyList }) => {
  const { title, id, vote_average, release_date, poster_path } = movie
  return (
    <div className="movie">
      <img src={posterUrl} alt={title} style={{ height: '20rem' }} />
      <h3>{title}</h3>
      <p>{vote_average}</p>
      <p>{release_date}</p>
      <button
        onClick={() =>
          addToMyList({ id, title, poster_path, vote_average, release_date })
        }
      >
        add to the list
      </button>
    </div>
  )
}

export default Movie
