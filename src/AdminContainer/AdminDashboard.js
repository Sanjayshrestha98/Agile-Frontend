import React from 'react';
import swal from 'sweetalert';
import Iframe from 'react-iframe'


function AdminDashboard() {

    const logout = () => {

        swal({
            title: "Are you sure?",
            text: "You Will Be Logged Out",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    localStorage.removeItem('adminid')
                    window.location.href = '/admin/login'

                } else {

                }
            });

    }


    return (
        <div class="home-section">
            <nav className="adminnavbar">
                <div class="sidebar-button">
                    <i class='bx bx-menu sidebarBtn'></i>
                    <span class="dashboard">Dashboard</span>
                </div>
                <div class="profile-details">
                    <span class="admin_name">Sanjay Shrestha</span>
                    <button onClick={() => logout()} class="fas fa-sign-out-alt"></button>
                </div>
            </nav>

            <div class="home-content">

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

            </div>
        </div >

    )

}

export default AdminDashboard