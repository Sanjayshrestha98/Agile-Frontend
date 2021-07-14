import React from 'react';
import { MDBDataTable } from 'mdbreact';


function ViewUser() {
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
          }
        ],
        rows: [
          {
            fullname: 'Sanjay Shrestha',
            gender: 'Male',
            email: 'sanjayshrestha969@gmail.com',
            phone: '9861774998',
            address: 'Kathmandu',
            username: 'shrestha45'
          },
          {
            fullname: 'Safall Shakya',
            gender: 'Male',
            email: 'safall@gmail.com',
            phone: '9861281474',
            address: 'Baneshwor',
            username: 'safall12'
          },
          {
            fullname: 'Sariyan Magar',
            gender: 'Female',
            email: 'sariyanmagar@gmail.com',
            phone: '9861908460',
            address: 'Gokarna',
            username: 'sariyan09'
          }, 
          {
            fullname: 'Nikita Ojha',
            gender: 'Female',
            email: 'nikita2018@gmail.com',
            phone: '9811276221',
            address: 'Biratnagar',
            username: 'ojha2018'
          }, 
          {
            fullname: 'Bhumika Lama',
            gender: 'Female',
            email: 'bhumikalama@gmail.com',
            phone: '9811276221',
            address: 'Swayambhu',
            username: 'bhumikalama44'
          }, 
        ]
      };
    
      return (
        <MDBDataTable
          striped
          hover
          data={data}
        />
      );
}

export default ViewUser;