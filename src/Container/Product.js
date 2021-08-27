import { Component, React, useEffect, useState } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { Card, Container, Row, Col, DropdownButton} from 'react-bootstrap'


function Product({ history, props }) {

    let[search, setSearch]= useState('');
    let [data, setRowData] = useState([]);

    let [selectedSort, setSortType] = useState("asc");

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
    let filtered = data.filter((val) => { return val.productname.toLowerCase().trim().startsWith(search.toLowerCase().trim()) })


    function setSort(e){
        console.log("sort",e.target.value)
        setSortType(e.target.value)
    }

    return (
        <div>
            <div>
                <Container>
                    <Row>
                        <Col lg={4} className="d-none d-md-none d-lg-block"></Col>
                        <Col lg={4}>
                        <div className="Search">
                                <input type="text" placeholder="I am looking for....." onChange={(e) => {
                                    setSearch(e.target.value);
                                }} id="txtSearch" className="form-control" />
                            </div>
                        </Col>
                        <Col lg={4} className="d-none d-md-none d-lg-block"></Col>
                    
                    </Row>
                </Container>

                <div class="sortdropdown">
                    <select className="btn btn-secondary" onChange={setSort.bind(this)}>
                        {/* <option value="#">select</option> */}
                        <option value="asc">A - Z</option>
                        <option value="des">Z - A</option>
                        <option value="high">Price High to Low</option>
                        <option value="low">Price Low to High</option>
                    </select>
                  
                </div>

                <h3 className="adminpage-headers title mb-4"> Our Products </h3>

                <div className="row">
                    {filtered.map(value => (
                        <div className="content" onClick={() => {
                            history.push("/productdetail", {
                                product: value
                            })
                        }} >
                            <div>
                                <div className="productimage">
                                    <img className="img-thumbnail align-middle" src={`http://localhost:90/public/images/${value.image}`} alt=" ProductImage" />
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