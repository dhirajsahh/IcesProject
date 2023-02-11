import React from "react";
import "./Singleproduct.css";
import { useSelector, useDispatch } from "react-redux";
import { addedItem } from "../../Redux/slices/CartSlice";

function SingleProduct() {
  const cartDispatch = useDispatch();
  const selector = useSelector((state) => state.product.product);

  // console.log(selector);
  return (
    <>
      <div className="container">
        {selector.map((item) => {
          return (
            <div key={item.id} className="productitem">
              <div className="singleProduct">
                <img
                  className="productImage"
                  src={item.images[0]}
                  alt={item.title}
                />
                <div className="productInfo">
                  <h2 className="productTitle">{item.title}</h2>
                  <p className="productPrice">Price:${item.price}</p>
                  <button
                    onClick={() => {
                      cartDispatch(addedItem(item));

                      // alert("the item has been added succesfully to the cart");
                    }}
                    className="addcartbutton"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SingleProduct;
