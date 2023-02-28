import React from 'react'
import styles from '../styles/UserNotFound.module.css'

export default function UserNotFound () {
  return (
        <div className={styles['container-not-found']}>
            <img src="/images/notUser.jpg" width={100} alt="" className={styles['image-not-found']} />
            <h2 className={styles['text-not-found']}>Aun no inicio sesion</h2>
        </div>
  )
}
