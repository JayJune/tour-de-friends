import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


const TDFNav = props => {
    var myHeaderName = props.loggedIn ? props.loginName : "Tour de Friends"
    return(
        <Navbar collapseOnSelect expand="md" bg="warning" variant="light">
            <Navbar.Brand href="#home">{myHeaderName}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#news">News</Nav.Link>
                    <Nav.Link href="#social">Social</Nav.Link>
                    <Nav.Link href="#stream">Stream</Nav.Link>
                    {props.loggedIn &&<Nav.Link onClick={props.toggleLoggedIn}>Log out</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default TDFNav;