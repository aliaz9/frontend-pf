import React, { useState } from 'react'
import styles from '../styles/ProductUser.module.css'
import { Link } from 'react-router-dom'
import { formatDate } from '../helpers'
import Modal from './Modal'

export default function ProductUser() {
  // const {bought} = useSelector( (state)=> state.users.auth)
  const bought = [
    {
      id: '9665e796-7787-43e5-9d26-2fed2b3428e5',
      title: 'Panel Solar I',
      unit_price: 200,
      quantity: 2,
      brandName: 'Monocristalino',
      image: 'https://ecoinventos.com/wp-content/uploads/2018/02/Tipos-de-panel-solar.jpg',
      date: '2023-01-15T00:00:00.000Z'
    },
    {
      id: 'e00f2e3f-852e-4b2e-b76c-284a9514e56a',
      title: 'Panel Solar II',
      unit_price: 150,
      quantity: 3,
      brandName: 'CdTe',
      image: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/11/paneles-solares-2525685.jpg?tf=3840x',
      date: '2023-02-17T00:00:00.000Z'
    }
  ]

  const [display, setDisplay] = useState(false)
  const handleOpen = () => {
    setDisplay(!display)
  }

  return (
    <div className={styles['conteiner-myproducts']}>
      {bought.length
        ? (
        <>
          <div className={styles['header-myproducts']}>
            <h5>
              <b>Productos Adqueridos</b>
            </h5>
          </div>
          <div className={styles['conteiner-message']}>
            <i className="fa-solid fa-circle-exclamation"></i>
            <small>
              Recuerda calificar y opininar sobre tus productos adquiridos
            </small>
          </div>
            {bought.map((b) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className={styles['conteiner-main']}>
                  <div className={styles['conteiner-title']}>
                    <img
                      src={b.image}
                      width={200}
                      alt="imagen del producto"
                    />
                  </div>
                  <div className={styles['main-description']}>
                    <p>{b.title.toUpperCase()}</p>
                    <small>
                      <b>Precio:</b> $ {b.unit_price}
                    </small>
                    <small>
                      <b>N° Cantidad:</b> {b.quantity}
                    </small>
                    <small>
                      <b>Descripcion del Producto:</b>
                      <Link to={`/product/${b.id}`}>
                        <small className={styles['main-link']}>&nbsp;<i className="fa-solid fa-circle-info"></i> Ver Detalle</small>
                      </Link>
                    </small>
                    <small>
                      <b>Marca:</b> {b.brandName}
                    </small>
                  </div>
                  <div className={styles['main-accion']}>
                    <span>
                      <i className="fa-regular fa-calendar"></i>
                      &nbsp;{formatDate(b.date)}
                    </span>
                    <br />
                    {/* <Link style={{ textDecoration: 'none' }}>
                      <button className={styles['btn-accion']} onClick={handleOpen}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </Link> */}
                  </div>
                </div>
              )
            })}
            {/* {display && <Modal closeModal= { setDisplay } />} */}
        </>
          )
        : (
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
