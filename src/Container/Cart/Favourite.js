import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Favourite() {
    const[data,setdata] = useState([]);

    useEffect(() => {
        let config = {
            headers : {
                'authorization' : `Bearer ${localStorage.getItem("token")}`
            }
        }
        axios.get(`${process.env.REACT_APP_BASE_URI}/get/favourite`,config)
          .then((response) => {
            setdata(response.data.data)
            console.log(response.data.data)
    
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
         axios.delete(`${process.env.REACT_APP_BASE_URI}/delete/favourite/` + _id, config)
         .then((response)=>{
             console.log(response.data.data)
             window.location.reload()
         }).catch((err)=>{
 
             console.log(err.message)
         })
    }



    return (
        <div>
            <div className="title">
                <h1>Your Favourites</h1>
            </div>
            <div className="checkout">

                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col"> Product Image </th>
                            <th scope="col"> Products </th>
                            <th scope="col"> Buy Price (Rs) </th>
                            <th scope="col"> Rent Price (per day) </th>
                            <th scope="col"> Actions </th>
                        </tr>
                    </thead>
                    <tbody>{

                      data.length > 0 &&  data.map((p) => (
                        <tr>
                            <td><img width="50px" src = {`${process.env.REACT_APP_BASE_URI}/public/images/${p.product?.image}`} alt="productimage" /></td>
                            <td>{p.product?.productname}</td>
                            {/* <td><input type="number" value="1" min="1" max="20" step="1" /></td> */}
                            <td>{p.product?.buy_price}</td>
                            <td>{p.product?.rent_price}</td>
                            <td><button onClick={(e) => deletepro(p?.product._id)} >Remove</button></td>
                        </tr>

                        ))
                    }</tbody>
                </table>

            </div>

        </div>
    )
}

export default Favourite