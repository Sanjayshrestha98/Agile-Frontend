import { Component, React, useEffect, useState } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { Link } from "react-router-dom";
import { Dropdown } from 'bootstrap';
import { DropdownButton } from 'react-bootstrap';

function Product({ history, props }) {

    const [data, setRowData] = useState([]);

    const [selectedSort, setSortType] = useState("asc");

    useEffect(()=>{
        axios.get('http://localhost:90/getallproducts/'+selectedSort)
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
    },[selectedSort])

    // useEffect(() => {

    //     axios.get('http://localhost:90/getallproducts')
    //         .then((response) => {
    //             setRowData(response.data.data)
    //             console.log(response.data)
    //             this.setState(
    //                 {
    //                     products: response.data.data
    //                 }
    //             )
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }, [])

    

    function setSort(e){
        console.log("sort",e.target.value)
        setSortType(e.target.value)
    }

    return (
        <div>
            <div>

                <div class="sortdropdown">
                    <select className="btn btn-secondary" onChange={setSort.bind(this)}>
                        {/* <option value="#">select</option> */}
                        <option value="asc">A - Z</option>
                        <option value="des">Z - A</option>
                        <option value="high">Price High to Low</option>
                        <option value="low">Price Low to High</option>
                    </select>
                    {/* <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Sort By :
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">A - Z</a></li>
                        <li><a class="dropdown-item" href="#">Z - A</a></li>
                        <li><a class="dropdown-item" href="#">Price High to Low</a></li>
                        <li><a class="dropdown-item" href="#">Price Low to High</a></li>
                    </ul> */}
                </div>

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
export default withRouter(Product)