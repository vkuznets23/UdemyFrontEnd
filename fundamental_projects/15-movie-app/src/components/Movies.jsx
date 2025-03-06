import { Movie, Header } from '../components'

const Movies = ({ movies, title }) => {
  return (
    <>
      {title && <Header title={title} />}
      <div className="movies">
        {movies.map((movie) => {
          const posterUrl = movie?.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
            : 'https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?q=80&w=2884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

          return <Movie key={movie.id} movie={movie} posterUrl={posterUrl} />
        })}
      </div>
    </>
  )
}

export default Movies
