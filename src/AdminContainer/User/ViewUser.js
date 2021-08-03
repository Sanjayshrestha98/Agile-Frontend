import React, { Component, useEffect, useState } from 'react';
import { MDBDataTable, } from 'mdbreact';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import {MdDelete} from 'react-icons/md';


function ViewUser() {

  const [data, setRowData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:90/getallusers')
      .then((response) => {
        setRowData(response.data.data)
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  const deleteuser = (_id)=>{
    console.log(_id)
     axios.delete('http://localhost:90/userdelete/' + _id)
     .then((response)=>{
         console.log(response.data.message)
         window.location.reload()
     }).catch((err)=>{

         console.log(err.message)
     })
}

  const rowdata = data.map(d =>{
    return({
      fullname: d.fullname,
      gender: d.gender,
      email : d.email,
      phone : d.phone,
      address : d.address,
      username : d.username,
      action: <div>
          <FaEdit  className="editicon" />
          <MdDelete onClick={()=>deleteuser(d._id)} className="deleteicon"/>
      </div>
    })
  })  

  


  const dataTable = {
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
        data={dataTable}
      />

    </div>

  )

}

export default ViewUser;