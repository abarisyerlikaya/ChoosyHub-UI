import React, { useEffect, useState } from "react";
import { Card, CardBody, Row, Col, Input } from "reactstrap";
import { useLocation } from "react-router-dom";
import axios from "axios";
import config from "../../config";

import FilterCollapse from "./FilterCollapse";
import ProductBox from "./ProductBox";
import Paginator from "../utils/Paginator";
import Loading from "../utils/Loading";

export default function Content() {
  const params = new URLSearchParams(useLocation().search);
  const key = params.get("key");
  const page = parseInt(params.get("page"));

  const [pageCount, setPageCount] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const endPoint = config.api.ENDPOINT;

      try {
        const response = await axios.get(`${endPoint}/products?name=${key}&page=${page}`);
        setProducts(response.data.body);
        setPageCount(response.data.meta.pageCount);
        console.log(response.data.body);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };
    getProducts();
  }, []);

  if (isLoading) return <Loading />;
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
          <Row className="mb-3">
            <Col>
              <h4>"iphone 11" arama sonuçları:</h4>
            </Col>
          </Row>

          <Row>
            {products.map((product) => (
              <Col xs="6" className="py-2">
                <ProductBox product={product} />
              </Col>
            ))}
          </Row>

          <Row className="mt-4">
            <Col className="d-flex justify-content-center">
              <Paginator page={page} pageCount={pageCount} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}
