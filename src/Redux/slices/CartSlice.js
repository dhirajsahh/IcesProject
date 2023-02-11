import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cartslice",
  initialState: {
    item: [],
  },
  reducers: {
    addedItem: (state, action) => {
      state.item.push(action.payload);
      // state.item = action.payload;
    },
    removeItem: (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
      // console.log(state.item);
      // console.log(typeof state.item);
    },
  },
});
export const { addedItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
