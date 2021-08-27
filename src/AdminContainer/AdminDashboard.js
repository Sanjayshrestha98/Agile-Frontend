import React from 'react';

import Iframe from 'react-iframe'


function AdminDashboard() {

    return (
        <div class="home-section">
            <nav className="adminnavbar">
                <div class="sidebar-button">
                    <i class='bx bx-menu sidebarBtn'></i>
                    <span class="dashboard">Dashboard</span>
                </div>
                <div class="profile-details">
                    <span class="admin_name">Sanjay Shrestha</span>
                    <i class='bx bx-chevron-down'></i>
                </div>
            </nav>

            <div class="home-content">
                <div class="overview-boxes">
                    {/* <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Order</div>
                                <div class="number">40,876</div>
                                <div class="indicator">
                                    <i class='bx bx-up-arrow-alt'></i>
                                    <span class="text">Up from yesterday</span>
                                </div>
                            </div>
                            <i class='bx bx-cart-alt cart'></i>
                        </div> */}
                    {/* <div class="box">
                            <div class="right-side">
                                <div class="box-topic">Total Sales</div>
                                <div class="number">38,876</div>
                                <div class="indicator">
                                    <i class='bx bx-up-arrow-alt'></i>
                                    <span class="text">Up from yesterday</span>
                                </div>
                            </div>
                            <i class='bx bxs-cart-add cart two'></i>
                        </div> */}
                </div>




                <div className="chart row">

                    <h1>Data Charts</h1>


                    <div className="col">
                        <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                            width="650"
                            height="480"
                            id="myId"
                            display="initial"
                            position="relative"
                            src="https://charts.mongodb.com/charts-gogogaming-uzdfp/embed/charts?id=ed7050f3-7997-4351-8548-6f110c498a14&autoRefresh=10&theme=light" />

                    </div>

                    <div className="col">
                        <Iframe
                            styles="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
                            width="640" height="480"
                            src="https://charts.mongodb.com/charts-gogogaming-uzdfp/embed/charts?id=b648906e-63d5-474b-be5f-b43e153b8e7f&autoRefresh=10&theme=light" />


                    </div>
                </div>


                <div>
                    <div className="col-md-12">
                        <Iframe
                            styles="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
                            width="100%"

                            height="480"
                            src="https://charts.mongodb.com/charts-gogogaming-uzdfp/embed/charts?id=7bd6ec86-2ad0-4431-9e19-4b6b62d4c8c1&autoRefresh=10&theme=light" />


                    </div>

                </div>

                <div>
                    <div className="col">
                        <Iframe
                            styles="background: #21313C;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
                            width="350px"

                            height="350px"
                            src="https://charts.mongodb.com/charts-gogogaming-uzdfp/embed/charts?id=3cb1225c-8fa9-431d-8dee-397c7d445e2d&autoRefresh=10&theme=light" />


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
        </div >

    )

}

export default AdminDashboard