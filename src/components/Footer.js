import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light footer">
      <Container className="d-flex flex-column">
        <Row className="flex-grow-1">
          <Col className="mt-3" md={6}>
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </Col>
          <Col className="mt-3" md={6}>
            <h5>Follow Us</h5>
            <p>Facebook | Twitter | Instagram</p>
          </Col>
        </Row>
        <Row>
          <Col className="mt-3">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;