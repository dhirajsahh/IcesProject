import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { removeItem } from "../Redux/slices/CartSlice";

const Cart = () => {
  const addedItem = useSelector((state) => state.cart.item);
  const no_of_item = useSelector((state) => state.cart.item).length;
  const dispatch = useDispatch();
  const price = addedItem.map((addedItem) => {
    return addedItem.price;
  });
  let sum = price.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const payingAmount = Math.floor(sum - 0.05 * sum);
  // console.log(payingAmount);
  // console.log(price);
  // console.log(sum);

  return (
    <>
      {no_of_item > 0 ? (
        <div className="itemclass">
          {
            <div className="addeditem">
              {addedItem.map((addedItem) => {
                return (
                  <div key={addedItem.id} className="itemlist">
                    <img src={addedItem.images[0]} alt={addedItem.title} />
                    <h1>{addedItem.title}</h1>
                    <p>price:${addedItem.price}</p>
                    <button
                      className="btn-cart"
                      onClick={() => {
                        dispatch(removeItem(addedItem.id));
                        // console.log("you clicked me");
                      }}
                    >
                      DeleteProduct
                    </button>
                  </div>
                );
              })}
            </div>
          }
          {no_of_item > 0 ? (
            <div className="totalamount">
              <h2>Bill</h2>
              <h3>The total amount is:{sum}</h3>
              <h4>Total Quantity: {no_of_item}</h4>
              <p>Discount:5%</p>
              <p>Paying amount:{payingAmount}</p>
            </div>
          ) : (
            <></>
            // <div className="totalamount">
            //   <h2>Bill</h2>
            //   <h3>You have nothing in your cart</h3>
            // </div>
          )}
        </div>
      ) : (
        <h1 style={{ color: "greenyellow" }}>
          you have not added anything in your cart
        </h1>
      )}
    </>
  );
};

export default Cart;
