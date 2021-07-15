import React, { Component, useEffect, useState } from 'react';
import { MDBDataTable, } from 'mdbreact';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';


function ViewUser() {

  const [rowdata, setRowData] = useState([]);

  useEffect(() => {

    axios.get('http://localhost:90/getallusers')
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

export default ViewUser;