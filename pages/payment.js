import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../styles/Payment.module.css";

const Payment = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <Row className="my-auto">
        <Col>
          <h2>Payment Page</h2>
        </Col>
      </Row>
      <Row className="my-auto">
        <Col className={`shadow lg rounded p-5 ${styles["shadow-right-bottom"]}`}>
          <Form className="text-center">
            <Form.Group controlId="formName">
              <Form.Label>Name on Card</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name on card"
                className="custom-form-control"
              />
            </Form.Group>

            <Form.Group controlId="formCardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter card number"
                className="custom-form-control"
              />
            </Form.Group>

            <Form.Group controlId="formExpirationDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control
                type="text"
                placeholder="MM/YY"
                className="custom-form-control"
              />
            </Form.Group>

            <Form.Group controlId="formCVC">
              <Form.Label>CVC</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter CVC"
                className="custom-form-control"
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Proceed to Checkout
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
