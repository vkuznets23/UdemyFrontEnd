import { useState } from 'react'

const SearchForm = () => {
  const [search, setSearch] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="form-input search-input"
          name="search"
          value={search}
          placeholder="cat"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
