import React, { createContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addReviews } from '../redux/slices/thunksUsers'
import { useParams } from 'react-router-dom'
import styles from '../styles/Modal.module.css'
import Score from './Score'
import { alertMsg } from '../helpers'
export const MessageContext = createContext('')

export default function Modal({ closeModal }) {
  const dispatch = useDispatch()
  const { id } = useParams()
  const productInfo = useSelector((state) => state.products.product)
  const [input, setInput] = useState({ id, rating: 0, reviews: '' })
  const [erros, setErros] = useState({})

  const handleMessage = (countFromChild) => {
    setInput({ ...input, rating: countFromChild })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addReviews(input))
    closeModal(false)
    alertMsg('Registrado con Exito!!!', 'Tu opinion fue registro de manera exitosa', 'success')
  }

  const handleChange = (e) => {
    const property = e.target.name
    const value = e.target.value
    setErros(validate({ ...input, [property]: value }))
    setInput({ ...input, [property]: value })
  }

  const validate = (input) => {
    const errors = {}
    if (input.reviews.length === 0) {
      errors.reviews = '*Campo requerido'
    }

    if (input.rating === 0) {
      errors.rating = '*Campo requerido'
    }

    return errors
  }

  return (
    <MessageContext.Provider value={handleMessage}>
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
          <div className={styles.modalBody}>
            <div className={styles.formModalRight}>
              <img src={productInfo.image} className={styles.modalImg} alt="Imagen Producto" />
              <p>{productInfo.title}</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.formModal}>
              <div>
                <p>Clasificacion General</p>
                <Score
                  disabledStart={1}
                  disabledOpinion={1}
                  disabledNumber={1}
                  width={2}
                />
                {erros.rating && (
                  <small className={styles.error}>{erros.rating}</small>
                )}
              </div>
              <div>
                <p>Descripcion</p>
                <textarea
                  className={styles.txtareaModal}
                  name="reviews"
                  id=""
                  cols="50"
                  rows="5"
                  placeholder="Ejemplo: Compré este producto el mes pasado y me encanta..."
                  onChange={handleChange}
                  value={ input.reviews }
                  onFocus
                  required
                />
                {erros.reviews && (
                  <small className={styles.error}>{erros.reviews}</small>
                )}
              </div>
              <hr className={styles.separatorModal} />
              <div className={styles.modalFooter}>
                <button onClick={() => closeModal(false)} className={styles.btnCancel}><i className="fa-solid fa-ban"></i> CANCELAR</button>
                <button type="submit" className={styles.btnSubmit} disabled={Object.keys(erros).length}><i className="fa-solid fa-paper-plane"></i> ACEPTAR</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </MessageContext.Provider>
  )
}
