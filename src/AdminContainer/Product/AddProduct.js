import React from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";

function AddProduct() {

    const initialValues = {
        productname: '',
        platform: '',
        price: '',
        publisher: '',
        image: '',
        screenshots: '',
        genre: '',
        release_date: '',
        system_requirements: '',
        instock: '',
        description: '',
        trailer: '',
    }

    const notify = () => toast.error("Product Not Inserted", {
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
            .post(`http://localhost:90/addproduct`, values)
            .then(result => {
                if (result.data.success) {
                    localStorage.setItem('token', result.data.token)
                    localStorage.setItem('userid', result.data.userid)
                    window.location.href = '/home'
                } else {
                    notify()
                }
            }).catch(error => {
                console.error("Error loggin in", error)
            })
    }

    const validationSchema = Yup.object({
        productname: Yup.string().required('Required'),
        platform: Yup.string().required('Required'),
        price: Yup.string().required('Required'),
        publisher: Yup.string().required('Required'),
        image: Yup.string().required('Required'),
        screenshots: Yup.string().required('Required'),
        genre: Yup.string().required('Required'),
        release_date: Yup.string().required('Required'),
        system_requirements: Yup.string().required('Required'),
        instock: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        trailer: Yup.string().required('Required'),
    })

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <div>

                    <h3 className="adminpage-headers mb-4"> Add Products </h3>


                    <div className="addproductform">

                        <div className="row">
                            <div className="col-md-6">
                                <Form>

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="text" name="productname" id="productname" placeholder="Productname"

                                        />
                                        <label htmlFor="productname">Product Name</label>
                                        <ErrorMessage name='productname' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="text" name="platform" id="platform" placeholder="Platform"

                                        />
                                        <label htmlFor="platform">Platform</label>
                                        <ErrorMessage name='platform' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="publisher" name="publisher" id="publisher" placeholder="publisher"

                                        />
                                        <label htmlFor="publisher">Publisher</label>
                                        <ErrorMessage name='publisher' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="file" name="image" id="image" placeholder="Image"

                                        />
                                        <label htmlFor="image">Image</label>
                                        <ErrorMessage name='image' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="genre" name="genre" id="genre" placeholder="Genre"

                                        />
                                        <label htmlFor="genre">Genre</label>
                                        <ErrorMessage name='genre' render={msg => <div className="error">{msg}</div>} />
                                    </div>
                                </Form>

                            </div>
                            <div className="col-md-6">
                                <Form>
                                    <div className="form-label-group form-control">
                                        <Field
                                            type="text" name="release_date" id="release_date" placeholder="Released On"

                                        />
                                        <label htmlFor="release_date">Released On</label>
                                        <ErrorMessage name='release_date' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className=" form-label-group form-control">
                                        <label htmlFor="system_requirements">System Requirements</label>

                                        <Field
                                            type="textarea" name="system_requirements" id="system_requirements" placeholder="System Requirements"

                                        />
                                        <ErrorMessage name='system_requirements' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="text" name="instock" id="instock" placeholder="In Stock"

                                        />
                                        <label htmlFor="instock">In Stock</label>

                                        <ErrorMessage name='instock' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="textarea" name="description" id="description" placeholder="Description"

                                        />
                                        <label htmlFor="description">Description</label>
                                        <ErrorMessage name='description' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field type="file" name="trailer" id="trailer" placeholder="Trailer"
                                        />
                                        <label htmlFor="trailer">Trailer</label>

                                        <ErrorMessage name="trailer" render={msg => <div className="error">{msg}</div>} />
                                    </div>
                                </Form>
                            </div>
                        </div>



                    </div>

                    <div className="bottombutton">
                        <button className="btn btn-lg btn-primary btn-block btn-addproduct text-uppercase font-weight-bold"
                            type="submit" > Add Product </button>
                    </div>

                    <p className="registerprompt">View Your Added Products   <a href="#">Here</a></p>

                </div>

            </Formik>
            <ToastContainer />
        </>
    )
}
export default AddProduct