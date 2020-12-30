import React from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

import CommentBox from "./CommentBox";
import Paginator from "../utils/Paginator";

export default function Comments() {
  return (
    <Card className="my-3 shadow-sm">
      <CardBody className="pb-2">
        <Row>
          <Col>
            <h4>Yorumlar:</h4>
          </Col>
        </Row>

        <Row className="my-3">
          <Col>
            <CommentBox />
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <CommentBox />
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <CommentBox />
          </Col>
        </Row>
        <Row className="my-3">
          <Col>
            <CommentBox />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Paginator />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
