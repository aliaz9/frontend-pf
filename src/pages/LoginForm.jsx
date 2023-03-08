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
    if (auth?.name) navigate('/')
  }, [auth?.name])
  return (
    <div className={styles.cont_log}>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={styles['login-form']}>
            <h1>Inicia Sesión Aquí</h1>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage
                name="email"
                className="form-label"
                component="span"
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage
                name="password"
                className="form-label"
                component="span"
              />
            </div>

            <div>
              <Link to="/users/reset-password">Olvidé mi contraseña</Link>
            </div>
            <br />
            <div>
              ¿No tienes una cuenta? <Link to="/sign-in">Regístrate aquí</Link>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              Iniciar sesión
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default LoginForm
