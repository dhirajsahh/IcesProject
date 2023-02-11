import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../../Redux/slices/ProductsSlice.js";

const Productlist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchdata();
  }, []);
  async function fetchdata() {
    const response = await fetch(" https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    dispatch(loadProducts(data));
  }
  // const productname = useSelector((state) => state.product.product);
  // console.log(selector);

  return (
    <>
      {/* {selector.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.title}</h2>
          </div>
        );
      })} */}
    </>
  );
};

export default Productlist;
