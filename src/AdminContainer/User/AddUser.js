import React from 'react';
import * as Yup from "yup";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function AddUser() {

    const errornotify = () => toast.error("Invalid Credentials", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const succesnotify = () => toast.error("User Reistered Succesfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const initialValues = {
        fullname: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        username: "",
        password: "",
    }

    const validationSchema = Yup.object({
        fullname: Yup.string().required('Required'),
        email: Yup.string().email('Invalid Email Format').required('Field cannot be empty'),
        phone: Yup.string().required('required'),
        address: Yup.string().required('Required'),
        gender: Yup.string().required('required'),
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        confirmpassword: Yup.string().required('Required'),
        confirmpassword: Yup.string().when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
            )
        })

    })


    const onSubmit = values => {
        console.log('Formdata', values)
        const response = axios
            .post(`${process.env.REACT_APP_BASE_URI}/signup`, values).then(result => {
                console.log(result.data)
                if (result.data.success) {
                    // window.location.href('/login')
                    succesnotify()
                } else {
                    errornotify()
                }
            }).catch(error => {
                console.error("Error Registering User", error)
            })
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                <div className="registerform">
                    <div className="col-md-12 col-lg-12">
                        <h3 className="form-heading mb-4">Fill out the details below.</h3>
                        <Form>
                            <div className="form-label-group form-control">
                                <Field
                                    type="text" name="fullname" id="Fullname" placeholder="Fullname"
                                />
                                <label htmlFor="Fullname">Full Name</label>

                                <ErrorMessage name='fullname' render={msg => <div className="error">{msg}</div>} />
                            </div>

                            <div className="form-label-group form-control">
                                <Field type="text" name="address" id="address" placeholder="Address"
                                />
                                <label htmlFor="address">Address</label>

                                <ErrorMessage name='address' render={msg => <div className="error">{msg}</div>} />
                            </div>

                            <div className="form-label-group form-control">
                                <Field type="number" name="phone" id="phone" placeholder="Phone Number"
                                />
                                <label htmlFor="phone">Phone Number</label>

                                <ErrorMessage name='phone' render={msg => <div className="error">{msg}</div>} />
                            </div>


                            <div className="form-control">

                                <label htmlFor="gender">Gender</label>
                                <div role="group" aria-labelledby="my-radio-group">
                                    <label>
                                        <Field type="radio" name="gender" value="Male" />
                                        Male
                                    </label>
                                    <label style = {{marginLeft : "20px"}}>
                                        <Field type="radio" name="gender" value="Female" />
                                        Female
                                    </label>
                                    <label style = {{marginLeft : "20px"}}>
                                        <Field type="radio" name="gender" value="Other" />
                                        Other
                                    </label>
                                </div>
                                <ErrorMessage name='gender' render={msg => <div className="error">{msg}</div>} />
                            </div>

                            <div className="form-label-group form-control">
                                <Field type="email" name="email" id="email" placeholder="Email" />
                                <label htmlFor="email">Email</label>
                                <ErrorMessage name='email' render={msg => <div className="error">{msg}</div>} />
                            </div>

                            <div className="form-label-group form-control">
                                <Field type="text" name="username" id="username"
                                    placeholder="username"
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

                            <div className="form-label-group form-control">
                                <Field type="password" name="confirmpassword" id="confirmpassword" placeholder="Confirm password"

                                />
                                <label htmlFor="confirmpassword">Confirm Password</label>

                                <ErrorMessage name="confirmpassword" render={msg => <div className="error">{msg}</div>} />
                            </div>

                            <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"

                                type="submit"
                            >
                                Confirm
                            </button>

                            <p className="registerprompt">Already an User ? Login Now. Click<a href="/login">Here</a></p>
                        </Form>
                    </div>
                </div>
            </Formik>
            <ToastContainer />
        </>
    )
}

export default AddUser