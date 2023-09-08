import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import customTextSlice from "./features/product/customTextSlice";
import favoritesSlice from "./features/favorites/favoritesSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    customText: customTextSlice,
    favorites: favoritesSlice,
  },
});
