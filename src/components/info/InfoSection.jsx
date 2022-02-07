import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export const InfoSection = () => {
  const itemsClasses = "p-2";

  return (
    <>
      <section id="moreinfo">
        <Container>
          <Row className="mt-4 p-4">
            <h1 className="text-center mt-5">
              Co <span className="text-warning">nas</span> wyróżnia?
            </h1>
          </Row>
          <Row className="mt-2 p-4 justify-content-center align-items-center">
            <Col className={`${itemsClasses}`} xs="12" md="8">
              <h3>Odpowiadamy do 24h</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                consequatur mollitia. Quae, facere ut deleniti quisquam
                perspiciatis distinctio error rerum. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Cumque dicta ipsa blanditiis? Ex,
                quas dolore.
              </p>
            </Col>
            <Col xs="12" md="4" className={`${itemsClasses}`}>
              <img
                width="100%"
                height="auto"
                src="./img/svg/Conversation.svg"
                alt=""
              />
            </Col>
          </Row>
          <Row className="mt-2 p-4 justify-content-center align-items-center flex-column-reverse flex-md-row">
            <Col xs="12" md="4" className={`${itemsClasses}`}>
              <img
                width="100%"
                height="auto"
                src="./img/svg/Quality.svg"
                alt=""
              />
            </Col>
            <Col xs="12" md="8" className={`${itemsClasses}`}>
              <h3>Świadczymy usługi na najwyższym poziomie!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                consequatur mollitia. Quae, facere ut deleniti quisquam
                perspiciatis distinctio error rerum. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Cumque dicta ipsa blanditiis? Ex,
                quas dolore.
              </p>
            </Col>
          </Row>
          <Row className="mt-2 p-4 justify-content-center align-items-center">
            <Col xs="12" md="8" className={`${itemsClasses}`}>
              <h3>Najnowszy sprzęt treningowy!</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                consequatur mollitia. Quae, facere ut deleniti quisquam
                perspiciatis distinctio error rerum. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Cumque dicta ipsa blanditiis? Ex,
                quas dolore.
              </p>
            </Col>
            <Col xs="12" md="4" className={`${itemsClasses}`}>
              <img
                width="100%"
                height="auto"
                src="./img/svg/FitnessColor.svg"
                alt=""
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
