import React from "react";
import { Card, CardTitle, CardBody, CardSubtitle, CardText, Row, Col, UncontrolledCarousel } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function CommentBox() {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h6>
            <FontAwesomeIcon icon={faStar} className="text-warning" />{" "}
            <FontAwesomeIcon icon={faStar} className="text-warning" />{" "}
            <FontAwesomeIcon icon={faStar} className="text-warning" />{" "}
            <FontAwesomeIcon icon={faStar} className="text-warning" />{" "}
            <FontAwesomeIcon icon={faStar} className="text-secondary" /> 4/5
          </h6>
        </CardTitle>
        <CardText>
          Mollit fugiat officia exercitation ad proident sunt proident nostrud ut occaecat adipisicing eiusmod aute
          Lorem. Exercitation nisi nostrud ut cillum nisi dolore veniam esse. Commodo consequat incididunt nostrud magna
          non Lorem reprehenderit cillum ad veniam quis sunt nulla. Consequat magna enim pariatur exercitation officia
          laboris id dolor cupidatat adipisicing aliquip.
        </CardText>
        <CardSubtitle className="text-right font-italic">2020-12-30</CardSubtitle>
      </CardBody>
    </Card>
  );
}
