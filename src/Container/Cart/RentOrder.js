import React, { useState, useEffect } from 'react';
import axios from 'axios'

import moment from 'moment'
function RentOrder (){
 
    const [data, setdata] = useState([]);
    // const [subtotal, setSubtotal] = useState([]) 


    useEffect(() => {
        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }

        axios.get(`${process.env.REACT_APP_BASE_URI}/get/rentbill`, config)
            .then((response) => {
                setdata(response.data.data) 
            })
            .catch((err) => {
                console.log(err)
            })

   
    }, [])




    return (
        <div className="checkout">
               {data.length > 0 ?
               <>
                <table className="table table-borderless">
                    <thead>

                        <h1>Your Order</h1>
                        <tr>
                            <th scope="col"> Product </th>
                            <th scope="col"> Quantity </th>
                            <th scope="col"> Returned </th>
                            <th scope="col"> Rented Date </th>
                            <th scope="col"> Return Date </th>
                            <th scope="col"> Rent Days </th>
                            <th scope="col"> Due Remaining Price (Rs) </th>
                            <th scope="col"> Advance Payment (Rs) </th>

                        </tr>
                    </thead>

                    <tbody>{

                        data.length > 0 && data.map((p) => (
                            <tr>
                                <td>{p.product?.productname}</td>
                                <td>{p.quantity}</td>
                                <td>{p.status}</td>
                                <td>{moment(p.rent_date).format("yyyy-MM-DD")}</td>
                                <td>{p.return_date}</td>
                                <td>{moment(p.return_date, 'yyyy-MM-DD').diff(moment(new Date(), 'yyyy-MM-DD'), "days") + 1}</td>
                                <td>Rs {p.due_remaining}</td>
                                <td>Rs {p.advance}</td>

                                </tr>

                        ))
                    }</tbody>
                </table>


                {/* <div>
                    <button type="button" className="btn btn-primary btn-lg"> Confirm Order </button>
                </div> */}

</>
            :
            <h3 className = "text-center mt-5">No Rent Orders Found!</h3>}
            </div>
    )
}

export default RentOrder