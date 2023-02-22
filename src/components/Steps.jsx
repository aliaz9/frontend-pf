import React from 'react'
import '../styles/Steps.css'

export default function Steps () {
  return (
        <div className="containerStepsAll">
            <center><h2 className="titleSteps">¡Cambia a energia solar en simples pasos!</h2></center>
            <hr className="separatorSteps"/>
            <div className="containerSteps">
                <div className="steps">
                    {/* <img className="stepsImg" src="/images/signup.png" alt=""/> */}
                    <b className="stepsTitle">Registrate</b>
                    <small className="stepsDescription">Regístrate o Inicia Sesión en nuestro sitio</small>
                </div>
                <div className="steps">
                    {/* <img className="stepsImg" src="/images/shopping-cart.png" alt="" /> */}
                    <b className="stepsTitle">Elige un Kit</b>
                    <small className="stepsDescription">Elije el Kit de Paneles que se adapte a tu consumo habitual de energía</small>
                </div>
                <div className="steps">
                    {/* <img className="stepsImg" src="/images/payment.png" alt="" /> */}
                    <b className="stepsTitle">Realiza el Pago</b>
                    <small className="stepsDescription">Elije entre diversas formas de pago</small>
                </div>
                <div className="steps">
                    {/* <img className="stepsImg" src="/images/support.png" alt="" /> */}
                    <b className="stepsTitle">¡Coordinamos nuestra vida!</b>
                    <small className="stepsDescription">Un asesor se comunicará para coordinar el día más pronto para la instalación</small>
                </div>
            </div>
        </div>
  )
}
