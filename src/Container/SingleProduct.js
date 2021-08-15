import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import ReactPlayer from 'react-player';


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
        // <div className="app">
        //     <div className="details">
        //         <div className="big-img">
        //             <img alt="productimage" src={`http://localhost:90/${product?.image}`} max-width="300px" />
        //         </div>
        //         <div>
        //             <ReactPlayer controls url={product.trailer}/>
        //         </div>

        //         <div className="dots">
        //             <span className="dot dot-color-1 active"></span>
        //             <span className="dot dot-color-2"></span>
        //         </div>
        //     </div>

        //     <div className="box">
        //         <div className="row">

        //             <span className="info-subtitle">Product Name :</span>
        //             <h1 className="product-title"> {product?.productname}</h1>
        //             <p className="product-description"> {product?.description} </p>

        //             <span className="info-subtitle">System Requirements :</span>

        //             <p className="product-description"> {product?.system_requirements} </p>

        //             {/* <div className="info-down"> */}
        //             {/* <div className="price"> */}
        //             <h3 className="price-title"> Buy Price</h3>
        //             <span className="size-total active">{product?.buy_price}</span>

        //             {/* </div> */}
        //             {/* <div className="price">/ */}
        //             <h3 className="price-title"> Rent Price</h3>
        //             <span className="size-total active">{product?.rent_price}</span>

        //             {/* </div> */}

        //             {/* </div> */}

        //             <div className="actionbuttons">
        //                 <button className="cart" onClick={(e) => {
        //                     e.preventDefault()
        //                     addtoCart(product?._id)
        //                 }}>ADD TO CART </button>


        //                 <button className="cart" onClick={(e) => {
        //                     e.preventDefault()
        //                     addtoFav(product?._id)
        //                 }}>ADD TO Favourite </button>


        //                 <button href="/cartpage" className="cart" onClick={(e) => {
        //                     e.preventDefault();
        //                     addtoRentCart(product?._id)
        //                 }}>Rent this Product</button>

        //             </div>


        //         </div>
        //         <ToastContainer />
        //     </div>
        // </div>


        <div class="card-wrapper">
            <div class="card">
                <div class="product-imgs">
                    <div class="img-display">
                        <div class="img-showcase">
                            <img src="shoes_images/shoe_1.jpg" alt="shoe image" />
                            <img src="shoes_images/shoe_2.jpg" alt="shoe image" />
                            <img src="shoes_images/shoe_3.jpg" alt="shoe image" />
                            <img src="shoes_images/shoe_4.jpg" alt="shoe image" />
                        </div>
                    </div>
                    <div class="img-select">
                        <div class="img-item">
                            <a href="#" data-id="1">
                                <img src="shoes_images/shoe_1.jpg" alt="shoe image" />
                            </a>
                        </div>
                        <div class="img-item">
                            <a href="#" data-id="2">
                                <img src="shoes_images/shoe_2.jpg" alt="shoe image" />
                            </a>
                        </div>
                        <div class="img-item">
                            <a href="#" data-id="3">
                                <img src="shoes_images/shoe_3.jpg" alt="shoe image" />
                            </a>
                        </div>
                        <div class="img-item">
                            <a href="#" data-id="4">
                                <img src="shoes_images/shoe_4.jpg" alt="shoe image" />
                            </a>
                        </div>
                    </div>
                </div>
                <div class="product-content">
                    <h2 class="product-title">nike shoes</h2>
                    <a href="#" class="product-link">visit nike store</a>
                    <div class="product-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star-half-alt"></i>
                        <span>4.7(21)</span>
                    </div>

                    <div class="product-price">
                        <p class="last-price">Old Price: <span>$257.00</span></p>
                        <p class="new-price">New Price: <span>$249.00 (5%)</span></p>
                    </div>

                    <div class="product-detail">
                        <h2>about this item: </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                        <ul>
                            <li>Color: <span>Black</span></li>
                            <li>Available: <span>in stock</span></li>
                            <li>Category: <span>Shoes</span></li>
                            <li>Shipping Area: <span>All over the world</span></li>
                            <li>Shipping Fee: <span>Free</span></li>
                        </ul>
                    </div>

                    <div class="purchase-info">
                        <input type="number" min="0" value="1" />
                        <button type="button" class="btn">
                            Add to Cart <i class="fas fa-shopping-cart"></i>
                        </button>
                        <button type="button" class="btn">Compare</button>
                    </div>

                    <div class="social-links">
                        <p>Share At: </p>
                        <a href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-pinterest"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct