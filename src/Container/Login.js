import { Component } from "react";
import axios from "axios";
import React from "react";
import { useFormik, Formik } from 'formik';
import { values } from "lodash";
import * as Yup from "yup";

const initialValues = {
    email: '',
    password: ''
}

const onSubmit = values => {
    console.log('Form Data', values)
}

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format').required('required'),
    password : Yup.string().required('Required')
})

const validate = values => {
    let errors = {}

    if (!values.email) {
        errors.email = "Required"
    } else if (!/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(values.email)) {
        errors.email = "Invalid email"
    }

    if (!values.password) {
        errors.password = "Required"
    }

    return errors
}



function Login() {

    const formik = useFormik({

        initialValues,
        onSubmit,
        validationSchema
    
    })

    console.log('form errors', formik.errors)
    console.log('visited Fields', formik.touched)

    return (
        <Formik
        initialValues = {initialValues}
        >
            <div className="loginform">
                <div className="col-md-12 col-lg-12">
                    <h3 className="form-heading mb-4">Welcome Back ! Login to Continue</h3>

                    <form onSubmit={formik.handleSubmit}>

                        <div className="form-label-group form-control">


                            <input type="email" name="email" id="email" placeholder="Email address"
                                // onBlur={formik.handleBlur}
                                // onChange={formik.handleChange} 
                                // value={formik.values.email}  Alternative with { ... formik.getFieldProps('name')}
                                {...formik.getFieldProps('email')}
                            />
                            <label htmlFor="email">Email address</label>

                            {formik.touched.email && formik.errors.email ? (<div className="error"> {formik.errors.email} </div>) : null}
                        </div>


                        <div className="form-label-group form-control">
                            <input type="password" name="password" id="password" placeholder="Password"

                                {...formik.getFieldProps('password')}
                            />
                            <label htmlFor="password">Password</label>

                            {formik.touched.password && formik.errors.password ? (<div className="error">{formik.errors.password} </div>) : null}
                        </div>
                        <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit"
                        >
                            Log in
                        </button>

                        <div className="text-center">
                            <a className="small" href="/login">Forgot password?</a></div>

                        <p className="registerprompt">Not an User, Register Now. Click<a href="/register">Here</a></p>
                    </form>
                </div>
            </div>

        </Formik>
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