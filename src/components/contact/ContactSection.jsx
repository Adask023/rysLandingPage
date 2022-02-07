import React from "react";
import styled from "styled-components";
import { Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { Formik } from "formik";
import { validationSchema } from "./Schema";

const StyledSection = styled.section`
  .error {
    border: 1px solid #ff6565;
  }

  .error-message {
    color: #ff6565;
    padding: 0.5em 0.2em;
    height: 1em;
    position: absolute;
    font-size: 0.7em;
  }
`;

export const ContactSection = () => {
  return (
    <StyledSection id="contact" className="mt-5 py-5 bg-dark text-light">
      <Container>
        <Row className="d-flex align-items-center justify-content-center">
          <Col xs="auto">
            <h1 className="py-5">
              <span className="text-warning">S</span>kontaktuj się z nami!
            </h1>
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center">
          <Col xs="12" md="8">
            <Formik
              initialValues={{
                name: "",
                secondname: "",
                email: "",
                phone: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(true);

                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  resetForm();
                  setSubmitting(false);
                }, 500);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit} className="mx-auto">
                  {console.log(values)}
                  <Form.Group controlId="formName" className="pb-4">
                    <Form.Label>Imię:</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Twoje imię..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      className={touched.name && errors.name ? "error" : null}
                    />
                    {touched.name && errors.name ? (
                      <div className="error-message">{errors.name}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="formSecondname" className="pb-4">
                    <Form.Label>Nazwisko:</Form.Label>
                    <Form.Control
                      type="text"
                      name="secondname"
                      placeholder="Twoje nazwisko..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.secondname}
                      className={
                        touched.secondname && errors.secondname ? "error" : null
                      }
                    />
                    {touched.secondname && errors.secondname ? (
                      <div className="error-message">{errors.secondname}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="formEmail" className="pb-4">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Email do kontaktu..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={touched.email && errors.email ? "error" : null}
                    />
                    {touched.email && errors.email ? (
                      <div className="error-message">{errors.email}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="formPhone" className="pb-4">
                    <Form.Label>Numer telefonu:</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Twój numer telefonu..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                      className={touched.phone && errors.phone ? "error" : null}
                    />
                    {touched.phone && errors.phone ? (
                      <div className="error-message">{errors.phone}</div>
                    ) : null}
                  </Form.Group>
                  <Form.Group controlId="formMessage" className="pb-4">
                    <Form.Label>Twoja wiadomość:</Form.Label>
                    <Form.Control
                      type="text"
                      as="textarea"
                      rows={5}
                      name="message"
                      placeholder="Twoja wiadomość..."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      className={
                        touched.message && errors.message ? "error" : null
                      }
                    />
                    {touched.message && errors.message ? (
                      <div className="error-message">{errors.message}</div>
                    ) : null}
                  </Form.Group>

                  <Row className="align-items-center">
                    <Col xs="auto">
                      <Button
                        className="btn btn-warning"
                        variant="primary"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Prześlij
                      </Button>
                    </Col>
                    <Col className="d-flex align-items-center">
                      {isSubmitting && (
                        <Spinner animation="border" variant="warning" />
                      )}
                    </Col>
                  </Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </StyledSection>
  );
};
