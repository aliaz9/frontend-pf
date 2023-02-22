import React from 'react'
import Style from '../styles/SectionInfo.module.css'
import { Link } from 'react-router-dom'

export default function SectionInfo () {
  return (

    <div>
        <div className={Style.container}>

            <div className={Style.izquierda}>
                <img src={'https://res.cloudinary.com/dugymmik7/image/upload/v1677016191/PF%20Henry/sectionInfoImg_iy6qon.jpg'} alt="img-panelSolar" className={Style.SectionInfoImg}/>

            </div>

            <div className={Style.derecha}>
                <div className={Style.containerText}>
                    <h1>¿Estás listo para el cambio?</h1>
                    <h4>Generá electricidad bajo costo y amigable con el medio ambiente</h4>
                    <p>Tenemos todo lo que necesitas para sumarte a este cambio.</p>
                    <Link to="/product">
                    <button type='button'>Comprar ahora <i className="fa-solid fa-arrow-right"/></button>
                    </Link>
                </div>
            </div>

        </div>

    </div>
  )
}
