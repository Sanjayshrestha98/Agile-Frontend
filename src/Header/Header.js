
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../Container/Theme";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "react-bootstrap";
import { Nav, Button } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { MdFavorite } from 'react-icons/md';
import ReactTooltip from 'react-tooltip';
import { useState, useEffect } from "react";

const StyledApp = styled.div`
  color: ${(props) => props.theme.color};
`;


const logout = () => {
	localStorage.removeItem('token')
	localStorage.removeItem('userid')
	localStorage.removeItem('role')
	window.location.href = '/'
}


function Header() {


	const [theme, setTheme] = useState({});
	const [themeSelected, setThemeSelected] = useState()


	const themeToggler = () => {
		if (localStorage.getItem('theme', "light") === "light") {
			localStorage.setItem('theme', "dark")
			setThemeSelected("dark")
			// themeSelected = "dark"
		}
		else {
			localStorage.setItem('theme', "light")
			setThemeSelected("light")
			// themeSelected = "light"
		}
		// theme === localStorage.getItem("theme") ? setTheme("dark") : setTheme("light");

	};


	useEffect(() => {
		setTheme(localStorage.getItem("theme") === "light" ? lightTheme : darkTheme)
	}, [themeSelected])



	return (
		<ThemeProvider theme={theme}>

			<GlobalStyles />
			<StyledApp>
				{localStorage.getItem('token')
					?
					<div>
						<Navbar collapseOnSelect expand="lg" variant="light">
							<Navbar.Brand href="/">
								<img src="./logo.png" alt="logo" height="70px" />
							</Navbar.Brand>

							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav className="mr-auto">
									<Nav.Link href="/">Home</Nav.Link>
									<Nav.Link href="/products">Products</Nav.Link>
									<NavDropdown title="Genre" id="collasible-nav-dropdown">
										<NavDropdown.Item href="/genre/Sports">Sports</NavDropdown.Item>
										<NavDropdown.Item href="/genre/Action">Action</NavDropdown.Item>
										<NavDropdown.Divider />
									</NavDropdown>

									<Nav.Link href="/contact">Contact Us</Nav.Link>

									<Nav.Link href="/faq">FAQ</Nav.Link>
									<Nav.Link href="/order">Orders</Nav.Link>
								</Nav>

								<Nav className="rightnav">

									<Nav.Link href="/rentcart"  data-tip="Rent Cart" className = " m-auto">
									<i class="fas fa-calendar-check "></i>
									</Nav.Link>

									<Nav.Link href="/favourite" className = " m-auto">
										<div data-tip="Favourites" className="righticons">
											<MdFavorite fontSize="24px" />
										</div>
									</Nav.Link>

									<Nav.Link href="/cartpage" className = " m-auto">
										< i className = "fa fa-shopping-cart "></i>
									 
									</Nav.Link>

									<Nav.Link href="/profile" data-tip="Profile" className = " m-auto">
									< i className = "fa fa-user "></i>
									</Nav.Link>
									<Nav.Link className = " m-auto">
										<div  className="righticons">
											<button className = "btn btn-success btn-sm" onClick={() => themeToggler()}>Change Theme</button>
										</div>
									</Nav.Link>


									<Nav.Link className = " m-auto">
										<div data-tip="Logout" className="righticons">
										<i class="fas fa-sign-out-alt " onClick={() => logout()}></i>
										  
										</div>
									</Nav.Link>

								</Nav>
							</Navbar.Collapse>
						</Navbar>

						<ReactTooltip />
					</div>

					:

					<div>
						<Navbar collapseOnSelect expand="lg" variant="light">
							<Navbar.Brand>
								<img src="./logo.png" alt="logo" height="70px" />
							</Navbar.Brand>

							<Navbar.Toggle aria-controls="responsive-navbar-nav" />
							<Navbar.Collapse id="responsive-navbar-nav">
								<Nav className="mr-auto">
									<Nav.Link href="/">Home</Nav.Link>
									<Nav.Link href="/products">Products</Nav.Link>

									

									<NavDropdown title="Genre" id="collasible-nav-dropdown">
										<NavDropdown.Item href="/genre/Sports">Sports</NavDropdown.Item>
										<NavDropdown.Item href="/genre/Action">Action</NavDropdown.Item>
										<NavDropdown.Divider />
									</NavDropdown>

								</Nav>

								<Nav className="rightnav">

									<Nav.Link>
										<div className="righticons">
											<button className = "btn btn-success btn-sm" onClick={() => themeToggler()}>Change Theme</button>

										</div>
									</Nav.Link>

									<Nav.Link href="/register">Register</Nav.Link>
									<Nav.Link href="/login">Login</Nav.Link>

								</Nav>
							</Navbar.Collapse>
						</Navbar>

						<ReactTooltip />
					</div>
				}
			</StyledApp>

		</ThemeProvider>

	)



}

export default Header;