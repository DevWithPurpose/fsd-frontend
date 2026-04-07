import styles from './Page.module.css'

// Static placeholder page for Privacy policy
function Privacy() {
  return (
    <div className={styles.page}>
      <h2>Privacy Policy</h2>
      <p>
        We take your privacy seriously. The Commons only collects information
        necessary to connect neighbors and improve community experiences. We
        never sell your data to third parties.
      </p>
    </div>
  )
}

export default Privacy
