import React from "react";
import Productlist from "../components/ProductList/ProductList";

import SingleProduct from "../components/SingleProduct/SingleProduct";

const Product = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", paddingBottom: "10px" }}>
        New Arrivals
      </h1>
      <Productlist />
      <SingleProduct />
    </>
  );
};

export default Product;
