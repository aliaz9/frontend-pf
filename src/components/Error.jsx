import { Link } from 'react-router-dom'
import styles from '../styles/Error.module.css'

export default function Error() {
  return (
    <div className={styles['error-container']}>
        <img className={styles['error-img']} src='images/not-found.png' />
        <h1 className={styles['error-text']} >PAGINA NO ENCONTRADA</h1>
        <p>La ruta solicitada no se pudo encontrar en nuestro portal web.</p>
        <Link to='/'>
            <button className={styles['error-btn']}>REGRESAR A INICIO </button>
        </Link>
    </div>
  )
}
