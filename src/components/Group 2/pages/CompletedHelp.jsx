import styles from './Page.module.css'

// This is a static placeholder page for the Completed Help tab
function CompletedHelp() {
  return (
    <div className={styles.page}>
      <h2>Completed Help</h2>
      <p>You have successfully helped 12 neighbors so far. Great work!</p>
    </div>
  )
}

export default CompletedHelp
