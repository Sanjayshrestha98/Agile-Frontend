import { Component } from "react";
import axios from "axios";
import React from "react";
import { useFormik } from 'formik';


function Login() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        }
    })

    console.log('form values', formik.values)

    return (
        <div>
            <div className="loginform">
                <div className="col-md-12 col-lg-12">
                    <h3 className="form-heading mb-4">Welcome Back ! Login to Continue</h3>
                    <form>
                        <div className="form-label-group">
                            <input type="email" name="email" id="email" className="form-control" placeholder="Email address"
                                onChange={formik.handleChange} value={formik.values.email} required />
                            <label htmlFor="email">Email address</label>
                        </div>

                        <div className="form-label-group">
                            <input type="password" name="password" id="password" className="form-control" placeholder="Password"
                                onChange={formik.handleChange} value={formik.values.password} required />
                            <label htmlFor="password">Password</label>
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

        </div>
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