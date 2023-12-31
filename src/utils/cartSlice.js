import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartData = action.payload;
    },

    removeFromCart: (state, action) => {
      state.cartData = state.cartData.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
