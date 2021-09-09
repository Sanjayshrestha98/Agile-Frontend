import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Cartpage() {

    const [data, setdata] = useState([]);


    const getCart = () => {
        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        axios.get(`${process.env.REACT_APP_BASE_URI}/get/default_buycart`, config)
            .then((response) => {
                setdata(response.data.data.order)
                console.log(response.data.data.order)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {
        getCart()
    }, [])

    const deletepro = (_id) => {
        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        console.log(_id)
        axios.delete(`${process.env.REACT_APP_BASE_URI}/delete/buycart/` + _id, config)
            .then((response) => {
        getCart()
               
            }).catch((err) => {

                console.log(err.message)
            })
    }


    return (
        <div>
            {
                data.length > 0 ?
                <>
                <div className="title">
                <h1>Your Buy Cart</h1>
            </div>
            <div className="checkout">

                <table className="table table-borderless">
                    <thead>
                        <tr>
                            {/* <th scope="col">S.N </th> */}
                            <th scope="col"> Product Image </th>
                            <th scope="col"> Products </th>
                            <th scope="col"> Quantity </th>
                            <th scope="col"> Price (Rs) </th>
                            <th scope="col"> Actions </th>
                        </tr>
                    </thead>
                    <tbody>{

                        data.length > 0 && data.map((p) => (
                            <tr>
                                <td><img width="50px" src={`${process.env.REACT_APP_BASE_URI}/public/images/${p.product?.image}`} alt="productimage" /></td>
                                <td>{p.product?.productname}</td>
                                <td>{p?.quantity}</td>
                                <td>{p.product?.buy_price}</td>
                                <td><button onClick={(e) => deletepro(p?.product?._id)} >Remove</button></td>
                            </tr>

                        ))
                    }</tbody>
                </table>




                <div>
                    <a href="/checkoutpage">
                        <button type="button" className="btn btn-primary btn-lg"> Checkout </button>
                    </a>
                </div>

            </div></>
        :
        <h3 className = "text-center mt-5">< i className = "fa fa-shopping-cart"></i> &nbsp; Your Cart is Empty</h3>    
        }


        </div>
    )
}

export default Cartpage