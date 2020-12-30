import React from "react";
import { Card, CardBody, Row, Col, Input } from "reactstrap";

import FilterCollapse from "./FilterCollapse";
import ProductBox from "./ProductBox";
import Paginator from "../utils/Paginator";

export default function Content() {
  return (
    <div>
      <Card className="my-3 shadow-sm">
        <CardBody className="pb-1">
          <Row>
            <Col xs="6">
              <FilterCollapse />
            </Col>
            <Col xs="4" className="ml-auto">
              <Input type="select" size="sm" name="select">
                <option>Varsayılan sıralama</option>
                <option>Fiyata göre sırala</option>
                <option>Puana göre sırala</option>
                <option>Değerlendirme sayısına göre sırala</option>
                <option>Yorum sayısına göre sırala</option>
              </Input>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="my-3 shadow-sm">
        <CardBody>
          <Row className="mb-4">
            <Col>
              <h4>"iphone 11" arama sonuçları:</h4>
            </Col>
          </Row>

          <Row className="my-4">
            <Col>
              <ProductBox />
            </Col>
            <Col>
              <ProductBox />
            </Col>
          </Row>

          <Row className="my-4">
            <Col>
              <ProductBox />
            </Col>
            <Col>
              <ProductBox />
            </Col>
          </Row>

          <Row className="my-4">
            <Col>
              <ProductBox />
            </Col>
            <Col>
              <ProductBox />
            </Col>
          </Row>

          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <Paginator />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}
