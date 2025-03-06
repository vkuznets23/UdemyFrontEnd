import { useState } from 'react'
import { Movies } from '../components'

const Filter = ({ allMovies }) => {
  const [search, setSearch] = useState('')
  const [focus, setFocus] = useState(false)

  const movie = allMovies.filter((movie) =>
    movie?.title?.toLowerCase().includes(search.toLowerCase())
  )

  const handleBlur = () => {
    setTimeout(() => setFocus(false), 100)
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={search}
          onFocus={() => setFocus(true)}
          onBlur={handleBlur}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie..."
        />
      </form>
      {movie.length > 0 && focus && <Movies movies={movie} />}
      {movie.length === 0 && focus && <p>No matching result</p>}
    </div>
  )
}

export default Filter
