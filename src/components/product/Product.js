import React from "react";
import { Container, Row, Col } from "reactstrap";

import Navi from "../utils/Navi";
import Content from "./Content";
import Footer from "../utils/Footer";

export default function Product() {
  return (
    <div className="d-flex flex-column justify-content-between" style={{ "min-height": "100vh" }}>
      <Navi />
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <Col xs="12" lg="9">
            <Content />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
