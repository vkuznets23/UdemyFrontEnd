import { useContext, createContext } from 'react'

const ThemeProviderContext = createContext<string | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProviderContext.Provider value="hello">
      {children}
    </ThemeProviderContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error('useTheme must be string')
  }
  return context
}
