import { useContext, createContext, useState, useEffect } from 'react'

const AppContext = createContext()

const darkMode = () => {
  const preferableMode = window.matchMedia(
    '(preferes-color-scheme:dark)'
  ).matches
  const storedMode = localStorage.getItem('darkTheme')
  if (storedMode === null) {
    return preferableMode
  }
  return storedMode === 'true'
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(darkMode())
  const [searchTerm, setSearchTerm] = useState('dog')

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme)
    localStorage.setItem('darkTheme', !isDarkTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext)
}
