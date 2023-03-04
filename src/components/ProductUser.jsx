import React from 'react'
import styles from '../styles/ProductUser.module.css'
import { Link } from 'react-router-dom'

export default function ProductUser () {
  return (
        <div className={styles['conteiner-myproducts']}>
            <div className={styles['header-myproducts']}>
                <h5><b>Productos Adqueridos</b></h5>
            </div>
            <div className={styles['conteiner-message']}>
                <i className="fa-solid fa-circle-exclamation"></i> 
                <small>
                    Podrás calificar el producto una vez realizado la compra en nuestro portal
                </small>
            </div>
            <div className={styles['conteiner-main']}>
                <div className={styles['conteiner-title']}>
                    <img src="https://concepto.de/wp-content/uploads/2019/03/panel-solar-e1553091635674.jpg" width={200} alt="imagen del producto" />
                </div>
                <div className={styles['main-description']}>
                    <p>JINKO SOLAR PRO</p>
                    {/* descripcion producto */}
                    <small><b>Precio:</b> $50</small>
                    <small><b>Descripcion:</b><br />La tecnología TR con Media Célula tiene como objetivo eliminar el hueco de la célula para aumentar la eficiencia del módulo</small>
                    <small><b>Categoria:</b> Panel solar normal</small>
                    <small><b>Marca:</b> LG</small>
                </div>
                <div className={styles['main-accion']}>
                    {/* boton  opinion */}
                    <span>
                    <i className="fa-regular fa-calendar"></i>
                    &nbsp;11 octubre 2022
                    </span><br />
                   {/* <Link
                    className={styles['btn-accion']}
                   >
                    ver Producto
                   </Link> */}

                   <Link to='/' style={{ textDecoration: 'none' }}>
                        <button className={styles['btn-accion']}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </Link>
                {/* <Score /> */}
                </div>
            </div>
        </div>
  )
}
