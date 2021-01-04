import React from "react";
import { Container, Row, Col, Badge } from "reactstrap";

export default function InternalError() {
  return (
    <div>
      <Container className="d-flex flex-column justify-content-center" style={{ height: "100vh" }}>
        <Row className>
          <Col xs="12" className="text-center">
            <h1>
              <Badge color="danger">ERROR</Badge>
            </h1>
            <h5>500: Internal server error</h5>
            <p>
              Anasayfaya dönmek için <a href="/">buraya tıklayınız</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
