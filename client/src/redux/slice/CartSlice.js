import { createSlice } from "@reduxjs/toolkit";
import {toast} from "react-toastify"
const initialState = { products: [] };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddtoCart : (state, action)=> {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.Quantity += action.payload.Quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem : (state, action)=> {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      toast.error("Products Deleted successful", {
        icon: "🚀"
      });
    },
    resetCart : (state) => {
      state.products = [];
    },
  },
});

export const { AddtoCart, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
