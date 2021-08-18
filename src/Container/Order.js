import React, { useState, useEffect } from 'react';
import axios from 'axios'


function Order() {

    const [data, setdata] = useState([]);
    // const [subtotal, setSubtotal] = useState([])
    // const subtotal = []


    useEffect(() => {
        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }

        axios.get('http://localhost:90/get/buycart', config)
            .then((response) => {
                setdata(response.data.data)
                console.log(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        return (() => {
            // subtotal = []
        })

    }, [])

    return (
        <div>
            <div className="title">
                <h1>Your Orders</h1>
            </div>
            <div className="checkout">

                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col"> S.N </th>
                            <th scope="col"> Product Details </th>
                            <th scope="col"> Grand Total </th>
                            <th scope="col"> Status </th>
                        </tr>
                        {/* <tr>
                            <th></th>
                            <th scope="col"> Product Image </th>
                            <th scope="col"> Product </th>
                            <th scope="col"> Quantity </th>
                            <th scope="col"> Price</th>
                            <th></th>
                        </tr> */}
                    </thead>
                    <tbody>{

                        data.length > 0 && data.map((value, key) => {
                            // console.log("key",key)
                            // console.log(key.status)
                            // // console.log(key.grandTotal)
                            return (
                                <tr>
                                    <td >{key + 1}</td>
                                    <td>{
                                        value.order.map(order => {
                                            console.log(order.product.image)
                                            return (
                                                <table width="100%">

                                                    <tbody>
                                                        <tr>
                                                            <td><img width="50px" src={`http://localhost:90/${order.product?.image}`} alt="productimage" /></td>
                                                            <td>{order.product?.productname}</td>
                                                            <td>{order?.quantity}</td>
                                                            <td>{order.product?.buy_price}</td>
                                                        </tr>

                                                    </tbody>

                                                </table>

                                            )
                                        })
                                    }
                                    </td>
                                    <td>{value.grandTotal}</td>
                                    <td>{value.status}</td>

                                    {/* <td><button onClick={(e) => deletepro(p?._id)} >Remove</button></td> */}
                                </tr>

                            )
                        }
                        )}</tbody>
                </table>




                <div>
                    <a href="/checkoutpage">
                        <button type="button" className="btn btn-primary btn-lg"> Checkout </button>
                    </a>
                </div>

            </div>

        </div>
    )

}

export default Order