import React, { Component } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'


function AdminSideNav({toggle, toggleSidenav}) {

  const [sideToggle, setSideToggle] = useState(toggle)


  useEffect(() => {
    setSideToggle(toggle)
  },[toggle])


  return (
    <div className={`sidenavcontainer `}>
      <div class={`sidebar ${sideToggle && "toggle-on"}`}>
        <div class="logo-details">
          <i class='bx bxl-c-plus-plus'></i>
          <span class="logo_name" onClick = {() => toggleSidenav()}>Gaming</span>
        </div>
        <ul class="nav-links">
          <li>
            <a href="#" class="active">
              <i class='bx bx-grid-alt'></i>
              <span class="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-box'></i>
              <span class="links_name">Product</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bx-list-ul'></i>
              <span class="links_name">Order list</span>
            </a>
          </li>

          <li class="log_out">
            <a href="#">
              <i class='bx bx-log-out'></i>
              <span class="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>


    </div>
  )
}

export default AdminSideNav