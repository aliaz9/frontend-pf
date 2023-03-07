import { Link } from 'react-router-dom'
import styles from '../styles/Card.module.css'
import Score from '../components/Score'

export default function Card({ product }) {
  // eslint-disable-next-line camelcase
  const { image, title, id, unit_price: price, typeName, rating } = product
  return (
    <div key={id} className={styles.card}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className={styles.image} />
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.price}>${price}</p>
        <p className={styles.price}>{typeName}</p>
        <Score
          count={rating}
          disabledStart={0}
          disabledOpinion={1}
          disabledNumber={0}
        />
      </Link>
    </div>
  )
}
