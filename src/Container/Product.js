import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


import { MDBDataTable, } from 'mdbreact';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'
import { withRouter } from 'react-router-dom';



function Product() {

    const [data, setRowData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:90/getallproducts')
            .then((response) => {
                setRowData(response.data.productdata)
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])


    return (
        <div>
            <div>
                <h3 className="adminpage-headers mb-4"> Products </h3>

                <div className="content" >

                    {/* <Link to={"/selected/"} style={{ textDecoration: "none" }}> */}
                        <div>
                            <div className="productimage">
                                <img className="img-thumbnail align-middle" src={`http://localhost:90/public/`} alt=" ProductImage" />
                            </div>
                            <h1 className="product-name">{}</h1>
                            <h4 className="product-type">{}</h4>
                            <h4 className="product-type">{}</h4>
                        </div>
                    {/* </Link> */}
                    <div className="price-and-buy">
                        <p className="price">Rs {}</p>
                        {/* <button onClick={() => this.addToCart()} className="buy-btn">Add To Cart</button> */}
                    </div>
                </div>

            </div>
        </div>

    )
}


export default Product