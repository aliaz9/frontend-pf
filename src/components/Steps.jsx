import React from 'react'

import Styles from './../styles/Steps.module.css'

export default function Steps () {
  return (
        <div className={Styles.containerStepsAll}>
            <center><h2 className={Styles.titleSteps}>¡Cambia a energia solar en simples pasos!</h2></center>
            <hr className={Styles.separatorSteps}/>
            <div className={Styles.containerSteps}>
                <div className={Styles.steps}>
                    <img className={Styles.stepsImg} src="https://res.cloudinary.com/daieynebb/image/upload/v1677244506/FlatIcon/signup_wvpdb5.png" alt=""/>
                    <b className={Styles.stepsTitle}>Registrate</b>
                    <small className={Styles.stepsDescription}>Regístrate o Inicia Sesión en nuestro sitio</small>
                </div>
                <div className={Styles.steps}>
                    <img className={Styles.stepsImg} src="https://res.cloudinary.com/daieynebb/image/upload/v1677244506/FlatIcon/shopping-cart_yzsjet.png" alt="" />
                    <b className={Styles.stepsTitle}>Elige un Kit</b>
                    <small className={Styles.stepsDescription}>Elije el Kit de Paneles que se adapte a tu consumo habitual de energía</small>
                </div>
                <div className={Styles.steps}>
                    <img className={Styles.stepsImg} src="https://res.cloudinary.com/daieynebb/image/upload/v1677244506/FlatIcon/payment_mwwqwm.png" alt="" />
                    <b className={Styles.stepsTitle}>Realiza el Pago</b>
                    <small className={Styles.stepsDescription}>Elije entre diversas formas de pago</small>
                </div>
                <div className={Styles.steps}>
                    <img className={Styles.stepsImg} src="https://res.cloudinary.com/daieynebb/image/upload/v1677244506/FlatIcon/support_gkwahs.png" alt="" />
                    <b className={Styles.stepsTitle}>¡Coordinamos nuestra vida!</b>
                    <small className={Styles.stepsDescription}>Un asesor se comunicará para coordinar el día más pronto para la instalación</small>
