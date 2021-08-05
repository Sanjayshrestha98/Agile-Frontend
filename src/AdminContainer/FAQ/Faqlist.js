import React from 'react';
import {useEffect, useState } from 'react';
import axios from 'axios';
import { MDBDataTable, } from 'mdbreact';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'
import { withRouter } from 'react-router-dom';


function Faqlist({history}){

    const [data, setRowData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:90/getallfaq')
            .then((response) => {
                setRowData(response.data.data)
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    const rowdata = data?.map(d => {
        return ({
            
            question: d.question,
            answer: d.answer,
            action: <div>
                <button onClick = {() => goToEdit(d._id)}><FaEdit  className="editicon" /></button>
                <button onClick={() => deletepro(d._id)}><MdDelete  className="deleteicon" /></button>
            </div>
        })
    })

   const deletepro = (_id)=>{
       console.log(_id)
        axios.delete('http://localhost:90/deletefaq/' + _id)
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
                label: 'Question',
                field: 'question',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Answer',
                field: 'answer',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Action',
                field: 'action',
                sort: 'asc',
                width: 20
            },
       ],

        rows: rowdata

    };

    return (
        <div>

            <div>
                <h3 className="adminpage-headers mb-4"> FAQ List </h3>
            </div>
            <MDBDataTable
                striped
                hover
                data={dataTable}
            />

        </div>

    )
}

export default Faqlist