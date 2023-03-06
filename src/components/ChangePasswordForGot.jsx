// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import { forgotPassword } from '../redux/slices/thunksUsers.js'

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
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="password">Nueva Contraseña</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {msg}

      <button type="submit">Submit</button>
    </form>
  )
}
