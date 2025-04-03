import { type Book } from '../types'

type booksProps = {
  books: Book[]
  addToFav: (newBook: Book) => void
}

const Books = ({ books, addToFav }: booksProps) => {
  const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  }

  const imgStyle = { width: '150px', marginRight: '20px' }
  return books.map((book) => {
    return (
      <div key={book.id} style={cardStyle}>
        <img src={book.cover} style={imgStyle} />
        <div style={{ textAlign: 'left' }}>
          <h2>{book.title}</h2>
          <h4>{book.author}</h4>
          <p>{book.genre}</p>
          <p>{book.year}</p>
          <button onClick={() => addToFav(book)}> add to fav</button>
        </div>
      </div>
    )
  })
}

export default Books
