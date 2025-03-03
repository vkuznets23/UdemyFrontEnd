import Movie from './Movie'
import Header from './Header'

const Movies = ({ movies, addToMyList, title }) => {
  return (
    <>
      <Header title={title} />
      <div className="movies">
        {movies.map((movie) => {
          const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

          return (
            <Movie
              key={movie.id}
              movie={movie}
              posterUrl={posterUrl}
              addToMyList={addToMyList}
            />
          )
        })}
      </div>
    </>
  )
}

export default Movies
