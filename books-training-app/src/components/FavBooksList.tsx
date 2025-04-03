import { type Book } from '../types'

type favBooksProps = {
  favBooks: Book[]
  deleteFromFav: (id: number) => void
}

const FavBooks = ({ favBooks, deleteFromFav }: favBooksProps) => {
  return (
    <div>
      {favBooks.map((favBook) => {
        return (
          <div key={favBook.id}>
            <h2>{favBook.title}</h2>
            <button onClick={() => deleteFromFav(favBook.id)}>delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default FavBooks
