import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [pageId, setPageId] = useState(null)

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  const openSidebar = () => {
    console.log('open')
    setIsSidebarOpen(true)
  }
  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
        closeSidebar,
        openSidebar,
        pageId,
        setPageId,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext)
}
