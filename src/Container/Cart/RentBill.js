import React, { useState, useEffect } from 'react';
import axios from 'axios'


function RentBill() {


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


    function calculateSubTotal(price, quantity) {
        console.log("check", price , quantity)
        var subtotall = price * quantity; 
        subtotal.push(subtotall);
    }
 
    function calculateTotal() {
        var total = 0;
         subtotal.map((value) => {
            total = total + value;

        })

        return total

    }


    return (
        <div className="checkout">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col"> Products </th>
                        <th scope="col"> Quantity </th>
                        <th scope="col"> Buy Price (Rs) </th>

                    </tr>
                </thead>

                <tbody>{

                    data.length > 0 && data.map((p) => (
                        <tr>
                            <td>{p.product.productname}</td>
                            <td>{p.quantity}</td>
                            <td>{p.product.buy_price}</td>
                            {calculateSubTotal(p.product.buy_price, p.quantity)}

                        </tr>

                    ))
                }</tbody>
            </table>


            <table className="billing table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Sub-Total</th>
                        <td><>{calculateTotal()}</></td>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Tax ( 13% )</th>
                        <td><s>13% of Sub-total</s></td>
                    </tr>
                    <tr>
                        <th scope="row">Shipping Cost</th>
                        <td><s> Rs. 200</s></td>
                    </tr>
                    <tr>
                        <th scope="row">Grand Total</th>
                        <th><>{calculateTotal()}</></th>
                    </tr>
                </tbody>
            </table>

            <div className="paymentdiv">
                <div className=" row paymentmethods">
                    <div>
                        <h2>Select a Payment Method</h2>
                    </div>

                    <select id="payment">
                        <option value="esewa" disabled > ESewa</option>
                        <option value="cash">Cash On Delivery</option>
                        <option value="fonepay" disabled>Fonepay</option>
                        <option value="cards" disabled>Credit/Debit Cards</option>

                    </select>

                </div>
            </div>



            <div>
                <button type="button" className="btn btn-primary btn-lg"> Confirm Order </button>
            </div>


        </div>
    )

}

export default RentBill