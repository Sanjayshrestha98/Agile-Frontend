import React, { Component } from 'react'


function AdminSideNav() {
  return (
    <div className="sidenavcontainer">
      <div class="sidebar">
        <div class="logo-details">
          <i class='bx bxl-c-plus-plus'></i>
          <span class="logo_name">Gaming</span>
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