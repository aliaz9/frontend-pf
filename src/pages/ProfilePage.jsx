import React, { useState } from 'react'
import styles from '../styles/ProfilePage.module.css'
import UserProfile from '../components/UserProfile.jsx'
import UserNotFound from '../components/UserNotFound.jsx'
import { useSelector } from 'react-redux'
import ProductUser from '../components/ProductUser'
import NewPassword from '../components/NewPassword'
import Loading from '../components/Loading'
export default function Pagination () {
  const [style, setStyle] = useState(1)
  const [style1, setStyle1] = useState(0)
  const [style2, setStyle2] = useState(0)
  const { name, bought } = useSelector((state) => state.users.auth)
  const loading = useSelector((state) => state.users.loading)

  const handleChange = (value) => {
    switch (value) {
      case 1:
        if (style === 0) {
          setStyle1(0)
          setStyle2(0)
          return setStyle(1)
        } else {
          setStyle1(0)
          setStyle2(0)
          return setStyle(0)
        }
      case 2:
        if (style1 === 0) {
          setStyle2(0)
          setStyle(0)
          return setStyle1(1)
        } else {
          setStyle2(0)
          setStyle(0)
          return setStyle1(0)
        }
      default:
        if (style2 === 0) {
          setStyle1(0)
          setStyle(0)
          return setStyle2(1)
        } else {
          setStyle1(0)
          setStyle(0)
          return setStyle2(0)
        }
    }
  }

  return (
      // <div className={styles.containerProfile}>
      <div>
        { loading
          ? (<Loading />)
          : (
          <div className={styles.containerProfile}>
            <div className={styles.rightProfile}>
              <div className={styles.boxProfile}>
                  <div
                  className={`${style === 0 ? styles.boxProfileContainer : styles.boxProfileActive}`}
                  onClick={() => handleChange(1)}
                  >
                      <p>&nbsp;Perfil Publico</p>
                      <div><i className="fa-solid fa-angle-right"></i></div>
                  </div>
                  <div
                  className={`${style1 === 0 ? styles.boxProfileContainer : styles.boxProfileActive}`}
                  onClick={() => handleChange(2)}
                  >
                      <p>&nbsp;Cambiar Contraseña</p>
                      <div><i className="fa-solid fa-angle-right"></i></div>
                  </div>
                  <div
                  className={`${style2 === 0 ? styles.boxProfileContainer : styles.boxProfileActive}`}
                  onClick={() => handleChange(3)}
                  >
                      <p>&nbsp;Mis Productos</p>
                      <div><i className="fa-solid fa-angle-right"></i></div>
                  </div>
              </div>
            </div>
            <div>
                {
                  name
                  // eslint-disable-next-line indent
                  ? (
                        style === 1
                          ? (
                            <UserProfile />
                            )
                          : (style1 === 1
                              ? <NewPassword />
                              : (style2 === 1 && <ProductUser bought= {bought} />))
                      )
                    : <UserNotFound />
                }
            </div>
          </div>
            )}

      </div>
  )
}
