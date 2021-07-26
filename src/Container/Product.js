import { React, useEffect, useState } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';


function Product({ history }) {

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

                {data.map(value => (
                    <div className="content" onClick={() => {
                        history.push("/productdetail", {
                            product: value
                        })
                    }} >

                        {/* <Link to={"/selected/"} style={{ textDecoration: "none" }}> */}
                        <div>
                            <div className="productimage">
                                <img className="img-thumbnail align-middle"   src={`http://localhost:90/${value.image}`} alt=" ProductImage" />
                            </div>
                            <h1 className="product-name">{value.productname}</h1>
                            <h4 className="product-type">{value.platform}</h4>
                            <h4 className="product-type">{ }</h4>
                        </div>
                        {/* </Link> */}
                        <div className="price-and-buy">
                            <p className="price"> For Buy: Rs {value.buy_price}</p>
                            <p className="price">For Rent : Rs {value.rent_price}</p>
                            {/* <button onClick={() => this.addToCart()} className="buy-btn">Add To Cart</button> */}
                        </div>

                    </div>

                ))}
            </div>
        </div>

    )
}


export default withRouter(Product)