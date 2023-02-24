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
                    <div className={styles.formModalRight}>
                            <img src="https://mipclista.com/3621-large_default/pc-gamer-draco-rgb-core-i5-12400f.jpg" width={200} alt="Imagen Producto" />
                            <p>PC Gamer Draco RGB Core I5 12400F</p>
                    </div>
                    <form action="" className={styles.formModal}>
                        <div>
                            <p>
                                Clasificacion General
                            </p>
                            <Score disabledStart={1} disabledOpinion={1} disabledNumber={1} width={2}/>

                        </div>
                        <div>
                            <p>
                                Descripcion
                            </p>
                            <textarea className={styles.txtareaModal} name="" id="" cols="50" rows="5" placeholder='Ejemplo: Compré este producto el mes pasado y me encanta...'/>
                        </div>

                    </form>
                </div>
                    <hr className={styles.separatorModal}/>
                <div className={styles.modalFooter}>
                    <button onClick={() => closeModal(false)}><i className="fa-solid fa-ban"></i>&nbsp;Cancelar</button>
                    <button><i className="fa-solid fa-paper-plane"></i>&nbsp;Publicar</button>
                </div>
            </div>
        </div>
  )
}