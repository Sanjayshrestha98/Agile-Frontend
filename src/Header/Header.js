import { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { MdFavorite } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';

import { send } from '../Container/Notifications/Push'

send("Push Notifications", "Push notification successfully sent to the browser! Check it out!")


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
						<Navbar.Brand href="/home">
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
									<NavDropdown.Item href="/genre/Sports">Sports</NavDropdown.Item>
									<NavDropdown.Item href="/genre/Shooter">Shooter</NavDropdown.Item>
									<NavDropdown.Item href="/genre/Sandbox">Sandbox</NavDropdown.Item>
									<NavDropdown.Item href="/genre/Puzzle">Puzzle</NavDropdown.Item>
									<NavDropdown.Item href="/genre/Action">Action</NavDropdown.Item>
									<NavDropdown.Item href="/genre/Action-Adventure">Adventure</NavDropdown.Item>
									<NavDropdown.Item href="/genre/Survival">Survival</NavDropdown.Item>
									<NavDropdown.Item href="/genre/Horror">Horror</NavDropdown.Item>
									<NavDropdown.Item href="/genre/Role-Playing">Role-Playing</NavDropdown.Item>
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
									<div data-tip="Buy Cart" className="righticons">
										<img src="./cart.png" alt="cart" />
									</div>
								</Nav.Link>

								<Nav.Link href="/profile">
									<div data-tip="Profile" className="righticons">
										<img src="./user.png" alt="profile" />
									</div>
								</Nav.Link>

								<Nav.Link>
									<div data-tip="Logout" className="righticons">
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