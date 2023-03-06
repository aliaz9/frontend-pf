import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { alertMsg } from '../helpers'
import { editUser } from '../redux/slices/thunksUsers'
import styles from '../styles/UserProfile.module.css'
import Alert from './Alert'

export default function UserProfile () {
  const dispatch = useDispatch()
  const { uid, name, email, image } = useSelector((state) => state.users.auth)
  const { msg, error } = useSelector((state) => state.users.message)
  const [input, setInput] = useState({ uid, name, email })
  const [erros, setErros] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(editUser(input))
  }
  //  console.log(msg, error)
  const handleChange = (e) => {
    const property = e.target.name
    const value = e.target.value
    setErros(validate({ ...input, [property]: value }))
    setInput({ ...input, [property]: value })
  }

  const validate = (input) => {
    const errors = {}
    if (input.name.length === 0) {
      errors.name = '*Campo requerido'
    } else if (!(/^[ñíóáéú a-zA-Z ]+$/.test(input.name))) {
      errors.name = '*Solo se permiten caracteres alfabeticos'
    } else if (input.name.length < 3 || input.name.length > 20) {
      errors.name = '*Debe tener más de 3 y menos de 20 letras solo se permiten letras'
    }

    if (input.email.length === 0) {
      errors.email = '*Campo requerido'
    } else if (!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(input.email))) {
      errors.email = '*Correo electronico invalido'
    }

    return errors
  }

  return (
        <div>
            <div className={styles.titleProfile}>
              <h5><b>Perfil público</b></h5>
              { msg && <small className={styles.error}>{error}</small>}
              <small>Las personas que visiten tu perfil tiene la posibilidad de ver la siguiente información</small><br /><br />
            </div>
            <form onSubmit={handleSubmit}>
                <div className={styles.imageProfile}>
                    <small>Foto</small>
                    <div>
                        <img src={image > 0 ? image : 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png' } width={80} alt="" />
                        <button className={styles.btnImage}>cambiar</button>
                    </div>
                </div>
                <div className={styles.infoProfile}>
                    <small>Nombre(s)</small>
                    <input
                        type="text"
                        className={styles.containerInfo}
                        value={ input.name }
                        onChange= {handleChange}
                        name="name"
                        />
                    {erros.name && (
                        <small className={styles.error}>{erros.name}</small>
                    )}
                </div>
                <div className={styles.infoProfile}>
                    <small>Correo Electronico</small>
                    <input
                    type="text"
                    className={styles.containerInfo}
                    value={ input.email }
                    onChange= {handleChange}
                    name="email"
                    />
                    {erros.email && (
                        <small className={styles.error}>{erros.email}</small>
                    )}
                </div>
                <button
                  className={styles.btnEdit}
                  disabled={Object.keys(erros).length}
                  type="submit" >
                    Actualizar
                </button>
            </form>
        </div>
  )
}
