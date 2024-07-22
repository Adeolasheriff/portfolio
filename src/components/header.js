import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#port">Portfolio</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link> 
                    <Nav.Link href="/portfolio">portfol</Nav.Link> 
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
    </div>
  );
}

export default Header;