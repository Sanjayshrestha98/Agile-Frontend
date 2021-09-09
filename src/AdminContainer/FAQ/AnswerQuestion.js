import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";


function AnswerQuestion({ location }) {

    const [data, setData] = useState({})

    const errornotify = () => toast.error("Question Not Answered", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const successnotify = () => toast.error("Question Answered Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const validationSchema = Yup.object({
        question: Yup.string().required('Required'),
        answer: Yup.string().required('Required'),
    })


    const onSubmit = values => {
        const id = location.state.id
        const result = axios
            .put(`${process.env.REACT_APP_BASE_URI}/update/faq/` + id, values)
            .then(result => {
                console.log(result.faqdata)
                if (result.data.success) {
                    successnotify()
                    window.location.href = "/admin/faqlist"
                } else {
                    errornotify()
                }
            }).catch(error => {
                console.error("Error Answering Question", error)
            })
    }


    const getData = () => {
        const id = location.state.id
        axios
            .get(`${process.env.REACT_APP_BASE_URI}/getsinglefaq/` + id).then(result => {
                console.log(result.data.faqData)
                if (result.data.success) {
                    setData(result.data.faqData)
                    console.log(result.data.faqData)
                } else {
                    errornotify()
                }
            }).catch(error => {
                console.error("Error Inserting Answer", error)
            })
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <div>
            <>
                <Formik
                    enableReinitialize={true}

                    initialValues={{
                        question: data?.question,
                        answer: data?.answer,
                    }

                    }
                    // validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <div>
                        <h3 className="adminpage-headers mb-4"> FAQ </h3>
                        <div className="addproductform">

                            <div className="row">
                                <Form>
                                    <div className="col-md-8">
                                        <div className="form-label-group form-control">
                                            <Field
                                                type="text" name="question" id="question" placeholder="question"
                                            ></Field>
                                            <label htmlFor="question">Question</label>
                                            <ErrorMessage name='question' render={msg => <div className="error">{msg}</div>} />
                                        </div>

                                        <div className="form-label-group form-control">
                                            <Field
                                                type="text" name="answer" id="answer" placeholder="Buy Price"

                                            />
                                            <label htmlFor="answer">Answer</label>
                                            <ErrorMessage name='answer' render={msg => <div className="error">{msg}</div>} />
                                        </div>



                                        <div className="bottombutton">
                                            <button className="btn btn-lg btn-primary btn-block btn-addproduct text-uppercase font-weight-bold"
                                                type="submit"> Answer Question </button>
                                        </div>
                                    </div>
                                </Form>
                            </div>

                        </div>
                    </div>

                </Formik>
                <ToastContainer />
            </>

        </div>
    )
}

export default AnswerQuestion