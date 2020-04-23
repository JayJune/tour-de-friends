import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const TDFNav = props => {
    return(
        <Navbar collapseOnSelect expand="md" bg="warning" variant="light">
            <Navbar.Brand href="#home">Tour de Friends</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#news">News</Nav.Link>
                    <Nav.Link href="#social">Social</Nav.Link>
                    <Nav.Link href="#stream">Stream</Nav.Link>
                </Nav>
                {props.loggedIn &&
                    <Nav>
                        <NavDropdown title={props.loginName} id="collasible-nav-dropdown">
                            <NavDropdown.Item>My Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={props.toggleLoggedIn}>Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}
export default TDFNav;