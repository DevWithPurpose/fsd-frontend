import styles from './Page.module.css'

// This is a static placeholder page for the Community References tab
function CommunityReferences() {
  return (
    <div className={styles.page}>
      <h2>Community References</h2>
      <p>Neighbors who have vouched for you will appear here.</p>
    </div>
  )
}

export default CommunityReferences
