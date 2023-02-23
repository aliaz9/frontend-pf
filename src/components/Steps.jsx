import React from 'react'
import styles from '../styles/Steps.module.css'

export default function Steps () {
  return (
        <div className={styles.containerStepsAll}>
            <center><h2 className={styles.titleSteps}>¡Cambia a energia solar en simples pasos!</h2></center>
            <div className={styles.containerSteps}>
                <hr className={styles.separatorSteps}/>
                <div className={styles.steps}>
                    <img className={styles.stepsImg} src="/images/signup.png" alt=""/>
                    <b className={styles.stepsTitle}>Registrate</b>
                    <small className={styles.stepsDescription}>Regístrate o Inicia Sesión en nuestro sitio</small>
                </div>
                <div className={styles.steps}>
                    <img className={styles.stepsImg} src="/images/shopping-cart.png" alt="" />
                    <b className={styles.stepsTitle}>Elige un Kit</b>
                    <small className={styles.stepsDescription}>Elije el Kit de Paneles que se adapte a tu consumo habitual de energía</small>
                </div>
                <div className={styles.steps}>
                    <img className={styles.stepsImg} src="/images/payment.png" alt="" />
                    <b className={styles.stepsTitle}>Realiza el Pago</b>
                    <small className={styles.stepsDescription}>Elije entre diversas formas de pago</small>
                </div>
                <div className={styles.steps}>
                    <img className={styles.stepsImg} src="/images/support.png" alt="" />
                    <b className={styles.stepsTitle}>¡Coordinamos nuestra vida!</b>
                    <small className={styles.stepsDescription}>Un asesor se comunicará para coordinar el día más pronto para la instalación</small>
                </div>

            </div>
        </div>
  )
}
