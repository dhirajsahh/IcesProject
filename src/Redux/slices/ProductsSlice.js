import { createSlice } from "@reduxjs/toolkit";
const productSlice = createSlice({
  name: "productslice",
  initialState: {
    product: [],
  },
  reducers: {
    loadProducts: (state, action) => {
      state.product = action.payload;
    },
  },
});
export const { loadProducts } = productSlice.actions;
export default productSlice.reducer;
