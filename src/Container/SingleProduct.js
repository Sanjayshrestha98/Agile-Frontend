import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function SingleProduct({ location }) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        console.log(location.state.product)
        setProduct(location.state.product)
    }, [])

    const errornotify = () => toast.error("Invalid Credentials", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const succesnotify = () => toast.error("User Reistered Succesfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


    const addtoCart = (id) => {
        let data = {
            productId: id,

        }
        let config = {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
          }
        const response = axios
            .post(`http://localhost:90/add/buycart`, data,
                config
            ).then(result => {
                console.log(result.data)
                if (result.data.success) {
                    // window.location.href('/login')
                    succesnotify()
                } else {
                    errornotify()
                }
            }).catch(error => {
                console.error("Error Adding to Cart", error)
            })
    }

    const addtoRentCart = (id) => {
        let data = {
            productId: id,

        }
        let config = {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
          }
        const response = axios
            .post(`http://localhost:90/add/rentcart`, data,
                config
            ).then(result => {
                console.log(result.data)
                if (result.data.success) {
                    // window.location.href('/login')
                    succesnotify()
                } else {
                    errornotify()
                }
            }).catch(error => {
                console.error("Error Adding to Cart", error)
            })
    }

    return (
        <div>
            <main className="maincontainer">
                <div className="row">
                    <div className="product">
                        <img className="productimage" alt="productimage" src={`http://localhost:90/${product?.image}`} max-width="300px" />
                    </div>

                    <div className="dots">
                        <span className="dot dot-color-1 active"></span>
                        <span className="dot dot-color-2"></span>
                    </div>

                    <div className="info col-md-5">
                        <div className="product-info">
                            <span className="info-subtitle">Product Name :</span>
                            <h1 className="product-title"> {product?.productname}</h1>
                            <p className="product-description"> {product?.description} </p>
                        </div>

                        <div className="info-down">
                            <div className="price">
                                <h3 className="price-title"> Buy Price</h3>
                                <span className="size-total active">{product?.buy_price}</span>

                            </div>
                            <div className="price">
                                <h3 className="price-title"> Rent Price</h3>
                                <span className="size-total active">{product?.rent_price}</span>

                            </div>

                        </div>
                        <div className="price">
                            <button className="price-button" onClick={(e) => {
                                e.preventDefault()
                                addtoCart(product?._id)
                            }}>ADD TO CART </button>
                        </div>

                        <div className="price">
                            <a href="/cartpage" className="price-button" onClick = {(e) => {
                                e.preventDefault();
                                addtoRentCart(product?._id)
                            }}>Rent this Product</a>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}

export default SingleProduct