import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import { values } from "lodash";
import axios from "axios";
import React, { useContext, useState } from "react";
import * as Yup from "yup";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const initialValues = {
    question: '',
    answer: ''
}


const errornotify = () => toast.error("Invalid Credentials", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
});

const successnotify = () => toast.error("FAQ Added", {
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
        .post(`http://localhost:90/add/admin/faq`, values)
        .then(result => {

           console.log(result.data)
            if (result.data.success) { 
    
                successnotify()
                
            } else {
                errornotify()
            }
        }).catch(error => {
            console.error("Error loggin in", error)
        })
}

const validationSchema = Yup.object({
    question: Yup.string().required('Required'),
    answer: Yup.string().required('Required')
})


function Addfaq() {
    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <div className="loginform">
                    <div className="col-md-12 col-lg-12">
                        <h3 className="form-heading mb-4">Add FAQs</h3>

                        <Form>
                            <div className="form-label-group form-control">
                                <Field
                                    type="question" name="question" id="question" placeholder="Question"
                               
                                />
                                <label htmlFor="question"> Question </label>


                                <ErrorMessage name='question' render={msg => <div className="error">{msg}</div>} />

                            </div>

                            <div className="form-label-group form-control">
                                <Field type="answer" name="answer" id="answer" placeholder="Answer"

                                />
                                <label htmlFor="answer">Answer</label>

                                <ErrorMessage name="answer" render={msg => <div className="error">{msg}</div>} />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"

                                type="submit"
                            >
                                Add Question
                            </button>

                        </Form>
                    </div>
                </div>


            </Formik>
            <ToastContainer />
        </>
    )
}


export default Addfaq