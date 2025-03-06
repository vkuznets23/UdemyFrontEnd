import Header from './Header'
import { useGlobalContext } from '../context'

const MyList = () => {
  const { myList, handleDelete } = useGlobalContext()

  console.log('myList:', myList)
  return (
    <>
      <Header title="Wanna watch" />
      <div className="my-list">
        {myList.length > 0 ? (
          myList.map(
            ({
              id,
              title = 'Unknown Title',
              vote_average = 'N/A',
              release_date = 'N/A',
              poster_path = 'https://plus.unsplash.com/premium_photo-1710961232986-36cead00da3c?q=80&w=2884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }) => {
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
