import React from 'react'
import styles from '../styles/Loading.module.css'

export default function Loading () {
  return (
    <>
      <div className={styles['container-loading']}>
        <img
          className={styles['spinner-loading']}
          src='images/loading.png'/>
      </div>
    </>
  )
}
