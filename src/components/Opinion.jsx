import styles from '../styles/DetailScore.module.css'
import Score from './Score.jsx'
const Opinion = () => {
  return (
    <div className={styles.cardScore}>
      <div className={styles.cardHead}>
        <div>
          <img
            className={styles.cardImg}
            src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            width="80"
            alt="user"
          />
        </div>
        <div className={styles.cardData}>
          <h5>Salvador Yepes</h5>
          <p>@salvador-yepes</p>
          <Score count="2" disabledStart={0} disabledOpinion={1} />
        </div>
      </div>
      <hr className={styles.cardSeparator} />
      <div className={styles.cardBody}>
        <small>
          Muy buen producto, supero todas mis expectativas, lo recomiendo a
          todos que desean adquirir este producto.
        </small>
      </div>
    </div>
  )
}

export default Opinion
