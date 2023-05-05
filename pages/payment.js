import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "../styles/Payment.module.css";

const Payment = () => {
  return (
    <Container className={styles.container}>
      <Row className={styles.title}>
        <Col>
          <h1>Payment Page</h1>
        </Col>
      </Row>
      <Row className={styles.paymentContainer}>
        <Col>
          <Form className={styles.form}>
            <Form.Group controlId="formCardNumber">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="Enter card number" />
            </Form.Group>

            <Form.Group controlId="formExpirationDate">
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control type="text" placeholder="MM/YY" />
            </Form.Group>

            <Form.Group controlId="formCVC">
              <Form.Label>CVC</Form.Label>
              <Form.Control type="text" placeholder="Enter CVC" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Proceed to Checkout
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Payment;
