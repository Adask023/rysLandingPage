import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export const Navigation = () => {
  return (
    <>
      <Navbar className="p-3" bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="#home">Gravity Gym</Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#home">Kim jesteśmy</Nav.Link>
              <Nav.Link href="#features">Referencje</Nav.Link>
              <NavDropdown title="Usługi">
                <NavDropdown.Item>Konsultacja</NavDropdown.Item>
                <NavDropdown.Item>Schudnij grubasie</NavDropdown.Item>
                <NavDropdown.Item>Rozbudowa mięśni</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
