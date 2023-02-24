import React, { useState } from 'react'
import Score from '../components/Score'
import styles from '../styles/DetailScore.module.css'
import Modal from './Modal'

export default function DetailScore () {
  const [display, setDisplay] = useState(false)
  const handleOpen = () => {
    if (display) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }
  return (
        <div>
            <div className={styles.headScore}>
            <hr className={styles.cardSeparator} />
                <h3>Opiniones del Producto</h3>
                <div>
                    <button onClick={ () => handleOpen(true)}>
                        <i className="fa-solid fa-plus"></i>
                        &nbsp;
                        Mi Opinion
                    </button>
                </div>
            </div>
            {display && <Modal closeModal= { setDisplay } />}
            <div className={styles.containerScore}>
                <div className={styles.cardScore}>
                    <div className={styles.cardHead}>
                        <div>
                            <img className={styles.cardImg} src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" width="80" alt="user" />
                        </div>
                        <div className={styles.cardData}>
                            <h5>Salvador Yepes</h5>
                            <p>@salvador-yepes</p>
                            <Score count='4' disabled={1} />
                        </div>
                    </div>
                    <hr className={styles.cardSeparator} />
                    <div className={styles.cardBody}>
                        <small>
                            Muy buen curso, Oscar explica muy bien todos los conceptos y ya los estoy aplicando en mi trabajo.
                        </small>
                    </div>
                </div>
                <div className={styles.cardScore}>
                    <div className={styles.cardHead}>
                        <div>
                            <img className={styles.cardImg} src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" width="80" alt="user" />
                        </div>
                        <div className={styles.cardData}>
                            <h5>Salvador Yepes</h5>
                            <p>@salvador-yepes</p>
                            <Score count='4' disabled={1} />
                        </div>
                    </div>
                    <hr className={styles.cardSeparator} />
                    <div className={styles.cardBody}>
                        <small>
                            Muy buen curso, Oscar explica muy bien todos los conceptos y ya los estoy aplicando en mi trabajo.
                        </small>
                    </div>
                </div>
                <div className={styles.cardScore}>
                    <div className={styles.cardHead}>
                        <div>
                            <img className={styles.cardImg} src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" width="80" alt="user" />
                        </div>
                        <div className={styles.cardData}>
                            <h5>Salvador Yepes</h5>
                            <p>@salvador-yepes</p>
                            <Score count='4' disabled={1} />
                        </div>
                    </div>
                    <hr className={styles.cardSeparator} />
                    <div className={styles.cardBody}>
                        <small>
                            Muy buen curso, Oscar explica muy bien todos los conceptos y ya los estoy aplicando en mi trabajo.
                        </small>
                    </div>
                </div>
                <div className={styles.cardScore}>
                    <div className={styles.cardHead}>
                        <div>
                            <img className={styles.cardImg} src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" width="80" alt="user" />
                        </div>
                        <div className={styles.cardData}>
                            <h5>Salvador Yepes</h5>
                            <p>@salvador-yepes</p>
                            <Score count='4' disabled={1} />
                        </div>
                    </div>
                    <hr className={styles.cardSeparator} />
                    <div className={styles.cardBody}>
                        <small>
                            Muy buen curso, Oscar explica muy bien todos los conceptos y ya los estoy aplicando en mi trabajo.
                        </small>
                    </div>
                </div>
                <div className={styles.cardScore}>
                    <div className={styles.cardHead}>
                        <div>
                            <img className={styles.cardImg} src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" width="80" alt="user" />
                        </div>
                        <div className={styles.cardData}>
                            <h5>Salvador Yepes</h5>
                            <p>@salvador-yepes</p>
                            <Score count='4' disabled={1} />
                        </div>
                    </div>
                    <hr className={styles.cardSeparator} />
                    <div className={styles.cardBody}>
                        <small>
                            Muy buen curso, Oscar explica muy bien todos los conceptos y ya los estoy aplicando en mi trabajo.
                        </small>
                    </div>
                </div>
                <div className={styles.cardScore}>
                    <div className={styles.cardHead}>
                        <div>
                            <img className={styles.cardImg} src="https://static.vecteezy.com/system/resources/previews/002/275/847/non_2x/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg" width="80" alt="user" />
                        </div>
                        <div className={styles.cardData}>
                            <h5>Salvador Yepes</h5>
                            <p>@salvador-yepes</p>
                            <Score count='4' disabled={1} />
                        </div>
                    </div>
                    <hr className={styles.cardSeparator} />
                    <div className={styles.cardBody}>
                        <small>
                            Muy buen curso, Oscar explica muy bien todos los conceptos y ya los estoy aplicando en mi trabajo.
                        </small>
                    </div>
                </div>
            </div>

        </div>
  )
}
