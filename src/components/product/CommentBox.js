import React from "react";
import { Card, CardTitle, CardBody, CardSubtitle, CardText } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function CommentBox(props) {
  const comment = props.comment;

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= comment.rating)
      stars.push(
        <span>
          <FontAwesomeIcon icon={faStar} className="text-warning" />{" "}
        </span>
      );
    else
      stars.push(
        <span>
          <FontAwesomeIcon icon={faStar} className="text-secondary" />{" "}
        </span>
      );
  }

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h6>
            {stars.map((star) => star)} {comment.rating}/5
          </h6>
        </CardTitle>
        <CardText>{comment.comment}</CardText>
        <CardSubtitle className="text-right font-italic">
          {comment.date.split("-")[2]}.{comment.date.split("-")[1]}.{comment.date.split("-")[0]}
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}
