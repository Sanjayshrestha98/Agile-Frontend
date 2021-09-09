import React, { useState, useEffect } from 'react';
import axios from 'axios'
import swal from 'sweetalert'


function CheckoutPage() {

    const [data, setdata] = useState([]);
    const [subtotal, setSubtotal] = useState([])
    const [promoError, setPromoError] = useState("")
    const [promoCode, setPromoCode] = useState("")
    const [promoPercent, setPromoPercent] = useState("")
    const [grandTotal, setGrandTotal] = useState("")
    const [hasEnteredPromo, setHasEnteredPromo] = useState(false)

    useEffect(() => {
        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        axios.get('http://localhost:90/get/default_buycart', config)
            .then((response) => {
                // if (response.data.data.status == "default") {
                    setdata(response.data.data.order)
                    setGrandTotal(response.data.data.grandTotal)
                // }
                // setdata(response.data.data.order)
                // calculateSubTotal(response.data.data.grandTotal)
                // response.data.data.map(val => { 
                //     calculateSubTotal(val.product.buy_price, val.quantity)
                // })
                console.log(response.data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },
        [])


    useEffect(() => {
        console.log(subtotal)
        // calculateTotal()
    }, [subtotal])

    const checkout = () => {
        // alert('Order has been placed')
        //window.location.href = ('/product')
        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
        axios.put('http://localhost:90/update/default_to_pending',{},config)
            .then((response) => {
  
                swal({
                    title: "Order Placed.",
                    text: "Your order will be delivered very soon!!!",
                    icon: "success",
                    button: "Okay!",
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            window.location.href = '/order'
            
                        } else {
            
                        }
                    });
             

            })
            .catch((err) => {
                console.log(err)
            })

    }

    const calculateTotalAfterPromo = () => {

        if (promoPercent !== "") {
            let promoTotal = grandTotal - (grandTotal * (parseInt(promoPercent) / 100))

            setGrandTotal(promoTotal)
        }
    }

    const checkPromoCode = () => {
        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }

        axios.post('http://localhost:90/checkpromocode', {

            code: promoCode
        }, config).then((response) => {
            if (response.data.success) {
                setPromoError("")
                if (response.data.data.active) {
                    setPromoPercent(response.data.percent)

                    setHasEnteredPromo(true)
                } else {
                    setPromoError("Promo Code Not Active!!")
                }
            } else {
                setPromoError("Invalid Code!!")
            }
        })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        calculateTotalAfterPromo()
    }, [promoPercent])


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

                    data.length > 0 && data.map((p, index) => (
                        <tr>
                            <td>{p.product.productname}</td>
                            <td>{p.quantity}</td>
                            <td>{p.product.buy_price}</td>
                            {/* <td>{subtotal[index]}</td> */}

                        </tr>

                    ))
                }</tbody>
            </table>


            <table className="billing table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Sub-Total</th>
                        <td><>{grandTotal}</></td>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Tax ( 13% ) </th>
                        <td><s>13% of Sub-total</s></td>
                    </tr>
                    <tr>
                        <th scope="row">Shipping Cost</th>
                        <td><s> Rs. 200</s></td>
                    </tr>

                    <tr>
                        <th scope="row">Promo Codes</th>
                        <th><input type="text" disabled={hasEnteredPromo && true} onChange={(e) => setPromoCode(e.target.value)} />
                            <button onClick={() => checkPromoCode()}>Redeem</button></th>
                        <span className="danger-text">{promoError}</span>
                    </tr>

                    <tr>
                        <th scope="row">Grand Total</th>
                        <th><>{grandTotal}</></th>
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
                <button type="button" onClick={() => checkout()} className="btn btn-primary btn-lg"> Confirm Order </button>
            </div>


        </div>
    )
}

export default CheckoutPage