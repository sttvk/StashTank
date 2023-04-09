import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm" className="d-flex justify-content-between">
      <Navbar.Brand as={Link} to="/" className="ms-4">
        StashTank
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user" className="me-4">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
