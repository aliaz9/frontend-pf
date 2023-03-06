import React from 'react'
import Style from '../styles/SectionInfo.module.css'
import { Link } from 'react-router-dom'

export default function SectionInfo () {
  return (

    <>


    <div className={Style.containerAll}>
        <div className={Style.container}>

            <div className={Style.izquierda}>
                <img src={'https://res.cloudinary.com/dugymmik7/image/upload/v1677016191/PF%20Henry/sectionInfoImg_iy6qon.jpg'} alt="img-panelSolar" className={Style.SectionInfoImg}/>

            </div>

            <div className={Style.derecha}>
                <div className={Style.containerText}>
                    <h3 className={Style.h1Text}>¿Estás listo para el cambio?</h3>
                    <h5 className={Style.h4Text}>Generá electricidad bajo costo y amigable con el medio ambiente</h5>
                    <p className={Style.pText}>Tenemos todo lo que necesitas para sumarte a este cambio.</p>

                </div>
                <div className={Style.buttonContainer}>
                <Link to="/product">
                    <button className={Style.comprarButton} type='button'>Comprar ahora <i className="fa-solid fa-arrow-right"/></button>
                    </Link>
                </div>
            </div>

        </div>
       

    </div>

    <div className={Style.stepsBanner}>
                <img className={Style.imgBanner} src="https://res.cloudinary.com/daieynebb/image/upload/v1678019965/Fondos/BANNER-flores_qxtyxm.png" alt="" />

                </div>

    </>
  )
}
