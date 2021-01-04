import React from "react";
import { Container, Row, Col, Badge } from "reactstrap";

export default function NotFound() {
  return (
    <div>
      <Container className="d-flex flex-column justify-content-center" style={{ height: "100vh" }}>
        <Row className>
          <Col xs="12" className="text-center">
            <h1>
              <Badge color="warning">ERROR</Badge>
            </h1>
            <h5>404: Not found</h5>
            <p>
              Anasayfaya dönmek için <a href="/">buraya tıklayınız</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}