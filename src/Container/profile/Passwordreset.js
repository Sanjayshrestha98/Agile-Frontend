import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

const ResetPassword = (props) => {
    let { } = props;


    let [resetPassword, setResetPassword] = useState({
        "newPassword": "",
        "confirmPassword": "",
        "resetToken": props.match.params.token

    })

    const resendLink = (e) => {
        if (localStorage.getItem("email")) {
            axios.post(`${process.env.REACT_APP_BASE_URI}/forgot/password`, { "email": localStorage.getItem("email") })
                .then((response) => {
                    if (response.data.success == true) {
                        toast.success(response.data.message);

                    }
                    else {
                        toast.error(response.data.message)
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        else {
            toast.error("Cannot find your valid Email Address:(")
        }

    }

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setResetPassword({
            ...resetPassword,
            [name]: value
        })
    }

    const resetThePassword = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_BASE_URI}/reset/Password`, resetPassword)
            .then((response) => {
                console.log(response)
                if (response.data.success == true) {
                    toast.success(response.data.message);
                    localStorage.removeItem('email');
                    window.location.href = "/login";
                }
                else {
                    setResetPassword({
                        ...resetPassword,
                        ['errors']: response.data.error
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <React.Fragment>
            <div className="container reset">
                <p style={{ color: 'black', fontSize: '20px', fontWeight: 'bold' }}>Reset Your Password </p>
                <form method="post" onSubmit={resetThePassword}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>New Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control password" name="newPassword" value={resetPassword.newPassword} onChange={(e) => { changeHandler(e) }} />

                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Confirm Password</label>
                            <div className="input-group">
                                <input type="password" className="form-control password2" name="confirmPassword" value={resetPassword.confirmPassword} onChange={(e) => { changeHandler(e) }} />

                            </div>


                        </div>
                    </div>

                    <div className='text-center'>
                        <button type="submit" name="btnReset" className="btn btn-success mt-2 pt-1 pb-1 pl-3 pr-3">Reset</button>
                    </div>

                </form>
                <div style={{ float: "right" }}>
                    <p>
                        Didnot get the Link?
                        <button style={{ background: "none", textDecoration: "underline", border: "none", marginLeft: "5px", marginTop: "15px" }} type="button" name="resend" onClick={(e) => { resendLink(e) }}>  Resend Link </button>
                    </p>

                </div>
            </div>

        </React.Fragment>
    )
}

export default ResetPassword
