import { React, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Modal } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from "yup";
import { Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import { TextField, Button } from '@material-ui/core';


function Profile() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function RentedOrder() {
        window.location.href = ('/rentorder')
    }



    const [data, setuserdata] = useState([]);

    useEffect(() => {

        const userid = localStorage.getItem('userid')

        console.log('asdasdasd', userid)

        axios.get('http://localhost:90/getsingleuser/' + userid)
            .then((response) => {
                setuserdata(response.data.userData)
                console.log(response.data.userData)
            })
            .catch((err) => {
                console.log(err)
            })

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


    const initialValues = {
        oldpassword: '',
        newpassword: '',
        repassword: '',
    }



    const onSubmit = values => {
        console.log('Form Data', values)
        console.log("URL", process.env.BASE_URL)
        const response = axios
            .post(`${process.env.BASE_URL}`, values)
            .then(result => {


                if (result.data.success) {
                    // localStorage.setItem('token', result.data.token)
                    // localStorage.setItem('userid', result.data.userid)

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
        oldpassword: Yup.string().required('Required'),
        newpassword: Yup.string().required('Required'),
        repassword: Yup.string().required('Required'),
        repassword: Yup.string().when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "Both password need to be the same"
            )
        })
    })


    return (
        <div className="Profile">

            <div>
                <div className="row py-5 px-4">
                    <div className="col-md-6 mx-auto">

                        <div className="bg-white shadow rounded overflow-hidden">
                            <div className="px-4 pt-0 pb-4 cover">

                                <img src="logo.png" width="200px" className="profile-pic rounded"/>

                            </div>
                            <div className="bg-light p-4 d-flex justify-content-end text-center gap-4">
                                <a onClick={() => RentedOrder()} className="btn btn-outline-dark btn-sm btn-block">Rented Products</a>


                                <a onClick={handleShow} className="btn btn-outline-dark btn-sm btn-block">Reset Password</a>

                                <a href="/profile" className="btn btn-outline-dark btn-sm btn-block">Edit profile</a>

                            </div>
                            <div className="px-4 py-3">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                    </li>

                                </ul>
                                <div class="col-md-10 userdetails">
                                    <div class="tab-content profile-tab" id="myTabContent">
                                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">


                                            <div class="row ">
                                                <div class="col-md-6">
                                                    <label>User Name</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>{data.username}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Full Name</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>{data.fullname} </p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Email</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>{data.email}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Phone</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>{data.phone}</p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Address</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>{data.address}</p>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <label>Gender</label>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>{data.gender}</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                centered
            >

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >

                    <Form>
                        <Modal.Header closeButton>
                            <Modal.Title>Password Reset</Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="">



                            <label>Enter Old Password</label>
                            <input id="oldpassword" type="password" />

                            <label>Enter New Password</label>
                            <input id="newpassword" type="password" />

                            <label>Re-Enter New Password</label>
                            <input id="repassword" type="password" />


                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>

                    </Form>
                </Formik>

            </Modal>
        </div>
    )
}

export default Profile