import { Component } from "react";
import axios from "axios";
import React, { useContext, useState } from "react";
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
        .post(`http://localhost:90/login`, values)
        .then(result => {

           
            if (result.data.success) { 
                localStorage.setItem('token',result.data.token)
                localStorage.setItem('userid',result.data.userid)
    
                window.location.href = '/home'
            } else {
                notify()
            }
        }).catch(error => {
            console.error("Error loggin in", error)
        })
}

const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required')
})

function Login() {

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
                                    type="username" name="username" id="username" placeholder="Username"
                                />
                                <label htmlFor="username">Username</label>
                                <ErrorMessage name='username' render={msg => <div className="error">{msg}</div>} />

                            </div>

                            <div className="form-label-group form-control">
                                <Field type="password" name="password" id="password" placeholder="Password"
                                />
                                <label htmlFor="password">Password</label>

                                <ErrorMessage name="password" render={msg => <div className="error">{msg}</div>} />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"

                                type="submit"
                            >
                                Log in
                            </button>

                            <div className="text-center">
                                <a className="small" href="/login">Forgot password?</a></div>

                            <p className="registerprompt">Not an User, Register Now. Click<a href="/register">Here</a></p>
                        </Form>
                    </div>
                </div>


            </Formik>
            <ToastContainer />
        </>

    )
}


export default Login