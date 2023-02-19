import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from "react-redux";
import { addUser } from "../../actions";
import { Button } from "react-bootstrap";
import '../sign-in-form/sign-in-form.css';



export default function SignIn() {

let dispatch = useDispatch();
let [ success, setSuccess ] = useState(false);

    return (
        <div className="box">
            <h1>Registrate!</h1>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}

                validate={values => {
                    const errors = {};

                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    
                    return errors;
                }}

            onSubmit = {(values, {resetForm}) => {
                resetForm();
                dispatch(addUser(values));
                setSuccess(true);
                setTimeout(() => setSuccess(false), 5000)
            }}

            >
                {( {values, touched , handleSubmit, handleChange, handleBlur} ) => (
                    <Form onSubmit={handleSubmit}>
                        <div class="mb-3">
                        <label class="form-label">Nombre:</label>
                        <Field type="text" name="name" class="form-control"/>
                        { touched.name && <ErrorMessage name="name" component="div" /> }
                        </div>

                        <div class="mb-3">
                        <label class="form-label">Email:</label>
                        <Field type="email" name="email" class="form-control"/>
                        { touched.email && <ErrorMessage name="email" component="div" /> }
                        </div>

                        <div class="mb-3">
                        <label class="form-label">Contraseña:</label>
                        <Field type="password" name="password" class="form-control"/>
                        { touched.password && <ErrorMessage name="password" component="div" /> }
                        </div>

                        <button type="submit" class="btn btn-primary mb-3">
                            Regitrarse
                        </button>

                        { success && <p> Su Usuario ha sido registrado con éxito. </p> }

                    </Form>
                )}
            </Formik>
        </div>
    )
};

