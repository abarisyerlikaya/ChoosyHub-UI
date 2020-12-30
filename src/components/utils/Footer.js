import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function Footer() {
  return (
    <Container fluid className="bg-secondary text-light py-2 border-top text-center">
      <Row>
        <Col>
          <h6>Copyright © 2020 | ChoosyHub</h6>
        </Col>
      </Row>
    </Container>
  );
}
