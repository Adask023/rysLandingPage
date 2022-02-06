import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const FooterSection = () => {
  return (
    <footer className="p-4 bg-dark text-light">
      <Container>
        <Row className="d-flex justify-content-center justify-content-md-between align-items-space-center">
          <Col xs="12" md="auto" className="p-2 text-center">
            <span className="text-warning">G</span>ravity Gym &copy;2022
          </Col>
          <Col xs="12" md="auto" className="p-2 text-center">
            Wykonanie <span className="text-warning">A</span>dam Kudłacik-
            <span className="text-warning">W</span>eb Development
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
