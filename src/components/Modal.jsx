import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/Modal.module.css'
import Score from './Score'

export default function Modal({ closeModal }) {
  const productInfo = useSelector((state) => state.products.product)

  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHead}>
          <div className={styles.modalTitle}>
            <b>Calificar Producto</b>
          </div>
          <div className={styles.btnModal} onClick={() => closeModal(false)}>
            <i className="fa-solid fa-x" />
          </div>
        </div>
        <hr className={styles.separatorModal} />
        <div className={styles.formModalRight}>
          <img src={productInfo.image} width={200} alt="Imagen Producto" />
          <p>{productInfo.title}</p>
        </div>
        <form action="" className={styles.formModal}>
          <div>
            <p>Clasificacion General</p>
            <Score
              disabledStart={1}
              disabledOpinion={1}
              disabledNumber={1}
              width={2}
            />
          </div>
          <div>
            <p>Descripcion</p>
            <textarea
              className={styles.txtareaModal}
              name=""
              id=""
              cols="50"
              rows="5"
              placeholder="Ejemplo: Compré este producto el mes pasado y me encanta..."
            />
          </div>
        </form>
      </div>
      <hr className={styles.separatorModal} />
      <div className={styles.modalFooter}>
        <button onClick={() => closeModal(false)}>Cancelar</button>
        <button type="button">Aceptar</button>
      </div>
    </div>
  )
}
