import React from 'react'
import styles from '../styles/ProductUser.module.css'
import { Link } from 'react-router-dom'

export default function ProductUser(bought) {
  return (
    <div className={styles['conteiner-myproducts']}>
      {bought.length ? (
        <>
          <div className={styles['header-myproducts']}>
            <h5>
              <b>Productos Adqueridos</b>
            </h5>
          </div>
          <div className={styles['conteiner-message']}>
            <i className="fa-solid fa-circle-exclamation"></i>
            <small>
              Podrás calificar el producto una vez realizado la compra en
              nuestro portal
            </small>
          </div>
          <div className={styles['conteiner-main']}>
            {bought.map((b) => {
              return (
                <>
                  <div className={styles['conteiner-title']}>
                    <img
                      src="https://concepto.de/wp-content/uploads/2019/03/panel-solar-e1553091635674.jpg"
                      width={200}
                      alt="imagen del producto"
                    />
                  </div>
                  <div className={styles['main-description']}>
                    <p>JINKO SOLAR PRO</p>
                    <small>
                      <b>Precio:</b> $50
                    </small>
                    <small>
                      <b>Descripcion:</b>
                      <br />
                      La tecnología TR con Media Célula tiene como objetivo
                      eliminar el hueco de la célula para aumentar la eficiencia
                      del módulo
                    </small>
                    <small>
                      <b>Categoria:</b> Panel solar normal
                    </small>
                    <small>
                      <b>Marca:</b> LG
                    </small>
                  </div>
                  <div className={styles['main-accion']}>
                    <span>
                      <i className="fa-regular fa-calendar"></i>
                      &nbsp;11 octubre 2022
                    </span>
                    <br />
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <button className={styles['btn-accion']}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </Link>
                  </div>
                </>
              )
            })}
          </div>
        </>
      ) : (
        <div className={styles['not-products']}>
          <img
            className={styles['not-products-img']}
            src="images/not-productos.png"
            width={400}
            alt=""
          />
          <b className={styles['not-products-title']}>
            Aun no ha realizado compras en nuestra plataforma
          </b>
        </div>
      )}
    </div>
  )
}
