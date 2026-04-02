import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import styles from './SettingsModal.module.css'

function SettingsModal({ onClose }) {
  // Each setting has its own state so the user can toggle them independently
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [profileVisible, setProfileVisible] = useState(true)
  const [showLocation, setShowLocation] = useState(true)

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>

        <div className={styles.modalHeader}>
          <h2>Settings</h2>
          <IoCloseOutline size={24} className={styles.closeBtn} onClick={onClose} />
        </div>

        {/* Notifications section */}
        <div className={styles.section}>
          <p className={styles.sectionTitle}>NOTIFICATIONS</p>
          <div className={styles.settingRow}>
            <div>
              <p className={styles.settingLabel}>Email Notifications</p>
              <p className={styles.settingDesc}>Receive updates about your posts via email</p>
            </div>
            {/* Toggle switch — clicking it flips the boolean state */}
            <div
              className={`${styles.toggle} ${emailNotifications ? styles.toggleOn : ''}`}
              onClick={() => setEmailNotifications(!emailNotifications)}
            >
              <div className={styles.toggleThumb} />
            </div>
          </div>
        </div>

        {/* Privacy section */}
        <div className={styles.section}>
          <p className={styles.sectionTitle}>PRIVACY</p>
          <div className={styles.settingRow}>
            <div>
              <p className={styles.settingLabel}>Public Profile</p>
              <p className={styles.settingDesc}>Let other neighbors find and view your profile</p>
            </div>
            <div
              className={`${styles.toggle} ${profileVisible ? styles.toggleOn : ''}`}
              onClick={() => setProfileVisible(!profileVisible)}
            >
              <div className={styles.toggleThumb} />
            </div>
          </div>
          <div className={styles.settingRow}>
            <div>
              <p className={styles.settingLabel}>Show Location</p>
              <p className={styles.settingDesc}>Display your community name on your profile</p>
            </div>
            <div
              className={`${styles.toggle} ${showLocation ? styles.toggleOn : ''}`}
              onClick={() => setShowLocation(!showLocation)}
            >
              <div className={styles.toggleThumb} />
            </div>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.closeFooterBtn} onClick={onClose}>Close</button>
        </div>

      </div>
    </div>
  )
}

export default SettingsModal
