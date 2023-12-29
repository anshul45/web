import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    defaultProducts: [],
    allProducts: [],
  },
  reducers: {
    addAllProducts: (state, action) => {
      state.defaultProducts = action.payload;
      state.allProducts = action.payload;
    },
    searchProducts: (state, action) => {
      action.payload &&
        (state.allProducts = state.defaultProducts.filter((p) =>
          p.title.toLowerCase().includes(action.payload.toLowerCase())
        ));
    },
    lowToHigh: (state) => {
      state.allProducts = state.allProducts.sort((a, b) => a.price - b.price);
    },
    highToLow: (state) => {
      state.allProducts = state.allProducts.sort((a, b) => b.price - a.price);
    },
  },
});

export const { addAllProducts, searchProducts, lowToHigh, highToLow } =
  productSlice.actions;

export default productSlice.reducer;
