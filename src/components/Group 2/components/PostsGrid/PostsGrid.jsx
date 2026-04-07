import { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from '../PostCard/PostCard'
import styles from './PostsGrid.module.css'

function PostsGrid() {
  // cards will hold the list of posts we get from the fake API
  const [cards, setCards] = useState([])

  // loading is true while we are waiting for the data to arrive
  const [loading, setLoading] = useState(true)

  // error will hold a message if something goes wrong with the fetch
  const [error, setError] = useState(null)

  // useEffect runs once when the component first appears on the screen
  useEffect(() => {
    // We use an async function inside useEffect so we can use try/catch
    async function fetchCards() {
      try {
        const response = await axios.get('/data/cards.json')
        // If successful, save the cards array to state
        setCards(response.data)
      } catch  {
        setError('Failed to load posts. Please try again later.')
      } finally {
        // Whether it worked or failed, we stop showing the loading message
        setLoading(false)
      }
    }

    fetchCards()
  }, [])

  // Show a loading message while the data is being fetched
  if (loading) {
    return <p className={styles.loading}>Loading posts...</p>
  }

  // Show an error message on the UI if the fetch failed
  if (error) {
    return <p className={styles.error}>{error}</p>
  }

  // Once we have the data, render a PostCard for each item in the cards array
  return (
    <div className={styles.grid}>
      {cards.map((card) => (
        <PostCard key={card.id} card={card} />
      ))}
    </div>
  )
}

export default PostsGrid
