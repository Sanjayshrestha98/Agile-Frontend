import React from 'react';
import { Component, useEffect, useState } from 'react';
import axios from 'axios';

import { MDBDataTable, } from 'mdbreact';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'

function ViewProduct() {

    const [data, setRowData] = useState([]);

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

    const rowdata = data.map(d => {
        return ({
            productname: d.productname,
            platform: d.platform,
            price: d.price,
            publisher: d.publisher,
            image: d.image,
            screenshots: d.screenshots,
            genre: d.genre,
            release_date: d.release_date,
            system_requirements: d.system_requirements,
            instock: d.instock,
            description: d.description,
            trailer: d.trailer,
            action: <div>
                <FaEdit className="editicon" />
                <MdDelete className="deleteicon" />
            </div>
        }
        )
    })

    const dataTable = {
        columns: [
            {
                label: 'Product Name',
                field: 'productname',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Platform',
                field: 'platform',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Price',
                field: 'price',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Publisher',
                field: 'publisher',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Image',
                field: 'image',
                sort: 'asc',
                width: 150
            },
            {
                label: 'screenshots',
                field: 'screenshots',
                sort: 'asc',
                width: 100
            },
            {
                label: 'genre',
                field: 'genre',
                width: 100
            },
            {
                label: 'release_date',
                field: 'release_date',
                sort: 'asc',
                width: 100
            },
            {
                label: 'system_requirements',
                field: 'system_requirements',
                sort: 'asc',
                width: 100
            },
            {
                label: 'instock',
                field: 'instock',
                sort: 'asc',
                width: 100
            },
            {
                label: 'description',
                field: 'description',
                sort: 'asc',
                width: 100
            },
            {
                label: 'trailer',
                field: 'trailer',
                sort: 'asc',
                width: 100
            },
            {
                label: 'action',
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
                <h3 className="adminpage-headers mb-4"> List of Users </h3>
            </div>
            <MDBDataTable
                striped
                hover
                data={dataTable}
            />

        </div>

    )
}

export default ViewProduct