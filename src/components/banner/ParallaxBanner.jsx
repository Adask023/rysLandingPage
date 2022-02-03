import { Col, Container, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";

export const Banner = () => (
  <div>
    <Parallax
      blur={{ min: -1, max: 3 }}
      bgImage="./img/believe-in-yourself.jpg"
      bgImageAlt="the cat"
      strength={500}
    >
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ height: 600 }}
      >
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="bg-warning p-4 display-2">Believe in yourself</Col>
        </Row>
      </Container>
    </Parallax>
  </div>
);
