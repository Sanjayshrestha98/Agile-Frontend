import React from 'react'
import { useState } from 'react';


import { Route } from "react-router-dom";
import AddProduct from './AddProduct';
import AdminDashboard from './AdminDashboard';
import AdminSideNav from './AdminSideNav';

const AdminContainer = () => {

    const [toggle, setToggle] = useState(true)


    const toggleSidenav = () => { 
        setToggle(!toggle)
    }


    return(
        <>
        <AdminSideNav  toggle = {toggle} toggleSidenav = {toggleSidenav} />
            <div className = {`admin-wrapper ${toggle && "wrapper-toggle"}`}>
            <Route path="/admin/dashboard" component = {AdminDashboard}/>
                <Route path="/admin/product" component = {AddProduct}/>
            </div>
                </>
    )

}


export default AdminContainer