import { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import useProfile from '../../context/useProfile'
import styles from './EditProfileModal.module.css'

function EditProfileModal({ onClose }) {
  const { name, bio, updateProfile } = useProfile()

  const [newName, setNewName] = useState(name)
  const [newBio, setNewBio] = useState(bio)

  function handleSave() {
    if (!newName.trim()) return
    updateProfile(newName, newBio)
    onClose()
  }

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>Edit Profile</h2>
          <IoCloseOutline size={24} className={styles.closeBtn} onClick={onClose} />
        </div>

        <div className={styles.field}>
          <label>Name</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>

        <div className={styles.field}>
          <label>Short Bio</label>
          <textarea
            rows={4}
            value={newBio}
            onChange={(e) => setNewBio(e.target.value)}
          />
        </div>

        <div className={styles.modalFooter}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button className={styles.saveBtn} onClick={handleSave}>Update</button>
        </div>
      </div>
    </div>
  )
}

export default EditProfileModal
