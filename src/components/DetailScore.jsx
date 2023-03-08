import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchProduct, searchUser } from '../helpers'
import styles from '../styles/DetailScore.module.css'
import Modal from '../components/Modal.jsx'
import Opinion from '../components/Opinion.jsx'
import { getCart } from '../redux/slices/thunksUsers'
import { useParams } from 'react-router-dom'

export default function DetailScore() {
  const [display, setDisplay] = useState(false)
  const { id } = useParams()
  const { uid, name } = useSelector((state) => state.users.auth)
  const productInfo = useSelector((state) => state.products.product)
  const reviews = useSelector((state) => state.users.reviews)
  const dispatch = useDispatch()
  const handleOpen = () => {
    setDisplay(!display)
  }

  useEffect(() => {
    dispatch(getCart())
  }, [])

  return (
    <div>
      <div className={styles.headScore}>
        <hr className={styles.cardSeparator} />
        <h3>Opiniones del Producto</h3>
        <div>

          { (name && searchProduct(reviews, id) && !searchUser(productInfo.reviews, uid))
            ? <button onClick={handleOpen}>
            <i className="fa-solid fa-plus" />
            &nbsp; Mi Opinion
          </button>
            : <div className={styles.disabledOpinion}>
            <i className="fa-solid fa-circle-info" title='Debes adquirir el productos para opinar'></i>
          </div>
          }
        </div>
      </div>
      {display && <Modal closeModal={setDisplay} />}
      <div className={styles.containerScore}>
        <Opinion />
      </div>
    </div>
  )
}
