import { Col, Container, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";

export const Banner = () => (
  <div>
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage="./img/dumbbell2.jpg"
      bgImageAlt="dumbell"
      strength={300}
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
