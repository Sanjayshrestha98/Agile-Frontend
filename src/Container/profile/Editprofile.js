import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Modal } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from "yup";
import { Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { TextField, Button } from '@material-ui/core';


function Editprofile() {

    const [data, setuserdata] = useState([]);
    let [userDetail,setUserDetail] = useState({
        "fullname":"",
        "gender":"",
        "age":"",
        "email":"",
        "phone":"",
        "address":"",
        "username":""
    });

    function profiledata() {

        const userid = localStorage.getItem('userid')

        console.log('asdasdasd', userid)

        axios.get('http://localhost:90/getsingleuser/' + userid)
            .then((response) => {
               
                setUserDetail({
                    ...userDetail,
                    ["fullname"]:response.data.userData.fullname,
                    ["gender"]:response.data.userData.gender,
                    ["age"]:response.data.userData.age,
                    ["email"]:response.data.userData.email,
                    ["phone"]:response.data.userData.phone,
                    ["address"]:response.data.userData.address,
                    ["username"]:response.data.userData.username

                })
                setuserdata(response.data.userData)
                console.log(response.data.userData)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {

        profiledata()

    }, [])


    const notify = () => toast.error("Invalid Credentials", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const updateDetails = (e) => {
        console.log(data)
        e.preventDefault();
        const id = localStorage.getItem('userid')
        axios.put(`http://localhost:90/userupdate/` + id,userDetail)
            .then((response)=>{
                console.log(response)
                if(response.data.success == true)
                {

                }
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    const changeHandler = (e)=>{
        setUserDetail({
            ...userDetail,
            [e.target.name]:e.target.value
        })
    }


    return (
        <>

            <Formik
                enableReinitialize={true}
                method="post"
                initialValues={{
                    fullname: userDetail?.fullname,
                    username: userDetail?.username,
                    email: userDetail?.email,
                    phone: userDetail?.phone,
                    address: userDetail?.address,
                    gender: userDetail?.gender,
                    // profile: <img src={`http://localhost:90/${data.profile}`} style={{ height: "200px" }} />,
                }

                }
              
            >

                <div>
                    <h3 className="adminpage-headers mb-4"> Edit Profile </h3>
                    <div className="addproductform">

                        <div className="row">
                            <Form>
                                <div className="col-md-10">
                                    <div className="form-label-group form-control">
                                        <Field
                                            type="text" name="username" id="username" placeholder="Username" onChange={(e)=>{changeHandler(e)}}
                                        ></Field>
                                        <label htmlFor="username">User Name</label>
                                        <ErrorMessage name='username' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="text" name="fullname" id="fullname" placeholder="fullname"  onChange={(e)=>{changeHandler(e)}}

                                        />
                                        <label htmlFor="fullname">Fullname</label>
                                        <ErrorMessage name='fullname' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="text" name="email" id="email" placeholder="Email"  onChange={(e)=>{changeHandler(e)}}

                                        />
                                        <label htmlFor="email">Email</label>
                                        <ErrorMessage name='email' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="text" name="address" id="address" placeholder="Address"  onChange={(e)=>{changeHandler(e)}}

                                        />
                                        <label htmlFor="address">Address</label>
                                        <ErrorMessage name='address' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field 
                                            type="text" name="gender" id="gender" placeholder="gender"  onChange={(e)=>{changeHandler(e)}}

                                        />
                                        <label htmlFor="gender">Gender</label>
                                        <ErrorMessage name='gender' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    {/* <div className="form-label-group form-control">
                                        <input
                                            type="file" name="profile" id="profile" placeholder="profile"

                                        />
                                        <label htmlFor="profile">Profile Picture</label>
                                        <ErrorMessage name='profile' render={msg => <div className="error">{msg}</div>} />
                                    </div> */}
                                    <img src={`http://localhost:90/${data.profile}`} style={{ height: "200px" }} />,



                                </div>

                                <div className="bottombutton">
                                    <button className="btn btn-lg btn-primary btn-block btn-addproduct text-uppercase font-weight-bold"   onClick={updateDetails}
                                        type="button"> Update Details </button>
                                </div>
                            </Form>
                        </div>

                    </div>
                </div>

            </Formik>
            <ToastContainer />
        </>
    )
}


export default Editprofile