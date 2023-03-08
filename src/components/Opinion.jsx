import { useSelector } from 'react-redux'
import styles from '../styles/DetailScore.module.css'
import Score from './Score.jsx'
const Opinion = () => {
  const productInfo = useSelector((state) => state.products.product)
  return (

    productInfo.reviews.length
      ? productInfo.reviews.map((p, index) => {
        return (
          <div key={index}>
            <div className={styles.cardScore} >
              <div className={styles.cardHead}>
                <div>
                  <img
                    className={styles.cardImg}
                    src={p.image ? p.image : 'https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg'}
                    width="80"
                    alt="user"
                  />
                </div>
                <div className={styles.cardData}>
                  <h5>{p.name}</h5>
                  <p>@{p.name}</p>
                  <Score count={p.rating} disabledStart={0} disabledOpinion={1} />
                </div>
              </div>
              <hr className={styles.cardSeparator} />
              <div className={styles.cardBody}>
                <small>{p.reviews}</small>
              </div>
            </div>
          </div>)
      })
      : (
        <div>
          <p>&nbsp;&nbsp;Actualmente no se registraron opiniones</p>
        </div>
        )
  )
}

export default Opinion
