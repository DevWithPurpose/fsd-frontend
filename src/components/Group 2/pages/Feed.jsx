import styles from './Page.module.css'

// Static placeholder page for the Feed section
function Feed() {
  return (
    <div className={styles.page}>
      <h2>Feed</h2>
      <p>Latest posts from your community will appear here.</p>
    </div>
  )
}

export default Feed
