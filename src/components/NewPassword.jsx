import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { alertMsg, verifyLowercase, verifyUppercase } from '../helpers'
import { changePassword } from '../redux/slices/thunksUsers'
import styles from '../styles/NewPassword.module.css'
import Alert from './Alert'

export default function NewPassword () {
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState({ pswd1: false, pswd2: false, pswd3: false })
  const { msg, error } = useSelector((state) => state.users.message)
  const [input, setInput] = useState({ oldPassword: '', newPassword: '', newPassword1: '' })
  const [erros, setErros] = useState({})

  const togglePasswordVisibility = (pwd) => {
    setShowPassword({ ...showPassword, [pwd]: !showPassword[pwd] })
  }

  const validate = (input) => {
    const errors = {}

    if (input.newPassword.length === 0) {
      errors.newPassword = '*Campo requerido'
    } else if (input.newPassword.length < 6) {
      errors.newPassword = '*Debe tener al menos 6 caracteres'
    } else if (!verifyUppercase(input.newPassword)) {
      errors.newPassword = '*Debe tener al menos un letra en mayuscula'
    } else if (!verifyLowercase(input.newPassword)) {
      errors.newPassword = '*Debe tener al menos un letra en minuscula'
    } else if (!(/\d/.test(input.newPassword))) {
      errors.newPassword = '*Debe tener al menos un numero'
    }

    if (input.newPassword1.length === 0) {
      errors.newPassword1 = '*Campo requerido'
    } else if (input.newPassword !== input.newPassword1) {
      errors.newPassword1 = '*Las contraseñas no coinciden'
    }

    return errors
  }

  const handleChange = (e) => {
    const property = e.target.name
    const value = e.target.value
    setErros(validate({ ...input, [property]: value }))
    setInput({ ...input, [property]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
      await dispatch(changePassword(input))
      // !error && alertMsg('Actualizacion Exitosa!!!', 'success')
  }

  return (
        <div>
            <h5><b>Cambiar Contraseña</b></h5><br />
            <form onSubmit={handleSubmit}>
                <div className={styles['form-section']}>

                    <div className={styles['form-title']}>
                        <p><b>Contraseña Actual</b></p>
                        <small>Ingresa Contraseña Actual.</small>
                    </div>

                    <div className={styles['form-container-input']}>
                      <div className={styles['form-body']}>
                          <input
                              type={showPassword.pswd1 ? 'text' : 'password'}
                              className={styles['form-input']}
                              placeholder='Contraseña'
                              name= "oldPassword"
                              value={input.oldPassword}
                              onChange= {handleChange}
                              autoFocus
                              required
                          />
                          <span onClick={() => togglePasswordVisibility('pswd1')}>
                              {showPassword.pswd1 ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i> }
                          </span>
                      </div>
                      {
                        msg && (<small className={styles.error}>{msg}</small>)
                      }
                    </div>
                </div>

                <div className={styles['form-section']}>
                    <div className={styles['form-title']}>
                        <p><b>Contraseña Nueva</b></p>
                        <small>Ingresa una contraseña nueva. Debe tener al menos 6 caracteres, un número, una letra mayúscula y minúscula</small>
                    </div>

                    <div className={styles['form-main']}>
                      <div className={styles['form-container-input']}>
                        <div className={styles['form-body']}>
                                <input
                                    type={showPassword.pswd2 ? 'text' : 'password'}
                                    className={styles['form-input']}
                                    placeholder='Contraseña Nueva'
                                    name= "newPassword"
                                    value={input.newPassword}
                                    onChange= {handleChange}
                                />
                                <span onClick={() => togglePasswordVisibility('pswd2')}>
                                    {showPassword.pswd2 ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i> }
                                </span>
                        </div>
                            {erros.newPassword && (
                              <small className={styles.error}>{erros.newPassword}</small>
                            )}
                      </div>
                      <div className={styles['form-container-input']}>
                        <div className={styles['form-body']}>
                              <input
                                  type={showPassword.pswd3 ? 'text' : 'password'}
                                  className={styles['form-input']}
                                  placeholder='Repetir contraseña Nueva'
                                  name= "newPassword1"
                                  onChange= {handleChange}
                              />
                              <span onClick={() => togglePasswordVisibility('pswd3')}>
                                  {showPassword.pswd3 ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i> }
                              </span>
                          </div>
                          {erros.newPassword1 && (
                                  <small className={styles.error}>{erros.newPassword1}</small>
                          )}
                        </div>
                    </div>
                </div>
                <button
                  className={styles['btn-password']}
                  disabled={Object.keys(erros).length}
                  type="submit" >
                    Actualizar
                </button>
            </form>
        </div>
  )
}
