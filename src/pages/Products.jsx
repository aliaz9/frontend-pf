import React from 'react'
import styles from '../styles/Products.module.css'
import Cards from '../components/Cards.jsx'
import Search from '../components/Search.jsx'
import Pagination from '../components/Pagination.jsx'

export default function Products() {
  function handleSubmit(e) {
    e.preventDefault()
    console.log('You clicked submit.')
    var getValue = document.getElementById('name')
    getValue.value = ''
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerHero}>
        <div className={styles.containerText}>
          <h4 className={styles.h4}>
            Generá electricidad bajo costo y amigable con el medio ambiente
          </h4>

          <h1 className={styles.h1}>¿Estás listo para el cambio?</h1>

          <p className={styles.p}>Tenemos todo lo que necesitas.</p>
          <div className={styles.containerButton}>
            <a href="#products">
              <button type="button" className={styles.button1}>
                Comprar ahora <i className="fa-solid fa-arrow-down" />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.miniBannerContainer}>
        <div className={styles.miniBanner}>
          <i className="fa-solid fa-truck"></i>
          <h6 className={styles.h6}>Envio Gratis</h6>
          <p className={styles.p1}>Con tu compra de $1000</p>
        </div>

        <div className={styles.miniBanner}>
          <i className="fa-solid fa-arrows-spin"></i>
          <h6 className={styles.h6}>365 días</h6>
          <p className={styles.p1}>De Garantía</p>
        </div>

        <div className={styles.miniBanner}>
          <i className="fa-regular fa-credit-card"></i>
          <h6 className={styles.h6}>Pagos</h6>
          <p className={styles.p1}>Pago Seguro</p>
        </div>

        <div className={styles.miniBanner}>
          <i className="fa-solid fa-certificate"></i>
          <h6 className={styles.h6}>Materiales</h6>
          <p className={styles.p1}>Solamente la mejor calidad</p>
        </div>
      </div>

      <div className={styles.BannerContainer}>
        <div className={styles.banner1}></div>

        <div className={styles.banner2}></div>
      </div>

      <div className={styles.searchContainer}>
        <Search />
      </div>

      <div className={styles.titulo}>
        <h1 className={styles.titulo}>Nuestros Productos</h1>
      </div>

      <div className="Cards-component" id="products">
        <Cards />
        <Pagination />
      </div>

      <div className={styles.newsLatterContainer}>
        <div className={styles.newsLatter}>
          <h5 className={styles.h5}>Suscríbete</h5>
          <p className={styles.p}>
            Entérate primero de nuestras promociones y recibe descuentos por
            mail.
          </p>

          <div className={styles.inputCont}>
            <form onSubmit={handleSubmit} className={styles.inputCont}>
              <input
                type="text"
                id="name"
                placeholder="Ingresa tu Email"
                className={styles.input}
              ></input>
              <button type="submit" className={styles.buttonsubmit}>
                <i className="fa-solid fa-paper-plane paperplane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
