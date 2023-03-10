import React from 'react'

import Styles from './../styles/Steps.module.css'

export default function Steps () {
  return (
        <div className={Styles.containerStepsAll}>
            <center><h2 className={Styles.titleSteps}>¡Cambia a energía solar en simples pasos!</h2></center>
            <div className={Styles.containerSteps}>
                {/* <hr className={Styles.separatorSteps}/> */}
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
                    <b className={Styles.stepsTitle}>¡Coordinamos nuestra visita!</b>
                    <small className={Styles.stepsDescription}>Un asesor se comunicará para coordinar el día más pronto para la instalación</small>
                </div>
               
            </div>
            {/* <div className={Styles.stepsBanner}>
                <img className={Styles.imgBanner} src="https://res.cloudinary.com/daieynebb/image/upload/v1678019965/Fondos/BANNER-flores_qxtyxm.png" alt="" />

                </div> */}
        </div>
    )
}