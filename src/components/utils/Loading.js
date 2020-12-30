import React from "react";
import { Container, Row, Col, Spinner } from "reactstrap";

export default function Loading() {
  return (
    <Container className="my-5 py-5">
      <Row className="my-5">
        <Col className="mx-auto d-flex flex-column justify-content-center align-items-center">
          <Spinner color="primary" className="mx-auto my-auto" />
        </Col>
      </Row>
    </Container>
  );
}
