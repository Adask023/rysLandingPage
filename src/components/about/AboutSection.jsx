import React from "react";
import {
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

export const AboutSection = () => {
  return (
    <>
      <section className="p-5 bg-dark text-light">
        <Container>
          <Row className="text-center g-4 mt-4 justify-content-center align-items-center">
            <Col xs={12} md={6}>
              <img
                src="https://randomuser.me/api/portraits/men/11.jpg"
                className="mb-3 rounded-circle"
                alt=""
                width={250}
                height={"auto"}
              />
            </Col>
            <Col xs={12} md={6}>
              <h1 className="p-2">
                Najlepszy <span className="text-warning">T</span>rener na
                świecie
              </h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                officiis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Libero, debitis quibusdam a illo vitae est officiis. Deserunt
                esse deleniti neque alias animi odit necessitatibus ea,
                molestias temporibus laborum accusantium sequi.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
