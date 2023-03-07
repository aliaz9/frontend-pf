// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import { forgotPassword } from '../redux/slices/thunksUsers.js'
import styles from '../styles/ChangePasswordForGot.module.css'

export const ChangePasswordForGot = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const msg = useSelector((state) => state.users.message.msg)
  const params = useParams()
  const { token } = params
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      password: ''
    },
    onSubmit: (password) => {
      dispatch(forgotPassword(token, password))
    }
  })
  return (
    <div className={styles.contMaxPsw}>
      <div className={styles.containerChangePsw}>
        <div className="box">
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="password">Nueva Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form-control"
            />
            {msg}

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
