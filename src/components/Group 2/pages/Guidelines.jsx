import styles from './Page.module.css'

// Static placeholder page for Community Guidelines
function Guidelines() {
  return (
    <div className={styles.page}>
      <h2>Community Guidelines</h2>
      <p>
        The Commons is built on trust and respect. Be kind, be helpful, and
        always treat your neighbors the way you would want to be treated.
        Harassment or spam of any kind will not be tolerated.
      </p>
    </div>
  )
}

export default Guidelines
