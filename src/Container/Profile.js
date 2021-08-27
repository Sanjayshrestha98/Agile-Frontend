import { React, useState } from 'react';
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


    const EditProfile = (e) => {
        e.preventDefault();
        axios.put("http://localhost:90/userProfile/updateProfile" ,this.state,this.state.config)
        .then((response) => {
            
            this.props.history.push("/userprofile")
            this.componentDidMount()

        })
        .catch((err) => {
            console.log(err.response)
        })
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

            <button className="OrderButton" onClick={() => RentedOrder()}>
                Rented Products
            </button>



            <div className="container emp-profile">
                <form method="">
                    <div className="row">
                        <div className="col-md-4">
                            <img src alt="profile" />
                        </div>

                        <div className="col-md-6">
                            <div className="profile-head">
                                <h2>My Profile</h2>

                            </div>
                        </div>
                        <div className="form">
                            <div className="row m-2">
                                <div className="col-6 p-2">
                                    <TextField id="firstname" type="text" variant="outlined" label="First Name" fullWidth
                                        value={this.state.firstname} onChange={(event) => { this.setState({ firstname: event.target.value }) }}
                                    />
                                </div>
                                <br />

                                <div className="col-6 p-2">
                                    <TextField id="lastname" type="text" variant="outlined" label="Last Name" fullWidth
                                        value={this.state.lastname} onChange={(event) => { this.setState({ lastname: event.target.value }) }}
                                    />
                                </div>
                                <br />
                            </div>

                            <br />

                            <div className="row m-2">
                                <TextField id="email" className="p-2" type="text" variant="outlined" label="Email" fullWidth
                                    value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }}
                                />

                                <div className="col-6 p-2">
                                    <TextField id="phone" type="text" variant="outlined" label="Phone" fullWidth
                                        value={this.state.phone} onChange={(event) => { this.setState({ phone: event.target.value }) }}
                                    />
                                </div>
                                <br />

                                <div className="col-6 p-2">
                                    <TextField id="address" type="text" variant="outlined" label="Address" fullWidth
                                        value={this.state.address} onChange={(event) => { this.setState({ address: event.target.value }) }}
                                    />
                                </div>
                                <br />
                            </div>
                            <br />
                            <div className="col-md-2">
                                <Button variant="contained" color="primary" onClick={this.EditProfile}>Update</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>


            <Button variant="primary" onClick={handleShow}>
                Reset Password
            </Button>

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