import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { GoogleLogout } from "react-google-login";

const TDFNav = props => {
    return(
        <Navbar collapseOnSelect expand="md" bg="warning" variant="light">
            <Navbar.Brand>Tour de Friends</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => props.routeTo("/")}>News</Nav.Link>
                    <NavDropdown title={"Social"} id="collasible-nav-dropdownLeft">
                        <NavDropdown.Item onClick={() => props.routeTo("/map")}>Map</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => props.routeTo("/findAFriend")}>Find a friend</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => props.routeTo("/forums")}>Forums</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => props.routeTo("/pictures")}>Pictures</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => props.routeTo("/hotspots")}>Hotspots</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={() => props.routeTo("/stream")}>Stream</Nav.Link>
                    <Nav.Link onClick={() => props.routeTo("/about")}>About</Nav.Link>
                </Nav>
                {props.loggedIn ?
                    <Nav>
                        <NavDropdown title={props.gName} id="collasible-nav-dropdownRight">
                            <NavDropdown.Item onClick={() => props.routeTo("/myProfile")}>My Profile</NavDropdown.Item>
                            <GoogleLogout
                            clientId={process.env.REACT_APP_CLIENT_ID}
                                render={renderProps => (
                                    <NavDropdown.Item onClick={renderProps.onClick}>Log out</NavDropdown.Item>
                                )}
                                onLogoutSuccess={props.toggleLoggedIn}
                            />
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