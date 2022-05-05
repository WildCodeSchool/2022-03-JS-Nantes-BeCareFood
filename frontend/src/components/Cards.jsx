/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import "./Cards.css";
// eslint-disable-next-line import/no-unresolved
import Card from "@components/Card";
import ProductContext from "../contexts/ProductContext";
import MoreProductsButton from "./MoreProductsButton";
import ArrowTop from "./ArrowTop";

function Cards() {
  const { products } = useContext(ProductContext);

  return (
    products && (
      <div className="productCard">
        {products.map((element) => (
          <Card key={element._id} product={element} />
        ))}

        <MoreProductsButton />
        {products.length > 0 && <ArrowTop />}
      </div>
    )
  );
}

export default Cards;
