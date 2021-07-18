import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";

function EditProduct({location}) { 

const [data, setData] = useState({})

    const errornotify = () => toast.error("Product Not Inserted", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const successnotify = () => toast.error("Product Loaded Successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    
    const validationSchema = Yup.object({
        productname: Yup.string().required('Required'),
        platform: Yup.string().required('Required'),
        price: Yup.number().required('Required'),
        publisher: Yup.string().required('Required'),
        genre: Yup.string().required('Required'),
        release_date: Yup.string().required('Required'),
        system_requirements: Yup.string().required('Required'),
        instock: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
    })

    const onSubmit = values => {
 
        const result = axios
            .post(`http://localhost:90/update/product/:id`, values).then(result => {
                console.log(result.data)
                if (result.data.success) {
                    successnotify()
                } else {
                    errornotify()
                }
            }).catch(error => {
                console.error("Error Inserting Product", error)
            })
    }

    const getData = () => { 
        const id = location.state.id
        axios
        .get(`http://localhost:90/getsingleproduct/`+id ).then(result => {
           console.log(result.data.productData)
            if (result.data.success) {
                setData(result.data.productData)
                successnotify()
            } else {
                errornotify()
            }
        }).catch(error => {
            console.error("Error Inserting Product", error)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return(
       <>
            <Formik
            enableReinitialize={true}
                initialValues={{
                    productname: data?.productname,
                    platform: data?.platform,
                    price: data?.price,
                    publisher: data?.price, 
                    screenshots: '',
                    genre: data?.genre,
                    release_date: data?.release_date,
                    system_requirements: data?.system_requirements,
                    instock: data?.instock,
                    description: data?.description,
                }
            }
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <div>
                    <h3 className="adminpage-headers mb-4"> Edit Products </h3>
                    <div className="addproductform">

                        <div className="row">
                            <Form>
                                <div className="col-md-5">
                                    <div className="form-label-group form-control">
                                        <Field
                                            type="text" name="productname" id="productname" placeholder="Productname"
                                        ></Field>
                                        <label htmlFor="productname">Product Name</label>
                                        <ErrorMessage name='productname' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="number" name="price" id="price" placeholder="Price"

                                        />
                                        <label htmlFor="price">Price</label>
                                        <ErrorMessage name='prie' render={msg => <div className="error">{msg}</div>} />
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
                                            type="text" name="genre" id="genre" placeholder="Genre"

                                        />
                                        <label htmlFor="genre">Genre</label>
                                        <ErrorMessage name='genre' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                </div>

                                <div className="col-md-5">

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
                                </div>

                                <div className="bottombutton">
                                    <button className="btn btn-lg btn-primary btn-block btn-addproduct text-uppercase font-weight-bold"
                                        type="submit"> Add Product </button>
                                </div>
                            </Form>
                        </div>

                    </div>
                    <p className="registerprompt">View Your Added Products   <a href="#">Here</a></p>
                </div>

            </Formik>
            <ToastContainer />
        </>
    )
}

export default EditProduct