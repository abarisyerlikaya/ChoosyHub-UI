import React, { useState } from "react";
import { Card, CardBody, Row, Col, UncontrolledCarousel } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faStar, faComment, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import CommentBox from "./CommentBox";

export default function ProductInfo() {
  const items = [
    {
      src: "https://cdn.dsmcdn.com/assets/product/media/images/20191017/19/437470/57616611/1/1_org_zoom.jpg",
      altText: "Slide 1",
      key: "1",
    },
    {
      src: "https://cdn.dsmcdn.com/assets/product/media/images/20191017/19/437470/57616611/2/2_org_zoom.jpg",
      altText: "Slide 2",
      key: "2",
    },
  ];

  return (
    <Card className="my-3 shadow-sm">
      <CardBody>
        <Row>
          <Col xs="5">
            <UncontrolledCarousel id="product-slide" indicators={false} items={items} className="border" />
          </Col>
          <Col className="d-flex flex-column justify-content-between">
            <Row>
              <Col>
                <h4>Apple iPhone 11 128GB</h4>
                <h5 className="py-3">
                  <img
                    src="https://patronlarinensesindeyiz.org/wp-content/uploads/2019/09/t0CFAPzZ.jpg"
                    alt="trendyol"
                    width="24px"
                    className="rounded"
                  />{" "}
                  <a href="/">
                    Trendyol <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </h5>
                <h4>
                  <FontAwesomeIcon icon={faTag} className="text-success" /> 8.428,00 ₺
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faStar} className="text-warning" /> 4,6 Puan{" "}
                  <small>(1093 Değerlendirme)</small>
                </h4>
                <h4>
                  <FontAwesomeIcon icon={faComment} className="text-info" /> 748 Yorum
                </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <h6>En son yorum:</h6>
                <CommentBox />
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
