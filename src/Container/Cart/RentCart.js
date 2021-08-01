import React, { useState, useEffect } from 'react';
import axios from 'axios'


function RentCart() {

    const[data,setdata] = useState([]);

    useEffect(() => { 
        let config = {
            headers : {
                'authorization' : `Bearer ${localStorage.getItem("token")}`
            }
        }
        axios.get('http://localhost:90/get/rentcart',config)
          .then((response) => {
            setdata(response.data.data)    
            console.log(response.data)
          })
          .catch((err) => {
            console.log(err)
          })
    
      }, [])



      const deletepro = (_id)=>{
        let config = {
            headers : {
                'authorization' : `Bearer ${localStorage.getItem("token")}`
            }
        }
        console.log(_id)
         axios.delete('http://localhost:90/delete/rentcart/' + _id, config)
         .then((response)=>{
             console.log(response.data.message)
             window.location.reload()
         }).catch((err)=>{
 
             console.log(err.message)
         })
    }

    return(

        <div>
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
                            <th scope="col"> Price (Rs) </th>
                            <th scope="col"> Actions </th>
                        </tr>
                    </thead>
                    <tbody>{

                      data.length > 0 &&  data.map((p) => (
                        <tr>
                            <td><img width="50px" src = {`http://localhost:90/${p.product?.image}`} alt="productimage" /></td>
                            <td>{p.product?.productname}</td>
                            <td>{p.product?.rent_price}</td>
                            <td><button  onClick={(e) => deletepro(p._id)} >Remove</button></td>
                        </tr>
                        ))

                    }</tbody>
                </table>


                <div className="total">

                    <h3>Your Total</h3>

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

        </div>
    )
}

export default RentCart