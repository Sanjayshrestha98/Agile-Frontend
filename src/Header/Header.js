import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

class Header extends Component {

	logout = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('role')
    	window.location.href = '/home'
	}

	render() {
		if(localStorage.getItem('token')){
			console.log(localStorage.getItem('token'))
			console.log("logged in")
		return (
			<div>
				<Navbar collapseOnSelect expand="lg" variant="light">
					<Navbar.Brand>
						<img src="./logogo.png" alt="logo" height="70px" />
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/home">Home</Nav.Link>
							<Nav.Link href="/products">Products</Nav.Link>
							
							<NavDropdown title="Brands" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Brand 1</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Brand 2</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Brand 3</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Brand</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title="Categories" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Category 1</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Category 2</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Category 3</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Category</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="/contact">Contact Us</Nav.Link>
							<Nav.Link href="/faq">FAQ</Nav.Link>
							<Nav.Link href="/order">Orders</Nav.Link>
						</Nav>

						<Nav className="rightnav">
							<Nav.Link href="/cartpage">
								<div className="righticons">
									<img src="./cart.png" alt="cart" />
								</div>
							</Nav.Link>

							<Nav.Link href="/profile">
								<div className="righticons">
									<img src="./profile.png" alt="profile" />
								</div>
							</Nav.Link>

							<Nav.Link>
								<div className="righticons">
									<img src="./logout.png" 
									onClick={this.logout} alt="logout" 
									/>
								</div>
							</Nav.Link>

						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		)}
	else{
		console.log(localStorage.getItem('token'))
		console.log("logged out")
		return (
			<div>
				<Navbar collapseOnSelect expand="lg" variant="light">
					<Navbar.Brand>
						<img src="./logogo.png" alt="logo" height="70px" />
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link href="/home">Home</Nav.Link>
							<Nav.Link href="/products">Products</Nav.Link>

							<NavDropdown title="Brands" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown title="Categories" id="collasible-nav-dropdown">
								<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
								<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
							</NavDropdown>

						</Nav>

						<Nav className="rightnav">
							<Nav.Link href="/register">Register</Nav.Link>
							<Nav.Link href="/login">Login</Nav.Link>


						</Nav>
					</Navbar.Collapse>
				</Navbar>


			</div>


		)
	}
	}
}

export default Header;