import React from 'react';

function AdminDashboard() {

    return (
        <div>
            <div class="home-section">
                <nav>
                    <div class="sidebar-button">
                        <i class='bx bx-menu sidebarBtn'></i>
                        <span class="dashboard">Dashboard</span>
                    </div>
                    <div class="profile-details">
                        {/* <!--<img src="images/profile.jpg" alt="">--> */}
                        <span class="admin_name">Sanjay Shrestha</span>
                        <i class='bx bx-chevron-down'></i>
                    </div>
                </nav>

                <div class="home-content">
                    <div class="overview-boxes">
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Order</div>
                                <div class="number">40,876</div>
                                <div class="indicator">
                                    <i class='bx bx-up-arrow-alt'></i>
                                    <span class="text">Up from yesterday</span>
                                </div>
                            </div>
                            <i class='bx bx-cart-alt cart'></i>
                        </div>
                        <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Sales</div>
                                <div class="number">38,876</div>
                                <div class="indicator">
                                    <i class='bx bx-up-arrow-alt'></i>
                                    <span class="text">Up from yesterday</span>
                                </div>
                            </div>
                            <i class='bx bxs-cart-add cart two'></i>
                        </div>

                    </div>

                    <div class="sales-boxes">
                        <div class="top-sales box">
                            <div class="title">Top Seling Product</div>
                            <ul class="top-sales-details">
                                <li>
                                    <a href="#">
                                        {/* <!--<img src="images/sunglasses.jpg" alt="">--> */}
                                        <span class="product">Fifa 21</span>
                                    </a>
                                    <span class="price">3000</span>
                                </li>
                                <li>
                                    <a href="#">
                                        {/* <!--<img src="images/jeans.jpg" alt="">--> */}
                                        <span class="product">Call Of Duty </span>
                                    </a>
                                    <span class="price">4000</span>
                                </li>
                                <li>
                                    <a href="#">
                                        {/* <!-- <img src="images/nike.jpg" alt="">--> */}
                                        <span class="product">Cyberpunk 2077</span>
                                    </a>
                                    <span class="price">2077</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default AdminDashboard