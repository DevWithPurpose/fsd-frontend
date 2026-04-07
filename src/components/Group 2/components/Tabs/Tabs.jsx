import { NavLink } from 'react-router-dom'
import styles from './Tabs.module.css'

// Each tab links to its own route using NavLink.
// NavLink automatically adds an "active" class when the route matches.
function Tabs() {
  return (
    <div className={styles.tabs}>
      <NavLink
        to="/profile"
        className={({ isActive }) => isActive ? `${styles.tab} ${styles.active}` : styles.tab}
      >
        Active Posts
      </NavLink>
      <NavLink
        to="/profile/completed-help"
        className={({ isActive }) => isActive ? `${styles.tab} ${styles.active}` : styles.tab}
      >
        Completed Help
      </NavLink>
      <NavLink
        to="/profile/community-references"
        className={({ isActive }) => isActive ? `${styles.tab} ${styles.active}` : styles.tab}
      >
        Community References
      </NavLink>
    </div>
  )
}

export default Tabs
