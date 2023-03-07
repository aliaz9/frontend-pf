import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Users.module.css'
import { deleteUser, habilitarUser, users } from '../redux/slices/thunksAdmin'

export default function Users() {
  const allUsers = useSelector((state) => state.admin.allUsers)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(users())
  }, [])

  function handleDelete(id) {
    dispatch(deleteUser(id))
  }

  function handleHabilitar(id) {
    dispatch(habilitarUser(id))
  }

  return (
    <div>
      <h1 className={styles.title}>Usuarios</h1>

      <div className={`${styles.container} container`}>
        <div className={`${styles.row} row`}>
          <div className="col-2">Nombre</div>
          <div className="col-2">Email</div>
          <div className="col-2">Ordenes</div>
          <div className="col-2">Estado</div>
          <div className="col-2">Acciones</div>

          {allUsers &&
            allUsers.map((u, indice) => {
              return (
                <div key={indice} className={`${styles.row} row`}>
                  <div className="col-2">{u.name}</div>
                  <div className="col-2">{u.email}</div>
                  <div className="col-2">
                    <button className={`${styles.blue} btn btn-primary`}>
                      {' '}
                      Ver Ordenes{' '}
                    </button>
                  </div>

                  <div className="col-2">
                    {  u.disabled ? <p style={{ color: '#00ff00' }}>Activo</p> : <p style={{ color: '#ff0000' }}>Inactivo</p> }
                  </div>

                  <div className="col-2">
                    {
                      u.disabled ?

                        <button
                          className={`${styles.red} btn btn-danger`}
                          onClick={() => handleDelete(u.uid)}
                        >
                          {' '}
                          Deshabilitar{' '}
                        </button>
                        :
                        <button
                          className={`${styles.red} btn btn-secondary`}
                          onClick={() => handleHabilitar(u.uid)}
                        >
                          {' '}
                          Habilitar{' '}
                        </button>
                    }

                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}
