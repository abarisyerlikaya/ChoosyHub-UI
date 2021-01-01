import React, { useState } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";

import CommentBox from "./CommentBox";
import Paginator from "./Paginator";

export default function Comments(props) {
  const comments = props.comments;
  const pageCount = Math.floor(comments.length / 10) + 1;
  const [page, setPage] = useState(1);

  const updatePage = (page) => setPage(page);

  return (
    <Card className="my-3 shadow-sm" id="comments-top">
      <CardBody className="pb-2">
        <Row>
          <Col>
            <h4>Yorumlar:</h4>
          </Col>
        </Row>

        {comments.slice((page - 1) * 10, page * 10).map((comment) => (
          <Row className="my-3">
            <Col>
              <CommentBox comment={comment} />
            </Col>
          </Row>
        ))}

        <Row>
          <Col className="d-flex justify-content-center">
            <Paginator page={page} pageCount={pageCount} updatePage={updatePage} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
