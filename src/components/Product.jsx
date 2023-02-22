import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductsDetails } from '../redux/slices/thunks.js'
import styles from '../styles/ProductDetail.module.css'
import Questions from './Questions.jsx'

export default function ProductPage () {
  const { product } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const params = useParams()
  // console.log( props.match.params.id)
  // console.log(id)
  const { id } = params
  useEffect(() => {
    dispatch(getProductsDetails(id))
    // console.log('En los detalles')
  }, [dispatch, id])

  return (
    <div className={styles.container}>
      <h1>Detalles del producto</h1>

      <div className={styles.containerAll} key={product.id}>
        <div className={styles.containerImg}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.image}
          />
        </div>

        <div className={styles.productContent}>
          <h2 className={styles.title}>{product.name}</h2>
          <p className={styles.price}>${product.price}</p>
          <div className={styles.stars}>
            <i className="fa-solid fa-star"/>
            <i className="fa-solid fa-star"/>
            <i className="fa-solid fa-star"/>
            <i className="fa-regular fa-star"/>
          </div>
          <button className={styles.button}>Agregar al carrito</button>
          <p className={styles.description}>{product.description}</p>
          <div className={styles.protectContainer}>
            <h4>Compra segura</h4>
            <i className="fa-solid fa-shield-halved"/>
          </div>
          <p className={styles.type}>{product.type}</p>
          <p className={styles.brand}>{product.brand}</p>
        </div>
      </div>
      <Questions />
    </div>
  )
}
