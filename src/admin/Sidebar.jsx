import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div className="row">
        <div className={`${styles.col} col-auto min-vh-100 bg-light`}>
          <img
            src="https://res.cloudinary.com/dugymmik7/image/upload/v1677016190/PF%20Henry/darkLogo_qnnygr.png"
            className={styles.image}
          />
          <ul className={styles.list}>
            <li className={`${styles.navLink} nav-link`}>
              <Link to="/">
                <i className="bi-house" /> <span className="ms-1">Home</span>
              </Link>
            </li>

            <li className={`${styles.navLink} nav-link`}>
              <Link to="/admin/users">
                <i className="bi-people" />{' '}
                <span className="ms-1">Usuarios</span>
              </Link>
            </li>

            <li className={`${styles.navLink} nav-link`}>
              <Link to="/admin/orders">
                <i className="bi-bag-check" />{' '}
                <span className="ms-1">Ventas</span>
              </Link>
            </li>

            <li className={`${styles.navLink} nav-link`}>
              <Link to="/admin/products">
                <i className="bi-box-seam" />{' '}
                <span className="ms-1">Productos</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
