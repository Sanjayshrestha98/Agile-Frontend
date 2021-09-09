import React from 'react';
import axios from "axios";
import { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import { values } from "lodash";
import * as Yup from "yup";
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
    username: '',
    password: ''
}

const notify = () => toast.error("Invalid Credentials", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});


const onSubmit = values => {
    console.log('Form Data', values)
    const response = axios
        .post(`${process.env.REACT_APP_BASE_URI}/admin/login`, values)
        .then(result => {
            if (result.data.success) {
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('adminid', result.data.adminId)

                window.location.href = '/admin/dashboard'
            } else {
                notify()
            }
        }).catch(error => {
            console.error("Error logging in", error)
        })
}


const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required')
})


function AdminLogin() {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <div className="loginform">
                    <div className="col-md-12 col-lg-12">
                        <h3 className="form-heading mb-4">Welcome Back ! Login to Continue</h3>

                        <Form>
                            <div className="form-label-group form-control">
                                <Field
                                    type="text" name="username" id="username" placeholder="Admin name"
                                />
                                <label htmlFor="username">Admin Username</label>

                                <ErrorMessage name='username' render={msg => <div className="error">{msg}</div>} />

                            </div>

                            <div className="form-label-group form-control">
                                <Field type="password" name="password" id="password" placeholder="Admin Password"
                                />
                                <label htmlFor="password">Admin Password</label>

                                <ErrorMessage name="password" render={msg => <div className="error">{msg}</div>} />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"

                                type="submit"
                            >
                                Log in
                            </button>
                        </Form>
                    </div>
                </div>


            </Formik>
            <ToastContainer />
        </>

    )
}

export default AdminLogin