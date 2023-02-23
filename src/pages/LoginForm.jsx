import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import s from '../styles/LoginForm.module.css'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { logUser } from '../redux/slices/thunksUsers.js'

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
})

const LoginForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(logUser(values)).then(() => {
      setSubmitting(false)
    })
  }
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={s['login-form']}>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
