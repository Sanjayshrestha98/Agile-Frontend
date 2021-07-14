import React from 'react'
import { useState } from 'react';


import { Route } from "react-router-dom";
import AddProduct from './Product/AddProduct';
import AdminDashboard from './AdminDashboard';
import AdminSideNav from './AdminSideNav';
import Orderlist from './Orderlist';
import ViewUser from './User/ViewUser';

const AdminContainer = () => {

    const [toggle, setToggle] = useState(true)
    const toggleSidenav = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <AdminSideNav toggle={toggle} toggleSidenav={toggleSidenav} />
            <div className={`admin-wrapper ${toggle && "wrapper-toggle"}`}>
                <Route path="/admin/dashboard" component={AdminDashboard} />
                <Route path="/admin/addproduct" component={AddProduct} />
                <Route path = "/admin/order" component = {Orderlist}/>
                <Route path = "/admin/viewuser" component = {ViewUser}/>
                
            </div>
        </>
    )

}


export default AdminContainer