import React, { useState, useEffect } from 'react';
import axios from 'axios'


function RentCart() {

    const[data,setdata] = useState([]);


    const getRentCart = () => {
        let config = {
            headers : {
                'authorization' : `Bearer ${localStorage.getItem("token")}`
            }
        }
        axios.get(`${process.env.REACT_APP_BASE_URI}/get/rentcart`,config)
          .then((response) => {
            setdata(response.data.data)     
          })
          .catch((err) => {
            console.log(err)
          })
    
    }
    useEffect(() => { 
       getRentCart()
      }, [])



      const deletepro = (_id)=>{
        let config = {
            headers : {
                'authorization' : `Bearer ${localStorage.getItem("token")}`
            }
        }
        console.log(_id)
         axios.delete(`${process.env.REACT_APP_BASE_URI}/delete/rentcart/` + _id, config)
         .then((response)=>{ 
            getRentCart()
         }).catch((err)=>{
      
             console.log(err.message)
         })
    }

    return(

        <div>
           {
               data.length > 0 ?
                <>
                 <div className="title">
                <h1>Your Rent Cart</h1>
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

                      data.length > 0 &&  data.map((p) => (
                        <tr>
                            <td><img width="50px" src = {`${process.env.REACT_APP_BASE_URI}/public/images/${p.product?.image}`} alt="productimage" /></td>
                            <td>{p.product?.productname}</td>
                            <td>{p.quantity}</td>
                            <td>{p.product?.rent_price}</td>
                            <td><button  onClick={(e) => deletepro(p?.product?._id)} >Remove</button></td>
                        </tr>
                        ))

                    }</tbody>
                </table>


                <div className="total">


                    <div className="amount">

                        <h4>
                            {/* <>{this.calculateTotal()}</> */}

                        </h4>
                    </div>

                </div>

                <div>
                    <a href="/rentbill">
                        <button type="button" className="btn btn-primary btn-lg"> Checkout </button>
                    </a>
                </div>

            </div>
</>
:
<h3 className = "text-center mt-5"> Your Rent Cart is Empty!</h3>           }
        </div>
    )
}

export default RentCart