import React from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const TDFNav = props => {
    return(
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
            <Navbar.Brand href="#home">Tour de friends</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#news">News</Nav.Link>
                    <Nav.Link href="#social">Social</Nav.Link>
                    <Nav.Link href="#stream">Stream</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default TDFNav;