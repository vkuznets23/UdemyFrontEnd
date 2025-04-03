import { useEffect, useState } from 'react'
import './App.css'
import { type Book } from './types'
import Books from './components/Book'
import Header from './components/Header'
import FavBooks from './components/FavBooksList'

function loadFromLocalStorage() {
  const storedFavBooks = localStorage.getItem('fav-books')
  return storedFavBooks ? (JSON.parse(storedFavBooks) as Book[]) : []
}

function saveToLocalStorage(favBooks: Book[]) {
  localStorage.setItem('fav-books', JSON.stringify(favBooks))
}

function App() {
  const [books, setBooks] = useState<Book[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([])
  const [favBooks, setFavBooks] = useState<Book[]>(loadFromLocalStorage)

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
    if (favBooks.includes(newBook)) return
    const updatedFavList = [...favBooks, newBook]
    setFavBooks(updatedFavList)
    saveToLocalStorage(updatedFavList)
  }

  const deleteFromFav = (id: number) => {
    setFavBooks(
      favBooks.filter((book) => {
        return book.id !== id
      })
    )
  }

  return (
    <>
      <Header header="Books" />
      <input
        type="search"
        placeholder="book search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Books books={filteredBooks} addToFav={addToFav} />
      {favBooks.length > 0 && <Header header="Fav Books" />}
      <FavBooks favBooks={favBooks} deleteFromFav={deleteFromFav} />
    </>
  )
}

export default App
