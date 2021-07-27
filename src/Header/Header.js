import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { MdFavorite } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';


class Header extends Component {

	logout = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('role')
		window.location.href = '/home'
	}

	render() {
		if (localStorage.getItem('token')) {
			console.log(localStorage.getItem('token'))
			console.log("logged in")
			return (
				<div>
					<Navbar collapseOnSelect expand="lg" variant="light">
						<Navbar.Brand>
							<img src="./logo.png" alt="logo" height="70px" />
						</Navbar.Brand>

						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="mr-auto">
								<Nav.Link href="/home">Home</Nav.Link>
								<Nav.Link href="/products">Products</Nav.Link>

								<NavDropdown title="Platform" id="collasible-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">XBox</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">PS4</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">PC</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.4">Nintendo</NavDropdown.Item>
									<NavDropdown.Divider />
									{/* <NavDropdown.Item href="#action/3.4">Brand</NavDropdown.Item> */}
								</NavDropdown>

								<NavDropdown title="Genre" id="collasible-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">Shooter</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">Sandbox</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.4">Puzzle</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.5">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.6">Adventure</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.7">Survival</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.8">Horror</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.9">Role-Playing</NavDropdown.Item>
									<NavDropdown.Divider />
									{/* <NavDropdown.Item href="#action/3.4">Category</NavDropdown.Item> */}
								</NavDropdown>

								<Nav.Link href="/contact">Contact Us</Nav.Link>

								<Nav.Link href="/faq">FAQ</Nav.Link>
								<Nav.Link href="/order">Orders</Nav.Link>
							</Nav>

							<Nav className="rightnav">

								<Nav.Link href="/rentcart">
									<div data-tip="Rent Cart" className="righticons">
										<img src="./rent.png" alt="cart" />
									</div>
								</Nav.Link>

								<Nav.Link href="/favourite">
									<div data-tip="Favourites" className="righticons">
										<MdFavorite fontSize="24px" />
									</div>
								</Nav.Link>

								<Nav.Link href="/cartpage">
									<div className="righticons">
										<img src="./cart.png" alt="cart" />
									</div>
								</Nav.Link>

								<Nav.Link href="/profile">
									<div className="righticons">
										<img src="./user.png" alt="profile" />
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

					<ReactTooltip />
				</div>
			)
		}
		else {
			console.log(localStorage.getItem('token'))
			console.log("logged out")
			return (
				<div>
					<Navbar collapseOnSelect expand="lg" variant="light">
						<Navbar.Brand>
							<img src="./logo.png" alt="logo" height="70px" />
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

					<ReactTooltip />
				</div>
			)

		}
	}
}

export default Header;