import { GoDotFill } from 'react-icons/go'
import { HiArrowRight } from 'react-icons/hi'
import styles from './PostCard.module.css'

const categoryBg = (category) => {
  if (category === 'Tool Library') return { backgroundColor: '#dcfce7', color: '#166534' }
  if (category === 'Garden Consultation') return { backgroundColor: '#dbeafe', color: '#1e40af' }
  if (category === 'Planning Permission') return { backgroundColor: '#fef9c3', color: '#854d0e' }
  return {}
}

function PostCard({ card }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.category} style={categoryBg(card.category)}>{card.category}</span>
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
