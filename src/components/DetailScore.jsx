import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { searchUser } from '../helpers'
import styles from '../styles/DetailScore.module.css'
import Modal from '../components/Modal.jsx'
import Opinion from '../components/Opinion.jsx'

export default function DetailScore() {
  const [display, setDisplay] = useState(false)
  const { uid, name } = useSelector((state) => state.users.auth)
  const productInfo = useSelector((state) => state.products.product)
  const handleOpen = () => {
    setDisplay(!display)
  }
  return (
    <div>
      <div className={styles.headScore}>
        <hr className={styles.cardSeparator} />
        <h3>Opiniones del Producto</h3>
        <div>
          {(name && !searchUser(productInfo.reviews, uid)) &&
            <button onClick={handleOpen}>
              <i className="fa-solid fa-plus" />
              &nbsp; Mi Opinion
            </button>
          }
        </div>
      </div>
      {display && <Modal closeModal={setDisplay} />}
      <div className={styles.containerScore}>
        <Opinion />
      </div>
    </div>
  )
}
