import axios from "axios";
import React, { useState } from "react";
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
        .post(`${process.env.REACT_APP_BASE_URI}/login`, values)
        .then(result => {


            if (result.data.success) {
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('userid', result.data.userid)

                window.location.href = '/'
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


    let [forgot, setForgot] = useState({ "email": "" });

    const changeHandler = (e) => {
        setForgot({
            ...forgot,
            [e.target.name]: e.target.value
        })
    }


    const verifyAddress = (e) => {
        e.preventDefault();
        axios.post("http://localhost:90/forgot/password", forgot)
            .then((response) => {
                if (response.data.success == true) {
                    localStorage.setItem('email', forgot.email)
                    toast.success(response.data.message)
                }
                else {
                    toast.error(response.data.message)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
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
                                // onBlur={formik.handleBlur}
                                // onChange={formik.handleChange} 
                                // value={formik.values.email}  Alternative with { ... formik.getFieldProps('name')}
                                // {...formik.getFieldProps('email')}
                                />
                                <label htmlFor="username">Username</label>

                                {/* {formik.touched.email && formik.errors.email ? (<div className="error"> {formik.errors.email} </div>) : null} */}

                                <ErrorMessage name='username' render={msg => <div className="error">{msg}</div>} />

                            </div>

                            <div className="form-label-group form-control">
                                <Field type="password" name="password" id="password" placeholder="Password"

                                // {...formik.getFieldProps('password')}
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
                                <a className="small" data-bs-toggle="modal" data-bs-target="#forgotPassword" href="#">Forgot password?</a></div>

                            <p className="registerprompt">Not an User, Register Now. Click<a href="/register">Here</a></p>
                        </Form>
                    </div>
                </div>


            </Formik>
            <div class="modal fade" id="forgotPassword" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Enter Email Address</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form method="post" onSubmit={verifyAddress}>
                                <div className="form-group">
                                    <label>  Enter your email address </label>
                                    <input type="email" className="form-control" name="email" value={forgot.email} required onChange={(e) => { changeHandler(e) }} />

                                </div>

                                <div className="text-center">
                                    <button className="btn btn-primary w-50" type="submit" name="forgot"> Verify </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <ToastContainer />
        </>

    )
}

export default Login