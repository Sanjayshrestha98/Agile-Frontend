import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { MDBDataTable, } from 'mdbreact';
import { FaEdit } from 'react-icons/fa';
import { GrDocumentUpdate } from 'react-icons/gr'
import { withRouter } from 'react-router-dom';


function Orderlist({ history }) {

    const [data, setRowData] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URI}/get/admin/order`)
            .then((response) => {
                setRowData(response.data.data)
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])


    const rowdata = data?.map((value, key) => {
        return ({
            status: value.status,
            fullname: value.user.fullname,
                
            product:
                value.order.map(order => {
                    return (

                        <table class="table">
                            
                            <tbody>
                                <tr>
                                    {console.log(`${process.env.REACT_APP_BASE_URI}/${order.product?.image}`)}
                                    <th scope="row"><img width="50px" src={`${process.env.REACT_APP_BASE_URI}/public/images/${order.product?.image}`} alt="productimage" /></th>
                                    <td>{order.product?.productname}</td>
                                    <td>{order?.quantity}</td>
                                </tr>
                            </tbody>
                        </table>
                        

                    )
                })
            ,

            price : value.grandTotal,



            action:
                <div>
                    <button className="actionbutton" onClick={() => delivered(value.user._id)}><GrDocumentUpdate className="editicon" /></button>
                </div>
        })
    })

    const delivered = (_id) => { 
        axios.put(`${process.env.REACT_APP_BASE_URI}/update/pending_to_delivered/` + _id )
            .then((response) => {
                console.log(response.data.message)
                window.location.reload()
            }).catch((err) => {

                console.log(err.message)
            })
    }

    const goToEdit = (id) => {
        history.push("/admin/editproduct", {
            id: id
        })
    }

    const dataTable = {
        columns: [
            {
                label: 'status',
                field: 'status',
                sort: 'asc',
                width: 150
            },

            {
                label: 'Full Name',
                field: 'fullname',
                sort: 'asc',
                width: 200
            },

            {
                label: 'Products',
                field: 'product',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Price',
                field: 'price',
                sort: 'asc',
                width: 200
            },

            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 100
            },
        ],

        rows: rowdata

    };

    return (
        <div>

            <div>
                <h3 className="adminpage-headers mb-4"> List of Orders </h3>
            </div>
            <MDBDataTable
                striped
                hover
                data={dataTable}
            />

        </div>

    )

}

export default Orderlist;