import { useState } from 'react'
import { MdVerified } from 'react-icons/md'
import { FiEdit2, FiSettings } from 'react-icons/fi'
import { MdOutlineLocationOn } from 'react-icons/md'
import { BsCalendar3 } from 'react-icons/bs'
import EditProfileModal from '../EditProfileModal/EditProfileModal'
import SettingsModal from '../SettingsModal/SettingsModal'
import useProfile from '../../context/useProfile'
import styles from './ProfileHeader.module.css'

function ProfileHeader() {
  const { name, bio, communityImpact, impactError } = useProfile()
  const [showModal, setShowModal] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className={styles.profileHeader}>
      <div className={styles.left}>
        <div className={styles.avatarWrapper}>
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt={name}
            className={styles.avatar}
          />
          <span className={styles.verified}>
            <MdVerified size={13} /> Verified Neighbor
          </span>
        </div>
        <div className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.title}>ARCHITECT &amp; CARPENTER</p>
          <p className={styles.bio}>{bio}</p>
          <div className={styles.actions}>
            <button className={styles.editBtn} onClick={() => setShowModal(true)}>
              <FiEdit2 size={14} /> Edit Profile
            </button>
            <button className={styles.settingsBtn} onClick={() => setShowSettings(true)}>
              <FiSettings size={14} /> Settings
            </button>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <p className={styles.impactLabel}>COMMUNITY IMPACT</p>
        {/* Show error message if the community impact fetch failed */}
        {impactError ? (
          <p className={styles.error}>{impactError}</p>
        ) : communityImpact ? (
          <>
            <div className={styles.stats}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>{communityImpact.neighborsHelped}</span>
                <span className={styles.statText}>Neighbors Helped</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>{communityImpact.activePosts}</span>
                <span className={styles.statText}>Active Posts</span>
              </div>
            </div>
            <div className={styles.meta}>
              <p><MdOutlineLocationOn size={15} className={styles.metaIcon} /> {communityImpact.location}</p>
              <p><BsCalendar3 size={13} className={styles.metaIcon} /> Joined {communityImpact.joinedDate}</p>
            </div>
          </>
        ) : (
          <p className={styles.loading}>Loading...</p>
        )}
      </div>

      {showModal && (
        <EditProfileModal
          onClose={() => setShowModal(false)}
        />
      )}

      {showSettings && (
        <SettingsModal onClose={() => setShowSettings(false)} />
      )}
    </div>
  )
}

export default ProfileHeader
