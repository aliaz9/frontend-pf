import { Link } from 'react-router-dom'
import styles from '../styles/Card.module.css'

export default function Card ({ product }) {
  const { image, title, id, price } = product
  return (
    <div key={id} className={styles.card}>
        <Link to={`/product/${id}`}>
        <img src={image} alt={title} className={styles.image} />
        <h1 className={styles.title}>título{title}</h1>
        <p className={styles.price}>${price}</p>
        {/* <img src={score} alt="Rating" className={Style.score} /> */}
        <div className={styles.stars}>
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-regular fa-star" />
        </div>
      </Link>
    </div>
  )
}
