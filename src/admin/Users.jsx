import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Users.module.css'
import {
  deleteUser,
  filterUser,
  habilitarUser,
  users
} from '../redux/slices/thunksAdmin'
import { Link } from 'react-router-dom'

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

  function handleChange(e) {
    dispatch(filterUser(e.target.value))
  }

  return (
    <div>
      <h1 className={styles.title}>Usuarios</h1>

      <select
        onChange={(e) => handleChange(e)}
        className={`${styles.select} form-select`}
        defaultValue={'todos'}
      >
        <option value="todos">Todos</option>
        <option value="habilitados">Habilitados</option>
        <option value="deshabilitados">Deshabilitados</option>
      </select>

      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col-2">Nombre</th>
            <th scope="col-2">Email</th>
            <th scope="col-2">Ordenes</th>
            <th scope="col-2">Estado</th>
            <th scope="col-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {allUsers &&
            allUsers.map((u, indice) => {
              return (
                <div key={indice} className={`${styles.row} row`}>
                  <div className="col-2">{u.name}</div>
                  <div className="col-2">{u.email}</div>
                  <div className="col-2">
                    <Link to={`/admin/orders/${u.uid}`}>
                      <button className={`${styles.blue} btn btn-primary`}>
                        {' '}
                        Ver Ordenes{' '}
                      </button>
                    </Link>
                  </div>

                  <div className="col-2">
                    {u.disabled ? (
                      <p style={{ color: '#00ff00' }}>Activo</p>
                    ) : (
                      <p style={{ color: '#ff0000' }}>Inactivo</p>
                    )}
                  </div>

                  <th className="col-2">
                    {!u.disabled ? (
                      <button
                        className={`btn btn-danger`}
                        onClick={() => handleDelete(u.uid)}
                      >
                        {' '}
                        Deshabilitar{' '}
                      </button>
                    ) : (
                      <button
                        className={`btn btn-secondary`}
                        onClick={() => handleHabilitar(u.uid)}
                      >
                        {' '}
                        Habilitar{' '}
                      </button>
                    )}
                  </th>
                </div>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
