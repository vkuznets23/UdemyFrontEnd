import { useContext, createContext } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useLocalStorage from './hooks/useLocalStorage'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [myList, setMyList, removeItem] = useLocalStorage('myList', [])

  const addToMyList = (movie) => {
    if (!myList.some((m) => m.id === movie.id)) {
      setMyList((prev) => [...prev, movie])
      toast.success('Added film to wanna watch')
    } else {
      toast.error('Movie is already on the list')
    }
  }

  const handleDelete = (id) => {
    removeItem(id)
    toast.success('Movie deleted from wanna watch')
  }

  return (
    <AppContext.Provider
      value={{ addToMyList, handleDelete, myList, setMyList, removeItem }}
    >
      {children}
    </AppContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext)
}
