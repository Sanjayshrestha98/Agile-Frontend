import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";
import { MdDelete } from 'react-icons/md'

function AddProduct() {
    const [multiple, setMultiple] = useState([])
    const [image, setImage] = useState();
    const imageInputRef = React.useRef();

    const initialValues = {
        productname: '',
        platform: '',
        rent_price: '',
        buy_price: '',
        publisher: '',
        genre: '',
        release_date: '',
        added_Date: '',
        system_requirements: '',
        instock: '',
        description: '',
        trailer:''
    }

    const errornotify = () => toast.error("Product Not Inserted", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const successnotify = () => toast.error("Product Inserted Successfully", {
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
        buy_price: Yup.number().required('Required'),
        rent_price: Yup.number().required('Required'),
        publisher: Yup.string().required('Required'),
        genre: Yup.string().required('Required'),
        system_requirements: Yup.string().required('Required'),
        instock: Yup.string().required('Required'),
        trailer: Yup.string().required('Required'),
    })

    const onSubmit = values => {
        // handelDate()
        console.log('Formdata', values)
        const formData = new FormData();
        formData.append("productname", values.productname)
        formData.append("platform", values.platform)
        formData.append("buy_price", values.buy_price)
        formData.append("rent_price", values.rent_price)
        formData.append("publisher", values.publisher)
        formData.append("image", image)
        formData.append("genre", values.genre)
        formData.append("screenshots", multiple)
        formData.append("release_date", values.release_date)
        // formData.append("added_Date", )
        formData.append("system_requirements", values.system_requirements)
        formData.append("instock", values.instock)
        formData.append("description", values.description)
        formData.append("trailer", values.trailer)

        console.log(formData)

        axios
            .post(`http://localhost:90/add/product`, formData,
           { config: {
                headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }).then(result => {
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

    const addMultiple = (e) => {

        for (var i = 0; i < e.currentTarget.files.length; i++) {
            let val = e.currentTarget.files[i]
            let url = URL.createObjectURL(val)

            let checkFile = multiple.indexOf(url)
            if (checkFile === -1) {
                setMultiple(old => [...old, url])
            }
        }

    }

    const removeFromMultiple = (index) => {
        multiple.splice(index, 1)
        setMultiple(old => [...old])
        imageInputRef.current.value = "";
    }

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
                            {/* <h3>{cdate}</h3>
                            <button onClick={handelDate}>Get Current date</button> */}
                            <Form>
                                <div className="col-md-12">

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="text" name="productname" id="productname" placeholder="Productname"

                                        />
                                        <label htmlFor="productname">Product Name</label>
                                        <ErrorMessage name='productname' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="number" name="buy_price" id="buy_price" placeholder="Buy Price"

                                        />
                                        <label htmlFor="buy_price">Buy Price</label>
                                        <ErrorMessage name='buy_price' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <Field
                                            type="number" name="rent_price" id="rent_price" placeholder="Rent Price"

                                        />
                                        <label htmlFor="rent_price">Rent Price</label>
                                        <ErrorMessage name='rent_price' render={msg => <div className="error">{msg}</div>} />
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
                                        <input
                                            type="file" name="image" id="image" placeholder="Image"
                                            onChange={(e) => {
                                                setImage(e.currentTarget.files[0])
                                                console.log(e.currentTarget.files[0])
                                            }}
                                        />
                                        <label htmlFor="image">Image</label>
                                        <ErrorMessage name='image' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                    <div className="form-label-group form-control">
                                        <input
                                            type="file" name="screen" id="screen" placeholder="Image"
                                            multiple
                                            onChange={(e) => addMultiple(e)}
                                            ref={imageInputRef}
                                        />
                                        <label htmlFor="screen">Screenshots</label>
                                        <ErrorMessage name='screen' render={msg => <div className="error">{msg}</div>} />


                                        {multiple.length > 0 && multiple.map((val, index) => (
                                            <div style={{ position: "relative", width: "200px" }}>
                                                <MdDelete className="deleteicon" style={{ position: "absolute", right: "0", fontSize: "40px", background: "white", cursor: "pointer" }}
                                                    onClick={() => removeFromMultiple(index)} />
                                                <img src={val} className="img-fluid ml-5" style={{ height: "200px", width: "100%" }} />
                                            </div>
                                        ))}
                                    </div>



                                    <div className="form-label-group form-control">
                                        <Field
                                            type="text" name="genre" id="genre" placeholder="Genre"

                                        />
                                        <label htmlFor="genre">Genre</label>
                                        <ErrorMessage name='genre' render={msg => <div className="error">{msg}</div>} />
                                    </div>

                                </div>

                                <div className="col-md-12">

                                    <div className="form-label-group form-control">
                                        {/* <Field
                                            type="text" name="release_date" id="release_date" placeholder="Released On"

                                        /> */}

                                        <Field
                                            type="date" name="release_date" id="release_date" placeholder="Productname"

                                        />
                                        <label htmlFor="release_date">Released On</label>
                                        <ErrorMessage name='release_date' render={msg => <div className="error">{msg}</div>} />
                                    </div>
{/* 
                                    <div className=" form-label-group form-control">
                                        <label htmlFor="added_Date">{cdate}</label>

                                        <Field
                                            type="text" name="added_Date" id="added_Date" placeholder="added_Date"

                                        />
                                        <ErrorMessage name='added_Date' render={msg => <div className="error">{msg}</div>} />
                                    </div> */}

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
                                        <Field type="text" name="trailer" id="trailer" placeholder="Trailer"
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

export default AddProduct