import React from "react";
import { Container, Row, Col } from "reactstrap";

import Navi from "../utils/Navi";
import Content from "./Content";
import Footer from "../utils/Footer";

export default function Product() {
  return (
    <div>
      <Navi />
      <Container fluid>
        <Row className="d-flex justify-content-center">
          <Col xs="9">
            <Content />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
