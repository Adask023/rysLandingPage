import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.section`
  header {
    background-image: url("./img/header-bg.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: relative;
    z-index: 2;
  }
  header::after {
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
`;

export const HeroSection = () => {
  return (
    <Styles>
      <header className="vh-100 d-flex align-items-center">
        <Container>
          <Row>
            <div className="col-lg-7 mx-auto text-center text-white p-2">
              <h1 className="display-1 font-weight-bold mb-5">WITAJ NA NASZEJ SIŁOWNI</h1>
              <p className="lead mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur harum quisquam quibusdam perspiciatis
                necessitatibus sunt recusandae natus error voluptatem,
                reiciendis maxime doloribus ut? Sed facere magnam a
                exercitationem dolorem ratione.
              </p>
              <Button href="#" className="btn m-1" variant="warning">
                Poznaj nas
              </Button>
              <Button href="#" className="btn m-1" variant="outline-warning">
                Usługi
              </Button>
            </div>
          </Row>
        </Container>
      </header>
    </Styles>
  );
};
