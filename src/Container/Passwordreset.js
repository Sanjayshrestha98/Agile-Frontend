import { Component } from "react";
import axios from "axios";
import React, { useContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import { values } from "lodash";
import * as Yup from "yup";
import 'react-toastify/dist/ReactToastify.css';


const initialValues = {
    newpassword: '',
    repassword:''
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
        .post(`http://localhost:90/`, values)
        .then(result => {

           
            if (result.data.success) { 
    
                window.location.href = '/login'
            } else {
                notify()
            }
        }).catch(error => {
            console.error("Error changing password in", error)
        })
}

const validationSchema = Yup.object({
    newpassword: Yup.string().required('Required'),
    repassword: Yup.string().required('Required'),
    repassword: Yup.string().when("newpassword", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
            [Yup.ref("newpassword")],
            "Both password need to be the same"
        )
    })
})

function Passwordreset() {

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <div className="loginform">
                    <div className="col-md-12 col-lg-12">
                        <h3 className="form-heading mb-4">Welcome Back ! Reset Your Password</h3>

                        <Form>
                            <div className="form-label-group form-control">
                                <Field
                                    type="password" name="newpassword" id="newpassword" placeholder="New Password"
                                />
                                <label htmlFor="newpassword">New Password</label>
                                <ErrorMessage name='newpassword' render={msg => <div className="error">{msg}</div>} />

                            </div>

                            <div className="form-label-group form-control">
                                <Field type="password" name="repassword" id="repassword" placeholder="Re-Enter Password"
                                />
                                <label htmlFor="repassword">Re-Enter Password</label>

                                <ErrorMessage name="repassword" render={msg => <div className="error">{msg}</div>} />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"

                                type="submit"
                            >
                                Confirm
                            </button>

                        </Form>
                    </div>
                </div>


            </Formik>
            <ToastContainer />
        </>

    )
}

export default Passwordreset