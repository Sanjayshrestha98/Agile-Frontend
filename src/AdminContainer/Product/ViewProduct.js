import React from 'react';
import { Component, useEffect, useState } from 'react';
import axios from 'axios';

import { MDBDataTable, } from 'mdbreact';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'

function ViewProduct() {

    const [rowdata, setRowData] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:90/getallproducts')
            .then((response) => {
                setRowData(response.data)
                console.log(response.data)

            })
            .catch((err) => {
                console.log(err)
            })

    }, [])
    const data = {
        columns: [
            {
                label: 'Fullname',
                field: 'fullname',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Gender',
                field: 'gender',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Email',
                field: 'email',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Phone',
                field: 'phone',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Address',
                field: 'address',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Username',
                field: 'username',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Action',
                field: 'action',
                width: 100
            }
        ],

        rows: rowdata

    };

    return (
        <div>

            <div>
                <h3 className="adminpage-headers mb-4"> List of Users </h3>
            </div>
            <MDBDataTable
                striped
                hover
                data={data}
            />

        </div>

    )
}

export default ViewProduct