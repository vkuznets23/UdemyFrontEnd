import { useContext, createContext, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

type ThemeProvider = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

type ThemeProbiderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
}

const ThemeProviderContext = createContext<ThemeProvider | undefined>(undefined)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
}: ThemeProbiderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme }}>
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
