import React from 'react'
import styles from '../styles/Modal.module.css'
import Score from './Score'

export default function Modal ({ closeModal }) {
  return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>

                <div className={styles.modalHead}>
                    <div className={styles.modalTitle}>
                        <b>Calificar Opinion</b>
                    </div>
                    <div className={styles.btnModal} onClick={() => closeModal(false)}>
                        <i className="fa-solid fa-x"></i>
                    </div>
                </div>
                    <hr className={styles.separatorModal}/>
                <div className={styles.modalBody}>
                    <p>
                        ¿Cuanto calificas al producto?
                    </p>
                    <Score />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Ingresa una pequeña descripcion'/>
                </div>
                    <hr className={styles.separatorModal}/>
                <div className={styles.modalFooter}>
                    <button onClick={() => closeModal(false)}>Cancelar</button>
                    <button>Aceptar</button>
                </div>
            </div>
        </div>
  )
}