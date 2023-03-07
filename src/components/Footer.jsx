import React from 'react'
import { Link } from 'react-router-dom'
import Style from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <div className={Style.mainFooter}>
      <div className={Style.container}>
        <div className={Style.row}>
          <div className={`${Style.col} ${Style.col1}`}>
            <img
              src={
                'https://res.cloudinary.com/dugymmik7/image/upload/v1677016190/PF%20Henry/lightLogo_thuhw2.png'
              }
              alt='logo'
            />
            <p>
              Somos una empresa especializada en la comercialización de 
              paneles solares.

              Contamos con una amplia gama de los mismos.
            </p>
            <div className={Style.icons}>
              <i className='fa-brands fa-instagram'></i>
              <i className='fa-brands fa-facebook'></i>
              <i className='fa-brands fa-twitter'></i>
            </div>
          </div>

          <div className={`${Style.col} ${Style.col2}`}>
            <h4>Enlaces Rápidos</h4>

            <Link to='/'>Inicio</Link>
            <Link to='/about'>Acerca de</Link>
            <Link to='/products'>Productos</Link>
            <Link to='/'>Contacto</Link>
          </div>
          <div className={`${Style.col} ${Style.col3}`}>
            <h4>Otros</h4>
            <Link to='/'>Preguntas Frecuentes</Link>
            <Link to='/'>Energía Limpia</Link>
            <Link to='/'>Soporte Técnico</Link>
          </div>
          <div className={`${Style.col} ${Style.col4}`}>
            <h4>Contactanos</h4>
            <Link to='mailto:info@ecosun.com'>
              <i className='fa-sharp fa-solid fa-envelope'></i> info@ecosun.com
            </Link>
            <Link to=''>
              <i className='fa-solid fa-phone'></i> +54 9 11 457 985 451
            </Link>
            <Link to='/'>
              <i className='fa-solid fa-headphones'></i> Soporte Técnico
            </Link>
            <Link to=''>
              <i className='fa-solid fa-location-dot'></i> 772 Av. Libertad.
              Buenos Aires
            </Link>
            </div>
        </div>
     
      </div>
      <div className={Style.foot}>
          <p>© 2023 Grupo 1. Proyecto Final - Henry. Derechos Reservados</p>
          <p>Términos y Condiciones | Política de Privacidad | Disclaimer</p>
        </div>
    </div>
  )
}