import React, { useState, useEffect } from 'react';
import axios from 'axios'


function Order() {


    const [data, setdata] = useState([]);
    // const [subtotal, setSubtotal] = useState([])
    const subtotal = []


    useEffect(() => {
        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }

        axios.get('http://localhost:90/', config)
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
            <h1>Your Buy Orders</h1>

            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col"> Products </th>
                        <th scope="col"> Quantity </th>
                        <th scope="col"> Buy Price (Rs) </th>


                    </tr>
                </thead>

                <tbody>{

                    <tr>
                        <td>GTA 5</td>
                        <td>1</td>

                        <td>3500</td>

                        <td></td>
                    </tr>

                }</tbody>
            </table>




        </div>
    )

}

export default Order