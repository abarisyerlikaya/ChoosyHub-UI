import React, { useState } from "react";
import { UncontrolledCollapse, Button, CardBody, Card, Form, FormGroup, Row, Col, Input, Label } from "reactstrap";
import { useLocation, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

export default function FilterCollapse() {
  const { pathname, search } = useLocation();

  const params = new URLSearchParams(search);
  const history = useHistory();

  const [filters, setFilters] = useState({
    minPrice: params.get("minPrice") || null,
    maxPrice: params.get("maxPrice") || null,
    minRating: params.get("minRating") || null,
    minReviewCount: params.get("minReviewCount") || null,
    minCommentCount: params.get("minCommentCount") || null,
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFilters({ ...filters, [name]: value });
  };

  const handleSubmit = () => {
    if (filters) {
      const { minPrice, maxPrice, minRating, minReviewCount, minCommentCount } = filters;

      if (minPrice) params.set("minPrice", minPrice);
      if (maxPrice) params.set("maxPrice", maxPrice);
      if (minRating) params.set("minRating", minRating);
      if (minReviewCount) params.set("minReviewCount", minReviewCount);
      if (minCommentCount) params.set("minCommentCount", minCommentCount);

      history.push(pathname + "?" + params.toString());
    }
  };

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
                    <Input
                      type="text"
                      name="minPrice"
                      id="minPrice"
                      placeholder="Min."
                      defaultValue={params.get("minPrice") || ""}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <h6 className="d-flex flex-column justify-content-center">-</h6>
                <Col md="3">
                  <FormGroup>
                    <Input
                      type="text"
                      name="maxPrice"
                      id="maxPrice"
                      placeholder="Max."
                      defaultValue={params.get("maxPrice") || ""}
                      onChange={handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <h6 className="d-flex flex-column justify-content-center">₺</h6>
              </Row>
              <FormGroup>
                <Label for="minRating">
                  Puana göre filtrele: ({filters?.minRating ? filters.minRating : 0} ve üzeri)
                </Label>
                <Input
                  type="range"
                  name="minRating"
                  id="minRating"
                  max="5"
                  defaultValue={params.get("minRating") || 0}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="minReviewCount">
                  Değerlendirme sayısına göre filtrele: ({filters?.minReviewCount ? filters.minReviewCount : 0} ve
                  üzeri)
                </Label>
                <Input
                  type="range"
                  name="minReviewCount"
                  id="minReviewCount"
                  max="8000"
                  step="50"
                  defaultValue={params.get("minReviewCount") || 0}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="minCommentCount">
                  Yorum sayısına göre filtrele: ({filters?.minCommentCount ? filters.minCommentCount : 0} ve üzeri)
                </Label>
                <Input
                  type="range"
                  name="minCommentCount"
                  id="minCommentCount"
                  max="5000"
                  step="50"
                  defaultValue={params.get("minCommentCount") || 0}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <Button color="primary" onClick={handleSubmit}>
                Uygula
              </Button>
            </Form>
          </CardBody>
        </Card>
      </UncontrolledCollapse>
    </div>
  );
}
