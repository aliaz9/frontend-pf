import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import Alert from '../components/Alert.jsx'
import { registerUser } from '../redux/slices/thunksUsers.js'
import '../styles/Sing-in.css'

export default function SignIn () {
  const dispatch = useDispatch()
  const { msg, error } = useSelector((state) => state.users.message)
  return (
    <div className="box">
      {/* <h1>Registrate!</h1> */}
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validate={(values) => {
          const errors = {}

          if (!values.email) {
            errors.email = 'Email requerido.'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Email invalido.'
          }

          return errors
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(registerUser(values))
          resetForm()
        }}
      >
        {({ values, touched, handleSubmit, handleChange, handleBlur }) => (
          <Form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Nombre:</label>
              <Field type="text" name="name" className="form-control" />
              {touched.name && <ErrorMessage name="name" component="span" />}
            </div>

            <div className="mb-3">
              <label className="form-label">Email:</label>
              <Field type="email" name="email" className="form-control" />
              {touched.email && <ErrorMessage name="email" component="span" />}
            </div>

            <div className="mb-3">
              <label className="form-label">Contraseña:</label>
              <Field type="password" name="password" className="form-control" />
              {touched.password && (
                <ErrorMessage name="password" className='alert alert-primary' component="span" />
              )}
            </div>

            <button type="submit" className="btn btn-primary mb-3 ">
              Regitrarse
            </button>

            {msg && <Alert error={error}>{msg} </Alert>}
          </Form>
        )}
      </Formik>
    </div>
  )
}
