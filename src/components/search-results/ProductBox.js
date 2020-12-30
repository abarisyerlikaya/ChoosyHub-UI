import React from "react";
import { Row, Col, Card, CardBody, CardImg } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faStar, faComment, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export default function ProductBox() {
  return (
    <Card>
      <Row className="no-gutters">
        <Col xs="auto">
          <CardImg
            style={{ width: "190px", height: "282px", "object-fit": "cover" }}
            className="border-right"
            src="https://productimages.hepsiburada.net/s/49/400-592/10995125518386.jpg"
            alt="iphone"
          />
        </Col>
        <Col>
          <CardBody>
            <h4>
              <a href="/product">iPhone 11 128 GB</a>
            </h4>
            <h6 className="py-3">
              <img
                src="https://patronlarinensesindeyiz.org/wp-content/uploads/2019/09/t0CFAPzZ.jpg"
                alt="trendyol"
                width="18px"
                className="rounded"
              />{" "}
              <a href="/product">
                Trendyol <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </h6>
            <h6>
              <FontAwesomeIcon icon={faTag} className="text-success" /> 8.428,00 ₺
            </h6>
            <h6>
              <FontAwesomeIcon icon={faStar} className="text-warning" /> 4,6 <small>(1093 Değerlendirme)</small>
            </h6>
            <h6>
              <FontAwesomeIcon icon={faComment} className="text-info" /> 748 Yorum
            </h6>
          </CardBody>
        </Col>
      </Row>
    </Card>
  );
}
