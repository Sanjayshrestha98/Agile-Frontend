import { Button } from 'bootstrap'
import React, { Component } from 'react'
import { useEffect, Tooltip, OverlayTrigger } from 'react'
import { useState } from 'react'
import { BiLogOut } from 'react-icons/bi';
import { RiDashboardFill, RiFileList3Fill, RiShoppingCartFill } from 'react-icons/ri';
import { ImMenu } from 'react-icons/im';
import { BiChevronDownCircle } from 'react-icons/bi';
import { MdAddShoppingCart } from 'react-icons/md';
import { IoMdPersonAdd } from 'react-icons/io';
import { CgUserList } from 'react-icons/cg';
import { AiFillQuestionCircle } from 'react-icons/ai';

function AdminSideNav({ toggle, toggleSidenav }) {
  const [sideToggle, setSideToggle] = useState(toggle)
  useEffect(() => {
    setSideToggle(toggle)
  }, [toggle])

  return (

    <div className={`sidenavcontainer `}>

      <div className={`sidebar ${sideToggle && "toggle-on"}`}>
        <div className="logo-details" >
          <button className="logo_name"> Admin </button>
          <i onClick={() => toggleSidenav()} className='navicons-toggle'> <ImMenu /> </i>
        </div>
        <ul className="nav-links">

          <p className="sidenav-title">   Dashboard  <BiChevronDownCircle /> </p>

          <li>
            <a href="/admin/dashboard" class="active">
              <i className='navicons-toggle-on'> <RiDashboardFill /> </i>

              <img /><span className="links_name">Dashboard</span>
              <i className='navicons'> <RiDashboardFill /> </i>

            </a>
          </li>

          <p className="sidenav-title">   Products  <BiChevronDownCircle /> </p>

          <li>
            <a href="/admin/viewproduct">
              <i className='navicons-toggle-on'> <RiShoppingCartFill /> </i>
              <span className="links_name"> View Product</span>
              <i className='navicons'> <RiShoppingCartFill /> </i>

            </a>
          </li>
          <li>
            <a href="/admin/addproduct">
              <i className='navicons-toggle-on'> <MdAddShoppingCart /> </i>

              <span className="links_name"> Add Product</span>
              <i className='navicons'> <MdAddShoppingCart /> </i>

            </a>
          </li>

          <p className="sidenav-title">   User  <BiChevronDownCircle /> </p>
          <li>
            <a href="/admin/viewuser">
              <i className='navicons-toggle-on'> <CgUserList /> </i>

              <span className="links_name">User list</span>
              <i className='navicons'> <CgUserList /> </i>

            </a>
          </li>

          <li>
            <a href="/admin/adduser">
              <i className='navicons-toggle-on'> <IoMdPersonAdd /> </i>

              <span className="links_name">Add User</span>
              <i className='navicons'> <IoMdPersonAdd /> </i>

            </a>
          </li>

          <p className="sidenav-title">   Order  <BiChevronDownCircle /> </p>
          <li>
            <a href="/admin/vieworder">
              <i className='navicons-toggle-on'> <RiFileList3Fill /> </i>
              <span className="links_name">Order list</span>
              <i className='navicons'> <RiFileList3Fill /> </i>
            </a>
          </li>

          <p className="sidenav-title">   FAQs  <BiChevronDownCircle /> </p>
          <li>
            <a href="/admin/faq">
              <i className='navicons-toggle-on'> <AiFillQuestionCircle /> </i>
              <span className="links_name">FAQ list</span>
              <i className='navicons'> <AiFillQuestionCircle /> </i>
            </a>
          </li>

          <li className="bottomicon">
            <a href="">
              <i className='navicons-toggle-on'> <BiLogOut /> </i>
              <span className="links_name">Log out</span>
              <i className='navicons'> <BiLogOut /> </i>

            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default AdminSideNav