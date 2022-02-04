import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export const ServicesSection = () => {
  return (
    <section id="services" className="my-5">
      <Container className="pb-4">
        <Row>
          <Col xs={12}>
            <div>
              <h1 className="text-center my-5">
                <span className="text-warning">N</span>asze usługi
              </h1>
            </div>
          </Col>
        </Row>
        <Row className="text-center g-4">
          <Col xs={12} md={4}>
            <Card>
              <Card.Img variant="top" src="img/man-working-bg.jpg" />
              <Card.Body>
                <Card.Title>Plan ćwiczeń</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe magni doloremque ipsa minus culpa itaque tempore, omnis ipsum possimus asperiores ratione dignissimos mollitia molestiae dolor nam ullam repudiandae consectetur labore.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Img variant="top" src="img/redukcjaMasy.jpg" />
              <Card.Body>
                <Card.Title>Redukcja masy</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore voluptate assumenda quidem natus nemo quae corporis facere dolore, eveniet ipsam voluptates soluta commodi suscipit molestias! Perferendis architecto ab dolorem iste.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Img variant="top" src="img/diet.jpg" />
              <Card.Body>
                <Card.Title>Dieta dla sportowców</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem aut earum id nulla pariatur omnis eius optio voluptates porro ex corporis tenetur unde possimus consectetur, quae non aperiam ad?
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
