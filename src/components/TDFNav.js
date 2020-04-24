import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

const TDFNav = props => {
    return(
        <Navbar collapseOnSelect expand="md" bg="warning" variant="light">
            <Navbar.Brand>Tour de Friends</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => props.routeTo("/")}>News</Nav.Link>
                    <Nav.Link onClick={() => props.routeTo("/social")}>Social</Nav.Link>
                    <Nav.Link onClick={() => props.routeTo("/stream")}>Stream</Nav.Link>
                    <Nav.Link onClick={() => props.routeTo("/about")}>About</Nav.Link>
                </Nav>
                {props.loggedIn ?
                    <Nav>
                        <NavDropdown title={props.loginName} id="collasible-nav-dropdown">
                            <NavDropdown.Item onClick={() => props.routeTo("/myProfile")}>My Profile</NavDropdown.Item>
                            <NavDropdown.Item onClick={props.toggleLoggedIn}>Log out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                : <Nav>
                    <Nav.Link onClick={() => props.routeTo("/login")}>Login</Nav.Link>
                </Nav>
                }
            </Navbar.Collapse>
        </Navbar>
    )
}
export default TDFNav;