import Header from './Header'

const MyList = ({ myList, handleDelete }) => {
  return (
    <>
      <Header title="Wanna watch" />
      <div className="my-list">
        {myList.length > 0 ? (
          myList.map(
            ({ id, title, vote_average, release_date, poster_path }) => {
              const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`
              return (
                <div key={id}>
                  <img
                    src={posterUrl}
                    alt={title}
                    style={{ height: '20rem' }}
                  />
                  <h3>{title}</h3>
                  <p>{vote_average}</p>
                  <p>{release_date}</p>
                  <button onClick={() => handleDelete(id)}>delete</button>
                </div>
              )
            }
          )
        ) : (
          <p> list is empty</p>
        )}
      </div>
    </>
  )
}

export default MyList
