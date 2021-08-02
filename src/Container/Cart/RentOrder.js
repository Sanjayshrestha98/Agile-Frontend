import React, { useState, useEffect } from 'react';
import axios from 'axios'


function RentOrder (){
 
    const [data, setdata] = useState([]);
    // const [subtotal, setSubtotal] = useState([])
    const subtotal = []


    useEffect(() => {
        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }

        axios.get('http://localhost:90/get/rentcart', config)
            .then((response) => {
                setdata(response.data.data)
                console.log(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })

        return (() => {
            subtotal = []
        })

    }, [])




    return (
        <div className="checkout">
                <table className="table table-borderless">
                    <thead>

                        <h1>Your Order</h1>
                        <tr>
                            <th scope="col"> Products </th>
                            {/* <th scope="col"> Quantity </th> */}
                            <th scope="col"> Returned </th>
                            <th scope="col"> Rented Date </th>
                            <th scope="col"> Return Date </th>
                            <th scope="col"> Due Remaining Price (Rs) </th>
                            <th scope="col"> Advance Payment (Rs) </th>

                        </tr>
                    </thead>

                    <tbody>{

                        // data.length > 0 && data.map((p) => (
                            <tr>
                                <td>RDR 2</td>

                                {/* <td>{p.quantity}</td> */}
                                <td>No</td>
                                <td>2021/08/01 </td>
                                <td>2021/08/08 </td>


                                <td>2500</td>
                                <td>500</td>
                                {/* {calculateSubTotal(p.product.rent_price, p.quantity)} */}

                            </tr>

                        // ))
                    }</tbody>
                </table>


                {/* <div>
                    <button type="button" className="btn btn-primary btn-lg"> Confirm Order </button>
                </div> */}


            </div>
    )
}

export default RentOrder