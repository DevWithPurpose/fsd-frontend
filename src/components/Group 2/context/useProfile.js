import { useContext } from 'react'
import { ProfileContext } from './ProfileContext'

function useProfile() {
  return useContext(ProfileContext)
}

export default useProfile
