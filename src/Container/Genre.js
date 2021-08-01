import { Component, React, useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, withRouter } from 'react-router-dom';

import { Link, useHistory } from "react-router-dom";

function Genre( { history } ){
    const [data, setRowData] = useState([]);
    const {category} = useParams()

    // state = {
    //     products: [],
    //     config: {
    //         headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
    //     }
    // }
    // console.log(props)

    useEffect(() => {
        // const category = path;
        // var params = category
        // console.log(category)
        var path = category
        
        axios.get("http://localhost:90/get/genre/" + path)
            .then((response) => {
                setRowData(response.data.data)
                console.log(response.data)
                this.setState(
                    {
                        products: response.data.data
                    }
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <div>

                <h3 className="adminpage-headers title mb-4"> Our Products </h3>

                <div className="row">
                    {data.map(value => (
                        <div className="content" onClick={() => {
                            history.push("/productdetail", {
                                product: value
                            })
                        }} >
                            <div>
                                <div className="productimage">
                                    <img className="img-thumbnail align-middle" src={`http://localhost:90/${value.image}`} alt=" ProductImage" />
                                </div>
                                <h1 className="product-name">{value.productname}</h1>
                                <h4 className="product-type">{value.platform}</h4>
                            </div>
                            <div className="price-and-buy">
                                <p className="price">Buy: Rs {value.buy_price}</p>
                                <p className="price">Rent : Rs {value.rent_price}</p>
                            </div>

                        </div>

                    ))}
                </div>


            </div>
        </div>

    )
}

export default withRouter(Genre)