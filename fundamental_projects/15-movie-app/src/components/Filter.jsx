import { useState } from 'react'
import { Movies } from '../components'

const Filter = ({ allMovies }) => {
  const [search, setSearch] = useState('')
  const movie = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a movie..."
        />
      </form>
      {search && <Movies movies={movie} />}
    </div>
  )
}

export default Filter
