import React from 'react';
import {useEffect, useState } from 'react';
import axios from 'axios';

import { MDBDataTable, } from 'mdbreact';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'
import { withRouter } from 'react-router-dom';

function ViewProduct({history}) {

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

    const rowdata = data?.map(d => {
        return ({
            productId: d._id,
            productname: d.productname,
            platform: d.platform,
            buyprice: d.buyprice,
            rentprice: d.rentprice,
            publisher: d.publisher,
            image: <img src = {`http://localhost:90/${d.image}`} style = {{height : "200px"}}/>,
            screenshots: d.screenshots,
            genre: d.genre,
            release_date: d.release_date,
            system_requirements: d.system_requirements,
            instock: d.instock,
            description: d.description,
            trailer: d.trailer,
            action: <div>
                <button onClick = {() => goToEdit(d._id)}><FaEdit  className="editicon" /></button>
                <button onClick={() => deletepro(d._id)}><MdDelete  className="deleteicon" /></button>
            </div>
        })
    })

   const deletepro = (_id)=>{
       console.log(_id)
        axios.delete('http://localhost:90/deleteproduct/' + _id)
        .then((response)=>{
            console.log(response.data.message)
            window.location.reload()
        }).catch((err)=>{

            console.log(err.message)
        })
   }

   const goToEdit = (id) => {
    history.push("/admin/editproduct", {
        id : id
    })
   }

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
                label: 'Buy Price',
                field: 'buyprice',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Rent Price',
                field: 'rentprice',
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
            // {
            //     label: 'Screenshots',
            //     field: 'screenshots',
            //     sort: 'asc',
            //     width: 100
            // },
            {
                label: 'Genre',
                field: 'genre',
                width: 100
            },
            {
                label: 'Release Date',
                field: 'release_date',
                sort: 'asc',
                width: 100
            },
            {
                label: 'System Requirements',
                field: 'system_requirements',
                sort: 'asc',
                width: 100
            },
            {
                label: 'In-Stock',
                field: 'instock',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Description',
                field: 'description',
                sort: 'asc',
                width: 100
            },
            // {
            //     label: 'Trailer',
            //     field: 'trailer',
            //     sort: 'asc',
            //     width: 100
            // },
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
                <h3 className="adminpage-headers mb-4"> List of Products </h3>
            </div>
            <MDBDataTable
                striped
                hover
                data={dataTable}
            />

        </div>

    )
}

export default withRouter(ViewProduct)