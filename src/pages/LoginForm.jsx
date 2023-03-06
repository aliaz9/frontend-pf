import { Formik, Form, Field, ErrorMessage } from 'formik'
import styles from '../styles/LoginForm.module.css'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { logUser } from '../redux/slices/thunksUsers.js'
import Alert from '../components/Alert.jsx'
import { useNavigate, Link } from 'react-router-dom'
import { useEffect } from 'react'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Correo invalido').required('Campo requerido'),
  password: Yup.string().required('Campo requerido')
})

const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const auth = useSelector((state) => state.users.auth)
  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(logUser(values)).then(() => {
      setSubmitting(false)
    })
  }

  const { msg, error } = useSelector((state) => state.users.message)
  useEffect(() => {
    if (auth.name) navigate('/')
  }, [auth.name])
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles['login-form']}>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              className={styles.error}
              component="span"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              className={styles.error}
              component="span"
            />
          </div>

          <div>
            <Link to="/users/reset-password">Olvidé mi contraseña</Link>
          </div>
          <div>
            ¿No tienes una cuenta? <Link to="/signup">Regístrate aquí</Link>
          </div>
          <button type="submit" disabled={isSubmitting}>
            Iniciar sesión
          </button>
          {msg && <Alert error={error}>{msg}</Alert>}
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
