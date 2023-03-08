import React, { useState } from 'react'
import styles from '../styles/DetailScore.module.css'
import Modal from './Modal'
import Opinion from './Opinion.jsx'

export default function DetailScore() {
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
          <button onClick={() => handleOpen(true)}>
            <i className="fa-solid fa-plus" />
            &nbsp; Mi Opinion
          </button>
        </div>
      </div>
      {display && <Modal closeModal={setDisplay} />}
      <div className={styles.containerScore}>
        <Opinion />
      </div>
    </div>
  )
}
