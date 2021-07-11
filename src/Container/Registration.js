import { Component } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import React from "react";
import * as Yup from "yup";
import { values } from "lodash";


const initialValues = {
    fullname: "",
    email: "",
    phone: "",
    address: "",
    gender: "",
    username: "",
    password: "",
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


const validationSchema = Yup.object({
    fullname: Yup.string().required('Required'),
    email: Yup.string().email('Invalid Email Format').required('Field cannot be empty'),
    phone: Yup.strig().phone('required'),
    address: Yup.string().address('Required'),
    gender: Yup.string().gender('required'),
    username: Yup.string().username('Required'),
    password: Yup.string().required('Required')
})


const onSubmit = values => {
    console.log('Formdata', values)
    const response = axios.post(`http://localhost:90/signup`, values).then(result => {
        if (result.data.sucess) {

        } else {
            notify()
        }
    }).catch(error => {
        console.error("Error Registering User", error)
    })
}

class Register extends Component {

    render() {
        return (

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                <div className="registerform">
                    <div className="col-md-12 col-lg-12">
                        <h3 className="form-heading mb-4">Fill out the details below.</h3>
                        <Form>
                            <div className="form-label-group">
                                <Field type="text" name="Fullname" id="Fullname" placeholder="Fullname"
                                />
                                <label htmlFor="Fullname">Full Name</label>
                            </div>

                            <div className="form-label-group">
                                <Field type="text" name="address" id="address" placeholder="Address"
                                />
                                <label htmlFor="address">Address</label>
                            </div>

                            <div className="form-label-group">
                                <Field type="number" name="phone" id="phone" className="form-control" placeholder="Phone Number"
                                />
                                <label htmlFor="phone">Phone Number</label>
                            </div>


                            <div className="form-label-group">
                                <Field type="text" name="gender" id="inputgender" className="form-control" placeholder="Gender"
                                />
                                <label htmlFor="inputgender">Gender</label>
                            </div>

                            <div className="form-label-group">
                                <Field type="email" name="email" id="email" className="form-control" placeholder="Email" />
                                <label htmlFor="email">Email</label>
                            </div>

                            <div className="form-label-group">
                                <Field type="text" name="username" id="username"
                                    className="form-control" placeholder="username"
                                />
                                <label htmlFor="username">Username</label>
                            </div>

                            <div className="form-label-group">
                                <Field type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" />
                                <label htmlFor="password">Password</label>
                            </div>

                            <div className="form-label-group">
                                <Field type="password" name="confirmpassword" id="confirmpassword" className="form-control"
                                    placeholder="Re-Enter Password" required />
                                <label htmlFor="confirmpassword">Re-Enter Password</label>
                            </div>

                            <button className="btn btn-lg btn-primary btn-block btn-register text-uppercase font-weight-bold mb-2" type="submit"
                            >Confirm</button>

                            <p className="registerprompt">Already an User ? Login Now. Click<a href="/login">Here</a></p>
                        </Form>
                    </div>
                </div>

            </Formik>
        )
    }
}
export default Register;