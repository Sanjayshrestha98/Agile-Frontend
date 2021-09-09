import React, { useState, useEffect } from 'react';
import axios from 'axios'
import moment from 'moment'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function RentBill() {


    const [data, setdata] = useState([]);
    const [returnDates, setReturnDates] = useState([])
    const [grandTotal, setGrandTotal] = useState(0)
    const [subtotal, setSubtotal] = useState([]) 
     

    const getRentBill = () =>{ 
        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }

        axios.get(`${process.env.REACT_APP_BASE_URI}/get/rentcart`, config)
            .then((response) => {
                setdata(response.data.data) 
                response.data.data.map((val, index) => {
                        let data = {
                            index : index,
                            productid : val.product._id,
                            returnDate : "",
                            quantity  : val.quantity,
                            rentDays : 0,
                            subtotal : val.product.rent_price * val.quantity,
                        }

                        let chkDate = returnDates.map(va => {return va.index}).indexOf(index);

                        if(chkDate === -1){
                            setReturnDates(old => [...old,  data]) 

                        }

                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
            getRentBill()
    }, [])

    const successnotify = () => toast.error("Your order has been placed!!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const changeReturnDate = (e, index, price, quantity) => {
        
        let chkDate = returnDates.map(va => {return va.index}).indexOf(index);

        if(chkDate !== -1){
            let rentDays = moment(e.target.value, 'yyyy-MM-DD').diff(moment(new Date(), 'yyyy-MM-DD'), "days") + 1
            returnDates[chkDate].returnDate = moment(e.target.value).format('yyyy-MM-DD')
            returnDates[chkDate].rentDays = rentDays

            let sub = price * quantity
            let totalCharge = rentDays * sub

            returnDates[chkDate].subtotal =  totalCharge
           

            setReturnDates(old => [...old])
        }
    }

    useEffect(() => {
        console.log("Dates", returnDates)
        let total = 0
        returnDates.map(val => {
           total = total + val.subtotal
        })
        setGrandTotal(total)
     }, [returnDates])

    const checkout = () => { 

        let config = {
            headers: {
                'authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }
 
        let data = {
            data : returnDates
        }
            axios.post(`${process.env.REACT_APP_BASE_URI}/add/rentbill`,data, config)
            .then((response) => {
                successnotify();
                setTimeout(() => {
                    window.location.href = "/rentorder"
                }, 1000)
            })
            .catch((err) => {
                console.log(err)
            }) 

    }


    useEffect(() => { 
    }, [])
 
    return (
        <div className="checkout">
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col"> Products </th>
                        <th scope="col"> Quantity </th>
                        <th scope="col"> Advance Required </th>
                        <th scope="col"> Return Date </th>
                        <th scope="col"> Rent Days </th> 
                        <th scope="col"> Rent Price (Rs) </th>
                        <th scope="col"> Sub Total</th>
                   
                    </tr>
                </thead>

                <tbody>{

                    data.length > 0 && data.map((p, index) => (
                        <tr>
                            <td>{p.product.productname}</td>

                            <td>{p.quantity}</td>
                            <td>Rs 1000</td>
                            <td><input type="date"  id = "redate" min = {moment(new Date()).format("yyyy-MM-DD")} onChange = {(e) => changeReturnDate(e, index, p.product.rent_price, p.quantity)}/> </td> 
                            <td>{returnDates[index]?.rentDays} Days </td> 
                            <td>{p.product.rent_price} per Day / Piece</td> 
                            <td>Rs {returnDates[index]?.subtotal}</td> 
                        </tr>

                    ))
                }</tbody>
            </table>


            <table className="billing table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Initial Amount to be paid</th>
                        {/* <td><>{calculateTotal()}</></td> */}
                        <td>Rs 1000</td>

                    </tr>
                    <tr>
                        <th scope="col">Late Return Fee</th>
                        {/* <td><>{calculateTotal()}</></td> */}
                        <td>Rs 1000 per Day</td>

                    </tr>

                    <tr>
                        <th scope="col">Grand Total</th>
                        {/* <td><>{calculateTotal()}</></td> */}
                        <td>Rs {grandTotal}</td>

                    </tr>
                </thead>
                <tbody>

                  
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
                <button type="button" onClick={() => checkout()}  className="btn btn-primary btn-lg"> Confirm Order </button>
            </div>

            <ToastContainer />
        </div>
    )

}

export default RentBill