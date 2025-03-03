import React from 'react'

const Filter = React.memo(({ filter, setFilter }) => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search for movie..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </form>
  )
})

export default Filter
