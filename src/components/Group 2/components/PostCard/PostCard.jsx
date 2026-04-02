import { GoDotFill } from 'react-icons/go'
import { HiArrowRight } from 'react-icons/hi'
import styles from './PostCard.module.css'

function PostCard({ card }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.category}>{card.category}</span>
        <span className={styles.status}><GoDotFill size={10} /> {card.status}</span>
      </div>
      <h3 className={styles.title}>{card.title}</h3>
      <p className={styles.description}>{card.description}</p>
      <div className={styles.cardFooter}>
        <span className={styles.responses}>{card.responses} RESPONSES</span>
        <HiArrowRight size={18} className={styles.arrow} />
      </div>
    </div>
  )
}

export default PostCard
