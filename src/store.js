import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import customTextSlice from "./features/product/customTextSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    customText: customTextSlice,
  },
});
