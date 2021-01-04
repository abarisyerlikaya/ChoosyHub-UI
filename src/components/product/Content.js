/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";
import config from "../../config";

import ProductInfo from "./ProductInfo";
import Comments from "./Comments";
import NotFound from "../utils/NotFound";
import Loading from "../utils/Loading";

export default function Content() {
  const params = new URLSearchParams(useLocation().search);
  const id = params.get("id");

  const history = useHistory();

  const [isLoading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductData = async () => {
      setLoading(true);

      const endPoint = config.api.ENDPOINT;
      try {
        const response = await axios.get(`${endPoint}/product?id=${id}`);
        setProduct(response.data);
      } catch (err) {
        history.push("/500");
      }

      setLoading(false);
    };
    getProductData();
  }, []);

  if (isLoading) return <Loading />;
  if (!product) return <NotFound />;
  return (
    <div>
      <ProductInfo product={product} />
      {product.comments && product.comments.length > 0 ? <Comments comments={product.comments.slice(1)} /> : ""}
    </div>
  );
}
