import { useState, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'

function ThemeProvider({ children }) {
  // Check localStorage first so the user's preference survives a refresh
  // If nothing is saved, we default to 'light'
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  )

  // Every time the theme changes, we update the data-theme attribute on <html>
  // This is what triggers the CSS variables to switch between light and dark
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  // This function flips between light and dark
  function toggleTheme() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
