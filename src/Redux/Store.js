import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice.js";
import productReducer from "./slices/ProductsSlice.js";

export default configureStore({
  reducer: {
    product: productReducer,
    cart: CartSlice,
  },
});
