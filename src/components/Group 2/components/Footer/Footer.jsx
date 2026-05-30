import { NavLink } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>The Commons</div>

      {/* Each link routes to its own static page */}
      <div className={styles.links}>
        <NavLink to="/privacy" className={styles.link}>Privacy</NavLink>
        <NavLink to="/guidelines" className={styles.link}>Guidelines</NavLink>
        <NavLink to="/support" className={styles.link}>Support</NavLink>
      </div>

      <div className={styles.copy}>© {new Date().getFullYear()} The Commons Platform. Built for neighbors.</div>
    </footer>
  )
}

export default Footer
