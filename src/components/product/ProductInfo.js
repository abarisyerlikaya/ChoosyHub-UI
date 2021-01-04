import React from "react";
import { Card, CardBody, Row, Col, UncontrolledCarousel } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faStar, faComment, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import CommentBox from "./CommentBox";

export default function ProductInfo(props) {
  const product = props.product;
  const pics = product.pictures;

  const items = [];

  pics.forEach((pic, i) => items.push({ src: pic, altText: `pic-${(i + 1).toString()}`, key: (i + 1).toString() }));

  return (
    <Card className="my-3 shadow-sm">
      <CardBody>
        <Row>
          <Col xs="12" md="5" className="my-2">
            <UncontrolledCarousel id="product-slide" indicators={false} items={items} className="border" />
          </Col>
          <Col className="d-flex flex-column justify-content-between my-2">
            <Row>
              <Col>
                <h5>{product.name}</h5>
                <h6 className="py-3">
                  {product._id.includes("trendyol.com") ? (
                    <span>
                      <img
                        src="https://patronlarinensesindeyiz.org/wp-content/uploads/2019/09/t0CFAPzZ.jpg"
                        alt="trendyol"
                        width="24px"
                        className="rounded"
                      />{" "}
                      <a href={product._id}>
                        Trendyol <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                    </span>
                  ) : (
                    <span>
                      <img
                        src="https://images.hepsiburada.net/cac/content/www/erised/globalAssets/images/hepsiburada-logo-1024.png"
                        alt="hepsiburada"
                        width="24px"
                        className="rounded border"
                      />{" "}
                      <a href={product._id}>
                        Hepsiburada <FontAwesomeIcon icon={faExternalLinkAlt} />
                      </a>
                    </span>
                  )}
                </h6>
                <h5>
                  <FontAwesomeIcon icon={faTag} className="text-success" />{" "}
                  {product.price > 0 ? <span>{product.price.toLocaleString("en")} ₺</span> : "Fiyat bilgisi yok"}
                </h5>
                <h5>
                  <FontAwesomeIcon icon={faStar} className="text-warning" /> {product.rating.toFixed(1)} Puan{" "}
                  <small>({product.number_of_reviews} Değerlendirme)</small>
                </h5>
                <h5>
                  <FontAwesomeIcon icon={faComment} className="text-info" /> {product.number_of_comments} Yorum
                </h5>
              </Col>
            </Row>
            {product.comments && product.comments.length > 0 ? (
              <Row>
                <Col>
                  <h6>Öne çıkan yorum:</h6>
                  <CommentBox comment={product.comments[0]} />
                </Col>
              </Row>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
