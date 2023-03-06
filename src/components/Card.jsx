import { Link } from 'react-router-dom'
import styles from '../styles/Card.module.css'
import Score from '../components/Score'

export default function Card({ product }) {
  // eslint-disable-next-line camelcase
  const { image, title, id, unit_price: price } = product
  return (
    <div key={id} className={styles.card}>
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} className={styles.image} />
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.price}>${price}</p>
        {/* <img src={score} alt="Rating" className={Style.score} /> */}
        {/* <div className={styles.stars}>
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-regular fa-star" />
        </div> */}
        <Score
          count={5}
          disabledStart={0}
          disabledOpinion={1}
          disabledNumber={0}
        />
      </Link>
    </div>
  )
}
