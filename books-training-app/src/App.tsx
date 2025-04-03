import { useEffect, useState } from 'react'
import './App.css'
import { type Book } from './types'
import Books from './components/Book'

function App() {
  const [books, setBooks] = useState<Book[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
  const [favBooks, setFavBooks] = useState<Book[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('/db.json')
        if (!resp.ok) throw new Error('cant load data')
        const json = await resp.json()
        setBooks(json)
      } catch (err) {
        const msg = err instanceof Error ? err.message : 'smth went wrong'
        console.error(msg)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredBooks(books)
    } else {
      const filtered = books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          book.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredBooks(filtered)
    }
  }, [books, searchQuery])

  const addToFav = (newBook: Book) => {
    setFavBooks([...favBooks, newBook])
  }

  return (
    <>
      <h1> Book</h1>
      <input
        type="search"
        placeholder="book search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Books books={filteredBooks} addToFav={addToFav} />
      {favBooks.length > 0 && <h1>Fav Books</h1>}
      {favBooks.map((favBook) => {
        return <h2 key={favBook.id}>{favBook.title}</h2>
      })}
    </>
  )
}

export default App
