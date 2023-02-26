// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { recoverPassword } from '../redux/slices/thunksUsers.js'
import { useFormik } from 'formik'

export const RecoverPassword = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const msg = useSelector(state => state.users.message.msg)
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: values => {
      dispatch(recoverPassword(values))
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {msg}

      <button type="submit">Submit</button>
    </form>
  )
}
