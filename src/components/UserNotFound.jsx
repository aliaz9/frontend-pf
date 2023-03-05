import React from 'react'
import styles from '../styles/UserNotFound.module.css'

export default function UserNotFound () {
  return (
        <div className={styles['container-not-found']}>
            <img src="/images/not-user.png" alt="" className={styles['image-not-found']} />
            {/* <h2 className={styles['text-not-found']}>Aun no inicio sesion</h2> */}
            <h4 className={styles['text-not-found']}>Iniciar sesion o registrarse</h4>
        </div>
  )
}
