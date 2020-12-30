import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Main() {
  return (
    <Container fluid className="d-flex justify-content-center" style={{ height: "100vh" }}>
      <Row className="my-auto w-100 d-flex justify-content-center">
        <Col className="pb-5 mb-5" md="4" xs="12">
          <Row className="my-3">
            <Col>
              <h1 className="text-center text-primary">ChoosyHub</h1>
            </Col>
          </Row>
          <Row className="my-3">
            <Col>
              <Input className="rounded-pill" placeholder="Ürün ara..." />
            </Col>
          </Row>
          <Row className="my-3">
            <Col className="d-flex justify-content-center">
              <Button
                color="light"
                className="border rounded-pill px-4 shadow-sm"
                onClick={() => (window.location.href = "/search-results")}
              >
                <FontAwesomeIcon icon={faSearch} /> ChoosyHub'da Ara
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}