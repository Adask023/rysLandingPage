import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const Navigation = () => {
  return (
    <>
      <Navbar
        fixed="top"
        className="p-3"
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <Navbar.Brand href="#home">
            <span className="text-warning">G</span>ravity Gym
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#aboutus">Kim jesteśmy</Nav.Link>
              <Nav.Link href="#services">Nasze usługi</Nav.Link>
              <Nav.Link href="#moreinfo">Co nas wyróżnia</Nav.Link>
              <Nav.Link href="#contact">Skontaktuj się</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
