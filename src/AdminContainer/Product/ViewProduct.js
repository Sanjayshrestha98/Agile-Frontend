import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

import { MDBDataTable, } from 'mdbreact';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'
import { withRouter } from 'react-router-dom';

function ViewProduct({ history }) {

    const [data, setRowData] = useState([]);

    function getallproducts() {

        axios.get(`${process.env.REACT_APP_BASE_URI}/getallproducts`)

            .then((response) => {
                setRowData(response.data.data)
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }

    useEffect(() => {
        getallproducts()

    }, [])

    const rowdata = data?.map(d => {
        return ({

            productId: d._id,
            productname: d.productname,
            platform: d.platform,
            buy_price: d.buy_price,
            rent_price: d.rent_price,
            publisher: d.publisher,
            image: <img src={`${process.env.REACT_APP_BASE_URI}/public/images/${d.image}`} style={{ height: "200px", width: "200px" }} />,
            screenshots: d.screenshots,
            genre: d.genre,
            release_date: d.release_date,
            system_requirements: d.system_requirements,
            instock: d.instock,
            description: <p max-height='200px' >{d.description}</p>,
            trailer: d.trailer,
            action: <div>
                <button onClick={() => goToEdit(d._id)}><FaEdit className="editicon" /></button>
                <button onClick={() => deletepro(d._id)}><MdDelete className="deleteicon" /></button>
            </div>
        })
    })

    const deletepro = (_id) => {

        swal({
            title: "Are you sure?",
            text: "Product Will Be Deleted",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    console.log(_id)
                    axios.delete(`${process.env.REACT_APP_BASE_URI}/deleteproduct/` + _id)

                        .then((response) => {
                            console.log(response.data.message)

                            getallproducts()

                        }).catch((err) => {

                            console.log(err.message)
                        })

                } else {

                }
            });
    }

    const goToEdit = (id) => {
        history.push("/admin/editproduct", {
            id: id
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
                field: 'buy_price',
                sort: 'asc',
                width: 200
            },
            {
                label: 'Rent Price',
                field: 'rent_price',
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
                sort: 'asc',
                innerHeight: 10,
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
            {
                label: 'Trailer',
                field: 'trailer',
                sort: 'asc',
                width: 100
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

            <div className="top-admin-nav">

                <nav className="adminnavbar">
                    <div class="sidebar-button">
                        <i class='bx bx-menu sidebarBtn'></i>
                        <span class="dashboard">All Added Products</span>
                    </div>
                    <div class="profile-details">
                        <span class="admin_name">Sanjay Shrestha</span>
                        <i class='bx bx-chevron-down'></i>
                    </div>
                </nav>
            </div>


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