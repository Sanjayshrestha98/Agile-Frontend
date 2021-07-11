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

const notify = () => toast.error("Invalasdasdid Credentials", {
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
    // email: Yup.string().email('Invalid Email Format').required('Field cannot be empty'),
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required')
})

function Login() {

    // const formik = useFormik({

    //     initialValues,
    //     onSubmit,
    //     validationSchema

    // })

    // console.log('form errors', formik.errors)
    // console.log('visited Fields', formik.touched)

    // userlogin = (e) => {
    //     e.preventDefault()
    // }

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


// class Login extends Component{
//     state = {
//         email: "",
//         password: ""
//     }

//     loginform = () => {
//         initialValues: {
//             email:'',
//             password : '';
//         }
//     }

//     changeHandler = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
//     userLogin = (e) => {
//         e.preventDefault()
//         // const data={
//         //     email:this.state.email,
//         //     password:this.state.password,
//         // }
//         axios.post("http://localhost:90/login", this.state)
//             .then(response => {
//                 console.log(response);

//                 response.data.token === undefined ? alert("Invalid email or password.") : window.location.href= "/home"

//                 this.setState({
//                     loginchk: true,
//                 })
//                 localStorage.setItem('token', response.data.token)

//             })
//             .catch((err) => {
//                 console.log(err.response)
//                 alert("Invalid email or password.");
//             })

//     }
//   render(){
//       return(
//     <div className="loginform">
//     <div className="col-md-12 col-lg-12">
//         <h3 className="form-heading mb-4">Welcome Back ! Login to Continue</h3>
//         <form>

//             <div className="form-label-group">
//                 <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address"
//                     value={this.state.email}
//                     onChange={(event) => { this.setState({ email: event.target.value }) }} required />
//                 <label htmlFor="inputEmail">Email address</label>
//             </div>

//             <div className="form-label-group">
//                 <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password"
//                     value={this.state.password}
//                     onChange={(event) => { this.setState({ password: event.target.value }) }} required />
//                 <label htmlFor="inputPassword">Password</label>
//             </div>

//             <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit"
//                 onClick={this.userLogin}>
//                 Log in
//                 </button>

//             <div className="text-center">
//                 <a className="small" href="/login">Forgot password?</a></div>

//             <p className="registerprompt">Not an User, Register Now. Click<a href="/register">Here</a></p>
//         </form>
//     </div>
// </div>
//       )
//   }

// }

export default Login