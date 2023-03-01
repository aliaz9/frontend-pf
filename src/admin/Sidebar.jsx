import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import styles from '../styles/Sidebar.module.css'

export default function Sidebar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={`${styles.col} col-auto min-vh-100 bg-light`}>
          <img
            src="https://res.cloudinary.com/dugymmik7/image/upload/v1677016190/PF%20Henry/darkLogo_qnnygr.png"
            className={styles.image}
          />
          <ul className={styles.list}>
            <il>
              <a className={`${styles.navLink} nav-link`}>
                <i className="bi-house" /> <span className="ms-1">Home</span>
              </a>
            </il>

            <il>
              <Link to="/admin/users">
                <a className={`${styles.navLink} nav-link`}>
                  <i className="bi-people" />{' '}
                  <span className="ms-1">Usuarios</span>
                </a>
              </Link>
            </il>

            <il>
              <a className={`${styles.navLink} nav-link`}>
                <i className="bi-bag-check" />{' '}
                <span className="ms-1">Ventas</span>
              </a>
            </il>

            <il>
              <Link to="/admin/products">
                <a className={`${styles.navLink} nav-link`}>
                  <i className="bi-box-seam" />{' '}
                  <span className="ms-1">Productos</span>
                </a>
              </Link>
            </il>
          </ul>
        </div>
      </div>
    </div>
  )
}
