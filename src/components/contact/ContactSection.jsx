import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const ContactSection = () => {
  return (
    <section id="contact" className="mt-4 p-4 bg-dark text-light">
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={12} md={8}>
            Formularz
          </Col>
        </Row>
      </Container>
    </section>
  );
};
