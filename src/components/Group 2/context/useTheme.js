import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

// Custom hook so any component can access theme and toggleTheme easily
function useTheme() {
  return useContext(ThemeContext)
}

export default useTheme
