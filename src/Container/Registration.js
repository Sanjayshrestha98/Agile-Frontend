import { Component } from "react";
import axios from 'axios';

class Register extends Component {

    state = {
        fullname: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        username: "",
        password: "",
    }
    registerUser = () => {
        const data = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
            address: this.state.address,
            phone: this.state.phone,
            gender: this.state.gender,
            username: this.state.username,
        }
        axios.post("http://localhost:90/api_insert", data)
            .catch()
    }
    render() {
        return (
            <div className="registerform">
                <div className="col-md-12 col-lg-12">
                    <h3 className="form-heading mb-4">Registration</h3>
                    <form>

                        <div className="form-label-group">
                            <input type="text" name="fullname" id="fullname"
                                className="form-control" placeholder="Fullname"
                                value={this.state.fullname} onChange={(event) => { this.setState({ fullname: event.target.value }) }}
                                required />
                            <label htmlFor="fullname">Full Name</label>
                        </div>

                        

                        <div className="form-label-group">
                            <input type="text" name="address" id="address" className="form-control"
                                value={this.state.address} onChange={(event) => { this.setState({ address: event.target.value }) }}
                                placeholder="Address" required />
                            <label htmlFor="address">Address</label>
                        </div>


                        <div className="form-label-group">
                            <input type="number" name="phone" id="phone" className="form-control" placeholder="Phone Number"
                                value={this.state.phone} onChange={(event) => { this.setState({ phone: event.target.value }) }}
                                required />
                            <label htmlFor="phone">Phone Number</label>
                        </div>


                        <div className="form-label-group">
                            <input type="text" name="gender" id="inputgender" className="form-control" placeholder="Gender"
                                value={this.state.gender} onChange={(event) => { this.setState({ gender: event.target.value }) }}
                                required />
                            <label htmlFor="inputgender">Gender</label>
                        </div>

                        <div className="form-label-group">
                            <input type="email" name="email" id="inputEmail" className="form-control"
                                value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }}
                                placeholder="Email" required />
                            <label htmlFor="inputEmail">Email</label>
                        </div>

                        <div className="form-label-group">
                            <input type="text" name="username" id="username"
                                className="form-control" placeholder="username"
                                value={this.state.username} onChange={(event) => { this.setState({ username: event.target.value }) }}
                                required />
                            <label htmlFor="username">Username</label>
                        </div>

                        <div className="form-label-group">
                            <input type="password" name="password" id="inputPassword" className="form-control"
                                value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }}
                                placeholder="Password" required />
                            <label htmlFor="inputPassword">Password</label>
                        </div>

                        <button className="btn btn-lg btn-primary btn-block btn-register text-uppercase font-weight-bold mb-2" type="submit"
                            onClick={this.registerUser} href="/login">Register</button>

                        <p className="registerprompt">Already an User ? Login Now. Click<a href="/login">Here</a></p>
                    </form>
                </div>

            </div>
        )
    }
}
export default Register;