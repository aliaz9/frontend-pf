import React from 'react'
import styles from '../styles/UserProfile.module.css'

export default function UserProfile ({ name, email, image }) {
  return (
        <div>
            <h1>Perfil público</h1>
            <p>Las personas que visiten tu perfil verán la siguiente información</p><br />
            <div className={styles.imageProfile}>
                <small>Foto</small>
                <div>
                    <img src={image > 0 ? image : 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png' } width={80} alt="" />
                    <button className={styles.btnImage}>cambiar</button>
                </div>
            </div>
            <div className={styles.infoProfile}>
                <small>Nombre(s)</small>
                {/* <div className={styles.containerInfo}>
                    <p>Gonzalo Pineda</p>
                </div> */}
                <input type="text" className={styles.containerInfo} value={ name }/>
            </div>
            <div className={styles.infoProfile}>
                <small>Correo Electronico</small>
                {/* <div className={styles.containerInfo}>
                    <p>demo@demo.com</p>
                </div> */}
                <input type="text" className={styles.containerInfo} value={ email }/>

            </div>
        </div>
  )
}
