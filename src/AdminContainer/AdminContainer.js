
import React from 'react'
import { useState } from 'react';
import { Route } from "react-router-dom";
import AddProduct from './Product/AddProduct';
import AdminDashboard from './AdminDashboard';
import AdminSideNav from './AdminSideNav';
import Orderlist from './Orderlist';
import ViewUser from './User/ViewUser';
import AddUser from './User/AddUser';
import ViewProduct from './Product/ViewProduct'
import AdminLogin from './AdminLogin';
import EditProduct from './Product/EditProduct';
import Faqlist from './FAQ/Faqlist';
import Addfaq from './FAQ/AddFaq';

const AdminContainer = () => {

    const [toggle, setToggle] = useState(true)
    const toggleSidenav = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <AdminSideNav toggle={toggle} toggleSidenav={toggleSidenav} />
            <div className={`admin-wrapper ${toggle && "wrapper-toggle"}`}>
                <Route path="/admin/dashboard" component={AdminDashboard} />
                <Route path="/admin/addproduct" component={AddProduct} />
                <Route path = "/admin/order" component = {Orderlist}/>
                <Route path = "/admin/viewuser" component = {ViewUser}/>
                <Route path = "/admin/adduser" component= {AddUser}/>
                <Route path = "/admin/login" component = {AdminLogin}/>
                <Route path = "/admin/viewproduct" component= {ViewProduct}/>
                <Route path = "/admin/editproduct" component= {EditProduct}/>
                <Route path = "/admin/faqlist" component= {Faqlist}/>
                <Route path = "/admin/addfaq" component= {Addfaq}/>

            </div>
        </div>
    )
}


export default AdminContainer