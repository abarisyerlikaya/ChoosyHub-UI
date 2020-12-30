import React from "react";
import { UncontrolledCollapse, Button, CardBody, Card, Form, FormGroup, Row, Col, Input, Label } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function FilterCollapse() {
  return (
    <div>
      <Button outline color="primary" size="sm" id="filter-toggler" style={{ marginBottom: "1rem" }}>
        <FontAwesomeIcon icon={faFilter} /> Filtreler
      </Button>
      <UncontrolledCollapse toggler="#filter-toggler">
        <Card className="mb-3 border-0">
          <CardBody>
            <Form>
              <FormGroup className="mb-0">
                <Label>Fiyata göre filtrele:</Label>
              </FormGroup>
              <Row form>
                <Col md="3">
                  <FormGroup>
                    <Input type="text" name="minPrice" id="minPrice" placeholder="Min." />
                  </FormGroup>
                </Col>
                {"-"}
                <Col md="3">
                  <FormGroup>
                    <Input type="text" name="maxPrice" id="maxPrice" placeholder="Max." />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="rating">Puana göre filtrele: (0 ve üzeri)</Label>
                <Input type="range" name="rating" id="rating" max="5" defaultValue="0" />
              </FormGroup>
              <FormGroup>
                <Label for="reviewCount">Değerlendirme sayısına göre filtrele: (0 ve üzeri)</Label>
                <Input type="range" name="reviewCount" id="reviewCount" max="8000" step="50" defaultValue="0" />
              </FormGroup>
              <FormGroup>
                <Label for="commentCount">Yorum sayısına göre filtrele: (0 ve üzeri)</Label>
                <Input type="range" name="commentCount" id="commentCount" max="5000" step="50" defaultValue="0" />
              </FormGroup>
              <Button color="primary">Uygula</Button>
            </Form>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}
