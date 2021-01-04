/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Card, CardBody, Row, Col, Input } from "reactstrap";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import config from "../../config";

import FilterCollapse from "./FilterCollapse";
import ProductBox from "./ProductBox";
import Paginator from "./Paginator";
import Loading from "../utils/Loading";
import NoResult from "./NoResult";

export default function Content() {
  const [pageCount, setPageCount] = useState(null);
  const [products, setProducts] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const { pathname, search } = useLocation();
  const history = useHistory();

  const params = new URLSearchParams(search);
  const key = params.get("key") || "";
  const page = parseInt(params.get("page")) || 1;
  const sortBy = params.get("sortBy") || "numberOfReviews";

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);

      const endPoint = config.api.ENDPOINT;

      try {
        const response = await axios.get(`${endPoint}/products${params ? "?" + params.toString() : ""}`);
        if (response.data.body.length > 0) {
          setProducts(response.data.body);
          setPageCount(response.data.meta.pageCount);
        }
      } catch (err) {
        history.push("/500");
      }
      setLoading(false);
    };
    getProducts();
  }, [search]);

  const handleInputChange = (event) => {
    const index = event.target.selectedIndex;
    const value = event.target.childNodes[index].value;

    params.set("sortBy", value);

    history.push(pathname + "?" + params.toString());
  };

  if (isLoading) return <Loading />;
  if (!products) return <NoResult />;
  return (
    <div>
      <Card className="my-3 shadow-sm">
        <CardBody className="pb-2">
          <Row>
            <Col xs="12" sm="6">
              <FilterCollapse />
            </Col>
            <Col xs="12" sm="4" className="ml-auto">
              <Input
                type="select"
                size="sm"
                name="sortBy"
                defaultValue={sortBy}
                onChange={handleInputChange}
                className="mb-2"
              >
                <option value="numberOfReviews">Değerlendirme sayısına göre sırala</option>
                <option value="numberOfComments">Yorum sayısına göre sırala</option>
                <option value="rating">Puana göre sırala</option>
                <option value="priceAsc">Fiyata göre sırala (artan)</option>
                <option value="priceDsc">Fiyata göre sırala (azalan)</option>
              </Input>
            </Col>
          </Row>
        </CardBody>
      </Card>

      <Card className="my-3 shadow-sm">
        <CardBody>
          <Row className="mb-3">
            <Col>
              <h4>Arama sonuçları: {key}</h4>
            </Col>
          </Row>

          <Row>
            {products.map((product) => (
              <Col xs="12" md="6" className="py-2">
                <ProductBox product={product} />
              </Col>
            ))}
          </Row>

          <Row className="mt-4">
            <Col className="w-100 d-flex justify-content-center">
              <Paginator page={page} pageCount={pageCount} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}
