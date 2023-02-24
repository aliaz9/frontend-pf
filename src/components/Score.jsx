import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/Score.module.css'
import DetailScore from './DetailScore'

export default function Score ({ count, disabled }) {
  const [display, setDisplay] = useState(false)
  const colors = {
    orange: '#FFBB00', grey: '#d2e3da'
  }
  const stars = Array(5).fill(0)
  const countStart = count

  const handleDisplay = () => {
    if (display) {
      setDisplay(false)
    } else {
      setDisplay(true)
    }
  }

  return (
    <>
      <div className={styles.ContainerScore}>
        <div>
            {
                stars.map((_, index) => {
                  return (
                        <i
                        className="fa-solid fa-star"
                        key={index}
                        style={(countStart) > index ? { color: colors.orange } : { color: colors.grey }}
                        ></i>)
                })
            }
        </div>

        <Link
          className={`${disabled === 1 ? styles.isVisibility : ''}`}
          onClick={ () => handleDisplay(true)}
        >
          <small className={styles.titleScore} title="Ver Opiniones" >80 Opiniones</small>
        </Link>
      </div>
        {display && <DetailScore />}
    </>

  )
}
