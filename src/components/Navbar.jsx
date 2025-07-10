import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../index.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="md" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/" style={{ color: "#00cfff" }}>
          <strong>TuanAnh</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end className="nav-link-custom">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link-custom">
              About
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/certificates"
              className="nav-link-custom"
            >
              Certificates
            </Nav.Link>
            <Nav.Link as={NavLink} to="/skills" className="nav-link-custom">
              Skills
            </Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className="nav-link-custom">
              Portfolio
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link-custom">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
