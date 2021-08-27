import { React, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from "yup";
import { Field, ErrorMessage } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";



function Profile() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function RentedOrder() {
        window.location.href = ('/rentorder')
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
        console.log("URL",process.env.BASE_URL )
        const response = axios
            .post(``, values)
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