import React from "react";
import { Container, Row, Col, Badge } from "reactstrap";

export default function NoResult() {
  return (
    <div>
      <Container className="d-flex flex-column justify-content-center" style={{ height: "100%" }}>
        <Row className>
          <Col xs="12" className="text-center">
            <h1>
              <Badge color="primary">Sonuç bulunamadı</Badge>
            </h1>
            <h5>Aradığınız kriterlere uygun bir sonuç bulunamadı.</h5>
            <p>
              Anasayfaya dönmek için lütfen <a href="/">buraya tıklayınız</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
