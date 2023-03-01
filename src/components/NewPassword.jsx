import React, { useState } from 'react'
import styles from '../styles/NewPassword.module.css'

export default function NewPassword () {
  const [showPassword, setShowPassword] = useState({ pswd1: false, pswd2: false, pswd3: false })

  const togglePasswordVisibility = (pwd) => {
    setShowPassword({ ...showPassword, [pwd]: !showPassword[pwd] })
  }

  return (
        <div>
            <h5><b>Cambiar Contraseña</b></h5><br />
            <form>
                <div className={styles['form-section']}>

                    <div className={styles['form-title']}>
                        <p><b>Contraseña Actual</b></p>
                        <small>Ingresa Contraseña Actual.</small>
                    </div>

                    <div className={styles['form-body']}>
                        <input
                            type={showPassword.pswd1 ? 'text' : 'password'}
                            className={styles['form-input']}
                            placeholder='Contraseña'
                        />
                        <span onClick={() => togglePasswordVisibility('pswd1')}>
                            {showPassword.pswd1 ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i> }
                        </span>
                    </div>
                    {/* {erros.name && (
                        <small className={styles.error}>{erros.name}</small>
                    )} */}
                </div>

                <div className={styles['form-section']}>
                    <div className={styles['form-title']}>
                        <p><b>Contraseña Nueva</b></p>
                        <small>Ingresa una contraseña nueva. Debe tener entre 6 y 10 caracteres.</small>
                    </div>

                    <div className={styles['form-main']}>
                        <div className={styles['form-body']}>
                            <input
                                type={showPassword.pswd2 ? 'text' : 'password'}
                                className={styles['form-input']}
                                placeholder='Contraseña Nueva'
                            />
                            <span onClick={() => togglePasswordVisibility('pswd2')}>
                                {showPassword.pswd2 ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i> }
                            </span>
                        </div>
                        <div className={styles['form-body']}>
                            <input
                                type={showPassword.pswd3 ? 'text' : 'password'}
                                className={styles['form-input']}
                                placeholder='Repetir contraseña Nueva'
                            />
                            <span onClick={() => togglePasswordVisibility('pswd3')}>
                                {showPassword.pswd3 ? <i className="fa-regular fa-eye"></i> : <i className="fa-regular fa-eye-slash"></i> }
                            </span>
                        </div>
                    </div>

                    {/* {erros.name && (
                        <small className={styles.error}>{erros.name}</small>
                    )} */}
                </div>

                <button
                  className={styles['btn-password']}
                //   disabled={Object.keys(erros).length}
                  type="submit" >
                    Actualizar
                </button>
            </form>
        </div>
  )
}
