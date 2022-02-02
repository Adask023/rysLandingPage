import React from "react";
import { Button, Container, Row } from "react-bootstrap";

export const ConsultationBanner = () => {
  return (
    <>
      <section className="bg-warning">
        <Container className="p-4 text-black">
          <Row className="text-center my-2">
            <h3>
              Skontaktuj się z nami, pomożemy wybrać odpowiedni plan dostosowany
              do twoich potrzeb.
            </h3>
          </Row>
          <Row className="text-center">
            <div>
              <Button variant="outline-dark font-weight-bold" size="lg">
                Skontaktuj się!
              </Button>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};
