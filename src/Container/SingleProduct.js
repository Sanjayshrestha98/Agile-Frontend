import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import ReactPlayer from 'react-player';
import { ImHeart } from 'react-icons/im';


import moment from 'moment';

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

    const succesnotify = () => toast.error("Product Has Been Added", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const formatteddate = moment(product?.release_date).utc().format('YYYY/MM/DD')

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

    const addtoFav = (id) => {
        let data = {
            productId: id,

        }
        let config = {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
        const response = axios
            .post(`http://localhost:90/add/favourite`, data,
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
                    succesnotify()
                } else {
                    errornotify()
                }
            }).catch(error => {
                console.error("Error Adding to Cart", error)
            })
    }

    return (
        <div className=" container productbody">

            <title>Product Card/Page</title>


            <div class="container productbody">
                <div class="row">
                    <div class="col">
                        <div class="img-showcase">
                            <img src={`http://localhost:90/${product?.image}`} alt="shoe image" />
                        </div>
                    </div>




                    <div class="col">
                        <h2 class="product-title">{product?.productname}</h2>
                        <a class="product-link">{product?.publisher}</a>

                        <div class="product-price">
                            <p class="new-price">Buy Price: <span>{product?.buy_price}</span></p>
                            <p class="new-price">Rent Price: <span>{product?.rent_price}</span></p>
                        </div>

                        <div class="product-detail">
                            <h2>about this item: </h2>
                            <p>{product?.description}</p>
                            <ul>
                                <li>System Requirements <span>{product?.system_requirements}</span></li>
                                <li>InStock: <span>{product?.instock}</span></li>
                                <li>Category: <span>{product?.genre}</span></li>
                                <li>Platform: <span>{product?.platform}</span></li>
                                <li>Released on: <span>{formatteddate}</span></li>
                                <li>Condition: <span>{product?.condition}</span></li>

                            </ul>
                        </div>

                        <div class="purchase-info">
                            <button type="button" class="btn" onClick={(e) => {
                                e.preventDefault()
                                addtoCart(product?._id)
                            }}>
                                Add to Cart < i class="fas fa-shopping-cart"></i>
                            </button>
                            <button className=" btn fav" onClick={(e) => {
                                e.preventDefault()
                                addtoFav(product?._id)
                            }} type="button" ><ImHeart /></button>

                            <button type="button" class="btn" onClick={(e) => {
                                e.preventDefault();
                                addtoRentCart(product?._id)
                            }}>Rent</button>

                        </div>
                    </div>
                </div>
            </div>



        </div >

    )
}

export default SingleProduct