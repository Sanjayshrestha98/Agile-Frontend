import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MDBDataTable, } from 'mdbreact';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert';


function Faqlist({ history }) {

    const [data, setRowData] = useState([]);

    const getunanswered = () => {
        axios.post('http://localhost:90/getunanswered/' + true)

            .then((response) => {
                setRowData(response.data.data)
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })

    }


    useEffect(() => {
        getunanswered()
    }, [])

    const rowdata = data?.map(d => {
        return ({

            question: d.question,
            answer: d.answer,
            action: <div>
                <button onClick={() => goToEdit(d._id)}><FaEdit className="editicon" /></button>
                <button onClick={() => deletefaq(d._id)}><MdDelete className="deleteicon" /></button>
            </div>
        })
    })


    const deletefaq = (_id) => {


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
                    axios.delete('http://localhost:90/deletefaq/' + _id)
                        .then((response) => {
                            console.log(response.data.message)
                            getunanswered()

                        }).catch((err) => {
            
                            console.log(err.message)
                        })

                } else {

                }
            });

       
    }

   
    const goToEdit = (id) => {
        history.push("/admin/answer/", {
            id: id
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