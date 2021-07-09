import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

class Header extends Component {

	render() {
		return (
			<div>
				<Navbar collapseOnSelect expand="lg" variant="light">
					<Navbar.Brand>
						<img src="./logo.svg" alt="logo" height="70px" />
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
						<Nav>
							<Nav.Link href="/register">Register</Nav.Link>
							<Nav.Link href="/login">Login</Nav.Link>

							<Nav.Link href ="/cartpage">
								<div className="cart"> 
									<img src="./cart.png" alt="cart" />
								</div>
							</Nav.Link>

							<Nav.Link href ="/profile">
								<div className="cart"> 
								
									<img src="./profile-user.png" alt="profile" />
								</div>
							</Nav.Link>

						</Nav>
					</Navbar.Collapse>
				</Navbar>
				
			</div>


		)
	}
}

export default Header;