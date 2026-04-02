import { useState, useEffect } from 'react'
import axios from 'axios'
import { ProfileContext } from './ProfileContext'

function ProfileProvider({ children }) {

  // We check localStorage first so the name and bio survive a page refresh.
  // If nothing is saved yet, we fall back to the default values.
  const [name, setName] = useState(
    () => localStorage.getItem('profileName') || 'User'
  )
  const [bio, setBio] = useState(
    () => localStorage.getItem('profileBio') || 'Bio'
  )

  // communityImpact will hold the data we get back from the fake API
  const [communityImpact, setCommunityImpact] = useState(null)

  // This state will hold any error message if the API call fails
  const [impactError, setImpactError] = useState(null)

  // useEffect runs once when the app loads to fetch the community impact data
  useEffect(() => {
    // We wrap the axios call in an async function so we can use try/catch
    async function fetchCommunityImpact() {
      try {
        const response = await axios.get('/data/communityImpact.json')
        // If the request is successful, save the data to state
        setCommunityImpact(response.data)
      } catch {
        // If something goes wrong, save the error message to state
        // so we can show it on the UI instead of just logging it
        setImpactError('Failed to load community impact data. Please try again later.')
      }
    }

    fetchCommunityImpact()
  }, [])

  // This function is called when the user clicks "Update" in the edit modal.
  // It updates the state and also saves to localStorage so changes survive a refresh.
  function updateProfile(newName, newBio) {
    setName(newName)
    setBio(newBio)
    localStorage.setItem('profileName', newName)
    localStorage.setItem('profileBio', newBio)
  }

  // We pass everything down through context so any component can access it
  // without needing to pass props manually through every level
  return (
    <ProfileContext.Provider value={{ name, bio, communityImpact, impactError, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileProvider
