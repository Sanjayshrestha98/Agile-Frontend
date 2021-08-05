import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { MDBDataTable, } from 'mdbreact';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'
import { withRouter } from 'react-router-dom';
import { TramOutlined } from '@material-ui/icons';


function QnA({ history }) {

    const [data, setRowData] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:90/getunanswered/'+ false)
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
            status:<p>Un-Answered</p>,
            action: <div>
                <button> Answer </button>
            </div>
        })
    })

    const dataTable = {
        columns: [
            {
                label: 'Question',
                field: 'question',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Status',
                field: 'status',
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
        <>
            <div>

                <div>
                    <h3 className="adminpage-headers mb-4"> QNA </h3>
                </div>
                <MDBDataTable
                    striped
                    hover
                    data={dataTable}
                />

            </div>
        </>
    )
}


export default QnA